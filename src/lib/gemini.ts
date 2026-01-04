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
    const model = genAI.getGenerativeModel({ model: 'gemini-flash-latest' });

    const prompt = `
    Role Definition:
    You are a world-class healthcare investment analyst and strategic consultant.
    Your clients are Corporate Planning Departments of major Japanese medical device manufacturers, pharmaceutical companies, and general trading companies.
    They are tired of "sugar-coated" or "generic" reports.
    Your job is to coldly analyze specific risks and opportunities linked to their stock prices and market share from local news.

    Critical Rules (Violations = Failure):
    1.  **Language**: ALL OUTPUT MUST BE IN JAPANESE (日本語).
    2.  **Mandatory Company Names**: When discussing "Japan Impact", you MUST name at least one specific Japanese company (e.g., Olympus, Terumo, Astellas Pharma, Takeda, etc.). Assert whether it is positive or negative for them.
    3.  **No Generalities**: Ban phrases like "Future trends are worth watching" or "This is a business opportunity." Instead, use definitive language: "Market share will be eroded by X% by 202X" or "Barriers to entry have collapsed."
    4.  **Numerical Evidence**: If the article lacks numbers, calculate estimates for market size or growth rates.
    5.  **Actionable Advice**: End with a one-line "Next Action" for the person in charge.

    Input Article:
    Title: ${title}
    Source: ${source}
    Content: ${content}
    URL: ${url}

    Output Format: JSON ONLY.
    Map your analysis to this structure:
    {
      "title": "キャッチーで煽情的な日本語タイトル (★★★☆☆のようなインパクトレベルを含める)",
      "summary_points": [
        "小学生でもわかるレベルの要約1 (日本語)",
        "小学生でもわかるレベルの要約2 (日本語)",
        "小学生でもわかるレベルの要約3 (日本語)"
      ],
      "importance": "🇯🇵 日本企業への「ガチ」影響分析 (The 'Real' Impact). \n**【名指し警告】: {具体的な日本企業名/銘柄コード}**\n* **シナリオ**: {シェアが脅かされる、または拡大する具体的なシナリオ}\n* **裏読み**: {競合の動きやリスクの深掘り}\n* **予測**: {3年以内の具体的予測}",
      "japan_impact": "💼 担当者への提言 (Next Action): \n* 「{具体的なキーワード}」について、現地駐在員に確認を入れるべきである。",
      "category": "One of [Pharma, Policy, Tech, Hospital, Other]",
      "region": ["One or more of [Africa, Middle East, South Asia] based on countries mentioned"]
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
            // Ensure these fields handle potential newlines or markdown from the big text blocks
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
        model: 'gemini-flash-latest',
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
        model: 'gemini-flash-latest',
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
