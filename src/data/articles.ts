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
  // --- CURRENT: Jan 2026 ---
  {
    id: "2026-01-redsea",
    title: "【グローバル】紅海・スエズ運河：フーシ派攻撃長期化と喜望峰ルートの常態化",
    region: "Global",
    date: "2026/01/06",
    riskLevel: "High",
    scenario: "フーシ派による商船攻撃が継続。主要海運会社はスエズ運河回避を維持し、リードタイムが14日以上増加。",
    impact: "欧州製医療機器の輸入遅延が常態化。コンテナ不足によるスポット運賃の突発的急騰リスク。",
    action: "航空便枠の確保と、リードタイム延長を見込んだ発注サイクルの完全移行。",
    url: "https://www.reuters.com/world/middle-east/"
  },
  {
    id: "2026-01-china-export",
    title: "【東アジア】中国：対米ガリウム・ゲルマニウム輸出規制の運用厳格化",
    region: "東アジア",
    date: "2026/01/05",
    riskLevel: "High",
    scenario: "中国商務省は輸出管理ライセンス制度の運用を厳格化。特定品目の審査期間が予測困難な状況が続いている。",
    impact: "半導体、センサー部材、およびX線検査装置用部材の調達不安定化。",
    action: "第三国（ベトナム・マレーシア等）からの代替調達ルートの確立と在庫積み増し。",
    url: "https://www.mining.com/markets/commodities/"
  },
  {
    id: "2026-01-baxter",
    title: "【北米】米国：輸液供給の完全正常化と新在庫ガイドライン",
    region: "北米",
    date: "2026/01/04",
    riskLevel: "Low",
    scenario: "ハリケーン被害からの復旧が完了し、Baxter社の生産能力は震災前水準に回復。FDAは供給制限解除を示唆。",
    impact: "輸液製品（IV Solutions）の調達難は解消。市場価格の安定化。",
    action: "緊急時対応（Allocation）プロトコルの解除と、平時発注への切り替え。",
    url: "https://www.baxter.com/baxter-newsroom"
  },
  {
    id: "2026-01-vietnam-power",
    title: "【東南アジア】ベトナム：北部工業団地の電力需給、乾季入りで警戒感",
    region: "東南アジア",
    date: "2026/01/03",
    riskLevel: "Medium",
    scenario: "送電網強化が進むものの、乾季の貯水率低下に伴い、北部地域でのピーク時電力予備率への懸念が再燃。",
    impact: "突発的な瞬時電圧低下による精密機器ラインへの影響リスク。",
    action: "UPS（無停電電源装置）の点検と、自家発電設備の燃料確保状況の確認。",
    url: "https://vpna.vn/"
  },

  // --- ARCHIVE: Late 2025 ---
  {
    id: "2025-11-india-logistics",
    title: "【南アジア】インド：主要港湾インフラの近代化投資と物流効率改善",
    region: "南アジア",
    date: "2025/11/15",
    riskLevel: "Low",
    scenario: "ムンバイ港およびチェンナイ港での新ターミナル稼働により、貨物滞留時間が前年比で改善傾向。",
    impact: "インド発着貨物のスケジュール精度向上。",
    action: "インド調達品目の安全在庫水準の見直し（適正化）。",
    url: "https://economictimes.indiatimes.com/industry/transportation/shipping"
  },
  {
    id: "2025-10-us-labor",
    title: "【北米】米国：港湾労使交渉の長期化と物流への影響",
    region: "北米",
    date: "2025/10/02",
    riskLevel: "Medium",
    scenario: "東海岸港湾労組（ILA）との交渉プロセスにおいて、一部業務のスローダウンが発生。",
    impact: "年末商戦向け貨物の荷役遅れと、西海岸ルートへのシフトによる混雑。",
    action: "北米向け物流ルートの分散化維持。",
    url: "https://www.cnbc.com/transportation/"
  },
  {
    id: "2025-08-mpox",
    title: "【アフリカ】WHO：Mpox（サル痘）感染拡大の鎮静化傾向",
    region: "アフリカ",
    date: "2025/08/20",
    riskLevel: "Medium",
    scenario: "アフリカ中部での感染拡大に対し、国際的なワクチン供給支援が進み、新規感染者数は減少傾向。",
    impact: "物流拠点での検疫強化措置の一部緩和。",
    action: "渡航制限の一部解除検討と、引き続きのモニタリング。",
    url: "https://www.who.int/emergencies/situations"
  },
  {
    id: "2025-07-cyber",
    title: "【グローバル】大規模サイバー攻撃による物流システム障害の教訓",
    region: "Global",
    date: "2025/07/15",
    riskLevel: "High",
    scenario: "大手物流インテグレーターを狙ったランサムウェア攻撃により、貨物追跡システムが一時停止。",
    impact: "サプライチェーンの可視性低下と、代替手段への切り替え混乱。",
    action: "物流ベンダーのセキュリティ体制評価基準の厳格化。",
    url: "https://www.cisa.gov/topics/cyber-threats-and-advisories"
  },
  {
    id: "2025-05-eu-policy",
    title: "【欧州】EU：新たな環境規制（エコデザイン規則）の施行準備",
    region: "欧州",
    date: "2025/05/10",
    riskLevel: "Medium",
    scenario: "持続可能な製品のためのエコデザイン規則（ESPR）の詳細要件が公表される。",
    impact: "欧州向け製品のデジタル製品パスポート（DPP）対応準備の本格化。",
    action: "製品データ（原材料、リサイクル性）の収集・管理体制の構築。",
    url: "https://commission.europa.eu/energy-climate-change-environment/standards-tools-and-labels/products-labelling-rules-and-requirements_en"
  },
  {
    id: "2025-04-taiwan-tech",
    title: "【東アジア】台湾：半導体産業の強靭化と生産分散の進展",
    region: "東アジア",
    date: "2025/04/05",
    riskLevel: "Low",
    scenario: "前年の地震教訓を活かし、主要ファウンドリ各社がBCP対策を強化。熊本・アリゾナ工場との連携も進む。",
    impact: "台湾有事リスクに対するサプライチェーンの冗長性向上。",
    action: "複数拠点からの調達オプションの確保継続。",
    url: "https://focustaiwan.tw/business"
  },
  {
    id: "2025-03-japan-logistics",
    title: "【東アジア】日本：物流2024年問題から1年、長距離輸送網の再編",
    region: "東アジア",
    date: "2025/03/20",
    riskLevel: "Medium",
    scenario: "トラックドライバー不足による長距離輸送のキャパシティ減に対し、フェリー・鉄道利用が定着。",
    impact: "リードタイムの延長（翌日配送→翌々日配送）が標準化。",
    action: "国内配送リードタイム設定の恒久的な見直し。",
    url: "https://www.mlit.go.jp/logistics/"
  }
];
