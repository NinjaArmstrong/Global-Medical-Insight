
import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { performance } from 'perf_hooks';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

async function run() {
    console.log('⏱️ Benchmarking Summarization Performance...');

    // Dynamic import
    const { processPendingArticles } = await import('../src/lib/newsUpdater');
    const { supabase } = await import('../src/lib/supabase');

    // Setup: Ensure at least one pending article exists
    const { count } = await supabase.from('articles').select('*', { count: 'exact', head: true }).eq('importance', 'PENDING_SUMMARY');
    if (!count || count === 0) {
        console.log('⚠️ No pending articles. Cannot benchmark.');
        // fetch one if needed? No, purely test existing.
        return;
    }

    const start = performance.now();

    try {
        console.log('⚡ Processing 1 article...');
        const result = await processPendingArticles(1);

        const end = performance.now();
        const duration = (end - start) / 1000; // seconds

        console.log(`✅ Result:`, result);
        console.log(`⏱️ Duration: ${duration.toFixed(2)} seconds`);

        if (duration > 9.0) {
            console.error('❌ DANGER: Execution took too long (> 9s). High risk of Vercel Timeout.');
            process.exit(1);
        } else if (duration > 5.0) {
            console.warn('⚠️ WARNING: Execution is close to limit (> 5s).');
        } else {
            console.log('✅ PASS: Execution is well within Vercel limits (< 5s).');
        }

    } catch (e) {
        console.error('❌ Error during benchmark:', e);
        process.exit(1);
    }
}

run();
