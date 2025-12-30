export type Region = 'Africa' | 'Middle East' | 'South Asia';
export type Category = 'Pharma' | 'Policy' | 'Tech' | 'Hospital' | 'Other';

export interface Article {
  id?: string;
  title: string;          // Japanese translated title
  original_title: string; // Original English title
  url: string;            // Direct link
  source_domain: string;
  published_at: string;
  summary_points: string[]; // 3 bullet points
  importance: string;       // Why it's significant (local insight)
  japan_impact: string;     // Opportunities/Risks for Japanese companies
  region: Region[];
  category: Category;
  image_url?: string;
}

export interface NewsAPIResponse {
  status: string;
  totalResults: number;
  articles: Array<{
    source: { id: string | null; name: string };
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
  }>;
}
