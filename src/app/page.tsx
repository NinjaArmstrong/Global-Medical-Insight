import { supabase } from '@/lib/supabase';
import { NewsCard } from '@/components/NewsCard';
import { Article } from '@/lib/types';
import { UpdateNewsButton } from '@/components/UpdateNewsButton';
import { ProcessStatus } from '@/components/ProcessStatus';

// Revalidate every hour
export const revalidate = 3600;

async function getArticles() {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .neq('importance', 'PENDING_SUMMARY') // Only show processed articles
    .not('importance', 'ilike', '%AI unavailable%') // Hide failed AI updates
    .order('published_at', { ascending: false })
    .limit(30);

  if (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
  return data as Article[];
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const articles = await getArticles();
  const sp = await searchParams;
  const isAdmin = process.env.NODE_ENV === 'development' || sp.admin === 'true';

  return (
    <div className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">

      {/* Sticky Glass Header */}
      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-white/20 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shrink-0">G</span>
            <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent truncate">
              Global Medical Insight
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
              <a href="/archives" className="hover:text-blue-600 transition-colors">Archives</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Africa</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Middle East</a>
              <a href="#" className="hover:text-blue-600 transition-colors">South Asia</a>
            </nav>
            <div className="pl-0 md:pl-4 md:border-l md:border-slate-200 flex items-center">
              {isAdmin && (
                <>
                  {/* Admin Status Monitor */}
                  <ProcessStatus />
                  <UpdateNewsButton />
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section (Compact) */}
      <section className="pt-24 pb-6 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 tracking-tight">
              Latest Medical Intelligence
            </h2>
            <p className="text-slate-500 mt-1">
              アフリカ・中東・南アジアのヘルスケアビジネス最新動向
            </p>
          </div>
          {/* Legend / Status (Optional) */}
          <div className="text-xs text-slate-400 font-mono">
            Updated: {new Date().toLocaleDateString('ja-JP')}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 pb-24">
        {articles.length === 0 ? (
          <div className="text-center py-32 bg-white/50 backdrop-blur rounded-3xl border border-dashed border-slate-300">
            <div className="text-4xl mb-4">📭</div>
            <p className="text-slate-500 font-medium">記事はまだありません</p>
            <p className="text-sm text-slate-400 mt-2">右上のボタンから最新ニュースを取得してください</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <NewsCard key={article.id || article.url} article={article} />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-white font-bold text-xs">G</span>
            <span className="font-bold text-slate-800">Global Medical Insight</span>
          </div>
          <div className="flex items-center justify-center gap-6 mb-6 text-sm font-medium text-slate-500">
            <a href="/about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
          </div>
          <p className="text-xs text-slate-400">© 2025 All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
