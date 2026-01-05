
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fs from 'fs';
dotenv.config({ path: '.env.local' });

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

async function debugTop30() {
    const { data: top30, error } = await supabase
        .from('articles')
        .select('id, title, importance, category, published_at')
        .order('published_at', { ascending: false })
        .limit(30);

    if (error) {
        fs.writeFileSync('debug_output.txt', `Error: ${error.message}`);
        return;
    }

    let output = `Fetched ${top30.length} articles.\n`;
    top30.forEach((a, i) => {
        output += `${i + 1}. [${a.importance}] ${a.title.slice(0, 40)}... (Pub: ${a.published_at})\n`;
    });

    fs.writeFileSync('debug_output.txt', output);
    console.log('Done writing debug_output.txt');
}

debugTop30();
