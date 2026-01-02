
import * as dotenv from 'dotenv';
import path from 'path';
// import fetch from 'node-fetch';

// Patch removed.


async function run() {
    console.log('🔍 Checking for VALID Japanese Articles...');
    const { supabase } = require('../src/lib/supabase');

    const { count, error } = await supabase
        .from('articles')
        .select('*', { count: 'exact', head: true })
        .neq('importance', 'PENDING_SUMMARY')
        .not('importance', 'ilike', '%AI unavailable%'); // The "Good" ones

    if (error) console.error(error);
    console.log(`\n✅ Valid Japanese Articles Count: ${count}`);
}

run();
