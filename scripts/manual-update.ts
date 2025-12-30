import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

async function run() {
    console.log('🚀 Starting manual update verification...');

    // Dynamic import to ensure ENV is loaded first
    const { updateNews } = await import('../src/lib/newsUpdater');

    try {
        // Try to fetch/update 3 articles
        const result = await updateNews(3);
        console.log('✅ Update Result:', result);

        if (result.logs && result.logs.length > 0) {
            console.log('📋 Logs:', result.logs);
        }

        if (result.count > 0) {
            console.log(`🎉 Successfully added ${result.count} articles to the DB!`);
        } else {
            console.log('⚠️ No articles added (maybe duplicates or API error).');
        }
    } catch (error) {
        console.error('❌ Script failed:', error);
    }
}

run();
