
import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

async function run() {
    console.log('🔍 Debugging Pending Articles...');

    // Dynamic import
    const { supabase } = await import('../src/lib/supabase');
    const { processPendingArticles } = await import('../src/lib/newsUpdater');

    // 1. Check Count
    const { count, error } = await supabase
        .from('articles')
        .select('*', { count: 'exact', head: true })
        .eq('importance', 'PENDING_SUMMARY');

    if (error) {
        console.error('❌ DB Error:', error);
        return;
    }

    console.log(`📊 Pending Articles Count: ${count}`);

    if (count === 0) {
        console.log('⚠️ No pending articles found. Did Phase 1 (Fetch) work?');
        // Check total count
        const { count: total } = await supabase.from('articles').select('*', { count: 'exact', head: true });
        console.log(`   Total Articles in DB: ${total}`);
        return;
    }

    // 2. Try Processing 1
    console.log('⚡ Attempting to process 1 article...');
    try {
        const result = await processPendingArticles(1);
        console.log('✅ Result:', result);
        if (result.logs.length) {
            console.log('📋 Logs:', result.logs);
        }
    } catch (e) {
        console.error('❌ Processing Failed:', e);
    }
}

run();
