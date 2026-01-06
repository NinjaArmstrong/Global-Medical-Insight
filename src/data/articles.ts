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
    id: "2025-01-comp-stryker",
    title: "【北米】Stryker：Inari Medicalを49億ドルで買収（確定情報）",
    region: "北米",
    date: "2025/01/06",
    riskLevel: "High",
    scenario: "Stryker社は静脈血栓除去デバイス大手のInari Medicalを49億ドル（約7,100億円）で買収することに合意。2025年Q1に完了予定。",
    impact: "血管内治療領域の競合である日本企業（テルモ、朝日インテック）の米国シェア争いに直接的な影響。",
    action: "米国市場におけるVTE（静脈血栓塞栓症）製品の販売戦略見直しと、競合製品との差別化データ作成。",
    url: "https://www.stryker.com/us/en/about/news/2025/stryker-to-acquire-inari-medical.html"
  },
  {
    id: "2025-01-reg-fda-ai",
    title: "【北米】FDA：AI搭載医療機器のライフサイクル管理ガイダンス（Draft）発行",
    region: "北米",
    date: "2025/01/06",
    riskLevel: "Medium",
    scenario: "FDAはAI/ML搭載機器の市販後性能モニタリング、変更管理（PCCP）、透明性確保に関する詳細なドラフトガイダンスを発行。",
    impact: "AI画像診断機器を開発する日本メーカー（富士フイルム、キヤノン、オリンパス）の米国承認申請要件が具体化。",
    action: "開発中のAIモデルに対する「データドリフト監視計画」の策定と、FDA推奨フォーマットへの文書化。",
    url: "https://www.fda.gov/medical-devices/medical-device-safety/artificial-intelligence-and-machine-learning-aiml-software-medical-device"
  },
  {
    id: "2025-01-supply-baxter",
    title: "【北米】Baxter：ノースカロライナ工場（North Cove）の全ライン再稼働",
    region: "北米",
    date: "2025/01/28",
    riskLevel: "Medium",
    scenario: "ハリケーンHeleneの影響で停止していた米国最大の輸液工場が、全製造ラインの再稼働を発表。供給量はQ1中に正常化見込み。",
    impact: "米国市場における輸液・無菌製剤の供給不足解消による、代替品（日本からの緊急輸出等）の特需終了。",
    action: "米国向け輸出計画の正常化（縮小）と、国内供給優先へのシフト。",
    url: "https://www.aha.org/news/headline/2025-01-28-baxter-restarts-production-all-lines-north-cove-facility"
  }
];
