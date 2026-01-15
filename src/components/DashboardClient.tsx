
'use client';

import React, { useState, useMemo } from 'react';
import { RiskScenarioCard } from '@/components/RiskScenarioCard';
import { Search, Filter, Globe, ShieldAlert, Building2, LayoutGrid } from 'lucide-react';
import { Article } from '@/data/articles';

interface DashboardClientProps {
  initialArticles: Article[];
}

export default function DashboardClient({ initialArticles = [] }: DashboardClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('すべて');
  const [selectedRisk, setSelectedRisk] = useState<'All' | 'High' | 'Medium' | 'Low'>('All');
  const [language, setLanguage] = useState<'ja' | 'en'>('ja');
  const isEn = language === 'en';

  const regions = ["すべて", "グローバル", "東アジア", "東南アジア", "南アジア", "中東", "アフリカ", "欧州", "北米", "中南米"];

  const displayToDataMap: Record<string, string> = {
    'すべて': 'All',
    'グローバル': 'Global',
    '東アジア': 'East Asia',
    '東南アジア': 'Southeast Asia',
    '南アジア': 'South Asia',
    '中東': 'Middle East',
    'アフリカ': 'Africa',
    '欧州': 'Europe',
    '北米': 'North America',
    '中南米': 'Latin America'
  };

  const filteredArticles = useMemo(() => {
    return initialArticles.filter(article => {
      // Search across both Japanese and English content
      const searchContent = `
        ${article.title.ja} ${article.title.en}
        ${article.scenario.ja} ${article.scenario.en}
        ${article.impact.ja} ${article.impact.en}
      `.toLowerCase();

      const matchSearch = searchContent.includes(searchQuery.toLowerCase());

      const targetRegion = displayToDataMap[selectedRegion];
      const matchRegion = selectedRegion === 'すべて' || article.region === targetRegion;
      const matchRisk = selectedRisk === 'All' || article.riskLevel === selectedRisk;

      return matchSearch && matchRegion && matchRisk;
    });
  }, [searchQuery, selectedRegion, selectedRisk]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans text-slate-900">

      {/* Sidebar Filter Panel */}
      <aside className="w-full md:w-64 bg-slate-900 text-slate-300 flex-shrink-0 md:h-screen md:sticky md:top-0 overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8 text-white">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-lg">G</div>
            <h1 className="font-serif font-bold text-lg tracking-tight">Global Medical<br /><span className="text-slate-400 text-sm font-sans font-normal">Intelligence</span></h1>
          </div>

          <div className="space-y-6">
            {/* Search */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 block">
                {isEn ? 'Keyword Search' : 'キーワード検索'}
              </label>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 text-slate-500 w-4 h-4" />
                <input
                  type="text"
                  placeholder={isEn ? "Search articles..." : "記事を検索..."}
                  className="w-full bg-slate-800 border border-slate-700 rounded p-2 pl-9 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Region Filter */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 block flex items-center gap-1">
                <Globe size={12} /> {isEn ? 'Regions' : '対象地域'}
              </label>
              <div className="space-y-1">
                {regions.map(r => (
                  <button
                    key={r}
                    onClick={() => setSelectedRegion(r)}
                    className={`w-full text-left px-3 py-1.5 rounded text-sm transition-colors ${selectedRegion === r ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' : 'hover:bg-slate-800'}`}
                  >
                    {isEn ? displayToDataMap[r] : r}
                  </button>
                ))}
              </div>
            </div>

            {/* Risk Level Filter */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 block flex items-center gap-1">
                <ShieldAlert size={12} /> {isEn ? 'Risk Level' : 'リスクレベル'}
              </label>
              <div className="flex bg-slate-800 rounded p-1">
                <button onClick={() => setSelectedRisk('All')} className={`flex-1 text-xs py-1 rounded ${selectedRisk === 'All' ? 'bg-slate-600 text-white' : 'text-slate-400 hover:text-white'}`}>
                  {isEn ? 'All' : 'すべて'}
                </button>
                <button onClick={() => setSelectedRisk('High')} className={`flex-1 text-xs py-1 rounded ${selectedRisk === 'High' ? 'bg-red-900/50 text-red-200' : 'text-slate-400 hover:text-white'}`}>
                  {isEn ? 'High' : '高'}
                </button>
                <button onClick={() => setSelectedRisk('Medium')} className={`flex-1 text-xs py-1 rounded ${selectedRisk === 'Medium' ? 'bg-amber-900/50 text-amber-200' : 'text-slate-400 hover:text-white'}`}>
                  {isEn ? 'Med' : '中'}
                </button>
                <button onClick={() => setSelectedRisk('Low')} className={`flex-1 text-xs py-1 rounded ${selectedRisk === 'Low' ? 'bg-emerald-900/50 text-emerald-200' : 'text-slate-400 hover:text-white'}`}>
                  {isEn ? 'Low' : '低'}
                </button>
              </div>
            </div>

          </div>
        </div>

        <div className="p-6 border-t border-slate-800 mt-auto">
          <div className="text-xs text-slate-600">
            {isEn ? 'Data Source: Local Cache' : 'データソース: ローカルキャッシュ'}<br />
            {isEn ? 'Last Updated: ' : '最終更新: '}{new Date().toLocaleDateString(isEn ? 'en-US' : 'ja-JP')}
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto h-screen">
        <header className="flex justify-between items-end mb-8 pb-4 border-b border-slate-200">
          <div>
            <h2 className="text-2xl font-serif font-bold text-slate-800">
              {isEn ? 'Global Medical Insight' : 'グローバル医療インサイト'}
            </h2>
            <p className="text-slate-500 mt-1 flex items-center gap-2">
              {isEn ? `Monitoring ${initialArticles.length} signals` : `現在 ${initialArticles.length}件のシグナルを監視中`}
              <span className="w-1 h-1 rounded-full bg-slate-400"></span>
              {isEn ? `Showing ${filteredArticles.length} items` : `${filteredArticles.length}件を表示`}
            </p>
          </div>
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => setLanguage(prev => prev === 'ja' ? 'en' : 'ja')}
              className="px-4 py-2 bg-slate-800 text-white border border-slate-700 text-sm font-medium rounded hover:bg-slate-700 flex items-center gap-2 shadow-sm transition-all"
            >
              <Globe size={16} /> {isEn ? '日本語' : 'English'}
            </button>
            {/* Grid View button hidden/disabled or reused? Keeping mostly static as text was Japanese */}
            <button className="px-4 py-2 bg-white border border-slate-300 text-slate-600 text-sm font-medium rounded hover:bg-slate-50 flex items-center gap-2">
              <LayoutGrid size={16} /> {isEn ? 'Grid View' : 'グリッド表示'}
            </button>
          </div>
        </header>

        {filteredArticles.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-lg border border-dashed border-slate-300">
            <Filter className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-medium text-slate-500">
              {isEn ? 'No signals found' : '該当するシグナルが見つかりません'}
            </h3>
            <p className="text-slate-400 text-sm">
              {isEn ? 'Please change your search criteria.' : '検索条件を変更してください。'}
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedRegion('All'); setSelectedRisk('All'); }}
              className="mt-4 text-blue-600 text-sm font-medium hover:underline"
            >
              {isEn ? 'Clear Filters' : 'フィルターをクリア'}
            </button>
          </div>
        ) : (
          <div className={`grid grid-cols-1 xl:grid-cols-2 gap-6`}>
            {filteredArticles.map(article => (
              <RiskScenarioCard key={article.id} article={article} language={language} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

