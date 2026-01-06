export interface Article {
  id: string;
  title: string;
  region: string;
  date: string;
  riskLevel: "High" | "Medium" | "Low";
  scenario: string;
  impact: string;
  action: string;
  url: string;
}

export const articles: Article[] = [
  // --- Market & Competitors (Fresh: Oct 2025 - Jan 2026) ---
  {
    id: "2026-01-market-af-symposium",
    title: "【北米】Boston Scientific：2月のAF Symposium 2026にてFARAPULSE新データを発表へ",
    region: "北米",
    date: "2026/01/05",
    riskLevel: "Medium",
    scenario: "ボストンで開催されるAF Symposium 2026（2/5-7）にて、FARAPULSE PFAシステムの長期予後データおよび適応拡大試験の結果発表が予定されている。",
    impact: "PFA（パルスフィールドアブレーション）市場での優位性が再確認され、追従する日本光電やオリンパスの開発ロードマップへの圧力が増大。",
    action: "学会発表内容の速報収集と、自社PFA開発スケジュールへのベンチマーク反映。",
    url: "https://www.afsymposium.com"
  },
  {
    id: "2025-12-market-trials",
    title: "【グローバル】2025年臨床試験市場：腫瘍学・神経学領域が牽引し成長継続",
    region: "グローバル",
    date: "2025/12/20",
    riskLevel: "Low",
    scenario: "2025年の医療機器臨床試験市場レポートによると、市場規模は前年比6%増の180億ドル規模に到達。特にAI診断とウェアラブルの試験数が増加。",
    impact: "CRO（開発業務受託機関）のリソース逼迫により、日本企業の海外治験スケジュールが遅延するリスク。",
    action: "優先度の高い主要治験におけるCRO枠の早期確保と、分散型治験（DCT）の導入検討。",
    url: "https://www.grandviewresearch.com/industry-analysis/medical-device-clinical-trials-market"
  },

  // --- Supply Chain (Fresh: Oct 2025 - Jan 2026) ---
  {
    id: "2026-01-supply-outlook",
    title: "【グローバル】2026年サプライチェーン見通し：プロバイダーの80%が「不足継続」を予測",
    region: "グローバル",
    date: "2026/01/04",
    riskLevel: "High",
    scenario: "最新のQ4 2025調査において、医療機関の8割が「2026年も供給不足は解消しない」と回答。特に外科用消耗品と救急領域でのリスクが高い。",
    impact: "米国市場に依存する日本メーカー（ニプロ、テルモ等）に対し、安定供給証明（BCP）の提出要求がさらに強まる。",
    action: "顧客（GPO/IDN）に対する在庫可視化システムの提供提案と、北米物流拠点の分散化。",
    url: "https://www.beckershospitalreview.com/supply-chain/80-of-providers-expect-supply-chain-shortages-to-persist-in-2025.html"
  },
  {
    id: "2025-11-supply-semi",
    title: "【グローバル】半導体：医療機器向けレガシーチップ供給、2025年後半も改善見られず",
    region: "グローバル",
    date: "2025/11/15",
    riskLevel: "High",
    scenario: "2025年を通じて、先端チップへの投資集中が続き、医療機器に必須のレガシープロセスの生産能力は低迷したまま推移。",
    impact: "患者モニタリング機器（日本光電、フクダ電子）の生産リードタイムが短縮されず、年度末納品への影響懸念。",
    action: "2026年度分の部材確保に向けたスポット買い増しと、代替品認証の加速。",
    url: "https://www.gocarelectronic.com/news/semiconductor-shortage-forecast-2025"
  },

  // --- Regulatory (Fresh: Oct 2025 - Jan 2026) ---
  {
    id: "2026-01-reg-eu-mdr",
    title: "【欧州】EU MDR：Class IIIカスタムデバイス期限（2026年5月）まで残り4ヶ月",
    region: "欧州",
    date: "2026/01/07",
    riskLevel: "High",
    scenario: "インプラント可能なカスタムデバイスのMDR移行期限（2026年5月26日）が迫る中、Notified Bodyの審査枠は極めて逼迫している。",
    impact: "欧州でカスタムインプラント（整形外科等）を展開する日本企業にとって、期限内認証取得のラストチャンス。",
    action: "Notified Bodyとの緊急進捗確認会（Monthly Meeting）の設置と、技術文書の即時修正体制構築。",
    url: "https://health.ec.europa.eu/medical-devices-sector/new-regulations_en"
  },
  {
    id: "2025-12-reg-fda-ldt",
    title: "【北米】FDA：LDT（臨床検査室開発検査）規制強化の初年度総括",
    region: "北米",
    date: "2025/12/10",
    riskLevel: "Medium",
    scenario: "2025年に開始されたFDAによるLDTの医療機器としての段階的規制について、初年度の影響と2026年以降のフェーズ2（登録・報告）への準備状況が報告された。",
    impact: "米国でLDTサービスを提供する日本系検査会社（シスメックス、H.U.グループ等）の薬事コンプライアンスコスト増大。",
    action: "フェーズ2要件（有害事象報告等）に対応するためのPMS体制の米国拠点への導入。",
    url: "https://www.greenlight.guru/blog/fda-ldt-final-rule"
  }
];
