'use server';

import { updateNews } from '@/lib/newsUpdater';
import { revalidatePath } from 'next/cache';

export async function triggerUpdateNews() {
    console.log('--- Triggering News Update ---');

    // Diagnostic Check
    if (!process.env.NEWS_API_KEY) throw new Error('Configuration Error: NEWS_API_KEY is missing on server.');
    if (!process.env.GEMINI_API_KEY) throw new Error('Configuration Error: GEMINI_API_KEY is missing on server.');
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) throw new Error('Configuration Error: SUPABASE_URL is missing.');

    try {
        // Manual update: Limit to 1 article to avoid Vercel Function Timeout (10s limit)
        const result = await updateNews(1);
        console.log('Update Result:', result);

        revalidatePath('/'); // Refresh homepage
        revalidatePath('/archives'); // Refresh archives

        return { success: true, count: result.count, totalFetched: result.totalFetched, logs: result.logs };
    } catch (error: any) {
        console.error('Update Action Failed:', error);
        return { success: false, error: error.message || 'Unknown error' };
    }
}
