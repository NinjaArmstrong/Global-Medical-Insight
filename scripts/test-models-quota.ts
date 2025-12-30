import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenerativeAI } from '@google/generative-ai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const apiKey = process.env.GEMINI_API_KEY!;
const genAI = new GoogleGenerativeAI(apiKey);

async function testModel(modelName: string) {
    console.log(`\n🧪 Testing model: ${modelName}`);
    const model = genAI.getGenerativeModel({ model: modelName });

    try {
        const start = Date.now();
        // Try 2 consecutive requests
        await model.generateContent('Short hello');
        console.log(`   ✅ Request 1 Success (${Date.now() - start}ms)`);

        await new Promise(r => setTimeout(r, 2000)); // 2s gap

        await model.generateContent('Short hello 2');
        console.log(`   ✅ Request 2 Success`);
        return true;
    } catch (e: any) {
        console.log(`   ❌ Failed: ${e.message.slice(0, 100)}`);
        return false;
    }
}

async function run() {
    console.log('Searching for working models...');

    // Candidates from the user's available list
    const candidates = [
        'gemini-flash-latest',
        'gemini-2.0-flash-lite-preview-02-05',
        'gemini-2.0-flash-lite',
        'gemini-1.5-pro-latest' // Just in case
    ];

    for (const m of candidates) {
        await testModel(m);
    }
}

run();
