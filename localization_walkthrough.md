# Localization Update Walkthrough

## 1. UI Localization
The dashboard UI has been localized to Japanese to provide a professional user experience.

### Sidebar & Navigation (`src/app/page.tsx`)
- **App Title**: "Intelligence Dashboard" → "グローバル医療インサイト"
- **Search**: "Keywords" → "キーワード検索", Placeholder → "記事を検索..."
- **Filters**:
    - "Region" → "対象地域" (Africa → アフリカ, Middle East → 中東, etc.)
    - "Risk Level" → "リスクレベル" (High → 高, etc.)
    - "Target Company" → "関連企業"
- **Status Bar**: "Monitoring X active signals" → "現在 X件のシグナルを監視中"

### Risk Scenario Card (`src/components/RiskScenarioCard.tsx`)
- **Headers**:
    - "Scenario" → "【リスクシナリオ】"
    - "Impact Analysis" → "【企業への影響 / インパクト】"
    - "Action" → "推奨アクション:"
    - "Original Source" → "オリジナル記事"
- **Badges**: "HIGH RISK" → "高リスク", "MEDIUM" → "中リスク", "LOW" → "低リスク"
- **Date Format**: YYYY/MM/DD format (e.g., 2026/1/3) using `toLocaleDateString('ja-JP')`

## 2. Data Consistency (`src/data/articles.ts`)
- Removed all English dummy articles.
- Updated the local data cache with **18 high-quality Japanese sample articles**.
- Articles cover various regions (Africa, South Asia, Middle East) and topics (Regulations, Strikes, Supply Chain).
- All `scenario`, `impact`, and `action_item` fields are now in Japanese.

## 3. Verification
- **Build Status**: `npm run build` passed successfully.
- **Type Safety**: TypeScript interfaces in `articles.ts` match the components.
