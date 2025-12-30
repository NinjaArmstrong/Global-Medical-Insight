'use server';

import { updateNews } from '@/lib/newsUpdater';
import { revalidatePath } from 'next/cache';

export async function triggerUpdateNews() {
    try {
        const result = await updateNews();
        revalidatePath('/'); // Refresh homepage to show new articles
        return { success: true, count: result.count };
    } catch (error) {
        console.error('Manual update failed:', error);
        return { success: false, error: 'Failed to update news' };
    }
}
