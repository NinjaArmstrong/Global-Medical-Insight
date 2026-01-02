
import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

// Load env manualy
const envPath = path.resolve('C:/Dev/20251230soft/.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const envConfig: Record<string, string> = {};
envContent.split('\n').forEach(line => {
    const [key, value] = line.split('=');
    if (key && value) {
        envConfig[key.trim()] = value.trim();
    }
});

const supabaseUrl = envConfig['NEXT_PUBLIC_SUPABASE_URL'];
const supabaseKey = envConfig['NEXT_PUBLIC_SUPABASE_ANON_KEY'];

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing URL or Key in .env.local');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
    console.log('--- Diagnosing Articles ---');
    const { data, error } = await supabase
        .from('articles')
        .select('id, title, importance, published_at');

    if (error) {
        console.error('DB Error:', error);
        return;
    }

    console.log(`Total Articles: ${data?.length}`);
    const counts: Record<string, number> = {};
    data?.forEach(a => {
        const imp = a.importance || 'NULL';
        counts[imp] = (counts[imp] || 0) + 1;
    });
    console.table(counts);

    // Show sample of "Processed" ones (not PENDING)
    const processed = data?.filter(a => a.importance !== 'PENDING_SUMMARY');
    if (processed && processed.length > 0) {
        console.log('--- Sample Processed Articles ---');
        processed.slice(0, 5).forEach(a => {
            console.log(`[${a.importance}] ${a.title} (${a.published_at})`);
        });
    }
}

run();
