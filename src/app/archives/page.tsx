import { supabase } from '@/lib/supabase';
import { Article } from '@/lib/types';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { format } from 'date-fns';

export const revalidate = 60; // Revalidate every minute for the list view

async function getArticles() {
    const { data, error } = await supabase
        .from('articles')
        .select('*')
        .order('published_at', { ascending: false });

    if (error) {
        console.error('Error fetching articles:', error);
        return [];
    }
    return data as Article[];
}

export default async function Archives() {
    const articles = await getArticles();

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 py-12 px-4">
            <div className="max-w-5xl mx-auto">

                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="p-2 rounded-full hover:bg-white/50 transition-colors text-slate-500">
                            <ArrowLeft size={20} />
                        </Link>
                        <h1 className="text-2xl font-bold text-slate-800">News Article Archive</h1>
                    </div>
                    <div className="text-sm text-slate-500">
                        Total: {articles.length} posts
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-slate-50 border-b border-slate-200">
                                <tr>
                                    <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider w-32">Date</th>
                                    <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider w-24">Genre</th>
                                    <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider w-32">Region / Country</th>
                                    <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">Headline</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {articles.map((article) => {
                                    const regions = Array.isArray(article.region) ? article.region : [article.region];
                                    return (
                                        <tr key={article.id || article.url} className="hover:bg-slate-50/50 transition-colors group">
                                            <td className="py-4 px-6 text-sm text-slate-500 font-mono align-top whitespace-nowrap">
                                                {format(new Date(article.published_at), 'yyyy-MM-dd')}
                                            </td>
                                            <td className="py-4 px-6 align-top">
                                                <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
                                                    {article.category || 'General'}
                                                </span>
                                            </td>
                                            <td className="py-4 px-6 align-top">
                                                <div className="flex flex-wrap gap-1">
                                                    {regions.map(r => (
                                                        <span key={r} className="inline-block text-sm text-slate-700">
                                                            {r}
                                                        </span>
                                                    ))}
                                                </div>
                                            </td>
                                            <td className="py-4 px-6 align-top">
                                                <div className="mb-2">
                                                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="font-bold text-slate-800 hover:text-blue-600 transition-colors text-base flex items-center gap-1">
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
                                {articles.length === 0 && (
                                    <tr>
                                        <td colSpan={4} className="py-12 text-center text-slate-400">
                                            No articles found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
}
