
import { GoogleGenerativeAI } from '@google/generative-ai';
// import { db } from '@vercel/postgres'; // Assuming you will use this later for saving
import { supabase } from './supabase'; // Or keep using Supabase if the user wants hybrid? The prompt said Vercel Postgres, but let's stick to the prompt's Vercel Postgres instruction for DB setup, but for fetching, we likely need to save there.
// Wait, the prompt explicitly said "1. Database Setup (Vercel Postgres)".
// But for fetching logic, it didn't strictly say where to save, but implied the new DB.
// Let's use @vercel/postgres for saving.

import { sql } from '@vercel/postgres';

// Define types
interface NewsItem {
    title: string;
    link: string;
    snippet: string;
    pagemap?: any;
}

interface AnalyzedArticle {
    title: string;
    countrY: string; // Will handle casing in logic
    date: string;
    risk_level: 'High' | 'Medium' | 'Low';
    content_risk: string;
    content_impact: string;
    content_action: string;
}

// Region Mapping (Optimized for OR queries)
const REGION_QUERIES = {
    'North America': '(site:gov OR site:cnn.com OR site:reuters.com) ("medical supply chain" OR "FDA approval" OR "shortage") (USA OR Canada) after:2025-10-01',
    'Europe': '(site:ema.europa.eu OR site:bbc.com OR site:reuters.com) ("medical device regulation" OR "MDR" OR "shortage") (EU OR Germany OR UK OR Switzerland OR France OR Italy OR Spain OR Netherlands OR Finland) after:2025-10-01',
    'Middle East': '(site:gov.sa OR site:thenationalnews.com OR site:arabnews.com) ("healthcare regulation" OR "medical tender" OR "localization") (Saudi Arabia OR UAE OR Egypt) after:2025-10-01',
    'Africa': '(site:who.int OR site:allafrica.com) ("medical supply" OR "regulatory authority") (Nigeria OR South Africa OR Kenya) after:2025-10-01',
    'South Asia': '(site:gov.in OR site:dawn.com OR site:timesofindia.indiatimes.com) ("CDSCO" OR "DRAP" OR "medical device rules") (India OR Bangladesh OR Pakistan) after:2025-10-01',
    'SE Asia': '(site:channelnewsasia.com OR site:bangkokpost.com OR site:vietnamnews.vn) ("medical device" OR "halal" OR "FDA") (Indonesia OR Vietnam OR Thailand OR Malaysia OR Philippines OR Singapore) after:2025-10-01',
    'East Asia': '(site:jp OR site:cn OR site:kr) ("medical device" OR "NMPA" OR "MFDS") (China OR South Korea OR Taiwan OR Japan OR Australia) after:2025-10-01',
    'Latin America': '(site:mercopress.com OR site:bnamericas.com) ("ANVISA" OR "COFEPRIS" OR "medical regulation") (Brazil OR Mexico OR Colombia) after:2025-10-01'
};

