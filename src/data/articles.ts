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
  {
    id: "2026-01-reg-fda-ai",
    title: "【北米】FDA：AI搭載医療機器のライフサイクル管理に関する新指針案",
    region: "北米",
    date: "2026/01/06",
    riskLevel: "Medium",
    scenario: "FDAはAI/ML搭載機器の市販後性能モニタリングと変更管理計画（PCCP）に関する新たなドラフトガイダンスを発行。",
    impact: "AI画像診断機器を展開する日本企業（富士フイルム、キヤノンメディカル、オリンパス等）の米国申請におけるデータ要件が厳格化。",
    action: "開発段階でのアルゴリズム変更プロトコル策定と、市販後データ収集の自動化検討。",
    url: "https://www.aha.org/news/headline/2025-01-06-fda-releases-draft-guidance-ai-enabled-medical-device-lifecycle-management"
  },
  {
    id: "2026-01-supply-eu-notif",
    title: "【欧州】EU MDR：供給中断の事前通知義務（Regulation 2024/1860）適用開始",
    region: "欧州",
    date: "2026/01/10",
    riskLevel: "High",
    scenario: "1月10日より、EU域内で医療機器の供給中断が見込まれる場合、6ヶ月前までの当局・医療機関への通知が完全義務化された。",
    impact: "欧州向けに輸出する日本メーカー（テルモ、朝日インテック等）は、生産トラブルが即座にコンプライアンス違反となるリスク。",
    action: "SCM部門とRA（薬事）部門の緊急連携フロー構築と、在庫リスクの早期検知システム導入。",
    url: "https://www.arthurcox.com/knowledge/eu-mdr-new-obligations-for-supply-interruption-notifications/"
  },
  {
    id: "2026-01-comp-bsc-bolt",
    title: "【北米】Boston Scientific：Bolt Medical買収による血管内治療ポートフォリオ強化",
    region: "北米",
    date: "2026/01/07",
    riskLevel: "Medium",
    scenario: "Boston ScientificはBolt Medicalの残存株式を取得し、レーザー血管内結石破砕術（IVL）市場へ本格参入。",
    impact: "カテーテル治療領域で競合する日本企業（テルモ、カネカ）にとって、北米市場での競争環境が激化。",
    action: "自社製品の価格競争力見直しと、ニッチ領域（末梢血管等）での差別化戦略の再考。",
    url: "https://dealforma.com/2025/01/07/boston-scientific-acquires-remaining-bolt-medical-stake-for-443m-upfront/"
  }
];
