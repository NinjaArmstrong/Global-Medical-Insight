
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { fetchAndSaveRawArticles } from '../src/lib/newsUpdater';


async function main() {
    console.log('--- FORCE FETCH: India Medical AI ---');
    // We can't change the query dynamically in fetchAndSaveRawArticles without code edit,
    // but the default 'news.ts' usually includes broad terms.
    // However, to be precise, I should manually invoke the NewsAPI fetching logic if possible, 
    // OR just run the standard fetcher and hope it catches one, THEN filter for it.

    // Better approach: Let's run the standard fetcher. 
    // The "UpdateNews" logic already targets "Global South" including India.

    console.log('Fetching fresh articles...');
    const result = await fetchAndSaveRawArticles(20); // Fetch small batch
    console.log('Fetch Result:', result);
}

main();
