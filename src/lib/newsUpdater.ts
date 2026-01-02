// Shared logic for updating news
import { fetchRawNews } from './news';
import { summarizeArticleWithGemini, filterRelevantArticlesBatch, translateTitlesBatch } from './gemini';
import { supabase } from './supabase';
import { isLocallyIrrelevant } from './localFilter';

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
                summary_points: [article.description || ''], // Store raw description
                importance: 'PENDING_SUMMARY', // Phase 1 Queue
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

    // --- PHASE 0: LOCAL FILTER (PENDING_SUMMARY -> IRRELEVANT_AUTO_LOCAL) ---
    // Fetch a larger batch for local filtering to keep the pipeline moving
    const { data: rawItems } = await supabase
        .from('articles')
        .select('id, title, source_domain')
        .eq('importance', 'PENDING_SUMMARY')
        .limit(10); // Check 10 at a time locally

    if (rawItems && rawItems.length > 0) {
        const locallyIrrelevantIds: string[] = [];
        const locallyRelevant: typeof rawItems = [];

        for (const item of rawItems) {
            if (isLocallyIrrelevant(item.title, item.source_domain || '')) {
                locallyIrrelevantIds.push(item.id!);
            } else {
                locallyRelevant.push(item);
            }
        }

        if (locallyIrrelevantIds.length > 0) {
            console.log(`PHASE 0 (Local): Auto-discarding ${locallyIrrelevantIds.length} items.`);
            await supabase
                .from('articles')
                .update({ importance: 'IRRELEVANT_AUTO_LOCAL' })
                .in('id', locallyIrrelevantIds);
            processedCount += locallyIrrelevantIds.length;
        }

        // Use survivors for Phase 1 API check, limited to 5 to speed up processing
        const p1Items = locallyRelevant.slice(0, 5);

        if (p1Items.length > 0) {
            console.log(`PHASE 1 (Filter): Processing ${p1Items.length} items (survivors)...`);
            try {
                const relevantIds = await filterRelevantArticlesBatch(
                    p1Items.map(i => ({ id: i.id!, title: i.title, source: i.source_domain }))
                );

                // Mark RELEVANT items for Phase 2
                if (relevantIds.length > 0) {
                    const { error: upErr } = await supabase
                        .from('articles')
                        .update({ importance: 'PHASE2_PENDING' })
                        .in('id', relevantIds);
                    if (upErr) logs.push(`P1 Update Err: ${upErr.message}`);
                    else logs.push(`PHASE 1: Promoted ${relevantIds.length} items.`);
                }

                // Mark IRRELEVANT items
                const irrelevantIds = p1Items.map(i => i.id).filter(id => !relevantIds.includes(id!));
                if (irrelevantIds.length > 0) {
                    await supabase
                        .from('articles')
                        .update({ importance: 'IRRELEVANT' })
                        .in('id', irrelevantIds);
                    logs.push(`PHASE 1: Discarded ${irrelevantIds.length} items.`);
                }

                processedCount += p1Items.length;

            } catch (e: any) {
                logs.push(`PHASE 1 Error: ${e.message}`);
                if (e.message.includes('429')) logs.push('Rate Limit');
            }
        }
    }

    // --- PHASE 2: BATCH TRANSLATE (PHASE2_PENDING -> PHASE3_PENDING) ---
    // Only run if we have budget/time? For now, run sequentially.
    const { data: p2Items } = await supabase
        .from('articles')
        .select('id, title')
        .eq('importance', 'PHASE2_PENDING')
        .limit(3); // Batch size 3 (Speed up)

    if (p2Items && p2Items.length > 0) {
        logs.push(`PHASE 2 (Translate): Processing ${p2Items.length} items...`);
        try {
            const translations = await translateTitlesBatch(
                p2Items.map(i => ({ id: i.id!, title: i.title }))
            );

            for (const t of translations) {
                const { error: tErr } = await supabase
                    .from('articles')
                    .update({
                        title: t.japanese_title,
                        importance: 'PHASE3_PENDING' // Ready for VIP Summary
                    })
                    .eq('id', t.id);
                if (!tErr) processedCount++;
            }
            logs.push(`PHASE 2: Translated ${translations.length} titles.`);

        } catch (e: any) {
            logs.push(`PHASE 2 Error: ${e.message}`);
            if (e.message.includes('429')) logs.push('Rate Limit');
        }
    }

    // --- PHASE 3: DEEP SUMMARY (PHASE3_PENDING -> DONE) ---
    // VIP treatment, 1 at a time (passed via limit arg, usually 1)
    const { data: p3Items } = await supabase
        .from('articles')
        .select('*')
        .eq('importance', 'PHASE3_PENDING')
        .limit(3); // Increase to 3 for parallelism

    if (p3Items && p3Items.length > 0) {
        logs.push(`PHASE 3: Processing ${p3Items.length} summaries...`);

        await Promise.all(p3Items.map(async (article) => {
            try {
                const summary = await summarizeArticleWithGemini(
                    article.original_title || article.title,
                    Array.isArray(article.summary_points) ? (article.summary_points[0] as string) : '',
                    article.url,
                    article.source_domain || ''
                );

                if (summary) {
                    await supabase.from('articles').update({
                        title: summary.title,
                        summary_points: summary.summary_points,
                        importance: summary.importance,
                        japan_impact: summary.japan_impact,
                        region: Array.isArray(summary.region) ? summary.region : [summary.region || 'World'],
                        category: summary.category
                    }).eq('id', article.id);
                    processedCount++;
                }
            } catch (e: any) {
                const msg = e.message || '';
                if (msg.includes('429')) logs.push(`Rate Limit (Title: ${article.title.slice(0, 10)})`);
                else {
                    await supabase.from('articles').update({ importance: 'ERROR_GEMINI' }).eq('id', article.id);
                }
            }
        }));

        logs.push(`PHASE 3: Batch complete.`);
    }

    return { success: true, count: processedCount, logs };
}
