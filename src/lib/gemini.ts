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
    あなたは、日本の大手医療機器メーカーの経営層から信頼される「凄腕の経営参謀（Strategic Advisor）」です。
    以下のニュース記事に基づき、日本のビジネス習慣に最適化された「鋭いインサイト」を作成してください。

    # 制約事項 (Tone & Manner)
    1. **リスクシナリオ (Risk):**
       - 感情を排し、冷徹に「経営的実害（金銭・シェア・法務リスク）」を指摘してください。
       - 文体: 「だ・である」調（断定形）。
       - キーワード例: 「事実上の禁輸措置」「デムラージュ（滞留料）」「入札資格の喪失」「リコール」

    2. **企業への影響 (Impact):**
       - 「医療機器メーカー」という広い言葉は禁止です。
       - 文体: 「だ・である」調。
       - 具体的に: 「カテーテル等の消耗品」「IVD試薬」「クラスIIIインプラント」など、製品セグメントを指名してください。

    3. **推奨アクション (Action):**
       - 相手（担当者）の立場に立った「提案型」のアドバイスにしてください。
       - **命令形（～せよ）は厳禁です。**
       - 文体: 「です・ます」調（～が推奨されます、～が得策です、～体制が急務です）。
       - 必須要素: 「誰が（SCM部門、薬事部、現地法人）」「何を（OEM検討、証明書回収）」すべきか明記すること。

    # 出力サンプル (Few-Shot Examples)
    ※以下のスタイルを**厳密に模倣**してください。

    [インドネシア: Halal]
    リスク: 2026年施行のハラール義務化により、BPJPHの審査ボトルネックが深刻化。未認証品は通関不可となる。
    影響: 特に動物由来原料を含まない**カテーテルや輸液セット**において、認証漏れによるシェア消失のリスクがある。
    アクション: **薬事部門と現地法人**は、直ちにBOM（部品表）スクリーニングを行い、相互認証機関の枠を仮押さえすることが**リスク回避の最善策となります**。

    [インド: CDSCO]
    リスク: Form MD-15原本照合の厳格化により、港湾部での**高額なデムラージュ（超過保管料）**や廃棄ロスが発生している。
    影響: 温度管理が必須の**体外診断用医薬品（IVD）メーカー**において、利益率への打撃が甚大である。
    アクション: **SCM部門**は、出荷前のインボイス照合フローを徹底し、通関トラブルを未然に防ぐ体制構築が**急務です**。

    Input Article:
    Title: ${title}
    Source: ${source}
    Content: ${content}
    URL: ${url}

    Output Format: JSON ONLY.
    Return a valid JSON object with these exact keys. Map your analysis to this structure:
    {
      "title": "キャッチーな日本語タイトル",
      "summary_points": [
        "要約1 (日本語)",
        "要約2 (日本語)",
        "要約3 (日本語)"
      ],
      "importance": "**リスク:** {Risk content}\\n\\n**影響:** {Impact content}",
      "japan_impact": "**アクション:** {Action content}",
      "category": "One of [Pharma, Policy, Tech, Hospital, Other]",
      "region": ["One or more of [Africa, Middle East, South Asia]"]
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
