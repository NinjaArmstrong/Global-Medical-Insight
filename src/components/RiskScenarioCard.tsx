
import React from 'react';
import { Article } from '@/data/articles';
import { AlertTriangle, TrendingUp, AlertCircle, Info, ChevronRight, Briefcase } from 'lucide-react';

interface RiskScenarioCardProps {
    article: Article;
}

export function RiskScenarioCard({ article }: RiskScenarioCardProps) {
    const getRiskColor = (level: number) => {
        if (level >= 4) return 'bg-red-50 border-red-200 text-red-900';
        if (level === 3) return 'bg-amber-50 border-amber-200 text-amber-900';
        return 'bg-emerald-50 border-emerald-200 text-emerald-900';
    };

    const getRiskBadge = (level: number) => {
        if (level >= 4) return <span className="px-2 py-0.5 rounded text-xs font-bold bg-red-100 text-red-700 border border-red-200">HIGH RISK</span>;
        if (level === 3) return <span className="px-2 py-0.5 rounded text-xs font-bold bg-amber-100 text-amber-700 border border-amber-200">MEDIUM</span>;
        return <span className="px-2 py-0.5 rounded text-xs font-bold bg-emerald-100 text-emerald-700 border border-emerald-200">LOW</span>;
    };

    return (
        <div className="group relative bg-white border border-slate-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-200 hover:border-blue-300">
            <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{article.region}</span>
                    {article.company !== 'General Market' && (
                        <span className="text-xs bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded border border-slate-200 flex items-center gap-1">
                            <Briefcase size={10} />
                            {article.company}
                        </span>
                    )}
                </div>
                <div className="flex items-center gap-1">
                    {getRiskBadge(article.risk_level)}
                    <span className="text-xs text-slate-400 ml-2 font-mono">{new Date(article.published_at).toLocaleDateString()}</span>
                </div>
            </div>

            <h3 className="text-lg font-serif font-bold text-slate-900 leading-snug mb-4 group-hover:text-blue-800 transition-colors">
                <a href={article.source_url} target="_blank" rel="noopener noreferrer" className="hover:underline decoration-blue-300 decoration-2 underline-offset-2">
                    {article.title}
                </a>
            </h3>

            <div className="space-y-3">
                {/* Scenario Section */}
                <div className="relative pl-4 border-l-2 border-slate-300">
                    <div className="absolute -left-[5px] top-0.5 w-2 h-2 rounded-full bg-slate-300"></div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                        <span className="font-semibold text-slate-900 block text-xs uppercase mb-0.5 text-slate-500">Scenario</span>
                        {article.scenario}
                    </p>
                </div>

                {/* Impact Section */}
                <div className={`relative pl-4 border-l-2 ${article.risk_level >= 4 ? 'border-red-300 bg-red-50/50 -mx-2 px-2 py-2 rounded-r' : 'border-blue-300 bg-blue-50/50 -mx-2 px-2 py-2 rounded-r'}`}>
                    <div className={`absolute -left-[5px] top-2.5 w-2 h-2 rounded-full ${article.risk_level >= 4 ? 'bg-red-400' : 'bg-blue-400'}`}></div>
                    <p className="text-sm text-slate-800 leading-relaxed">
                        <span className={`font-semibold block text-xs uppercase mb-0.5 flex items-center gap-1 ${article.risk_level >= 4 ? 'text-red-700' : 'text-blue-700'}`}>
                            <TrendingUp size={12} /> Impact Analysis
                        </span>
                        {article.impact}
                    </p>
                </div>

                {/* Action Item */}
                <div className="mt-3 flex items-start gap-2 bg-slate-50 p-2 rounded border border-slate-200">
                    <AlertCircle className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
                    <p className="text-xs font-medium text-slate-600">
                        <span className="font-bold text-slate-700">Action:</span> {article.action_item}
                    </p>
                </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center">
                <span className="text-xs text-slate-400 truncate max-w-[200px]">{article.source_domain}</span>
                <a href={article.source_url} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 group/link">
                    Original Source <ChevronRight size={12} className="group-hover/link:translate-x-0.5 transition-transform" />
                </a>
            </div>
        </div>
    );
}
