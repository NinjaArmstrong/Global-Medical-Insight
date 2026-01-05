import dotenv from 'dotenv';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function checkStatusDistribution() {
    console.log('--- Checking Article Status Distribution ---');

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data, error } = await supabase
        .from('articles')
        .select('importance');

    if (error) {
        console.error('DB Error:', error.message);
        return;
    }

    const distribution: Record<string, number> = {};
    data.forEach(a => {
        const key = a.importance || 'NULL';
        // Summarize "Antigravity" output as "DONE_ANTIGRAVITY" if it matches
        if (key.includes('Japan Impact Analysis') || key.includes('名指し警告')) {
            // Differentiate old vs new
            if (key.includes('Next Action') || key.includes('提言')) {
                distribution['DONE_ANTIGRAVITY_NEW'] = (distribution['DONE_ANTIGRAVITY_NEW'] || 0) + 1;
            } else {
                distribution['DONE_ANTIGRAVITY_OLD'] = (distribution['DONE_ANTIGRAVITY_OLD'] || 0) + 1;
            }
        } else if (key.length > 50) { // Likely other summary
            distribution['DONE_OTHER'] = (distribution['DONE_OTHER'] || 0) + 1;
        } else {
            distribution[key] = (distribution[key] || 0) + 1;
        }
    });

    console.table(distribution);
}

checkStatusDistribution();
