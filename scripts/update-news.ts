
import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Native fetch is available in Node 16+
// import fetch from 'node-fetch'; 


async function run() {
    console.log('🚀 Starting Automated Weekly News Update...');

    // Dynamic import
    const { fetchAndSaveRawArticles, processPendingArticles } = await import('../src/lib/newsUpdater');
    const { supabase } = await import('../src/lib/supabase');


    // CRITICAL: Validate Cloud Secrets immediately
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || !process.env.NEWS_API_KEY || !process.env.GEMINI_API_KEY) {
        console.error('❌ Cloud Configuration Error: One or more Secrets are missing.');
        console.error('Required: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEWS_API_KEY, GEMINI_API_KEY');
        process.exit(1);
    }

    // 🔒 LOCK MECHANISM 🔒
    const fs = await import('fs');
    const lockFile = path.resolve(__dirname, 'update.lock');

    if (fs.existsSync(lockFile)) {
        // Check if stale (> 2 hours)
        const stats = fs.statSync(lockFile);
        const ageMs = Date.now() - stats.mtimeMs;
        if (ageMs < 60 * 1000) { // 1 minute stale check for safety debugging
            console.error('❌ Update script is already running (Lock file exists). Aborting.');
            console.error(`Lock file age: ${Math.floor(ageMs / 1000)}s`);
            process.exit(1);
        } else {
            console.warn('⚠️ Stale lock file found. Removing and proceeding...');
            fs.unlinkSync(lockFile);
        }
    }

    // Create lock
    fs.writeFileSync(lockFile, new Date().toISOString());

    // Ensure cleanup on exit
    const cleanup = () => {
        if (fs.existsSync(lockFile)) {
            fs.unlinkSync(lockFile);
            console.log('🔒 Lock file removed.');
        }
    };
    process.on('exit', cleanup);
    process.on('SIGINT', () => { cleanup(); process.exit(); });
    process.on('uncaughtException', (e) => { console.error(e); cleanup(); process.exit(1); });

    // State variables (hoisted for logging)
    const startTime = Date.now();
    let totalProcessed = 0;
    let totalRateLimits = 0;
    let consecutiveRateLimits = 0;

    try {
        // Phase 1: Fetch
        console.log('--- Phase 1: Fetching ---');
        const fetchRes = await fetchAndSaveRawArticles(150);
        console.log(`Fetched: ${fetchRes.count} new items.`);

        // Phase 2: Loop Summarize (Max 10 minutes or until done)
        console.log('--- Phase 2: Summarizing ---');
        // const startTime = Date.now(); // REMOVED (Hoisted)
        const TIMEOUT_MS = 60 * 60 * 1000;
        const MAX_CONSECUTIVE_RATE_LIMITS = 50;

        let loopCount = 0;
        // let totalProcessed = 0; // REMOVED (Hoisted)
        // let totalRateLimits = 0; // REMOVED (Hoisted)
        while (Date.now() - startTime < TIMEOUT_MS * 24) { // Run for up to 24 hours
            loopCount++;

            // Update Lock Touch
            fs.writeFileSync(lockFile, new Date().toISOString());

            // Check pending count
            const { count: pendingCount } = await supabase
                .from('articles')
                .select('*', { count: 'exact', head: true })
                .in('importance', ['PENDING_SUMMARY', 'PHASE2_PENDING', 'PHASE3_PENDING']);

            if (!pendingCount || pendingCount === 0) {
                console.log('✅ All articles processed.');
                break;
            }

            console.log(`Loop ${loopCount}: ${pendingCount} items pending...`);

            // Process batch of 1 (to be safe/granular)
            const result = await processPendingArticles(1);
            if (result.success) totalProcessed += result.count;

            // Check for Rate Limit in logs
            const logsStr = result.logs.join(' ');
            if (logsStr.includes('429') || logsStr.includes('Rate Limit')) {
                consecutiveRateLimits++;
                totalRateLimits++;
                console.log(`⚠️ Rate Limit detected (${consecutiveRateLimits}/${MAX_CONSECUTIVE_RATE_LIMITS}).`);

                // Exponential backoff logic or just long wait
                const waitMs = 300000; // 5 minutes
                console.log(`   Waiting ${waitMs / 1000}s to cool down...`);
                await new Promise(r => setTimeout(r, waitMs));
            } else if (result.count === 0) {
                // Zero count but items exist? Maybe error?
                console.log('⚠️ No items processed in this batch. Logs:', result.logs);
                // Also count as potential failure if it happens too often without progress?
                // For now, keep it simple.
                await new Promise(r => setTimeout(r, 5000));
            } else {
                // Success - Reset Counter
                consecutiveRateLimits = 0;
                await new Promise(r => setTimeout(r, 60000)); // 60s delay for ultra safety
            }
        }

    } catch (e) {
        console.error('❌ Update Failed:', e);

        // Log Failure
        const fs = await import('fs');
        const logPath = path.resolve(__dirname, '../logs/api-history.jsonl');
        const logEntry = {
            timestamp: new Date().toISOString(),
            status: 'FAILED',
            error: e instanceof Error ? e.message : String(e),
            rate_limit_hits: 0 // meaningful data might be lost here without broader scope
        };
        try { fs.appendFileSync(logPath, JSON.stringify(logEntry) + '\n'); } catch { }

        process.exit(1);
    } finally {
        cleanup();
    }

    // --- LOGGING ---
    const endTime = Date.now();
    const durationSeconds = Math.floor((endTime - startTime) / 1000); // Approximate since startTime is reset in loop, but good enough for now

    const logEntry = {
        timestamp: new Date().toISOString(),
        duration_seconds: durationSeconds,
        items_processed: totalProcessed,
        rate_limit_hits: totalRateLimits,
        status: 'SUCCESS'
    };

    // Better tracking variable needs to be lifted up if we want total processed across all loops
    // But since we exit process.exit(1) on failure, we need a robust way.
    // Let's just append a simple log here for success.

    try {
        const logPath = path.resolve(__dirname, '../logs/api-history.jsonl');
        // Simple append
        fs.appendFileSync(logPath, JSON.stringify(logEntry) + '\n');
        console.log(`📝 Stats logged to ${logPath}`);
    } catch (logErr) {
        console.error('Failed to write log:', logErr);
    }

    console.log('🎉 Update Workflow Complete.');
    process.exit(0);
}

run();
