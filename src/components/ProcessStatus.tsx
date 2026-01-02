
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
        batchPending?: number
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
        <div className="flex items-center gap-4 bg-white/80 backdrop-blur border border-slate-200 rounded-full pl-4 pr-1.5 py-1.5 text-xs font-mono text-slate-600 shadow-sm mr-4">

            {/* Progress Bar (Only show if active batch exists) */}
            {(counts.batchPending ?? 0) > 0 && (
                <div className="flex items-center gap-2 mr-2">
                    <div className="w-20 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-blue-500 transition-all duration-500 ease-out"
                            style={{ width: `${percent}%` }}
                        />
                    </div>
                    <span className="font-bold text-blue-600">{percent}%</span>
                </div>
            )}

            <div className="flex items-center gap-3">
                <span title="処理完了記事数">
                    ✅ <span className="font-bold text-slate-800">{counts.processed}</span>
                </span>
                <span className="text-slate-300">|</span>
                <span title="処理待ち記事数" className={counts.pending > 0 ? 'text-amber-600 font-bold' : 'text-slate-400'}>
                    ⏳ Pending: {counts.pending}
                </span>
                <span className="text-slate-300 hidden md:inline">|</span>
                <span className="text-slate-400 hidden md:inline">
                    Total: {counts.total}
                </span>
            </div>
        </div>
    );
}
