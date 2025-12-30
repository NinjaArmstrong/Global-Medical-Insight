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
    const { supabase } = await import('../src/lib/supabase');

    try {
        console.log('Step 1: Fetching Raw Articles...');
        const fetchResult = await fetchAndSaveRawArticles(3);
        console.log(`Fetched: ${fetchResult.count} new items (Total fetched: ${fetchResult.totalFetched})`);

        // Simple check for pending items
        const { count: pendingCount } = await supabase
            .from('articles')
            .select('count', { count: 'exact', head: true })
            .eq('importance', 'PENDING_SUMMARY');

        console.log(`Pending Items in DB: ${pendingCount}`);

        if ((fetchResult.count && fetchResult.count > 0) || (pendingCount && pendingCount > 0)) {
            console.log('Step 2: Processing Pending Articles...');
            const summaryResult = await processPendingArticles(3);
            console.log(`Summarized: ${summaryResult.count} items.`);
        } else {
            console.log('No pending articles to summarize.');
        }

    } catch (error) {
        console.error('❌ Script failed:', error);
    }
}

run();
