
import { supabase } from '../src/lib/supabase';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

async function main() {
    console.log('--- RESETTING OLD-STYLE ARTICLES ---');

    // Find articles with "名指し警告" (Old Persona)
    const { data: articles, error } = await supabase
        .from('articles')
        .select('id, title')
        .ilike('importance', '%名指し警告%');

    if (error) {
        console.error('Error finding articles:', error);
        return;
    }

    console.log(`Found ${articles.length} articles with OLD persona.`);

    if (articles.length > 0) {
        const ids = articles.map(a => a.id);
        const { error: updateError } = await supabase
            .from('articles')
            .update({
                importance: 'PHASE3_PENDING',
                japan_impact: null // Clear previous impact so it doesn't leak
            })
            .in('id', ids);

        if (updateError) {
            console.error('Error resetting:', updateError);
        } else {
            console.log(`✅ Successfully reset ${articles.length} articles to PHASE3_PENDING.`);
        }
    } else {
        console.log('No old-style articles found. Clean slate!');
    }
}

main();
