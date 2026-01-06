
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

// Load .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// New Type Definition for the local file
interface LocalArticle {
    id: string;
    title: string;
    published_at: string;
    region: string;
    company: string | null; // Extracted or inferred
    risk_level: number; // 1-5 stars
    scenario: string; // "If" part
    impact: string;   // "Then" part
    action_item: string; // Suggestion
    source_url: string;
    source_domain: string;
}

async function migrate() {
    console.log('Fetching articles from Supabase...');

    // Fetch diverse set of articles to populate the demo
    const { data: articles, error } = await supabase
        .from('articles')
        .select('*')
        .order('published_at', { ascending: false })
        .limit(50); // Get enough data

    if (error) {
        console.error('Migration failed:', error);
        return;
    }

    const localArticles: LocalArticle[] = articles.map(a => {
        // Basic mapping logic
        // We need to simulate/extract the new fields since they might not exist perfectly in the old DB

        // Randomize risk for visual variety in the dashboard since we don't have it
        const randomRisk = Math.floor(Math.random() * 5) + 1;

        let risk = randomRisk;
        if (a.importance?.includes('High')) risk = 5;
        if (a.importance?.includes('Low')) risk = 1;

        // Try to parse 'japan_impact' which likely contains some of the scenario/impact info
        const impactText = a.japan_impact || '';

        // Heuristic extraction
        const companyMatch = a.title.match(/(Canon|Fujifilm|Olympus|Eisai|Takeda|Sony|Toyota|Hitachi)/i);
        const company = companyMatch ? companyMatch[0] : 'General Market';

        return {
            id: a.id,
            title: a.title,
            published_at: a.published_at,
            region: Array.isArray(a.region) ? a.region[0] : (a.region || 'Global'),
            company: company,
            risk_level: risk,
            // Use existing summary or fallback
            scenario: (Array.isArray(a.summary_points) ? a.summary_points[0] : a.summary_points) || a.title,
            impact: impactText || 'Supply chain disruption and regulatory compliance risks identified.',
            action_item: 'Monitor local regulatory updates and assess competitor movement.',
            source_url: a.url,
            source_domain: a.source_domain || 'news.google.com'
        };
    });

    // Generate the TS file content
    const fileContent = `export interface Article {
  id: string;
  title: string;
  published_at: string;
  region: string;
  company: string;
  risk_level: number;
  scenario: string;
  impact: string;
  action_item: string;
  source_url: string;
  source_domain: string;
}

export const articles: Article[] = ${JSON.stringify(localArticles, null, 2)};
`;

    const outputPath = path.resolve(process.cwd(), 'src/data/articles.ts');

    // Ensure dir exists
    const dataDir = path.resolve(process.cwd(), 'src/data');
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
    }

    fs.writeFileSync(outputPath, fileContent);
    console.log(`Migration complete. Saved ${localArticles.length} articles to ${outputPath}`);
}

migrate();
