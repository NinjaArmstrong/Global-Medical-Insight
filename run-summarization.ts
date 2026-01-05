
import dotenv from 'dotenv';
import path from 'path';

// Load .env.local immediately
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function run() {
    console.log('--- Starting Manual Summarization Loop (Dynamic Import) ---');

    console.log('Verifying Env Vars:');
    console.log('URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? 'FOUND' : 'MISSING');
    console.log('KEY:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'FOUND' : 'MISSING');
    console.log('GEMINI:', process.env.GEMINI_API_KEY ? 'FOUND' : 'MISSING');

    if (!process.env.GEMINI_API_KEY || !process.env.NEXT_PUBLIC_SUPABASE_URL) {
        console.error('Critical Env Vars Missing. Exiting.');
        process.exit(1);
    }

    // Dynamic import ensures these modules read the process.env WE JUST SET
    const { processPendingArticles } = await import('./src/lib/newsUpdater');
    const { supabase } = await import('./src/lib/supabase');

    let consecutiveZeroes = 0;
    let loopCount = 0;

    while (true) {
        loopCount++;
        console.log(`\n--- Loop #${loopCount} ---`);

        try {
            // Process 1 item at a time (Stable Mode)
            const result = await processPendingArticles(1);

            const logsStr = result.logs?.join(' ') || '';
            console.log(`Processed: ${result.count}, Success: ${result.success}`);
            if (result.logs && result.logs.length > 0) {
                console.log('Logs:', result.logs);
            }

            // Rate Limit Handling
            if (logsStr.includes('429') || logsStr.includes('Rate Limit') || logsStr.includes('Quota')) {
                console.log('Rate Limit detected! Waiting 60 seconds...');
                await new Promise(r => setTimeout(r, 60000));
                continue;
            }

            if (result.count > 0) {
                consecutiveZeroes = 0;
                await new Promise(r => setTimeout(r, 6000));
            } else {
                consecutiveZeroes++;
                console.log(`Zero processed. Consecutive: ${consecutiveZeroes}`);

                // Double check pending count
                const { count } = await supabase
                    .from('articles')
                    .select('*', { count: 'exact', head: true })
                    .in('importance', ['PENDING_SUMMARY', 'PHASE2_PENDING', 'PHASE3_PENDING']);

                console.log(`Remaining Pending in DB: ${count}`);

                if (count === 0) {
                    console.log('No more pending articles in DB. Done!');
                    break;
                }

                if (consecutiveZeroes > 5) {
                    console.log('Stuck loop? Exiting.');
                    break;
                }

                await new Promise(r => setTimeout(r, 2000));
            }

        } catch (e: any) {
            console.error('Loop Error:', e.message);
            await new Promise(r => setTimeout(r, 5000));
        }
    }

    console.log('--- Summarization Complete ---');
    process.exit(0);
}

run();
