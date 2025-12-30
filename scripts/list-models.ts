import { GoogleGenerativeAI } from '@google/generative-ai';
import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

async function run() {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.error('No API KEY');
        return;
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    console.log('Fetching available models...');
    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
        // There isn't a direct listModels method on the client instance in the simplified SDK structure usually,
        // but checking documentation, usually it is not exposed on the instance directly in some versions?
        // Wait, current SDK has it?
        // Actually, we can just try to use a model and if it fails, we catch. 
        // But to LIST, we usually need correct permissions.
        // Let's try to access the API directly via fetch to list models.

        const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
        const res = await fetch(url);
        const data = await res.json();

        if (data.models) {
            console.log('Available Models:');
            data.models.forEach((m: any) => {
                if (m.supportedGenerationMethods.includes('generateContent')) {
                    console.log(`- ${m.name} (${m.displayName})`);
                }
            });
        } else {
            console.error('Failed to list models:', data);
        }
    } catch (e) {
        console.error('Error:', e);
    }
}

run();
