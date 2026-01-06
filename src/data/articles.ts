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
  // --- Market & Competitors (Latest) ---
  {
    id: "2025-01-comp-stryker",
    title: "【北米】Stryker：Inari Medicalを49億ドルで買収（静脈疾患治療強化）",
    region: "北米",
    date: "2025/01/06",
    riskLevel: "High",
    scenario: "Strykerは静脈血栓塞栓症（VTE）治療デバイス大手のInari Medicalを買収することに合意。2025年Q1に完了予定。",
    impact: "血管内治療領域で競合するテルモ、朝日インテックにとって、北米市場での強力な競合が出現。",
    action: "米国市場におけるVTE製品の販売戦略見直しと、自社製品の医療経済性データの拡充。",
    url: "https://www.stryker.com/us/en/about/news/2025/stryker-to-acquire-inari-medical.html"
  },
  {
    id: "2025-01-comp-bsc",
    title: "【北米】Boston Scientific：Bolt Medicalを買収し血管内結石破砕（IVL）へ参入",
    region: "北米",
    date: "2025/01/07",
    riskLevel: "Medium",
    scenario: "Boston ScientificはBolt Medicalの残存株式を取得し、J&J（Shockwave）が独占していたIVL市場へ参入。",
    impact: "カテーテル治療（PCI）製品を持つ日本企業（テルモ、カネカ）にとって、IVL併用療法への対応が急務。",
    action: "IVL互換性データの取得や、石灰化病変向けデバイスの差別化訴求。",
    url: "https://news.bostonscientific.com"
  },
  {
    id: "2024-12-comp-jj",
    title: "【北米】J&J：Shockwave Medical買収完了による循環器ポートフォリオ統合",
    region: "北米",
    date: "2024/12/15",
    riskLevel: "High",
    scenario: "J&JはShockwave Medicalの買収を完了し、Abiomed（ポンプ）、Biosense Webster（不整脈）と合わせた循環器統合ソリューションを展開。",
    impact: "循環器領域の「ワンストップ化」が進み、単体デバイスメーカー（日本企業含む）の商談機会が減少するリスク。",
    action: "ニッチトップ製品を持つ他社とのアライアンスによる、パッケージ提案力の強化。",
    url: "https://www.jnj.com/media-center/press-releases/johnson-johnson-completes-acquisition-of-shockwave-medical"
  },
  {
    id: "2024-11-comp-edwards",
    title: "【北米】Edwards Lifesciences：JenaValveおよびEndotronixの買収完了",
    region: "北米",
    date: "2024/11/20",
    riskLevel: "Medium",
    scenario: "Edwardsは構造的心疾患治療（TAVR）のリーダーシップ強化のため、JenaValve（大動脈弁逆流症治療）等の買収を完了。",
    impact: "構造的心疾患領域での開発を進める日本企業にとって、特許網や臨床データの壁が高まる。",
    action: "買収により重複したパイプラインの隙間を狙った、次世代製品の開発ロードマップ策定。",
    url: "https://www.edwards.com/newsroom"
  },

  // --- Supply Chain ---
  {
    id: "2025-01-supply-baxter",
    title: "【北米】Baxter：ノースカロライナ工場（North Cove）の全ライン再稼働",
    region: "北米",
    date: "2025/01/28",
    riskLevel: "Medium",
    scenario: "ハリケーン被害を受けた米国最大の輸液工場が全ライン再稼働。供給不足は解消に向かう。",
    impact: "米国への輸液緊急輸出を行っていた日本メーカー（大塚製薬工場等）の特需終了と、通常競争への回帰。",
    action: "輸出用在庫の国内転用計画と、米国撤退戦略（または継続戦略）の決定。",
    url: "https://www.aha.org/news/headline/2025-01-28-baxter-restarts-production-all-lines-north-cove-facility"
  },
  {
    id: "2025-01-supply-chips",
    title: "【グローバル】半導体：レガシーチップ不足の長期化と医療機器への影響",
    region: "グローバル",
    date: "2025/01/05",
    riskLevel: "High",
    scenario: "先端品への投資集中により、医療機器に使用されるレガシーチップ（成熟プロセス）の供給不足が2025年も継続。",
    impact: "患者モニタリング機器や検体検査装置を生産する日本メーカー（日本光電、シスメックス）の納期遅延リスク。",
    action: "半導体商社との長期枠組み契約の見直しと、代替チップへの設計変更（BOM変更）。",
    url: "https://www.gocarelectronic.com/news/semiconductor-shortage-forecast-2025"
  },
  {
    id: "2024-11-supply-eto",
    title: "【北米】滅菌規制：EPAによるEtO排出規制の適用猶予（2年延長）",
    region: "北米",
    date: "2024/11/25",
    riskLevel: "Medium",
    scenario: "FDA/EPAは、医療機器供給への影響を考慮し、EtO滅菌施設への新規制適用を2028年まで延長する方針を示唆。",
    impact: "北米輸出を行う日本企業にとって、滅菌委託先の急な閉鎖リスクは一時的に後退。",
    action: "猶予期間中に、電子線（E-beam）やX線滅菌などの代替手段への移行（バリデーション）を完了させる。",
    url: "https://www.fda.gov/medical-devices/content-premarket-submissions-management-cybersecurity-medical-devices"
  },
  {
    id: "2024-11-supply-moly",
    title: "【欧州】ラジオアイソトープ（Mo-99）：欧州製造施設のトラブルによる供給不足",
    region: "欧州",
    date: "2024/11/15",
    riskLevel: "High",
    scenario: "欧州の主要製造所でのトラブルにより、核医学診断に不可欠なモリブデン99（Mo-99）が一時的に不足。",
    impact: "RI検査薬（テクネチウム製剤）を扱う日本企業（日本メジフィジックス、富士フイルム富山化学）の原料調達難。",
    action: "南アフリカやオーストラリアなど、欧州以外の調達ルート確保と在庫積み増し。",
    url: "https://www.medline.com"
  },

  // --- Regulatory ---
  {
    id: "2025-01-reg-fda-ai",
    title: "【北米】FDA：AI搭載医療機器のライフサイクル管理ガイダンス（Draft）発行",
    region: "北米",
    date: "2025/01/06",
    riskLevel: "Medium",
    scenario: "FDAはAI/ML搭載機器の市販後性能モニタリング、変更管理（PCCP）に関する新ドラフトガイダンスを発行。",
    impact: "画像診断AI等を開発する日本企業（富士フイルム、キヤノン、オリンパス）の米国申請において、市販後監視計画の具体化が必須に。",
    action: "製品開発プロセスへの「データドリフト監視」の組み込みと、FDA意見公募への参加。",
    url: "https://www.fda.gov/medical-devices/medical-device-safety/artificial-intelligence-and-machine-learning-aiml-software-medical-device"
  },
  {
    id: "2025-01-reg-eu-notif",
    title: "【欧州】EU MDR：供給中断の事前通知義務（Regulation 2024/1860）完全適用",
    region: "欧州",
    date: "2025/01/10",
    riskLevel: "High",
    scenario: "1月10日より、EU域内で医療機器の供給中断が見込まれる場合、6ヶ月前までの当局および顧客への通知が義務化。",
    impact: "欧州向け輸出を行う日本企業（テルモ、ニプロ等）は、生産遅延が即座に法的義務違反となるリスク。",
    action: "SCM部門と薬事（RA）部門の連携強化と、供給リスクの早期アラートシステムの導入。",
    url: "https://www.arthurcox.com/knowledge/eu-mdr-new-obligations-for-supply-interruption-notifications/"
  },
  {
    id: "2025-01-reg-fda-offlabel",
    title: "【北米】FDA：適応外使用（Off-Label New Use）に関する最終ガイダンス発行",
    region: "北米",
    date: "2025/01/06",
    riskLevel: "Medium",
    scenario: "FDAは、未承認用途に関する企業からの科学的情報提供に関する最終ポリシーを明確化。",
    impact: "米国で新適応拡大を目指す日本企業（エーザイ、第一三共等）の情報提供活動の自由度とコンプライアンス基準が明確化。",
    action: "メディカルアフェアーズ（MA）部門の情報提供ガイドライン改訂。",
    url: "https://www.druganddevicelawblog.com"
  },
  {
    id: "2024-11-reg-china-gmp",
    title: "【東アジア】中国NMPA：改正医療機器GMP（製造管理規範）の公布",
    region: "東アジア",
    date: "2024/11/04",
    riskLevel: "High",
    scenario: "NMPAは現行のGMPを大幅に改定し、2026年11月からの施行を発表。海外製造所への査察強化やデータ完全性が焦点。",
    impact: "中国へ輸出する日本企業（全メーカー）の工場に対し、NMPAによる模擬査察やより厳格なQMS運用が求められる。",
    action: "中国GMPとISO13485のギャップ分析（Gap Analysis）と、現地代理人への対応依頼。",
    url: "https://www.cms-lawnow.com"
  }
];
