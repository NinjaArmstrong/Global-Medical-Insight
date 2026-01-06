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
  // --- Competitors (Jan 2025 / late 2024) ---
  {
    id: "2025-01-comp-stryker",
    title: "【北米】Stryker：Inari Medical買収合意を発表（2025/1/6）",
    region: "北米",
    date: "2025/01/06",
    riskLevel: "High",
    scenario: "Strykerは静脈血栓除去デバイス大手Inari Medicalを49億ドルで買収することに正式合意。",
    impact: "血管内治療領域の競合であるテルモ、朝日インテックにとって、北米市場での強力なライバルが出現。",
    action: "米国市場におけるVTE製品の販売戦略見直しと、自社製品の医療経済性データの拡充。",
    url: "https://www.stryker.com/us/en/about/news/2025/stryker-to-acquire-inari-medical.html"
  },
  {
    id: "2025-01-comp-bsc",
    title: "【北米】Boston Scientific：Bolt Medical買収完了（IVL参入）",
    region: "北米",
    date: "2025/01/07",
    riskLevel: "Medium",
    scenario: "Boston ScientificはBolt Medicalの買収を完了し、J&J（Shockwave）が先行するIVL市場へ本格参入。",
    impact: "カテーテル治療（PCI）製品を持つ日本企業（テルモ、カネカ）にとって、IVL併用療法への対応が急務。",
    action: "IVL互換性データの取得や、石灰化病変向けデバイスの差別化訴求。",
    url: "https://news.bostonscientific.com"
  },
  {
    id: "2024-12-comp-jj",
    title: "【北米】J&J：Shockwave Medical買収統合プロセスの進展",
    region: "北米",
    date: "2024/12/15",
    riskLevel: "High",
    scenario: "J&JはShockwave Medicalの統合を加速し、Abiomed（ポンプ）と組み合わせた一括提案を開始。",
    impact: "循環器領域の「ワンストップ化」が進み、単体デバイスメーカーの商談機会が減少するリスク。",
    action: "ニッチトップ製品を持つ他社とのアライアンスによる、パッケージ提案力の強化。",
    url: "https://www.jnj.com"
  },

  // --- Supply Chain (Dec 2024 - Jan 2025) ---
  {
    id: "2025-01-supply-chips",
    title: "【グローバル】半導体：レガシーチップ不足は2025年も継続の見通し",
    region: "グローバル",
    date: "2025/01/05",
    riskLevel: "High",
    scenario: "先端品への投資集中により、医療機器に使用されるレガシーチップ（成熟プロセス）の供給不足が2025年も続くと予測される。",
    impact: "患者モニタリング機器を生産する日本メーカー（日本光電、フクダ電子）の部材調達遅延リスク。",
    action: "半導体商社との長期枠組み契約の見直しと、代替チップへの設計変更（BOM変更）。",
    url: "https://www.gocarelectronic.com/news/semiconductor-shortage-forecast-2025"
  },
  {
    id: "2024-12-supply-cyber",
    title: "【北米】サイバー攻撃による心臓手術用デバイス供給への影響",
    region: "北米",
    date: "2024/12/20",
    riskLevel: "Medium",
    scenario: "主要な医療機器メーカーへのランサムウェア攻撃により、心臓手術用製品の一時的な出荷停止が発生。",
    impact: "同種製品を扱う日本企業の米国子会社に対し、代替供給の要請（特需）が発生する可能性。",
    action: "米国在庫の緊急確認と、代替供給可能な製品リストの顧客提示。",
    url: "https://www.chiefhealthcareexecutive.com"
  },
  {
    id: "2024-11-supply-moly",
    title: "【欧州】ラジオアイソトープ（Mo-99）：欧州製造施設のトラブルによる供給不足",
    region: "欧州",
    date: "2024/11/15",
    riskLevel: "High",
    scenario: "欧州の主要製造所でのトラブルにより、核医学診断に不可欠なモリブデン99が一時的に不足。",
    impact: "RI検査薬を扱う日本企業（日本メジフィジックス等）の原料調達難。",
    action: "南アフリカやオーストラリアなど、欧州以外の調達ルート確保。",
    url: "https://www.medline.com"
  },

  // --- Regulatory (Dec 2024 - Jan 2025) ---
  {
    id: "2024-12-reg-fda-pccp",
    title: "【北米】FDA：AI搭載機器の「変更管理計画（PCCP）」最終ガイダンス発行",
    region: "北米",
    date: "2024/12/05",
    riskLevel: "Medium",
    scenario: "FDAはAI/ML搭載機器の市販後変更管理（PCCP）に関する最終ガイダンスを発行。事前の計画承認により、一部の変更審査を省略可能に。",
    impact: "AI画像診断機器を開発する日本企業（富士フイルム、キヤノン）の米国展開において、PCCP活用が必須要件化。",
    action: "開発ロードマップへのPCCP策定工程の追加と、FDA相談（Q-Submission）の実施。",
    url: "https://www.fda.gov/medical-devices/content-premarket-submissions-management-cybersecurity-medical-devices"
  },
  {
    id: "2024-12-reg-eu-mdr",
    title: "【欧州】EU MDR：供給不足通知に関するガイダンス文書の公表",
    region: "欧州",
    date: "2024/12/10",
    riskLevel: "High",
    scenario: "2025年1月からの通知義務化に先立ち、具体的な報告フォーマットと手順を定めたガイダンスが公表された。",
    impact: "欧州輸出を行う全日本メーカーは、SOP（標準作業手順書）の改訂と報告責任者の任命が必要。",
    action: "欧州代理人（EAR）との連絡体制確認と、社内報告フローのシミュレーション。",
    url: "https://www.dmp.no"
  },
  {
    id: "2024-12-reg-uk-pms",
    title: "【欧州】英国MHRA：市販後監視（PMS）に関する新規制を公表",
    region: "欧州",
    date: "2024/12/15",
    riskLevel: "Medium",
    scenario: "英国MHRAは、2025年6月施行予定の厳格化されたPMS要件に関する詳細規則を公表。",
    impact: "英国市場で製品を販売する日本企業は、EU MDRとは異なる英国独自のPMS報告体制が必要に。",
    action: "英国責任者（UKRP）との契約内容見直しと、PMS計画書の英国対応版作成。",
    url: "https://www.emergobyul.com"
  }
];
