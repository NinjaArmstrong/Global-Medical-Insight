
import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

async function trim() {
    const { supabase } = await import('../src/lib/supabase');

    console.log('✂️ Trimming Queue to Top 30 Newest...');

    // 1. Fetch ALL pending
    const { data: allPending, error } = await supabase
        .from('articles')
        .select('id, published_at, title')
        .eq('importance', 'PENDING_SUMMARY')
        .order('published_at', { ascending: false }); // Newest first

    if (error || !allPending) {
        console.error('Error fetching pending:', error?.message);
        return;
    }

    console.log(`Total Pending: ${allPending.length}`);

    if (allPending.length <= 30) {
        console.log('✅ Count is already 30 or less. No trimming needed.');
        return;
    }

    // 2. Identify Excess
    const toKeep = allPending.slice(0, 30);
    const toRemove = allPending.slice(30);

    console.log(`Keeping: ${toKeep.length}`);
    console.log(`Removing: ${toRemove.length}`);
    console.log('--- Examples to Remove ---');
    toRemove.slice(0, 3).forEach(i => console.log(`- ${i.title.slice(0, 30)}... (${i.published_at})`));

    // 3. Bulk Update
    const removeIds = toRemove.map(i => i.id);
    const { error: updateErr } = await supabase
        .from('articles')
        .update({ importance: 'SKIPPED_MANUAL_LIMIT' })
        .in('id', removeIds);

    if (updateErr) {
        console.error('Update failed:', updateErr.message);
    } else {
        console.log('✅ Successfully marked items as SKIPPED_MANUAL_LIMIT.');
        console.log(`New Queue Size: ${toKeep.length}`);
    }
}

trim();
