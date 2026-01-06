
import React from 'react';
import { Article } from '@/data/articles';
import { AlertTriangle, TrendingUp, AlertCircle, Info, ChevronRight, Briefcase } from 'lucide-react';

interface RiskScenarioCardProps {
    article: Article;
}

export function RiskScenarioCard({ article }: RiskScenarioCardProps) {
    const getRiskColor = (level: string) => {
        if (level === 'High') return 'bg-red-50 border-red-200 text-red-900';
        if (level === 'Medium') return 'bg-amber-50 border-amber-200 text-amber-900';
        return 'bg-emerald-50 border-emerald-200 text-emerald-900';
    };

    const getRiskBadge = (level: string) => {
        if (level === 'High') return <span className="px-2 py-0.5 rounded text-xs font-bold bg-red-100 text-red-700 border border-red-200">高リスク</span>;
        if (level === 'Medium') return <span className="px-2 py-0.5 rounded text-xs font-bold bg-amber-100 text-amber-700 border border-amber-200">中リスク</span>;
        return <span className="px-2 py-0.5 rounded text-xs font-bold bg-emerald-100 text-emerald-700 border border-emerald-200">低リスク</span>;
    };

    const regionMap: Record<string, string> = {
        'Global': 'グローバル',
        'East Asia': '東アジア',
        'Southeast Asia': '東南アジア',
        'South Asia': '南アジア',
        'Middle East': '中東',
        'Africa': 'アフリカ',
        'Europe': '欧州',
        'North America': '北米',
        'Latin America': '中南米'
    };

    // Extract domain from URL
    const getDomain = (url: string) => {
        try {
            return new URL(url).hostname.replace('www.', '');
        } catch {
            return '';
        }
    };

    return (
        <div className="group relative bg-white border border-slate-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-200 hover:border-blue-300">
            <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{regionMap[article.region] || article.region}</span>
                </div>
                <div className="flex items-center gap-1">
                    {getRiskBadge(article.riskLevel)}
                    <span className="text-xs text-slate-400 ml-2 font-mono">{article.date}</span>
                </div>
            </div>

            <h3 className="text-lg font-serif font-bold text-slate-900 leading-snug mb-4 group-hover:text-blue-800 transition-colors">
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="hover:underline decoration-blue-300 decoration-2 underline-offset-2">
                    {article.title}
                </a>
            </h3>

            <div className="space-y-3">
                {/* Scenario Section */}
                <div className="relative pl-4 border-l-2 border-slate-300">
                    <div className="absolute -left-[5px] top-0.5 w-2 h-2 rounded-full bg-slate-300"></div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                        <span className="font-semibold text-slate-900 block text-xs uppercase mb-0.5 text-slate-500">【リスクシナリオ】</span>
                        {article.scenario}
                    </p>
                </div>

                {/* Impact Section */}
                <div className={`relative pl-4 border-l-2 ${article.riskLevel === 'High' ? 'border-red-300 bg-red-50/50 -mx-2 px-2 py-2 rounded-r' : 'border-blue-300 bg-blue-50/50 -mx-2 px-2 py-2 rounded-r'}`}>
                    <div className={`absolute -left-[5px] top-2.5 w-2 h-2 rounded-full ${article.riskLevel === 'High' ? 'bg-red-400' : 'bg-blue-400'}`}></div>
                    <p className="text-sm text-slate-800 leading-relaxed">
                        <span className={`font-semibold block text-xs uppercase mb-0.5 flex items-center gap-1 ${article.riskLevel === 'High' ? 'text-red-700' : 'text-blue-700'}`}>
                            <TrendingUp size={12} /> 【企業への影響 / インパクト】
                        </span>
                        {article.impact}
                    </p>
                </div>

                {/* Action Item */}
                <div className="mt-3 flex items-start gap-2 bg-slate-50 p-2 rounded border border-slate-200">
                    <AlertCircle className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
                    <p className="text-xs font-medium text-slate-600">
                        <span className="font-bold text-slate-700">推奨アクション:</span> {article.action}
                    </p>
                </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center">
                <span className="text-xs text-slate-400 truncate max-w-[200px]">{getDomain(article.url)}</span>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 group/link">
                    オリジナル記事 <ChevronRight size={12} className="group-hover/link:translate-x-0.5 transition-transform" />
                </a>
            </div>
        </div>
    );
}
