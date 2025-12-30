import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

async function run() {
    const key = process.env.NEWS_API_KEY;
    console.log('Key available:', !!key);

    // Test 1: Simple query
    const url = `https://newsapi.org/v2/everything?q=health&pageSize=5&apiKey=${key}`;
    console.log('Test 1 URL:', url.replace(key || '', 'HIDDEN'));

    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log('Test 1 Status:', data.status);
        console.log('Test 1 TotalResults:', data.totalResults);
    } catch (e) {
        console.error('Test 1 Failed:', e);
    }

    // Test 2: The complex query structure from news.ts (simplified)
    const q = '("Pharmaceutical market" OR "Hospital") AND ("India" OR "Saudi Arabia")';
    const url2 = `https://newsapi.org/v2/everything?q=${encodeURIComponent(q)}&pageSize=5&apiKey=${key}`;
    console.log('Test 2 URL:', url2.replace(key || '', 'HIDDEN'));

    try {
        const res = await fetch(url2);
        const data = await res.json();
        console.log('Test 2 Status:', data.status);
        console.log('Test 2 TotalResults:', data.totalResults);
        if (data.articles && data.articles.length > 0) {
            console.log('Sample Article:', data.articles[0].title);
        }
    } catch (e) {
        console.error('Test 2 Failed:', e);
    }
}

run();
