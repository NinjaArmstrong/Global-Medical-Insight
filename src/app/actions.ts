'use server';

import { updateNews } from '@/lib/newsUpdater';
import { revalidatePath } from 'next/cache';

export async function triggerUpdateNews() {
    try {
        // Manual update: Limit to 2 articles to avoid Vercel Function Timeout (10s limit)
        const result = await updateNews(2);
        revalidatePath('/'); // Refresh homepage to show new articles
        return { success: true, count: result.count };
    } catch (error) {
        console.error('Manual update failed:', error);
        return { success: false, error: 'Failed to update news' };
    }
}
