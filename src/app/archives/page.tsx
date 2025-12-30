import { supabase } from '@/lib/supabase';
import { Article } from '@/lib/types';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { format } from 'date-fns';
import ArchivesClient from './ArchivesClient';

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
                        <div className="flex flex-col">
                            <h1 className="text-2xl font-bold text-slate-800">News Article Archive</h1>
                            <span className="text-xs text-slate-400">閲覧・検索・分析</span>
                        </div>
                    </div>
                </div>

                <ArchivesClient initialArticles={articles} />

            </div>
        </div>
    );
}
