
'use client';

import { useState, useEffect } from 'react';
import { getArticleCounts } from '@/app/actions';
import { Loader2 } from 'lucide-react';

export function ProcessStatus() {
    const [counts, setCounts] = useState<{
        total: number,
        pending: number,
        processed: number,
        batchTotal?: number,
        batchPending?: number,
        valid?: number,
        pendingInTop30?: number,
        estimatedCompletionTime?: string
    } | null>(null);

    useEffect(() => {
        // Initial fetch
        fetchCounts();

        // Poll every 10 seconds
        const interval = setInterval(fetchCounts, 10000);
        return () => clearInterval(interval);
    }, []);

    const fetchCounts = async () => {
        const result = await getArticleCounts();
        setCounts(result);
    };

    if (!counts) return <Loader2 className="animate-spin text-slate-300" size={16} />;

    return (
        <div className="flex items-center gap-4 bg-white/80 backdrop-blur border border-slate-200 rounded-full pl-6 pr-6 py-2 text-xs font-mono text-slate-600 shadow-sm mr-4">

            {/* 有効数 (HP表示対象) */}
            <div className="flex flex-col items-center leading-none">
                <span className="text-[10px] text-emerald-600 mb-0.5 font-bold">有効記事</span>
                <span className="font-bold text-emerald-700 text-base">
                    {counts.valid} <span className="text-slate-400 font-normal text-xs">件</span>
                </span>
            </div>

            <span className="text-slate-200 text-lg font-thin">|</span>

            {/* 30件中の処理待ち */}
            <div className="flex flex-col items-center leading-none">
                <span className="text-[10px] text-amber-600 mb-0.5 font-bold">HP解析待ち</span>
                <span className={`font-bold text-base ${counts.pendingInTop30! > 0 ? 'text-amber-600' : 'text-slate-300'}`}>
                    {counts.pendingInTop30} <span className="text-slate-400 font-normal text-xs">/ 30</span>
                </span>
            </div>

            {/* 完了予想 */}
            {(counts.estimatedCompletionTime) && (
                <>
                    <span className="text-slate-200 text-lg font-thin">|</span>
                    <div className="flex flex-col items-end leading-none min-w-[50px]">
                        <span className="text-[10px] text-slate-400 mb-0.5">完了予想</span>
                        <span className="font-bold text-slate-700 text-base">
                            {counts.estimatedCompletionTime}
                        </span>
                    </div>
                </>
            )}
        </div>
    );
}
