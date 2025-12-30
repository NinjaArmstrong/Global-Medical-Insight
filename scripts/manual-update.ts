import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

async function run() {
    console.log('🚀 Starting manual update verification...');

    // Dynamic import to ensure ENV is loaded first
    const { fetchAndSaveRawArticles, processPendingArticles } = await import('../src/lib/newsUpdater');

    try {
        console.log('Step 1: Fetching Raw Articles...');
        const fetchResult = await fetchAndSaveRawArticles(3);
        console.log(`Fetched: ${fetchResult.count} new items (Total fetched: ${fetchResult.totalFetched})`);
        if (fetchResult.logs.length) console.log('Fetch Logs:', fetchResult.logs.slice(0, 3));

        if (fetchResult.count > 0 || (await import('../src/lib/supabase')).supabase.from('articles').select('count').eq('importance', 'PENDING_SUMMARY').then(r => (r.count || 0) > 0)) {
            console.log('Step 2: Processing Pending Articles...');
            const summaryResult = await processPendingArticles(3);
            console.log(`Summarized: ${summaryResult.count} items.`);
            if (summaryResult.logs.length) console.log('Summary Logs:', summaryResult.logs.slice(0, 3));
        } else {
            console.log('No pending articles to summarize.');
        }

    } catch (error) {
        console.error('❌ Script failed:', error);
    }
}

run();
