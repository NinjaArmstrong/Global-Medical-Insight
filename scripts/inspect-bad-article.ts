
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

async function run() {
    const { supabase } = require('../src/lib/supabase');

    // Search for the bad article found by browser
    const { data, error } = await supabase
        .from('articles')
        .select('*')
        .ilike('title', '%Behavioral Health Care%')
        .limit(1);

    if (error) {
        console.error(error);
        return;
    }

    console.log(`Found ${data.length} articles.`);

    // Filter locally to find the one we saw
    const target = data.find((a: any) => a.title.includes('Behavioral') || a.summary_points?.[0]?.includes('Behavioral'));

    if (target) {
        console.log('--- TARGET ARTICLE ---');
        console.log('ID:', target.id);
        console.log('Title:', target.title);
        console.log('Category:', target.category);
        console.log('Importance:', target.importance);
        console.log('Summary Points:', target.summary_points);
        console.log('Japan Impact:', target.japan_impact);
    } else {
        console.log('Could not find exact match in first 5. Dumping all 5 to check fields.');
        data.forEach((a: any) => {
            console.log(`[${a.title.slice(0, 20)}...] Cat: ${a.category}, Imp: ${a.importance}`);
        });
    }
}

run();
