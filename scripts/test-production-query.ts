
import * as dotenv from 'dotenv';
import path from 'path';
import fetch from 'node-fetch';

// 1. Configure Env FIRST
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// 2. Patch Fetch
if (!global.fetch) {
    (global as any).fetch = fetch;
    (global as any).Headers = (fetch as any).Headers;
    (global as any).Request = (fetch as any).Request;
    (global as any).Response = (fetch as any).Response;
} else {
    (global as any).fetch = fetch;
    (global as any).Headers = (fetch as any).Headers;
    (global as any).Request = (fetch as any).Request;
    (global as any).Response = (fetch as any).Response;
}

async function run() {
    console.log('🧪 Testing Production Query Filter...');

    // Dynamic import
    const { supabase } = require('../src/lib/supabase');

    // Run the query exactly as in page.tsx
    const { count, data, error } = await supabase
        .from('articles')
        .select('*', { count: 'exact', head: false })
        .neq('importance', 'PENDING_SUMMARY') // Only show processed articles
        .not('importance', 'ilike', '%AI unavailable%') // Hide failed AI updates
        .order('published_at', { ascending: false });

    if (error) {
        console.error('❌ Query Failed:', error);
        process.exit(1);
    }

    console.log(`\n📊 Filtered Count: ${count}`);

    if (data) {
        data.forEach((article: any) => {
            console.log(`- [OK] ${article.title.substring(0, 30)}... (${article.importance.substring(0, 10)}...)`);
            if (article.importance.includes('AI unavailable')) {
                console.error('❌ LEAK DETECTED: Found "AI unavailable" in result!');
            }
        });
    }

    if (count === 11) {
        console.log('\n✅ VERIFICATION PASSED: Exactly 11 visible articles.');
    } else {
        console.log(`\n⚠️ Mismatch: Expected 11, got ${count}.`);
    }
}

run();
