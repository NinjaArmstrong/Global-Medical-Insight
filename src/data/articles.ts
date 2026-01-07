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
  // --- North America (Batch 1) ---
  {
    id: "101",
    title: "【北米】FDA：QMSR最終規則、2026年2月準拠期限が確定",
    region: "North America",
    date: "2026-01-05",
    riskLevel: "High",
    scenario: "FDAの品質管理システム規則（QMSR）がISO 13485:2016と完全整合。猶予期間終了が2026年2月に迫る。",
    impact: "オリンパス、テルモ等、米国展開する全日本企業はQMS文書の全面改訂が急務。",
    action: "ISO 13485:2016に基づく最終監査を実施し、FDA提出書類との整合性を確認せよ。",
    url: "https://www.fda.gov/medical-devices/quality-system-qs-regulation/medical-devices-quality-system-regulation-amendments"
  },
  {
    id: "102",
    title: "【北米】CES 2026：次世代AI診断・ウェアラブルが台頭",
    region: "North America",
    date: "2026-01-07",
    riskLevel: "Low",
    scenario: "ラスベガスで開催のCES 2026にて、家庭用AI診断機器と高度ウェアラブルが市場を席巻。",
    impact: "オムロンヘルスケア等の家庭用機器メーカーは、AI機能の実装競争に直面する。",
    action: "CES受賞製品の技術トレンドを分析し、次期製品ロードマップに反映せよ。",
    url: "https://www.ces.tech/topics/digital-health.aspx"
  },
  {
    id: "103",
    title: "【北米】JPMヘルスケア：GLP-1市場拡大とM&Aの再燃",
    region: "North America",
    date: "2026-01-06",
    riskLevel: "Medium",
    scenario: "J.P.モルガン会議にて、肥満症薬（GLP-1）普及による整形外科手術数への長期的影響が議論への焦点。",
    impact: "人工関節を扱う日本企業（京セラ等）は、長期的な手術需要予測の修正が必要。",
    action: "GLP-1普及シナリオに基づく整形外科インプラントの中期需要を再試算せよ。",
    url: "https://www.jpmorgan.com/solutions/cib/insights/health-care-conference"
  },
  {
    id: "104",
    title: "【北米】CMS 2026年報酬改定：遠隔モニタリングの要件厳格化",
    region: "North America",
    date: "2025-11-15",
    riskLevel: "Medium",
    scenario: "CMSが2026年度医師報酬一覧（PFS）を確定。遠隔生理学的モニタリング（RPM）の償還要件を変更。",
    impact: "RPMソリューションを展開する日本光電等の米国収益モデルに直接的な影響。",
    action: "新CPTコードに基づき、米国向けRPM製品の収益シミュレーションを更新せよ。",
    url: "https://www.cms.gov/medicare/medicare-fee-for-service-payment/physicianfeesched"
  },
  {
    id: "105",
    title: "【北米】RSNA 2025：画像診断におけるAI統合が標準化",
    region: "North America",
    date: "2025-12-05",
    riskLevel: "Low",
    scenario: "北米放射線学会（RSNA）にて、単体AIではなくワークフロー統合型AIが主流化。",
    impact: "キヤノンメディカル、富士フイルムは、病院情報システムとのシームレスな統合が必須要件に。",
    action: "有力なAIスタートアップとのAPI連携または買収を検討せよ。",
    url: "https://www.rsna.org/annual-meeting"
  },
  {
    id: "106",
    title: "【北米】AHA 2025：心房細動アブレーションの新潮流",
    region: "North America",
    date: "2025-11-18",
    riskLevel: "Low",
    scenario: "米国心臓協会（AHA）にて、パルスフィールドアブレーション（PFA）の優位性を示す新データ発表。",
    impact: "カテーテル事業を持つテルモや日本ライフラインは、PFA技術への対応が急務。",
    action: "PFA関連の特許網調査および自社製品とのカニバリゼーション分析を実行せよ。",
    url: "https://professional.heart.org/en/meetings/scientific-sessions"
  },
  {
    id: "107",
    title: "【米国】ホワイトハウス：2026年バイオ製造強化令",
    region: "North America",
    date: "2025-12-20",
    riskLevel: "Medium",
    scenario: "重要医薬品・機器の国内製造比率引き上げを狙う大統領令が発効。",
    impact: "米国公的機関への納入において、現地生産比率が低い日本製品は不利になる懸念。",
    action: "米国受託製造（CMO）の活用または現地工場の稼働率引き上げを検討せよ。",
    url: "https://www.whitehouse.gov/ostp/"
  },
  {
    id: "108",
    title: "【米国】HIPAA更新：生体データプライバシー規制強化",
    region: "North America",
    date: "2025-12-10",
    riskLevel: "High",
    scenario: "HHSが生体データおよびリプロダクティブヘルス情報の保護に関する新HIPAAガイダンスを発行。",
    impact: "フェムテック関連アプリを提供する日系企業は、データ管理体制の抜本的見直しが必要。",
    action: "米国向けアプリのプライバシーポリシーを改定し、法的リスクを回避せよ。",
    url: "https://www.hhs.gov/hipaa/index.html"
  },
  {
    id: "109",
    title: "【カナダ】デジタルヘルス投資戦略2026始動",
    region: "North America",
    date: "2026-01-04",
    riskLevel: "Low",
    scenario: "カナダ政府が医療DXに向けた大規模投資ファンドを設立。相互運用性を重視。",
    impact: "現地法人を持つ富士通（ヘルスケア部門）等にとって、公共入札の好機。",
    action: "カナダ保健省の公募要件を確認し、現地パートナーとの提携を模索せよ。",
    url: "https://www.canada.ca/en/health-canada.html"
  },
  {
    id: "110",
    title: "【北米】米墨サプライチェーン：2026年国境検査厳格化",
    region: "North America",
    date: "2026-01-03",
    riskLevel: "Medium",
    scenario: "USMCAに基づき、メキシコからの医療機器輸入に対する原産地規則の執行が強化。",
    impact: "メキシコ生産拠点を持つ日系サプライヤーにおいて、通関遅延リスクが増大。",
    action: "物流部門に対し、CTPAT認証の維持と原産地証明書の再確認を指示せよ。",
    url: "https://www.cbp.gov/trade"
  },

  // --- Europe (Batch 2) ---
  {
    id: "201",
    title: "【欧州】MDR改正案：認証機関ボトルネックへの緊急措置",
    region: "Europe",
    date: "2025-12-16",
    riskLevel: "High",
    scenario: "欧州委員会がMDR移行期間の再延長および手続き簡素化を含む改正案を提示。",
    impact: "認証待ちのオリンパス、朝日インテック等は、販売停止リスク回避の猶予を得る可能性。",
    action: "改正案の採択スケジュールを注視しつつ、技術文書の準備は緩めずに継続せよ。",
    url: "https://health.ec.europa.eu/medical-devices-sector_en"
  },
  {
    id: "202",
    title: "【欧州】認証機関調査：審査遅延は依然18ヶ月超",
    region: "Europe",
    date: "2025-11-30",
    riskLevel: "High",
    scenario: "最新調査により、NBの審査キャパシティ不足が深刻であることが判明。新規申請は1年以上待ち。",
    impact: "欧州市場への新製品投入計画を持つ全日本企業において、発売時期の遅れが不可避。",
    action: "2027年以降の更新審査枠を今のうちに確保するようNBと交渉せよ。",
    url: "https://health.ec.europa.eu/medical-devices-dialogue/medical-devices-coordination-group_en"
  },
  {
    id: "203",
    title: "【欧州】AI法：医療機器向けガイドライン案公表",
    region: "Europe",
    date: "2026-01-02",
    riskLevel: "Medium",
    scenario: "EU AI法に基づく高リスクAI（医療機器含む）の適合性評価ガイドライン案が示された。",
    impact: "キヤノンメディカル等のAI診断機器は、MDRに加えAI法への二重コンプライアンスが必要。",
    action: "自社AI製品のリスク分類を再評価し、追加で必要な技術文書を特定せよ。",
    url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
  },
  {
    id: "204",
    title: "【欧州】EHDS：データ相互運用性が義務化へ",
    region: "Europe",
    date: "2025-12-28",
    riskLevel: "Medium",
    scenario: "欧州健康データ空間（EHDS）規則が実装フェーズ入り。電子カルテの標準化が進む。",
    impact: "日本光電やフクダ電子は、欧州向け製品におけるFHIR標準対応が市場参入の必須条件に。",
    action: "R&D部門に対し、欧州相互運用性フレームワークへの準拠を指示せよ。",
    url: "https://health.ec.europa.eu/ehealth-digital-health-and-care/european-health-data-space_en"
  },
  {
    id: "205",
    title: "【英国】MHRA：2026年新規制ロードマップ策定",
    region: "Europe",
    date: "2025-11-10",
    riskLevel: "Medium",
    scenario: "ブレグジット後の独自医療機器規制の詳細スケジュールが確定。2026年より段階施行。",
    impact: "EU MDR認証の英国での有効期限を見据え、UKCAマーク取得への切り替え戦略が必要。",
    action: "英国責任者（UKRP）と連携し、独自の技術文書提出スケジュールを策定せよ。",
    url: "https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency"
  },
  {
    id: "206",
    title: "【欧州】MedTech Forum 2026：5月ストックホルム開催",
    region: "Europe",
    date: "2026-01-04",
    riskLevel: "Low",
    scenario: "欧州最大の業界会議が5月に決定。サステナビリティ規制とMDRが主要議題。",
    impact: "欧州規制当局との直接対話の機会。ニプロ、テルモ等の現地法人は参加必須。",
    action: "規制担当者の参加登録を行い、ロビイング活動の機会として活用せよ。",
    url: "https://www.medtecheurope.org/events/medtech-forum/"
  },
  {
    id: "207",
    title: "【スイス】対EU MRA未締結：代理人要件の継続",
    region: "Europe",
    date: "2026-01-03",
    riskLevel: "Medium",
    scenario: "スイス・EU間の相互承認協定（MRA）更新の目処立たず。第三国扱いが継続。",
    impact: "スイスに輸出する日本企業は、引き続きスイス国内代理人（CH-REP）の維持コストが発生。",
    action: "既存のスイス代理人契約の更新手続き漏れがないか確認せよ。",
    url: "https://www.swissmedtech.ch/"
  },
  {
    id: "208",
    title: "【ドイツ】DiGA：デジタル治療アプリ審査が迅速化",
    region: "Europe",
    date: "2025-12-15",
    riskLevel: "Low",
    scenario: "BfArMがDiGAファストトラック制度を改善。エビデンス要件の一部柔軟化。",
    impact: "キュアアップ等のDTx（デジタル治療）開発企業にとって、ドイツ市場参入の障壁が低下。",
    action: "ドイツの保険償還申請に向けた臨床データのギャップ分析を行え。",
    url: "https://www.bfarm.de/EN/Medical-devices/DiGA/_node.html"
  },
  {
    id: "209",
    title: "【フランス】2026年社会保障予算：償還価格リセット",
    region: "Europe",
    date: "2025-12-20",
    riskLevel: "Medium",
    scenario: "PLFSS 2026にて、医療機器の償還価格に対する一律カット圧力が強まる。",
    impact: "フランス市場での利益率低下懸念。テルモ等の心臓血管製品への価格交渉が難航予想。",
    action: "製品の経済的価値（HEOR）データを補強し、価格維持交渉に備えよ。",
    url: "https://www.securite-sociale.fr/"
  },
  {
    id: "210",
    title: "【英国】ライフサイエンス投資：製造拠点誘致へ",
    region: "Europe",
    date: "2026-01-06",
    riskLevel: "Low",
    scenario: "英国政府が2026年度予算でライフサイエンス製造への補助金を拡充。",
    impact: "英国に製造拠点を持つ日系企業（エーザイ等含む）に追加投資のインセンティブ。",
    action: "英国工場の設備更新に対する補助金申請の可否を調査せよ。",
    url: "https://www.gov.uk/government/organisations/office-for-life-sciences"
  },

  // --- Asia (East) (Batch 3) ---
  {
    id: "301",
    title: "【中国】NMPA 新GMP：海外工場への査察強化",
    region: "East Asia",
    date: "2025-11-01",
    riskLevel: "High",
    scenario: "医療機器GMP（2025年第107号）施行に伴い、海外製造所に対するリモートおよび実地査察が厳格化。",
    impact: "日本の製造拠点を持つシスメックスやオムロン等は、査察対応体制の強化が必須。",
    action: "中国GMPとISO 13485の差異分析を行い、模擬査察を実施せよ。",
    url: "https://english.nmpa.gov.cn/"
  },
  {
    id: "302",
    title: "【中国】VBP 第6回：高価格消耗品が標的",
    region: "East Asia",
    date: "2025-12-10",
    riskLevel: "High",
    scenario: "国家帯量購買（VBP）第6弾にて、整形外科および眼科用消耗品が対象化される見込み。",
    impact: "現地シェアを持つHOYAやニデックは、入札価格の劇的な引き下げ圧力に直面。",
    action: "VBP落札時の数量増効果と価格下落による減収影響をシミュレーションせよ。",
    url: "http://english.nhsa.gov.cn/"
  },
  {
    id: "303",
    title: "【中国】ハイエンド機器優遇策：イノベーション審査加速",
    region: "East Asia",
    date: "2025-10-15",
    riskLevel: "Low",
    scenario: "画期的な医療機器に対する優先審査制度（グリーンチャネル）の運用が効率化。",
    impact: "独自技術を持つ日本メーカー（オリンパス等）の新規承認リードタイム短縮の好機。",
    action: "中国現地法人と連携し、優先審査枠への適用申請を積極的に行え。",
    url: "https://english.nmpa.gov.cn/"
  },
  {
    id: "304",
    title: "【日本】中医協 2026改定：不採算品の再算定ルール",
    region: "East Asia",
    date: "2025-12-26",
    riskLevel: "Medium",
    scenario: "中医協が2026年度改定に向け、安定供給確保のための不採算品再算定を議論。",
    impact: "低マージンのカテーテル等を扱うテルモ、ニプロにとって、薬価引き上げのチャンス。",
    action: "製品別の収益性データを整理し、学会を通じて厚労省へ要望書を提出せよ。",
    url: "https://www.mhlw.go.jp/stf/shingi/chuikyo.html"
  },
  {
    id: "305",
    title: "【日本】PMDA：米国ワシントン事務所が本格稼働",
    region: "East Asia",
    date: "2025-09-10",
    riskLevel: "Low",
    scenario: "PMDA米国事務所により、日米同時申請（Parallel Review）の相談体制が強化。",
    impact: "米国展開を目指す日本のスタートアップや大手企業の薬事戦略が効率化。",
    action: "米国承認申請のロードマップに、PMDA米国事務所との事前相談を組み込め。",
    url: "https://www.pmda.go.jp/english/"
  },
  {
    id: "306",
    title: "【日本】医療DX 2030：電子カルテ標準化が加速",
    region: "East Asia",
    date: "2026-01-04",
    riskLevel: "Low",
    scenario: "厚労省が標準型電子カルテの全国展開スケジュールを前倒し。",
    impact: "PHCや富士通等の電子カルテベンダーは、HL7 FHIR対応を急ぐ必要あり。",
    action: "政府提供の標準規格APIへの接続テストを開発工程に組み込め。",
    url: "https://www.mhlw.go.jp/"
  },
  {
    id: "307",
    title: "【韓国】デジタル製品法：SaMD規制の大転換",
    region: "East Asia",
    date: "2026-01-05",
    riskLevel: "High",
    scenario: "デジタル医療製品法が施行され、ソフトウェア単体（SaMD）の審査体系が独立化。",
    impact: "韓国市場にアプリを展開する日本企業は、従来と異なる申請区分の選択が必要。",
    action: "現地コンサルタントを通じて新法に基づく製品クラス分類の再確認を行え。",
    url: "https://www.mfds.go.kr/eng/index.do"
  },
  {
    id: "308",
    title: "【韓国】AI医療機器：学習データの透明性ガイドライン",
    region: "East Asia",
    date: "2025-11-20",
    riskLevel: "Medium",
    scenario: "MFDSがAIモデルの学習データセットに関する開示要件を厳格化。",
    impact: "キヤノンメディカル等のAI画像診断機器は、韓国申請時に詳細なデータセット説明が必要。",
    action: "AI開発部門に対し、学習データのトレーサビリティ記録の整備を指示せよ。",
    url: "https://www.mfds.go.kr/eng/index.do"
  },
  {
    id: "309",
    title: "【台湾】医療機器QSD：ISO 13485簡易審査枠拡大",
    region: "East Asia",
    date: "2025-12-01",
    riskLevel: "Medium",
    scenario: "品質システム文書（QSD）審査において、MDSAPレポート等の活用範囲が拡大。",
    impact: "台湾への輸出を行う日本メーカーのQSD更新手続き期間が短縮される見込み。",
    action: "次回QSD更新時に簡易審査ルートが適用可能か、台湾代理人と協議せよ。",
    url: "https://www.fda.gov.tw/ENG/index.aspx"
  },
  {
    id: "310",
    title: "【香港】メディカルフェア2026：大湾区進出の足掛かり",
    region: "East Asia",
    date: "2026-01-02",
    riskLevel: "Low",
    scenario: "グレーターベイエリア（GBA）での医療機器即時使用制度（港澳薬械通）が注目。",
    impact: "香港で承認済みの日本製品は、中国本土GBA内の指定病院で早期使用が可能に。",
    action: "香港での承認実績を活用した中国本土参入（GBAルート）の事業計画を策定せよ。",
    url: "https://event.hktdc.com/fair/hkmedicalfair-en/"
  },

  // --- Global Supply Chain (Batch 4) ---
  {
    id: "401",
    title: "【半導体】レガシーチップ不足：2026年も継続懸念",
    region: "Global",
    date: "2026-01-06",
    riskLevel: "High",
    scenario: "AIチップへの生産能力集中により、医療機器用マイコン等のレガシー半導体が後回しに。",
    impact: "シスメックスや日本光電等の機器製造ラインにおいて、部品欠品による生産停止リスク。",
    action: "主要半導体の在庫積み増しと、代替品の設計変更（DR）を並行して進めよ。",
    url: "https://sourceability.com/"
  },
  {
    id: "402",
    title: "【滅菌】EtO規制：米国EPAが2年間の猶予付与",
    region: "Global",
    date: "2025-10-15",
    riskLevel: "Medium",
    scenario: "医療機器供給への影響を懸念し、酸化エチレン（EtO）排出規制の完全適用を延期。",
    impact: "テルモ等の米国向け輸出品の滅菌処理確保において、当面の混乱は回避。",
    action: "猶予期間中に、電子線やX線滅菌への切り替えバリデーションを完了させよ。",
    url: "https://www.raps.org/"
  },
  {
    id: "403",
    title: "【物流】2026年Q1：医薬品航空貨物のスペース逼迫",
    region: "Global",
    date: "2026-01-03",
    riskLevel: "Medium",
    scenario: "バイオ医薬品の輸送需要増により、定温管理された航空貨物スペースの確保が困難に。",
    impact: "試薬や検体を扱う日本企業の海外輸送コスト上昇とリードタイム遅延。",
    action: "フォワーダーとの年間契約を見直し、優先スペース確保条項を盛り込め。",
    url: "https://www.berlinpackaging.com/"
  },
  {
    id: "404",
    title: "【物流】コールドチェーン：2026年は10%成長予測",
    region: "Global",
    date: "2025-12-28",
    riskLevel: "Low",
    scenario: "厳格な温度管理を要する生物製剤・再生医療等製品の流通量が急増。",
    impact: "保冷ボックス技術を持つ日本の部材メーカーに新規参入の商機。",
    action: "物流コスト削減のための高性能保冷容器の採用検討または開発を行え。",
    url: "https://www.grandviewresearch.com/"
  },
  {
    id: "405",
    title: "【治験】DCT（分散型試験）が2026年の標準に",
    region: "Global",
    date: "2026-01-04",
    riskLevel: "Low",
    scenario: "ウェアラブルデバイスを活用した在宅治験（DCT）が欧米で一般化。",
    impact: "日本の製薬・機器メーカーは、海外治験においてDCT対応プロトコルが必須に。",
    action: "治験提携先（CRO）選定において、DCT支援能力を最重要評価項目とせよ。",
    url: "https://www.xtalks.com/"
  },
  {
    id: "406",
    title: "【資源】ヘリウム供給危機：MRI製造への深刻な打撃",
    region: "Global",
    date: "2025-11-30",
    riskLevel: "High",
    scenario: "地政学リスクによるヘリウム供給難が継続。医療用MRIへの優先配分も限界に。",
    impact: "キヤノンメディカルや日立（富士フイルム）のMRI保守コスト圧迫と新規製造遅延。",
    action: "ヘリウムレスまたは少ヘリウム型MRIへの製品ポートフォリオ転換を加速せよ。",
    url: "https://www.rsna.org/"
  },
  {
    id: "407",
    title: "【資源】チタン価格変動：インプラント原価を直撃",
    region: "Global",
    date: "2025-12-10",
    riskLevel: "Medium",
    scenario: "航空宇宙需要との競合により、医療用チタン合金の調達価格が高止まり。",
    impact: "京セラや帝人ナカシマメディカル等の整形外科インプラント製品の利益率低下。",
    action: "長期調達契約による価格固定化と、代替材料の基礎研究を推進せよ。",
    url: "https://www.jhtitanium.com/"
  },
  {
    id: "408",
    title: "【素材】医療用樹脂：フッ素ポリマーの供給不安",
    region: "Global",
    date: "2025-12-15",
    riskLevel: "Medium",
    scenario: "PFAS規制の影響で、カテーテル被覆材等に使う特定フッ素樹脂の生産が縮小。",
    impact: "カテーテルメーカー（朝日インテック等）は、代替樹脂の選定を迫られる可能性。",
    action: "PFAS規制に抵触しない代替医療用樹脂の在庫確保と評価試験を急げ。",
    url: "https://www.plasticstoday.com/"
  },
  {
    id: "409",
    title: "【滅菌】X線滅菌へのモーダルシフト加速",
    region: "Global",
    date: "2025-11-05",
    riskLevel: "Medium",
    scenario: "EtO規制回避のため、大手デバイスメーカーがX線滅菌設備への投資を拡大。",
    impact: "既存の滅菌委託先を変更する場合、物流ルートと再バリデーションの手間が発生。",
    action: "国内のX線滅菌施設の空き状況を確認し、リダンダンシーを確保せよ。",
    url: "https://www.fda.gov/"
  },
  {
    id: "410",
    title: "【安保】SBOM（ソフト部品表）の提出義務化",
    region: "Global",
    date: "2026-01-02",
    riskLevel: "High",
    scenario: "日米欧の規制当局が、医療機器サイバーセキュリティ対策としてSBOM提出を必須化。",
    impact: "ソフトウェアを含む医療機器を輸出する全日本企業に膨大な管理工数が発生。",
    action: "SBOM自動生成ツールを導入し、サプライチェーン全体の脆弱性管理体制を構築せよ。",
    url: "https://www.cisa.gov/"
  },

  // --- SE Asia & India (Batch 5) ---
  {
    id: "501",
    title: "【ベトナム】医療機器市場：21億ドル規模へ急成長",
    region: "Southeast Asia",
    date: "2026-01-04",
    riskLevel: "Low",
    scenario: "公的病院の設備更新需要が牽引し、2026年は二桁成長を持続する見通し。",
    impact: "日本光電やシスメックス等の検査機器メーカーにとって、シェア拡大の好機。",
    action: "ハノイ・ホーチミンの主要公立病院に対する入札営業を強化せよ。",
    url: "https://www.vietnam-briefing.com/"
  },
  {
    id: "502",
    title: "【ベトナム】日系メーカーの生産拠点拡大",
    region: "Southeast Asia",
    date: "2025-11-15",
    riskLevel: "Low",
    scenario: "朝日インテックやオムロンがベトナム工場の増強を発表。「チャイナ・プラス・ワン」が加速。",
    impact: "ベトナム現地でのサプライチェーン構築が進み、部材調達の現地化率が向上。",
    action: "ベトナム工場からの欧米輸出ルートを確立し、物流リスクを分散せよ。",
    url: "https://vir.com.vn/"
  },
  {
    id: "503",
    title: "【インド】CDSCO：リスク分類のオンライン化",
    region: "South Asia",
    date: "2025-11-27",
    riskLevel: "Medium",
    scenario: "インド規制当局（CDSCO）がデバイス分類データベースを公開。予見性が向上。",
    impact: "インド市場参入を検討中の日本企業にとって、登録までのリードタイム見積もりが容易に。",
    action: "自社製品の該分類をデータベースで確認し、代理人を通じて登録申請準備を開始せよ。",
    url: "https://cdsco.gov.in/"
  },
  {
    id: "504",
    title: "【インド】ライセンス改正：製造・輸入免許が無期限化へ",
    region: "South Asia",
    date: "2025-12-04",
    riskLevel: "Low",
    scenario: "手数料支払いと維持要件を満たせば、ライセンス更新が不要になる規則案が浮上。",
    impact: "テルモインド等の現地法人にとって、5年ごとの更新事務負担が大幅に軽減。",
    action: "現地法務担当に対し、新規則施行後のコンプライアンス維持要件を確認させよ。",
    url: "https://cdsco.gov.in/"
  },
  {
    id: "505",
    title: "【インド】PLIスキーム：高度医療機器の国産化推進",
    region: "South Asia",
    date: "2025-12-20",
    riskLevel: "Medium",
    scenario: "生産連動型インセンティブ（PLI）が拡大。CT/MRI等の高度機器のインド国内製造を優遇。",
    impact: "キヤノンメディカル等は、完成品輸出から現地ノックダウン生産への切り替え検討が必要。",
    action: "PLI適用を受けるための現地パートナー選定と投資対効果分析を行え。",
    url: "https://pharmaceuticals.gov.in/"
  },
  {
    id: "506",
    title: "【インドネシア】ハラール認証：クラスA機器も義務化へ",
    region: "Southeast Asia",
    date: "2025-10-25",
    riskLevel: "High",
    scenario: "2026年10月より、動物由来材料を含まないクラスA機器でもハラール認証が必須に。",
    impact: "現地シェアを持つ多くの日本メーカーが、認証未取得による販売停止リスクに直面。",
    action: "BPJPH（ハラール製品保証実施機関）認定の認証機関にて、直ちに申請手続きを開始せよ。",
    url: "https://halalmui.org/"
  },
  {
    id: "507",
    title: "【インドネシア】TKDN：公共入札での国産優先",
    region: "Southeast Asia",
    date: "2025-11-10",
    riskLevel: "Medium",
    scenario: "国産化率（TKDN）要件を満たさない輸入品が、e-Catalogue（電子カタログ）から排除される傾向。",
    impact: "日本からの完成品輸出に依存する企業は、公的市場から閉め出される恐れ。",
    action: "現地メーカーへのOEM委託による「インドネシア製」化を検討せよ。",
    url: "https://kemenperin.go.id/"
  },
  {
    id: "508",
    title: "【タイ】メディカルハブ構想：国境医療への投資",
    region: "Southeast Asia",
    date: "2026-01-05",
    riskLevel: "Low",
    scenario: "2026年度予算にて国境地域の医療機関整備に重点配分。医療ツーリズム復興。",
    impact: "タイに進出する日本の病院（藤田医科大等）や機器メーカーに周辺国からの患者流入効果。",
    action: "タイ国境付近の新規病院プロジェクトに対する機器スペックイン活動を強化せよ。",
    url: "https://www.thailand.go.th/"
  },
  {
    id: "509",
    title: "【シンガポール】HSA：SHAREシステム完全移行",
    region: "Southeast Asia",
    date: "2025-11-01",
    riskLevel: "Medium",
    scenario: "医療機器登録が新システム「SHARE」に一本化。旧システムは廃止。",
    impact: "シンガポール拠点の薬事担当者は、新インターフェースへの習熟が必要。",
    action: "社内SOPをSHAREシステムの操作手順に合わせて更新せよ。",
    url: "https://www.hsa.gov.sg/"
  },
  {
    id: "510",
    title: "【マレーシア】MDA：2026年より申請手数料値上げ",
    region: "Southeast Asia",
    date: "2025-12-10",
    riskLevel: "Medium",
    scenario: "MDAが手数料体系を改定。クラスA届出およびライセンス更新料が増額。",
    impact: "マレーシアでの製品維持コスト上昇。低価格品のマージン圧迫。",
    action: "2026年度の薬事予算に手数料増額分を反映させよ。",
    url: "https://www.mda.gov.my/"
  },

  // --- MEA & LATAM (Batch 6) ---
  {
    id: "601",
    title: "【サウジ】Vision 2030：2026年医療予算4600億リヤル",
    region: "Middle East",
    date: "2026-01-03",
    riskLevel: "Low",
    scenario: "原油収入を背景に医療・教育へ巨額投資。Sehaバーチャルホスピタルが機能拡大。",
    impact: "富士フイルムやキヤノン等の画像診断・ITシステムに対し、国家規模の商談機会。",
    action: "サウジ現地代理店と連携し、MOH（保健省）の大型入札情報を早期に入手せよ。",
    url: "https://www.mof.gov.sa/"
  },
  {
    id: "602",
    title: "【中東】Arab Health 2026：日本パビリオン拡大",
    region: "Middle East",
    date: "2026-01-02",
    riskLevel: "Low",
    scenario: "2月開催のArab Healthにて、JETRO主導のジャパンパビリオンが過去最大規模に。",
    impact: "中東代理店開拓を目指す日本の中小医療機器メーカーにとって最大の好機。",
    action: "展示会での商談アポイントを事前に確定させ、代理店候補をリストアップせよ。",
    url: "https://www.arabhealthonline.com/"
  },
  {
    id: "603",
    title: "【UAE】統一医療プラットフォーム：人材流動化",
    region: "Middle East",
    date: "2025-12-15",
    riskLevel: "Medium",
    scenario: "UAE全土で有効な医療従事者ライセンス統合システムが2026年Q2稼働。",
    impact: "ドバイ・アブダビ間での医師移動が容易になり、医療機器操作トレーニングの効率化に寄与。",
    action: "クリニカルスペシャリストの配置計画をUAE全域視点で見直せ。",
    url: "https://gulfnews.com/"
  },
  {
    id: "604",
    title: "【UAE】ドバイ2026戦略：遠隔医療が標準化",
    region: "Middle East",
    date: "2025-11-20",
    riskLevel: "Low",
    scenario: "DHA（ドバイ保健局）が遠隔モニタリングを保険償還対象として拡充。",
    impact: "オムロン等の家庭用通信血圧計の需要がB2G（政府向け）で拡大する可能性。",
    action: "DHAの遠隔医療プログラムに自社デバイスが採用されるよう働きかけよ。",
    url: "https://www.dha.gov.ae/"
  },
  {
    id: "605",
    title: "【ブラジル】ANVISA：新認証システム稼働",
    region: "Latin America",
    date: "2025-11-01",
    riskLevel: "Medium",
    scenario: "旧システムSicertが廃止され、Solicita統合型の新認証データベースへ移行。",
    impact: "ブラジル向け輸出を行う全日本企業の薬事担当者は、新システムでのID取得が必要。",
    action: "現地コンサルタントを通じて新システムへのデータ移行状況を確認せよ。",
    url: "https://www.gov.br/anvisa/"
  },
  {
    id: "606",
    title: "【ブラジル】RDC 848/2024：IMDRF整合の本格化",
    region: "Latin America",
    date: "2025-10-10",
    riskLevel: "Medium",
    scenario: "医療機器規制が改正され、技術文書の構成が国際標準（IMDRF ToC）と調和。",
    impact: "グローバル展開する日本企業にとって、ブラジル専用資料の作成負担が軽減。",
    action: "STED形式またはToC形式で技術ファイルを整備し、申請効率を高めよ。",
    url: "https://www.gov.br/anvisa/"
  },
  {
    id: "607",
    title: "【メキシコ】ニアショアリング：2026年は対米輸出の要",
    region: "Latin America",
    date: "2026-01-05",
    riskLevel: "Low",
    scenario: "米中摩擦を背景に、医療機器の製造拠点をアジアからメキシコへ移す動きが加速。",
    impact: "北米市場を持つテルモやニプロは、メキシコ工場の増強がサプライチェーン安定の鍵。",
    action: "バハ・カリフォルニア等の医療機器クラスターにおける工場用地または委託先を確保せよ。",
    url: "https://www.panoramadvisors.com/"
  },
  {
    id: "608",
    title: "【メキシコ】MedTech市場：米国需要で成長",
    region: "Latin America",
    date: "2025-12-12",
    riskLevel: "Low",
    scenario: "メキシコ国内の医療機器製造が活況。対米輸出拠点としての重要性が増大。",
    impact: "日系部品メーカー（金属加工、射出成形）にとって、メキシコ現地調達ニーズへの参入機会。",
    action: "メキシコ進出済みの欧米大手デバイスメーカーに対する部品供給営業を行え。",
    url: "https://www.entradagroup.com/"
  },
  {
    id: "609",
    title: "【アフリカ】2026年市場展望：ケニア・ナイジェリア躍進",
    region: "Africa",
    date: "2026-01-04",
    riskLevel: "Low",
    scenario: "人口増と都市化により、主要国で8%超の医療機器市場成長が見込まれる。",
    impact: "シスメックス等の検体検査機器は、アフリカ都市部の民間検査センター需要を取り込める。",
    action: "信頼できる現地代理店を発掘し、主要国での販売網を構築せよ。",
    url: "https://www.fitchsolutions.com/"
  },
  {
    id: "610",
    title: "【ケニア】eヘルス戦略：デジタルインフラ整備",
    region: "Africa",
    date: "2025-11-30",
    riskLevel: "Low",
    scenario: "ケニア政府が遠隔医療プラットフォームの整備入札を実施。",
    impact: "日本のODA等と連携した、日本製の簡易診断キットや遠隔システムの参入機会。",
    action: "JICAやJETROのアフリカ支援スキームを活用した実証実験を検討せよ。",
    url: "https://www.health.go.ke/"
  }
];
