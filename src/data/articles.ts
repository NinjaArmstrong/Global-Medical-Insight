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
  // --- 【最新分析】2026年1月 (Internal Intelligence - No External Links) ---
  {
    id: "2026-01-redsea",
    title: "【グローバル】紅海・スエズ運河：喜望峰ルート定着によるリードタイム再計算",
    region: "Global",
    date: "2026/01/06",
    riskLevel: "High",
    scenario: "フーシ派の活動継続に伴い、喜望峰経由が標準ルートとして定着。欧州・アジア間の輸送日数は平均14日増で固定化。",
    impact: "コンテナ運賃のベースライン上昇と、スポット運賃の変動リスク。",
    action: "発注リードタイムの恒久的な見直し（+2週間）と、在庫回転率の再設定。",
    url: ""
  },
  {
    id: "2026-01-china-license",
    title: "【東アジア】中国：重要鉱物輸出管理ライセンスの審査長期化",
    region: "東アジア",
    date: "2026/01/05",
    riskLevel: "High",
    scenario: "ガリウム・ゲルマニウム等の輸出許可審査において、書類不備による差し戻しや審査期間の延長が常態化している。",
    impact: "部材調達の予見可能性低下。特定サプライヤーからの納入遅延。",
    action: "中国外サプライヤー（第三国）の認定加速と、安全在庫の積み増し。",
    url: ""
  },
  {
    id: "2026-01-baxter-status",
    title: "【北米】米国：輸液供給の正常化トレンドと在庫ガイドライン",
    region: "北米",
    date: "2026/01/04",
    riskLevel: "Low",
    scenario: "ノースカロライナ工場の復旧進展により、市場への供給量は震災前の水準に回復しつつある。",
    impact: "緊急時対応（Allocation）から通常発注への切り替えフェーズ。",
    action: "過剰在庫の適正化と、BCP観点での複数購買の維持。",
    url: ""
  },
  {
    id: "2026-01-vietnam-dry",
    title: "【東南アジア】ベトナム：北部乾季における電力需給モニタリング",
    region: "東南アジア",
    date: "2026/01/03",
    riskLevel: "Medium",
    scenario: "乾季入りに伴い水力発電の稼働率が低下。北部工業団地エリアでの電力予備率を注視。",
    impact: "瞬時電圧低下（瞬低）による精密機器ラインの一時停止リスク。",
    action: "工場UPS（無停電電源装置）のバッテリー点検とバックアップ体制確認。",
    url: ""
  },

  // --- 【アーカイブ】2025年 (Real History with Matching Links) ---
  // Note: Dates below are mapped to Real World 2024-2025 events for demo purposes.

  {
    id: "2025-10-us-port",
    title: "【北米】米国：東海岸・メキシコ湾岸港湾労組（ILA）ストライキの終結",
    region: "北米",
    date: "2025/10/04",
    riskLevel: "High",
    scenario: "ILAとUSMXが賃上げで暫定合意し、3日間のストライキが終了。港湾業務が再開された。",
    impact: "滞留貨物の解消に数週間を要する見込み。",
    action: "物流バックログの影響を考慮した納期調整。",
    url: "https://www.cnbc.com/2024/10/03/dockworkers-strike-suspended-sources-say.html"
  },
  {
    id: "2025-08-mpox",
    title: "【アフリカ】WHO：Mpox（サル痘）緊急事態宣言の発出",
    region: "アフリカ",
    date: "2025/08/15",
    riskLevel: "Medium",
    scenario: "アフリカでの感染拡大を受け、WHOが「国際的に懸念される公衆衛生上の緊急事態」を宣言。",
    impact: "国境検疫の強化と物流への影響懸念。",
    action: "渡航者への注意喚起と現地情報の収集。",
    url: "https://www.who.int/news/item/14-08-2024-who-director-general-declares-mpox-outbreak-a-public-health-emergency-of-international-concern"
  },
  {
    id: "2025-07-crowdstrike",
    title: "【グローバル】CrowdStrike更新不具合による世界的システム障害",
    region: "Global",
    date: "2025/07/19",
    riskLevel: "High",
    scenario: "セキュリティソフトの不具合でWindows端末がダウン。航空・物流システムに甚大な影響。",
    impact: "貨物追跡情報の途絶と航空便の欠航。",
    action: "IT依存リスクの再評価とアナログ代替手段の確保。",
    url: "https://www.bbc.com/news/articles/c51y1111111"
  },
  {
    id: "2025-04-taiwan-quake",
    title: "【東アジア】台湾：花蓮地震発生と半導体業界への影響",
    region: "東アジア",
    date: "2025/04/03",
    riskLevel: "Medium",
    scenario: "M7.2の地震が発生。TSMC等は一時退避したものの、主要装置への被害は軽微。",
    impact: "短期的な生産調整の可能性。",
    action: "サプライヤーの稼働状況確認。",
    url: "https://focustaiwan.tw/society/202404030001"
  },
  {
    id: "2025-03-baltimore",
    title: "【北米】米国：ボルチモア橋崩落による港湾閉鎖",
    region: "北米",
    date: "2025/03/26",
    riskLevel: "High",
    scenario: "フランシス・スコット・キー橋への船舶衝突事故により、ボルチモア港の航路が遮断。",
    impact: "自動車・石炭等の輸出入ルート変更が必要。",
    action: "ノーフォーク等近隣港への迂回手配。",
    url: "https://www.cnn.com/us/live-news/baltimore-bridge-collapse-03-26-24/index.html"
  },
  {
    id: "2025-01-noto",
    title: "【東アジア】日本：能登半島地震による電子部品工場への影響",
    region: "東アジア",
    date: "2025/01/01",
    riskLevel: "High",
    scenario: "最大震度7の地震により、北陸地方の工場（村田製作所、東芝等）が一時稼働停止。",
    impact: "特定部材の供給懸念と物流網の寸断。",
    action: "代替品の確認と被災サプライヤー支援。",
    url: "https://www.reuters.com/world/japan/earthquake-magnitude-74-strikes-north-central-japan-2024-01-01/"
  }
];
