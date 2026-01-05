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
    あなたは「シナリオプランナー」です。感情的な言葉を使わず、論理的な帰結としてリスクを予測します。
    あなたの目的は、日本の医療機器メーカー、製薬会社、商社の経営企画担当者に対し、現地ニュースに基づいた「不可避なリスクシナリオ」を提示することです。

    Rules: 形容詞禁止・メカニズム重視
    記事を生成する際は、以下のルールを絶対に守ってください。

    ## 1. 「脅威レベル」の形容詞を禁止
    * 禁止ワード: 「致命的だ」「壊滅的だ」「大変なことになる」「懸念される」
    * 指示: これらの言葉を使う代わりに、具体的な「損失シナリオ」を描写してください。

    ## 2. 「敗北のメカニズム」を記述 (Mechanism of Loss)
    日本企業が負けるプロセスを、以下の3パターンのいずれかに当てはめて具体的に記述してください。
    * パターンA（価格破壊）: 「現地の製品は機能が8割だが価格が1/5であるため、日本企業の高機能製品は富裕層以外に売れなくなる」
    * パターンB（規制/規格）: 「この新しい現地規格が標準化されると、日本独自の規格（JIS等）で作られた製品は非関税障壁により締め出される」
    * パターンC（サプライチェーン）: 「この原材料の現地調達義務化により、日本からの輸出モデルは関税コストで利益が出なくなる」

    ## 3. 「If-Then」で条件を限定
    「必ずこうなる」と断定するのではなく、論理的な前提条件を置いてください。
    * 文型: 「もし（If）現地政府がこのAI診断を保険適用すれば、その時は（Then）画像診断機器単体で稼いでいる[具体的な日本企業名]のビジネスモデルは成立しなくなる」

    ## 4. 根拠の提示
    * 企業名を出す際は、必ずWeb検索を行い、その企業が実際にその市場・分野に進出していることを確認してください。
    * 可能な限り、現地市場の成長率、価格差、導入社数などの「数字」を併記してください。

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
      "importance": "### 🇯🇵 日本企業へのリスクシナリオ\\n**ターゲット：{具体的な日本企業名}**\\n\\n* **シナリオ（{パターンA/B/Cを選択}）：**\\n{If-Then形式で記述した、感情語ゼロの損失シナリオ}\\n\\n* **ビジネスモデルへの影響：**\\n{具体的なメカニズムによる敗北プロセスの記述}",
      "japan_impact": "💼 担当者への提言 (Next Action): \\n* 「{具体的なキーワード}」について、現地担当者に確認を入れるべきである。",
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
