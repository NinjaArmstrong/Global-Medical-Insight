
import * as dotenv from 'dotenv';
import path from 'path';
// import fetch from 'node-fetch';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });



async function checkQuota() {
    console.log('🔍 Diagnosing Gemini Quota...');

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.error('❌ Missing GEMINI_API_KEY');
        process.exit(1);
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-flash-latest' });

    // Use a very short prompt to test Request Limit vs Token Limit
    const prompt = "Hello. Respond with 'OK'.";

    try {
        console.log('Sending Test Request (Short)...');
        const result = await model.generateContent(prompt);
        const response = await result.response;
        console.log('✅ Success:', response.text());
    } catch (error: any) {
        console.error('❌ Error Detected:', error.message);

        if (error.response) {
            console.error('--- Full Error Response Details ---');
            // Try to extract error details if available in the object structure
            // GoogleGenerativeAIError usually hides the raw body, but let's try to stringify
            console.error(JSON.stringify(error, null, 2));

            if (error.message.includes('429')) {
                console.log('\n🔎 Analysis: 429 Too Many Requests');
                // Check if it mentions "Quota" or "Rate"
                if (error.message.includes('Quota')) {
                    console.log('👉 Likely DAILY QUOTA Exceeded.');
                } else {
                    console.log('👉 Likely RATE LIMIT (RPM) Exceeded.');
                }
            }
        }
    }
}

checkQuota();
