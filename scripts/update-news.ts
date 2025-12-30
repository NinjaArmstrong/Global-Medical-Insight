import { updateNews } from '../src/lib/newsUpdater';
import * as dotenv from 'dotenv';
import path from 'path';

// Load env specific to script execution
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function run() {
    await updateNews();
}

run();
