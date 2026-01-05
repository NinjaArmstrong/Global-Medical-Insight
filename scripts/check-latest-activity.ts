import dotenv from 'dotenv';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function checkLatestActivity() {
    console.log('--- Checking Latest Database Activity ---');

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Check recently updated articles (last 10 mins)
    const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000).toISOString();

    const { data: updated, error } = await supabase
        .from('articles')
        .select('id, title, importance, created_at')
        .gt('created_at', tenMinutesAgo)
        .order('created_at', { ascending: false })
        .limit(5);

    if (error) {
        console.error('DB Error:', error.message);
        return;
    }

    if (!updated || updated.length === 0) {
        console.log('No articles updated in the last 10 minutes.');
        console.log('Note: Setup time + Fetch time might take a few minutes before DB writes occur.');
    } else {
        console.log(`Found ${updated.length} recently updated articles:`);
        updated.forEach(a => {
            console.log(`- [${new Date(a.created_at).toLocaleTimeString()}] ${a.title?.substring(0, 30)}... (${a.importance?.substring(0, 20)}...)`);
        });
    }

    // Also check total count to see if it's "live"
    const { count } = await supabase
        .from('articles')
        .select('*', { count: 'exact', head: true });

    console.log(`Total Articles in DB: ${count}`);
}

checkLatestActivity();
