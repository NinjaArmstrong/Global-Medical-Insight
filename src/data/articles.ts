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
    id: "2026-01-fda-ai-guidance",
    title: "【北米】FDA：AI搭載医療機器のライフサイクル管理に関する新ガイダンス案",
    region: "北米",
    date: "2026/01/06",
    riskLevel: "Medium",
    scenario: "FDAはAI/ML搭載機器の市販後性能モニタリングと変更管理に関する詳細な推奨事項を含むドラフトガイダンスを発行。",
    impact: "AI医療機器の承認申請におけるドキュメンテーション負荷増と、継続的な性能評価プロセスの確立が必要。",
    action: "開発中のAIアルゴリズムに対する変更管理計画（PCCP）の策定と、市販後データ収集基盤の整備。",
    url: "https://www.medicept.com/2025/01/06/fda-releases-new-draft-guidance-on-ai-enabled-device-lifecycle-management/"
  },
  {
    id: "2026-01-eu-supply-interruption",
    title: "【欧州】EU MDR：供給中断の事前通知義務（Regulation 2024/1860）が発効",
    region: "欧州",
    date: "2026/01/10",
    riskLevel: "High",
    scenario: "1月10日より、患者・公衆衛生にリスクをもたらすデバイス供給中断について、メーカーは6ヶ月前までの当局および医療機関への通知が義務化された。",
    impact: "通知義務違反によるペナルティリスクと、サプライチェーンの透明性に対する要求レベルの急上昇。",
    action: "供給リスク検知から当局報告までの社内フロー構築と、在庫数・生産計画のリアルタイム可視化。",
    url: "https://www.arthurcox.com/knowledge/eu-mdr-new-obligations-for-supply-interruption-notifications/"
  },
  {
    id: "2026-01-china-ivd-catalog",
    title: "【東アジア】中国NMPA：新IVD分類カタログの施行と試薬コード化",
    region: "東アジア",
    date: "2026/01/01",
    riskLevel: "Medium",
    scenario: "従来の分類体系を刷新した「体外診断用試薬分類カタログ」が完全施行され、新たな構造化コード要件が適用開始。",
    impact: "既存IVD製品の登録更新時における区分変更リスクと、ラベル・添付文書の改訂作業。",
    action: "自社製品の新カテゴリー該当性の確認と、現地代理人を通じた登録情報の整合性チェック。",
    url: "https://www.pacificbridgemedical.com/regulatory-updates/china-nmpa-implements-new-ivd-classification-catalog/"
  }
];
