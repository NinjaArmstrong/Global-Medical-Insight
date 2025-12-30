
import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

async function run() {
    const { supabase } = await import('../src/lib/supabase');
    const { count } = await supabase.from('articles').select('*', { count: 'exact', head: true }).eq('importance', 'PENDING_SUMMARY');
    console.log(`PENDING_COUNT=${count}`);
}
run();
