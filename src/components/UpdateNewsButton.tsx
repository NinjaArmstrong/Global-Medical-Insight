'use client';

import { useState } from 'react';
import { triggerUpdateNews } from '@/app/actions';
import { RefreshCcw } from 'lucide-react';

export function UpdateNewsButton() {
    const [isUpdating, setIsUpdating] = useState(false);

    const handleUpdate = async () => {
        if (isUpdating) return;

        if (!confirm('最新ニュースの取得を開始しますか？\n（完了まで数分かかる場合があります）')) {
            return;
        }

        setIsUpdating(true);
        try {
            const result = await triggerUpdateNews();
            if (result.success) {
                alert(`更新完了: ${result.count}件の新しい記事を追加しました。`);
            } else {
                alert('更新に失敗しました。詳細を確認してください。');
            }
        } catch (e) {
            console.error(e);
            alert('エラーが発生しました。');
        } finally {
            setIsUpdating(false);
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
            {isUpdating ? '更新中...' : '最新ニュースを取得'}
        </button>
    );
}
