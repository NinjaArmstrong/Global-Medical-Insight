
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

    // Calculate Batch Progress (e.g. Total 30, Pending 20 -> 10 Processed = 33%)
    const batchProcessed = (counts.batchTotal || 0) - (counts.batchPending || 0);
    const batchTotal = counts.batchTotal || 1; // avoid div 0
    const percent = Math.round((batchProcessed / batchTotal) * 100);

    return (
        <div className="flex items-center gap-4 bg-white/80 backdrop-blur border border-slate-200 rounded-full pl-4 pr-3 py-1.5 text-xs font-mono text-slate-600 shadow-sm mr-4">

            {/* Progress Bar (Only show if active batch exists) */}
            {(counts.batchPending ?? 0) > 0 && (
                <div className="flex items-center gap-2 mr-2">
                    <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-blue-500 transition-all duration-500 ease-out"
                            style={{ width: `${percent}%` }}
                        />
                    </div>
                    <span className="font-bold text-blue-600 min-w-[3ch] text-right">{percent}%</span>
                </div>
            )}

            <div className="flex items-center gap-3 border-l border-slate-200 pl-3">
                {/* 有効数 (HP表示対象) */}
                <div className="flex flex-col items-center leading-none">
                    <span className="text-[10px] text-emerald-600 mb-0.5 font-bold">有効</span>
                    <span className="font-bold text-emerald-700 text-sm">
                        {counts.valid}
                    </span>
                </div>

                <span className="text-slate-200 text-lg font-thin">/</span>

                {/* 処理中（残り） */}
                <div className="flex flex-col items-center leading-none">
                    <span className="text-[10px] text-slate-400 mb-0.5">残り</span>
                    <span className={`font-bold text-sm ${counts.batchPending! > 0 ? 'text-amber-600' : 'text-slate-300'}`}>
                        {counts.batchPending}
                    </span>
                </div>

                {/* 完了予想 */}
                {(counts.estimatedCompletionTime && counts.estimatedCompletionTime !== '完了') && (
                    <>
                        <span className="text-slate-200 text-lg font-thin">|</span>
                        <div className="flex flex-col items-end leading-none min-w-[50px]">
                            <span className="text-[10px] text-slate-400 mb-0.5">予想時刻</span>
                            <span className="font-bold text-slate-700">
                                {counts.estimatedCompletionTime}
                            </span>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
