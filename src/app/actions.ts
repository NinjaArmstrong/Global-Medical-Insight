'use server';

import { fetchAndSaveRawArticles, processPendingArticles } from '@/lib/newsUpdater';
import { revalidatePath } from 'next/cache';

export async function triggerFetchNews() {
    console.log('--- Triggering News Fetch (Raw) ---');

    // Diagnostic Check
    if (!process.env.NEWS_API_KEY) throw new Error('Configuration Error: NEWS_API_KEY is missing.');
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) throw new Error('Configuration Error: SUPABASE_URL is missing.');

    try {
        const result = await fetchAndSaveRawArticles(30);
        console.log('Fetch Result:', result);

        revalidatePath('/');
        revalidatePath('/archives');

        return { success: true, count: result.count, totalFetched: result.totalFetched, logs: result.logs };
    } catch (error: any) {
        console.error('Fetch Action Failed:', error);
        return { success: false, error: error.message || 'Unknown error' };
    }
}

export async function triggerSummarizeNews() {
    console.log('--- Triggering News Summarization ---');

    if (!process.env.GEMINI_API_KEY) throw new Error('Configuration Error: GEMINI_API_KEY is missing.');

    try {
        // Process 1 article at a time to avoid timeouts
        const result = await processPendingArticles(1);
        console.log('Summarize Result:', result);

        revalidatePath('/');
        revalidatePath('/archives');

        return { success: true, count: result.count, logs: result.logs };
    } catch (error: any) {
        console.error('Summarize Action Failed:', error);
        return { success: false, error: error.message };
    }
}
