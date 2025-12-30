
import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

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

    try {
        // Phase 1: Fetch
        console.log('--- Phase 1: Fetching ---');
        const fetchRes = await fetchAndSaveRawArticles(30);
        console.log(`Fetched: ${fetchRes.count} new items.`);

        // Phase 2: Loop Summarize (Max 10 minutes or until done)
        console.log('--- Phase 2: Summarizing ---');
        const startTime = Date.now();
        const TIMEOUT_MS = 60 * 60 * 1000; // 60 mins (Extended for slow Free Tier)

        let loopCount = 0;
        while (Date.now() - startTime < TIMEOUT_MS) {
            loopCount++;

            // Check pending count
            const { count: pendingCount } = await supabase
                .from('articles')
                .select('*', { count: 'exact', head: true })
                .eq('importance', 'PENDING_SUMMARY');

            if (!pendingCount || pendingCount === 0) {
                console.log('✅ All articles processed.');
                break;
            }

            console.log(`Loop ${loopCount}: ${pendingCount} items pending...`);

            // Process batch of 1 (to be safe/granular)
            const result = await processPendingArticles(1);

            // Check for Rate Limit in logs
            const logsStr = result.logs.join(' ');
            if (logsStr.includes('429') || logsStr.includes('Rate Limit')) {
                console.log('⚠️ Rate Limit detected. Waiting 60s...');
                await new Promise(r => setTimeout(r, 60000));
            } else if (result.count === 0) {
                // Zero count but items exist? Maybe error?
                console.log('⚠️ No items processed in this batch. Waiting 5s...');
                await new Promise(r => setTimeout(r, 5000));
            } else {
                // Success, wait small delay
                await new Promise(r => setTimeout(r, 2000));
            }
        }

    } catch (e) {
        console.error('❌ Update Failed:', e);
        process.exit(1);
    }

    console.log('🎉 Update Workflow Complete.');
    process.exit(0);
}

run();
