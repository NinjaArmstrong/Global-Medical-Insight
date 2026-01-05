import dotenv from 'dotenv';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function recycleArticles() {
    console.log('--- Recycling Articles for Antigravity Processing ---');

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // 1. Recycle SKIPPED_MANUAL_LIMIT (Pure gold, never processed)
    const { data: skipped, error: e1 } = await supabase
        .from('articles')
        .update({
            importance: 'PENDING_SUMMARY',
            summary_points: null,
            japan_impact: null
        })
        .eq('importance', 'SKIPPED_MANUAL_LIMIT')
        .select();

    if (e1) console.error('Error recycling SKIPPED:', e1.message);
    else console.log(`♻️ Recycled ${skipped?.length || 0} SKIPPED items.`);

    // 2. Recycle Old "DONE_OTHER" articles (Processed with old logic)
    // Identify by checking if they DO NOT have 'Next Action' in japan_impact and are NOT pending/irrelevant
    // This query is a bit complex, let's just grab ID's first.

    // We want to recycle everything that is NOT:
    // - PENDING_SUMMARY
    // - PHASE2_PENDING
    // - PHASE3_PENDING
    // - IRRELEVANT
    // - IRRELEVANT_AUTO_LOCAL
    // - ERROR_GEMINI
    // - AND does NOT contain 'Next Action' (The new valid ones)

    const { data: candidates } = await supabase
        .from('articles')
        .select('id, japan_impact, importance')
        .not('importance', 'in', '("PENDING_SUMMARY","PHASE2_PENDING","PHASE3_PENDING","IRRELEVANT","IRRELEVANT_AUTO_LOCAL","ERROR_GEMINI")');

    const toRecycleIds = candidates?.filter(c => {
        const isNew = c.japan_impact && (c.japan_impact.includes('Next Action') || c.japan_impact.includes('提言'));
        return !isNew;
    }).map(c => c.id) || [];

    if (toRecycleIds.length > 0) {
        console.log(`♻️ Recycling ${toRecycleIds.length} OLD format articles...`);
        const { error: e2 } = await supabase
            .from('articles')
            .update({
                importance: 'PENDING_SUMMARY',
                summary_points: null,
                japan_impact: null,
                // Reset category/region too? Maybe keep them to help phase 1? 
                // Actually Phase 1 uses gemini to filter. Let's reset purely.
                category: 'Unprocessed'
            })
            .in('id', toRecycleIds);

        if (e2) console.error('Error recycling OLD:', e2.message);
        else console.log('✅ Old articles reset.');
    } else {
        console.log('No OLD format articles found to recycle.');
    }
}

recycleArticles();
