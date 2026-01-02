
import * as dotenv from 'dotenv';
import path from 'path';
import fetch from 'node-fetch';

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Patch Fetch
if (!global.fetch) {
    (global as any).fetch = fetch;
    (global as any).Headers = (fetch as any).Headers;
    (global as any).Request = (fetch as any).Request;
    (global as any).Response = (fetch as any).Response;
} else {
    (global as any).fetch = fetch;
    (global as any).Headers = (fetch as any).Headers;
    (global as any).Request = (fetch as any).Request;
    (global as any).Response = (fetch as any).Response;
}

async function run() {
    console.log('🔄 Resetting Failed Articles...');
    const { supabase } = require('../src/lib/supabase');

    // Find items with "AI unavailable"
    const { data: failedItems, error: fetchError } = await supabase
        .from('articles')
        .select('id, title')
        .ilike('importance', '%AI unavailable%');

    if (fetchError) {
        console.error('Fetch Error:', fetchError);
        process.exit(1);
    }

    if (!failedItems || failedItems.length === 0) {
        console.log('✅ No failed items found.');
        process.exit(0);
    }

    console.log(`Found ${failedItems.length} failed items. Resetting...`);

    // Update them back to 'PENDING_SUMMARY'
    const { error: updateError } = await supabase
        .from('articles')
        .update({
            importance: 'PENDING_SUMMARY',
            summary_points: [], // Clear old garbage
            japan_impact: '',
        })
        .ilike('importance', '%AI unavailable%');

    if (updateError) {
        console.error('Update Error:', updateError);
        process.exit(1);
    }

    console.log('✅ Successfully reset failed articles.');
}

run();
