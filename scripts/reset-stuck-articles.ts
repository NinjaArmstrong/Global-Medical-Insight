
import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

// Load env
const envPath = path.resolve('C:/Dev/20251230soft/.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const envConfig: Record<string, string> = {};
envContent.split('\n').forEach(line => {
    const [key, value] = line.split('=');
    if (key && value) {
        envConfig[key.trim()] = value.trim();
    }
});

const supabase = createClient(
    envConfig['NEXT_PUBLIC_SUPABASE_URL']!,
    envConfig['NEXT_PUBLIC_SUPABASE_ANON_KEY']!
);

async function reset() {
    console.log('Resetting "AI unavailable" articles...');

    // 1. Select IDs first
    // Explicit match for exact string seen in DB
    const { data: exactItems } = await supabase
        .from('articles')
        .select('id, importance')
        .eq('importance', 'AI unavailable during update.');

    const idsToReset = (exactItems || []).map(i => i.id);

    console.log(`Found ${idsToReset.length} stuck articles.`);

    if (idsToReset.length > 0) {
        const { error, count } = await supabase
            .from('articles')
            .update({ importance: 'PENDING_SUMMARY' }) // Removed invalid 'count' column
            .in('id', idsToReset)
            .select('id', { count: 'exact' });

        if (error) {
            console.error('Error:', error);
        } else {
            console.log(`Successfully reset ${idsToReset.length} articles to PENDING_SUMMARY.`);
        }
    } else {
        console.log('No articles found to reset.');
    }
}

reset();
