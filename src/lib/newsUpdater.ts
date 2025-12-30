// Shared logic for updating news
import { fetchRawNews } from './news';
import { summarizeArticleWithGemini } from './gemini';
import { supabase } from './supabase';

export async function updateNews(limit = 30) {
    console.log('Starting news update...');

    // 1. Fetch
    const allRawArticles = await fetchRawNews();
    // Limit articles based on call (manual=small batch, scheduled=large batch)
    // We iterate through all fetched articles but stop once we've successfully processed 'limit' NEW articles.

    let processedCount = 0;
    const logs: string[] = [];

    for (const raw of allRawArticles) {
        // Stop if we have processed enough new articles
        if (processedCount >= limit) break;

        if (!raw.url) continue;

        // 2. Check Duplication
        const { data: existing } = await supabase
            .from('articles')
            .select('id')
            .eq('url', raw.url)
            .single();

        if (existing) {
            logs.push(`Skip (Dup): ${raw.title?.slice(0, 20)}...`);
            continue;
        }

        // Rate limit throttle (Reduced to 1s to prevent Vercel 10s timeout)
        await new Promise(resolve => setTimeout(resolve, 1000));

        // 3. Summarize
        console.log(`Processing: ${raw.title}`);
        const summary = await summarizeArticleWithGemini(
            raw.title,
            raw.description || raw.content || '',
            raw.url,
            raw.source.name
        );

        if (summary && summary.title) {
            // 4. Save
            const articlePayload = {
                title: summary.title, // translated
                original_title: raw.title,
                url: raw.url,
                source_domain: new URL(raw.url).hostname,
                published_at: raw.publishedAt,
                summary_points: summary.summary_points, // Jsonb array
                importance: summary.importance,
                japan_impact: summary.japan_impact,
                region: summary.region?.join(','), // string for safety, though array supported if configured. Text[] works too.
                category: summary.category,
                image_url: raw.urlToImage
            };

            const { error } = await supabase.from('articles').insert(articlePayload);
            if (error) {
                console.error('Failed to insert:', error);
                logs.push(`Insert Error: ${error.message}`);
            } else {
                console.log('Saved successfully.');
                processedCount++;
                logs.push(`Saved: ${summary.title.slice(0, 10)}...`);
            }
        } else {
            console.log('Skipping due to failed summary.');
            logs.push(`Gemini Fail: ${raw.title?.slice(0, 10)}...`);
        }
    }

    console.log('Update complete.');
    return { success: true, count: processedCount, totalFetched: allRawArticles.length, logs };
}
