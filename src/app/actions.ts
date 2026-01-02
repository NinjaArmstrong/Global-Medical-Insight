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

export async function triggerCloudUpdate() {
    console.log('--- Triggering Cloud Update (GitHub Actions) ---');

    const token = process.env.GITHUB_PAT;
    if (!token) throw new Error('Configuration Error: GITHUB_PAT is missing.');

    const repoOwner = 'NinjaArmstrong';
    const repoName = 'Global-Medical-Insight';
    const workflowId = 'weekly-news.yml';
    const ref = 'main'; // Target branch

    try {
        const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/actions/workflows/${workflowId}/dispatches`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ref: ref,
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`GitHub API Error: ${response.status} ${response.statusText} - ${errorText}`);
        }

        console.log('Cloud Update Triggered Successfully.');
        return { success: true };
    } catch (error: any) {
        console.error('Cloud Update Action Failed:', error);
        return { success: false, error: error.message };
    }
}

export async function getArticleCounts() {
    // Dynamic import to ensure basic compatibility if needed, though 'use server' usually handles this.
    const { supabase } = await import('@/lib/supabase');

    try {
        // 1. Total DB Counts (Existing)
        const { count: total, error: err1 } = await supabase
            .from('articles')
            .select('*', { count: 'exact', head: true });

        const { count: pending, error: err2 } = await supabase
            .from('articles')
            .select('*', { count: 'exact', head: true })
            .eq('importance', 'PENDING_SUMMARY');

        // 2. "Batch" Progress (Last 24 hours) - For Progress Bar
        const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();

        const { count: batchTotal, error: err3 } = await supabase
            .from('articles')
            .select('*', { count: 'exact', head: true })
            .gt('created_at', oneDayAgo);

        const { count: batchPending, error: err4 } = await supabase
            .from('articles')
            .select('*', { count: 'exact', head: true })
            .eq('importance', 'PENDING_SUMMARY')
            .gt('created_at', oneDayAgo);

        if (err1 || err2 || err3 || err4) throw new Error('DB Error');

        return {
            total: total ?? 0,
            pending: pending ?? 0,
            processed: (total ?? 0) - (pending ?? 0),

            // Batch Stats
            batchTotal: batchTotal ?? 0,
            batchPending: batchPending ?? 0,
            estimatedCompletionTime: calculateEstimatedTime(batchPending ?? 0)
        };
    } catch (e) {
        console.error(e);
        return { total: 0, pending: 0, processed: 0, batchTotal: 0, batchPending: 0, estimatedCompletionTime: '--:--' };
    }
}

function calculateEstimatedTime(pendingCount: number): string {
    if (pendingCount <= 0) return '完了';

    // Assume ~12 seconds per article (processing + throttling)
    const secondsPerArticle = 12;
    const totalSeconds = pendingCount * secondsPerArticle;

    const now = new Date();
    const completionTime = new Date(now.getTime() + totalSeconds * 1000);

    // Format to HH:MM in JST
    return completionTime.toLocaleTimeString('ja-JP', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Tokyo'
    });
}
