import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

async function run() {
    console.log('🚀 Starting manual update verification...');

    // Dynamic import to ensure ENV is loaded first
    const { fetchAndSaveRawArticles, processPendingArticles } = await import('../src/lib/newsUpdater');

    try {
    }
    } catch (error) {
    console.error('❌ Script failed:', error);
}
}

run();
