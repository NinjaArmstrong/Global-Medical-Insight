
import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

async function run() {
    console.log('Testing DB Update Permission...');

    // Pick one article
    const { data: items } = await supabase.from('articles').select('id, title, importance').limit(1);
    if (!items || items.length === 0) {
        console.log('No articles to test.');
        return;
    }
    const item = items[0];
    console.log(`Target: ${item.id} - ${item.title}`);

    // Update importance
    const newImp = 'TEST_RLS_CHECK';
    const { error, data } = await supabase
        .from('articles')
        .update({ importance: newImp })
        .eq('id', item.id)
        .select();

    if (error) {
        console.error('Update Request Failed:', error);
    } else {
        console.log('Update Request Success. Result:', data);
        if (data && data.length > 0) {
            console.log('Returned Data Length:', data.length);
        } else {
            console.log('Returned Data is EMPTY. (Likely RLS blocked)');
        }
    }

    // Verify
    const { data: verify } = await supabase.from('articles').select('importance').eq('id', item.id).single();
    if (verify?.importance === newImp) {
        console.log('✅ VERIFICATION SUCCESS: Importance changed.');
        // Revert
        await supabase.from('articles').update({ importance: item.importance }).eq('id', item.id);
    } else {
        console.error('❌ VERIFICATION FAILED: Importance did not change.');
    }
}

run();
