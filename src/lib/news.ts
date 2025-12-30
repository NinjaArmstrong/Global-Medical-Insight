import { GoogleGenerativeAI } from '@google/generative-ai';
import { NewsAPIResponse } from './types';
import { subDays, format } from 'date-fns';

const NEWS_API_KEY = process.env.NEWS_API_KEY;

// --- Configuration per language ---

// 1. English (Global/Business/South Asia/East Africa)
// 1a. English (South Asia)
const QUERY_EN_ASIA = {
    keywords: [
        '"Pharmaceutical market"', '"Drug approval"', '"Pharma M&A"',
        '"Hospital infrastructure"', '"Healthcare policy"', '"Ministry of Health"'
    ],
    countries: [
        'India', 'Pakistan', 'Bangladesh', '"Sri Lanka"', 'Nepal'
    ]
};

// 1b. English (Africa / Middle East)
const QUERY_EN_EMEA = {
    keywords: [
        '"Pharmaceutical market"', '"Drug approval"',
        '"Hospital infrastructure"', '"Healthcare policy"', '"Ministry of Health"'
    ],
    countries: [
        '"Saudi Arabia"', '"United Arab Emirates"', 'Israel', 'Turkey', 'Qatar', 'Kuwait',
        '"South Africa"', 'Nigeria', 'Egypt', 'Kenya', 'Ethiopia', 'Ghana'
    ]
};

// 2. French (West/North Africa)
const QUERY_FR = {
    keywords: [
        'Santé', '"Industrie pharmaceutique"', 'Médicament', 'Hôpital',
        '"Ministère de la Santé"', '"Réforme médicale"', '"Assurance maladie"',
        'Vaccination', '"Dispositif médical"'
    ],
    countries: [
        'Maroc', 'Algérie', 'Tunisie', '"Côte d\'Ivoire"', 'Sénégal',
        'Cameroun', '"République démocratique du Congo"', 'Mali'
    ]
};

// 3. Arabic (Middle East/North Africa)
const QUERY_AR = {
    keywords: [
        'صحة', 'دواء', 'مستشفى', '"وزارة الصحة"', '"قطاع الأدوية"',
        '"التأمين الصحي"', '"السياحة العلاجية"', '"الاستثمار الطبي"'
    ],
    countries: [
        '"المملكة العربية السعودية"', '"الإمارات العربية المتحدة"', 'مصر', 'قطر',
        'الكويت', 'عمان', '"الأردن"', 'العراق', 'البحرين'
    ]
};

async function fetchByConfig(config: { keywords: string[], countries: string[] }, lang: string): Promise<any[]> {
    const apiKey = process.env.NEWS_API_KEY;
    if (!apiKey) return [];

    const to = new Date();
    const from = subDays(to, 7);
    const fromStr = format(from, 'yyyy-MM-dd');

    try {
        const keywordsQuery = config.keywords.join(' OR ');
        const countriesQuery = config.countries.join(' OR ');
        const q = `(${keywordsQuery}) AND (${countriesQuery})`;

        // Check query length limits (NewsAPI has limits approx 500 chars usually, but documentation says query string length. Browser URL limit is ~2000. 
        // If it fails, we might need to split. But let's try combined first.
        // 'q' is URL encoded.
        // console.log(`Query len: ${q.length}, Q: ${q}`);

        console.log(`Fetching [${lang}] news...`);
        const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(q)}&language=${lang}&sortBy=publishedAt&pageSize=15&apiKey=${apiKey}`;

        // Debug logging
        // console.log(`URL (masked): ${url.replace(apiKey, 'HIDDEN')}`);

        const res = await fetch(url, { next: { revalidate: 900 } });
        const data: NewsAPIResponse = await res.json();

        console.log(`[${lang}] Status: ${data.status}, Total: ${data.totalResults}`);

        if (data.status === 'error') {
            console.error(`[${lang}] Error details:`, JSON.stringify(data));
        }

        if (data.status === 'ok' && data.articles) {
            return data.articles.filter(a => a.source.name !== '[Removed]' && a.url && a.title);
        } else {
            console.warn(`NewsAPI [${lang}] error or empty:`, data.status);
            return [];
        }
    } catch (e) {
        console.error(`Failed to fetch [${lang}] news`, e);
        return [];
    }
}

export async function fetchRawNews(): Promise<any[]> {
    const [enAsia, enEmea, fr, ar] = await Promise.all([
        fetchByConfig(QUERY_EN_ASIA, 'en'),
        fetchByConfig(QUERY_EN_EMEA, 'en'),
        fetchByConfig(QUERY_FR, 'fr'),
        fetchByConfig(QUERY_AR, 'ar')
    ]);

    const combined = [...enAsia, ...enEmea, ...fr, ...ar];

    // Basic Deduplication by URL
    const unique = Array.from(new Map(combined.map(item => [item.url, item])).values());

    console.log(`Total unique articles fetched: ${unique.length} (En: ${enAsia.length + enEmea.length}, Fr: ${fr.length}, Ar: ${ar.length})`);
    return unique;
}
