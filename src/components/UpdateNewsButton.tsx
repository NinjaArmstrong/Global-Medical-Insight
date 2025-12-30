'use client';

import { useState } from 'react';
import { triggerUpdateNews } from '@/app/actions';
import { RefreshCcw } from 'lucide-react';

export function UpdateNewsButton() {
    const [isUpdating, setIsUpdating] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleUpdate = async () => {
        if (isUpdating) return;

        if (!confirm('最新ニュースの取得を開始しますか？\n（最大30件まで検索・追加します。数分かかる場合があります）')) {
            return;
        }

        setIsUpdating(true);
        setProgress(0);
        let totalProcessed = 0;
        const TARGET_LIMIT = 30;

        try {
            while (totalProcessed < TARGET_LIMIT) {
                const result = await triggerUpdateNews();

                if (!result.success) {
                    throw new Error('Update failed');
                }

                if ((result.count ?? 0) === 0) {
                    // No more new articles found
                    break;
                }

                totalProcessed += (result.count ?? 0);
                setProgress(totalProcessed);

                // Wait a bit to be nice to the server
                await new Promise(r => setTimeout(r, 1000));
            }

            if (totalProcessed > 0) {
                alert(`更新完了: 合計${totalProcessed}件の新しい記事を追加しました。`);
            } else {
                alert('新しい記事は見つかりませんでした（すべて最新です）。');
            }
        } catch (e) {
            console.error(e);
            alert('更新中にエラーが発生しました。時間を置いて再試行してください。');
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
            {isUpdating ? `更新中... ${progress}件` : '最新ニュースを取得'}
        </button>
    );
}
