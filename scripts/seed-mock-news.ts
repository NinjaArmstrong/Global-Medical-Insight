import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Dynamic import moved inside seed function

const mockArticles = [
    {
        title: 'インド製薬市場、2026年までに500億ドル規模へ：日本企業への機会',
        original_title: 'India Pharma Market to cross $50B by 2026',
        url: 'https://example.com/news/india-pharma-2026',
        source_domain: 'economictimes.indiatimes.com',
        published_at: new Date().toISOString(),
        summary_points: [
            'ジェネリック医薬品の輸出拡大が成長を牽引',
            '政府によるPLIスキーム（生産連動型優遇策）が奏功',
            'バイオシミラー分野での提携が急増中'
        ],
        importance: 'インドは「世界の薬局」としての地位を固めつつあり、サプライチェーンの多様化を目指すグローバル企業にとって重要なパートナーとなっています。',
        japan_impact: '日本の製薬メーカーにとっては、原薬調達の安定化や、現地のCDMO（医薬品受託製造）企業との提携によるコスト競争力強化のチャンスです。',
        region: ['South Asia'],
        category: 'Pharma',
        image_url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop'
    },
    {
        title: 'サウジアラビア、医療DXに100億ドル投資：Vision 2030の一環',
        original_title: 'Saudi Arabia invests $10B in Digital Health under Vision 2030',
        url: 'https://example.com/news/saudi-health-vision',
        source_domain: 'arabnews.com',
        published_at: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
        summary_points: [
            '遠隔医療プラットフォームの全国展開',
            'AIを活用した診断・予防医療システムの導入',
            '電子カルテ（EHR）の統一規格策定'
        ],
        importance: 'サウジアラビアは石油依存からの脱却を目指し、ヘルスケア分野を重点投資領域としています。急速なデジタル化は市場参入の障壁を下げる要因となります。',
        japan_impact: '日本の医療機器メーカーやヘルステック企業にとって、画像診断AIや遠隔医療システムの輸出拡大の好機。現地パートナーとの合弁が鍵となります。',
        region: ['Middle East'],
        category: 'Tech',
        image_url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop'
    },
    {
        title: 'ナイジェリア、マラリアワクチン導入を開始：アフリカ初の試み',
        original_title: 'Nigeria begins malaria vaccine rollout',
        url: 'https://example.com/news/nigeria-malaria-vaccine',
        source_domain: 'bbc.com',
        published_at: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
        summary_points: [
            'WHO推奨のR21/Matrix-Mワクチンの接種開始',
            '5歳未満の小児死亡率削減に期待',
            'コールドチェーン整備が課題'
        ],
        importance: 'マラリアは同国の主要な死因の一つであり、ワクチンの普及は公衆衛生上の画期的な進歩です。',
        japan_impact: 'コールドチェーン技術（保冷輸送）を持つ日本企業（物流、冷蔵機器）にとって、インフラ整備支援としてのビジネスチャンスがあります。',
        region: ['Africa'],
        category: 'Policy',
        image_url: 'https://images.unsplash.com/photo-1584036561566-b937500d7560?w=800&auto=format&fit=crop'
    }
];

async function seed() {
    const { supabase } = await import('../src/lib/supabase');
    console.log('Seeding mock data...');

    for (const article of mockArticles) {
        const { error } = await supabase.from('articles').upsert(article, { onConflict: 'url' });
        if (error) {
            console.error('Error inserting:', article.title, error);
        } else {
            console.log('Inserted:', article.title);
        }
    }
    console.log('Done.');
}

seed();
