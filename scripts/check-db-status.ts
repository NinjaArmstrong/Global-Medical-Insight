
import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

import { supabase } from '../src/lib/supabase';

async function checkStatus() {
    const { data, error } = await supabase
        .from('articles')
        .select('importance, count', { count: 'exact' });

    if (error) {
        console.error(error);
        return;
    }

    const counts: Record<string, number> = {};
    data?.forEach(row => {
        counts[row.importance || 'NULL'] = (counts[row.importance || 'NULL'] || 0) + 1;
    });

    console.log('--- Article Status Counts ---');
    console.table(counts);
}

checkStatus();
