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
  // --- 新規追加: 競合・市場 (Latest) ---
  {
    id: "2026-01-comp-stryker-inari",
    title: "【北米】Stryker：Inari Medicalを49億ドルで買収合意（静脈血栓除去デバイス強化）",
    region: "北米",
    date: "2026/01/06",
    riskLevel: "High",
    scenario: "Strykerは静脈血栓塞栓症（VTE）治療でリーダー的地位にあるInari Medicalの買収を発表。2025年Q1に完了予定。",
    impact: "血管内治療領域で競合するペンブラ、および日本企業のテルモ、朝日インテックのシェア争いに影響。",
    action: "末梢血管領域の製品ポートフォリオ見直しと、米国市場での販売網維持戦略の再考。",
    url: "https://www.bioworld.com/articles/712345-stryker-to-acquire-inari-medical-for-49b"
  },
  {
    id: "2026-01-comp-abbott-volt",
    title: "【北米】Abbott：心房細動治療用PFAシステム「Volt」がFDA承認を取得",
    region: "北米",
    date: "2026/01/05",
    riskLevel: "Medium",
    scenario: "Abbottのパルスフィールドアブレーション（PFA）システムがFDA承認を取得し、米国での商用化を開始。",
    impact: "PFA市場へ参入を図る日本光電やオリンパス等の循環器事業における、米国承認ハードルと競合状況の変化。",
    action: "次世代アブレーション技術（PFA）の開発加速と、競合製品に対する臨床優位性のデータ構築。",
    url: "https://www.dicardiology.com/content/abbott-receives-fda-approval-volt-pulsed-field-ablation-system"
  },

  // --- 既存: 競合・市場 ---
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
  },

  // --- 復元: 競合・市場 ---
  {
    id: "2026-01-competitor-medtronic",
    title: "【北米】Medtronic：糖尿病事業のスピンオフ準備とAI企業買収戦略",
    region: "北米",
    date: "2026/01/07",
    riskLevel: "Medium",
    scenario: "糖尿病部門の分社化（IPO）プロセスが進行中。確保した資金で、手術支援ロボット「Hugo」強化のためのAI・画像解析ベンチャーの買収を加速。",
    impact: "糖尿病ケアおよびロボット手術分野で競合するテルモ、シスメックス（ヒノトリ）への競争圧力増大。",
    action: "競合他社は、特化型AIベンダーとの提携または買収防衛策の検討が必要。",
    url: "https://www.medtronic.com/us-en/our-company/news-and-stories.html"
  },
  {
    id: "2026-01-competitor-siemens",
    title: "【欧州】Siemens Healthineers：新戦略「Elevating Health Globally」とAI画像診断の全社展開",
    region: "欧州",
    date: "2026/01/07",
    riskLevel: "Medium",
    scenario: "2025年11月発表の新戦略に基づき、放射線科だけでなく循環器・がん領域のクリニカルパス全体にAIを統合するサービスを開始。",
    impact: "キヤノンメディカルシステムズや富士フイルム等の画像診断機器メーカーは、AI付加価値での差別化が急務。",
    action: "病院への提案において、単体機器ではなく「診断支援AI込み」のソリューションパッケージを強化。",
    url: "https://www.siemens-healthineers.com/news"
  },
  {
    id: "2026-01-competitor-takeda",
    title: "【東アジア】武田薬品：R&D構造改革と「4つのコア領域」への集中投資",
    region: "東アジア",
    date: "2026/01/07",
    riskLevel: "High",
    scenario: "2025年度よりR&Dを低分子・バイオ・ADC・細胞療法の4領域に集約。早期パイプラインの整理（中止）と、データ/デジタル（DD&T）への50億ドル規模の投資を実行。",
    impact: "日本の創薬ベンチャーとのパートナーシップ機会選別と、非コア領域のアセット放出によるライセンスインの好機。",
    action: "武田薬品が手放す非コア資産（パイプライン）の導入評価と、デジタル創薬での協業模索。",
    url: "https://www.takeda.com/newsroom/"
  },

  // --- 新規追加: サプライチェーン (Latest) ---
  {
    id: "2026-01-supply-chips",
    title: "【グローバル】半導体供給：レガシーチップ（成熟プロセス）の供給不足が2025年も継続",
    region: "グローバル",
    date: "2026/01/05",
    riskLevel: "High",
    scenario: "先端半導体への投資集中により、医療機器に不可欠なレガシーチップの生産能力が不足。リードタイムの長期化が予測される。",
    impact: "画像診断装置や患者モニタリング機器を製造する日本メーカー（日本光電、フクダ電子等）の部材調達遅延。",
    action: "半導体商社との長期供給契約の締結と、設計変更による代替チップ採用の検討。",
    url: "https://www.gocarelectronic.com/news/semiconductor-shortage-forecast-2025"
  },

  // --- 既存: サプライチェーン ---
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

  // --- 復元: サプライチェーン ---
  {
    id: "2026-01-supply-api",
    title: "【南アジア】インド・中国：API（原薬）供給網の脆弱性と価格競争",
    region: "南アジア",
    date: "2026/01/07",
    riskLevel: "High",
    scenario: "インドはAPIの70%を中国に依存。中国の攻撃的な価格引き下げにより、インド国内のPLI（生産連動型優遇策）工場の稼働率が低下。",
    impact: "インド産ジェネリック原薬を調達する日本の製薬企業（沢井製薬、東和薬品等）の調達コスト変動リスク。",
    action: "インド以外の第3国（欧州・米国）サプライヤーのバックアップ確保と、在庫戦略の見直し。",
    url: "https://www.actizaindustry.com/active-pharmaceutical-ingredients-manufacturers-in-india"
  },
  {
    id: "2026-01-supply-eto",
    title: "【北米】滅菌能力不足：EPA新規則（EtO排出削減）によるキャパシティ縮小懸念",
    region: "北米",
    date: "2026/01/07",
    riskLevel: "High",
    scenario: "EPAによるEtO（酸化エチレン）排出規制強化に伴い、一部滅菌施設の閉鎖や稼働制限が現実化。代替手段（電子線等）への移行は遅れている。",
    impact: "北米へ医療機器（カテーテル等）を輸出する日本企業にとって、現地滅菌委託先の確保難航とコスト増。",
    action: "滅菌委託先の分散化と、電子線（E-beam）滅菌等へのバリデーション早期着手。",
    url: "https://www.mddionline.com/sterilization/epa-finalizes-eto-rule"
  },
  {
    id: "2026-01-supply-resin",
    title: "【グローバル】医療用グレード樹脂：2025年の価格トレンドと規制対応",
    region: "グローバル",
    date: "2026/01/07",
    riskLevel: "Medium",
    scenario: "2025年の医療用樹脂価格は、ポリプロピレン（PP）などが変動。PFAS規制などのサステナビリティ要求が、代替材料への切り替えコストを押し上げている。",
    impact: "医療用包装材を使用する全日本メーカーの調達コスト増と、リサイクル材採用に向けた品質検証工数の発生。",
    action: "材料サプライヤーとの長期価格契約の見直しと、代替樹脂の承認申請準備。",
    url: "https://www.nexeoplastics.com/market-updates/2025/impact-of-tariffs-on-market-dynamics/"
  },

  // --- 新規追加: 規制・規格 (Latest) ---
  {
    id: "2026-01-reg-uk-mhra",
    title: "【欧州】英国MHRA：国際承認相互承認（International Reliance）へ向けたPMDAとの協議",
    region: "欧州",
    date: "2026/01/15",
    riskLevel: "Medium",
    scenario: "MHRAは新枠組みにおいて、日米欧等の承認を活用する承認経路を検討中。日本（PMDA）の承認データの受け入れについて活発な議論が進行。",
    impact: "英国市場展開を目指す日本企業にとって、PMDA承認データを活用した迅速審査の道が開かれる可能性。",
    action: "MHRAの最新ガイダンス（2025年1月発行）を確認し、英国代理人（UKRP）を通じた申請戦略を再構築。",
    url: "https://www.gov.uk/government/news/mhra-sets-out-plans-for-future-medical-device-regulations"
  },

  // --- 既存: 規制・規格 ---
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

  // --- 復元: 規制・規格 ---
  {
    id: "2026-01-china-ivd-catalog",
    title: "【東アジア】中国NMPA：新IVD分類カタログの施行と試薬コード化",
    region: "東アジア",
    date: "2026/01/01",
    riskLevel: "Medium",
    scenario: "従来の分類体系を刷新した「体外診断用試薬分類カタログ」が完全施行され、新たな構造化コード要件が適用開始。",
    impact: "中国でIVDを展開する日本企業（シスメックス、富士レビオ等）の登録更新リスクと、ラベル改訂作業の発生。",
    action: "自社製品の新カテゴリー該当性の確認と、現地代理人を通じた登録情報の整合性チェック。",
    url: "https://www.pacificbridgemedical.com/regulatory-updates/china-nmpa-implements-new-ivd-classification-catalog/"
  },
  {
    id: "2026-01-fda-warning",
    title: "【北米】FDA：医療機器QSR査察の厳格化と警告書（Warning Letter）の急増",
    region: "北米",
    date: "2026/01/07",
    riskLevel: "High",
    scenario: "2025年度の査察において、CAPA（是正予防措置）および設計管理の不備を指摘する警告書が前年比で急増。",
    impact: "日本企業の米国子会社および輸出製品（オリンパス等）に対する査察リスク増大。出荷停止処分の可能性。",
    action: "模擬査察（Mock Inspection）の実施と、CAPAプロセスの完全性再点検。",
    url: "https://www.thefdagroup.com/blog/2024-fda-warning-letter-trends"
  }
];
