'use client';

import { useState } from 'react';
import { triggerUpdateNews } from '@/app/actions';
import { RefreshCcw } from 'lucide-react';

export function UpdateNewsButton() {
    const [isUpdating, setIsUpdating] = useState(false);
    const [statusText, setStatusText] = useState('');
    const [progress, setProgress] = useState(0);

    const handleUpdate = async () => {
        if (isUpdating) return;

        if (!confirm('最新ニュースの取得を開始しますか？\n（最大30件まで検索・追加します。数分かかる場合があります）')) {
            return;
        }

        setIsUpdating(true);
        setStatusText('更新中...');
        setProgress(0);
        let totalProcessed = 0;
        let zeroCountRetries = 0;
        const TARGET_LIMIT = 30;

        try {
            while (totalProcessed < TARGET_LIMIT) {
                const result = await triggerUpdateNews();

                if (!result.success) {
                    throw new Error(result.error || 'Update failed');
                }

                // Check for Rate Limits (Gemini 429) in logs
                const logsStr = result.logs?.join(' ') || '';
                const isRateLimited = logsStr.includes('429') || logsStr.includes('Quota') || logsStr.includes('Rate Limit') || logsStr.includes('Error fetching');

                if (isRateLimited) {
                    // Start Cooldown (Extended to 60s to clear penalty box)
                    const cooldown = 60;
                    for (let i = cooldown; i > 0; i--) {
                        setStatusText(`待機中(制限)... ${i}秒`);
                        await new Promise(r => setTimeout(r, 1000));
                    }
                    setStatusText(`再開中... ${progress}件`);
                    continue; // Retry loop
                }

                // API returned 0 raw articles -> Likely API Limit or Query Issue
                if ((result.totalFetched ?? 0) === 0) {
                    alert('エラー: ニュースAPIから記事が1件も取得できませんでした。\nAPIキーの制限または設定を確認してください。');
                    break;
                }

                // No NEW articles found (but raw articles exist)
                if ((result.count ?? 0) === 0) {
                    zeroCountRetries++;
                    console.log(`Zero count returned. Retry ${zeroCountRetries}/5...`);

                    if (zeroCountRetries > 5) {
                        // Only show alert if we really are done (not just rate limited, which is handled above)
                        if (result.logs && result.logs.length > 0) {
                            const isAllDupes = result.logs.every(l => l.includes('Skip') || l.includes('Dup'));
                            if (!isAllDupes) {
                                console.log('Zero count returned 5 times, stopping.', result.logs);
                                alert(`完了(または停止): 連続して新しい記事が見つかりませんでした。\n詳細ログ:\n${result.logs.slice(0, 5).join('\n')}`);
                            } else {
                                alert('完了: これ以上新しい記事はありません。');
                            }
                        }
                        break;
                    }
                    // Wait bits before retrying to avoid spamming if there's a persistent error
                    await new Promise(r => setTimeout(r, 2000));
                    continue;
                }

                // Reset retries if we found something
                zeroCountRetries = 0;

                totalProcessed += (result.count ?? 0);
                setProgress(totalProcessed);
                setStatusText(`更新中... ${totalProcessed}件`);

                // Wait a bit to be nice to the server
                await new Promise(r => setTimeout(r, 2000));
            }

            if (totalProcessed > 0) {
                alert(`更新完了: 合計${totalProcessed}件の新しい記事を追加しました。`);
            } else if (totalProcessed === 0) {
                alert('新しい記事は見つかりませんでした（すべて最新、またはAPI制限の可能性があります）。');
            }
        } catch (e: any) {
            console.error(e);
            alert(`更新エラー: ${e.message}`);
        } finally {
            setIsUpdating(false);
            setProgress(0);
        }
    };

    return (
        <button
            onClick={handleUpdate}
            disabled={isUpdating}
            className={`
        flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors
        ${isUpdating
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                }
      `}
        >
            <RefreshCcw size={16} className={isUpdating ? 'animate-spin' : ''} />
            {isUpdating ? statusText : '最新ニュースを取得 (v3.0)'}
        </button>
    );
}
