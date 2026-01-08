
import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

async function checkModelsDirectly() {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.error('No API KEY');
        return;
    }

    console.log(`Checking models for key: ${apiKey.substring(0, 10)}...`);
    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

    try {
        const res = await fetch(url);
        if (!res.ok) {
            console.error(`❌ HTTP Error: ${res.status} ${res.statusText}`);
            const errorBody = await res.text();
            console.error('Response Body:', errorBody);
            return;
        }

        const data = await res.json();
        console.log('✅ Models Found:');
        if (data.models) {
            data.models.forEach((m: any) => {
                console.log(` - ${m.name} (${m.displayName})`);
            });
        } else {
            console.log('No models returned (empty list).');
        }

    } catch (e: any) {
        console.error('Fetch failed:', e.message);
    }
}

checkModelsDirectly();
