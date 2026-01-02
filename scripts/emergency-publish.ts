
import * as dotenv from 'dotenv';
import path from 'path';
import fetch from 'node-fetch';

// 1. Configure Env
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// 2. Patch Fetch
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
    console.log('🚨 STARTING EMERGENCY PUBLISH (Bypassing AI)...');

    const { supabase } = require('../src/lib/supabase');

    // 1. Fetch ALL pending items (Phase 1 or Phase 2)
    const { data: pendingItems, error: fetchErr } = await supabase
        .from('articles')
        .select('*')
        .in('importance', ['PENDING_SUMMARY', 'PHASE2_PENDING', 'PHASE3_PENDING', 'ERROR_GEMINI']);

    if (fetchErr) {
        console.error('Fetch Error:', fetchErr);
        process.exit(1);
    }

    if (!pendingItems || pendingItems.length === 0) {
        console.log('✅ No pending items found. Site is up to date.');
        return;
    }

    console.log(`Found ${pendingItems.length} pending items. Publishing RAW...`);

    let processed = 0;
    for (const item of pendingItems) {
        // Use English title if Japanese title is missing or same as original
        const displayTitle = (item.title && item.title !== 'No Title') ? item.title : item.original_title;

        // Extract raw description from summary_points if explicitly stored there
        let rawDesc = '';
        if (Array.isArray(item.summary_points) && item.summary_points.length > 0) {
            rawDesc = item.summary_points[0];
        }

        const updatePayload = {
            title: displayTitle,
            // If already translated, keep it. If not, use English.
            importance: '(AI Unavailable) Raw News Feed', // This makes it NOT 'PENDING_SUMMARY', so it shows up
            summary_points: [rawDesc || 'No summary available.'],
            japan_impact: 'AI Analysis Unavailable due to API Rate Checks.',
            // Defaulting category/region to ensure visibility
            category: item.category === 'Unprocessed' ? 'Other' : item.category,
            region: (item.region && item.region[0] === 'World') ? ['Africa', 'Middle East', 'South Asia'] : item.region,
            // Broaden region to ensure it hits filters if 'World' isn't selected
        };

        const { error: upErr } = await supabase
            .from('articles')
            .update(updatePayload)
            .eq('id', item.id);

        if (upErr) {
            console.log(`❌ Failed ${item.original_title?.slice(0, 10)}: ${upErr.message}`);
        } else {
            console.log(`✅ Published: ${displayTitle.slice(0, 30)}...`);
            processed++;
        }
    }

    console.log(`\n🎉 Emergency Publish Complete. ${processed} articles are now live.`);
}

run();
