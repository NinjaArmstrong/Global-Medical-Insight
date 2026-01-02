import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenerativeAI } from '@google/generative-ai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

async function testGemini() {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.error('❌ GEMINI_API_KEY not found in .env.local');
        return;
    }
    console.log(`✅ Found API Key: ${apiKey.slice(0, 5)}...`);

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' });

    try {
        console.log('📡 Sending test request to Gemini (2.5-flash-lite)...');
        const result = await model.generateContent('Explain "Hello World" in 1 sentence.');
        const response = await result.response;
        const text = response.text();
        console.log('✅ Success! Response:', text);
    } catch (error: any) {
        console.error('❌ Error testing Gemini:', error);
        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Body:', await error.response.text());
        }
    }
}

testGemini();
