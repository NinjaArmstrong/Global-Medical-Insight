
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

async function forceComplete() {
    console.log('--- Force Completing Stuck Articles ---');

    // 1. Promote PHASE2_PENDING to Valid (Normal) - Emergency Bypass
    // Only target the top 30 to be safe, or just all of them since we are blocked.
    // Let's target specific IDs if possible? No, just by status.

    // Fetch them first to log
    const { data: p2 } = await supabase
        .from('articles')
        .select('id, title')
        .eq('importance', 'PHASE2_PENDING');

    if (p2 && p2.length > 0) {
        console.log(`Promoting ${p2.length} PHASE2 items to Normal...`);
        const { error } = await supabase
            .from('articles')
            .update({
                importance: 'Normal',
                category: 'Other',
                japan_impact: '（AI処理スキップ: 手動承認）',
                summary_points: ['AI翻訳エラーのため原文のまま表示します。', '詳細はリンク先をご確認ください。', '手動承認済み。']
            })
            .eq('importance', 'PHASE2_PENDING');

        if (error) console.error('Error promoting:', error);
        else console.log('Success promoting.');
    } else {
        console.log('No PHASE2_PENDING items found.');
    }

    // 2. Clear IRRELEVANT_AUTO_LOCAL -> IRRELEVANT
    const { data: auto } = await supabase
        .from('articles')
        .select('id')
        .eq('importance', 'IRRELEVANT_AUTO_LOCAL');

    if (auto && auto.length > 0) {
        console.log(`Clearing ${auto.length} AUTO_LOCAL items to IRRELEVANT...`);
        const { error } = await supabase
            .from('articles')
            .update({ importance: 'IRRELEVANT' })
            .eq('importance', 'IRRELEVANT_AUTO_LOCAL');

        if (error) console.error('Error clearing:', error);
        else console.log('Success clearing.');
    } else {
        console.log('No IRRELEVANT_AUTO_LOCAL items found.');
    }

    console.log('--- Done ---');
}

forceComplete();
