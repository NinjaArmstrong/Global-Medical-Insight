
import * as dotenv from 'dotenv';
import path from 'path';
import fetch from 'node-fetch';

// 1. Load Env Vars FIRST
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// 2. Patch global fetch
console.log('--- PATCHING FETCH ---');
if (!global.fetch) {
    (global as any).fetch = fetch;
    (global as any).Headers = (fetch as any).Headers;
    (global as any).Request = (fetch as any).Request;
    (global as any).Response = (fetch as any).Response;
} else {
    // Force overwrite
    console.log('Overwriting native fetch with node-fetch...');
    (global as any).fetch = fetch;
    (global as any).Headers = (fetch as any).Headers;
    (global as any).Request = (fetch as any).Request;
    (global as any).Response = (fetch as any).Response;
}

async function run() {
    console.log('🐞 Debugging Process Pending Articles (Dynamic Import)...');

    // Check keys
    console.log('Key Check:');
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    console.log('SUPABASE_URL:', url ? url.substring(0, 20) + '...' : 'MISSING');

    // 3. Dynamic Import AFTER env vars are loaded
    const { processPendingArticles } = await import('../src/lib/newsUpdater');

    console.log('\n--- Attempting to process ONE article ---');
    try {
        const result = await processPendingArticles(1);
        console.log('\n--- Result ---');
        console.log(`Processed Count: ${result.count}`);
        console.log('Logs (One per line):');
        result.logs.forEach(log => console.log(`[LOG] ${log}`));

        if (result.count === 0) {
            console.log('⚠️ Count is 0. Check logs above.');
        } else {
            console.log('✅ Success!');
        }
    } catch (e) {
        console.error('❌ CRITICAL ERROR:', e);
    }
}

run();
