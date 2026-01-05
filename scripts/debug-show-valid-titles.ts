
import { supabase } from '../src/lib/supabase';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

async function main() {
    console.log('--- VALID ARTICLES DUMP ---');

    const { data: articles, error } = await supabase
        .from('articles')
        .select('id, title, importance, japan_impact, created_at')
        .not('japan_impact', 'is', null)
        .neq('japan_impact', '')
        .ilike('japan_impact', '%Next Action%') // Antigravity filter
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error:', error);
        return;
    }

    console.log(`Found ${articles.length} valid articles.`);
    articles.forEach((a, i) => {
        console.log(`[${i + 1}] Title: ${a.title}`);
        console.log(`    Impact: ${a.japan_impact?.slice(0, 50)}...`);
        console.log(`    Importance Top: ${a.importance?.slice(0, 50)}...`);
        console.log('---------------------------------------------------');
    });
}

main();
