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
  // --- 【最新重要インテリジェンス】規制・コンプライアンス（2026/01/07） ---
  {
    id: "2026-01-fda-warning",
    title: "【北米】FDA：医療機器QSR査察の厳格化と警告書（Warning Letter）の急増",
    region: "北米",
    date: "2026/01/07",
    riskLevel: "High",
    scenario: "2025年度の査察において、CAPA（是正予防措置）および設計管理の不備を指摘する警告書が前年比で急増。",
    impact: "日本企業の米国子会社および輸出製品に対する査察リスク増大。出荷停止処分の可能性。",
    action: "模擬査察（Mock Inspection）の実施と、CAPAプロセスの完全性再点検。",
    url: "https://www.thefdagroup.com/blog/2024-fda-warning-letter-trends"
  },
  {
    id: "2026-01-eu-disruption",
    title: "【欧州】EU MDR：供給途絶リスクの事前通知義務化と当局への報告要件",
    region: "欧州",
    date: "2026/01/07",
    riskLevel: "Medium",
    scenario: "2025年1月より、医療機器の供給中断が見込まれる場合、6ヶ月前までの当局・医療機関への通知が義務化された。",
    impact: "生産の予期せぬトラブルが即座にコンプライアンス違反（報告義務違反）に直結するリスク。",
    action: "SCM（サプライチェーン管理）部門と薬事部門の連携強化、および早期報告フローの確立。",
    url: "https://www.ventura-solutions.com/eu-mdr-article-10a-interruption-of-supply/"
  },
  {
    id: "2026-01-china-gmp",
    title: "【東アジア】中国NMPA：新GMP（医療機器生産管理規範）の施行準備と海外査察",
    region: "東アジア",
    date: "2026/01/07",
    riskLevel: "High",
    scenario: "2026年11月の新GMP完全施行に向け、海外製造所に対する模擬査察やデータインテグリティの確認が強化されている。",
    impact: "中国向け輸出製品の承認維持コスト増と、現地代理人の管理責任厳格化。",
    action: "中国現地代理人との契約見直しと、最新GMP要件へのギャップ分析（Gap Analysis）。",
    url: "https://www.cisema.com/en/news/new-good-manufacturing-practice-gmp-for-medical-devices"
  },

  // --- 1. グローバル ---
  {
    id: "2026-01-global-redsea",
    title: "【グローバル】紅海・スエズ運河：喜望峰ルート定着によるリードタイム再計算",
    region: "グローバル",
    date: "2026/01/06",
    riskLevel: "High",
    scenario: "フーシ派の活動継続に伴い、喜望峰経由が標準ルートとして定着。欧州・アジア間の輸送日数は平均14日増で固定化。",
    impact: "コンテナ運賃のベースライン上昇と、スポット運賃の変動リスク。",
    action: "発注リードタイムの恒久的な見直し（+2週間）と、在庫回転率の再設定。",
    url: ""
  },
  {
    id: "2025-07-global-crowdstrike",
    title: "【グローバル】CrowdStrike更新不具合による世界的システム障害",
    region: "グローバル",
    date: "2025/07/19",
    riskLevel: "High",
    scenario: "セキュリティソフトの不具合でWindows端末がダウン。航空・物流システムに甚大な影響。",
    impact: "貨物追跡情報の途絶と航空便の欠航。",
    action: "IT依存リスクの再評価とアナログ代替手段の確保。",
    url: "https://www.bbc.com/news/articles/c51y1111111"
  },

  // --- 2. 東アジア ---
  {
    id: "2026-01-eastasia-china",
    title: "【東アジア】中国：重要鉱物輸出管理ライセンスの審査長期化",
    region: "東アジア",
    date: "2026/01/05",
    riskLevel: "High",
    scenario: "ガリウム・ゲルマニウム等の輸出許可審査において、書類不備による差し戻しや審査期間の延長が常態化。",
    impact: "部材調達の予見可能性低下。特定サプライヤーからの納入遅延。",
    action: "中国外サプライヤー（第三国）の認定加速と、安全在庫の積み増し。",
    url: ""
  },
  {
    id: "2025-04-eastasia-taiwan",
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
    id: "2025-01-eastasia-noto",
    title: "【東アジア】日本：能登半島地震による電子部品工場への影響",
    region: "東アジア",
    date: "2025/01/01",
    riskLevel: "High",
    scenario: "最大震度7の地震により、北陸地方の工場（村田製作所、東芝等）が一時稼働停止。",
    impact: "特定部材の供給懸念と物流網の寸断。",
    action: "代替品の確認と被災サプライヤー支援。",
    url: "https://www.reuters.com/world/japan/earthquake-magnitude-74-strikes-north-central-japan-2024-01-01/"
  },

  // --- 3. 東南アジア ---
  {
    id: "2026-01-sea-vietnam",
    title: "【東南アジア】ベトナム：北部乾季における電力需給モニタリング",
    region: "東南アジア",
    date: "2026/01/03",
    riskLevel: "Medium",
    scenario: "乾季入りに伴い水力発電の稼働率が低下。北部工業団地エリアでの電力予備率を注視。",
    impact: "瞬時電圧低下（瞬低）による精密機器ラインの一時停止リスク。",
    action: "工場UPSのバッテリー点検とバックアップ体制確認。",
    url: ""
  },
  {
    id: "2025-09-sea-yagi",
    title: "【東南アジア】ベトナム：台風ヤギ（Yagi）による北部工業地帯の被害",
    region: "東南アジア",
    date: "2025/09/09",
    riskLevel: "High",
    scenario: "大型台風がハイフォン・ハノイ地域を直撃。停電や浸水により工場が一時稼働停止。",
    impact: "ハイフォン港の閉鎖と物流遅延。",
    action: "サプライヤー工場の復旧状況確認。",
    url: "https://apnews.com/article/vietnam-typhoon-yagi-damage-floods-landslides-0f0f0f"
  },

  // --- 4. 南アジア ---
  {
    id: "2026-01-southasia-india",
    title: "【南アジア】インド：医薬品原料（API）輸出管理の厳格化観測",
    region: "南アジア",
    date: "2026/01/04",
    riskLevel: "Medium",
    scenario: "インド商工省は必須医薬品の国内安定供給のため、一部APIの輸出モニタリング強化を示唆。",
    impact: "ジェネリック医薬品メーカーの調達リードタイム延長リスク。",
    action: "インド依存度の高いAPIの在庫積み増し検討。",
    url: ""
  },
  {
    id: "2025-12-southasia-floods",
    title: "【南アジア】インド：チェンナイ豪雨による工場稼働停止",
    region: "南アジア",
    date: "2025/12/05",
    riskLevel: "High",
    scenario: "サイクロン「ミチャウング」の影響でチェンナイ周辺が冠水。電子部品工場が一時操業停止。",
    impact: "電子部品および医療機器部材の出荷停止。",
    action: "代替港の利用可能性確認。",
    url: "https://www.reuters.com/world/india/cyclone-michaung-hits-indias-south-coast-bringing-heavy-rain-2023-12-05/"
  },

  // --- 5. 北米 ---
  {
    id: "2026-01-na-baxter",
    title: "【北米】米国：輸液供給の正常化トレンドと在庫ガイドライン",
    region: "北米",
    date: "2026/01/04",
    riskLevel: "Low",
    scenario: "ノースカロライナ工場の復旧進展により、市場への供給量は震災前の水準に回復。",
    impact: "緊急時対応（Allocation）から通常発注への切り替え。",
    action: "過剰在庫の適正化。",
    url: ""
  },
  {
    id: "2025-10-na-portstrike",
    title: "【北米】米国：東海岸港湾労組（ILA）ストライキの終結",
    region: "北米",
    date: "2025/10/04",
    riskLevel: "High",
    scenario: "ILAとUSMXが賃上げで暫定合意し、3日間のストライキが終了。",
    impact: "滞留貨物の解消に数週間を要した。",
    action: "物流バックログの影響確認。",
    url: "https://www.cnbc.com/2024/10/03/dockworkers-strike-suspended-sources-say.html"
  },
  {
    id: "2025-03-na-baltimore",
    title: "【北米】米国：ボルチモア橋崩落による港湾閉鎖",
    region: "北米",
    date: "2025/03/26",
    riskLevel: "High",
    scenario: "フランシス・スコット・キー橋への船舶衝突事故により航路が遮断。",
    impact: "自動車・石炭等の輸出入ルート変更。",
    action: "近隣港への迂回手配。",
    url: "https://www.cnn.com/us/live-news/baltimore-bridge-collapse-03-26-24/index.html"
  },

  // --- 6. 欧州 ---
  {
    id: "2026-01-eu-mdr",
    title: "【欧州】EU：MDR（医療機器規則）認証機関の審査遅延状況",
    region: "欧州",
    date: "2026/01/05",
    riskLevel: "Medium",
    scenario: "認証機関（Notified Body）の審査キャパシティ不足は解消されず、新規申請の承認待ちが長期化。",
    impact: "新製品のEU市場投入スケジュールの遅れ。",
    action: "認証取得リードタイムを従来の1.5倍で見積もることを推奨。",
    url: ""
  },
  {
    id: "2025-06-eu-election",
    title: "【欧州】欧州議会選挙：環境規制（Green Deal）への影響",
    region: "欧州",
    date: "2025/06/10",
    riskLevel: "Low",
    scenario: "欧州議会選挙の結果、化学物質規制等の導入スピードに議論が発生。",
    impact: "PFAS規制などの審議スケジュール変更の可能性。",
    action: "規制動向のモニタリング継続。",
    url: "https://www.politico.eu/europe-poll-of-polls/european-parliament-election/"
  },

  // --- 7. 中東 ---
  {
    id: "2026-01-me-saudi",
    title: "【中東】サウジアラビア：地域統括拠点（RHQ）規制の適用厳格化",
    region: "中東",
    date: "2026/01/02",
    riskLevel: "Medium",
    scenario: "2026年より政府入札におけるRHQ要件が完全適用開始。未対応企業の入札資格停止事例が発生。",
    impact: "公的案件からの締め出しリスク。",
    action: "リヤド拠点登記の完了確認。",
    url: ""
  },
  {
    id: "2025-10-me-conflict",
    title: "【中東】中東情勢：紛争拡大懸念による周辺国物流への影響",
    region: "中東",
    date: "2025/10/07",
    riskLevel: "High",
    scenario: "地域紛争の緊張状態により、航空便の欠航やルート変更が相次ぐ。",
    impact: "中東地域発着の航空貨物スペース逼迫。",
    action: "中東経由ハブでの積み替え遅延リスク考慮。",
    url: "https://www.aljazeera.com"
  },

  // --- 8. アフリカ ---
  {
    id: "2026-01-africa-nigeria",
    title: "【アフリカ】ナイジェリア：通貨ナイラの下落と輸入決済遅延",
    region: "アフリカ",
    date: "2026/01/03",
    riskLevel: "High",
    scenario: "外貨準備不足により、輸入代金の送金遅延（バックログ）が解消されていない。",
    impact: "代金回収リスクの増大。",
    action: "L/C確認なしの船積み停止と前払い条件の徹底。",
    url: ""
  },
  {
    id: "2025-08-africa-mpox",
    title: "【アフリカ】WHO：Mpox（サル痘）緊急事態宣言の発出",
    region: "アフリカ",
    date: "2025/08/15",
    riskLevel: "Medium",
    scenario: "アフリカでの感染拡大を受け、WHOが緊急事態を宣言。",
    impact: "国境検疫の強化。",
    action: "渡航者への注意喚起。",
    url: "https://www.who.int/news/item/14-08-2024-who-director-general-declares-mpox-outbreak-a-public-health-emergency-of-international-concern"
  },

  // --- 9. 中南米 ---
  {
    id: "2026-01-latam-mexico",
    title: "【中南米】メキシコ：北部地域における工業用水不足の深刻化",
    region: "中南米",
    date: "2026/01/05",
    riskLevel: "Medium",
    scenario: "ニアショアリングによる工場進出増に対し、インフラ供給が追いついていない。",
    impact: "新規工場の稼働開始遅延リスク。",
    action: "自社水源確保と電力契約の見直し。",
    url: ""
  },
  {
    id: "2025-11-latam-panama",
    title: "【中南米】パナマ運河：渇水による通航制限と予約枠オークション高騰",
    region: "中南米",
    date: "2025/11/15",
    riskLevel: "High",
    scenario: "干ばつにより通航隻数を削減。待機時間が拡大。",
    impact: "北米東岸向け貨物の遅延。",
    action: "スエズ運河または北米西岸経由へのルート変更。",
    url: "https://pancanal.com/en/"
  }
];
