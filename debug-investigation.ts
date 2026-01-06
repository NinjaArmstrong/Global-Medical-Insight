
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

async function investigate() {
    console.log('--- Investigation Start ---');

    // 1. Check total count
    const { count, error: countErr } = await supabase.from('articles').select('*', { count: 'exact', head: true });
    console.log('Total articles in DB:', count);

    // 2. Fetch latest 20 articles raw
    const { data: articles, error } = await supabase
        .from('articles')
        .select('id, title, importance, category, japan_impact')
        .order('published_at', { ascending: false })
        .limit(20);

    if (error) {
        console.error('Error fetching articles:', error);
        return;
    }

    console.log(`Fetched ${articles.length} latest articles.`);

    let validCount = 0;
    articles.forEach((a, i) => {
        const strictChecks = {
            notPending: a.importance !== 'PENDING_SUMMARY',
            notPhase2: a.importance !== 'PHASE2_PENDING',
            notPhase3: a.importance !== 'PHASE3_PENDING',
            notSkipped: a.importance !== 'SKIPPED_MANUAL_LIMIT',
            notIrrelevant: a.importance !== 'IRRELEVANT',
            notAutoLocal: a.importance !== 'IRRELEVANT_AUTO_LOCAL',
            notError: a.importance !== 'ERROR_GEMINI',
            notUnprocessed: a.category !== 'Unprocessed',
            notAIUnavailable: !a.importance?.toLowerCase().includes('ai unavailable'),
            hasJapanImpact: !!a.japan_impact,
            notSkippedImpact: !a.japan_impact?.includes('AI処理スキップ'),
            hasNextAction: a.japan_impact?.toLowerCase().includes('next action')
        };

        const isValid = Object.values(strictChecks).every(v => v);
        if (isValid) validCount++;

        console.log(`\n[${i}] ${a.title.slice(0, 30)}...`);
        console.log(`Importance: ${a.importance}`);
        console.log(`Japan Impact (Preview): ${a.japan_impact?.slice(0, 50).replace(/\n/g, ' ')}...`);
        
        if (!isValid) {
            const failures = Object.entries(strictChecks)
                .filter(([_, pass]) => !pass)
                .map(([key]) => key);
            console.log('FAIL REASONS:', failures.join(', '));
        } else {
            console.log('STATUS: VALID (Will show on homepage)');
        }
    });

    console.log(`\n--- Summary ---`);
    console.log(`Valid Articles in top 20: ${validCount}`);
}

investigate();
