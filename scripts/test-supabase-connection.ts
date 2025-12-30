import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// 1. Configure dotenv BEFORE importing supabase client
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

async function run() {
    console.log('Testing Supabase connection...');
    console.log('URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
    console.log('Key:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? '******' : '(missing)');

    if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        console.error('Error: NEXT_PUBLIC_SUPABASE_ANON_KEY is missing in .env.local');
        return;
    }

    // 2. Dynamic import to ensure process.env is populated
    const { supabase } = await import('../src/lib/supabase');

    try {
        const { data, error, count } = await supabase
            .from('articles')
            .select('*', { count: 'exact', head: true });

        if (error) {
            console.error('Connection failed:', error.message);
        } else {
            console.log('Connection successful!');
            console.log(`Found ${count} articles in the database.`);
        }
    } catch (e) {
        console.error('Unexpected error:', e);
    }
}

run();
