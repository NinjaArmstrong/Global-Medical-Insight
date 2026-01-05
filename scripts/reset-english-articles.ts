import dotenv from 'dotenv';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function resetEnglishArticles() {
    console.log('--- Resetting English Articles to PHASE3_PENDING ---');

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Find articles that contain the English header "Japan Impact Analysis" in the importance field
    // The new prompt uses "日本企業への".
    const { data: targetArticles, error } = await supabase
        .from('articles')
        .select('id, title, importance')
        .ilike('importance', '%Japan Impact Analysis%');

    if (error) {
        console.error('Error finding articles:', error);
        return;
    }

    if (!targetArticles || targetArticles.length === 0) {
        console.log('No articles found with English "Japan Impact Analysis" header.');
        return;
    }

    console.log(`Found ${targetArticles.length} English articles to reset:`);
    targetArticles.forEach(a => console.log(`- ${a.title}`));

    const ids = targetArticles.map(a => a.id);

    // Reset them to PHASE3_PENDING
    const { error: updateError } = await supabase
        .from('articles')
        .update({
            importance: 'PHASE3_PENDING',
            summary_points: null,
            japan_impact: null // Clear this to be safe
        })
        .in('id', ids);

    if (updateError) {
        console.error('Error resetting articles:', updateError);
    } else {
        console.log('✅ Successfully reset articles to PHASE3_PENDING.');
        console.log('Please run the update script immediately to re-process them.');
    }
}

resetEnglishArticles();