// Google Search API
async function searchGoogle(query: string): Promise<NewsItem[]> {
    const apiKey = process.env.GOOGLE_SEARCH_API_KEY; // User needs to provide this? Or Custom Search API Key
    const cx = process.env.GOOGLE_SEARCH_CX;

    if (!apiKey || !cx) {
        console.warn('Missing GOOGLE_SEARCH_API_KEY or GOOGLE_SEARCH_CX');
        return [];
    }

    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${encodeURIComponent(query)}&num=5`; // Limit to 5 per region to save quota

    try {
        const res = await fetch(url);
        const data = await res.json();
        if (!data.items) {
            console.error('Google Search Warning: No items found. Response:', JSON.stringify(data).substring(0, 200));
        }
        return data.items || [];
    } catch (e) {
        console.error('Google Search Failed:', e);
        return [];
    }
}

// Gemini Analysis
async function analyzeWithGemini(item: NewsItem, region: string): Promise<AnalyzedArticle | null> {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return null;

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-flash-latest' });

    const prompt = `
あなたは、日本の大手医療機器メーカーの経営層から信頼される「凄腕の経営参謀（Strategic Advisor）」です。
提供されたニュース記事に基づき、日本のビジネス習慣に最適化された「鋭いインサイト」を作成してください。

# 制約事項 (Tone & Manner)
1. **リスクシナリオ (Risk):**
   - 感情を排し、冷徹に「経営的実害（金銭・シェア・法務リスク）」を指摘してください。
   - 文体: 「だ・である」調。
   - キーワード: 「禁輸措置」「デムラージュ」「入札資格喪失」「リコール」

2. **企業への影響 (Impact):**
   - 文体: 「だ・である」調。
   - 具体的に: 「カテーテル」「IVD試薬」「クラスIIIインプラント」など、製品セグメントを指名してください。

3. **推奨アクション (Action):**
   - 相手の立場に立った「提案型」のアドバイス。命令形は厳禁。
   - 文体: 「です・ます」調（～が推奨されます、～体制が急務です）。
   - 必須要素: 「誰が（SCM部門、薬事部）」「何を」すべきか明記。

Input News:
Title: ${item.title}
Link: ${item.link}
Snippet: ${item.snippet}
Region: ${region}

Output JSON ONLY:
{
  "title": "Translated/Refined Japanese Title",
  "country": "Inferred Country Name (e.g. India)",
  "risk_level": "High" | "Medium" | "Low",
  "content_risk": "Risk Scenario text...",
  "content_impact": "Impact text...",
  "content_action": "Action text..."
}
`;

    // Retry logic for 429 (Rate Limit)
    for (const attempt of [1, 2, 3]) {
        try {
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();
            // Simple JSON extraction
            const jsonStr = text.substring(text.indexOf('{'), text.lastIndexOf('}') + 1);
            const data = JSON.parse(jsonStr);

            return {
                ...data,
                date: new Date().toISOString().split('T')[0] // Use current date for "Real-Time"
            };
        } catch (e: any) {
            console.error(`Gemini Analysis Failed (Attempt ${attempt}/3):`, e.status || e.message);

            // If Rate Limit (429) or Service Unavailable (503), wait and retry
            if (e.status === 429 || e.status === 503) {
                console.log(`  ⏳ Rate limit hit. Waiting ${attempt * 10} seconds...`);
                await new Promise(r => setTimeout(r, attempt * 10000));
                continue;
            }

            // Other errors, break
            return null;
        }
    }
    return null;
}

export async function runRealTimeUpdate(targetRegion?: string) {
    console.log('🚀 Starting Real-Time News Update...');

    for (const [region, query] of Object.entries(REGION_QUERIES)) {
        if (targetRegion && region !== targetRegion) continue;

        console.log(`Processing Region: ${region}`);
        const items = await searchGoogle(query);
        console.log(`  Found ${items.length} items.`);

        for (const item of items) {
            console.log(`  Analyzing: ${item.title.substring(0, 30)}...`);
            const analysis = await analyzeWithGemini(item, region);

            if (analysis) {
                // Save to DB
                try {
                    await sql`
            INSERT INTO articles (region, country, title, url, date, risk_level, content_risk, content_impact, content_action)
            VALUES (${region}, ${analysis.countrY || region}, ${analysis.title}, ${item.link}, ${analysis.date}, ${analysis.risk_level}, ${analysis.content_risk}, ${analysis.content_impact}, ${analysis.content_action})
            ON CONFLICT (url) DO NOTHING;
          `;
                    console.log(`  ✅ Saved: ${analysis.title}`);
                } catch (dbErr) {
                    console.error('  ❌ DB Save Failed:', dbErr);
                }
            }

            // Delay to avoid rate limits (Safe: 10s)
            await new Promise(r => setTimeout(r, 10000));
        }
    }
}
