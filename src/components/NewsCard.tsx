import { format } from 'date-fns';
import { ExternalLink, MapPin, Tag } from 'lucide-react';
import { Article } from '@/lib/types';

interface NewsCardProps {
    article: Article;
}

export function NewsCard({ article }: NewsCardProps) {
    const regions = Array.isArray(article.region) ? article.region : [article.region];

    // Fallback image if none provided
    const imageUrl = article.image_url || `https://ui-avatars.com/api/?name=${article.category}&background=random&size=400`;

    // Check if article is in a pending/processing state
    const isPending = [
        'PENDING_SUMMARY',
        'PHASE2_PENDING',
        'PHASE3_PENDING',
        'SKIPPED_MANUAL_LIMIT',
        'IRRELEVANT_AUTO_LOCAL',
        'Unprocessed'
    ].some(s => article.importance === s || article.importance?.includes(s));

    const isIrrelevant = article.importance === 'IRRELEVANT';
    const isError = article.importance?.includes('ERROR') || article.importance?.includes('AI unavailable');

    // Helper to determine badge color/text
    const getStatusBadge = () => {
        if (isPending) return { text: 'AI解析待ち', color: 'bg-amber-100 text-amber-700', icon: '⏳' };
        if (isIrrelevant) return { text: '対象外', color: 'bg-gray-100 text-gray-500', icon: '🚫' };
        if (isError) return { text: 'AIエラー', color: 'bg-red-100 text-red-700', icon: '⚠️' };
        return { text: article.category, color: 'bg-blue-600/90 text-white', icon: '' };
    };

    const badge = getStatusBadge();

    return (
        <div className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border ${isPending ? 'border-amber-200/50' : 'border-white/50'} shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col h-full`}>

            {/* Image Section */}
            <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                {article.image_url ? (
                    <img
                        src={article.image_url}
                        alt={article.title}
                        className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${isPending ? 'opacity-80 grayscale-[0.5]' : ''}`}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400">
                        <span className="text-4xl">📰</span>
                    </div>
                )}

                {/* Floating Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    <span className="bg-white/90 backdrop-blur text-xs font-semibold px-3 py-1 rounded-full shadow-sm text-slate-700 flex items-center gap-1">
                        <MapPin size={10} className="text-blue-500" /> {regions.join(', ')}
                    </span>
                </div>
                <div className="absolute top-3 right-3">
                    <span className={`backdrop-blur text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1 ${badge.color}`}>
                        {badge.icon} {badge.text}
                    </span>
                </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                    <time dateTime={article.published_at} className="font-mono">
                        {(() => {
                            try {
                                const d = new Date(article.published_at);
                                if (isNaN(d.getTime())) return '----.--.--';
                                return format(d, 'yyyy.MM.dd');
                            } catch (e) {
                                return '----.--.--';
                            }
                        })()}
                    </time>
                    <span className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                        {article.source_domain}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-800 mb-2 leading-snug group-hover:text-blue-700 transition-colors">
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="before:absolute before:inset-0">
                        {article.title}
                    </a>
                </h3>

                {/* Summary Points */}
                <ul className="space-y-2 mb-6 flex-1">
                    {!isPending && !isIrrelevant && article.summary_points?.map((point, idx) => (
                        <li key={idx} className="text-slate-600 text-sm leading-relaxed flex items-start gap-2">
                            <span className="text-blue-400 mt-1.5 min-w-[6px] h-[6px] rounded-full bg-blue-400 block"></span>
                            {point}
                        </li>
                    ))}
                    {(isPending || isIrrelevant) && (
                        <li className="text-slate-400 text-sm italic flex items-center gap-2 mt-4">
                            <span className="animate-pulse">●</span> {isPending ? 'AIが要約を作成中... (数分後に反映されます)' : 'この記事は自動的に対象外と判定されました'}
                        </li>
                    )}
                </ul>

                {/* Insights Section */}
                <div className="space-y-3 pt-4 border-t border-slate-100 bg-slate-50/50 -mx-6 -mb-6 p-6 mt-auto">
                    {article.importance && !isPending && !isIrrelevant && !isError && (
                        <div className="text-xs">
                            <h4 className="font-bold text-slate-700 mb-1 flex items-center gap-1">
                                🌏 現地トレンド
                            </h4>
                            <p className="text-slate-600 leading-relaxed opacity-90">
                                {article.importance}
                            </p>
                        </div>
                    )}

                    {article.japan_impact && !isPending && !isIrrelevant && !isError && (
                        <div className="text-xs mt-3">
                            <h4 className="font-bold text-indigo-700 mb-1 flex items-center gap-1">
                                🇯🇵 日本企業への影響
                            </h4>
                            <p className="text-slate-600 leading-relaxed opacity-90">
                                {article.japan_impact}
                            </p>
                        </div>
                    )}

                    {(isPending) && (
                        <div className="text-xs text-center text-slate-400 py-2">
                            詳細分析を準備中...
                        </div>
                    )}

                    <div className="pt-2 flex justify-end">
                        <span className="text-xs font-medium text-blue-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            Read Original <ExternalLink size={10} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
