import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

async function check() {
    const { supabase } = await import('../src/lib/supabase');

    // Check ENV first
    console.log('Using Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);

    const { count, error } = await supabase
        .from('articles')
        .select('*', { count: 'exact', head: true });

    if (error) {
        console.error('Error checking count:', error);
    } else {
        console.log('Current article count in DB:', count);
    }
}

check();
