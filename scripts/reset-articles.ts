import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

async function reset() {
    const { supabase } = await import('../src/lib/supabase');
    console.log('Clearing all articles from database...');

    const { error, count } = await supabase
        .from('articles')
        .delete()
        .neq('url', 'missing_url_placeholder'); // Delete all rows (url is never missing_url_placeholder)

    if (error) {
        console.error('Error clearing database:', error);
    } else {
        console.log(`Database cleared successfully. Deleted row count: ${count}`);
    }
}

reset();
