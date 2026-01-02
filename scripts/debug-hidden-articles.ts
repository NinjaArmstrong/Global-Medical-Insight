
import * as dotenv from 'dotenv';
import path from 'path';

// Native fetch is available in Node 20
// import fetch from 'node-fetch';

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

async function run() {
    console.log('🔍 Inspecting Hidden Articles...');
    const { supabase } = require('../src/lib/supabase');

    // 1. Get stats of "Processed" (Not PENDING_SUMMARY)
    const { data: allProcessed, error } = await supabase
        .from('articles')
        .select('*')
        .neq('importance', 'PENDING_SUMMARY')
        .order('published_at', { ascending: false });

    if (error) {
        console.error(error);
        return;
    }

    console.log(`\nTotal 'Processed' in DB: ${allProcessed.length}`);

    // 2. Apply page.tsx filters manually
    const visible = allProcessed.filter((a: any) =>
        a.category !== 'Unprocessed' &&
        !a.importance.toLowerCase().includes('ai unavailable')
    );

    const hidden = allProcessed.filter((a: any) =>
        a.category === 'Unprocessed' ||
        a.importance.toLowerCase().includes('ai unavailable')
    );

    console.log(`Visible on Homepage: ${visible.length}`);
    console.log(`Hidden by filters: ${hidden.length}`);

    if (hidden.length > 0) {
        console.log('\n--- Sample Hidden Articles ---');
        hidden.slice(0, 5).forEach((a: any) => {
            console.log(`[ID: ${a.id}] Title: ${a.title.substring(0, 30)}...`);
            console.log(`  Category: ${a.category}`);
            console.log(`  Importance: ${a.importance.substring(0, 50)}...`);
            console.log(`  Summary Points: ${a.summary_points?.length || 0}`);
            console.log('---');
        });
    }
}

run();
