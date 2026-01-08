
import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { runRealTimeUpdate } from '../src/lib/news-fetcher';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

async function main() {
    try {
        const args = process.argv.slice(2);
        const targetRegion = args.find(arg => !arg.startsWith('-')) || undefined;

        await runRealTimeUpdate(targetRegion);
        console.log('🎉 Real-Time Update Workflow Complete.');
        process.exit(0);
    } catch (error) {
        console.error('❌ Update Failed:', error);
        process.exit(1);
    }
}

main();
