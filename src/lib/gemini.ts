import { GoogleGenerativeAI } from '@google/generative-ai';
import { Article, Category, Region } from './types';

// Helper to sanitize JSON string if the model returns markdown code blocks
function cleanJsonString(str: string): string {
    return str.replace(/```json/g, '').replace(/```/g, '').trim();
}

export async function summarizeArticleWithGemini(
    title: string,
    content: string,
    url: string,
    source: string
): Promise<Partial<Article> | null> {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.error('Missing GEMINI_API_KEY');
        return null; // or throw
    }
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' });

    const prompt = `
    You are a professional medical news analyst for the African, Middle Eastern, and South Asian markets.
    
    Task: Analyze the following news article and provide a summary in Japanese.
    
    Target Audience: Medical professionals, pharmaceutical executives, and hospital administrators.
    
    Article Title: ${title}
    Source: ${source}
    Content Snippet: ${content}
    URL: ${url}
    
    Requirements:
    1. **Title**: Translate to professional, eye-catching Japanese.
    2. **Summary**: Provide exactly 3 bullet points (max 150 characters each). Use precise medical terminology.
    3. **Importance**: Write 1 paragraph explaining why this news is important for the local healthcare system or pharmaceutical industry (local perspective).
    4. **Japan Impact**: Write 2-3 sentences analyzing "Opportunities or Risks for Japanese companies" (e.g., export timing, regulation barriers, investment chance).
    5. **Category**: Choose one from [Pharma, Policy, Tech, Hospital, Other].
    6. **Region**: Identify the primary region ([Africa, Middle East, South Asia]). Algorithm: based on country mentions (e.g., India/Pakistan -> South Asia, UAE/Saudi -> Middle East, Nigeria/Kenya -> Africa).
    
    Output Format: JSON only.
    {
      "title": "Japanese Title",
      "summary_points": ["Point 1", "Point 2", "Point 3"],
      "importance": "Local importance...",
      "japan_impact": "Impact on Japanese companies...",
      "category": "Pharma",
      "region": ["South Asia"]
    }
  `;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        const firstBrace = text.indexOf('{');
        const lastBrace = text.lastIndexOf('}');

        if (firstBrace === -1 || lastBrace === -1) {
            throw new Error("No JSON found in response");
        }

        const cleanedText = text.substring(firstBrace, lastBrace + 1);
        const data = JSON.parse(cleanedText);

        return {
            title: data.title,
            summary_points: data.summary_points,
            importance: data.importance,
            japan_impact: data.japan_impact,
            category: data.category as Category,
            region: data.region as Region[],
        };
    } catch (error: any) {
        console.error('Gemini processing failed:', error);
        throw new Error(error.message || JSON.stringify(error));
    }
}

// --- Batch Functions for Phase 1 & 2 ---

export async function filterRelevantArticlesBatch(
    items: { id: string; title: string; source: string }[]
): Promise<string[]> {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) throw new Error('Missing GEMINI_API_KEY');

    // Config for faster/lighter model if available, otherwise Flash
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
        model: 'gemini-2.5-flash-lite',
        generationConfig: { responseMimeType: "application/json" }
    });

    const itemListStr = items.map(i => `- [ID: ${i.id}] ${i.title} (Source: ${i.source})`).join('\n');

    const prompt = `
    You are an expert medical news editor for the "Global South Medical Update".
    
    Task: Select articles that are RELEVANT to:
    1. Healthcare / Medicine / Pharma / Public Health.
    2. Affecting Global South (Africa, Middle East, South Asia) OR having global significance.
    3. SKIP: Sports, Politics (unless health policy), Celebrity gossip, General business (unless pharma).

    Input List:
    ${itemListStr}

    Output: JSON array of strings (ONLY the IDs of relevant articles).
    Example: ["id_1", "id_3"]
    `;

    try {
        const result = await model.generateContent(prompt);
        const text = result.response.text();
        return JSON.parse(text) as string[];
    } catch (e: any) {
        console.error('Batch Filter Failed:', e);
        throw e; // Propagate error to trigger retry/abort logic
    }
}

export async function translateTitlesBatch(
    items: { id: string; title: string }[]
): Promise<{ id: string; japanese_title: string }[]> {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) throw new Error('Missing GEMINI_API_KEY');

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
        model: 'gemini-2.5-flash-lite',
        generationConfig: { responseMimeType: "application/json" }
    });

    const itemListStr = items.map(i => `- [ID: ${i.id}] ${i.title}`).join('\n');

    const prompt = `
    Task: Translate these medical news titles into professional Japanese.
    Target Audience: Japanese healthcare professionals.
    Style: Concise, accurate, "Yahoo News" style.

    Input List:
    ${itemListStr}

    Output: JSON array of objects.
    Example: [{"id": "...", "japanese_title": "..."}]
    `;

    try {
        const result = await model.generateContent(prompt);
        const text = result.response.text();
        return JSON.parse(text) as { id: string; japanese_title: string }[];
    } catch (e: any) {
        console.error('Batch Translate Failed:', e);
        throw e;
    }
}
