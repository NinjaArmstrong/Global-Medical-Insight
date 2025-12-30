'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { triggerFetchNews, triggerSummarizeNews, triggerCloudUpdate } from '@/app/actions';
import { RefreshCcw, Database, Sparkles, CloudLightning } from 'lucide-react';

export function UpdateNewsButton() {
    const router = useRouter();
    const [isUpdating, setIsUpdating] = useState(false);
    const [statusText, setStatusText] = useState('');
    const [progress, setProgress] = useState(0);

    // Phase 3: Cloud Trigger (Fire and Forget)
    const handleCloudUpdate = async () => {
        if (!confirm('【推奨】クラウドサーバーで更新を開始しますか？\n\n・ブラウザを閉じてOKです\n・完了まで時間はかかります（裏で実行）\n・寝ている間に終わらせたい場合に最適です')) {
            return;
        }

        try {
            alert('クラウドサーバーに指令を送信中...');
            const result = await triggerCloudUpdate();
            if (result.success) {
                alert('✅ 指令を出しました！\n\nあとはサーバーがやっておきます。\nブラウザを閉じても大丈夫です。\n（反映には数十分かかります）');
            } else {
                throw new Error(result.error);
            }
        } catch (e: any) {
            alert(`エラー: ${e.message}`);
        }
    };

    // Phase 1: Fetch Raw Data from NewsAPI (Local/Client Manual)
    const handleFetch = async () => {
        if (isUpdating) return;

        if (!confirm('【手動】画面を開いたまま更新しますか？\n（完了までブラウザを閉じられません）')) {
            return;
        }

        setIsUpdating(true);
        setStatusText('NewsAPIから記事を取得中...');
        setProgress(0);

        try {
            const result = await triggerFetchNews();

            if (!result.success) {
                throw new Error(result.error);
            }

            const totalNew = result.count ?? 0;

            if (totalNew === 0) {
                console.log('No new articles fetched. Checking for pending summaries...');
                setStatusText('新着なし。未処理記事を確認中...');
            } else {
                setStatusText(`取得完了: ${totalNew}件。AI要約を開始します...`);
                router.refresh(); // Refresh to show any Raw articles if you wanted to display them
            }

            // Phase 2: Start Summarization (Always run this, in case of pending items)
            await new Promise(r => setTimeout(r, 1000));
            await performSummarization(totalNew); // Valid to pass 0 here, logic handles it

        } catch (e: any) {
            console.error(e);
            alert(`エラー: ${e.message} `);
            setIsUpdating(false);
        }
    };

    // Phase 2: Loop for AI Summarization
    const performSummarization = async (targetCount: number) => {
        let processed = 0;
        let consecutiveZeroes = 0;

        try {
            while (true) { // Loop until no pending items
                const result = await triggerSummarizeNews();

                // Check for Rate Limits (Gemini 429)
                const logsStr = result.logs?.join(' ') || '';
                const isRateLimited = logsStr.includes('429') || logsStr.includes('Quota') || logsStr.includes('Rate Limit') || logsStr.includes('Error fetching');

                if (isRateLimited) {
                    const cooldown = 60;
                    for (let i = cooldown; i > 0; i--) {
                        setStatusText(`AI制限待機中... ${i} 秒`);
                        await new Promise(r => setTimeout(r, 1000));
                    }
                    setStatusText(`要約再開... ${processed} / ${targetCount}件`);
                    continue;
                }

                if (!result.success) {
                    console.error('Summarize error:', result.error);
                    // Don't break immediately, maybe transient
                }

                const count = result.count ?? 0;

                if (count > 0) {
                    processed += count;
                    setStatusText(`AI要約中... ${processed}件完了`);
                    setProgress(processed);

                    // ✨ LIVE UPDATE: Refresh the page data to show new article immediately ✨
                    router.refresh();
                }

                if (count === 0) {
                    consecutiveZeroes++;
                    // If we have no rate limit but 0 count, maybe we are done?
                    // Or maybe it skipped due to error?
                    // We check if "No pending articles found" is in logs.
                    if (logsStr.includes('No pending articles')) {
                        console.log('Done: No pending articles found.');
                        break; // Done!
                    }

                    if (consecutiveZeroes > 3) {
                        break; // Give up
                    }
                    await new Promise(r => setTimeout(r, 2000));
                    continue;
                }

                consecutiveZeroes = 0;

                // Throttle (5s) to respect Gemini Rate Limit (15 RPM) without timing out Vercel
                await new Promise(r => setTimeout(r, 5000));
            }

            alert(`更新完了！\n${processed}件の記事を要約しました。\n（RAW保存: ${targetCount}件）`);
            router.refresh(); // Final refresh

        } catch (e: any) {
            console.error(e);
            alert(`要約中にエラーが発生: ${e.message} \n（記事自体は保存されています）`);
        } finally {
            setIsUpdating(false);
            setProgress(0);
        }
    };

    return (
        <div className="flex items-center gap-2">
            {/* Live Update Button */}
            <button
                onClick={handleFetch}
                disabled={isUpdating}
                className={`
            flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors border
            ${isUpdating
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200'
                        : 'bg-white text-slate-600 hover:bg-slate-50 border-slate-200'
                    }
        `}
            >
                {isUpdating ? (
                    <Sparkles size={16} className="animate-spin" />
                ) : (
                    <Database size={16} />
                )}
                {isUpdating ? statusText : 'Live更新'}
            </button>

            {/* Cloud Update Button */}
            {!isUpdating && (
                <button
                    onClick={handleCloudUpdate}
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors bg-emerald-500 text-white hover:bg-emerald-600 shadow-sm"
                    title="ブラウザを閉じて実行できます"
                >
                    <CloudLightning size={16} />
                    クラウド実行 (推奨)
                </button>
            )}
        </div>
    );
}
