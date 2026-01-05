import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { processPendingArticles } from '../src/lib/newsUpdater';


async function main() {
    console.log('--- TEST RUN: Scenario Planner Persona (Persistent Mode) ---');
    console.log('Processing EXACTLY 1 article. Will retry until successful...');

    while (true) {
        try {
            const result = await processPendingArticles(1);

            // Log full result for debugging
            console.log(`[Attempt] Count: ${result.count}, Logs: ${result.logs.length}`);

            // Check if we hit a Rate Limit
            const logsStr = result.logs.join(' ');
            const isRateLimited = logsStr.includes('Rate Limit') || logsStr.includes('429') || logsStr.includes('Quota');

            if (isRateLimited) {
                console.log('⚠️ Rate Limit hit. Waiting 40s before retry...');
                await new Promise(r => setTimeout(r, 40000));
                continue;
            }

            if (result.count > 0) {
                console.log('✅ Article Processed Successfully!');
                console.log('Please check the Admin Dashboard.');
                break;
            }

            // If count is 0 and NO rate limit, it implies we just moved items between phases (e.g. Filtered/Translated) but didn't finish a Summary.
            // Or maybe the queue is empty.
            if (logsStr.includes('No pending articles')) {
                console.log('🛑 No pending articles found. Exiting.');
                break;
            }

            // Otherwise, we probably just did Phase 1 or Phase 2. We need to go again to get to Phase 3.
            console.log('ℹ️ Pipeline moved forward (Phase 1/2) but no final Summary yet. Continuing...');
            await new Promise(r => setTimeout(r, 2000));

        } catch (e: any) {
            console.error('Fatal Error:', e);
            if (e.message?.includes('429')) {
                console.log('⚠️ Rate Limit (Fatal Catch). Waiting 40s...');
                await new Promise(r => setTimeout(r, 40000));
                continue;
            }
            break;
        }
    }
}

main();
