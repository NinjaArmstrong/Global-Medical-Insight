
import * as dotenv from 'dotenv';
import path from 'path';
import fetch from 'node-fetch';

// 1. Configure Env FIRST
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// 2. Patch Fetch
if (!global.fetch) {
    (global as any).fetch = fetch;
    (global as any).Headers = (fetch as any).Headers;
    (global as any).Request = (fetch as any).Request;
    (global as any).Response = (fetch as any).Response;
} else {
    // Force overwrite for stability
    (global as any).fetch = fetch;
    (global as any).Headers = (fetch as any).Headers;
    (global as any).Request = (fetch as any).Request;
    (global as any).Response = (fetch as any).Response;
}

// 3. Dynamic Import Supabase (after Env is loaded)
async function run() {
    console.log('🔍 Checking Latest Processed Articles...');

    const { supabase } = require('../src/lib/supabase');

    // Get Total Count of Non-Pending
    const { count, error: countErr } = await supabase
        .from('articles')
        .select('*', { count: 'exact', head: true })
        .neq('importance', 'PENDING_SUMMARY');

    if (countErr) {
        console.error('Count Error:', countErr);
    } else {
        console.log(`\n📊 Total Processed Count: ${count}`);
    }

    // Get Top 5 Recent
    const { data, error } = await supabase
        .from('articles')
        .select('title, importance, created_at, published_at')
        .neq('importance', 'PENDING_SUMMARY')
        .order('created_at', { ascending: false }) // Check recently created logic
        .limit(5);

    if (error) {
        console.error('Fetch Error:', error);
    } else {
        console.log('\n🕒 Latest 5 Processed Articles:');
        if (data && data.length > 0) {
            data.forEach((a: any) => {
                console.log(`- [${a.created_at || 'No Date'}] ${a.title?.substring(0, 40)}... (${a.importance?.substring(0, 10)}...)`);
            });
        } else {
            console.log('(No processed articles found)');
        }
    }
}

run();
