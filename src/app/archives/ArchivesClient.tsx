'use client';

import { useState, useMemo } from 'react';
import { Article } from '@/lib/types';
import { format } from 'date-fns';
import { ExternalLink, Search, Filter } from 'lucide-react';

interface ArchivesClientProps {
    initialArticles: Article[];
}

export default function ArchivesClient({ initialArticles }: ArchivesClientProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('All');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Extract unique regions and categories for filter dropdowns
    const allRegions = useMemo(() => {
        const regions = new Set<string>();
        initialArticles.forEach(a => {
            const list = Array.isArray(a.region) ? a.region : [a.region];
            list.forEach(r => regions.add(r));
        });
        return ['All', ...Array.from(regions).sort()];
    }, [initialArticles]);

    const allCategories = useMemo(() => {
        const categories = new Set<string>();
        initialArticles.forEach(a => {
            if (a.category) categories.add(a.category);
        });
        return ['All', ...Array.from(categories).sort()];
    }, [initialArticles]);

    // Filter Logic
    const filteredArticles = useMemo(() => {
        return initialArticles.filter(article => {
            const matchesSearch = (
                article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (article.summary_points?.[0] || '').toLowerCase().includes(searchTerm.toLowerCase())
            );

            const articleRegions = Array.isArray(article.region) ? article.region : [article.region];
            const matchesRegion = selectedRegion === 'All' || articleRegions.some(r => r === selectedRegion);

            const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;

            return matchesSearch && matchesRegion && matchesCategory;
        });
    }, [initialArticles, searchTerm, selectedRegion, selectedCategory]);

    return (
        <div className="space-y-6">
            {/* Filters */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search headlines..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all"
                    />
                </div>

                <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
                    <select
                        value={selectedRegion}
                        onChange={(e) => setSelectedRegion(e.target.value)}
                        className="px-4 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 focus:outline-none focus:border-blue-400 cursor-pointer"
                    >
                        {allRegions.map(r => <option key={r} value={r}>{r === 'All' ? 'All Regions' : r}</option>)}
                    </select>

                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="px-4 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 focus:outline-none focus:border-blue-400 cursor-pointer"
                    >
                        {allCategories.map(c => <option key={c} value={c}>{c === 'All' ? 'All Genres' : c}</option>)}
                    </select>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-50 border-b border-slate-200">
                            <tr>
                                <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider w-32 whitespace-nowrap">Date</th>
                                <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider w-32 whitespace-nowrap">Genre</th>
                                <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider w-40 whitespace-nowrap">Region</th>
                                <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Headline</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {filteredArticles.map((article) => {
                                const regions = Array.isArray(article.region) ? article.region : [article.region];
                                return (
                                    <tr key={article.id || article.url} className="hover:bg-slate-50/50 transition-colors group">
                                        <td className="py-4 px-6 text-sm text-slate-500 font-mono align-top whitespace-nowrap">
                                            {format(new Date(article.published_at), 'yyyy-MM-dd')}
                                        </td>
                                        <td className="py-4 px-6 align-top">
                                            <span className={`inline-block px-2 py-1 rounded-md text-xs font-bold border ${article.category === 'Pharma' ? 'bg-rose-50 text-rose-600 border-rose-100' :
                                                article.category === 'Tech' ? 'bg-cyan-50 text-cyan-600 border-cyan-100' :
                                                    'bg-slate-100 text-slate-600 border-slate-200'
                                                }`}>
                                                {article.category || 'General'}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 align-top">
                                            <div className="flex flex-wrap gap-1">
                                                {regions.map(r => (
                                                    <span key={r} className="inline-block text-xs font-medium text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded shadow-sm">
                                                        {r}
                                                    </span>
                                                ))}
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 align-top">
                                            <div className="mb-2">
                                                <a href={article.url} target="_blank" rel="noopener noreferrer" className="font-bold text-slate-800 hover:text-blue-600 transition-colors text-base flex items-center gap-1 leading-snug">
                                                    {article.title} <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                                                </a>
                                            </div>
                                            <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                                                {article.summary_points?.[0]}
                                            </p>
                                        </td>
                                    </tr>
                                );
                            })}
                            {filteredArticles.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="py-12 text-center text-slate-400">
                                        No articles found matching your criteria.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="text-right text-xs text-slate-400">
                Showing {filteredArticles.length} / {initialArticles.length} articles
            </div>
        </div>
    );
}
