'use client';

export function UpdateNewsButton() {
    const [isUpdating, setIsUpdating] = useState(false);
    const [statusText, setStatusText] = useState('');
    const [progress, setProgress] = useState(0);

    // Phase 1: Fetch Raw Data from NewsAPI
    const handleFetch = async () => {
        if (isUpdating) return;

        if (!confirm('最新ニュースの取得を開始しますか？\n（まずはNewsAPIから記事を取り込み、その後AI要約を行います）')) {
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

            if ((result.count ?? 0) === 0) {
                if ((result.totalFetched ?? 0) === 0) {
                    alert('ニュースの取得に失敗しました（APIキー設定等を確認してください）。');
                } else {
                    alert('新しい記事はありませんでした（すべて取得済み）。');
                }
                setIsUpdating(false);
                return;
            }

            // Phase 2: Start Summarization
            const totalNew = result.count ?? 0;
            setStatusText(`取得完了: ${totalNew} 件。AI要約を開始します...`);
            await new Promise(r => setTimeout(r, 1500));

            await performSummarization(totalNew);

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

                if (count === 0) {
                    consecutiveZeroes++;
                    // If we have no rate limit but 0 count, maybe we are done?
                    // Or maybe it skipped due to error?
                    // We check if "No pending articles found" is in logs.
                    if (logsStr.includes('No pending articles')) {
                        break; // Done!
                    }

                    if (consecutiveZeroes > 3) {
                        break; // Give up
                    }
                    await new Promise(r => setTimeout(r, 2000));
                    continue;
                }

                consecutiveZeroes = 0;
                processed += count;
                setStatusText(`AI要約中... ${processed}件完了`);
                setProgress(processed);

                // Throttle slightly
                await new Promise(r => setTimeout(r, 1000));
            }

            alert(`更新完了！\n${processed}件の記事を要約しました。\n（RAW保存: ${targetCount}件）`);

        } catch (e: any) {
            console.error(e);
            alert(`要約中にエラーが発生: ${e.message} \n（記事自体は保存されています）`);
        } finally {
            setIsUpdating(false);
            setProgress(0);
        }
    };

    return (
        <button
            onClick={handleFetch}
            disabled={isUpdating}
            className={`
        flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors
        ${isUpdating
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                }
      `}
        >
            {isUpdating ? (
                <Sparkles size={16} className="animate-spin" />
            ) : (
                <Database size={16} />
            )}
            {isUpdating ? statusText : '最新ニュースを取得 (高速版)'}
        </button>
    );
}
