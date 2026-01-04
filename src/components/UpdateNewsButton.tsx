'use client';

import { useState } from 'react';
import { triggerCloudUpdate } from '@/app/actions';
import { CloudLightning } from 'lucide-react';

export function UpdateNewsButton() {
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

    return (
        <div className="flex items-center gap-2">
            {/* Cloud Update Button */}
            <button
                onClick={handleCloudUpdate}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors bg-emerald-500 text-white hover:bg-emerald-600 shadow-sm"
                title="ブラウザを閉じて実行できます"
            >
                <CloudLightning size={16} />
                クラウド実行 (推奨)
            </button>
        </div>
    );
}

