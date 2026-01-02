
import * as dotenv from 'dotenv';
import path from 'path';

// import fetch from 'node-fetch'; // Native in Node 20

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

async function run() {
    console.log('🚀 Starting Batch Fill to reach 30 Articles...');
    const { supabase } = require('../src/lib/supabase');
    const { processPendingArticles } = require('../src/lib/newsUpdater');

    // Helper to get count
    async function getVisibleCount() {
        // Must match page.tsx filter logic
        const { data, error } = await supabase
            .from('articles')
            .select('*')
            .neq('importance', 'PENDING_SUMMARY')
            .neq('category', 'Unprocessed')
            .not('importance', 'ilike', '%AI unavailable%');

        if (error) return 0;
        return data.length;
    }

    let initialCount = await getVisibleCount();
    console.log(`Initial Visible Count: ${initialCount}`);

    if (initialCount >= 30) {
        console.log('✅ Already have 30+ articles. No action needed.');
        return;
    }

    let currentCount = initialCount;
    let cycles = 0;
    const MAX_CYCLES = 50; // Safety break

    while (currentCount < 30 && cycles < MAX_CYCLES) {
        cycles++;
        console.log(`\n--- Cycle ${cycles} (Current: ${currentCount}/30) ---`);

        try {
            const res = await processPendingArticles(1);
            console.log(`Processed:`, res.logs);

            // Wait to respect rate limits (Gemini Free Tier is 15 RPM, approx 1 req / 4 sec)
            // But we do multiple calls inside processPendingArticles. Let's wait 30s safe.
            await new Promise(r => setTimeout(r, 30000));

            const newCount = await getVisibleCount();
            if (newCount > currentCount) {
                console.log(`🎉 Count increased! ${currentCount} -> ${newCount}`);
                currentCount = newCount;
            } else {
                console.log(`(Count steady at ${currentCount})`);
            }

        } catch (e: any) {
            console.error('Cycle Error:', e.message);
            await new Promise(r => setTimeout(r, 10000));
        }
    }

    console.log(`\n🏁 Finished. Final Count: ${currentCount}`);
}

run();
