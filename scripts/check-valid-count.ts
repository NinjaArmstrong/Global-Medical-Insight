import dotenv from 'dotenv';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function checkValidCount() {
    console.log('--- Checking Valid Antigravity Articles ---');

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Matches the filter in page.tsx
    const { count, error } = await supabase
        .from('articles')
        .select('*', { count: 'exact', head: true })
        .neq('importance', 'PENDING_SUMMARY')
        .neq('importance', 'PHASE2_PENDING')
        .neq('importance', 'PHASE3_PENDING')
        .neq('importance', 'SKIPPED_MANUAL_LIMIT')
        .neq('importance', 'IRRELEVANT')
        .neq('importance', 'IRRELEVANT_AUTO_LOCAL')
        .neq('importance', 'ERROR_GEMINI')
        .neq('category', 'Unprocessed')
        .not('importance', 'ilike', '%AI unavailable%')
        .neq('japan_impact', '')
        .not('japan_impact', 'is', null)
        .not('japan_impact', 'ilike', '%AI処理スキップ%')
        // [Antigravity Filter]
        .ilike('japan_impact', '%Next Action%');

    if (error) {
        console.error('DB Error:', error.message);
    } else {
        console.log(`Valid Antigravity Articles (Production Ready): ${count}`);
    }

    // Also check pending
    const { count: pending } = await supabase
        .from('articles')
        .select('*', { count: 'exact', head: true })
        .in('importance', ['PENDING_SUMMARY', 'PHASE2_PENDING', 'PHASE3_PENDING']);

    console.log(`Pending Processing: ${pending}`);
}

checkValidCount();
