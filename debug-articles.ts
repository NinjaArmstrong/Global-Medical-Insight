
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

async function debug() {
    console.log('--- Debugging Valid Articles ---');

    // 1. Replicate actions.ts 'Valid' Count Logic
    const queryValidCount = supabase
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
        .not('importance', 'ilike', '%AI unavailable%');

    const { count: validCount, error: err1 } = await queryValidCount;
    console.log('Actions.ts Valid Count:', validCount, 'Error:', err1);

    // 2. Replicate page.tsx 'getArticles' Logic (Strict)
    const queryPage = supabase
        .from('articles')
        .select('id, title, importance, published_at')
        .neq('importance', 'PENDING_SUMMARY')
        .neq('importance', 'PHASE2_PENDING')
        .neq('importance', 'PHASE3_PENDING')
        .neq('importance', 'SKIPPED_MANUAL_LIMIT')
        .neq('importance', 'IRRELEVANT')
        .neq('importance', 'IRRELEVANT_AUTO_LOCAL')
        .neq('importance', 'ERROR_GEMINI')
        .neq('category', 'Unprocessed')
        .not('importance', 'ilike', '%AI unavailable%')
        .order('published_at', { ascending: false })
        .limit(30);

    const { data: pageData, error: err2 } = await queryPage;
    console.log('Page.tsx Returned Count:', pageData?.length, 'Error:', err2);

    if (pageData && pageData.length < 30) {
        console.log('--- First 5 items returned by Page.tsx ---');
        console.log(pageData.slice(0, 5));
    }

    // 3. Diagnosis: Why the difference?
    // Let's get ALL 'valid' articles and check their dates.
    const queryAllValid = supabase
        .from('articles')
        .select('id, importance, published_at')
        .neq('importance', 'PENDING_SUMMARY')
        .neq('importance', 'PHASE2_PENDING')
        .neq('importance', 'PHASE3_PENDING')
        .neq('importance', 'SKIPPED_MANUAL_LIMIT')
        .neq('importance', 'IRRELEVANT')
        .neq('importance', 'IRRELEVANT_AUTO_LOCAL')
        .neq('importance', 'ERROR_GEMINI')
        .neq('category', 'Unprocessed')
        .not('importance', 'ilike', '%AI unavailable%');

    const { data: allValid, error: err3 } = await queryAllValid;
    if (allValid) {
        console.log('Total Valid Articles fetched without limit:', allValid.length);
        const nullDates = allValid.filter(a => !a.published_at).length;
        console.log('Valid items with NULL published_at:', nullDates);
        console.log('Valid items with dates:', allValid.length - nullDates);
    }
}

debug();
