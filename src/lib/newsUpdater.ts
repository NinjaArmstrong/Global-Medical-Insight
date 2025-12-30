// Shared logic for updating news
import { fetchRawNews } from './news';
import { summarizeArticleWithGemini } from './gemini';
import { supabase } from './supabase';

export async function fetchAndSaveRawArticles(limit: number): Promise<{ count: number; totalFetched: number, logs: string[] }> {
    console.log(`Fetching raw news, limit: ${limit}`);
    const logs: string[] = [];

    try {
        const allRawArticles = await fetchRawNews();
        let processedCount = 0;
        let articlesAdded = 0;

        if (allRawArticles.length === 0) {
            logs.push('NewsAPI returned 0 articles.');
            return { count: 0, totalFetched: 0, logs };
        }

        for (const article of allRawArticles) {
            if (processedCount >= limit) break;

            const existing = await supabase
                .from('articles')
                .select('id')
                .eq('url', article.url)
                .maybeSingle();

            if (existing.data) {
                logs.push(`Skip (Dup): ${article.title.slice(0, 10)}...`);
                continue;
            }

            // Save RAW article with PENDING status
            const rawPayload = {
                title: article.title || 'No Title',
                original_title: article.title,
                url: article.url,
                source_domain: new URL(article.url).hostname,
                published_at: article.publishedAt,
                summary_points: [article.description || ''], // Store raw description for later processing
                importance: 'PENDING_SUMMARY', // Marker for queue
                japan_impact: '',
                region: ['World'],
                category: 'Unprocessed',
                image_url: article.urlToImage
            };

            const { error } = await supabase.from('articles').insert(rawPayload);

            if (error) {
                console.error('Error inserting raw article:', error);
                logs.push(`Insert Err: ${error.message}`);
            } else {
                articlesAdded++;
                processedCount++;
                logs.push(`Saved (Raw): ${article.title.slice(0, 10)}...`);
            }
        }

        console.log('Raw update complete.');
        return { count: articlesAdded, totalFetched: allRawArticles.length, logs };
    } catch (e: any) {
        logs.push(`Fatal API Error: ${e.message}`);
        return { count: 0, totalFetched: 0, logs };
    }
}

export async function processPendingArticles(limit: number): Promise<{ success: boolean, count: number, logs: string[] }> {
    const logs: string[] = [];
    let processedCount = 0;

    console.log('Checking for pending articles...');

    // Fetch pending articles
    const { data: pendingArticles, error } = await supabase
        .from('articles')
        .select('*')
        .eq('importance', 'PENDING_SUMMARY')
        .limit(limit);

    if (error || !pendingArticles || pendingArticles.length === 0) {
        if (error) logs.push(`DB Error: ${error?.message}`);
        else logs.push('No pending articles found.');
        return { success: true, count: 0, logs };
    }

    logs.push(`Found ${pendingArticles.length} pending items.`);

    for (const article of pendingArticles) {
        // Rate limit throttle (5s) for safer Free Tier usage (12 RPM)
        await new Promise(r => setTimeout(r, 5000));

        try {
            console.log(`Summarizing: ${article.title}`);
            const summary = await summarizeArticleWithGemini(
                article.original_title || article.title,
                // Extract description from the temporary storage in summary_points
                Array.isArray(article.summary_points) ? (article.summary_points[0] as string) : '',
                article.url,
                article.source_domain || ''
            );

            if (summary) {
                // Update the article
                const { error: updateErr } = await supabase
                    .from('articles')
                    .update({
                        title: summary.title,
                        summary_points: summary.summary_points,
                        importance: summary.importance,
                        japan_impact: summary.japan_impact,
                        region: Array.isArray(summary.region) ? summary.region : [summary.region || 'World'],
                        category: summary.category
                    })
                    .eq('id', article.id);

                if (updateErr) {
                    logs.push(`Update Err: ${updateErr.message}`);
                } else {
                    processedCount++;
                    logs.push(`Summarized: ${article.title.slice(0, 10)}...`);
                }
            } else {
                logs.push(`Gemini failed for ${article.id}`);
            }
        } catch (e: any) {
            const msg = e.message || '';
            logs.push(`Gemini Err: ${msg.slice(0, 50)}`);
            if (msg.includes('429')) {
                logs.push('ABORT: Rate Limit');
                break;
            }
        }
    }

    return { success: true, count: processedCount, logs };
}
