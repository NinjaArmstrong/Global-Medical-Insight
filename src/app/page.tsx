
'use client';

import React, { useState, useMemo } from 'react';
import { articles } from '@/data/articles';
import { RiskScenarioCard } from '@/components/RiskScenarioCard';
import { Search, Filter, Globe, ShieldAlert, Building2, LayoutGrid } from 'lucide-react';

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedRisk, setSelectedRisk] = useState<'All' | 'High' | 'Medium' | 'Low'>('All');
  // const [selectedCompany, setSelectedCompany] = useState('All'); // Disabled as data no longer has company

  // Fixed region order
  const REGION_ORDER = ['Global', 'East Asia', 'Southeast Asia', 'South Asia', 'Middle East', 'Africa', 'Europe', 'North America', 'Latin America'];

  // Calculate available regions but sort them by the fixed order
  const regions = ['All', ...REGION_ORDER];

  // const companies = ['All', ...Array.from(new Set(articles.map(a => a.company).filter(c => c !== 'General Market')))];

  const regionNameMap: Record<string, string> = {
    'All': 'すべて',
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

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.scenario.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.impact.toLowerCase().includes(searchQuery.toLowerCase());

      const matchRegion = selectedRegion === 'All' || article.region === selectedRegion;
      const matchRisk = selectedRisk === 'All' || article.riskLevel === selectedRisk;
      // const matchCompany = selectedCompany === 'All' ||
      //   (selectedCompany === 'Others' ? article.company === 'General Market' : article.company === selectedCompany);

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
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 block">キーワード検索</label>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 text-slate-500 w-4 h-4" />
                <input
                  type="text"
                  placeholder="記事を検索..."
                  className="w-full bg-slate-800 border border-slate-700 rounded p-2 pl-9 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Region Filter */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 block flex items-center gap-1">
                <Globe size={12} /> 対象地域
              </label>
              <div className="space-y-1">
                {/* Explicitly mapping the hardcoded 'regions' array to ensure order */}
                {regions.map(r => (
                  <button
                    key={r}
                    onClick={() => setSelectedRegion(r)}
                    className={`w-full text-left px-3 py-1.5 rounded text-sm transition-colors ${selectedRegion === r ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' : 'hover:bg-slate-800'}`}
                  >
                    {regionNameMap[r] || r}
                  </button>
                ))}
              </div>
            </div>

            {/* Risk Level Filter */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 block flex items-center gap-1">
                <ShieldAlert size={12} /> リスクレベル
              </label>
              <div className="flex bg-slate-800 rounded p-1">
                <button onClick={() => setSelectedRisk('All')} className={`flex-1 text-xs py-1 rounded ${selectedRisk === 'All' ? 'bg-slate-600 text-white' : 'text-slate-400 hover:text-white'}`}>すべて</button>
                <button onClick={() => setSelectedRisk('High')} className={`flex-1 text-xs py-1 rounded ${selectedRisk === 'High' ? 'bg-red-900/50 text-red-200' : 'text-slate-400 hover:text-white'}`}>高</button>
                <button onClick={() => setSelectedRisk('Medium')} className={`flex-1 text-xs py-1 rounded ${selectedRisk === 'Medium' ? 'bg-amber-900/50 text-amber-200' : 'text-slate-400 hover:text-white'}`}>中</button>
                <button onClick={() => setSelectedRisk('Low')} className={`flex-1 text-xs py-1 rounded ${selectedRisk === 'Low' ? 'bg-emerald-900/50 text-emerald-200' : 'text-slate-400 hover:text-white'}`}>低</button>
              </div>
            </div>

            {/* Company Filter - REMOVED but code structure kept minimal for safety */}
            {/* <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 block flex items-center gap-1">
                <Building2 size={12} /> 関連企業
              </label>
              <select
                className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-sm text-slate-300 focus:outline-none"
                disabled
              >
                <option>All</option>
              </select>
            </div> */}

          </div>
        </div>

        <div className="p-6 border-t border-slate-800 mt-auto">
          <div className="text-xs text-slate-600">
            データソース: ローカルキャッシュ<br />
            最終更新: {new Date().toLocaleDateString('ja-JP')}
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto h-screen">
        <header className="flex justify-between items-end mb-8 pb-4 border-b border-slate-200">
          <div>
            <h2 className="text-2xl font-serif font-bold text-slate-800">グローバル医療インサイト</h2>
            <p className="text-slate-500 mt-1 flex items-center gap-2">
              現在 {articles.length}件のシグナルを監視中
              <span className="w-1 h-1 rounded-full bg-slate-400"></span>
              {filteredArticles.length}件を表示
            </p>
          </div>
          <div className="hidden md:flex gap-3">
            <button className="px-4 py-2 bg-white border border-slate-300 text-slate-600 text-sm font-medium rounded hover:bg-slate-50 flex items-center gap-2">
              <LayoutGrid size={16} /> グリッド表示
            </button>
          </div>
        </header>

        {filteredArticles.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-lg border border-dashed border-slate-300">
            <Filter className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-medium text-slate-500">該当するシグナルが見つかりません</h3>
            <p className="text-slate-400 text-sm">検索条件を変更してください。</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedRegion('All'); setSelectedRisk('All'); /* setSelectedCompany('All'); */ }}
              className="mt-4 text-blue-600 text-sm font-medium hover:underline"
            >
              フィルターをクリア
            </button>
          </div>
        ) : (
          <div className={`grid grid-cols-1 xl:grid-cols-2 gap-6`}>
            {filteredArticles.map(article => (
              <RiskScenarioCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

