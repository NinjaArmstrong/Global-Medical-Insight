export interface LocalizedText {
  ja: string;
  en: string;
}

export interface Article {
  id: string;
  title: LocalizedText;
  region: string;
  date: string;
  riskLevel: "High" | "Medium" | "Low";
  scenario: LocalizedText;
  impact: LocalizedText;
  action: LocalizedText;
  url: string;
}

export const articles: Article[] = [
  // --- North America (Batch 1) ---
  {
    id: "101",
    title: { ja: "【北米】FDA：QMSR最終規則、2026年2月準拠期限が確定", en: "[North America] FDA: QMSR Final Rule, Feb 2026 Compliance Deadline Confirmed" },
    region: "North America",
    date: "2026-01-05",
    riskLevel: "High",
    scenario: { ja: "FDAの品質管理システム規則（QMSR）がISO 13485:2016と完全整合。猶予期間終了が2026年2月に迫る。", en: "FDA's Quality Management System Regulation (QMSR) aligns fully with ISO 13485:2016. The transition period ends in Feb 2026." },
    impact: { ja: "オリンパス、テルモ等、米国展開する全日本企業はQMS文書の全面改訂が急務。", en: "Japanese companies like Olympus and Terumo must urgently revise QMS documentation for US compliance." },
    action: { ja: "ISO 13485:2016に基づく最終監査を実施し、FDA提出書類との整合性を再確認することを推奨します。", en: "We recommend conducting a final audit based on ISO 13485:2016 and re-verifying consistency with FDA submissions." },
    url: "https://www.fda.gov/medical-devices/quality-system-qs-regulation/medical-devices-quality-system-regulation-amendments"
  },
  {
    id: "102",
    title: { ja: "【北米】CES 2026：次世代AI診断・ウェアラブルが台頭", en: "[North America] CES 2026: Next-Gen AI Diagnostics & Wearables Rise" },
    region: "North America",
    date: "2026-01-07",
    riskLevel: "Low",
    scenario: { ja: "ラスベガスで開催のCES 2026にて、家庭用AI診断機器と高度ウェアラブルが市場を席巻。", en: "At CES 2026 in Las Vegas, home AI diagnostic devices and advanced wearables dominate the market." },
    impact: { ja: "オムロンヘルスケア等の家庭用機器メーカーは、AI機能の実装競争に直面する。", en: "Home device makers like Omron Healthcare face intense competition to implement AI features." },
    action: { ja: "CES受賞製品の技術トレンドを分析し、次期製品ロードマップへの反映をご検討ください。", en: "Consider analyzing CES award-winning tech trends to reflect them in your next product roadmap." },
    url: "https://www.ces.tech/topics/digital-health.aspx"
  },
  {
    id: "103",
    title: { ja: "【北米】JPMヘルスケア：GLP-1市場拡大とM&Aの再燃", en: "[North America] JPM Healthcare: GLP-1 Expansion & M&A Resurgence" },
    region: "North America",
    date: "2026-01-06",
    riskLevel: "Medium",
    scenario: { ja: "J.P.モルガン会議にて、肥満症薬（GLP-1）普及による整形外科手術数への長期的影響が議論への焦点。", en: "At J.P. Morgan conference, the long-term impact of GLP-1 obesity drugs on orthopedic surgery volumes is a key topic." },
    impact: { ja: "人工関節を扱う日本企業（京セラ等）は、長期的な手術需要予測の修正が必要。", en: "Japanese orthopedic companies like Kyocera need to revise long-term surgery demand forecasts." },
    action: { ja: "GLP-1普及シナリオに基づき、整形外科インプラントの中期需要予測を見直すことが得策です。", en: "It is advisable to review mid-term demand forecasts for implants based on GLP-1 adoption scenarios." },
    url: "https://www.jpmorgan.com/solutions/cib/insights/health-care-conference"
  },
  {
    id: "104",
    title: { ja: "【北米】CMS 2026年報酬改定：遠隔モニタリングの要件厳格化", en: "[North America] CMS 2026 Fee Schedule: Stricter Remote Monitoring Rules" },
    region: "North America",
    date: "2025-11-15",
    riskLevel: "Medium",
    scenario: { ja: "CMSが2026年度医師報酬一覧（PFS）を確定。遠隔生理学的モニタリング（RPM）の償還要件を変更。", en: "CMS finalizes 2026 Physician Fee Schedule (PFS), changing reimbursement requirements for Remote Physiological Monitoring (RPM)." },
    impact: { ja: "RPMソリューションを展開する日本光電等の米国収益モデルに直接的な影響。", en: "Direct impact on US revenue models for companies like Nihon Kohden deploying RPM solutions." },
    action: { ja: "新CPTコードに基づき、米国向けRPM製品の収益シミュレーションを更新することを強くお勧めします。", en: "We strongly recommend updating revenue simulations for US RPM products based on new CPT codes." },
    url: "https://www.cms.gov/medicare/medicare-fee-for-service-payment/physicianfeesched"
  },
  {
    id: "105",
    title: { ja: "【北米】RSNA 2025：画像診断におけるAI統合が標準化", en: "[North America] RSNA 2025: AI Integration Becomes Standard in Imaging" },
    region: "North America",
    date: "2025-12-05",
    riskLevel: "Low",
    scenario: { ja: "北米放射線学会（RSNA）にて、単体AIではなくワークフロー統合型AIが主流化。", en: "At RSNA, workflow-integrated AI becomes mainstream over standalone AI solutions." },
    impact: { ja: "キヤノンメディカル、富士フイルムは、病院情報システムとのシームレスな統合が必須要件に。", en: "Canon Medical and Fujifilm must ensure seamless integration with hospital information systems." },
    action: { ja: "有力なAIスタートアップとのAPI連携、あるいは買収を含めた戦略的提携の検討が望まれます。", en: "Consider strategic alliances, including API integration or acquisitions of leading AI startups." },
    url: "https://www.rsna.org/annual-meeting"
  },
  {
    id: "106",
    title: { ja: "【北米】AHA 2025：心房細動アブレーションの新潮流", en: "[North America] AHA 2025: New Trends in AFib Ablation" },
    region: "North America",
    date: "2025-11-18",
    riskLevel: "Low",
    scenario: { ja: "米国心臓協会（AHA）にて、パルスフィールドアブレーション（PFA）の優位性を示す新データ発表。", en: "AHA presents new data demonstrating the superiority of Pulsed Field Ablation (PFA)." },
    impact: { ja: "カテーテル事業を持つテルモや日本ライフラインは、PFA技術への対応が急務。", en: "Terumo and Japan Lifeline must urgently adapt to PFA technology." },
    action: { ja: "PFA関連の特許網を調査し、自社製品とのカニバリゼーションリスクを分析することが重要です。", en: "It is important to investigate PFA patent landscapes and analyze cannibalization risks." },
    url: "https://professional.heart.org/en/meetings/scientific-sessions"
  },
  {
    id: "107",
    title: { ja: "【米国】ホワイトハウス：2026年バイオ製造強化令", en: "[USA] White House: 2026 Biomanufacturing Executive Order" },
    region: "North America",
    date: "2025-12-20",
    riskLevel: "Medium",
    scenario: { ja: "重要医薬品・機器の国内製造比率引き上げを狙う大統領令が発効。", en: "Executive Order takes effect aimed at increasing domestic manufacturing ratios for critical medicines and devices." },
    impact: { ja: "米国公的機関への納入において、現地生産比率が低い日本製品は不利になる懸念。", en: "Japanese products with low local production ratios risk disadvantage in US public procurement." },
    action: { ja: "米国受託製造（CMO）の活用、または現地工場の稼働率引き上げを検討する時期に来ています。", en: "It is time to consider using US CMOs or increasing local factory utilization." },
    url: "https://www.whitehouse.gov/ostp/"
  },
  {
    id: "108",
    title: { ja: "【米国】HIPAA更新：生体データプライバシー規制強化", en: "[USA] HIPAA Update: Stricter Biometric Data Privacy" },
    region: "North America",
    date: "2025-12-10",
    riskLevel: "High",
    scenario: { ja: "HHSが生体データおよびリプロダクティブヘルス情報の保護に関する新HIPAAガイダンスを発行。", en: "HHS issues new HIPAA guidance on protecting biometric and reproductive health data." },
    impact: { ja: "フェムテック関連アプリを提供する日系企業は、データ管理体制の抜本的見直しが必要。", en: "Japanese Femtech app providers need a fundamental review of data management systems." },
    action: { ja: "米国向けアプリのプライバシーポリシーを早急に改定し、法的リスクを最小化するよう手配願います。", en: "Please arrange for an immediate revision of US app privacy policies to minimize legal risks." },
    url: "https://www.hhs.gov/hipaa/index.html"
  },
  {
    id: "109",
    title: { ja: "【カナダ】デジタルヘルス投資戦略2026始動", en: "[Canada] Digital Health Investment Strategy 2026 Launches" },
    region: "North America",
    date: "2026-01-04",
    riskLevel: "Low",
    scenario: { ja: "カナダ政府が医療DXに向けた大規模投資ファンドを設立。相互運用性を重視。", en: "Canadian government establishes a major investment fund for Medical DX, prioritizing interoperability." },
    impact: { ja: "現地法人を持つ富士通（ヘルスケア部門）等にとって、公共入札の好機。", en: "A prime opportunity for public tenders for companies like Fujitsu (Healthcare) with local presence." },
    action: { ja: "カナダ保健省の公募要件を確認し、現地パートナーとの提携可能性を探ることを推奨します。", en: "We recommend checking Health Canada's requirements and exploring local partnerships." },
    url: "https://www.canada.ca/en/health-canada.html"
  },
  {
    id: "110",
    title: { ja: "【北米】米墨サプライチェーン：2026年国境検査厳格化", en: "[North America] US-Mexico Supply Chain: 2026 Border Checks Tighten" },
    region: "North America",
    date: "2026-01-03",
    riskLevel: "Medium",
    scenario: { ja: "USMCAに基づき、メキシコからの医療機器輸入に対する原産地規則の執行が強化。", en: "Enforcement of Rules of Origin for medical device imports from Mexico tightens under USMCA." },
    impact: { ja: "メキシコ生産拠点を持つ日系サプライヤーにおいて、通関遅延リスクが増大。", en: "Increased risk of customs delays for Japanese suppliers with Mexican production bases." },
    action: { ja: "物流部門と連携し、CTPAT認証の維持および原産地証明書の再確認を進めることをお勧めします。", en: "We recommend coordinating with logistics to maintain CTPAT and re-verify certificates of origin." },
    url: "https://www.cbp.gov/trade"
  },
  // --- Europe (Batch 2) ---
  {
    id: "201",
    title: { ja: "【欧州】MDR改正案：認証機関ボトルネックへの緊急措置", en: "[Europe] MDR Amendment: Emergency Measures for NB Bottlenecks" },
    region: "Europe",
    date: "2025-12-16",
    riskLevel: "High",
    scenario: { ja: "欧州委員会がMDR移行期間の再延長および手続き簡素化を含む改正案を提示。", en: "EC proposes amendments including further extension of MDR transition and simplified procedures." },
    impact: { ja: "認証待ちのオリンパス、朝日インテック等は、販売停止リスク回避の猶予を得る可能性。", en: "Companies like Olympus and Asahi Intecc awaiting certification may gain reprieve from sales stop risks." },
    action: { ja: "改正案の動向を注視しつつ、決して手を緩めずに技術文書の準備を継続することが肝要です。", en: "It is crucial to monitor amendments but continue technical file preparation without pausing." },
    url: "https://health.ec.europa.eu/medical-devices-sector_en"
  },
  {
    id: "202",
    title: { ja: "【欧州】認証機関調査：審査遅延は依然18ヶ月超", en: "[Europe] NB Survey: Review Delays Still Exceed 18 Months" },
    region: "Europe",
    date: "2025-11-30",
    riskLevel: "High",
    scenario: { ja: "最新調査により、NBの審査キャパシティ不足が深刻であることが判明。新規申請は1年以上待ち。", en: "Latest survey reveals severe NB capacity shortages. New applications face >1 year wait." },
    impact: { ja: "欧州市場への新製品投入計画を持つ全日本企業において、発売時期の遅れが不可避。", en: "Unavoidable launch delays for all Japanese companies planning new EU products." },
    action: { ja: "2027年以降の更新審査枠について、今のうちに認証機関と交渉の座を持つことを強く推奨します。", en: "We strongly recommend negotiating now with NBs for recertification slots post-2027." },
    url: "https://health.ec.europa.eu/medical-devices-dialogue/medical-devices-coordination-group_en"
  },
  {
    id: "203",
    title: { ja: "【欧州】AI法：医療機器向けガイドライン案公表", en: "[Europe] AI Act: Draft Guidelines for Medical Devices Published" },
    region: "Europe",
    date: "2026-01-02",
    riskLevel: "Medium",
    scenario: { ja: "EU AI法に基づく高リスクAI（医療機器含む）の適合性評価ガイドライン案が示された。", en: "Draft conformity assessment guidelines for high-risk AI (inc. medical devices) under EU AI Act released." },
    impact: { ja: "キヤノンメディカル等のAI診断機器は、MDRに加えAI法への二重コンプライアンスが必要。", en: "AI diagnostic devices from Canon Medical etc. require dual compliance (MDR + AI Act)." },
    action: { ja: "自社AI製品のリスク分類を再評価し、追加文書の特定を急ぐことが望ましいです。", en: "It is advisable to re-evaluate AI product risk classification and identify additional documentation needs." },
    url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
  },
  {
    id: "204",
    title: { ja: "【欧州】EHDS：データ相互運用性が義務化へ", en: "[Europe] EHDS: Data Interoperability Becomes Mandatory" },
    region: "Europe",
    date: "2025-12-28",
    riskLevel: "Medium",
    scenario: { ja: "欧州健康データ空間（EHDS）規則が実装フェーズ入り。電子カルテの標準化が進む。", en: "EHDS regulation enters implementation phase. EHR standardization accelerates." },
    impact: { ja: "日本光電やフクダ電子は、欧州向け製品におけるFHIR標準対応が市場参入の必須条件に。", en: "FHIR compliance becomes a mandatory market entry condition for Nihon Kohden and Fukuda Denshi." },
    action: { ja: "R&D部門と協議し、欧州相互運用性フレームワークへの準拠スケジュールを策定してください。", en: "Consult R&D and formulate a schedule for compliance with the European Interoperability Framework." },
    url: "https://health.ec.europa.eu/ehealth-digital-health-and-care/european-health-data-space_en"
  },
  {
    id: "205",
    title: { ja: "【英国】MHRA：2026年新規制ロードマップ策定", en: "[UK] MHRA: 2026 New Regulatory Roadmap Defined" },
    region: "Europe",
    date: "2025-11-10",
    riskLevel: "Medium",
    scenario: { ja: "ブレグジット後の独自医療機器規制の詳細スケジュールが確定。2026年より段階施行。", en: "Detailed schedule for post-Brexit medical device regulations confirmed. Phased implementation from 2026." },
    impact: { ja: "EU MDR認証の英国での有効期限を見据え、UKCAマーク取得への切り替え戦略が必要。", en: "Strategy needed to switch to UKCA marking, considering EU MDR validity expiry in UK." },
    action: { ja: "英国責任者（UKRP）と連携の上、独自の技術文書提出に向けたロードマップ作成を推奨します。", en: "We recommend creating a roadmap for submitting technical files in coordination with your UKRP." },
    url: "https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency"
  },
  {
    id: "206",
    title: { ja: "【欧州】MedTech Forum 2026：5月ストックホルム開催", en: "[Europe] MedTech Forum 2026: Stockholm in May" },
    region: "Europe",
    date: "2026-01-04",
    riskLevel: "Low",
    scenario: { ja: "欧州最大の業界会議が5月に決定。サステナビリティ規制とMDRが主要議題。", en: "Europe's largest industry conference confirmed for May. Sustainability and MDR are key topics." },
    impact: { ja: "欧州規制当局との直接対話の機会。ニプロ、テルモ等の現地法人は参加必須。", en: "Opportunity for direct dialogue with EU regulators. Mandatory participation for Nipro, Terumo subsidiaries." },
    action: { ja: "規制担当者の参加登録を行い、ロビイングおよび情報収集の場として活用をご検討ください。", en: "Consider registering regulatory staff to use this as a venue for lobbying and intelligence gathering." },
    url: "https://www.medtecheurope.org/events/medtech-forum/"
  },
  {
    id: "207",
    title: { ja: "【スイス】対EU MRA未締結：代理人要件の継続", en: "[Switzerland] No EU MRA: Representative Requirements Continue" },
    region: "Europe",
    date: "2026-01-03",
    riskLevel: "Medium",
    scenario: { ja: "スイス・EU間の相互承認協定（MRA）更新の目処立たず。第三国扱いが継続。", en: "No update on Swiss-EU MRA. Third-country status continues." },
    impact: { ja: "スイスに輸出する日本企業は、引き続きスイス国内代理人（CH-REP）の維持コストが発生。", en: "Japanese exporters to Switzerland continue to incur CH-REP maintenance costs." },
    action: { ja: "既存のスイス代理人契約の更新手続きに漏れがないか、担当部署へ確認を促すのが良いでしょう。", en: "It is best to prompt departments to check Swiss representative contract renewals." },
    url: "https://www.swissmedtech.ch/"
  },
  {
    id: "208",
    title: { ja: "【ドイツ】DiGA：デジタル治療アプリ審査が迅速化", en: "[Germany] DiGA: Digital Health App Review Accelerated" },
    region: "Europe",
    date: "2025-12-15",
    riskLevel: "Low",
    scenario: { ja: "BfArMがDiGAファストトラック制度を改善。エビデンス要件の一部柔軟化。", en: "BfArM improves DiGA fast-track. Partial flexibility in evidence requirements." },
    impact: { ja: "キュアアップ等のDTx（デジタル治療）開発企業にとって、ドイツ市場参入の障壁が低下。", en: "Lower barriers for DTx developers like CureApp to enter the German market." },
    action: { ja: "ドイツの保険償還申請に向け、臨床データのギャップ分析を行うことをお勧めします。", en: "We recommend conducting a gap analysis of clinical data for German reimbursement applications." },
    url: "https://www.bfarm.de/EN/Medical-devices/DiGA/_node.html"
  },
  {
    id: "209",
    title: { ja: "【フランス】2026年社会保障予算：償還価格リセット", en: "[France] 2026 Social Security Budget: Reimbursement Price Reset" },
    region: "Europe",
    date: "2025-12-20",
    riskLevel: "Medium",
    scenario: { ja: "PLFSS 2026にて、医療機器の償還価格に対する一律カット圧力が強まる。", en: "PLFSS 2026 increases pressure for uniform cuts to medical device reimbursement prices." },
    impact: { ja: "フランス市場での利益率低下懸念。テルモ等の心臓血管製品への価格交渉が難航予想。", en: "Margin squeeze concerns in France. Price negotiations for Terumo cardiovascular products likely difficult." },
    action: { ja: "製品の経済的価値（HEOR）データを補強し、価格維持交渉に備えることが賢明です。", en: "It is wise to reinforce HEOR data to prepare for price defense negotiations." },
    url: "https://www.securite-sociale.fr/"
  },
  {
    id: "210",
    title: { ja: "【英国】ライフサイエンス投資：製造拠点誘致へ", en: "[UK] Life Sciences Investment: Attracting Manufacturing Bases" },
    region: "Europe",
    date: "2026-01-06",
    riskLevel: "Low",
    scenario: { ja: "英国政府が2026年度予算でライフサイエンス製造への補助金を拡充。", en: "UK government expands subsidies for life sciences manufacturing in 2026 budget." },
    impact: { ja: "英国に製造拠点を持つ日系企業（エーザイ等含む）に追加投資のインセンティブ。", en: "Incentives for additional investment for Japanese companies with UK bases (e.g., Eisai)." },
    action: { ja: "英国工場の設備更新に対する補助金申請の可能性について、調査を指示してはいかがでしょうか。", en: "Why not direct an investigation into subsidy eligibility for UK plant equipment upgrades?" },
    url: "https://www.gov.uk/government/organisations/office-for-life-sciences"
  },
  // --- Asia (East) (Batch 3) ---
  {
    id: "301",
    title: { ja: "【中国】NMPA 新GMP：海外工場への査察強化", en: "[China] NMPA New GMP: Stricter Overseas Inspections" },
    region: "East Asia",
    date: "2025-11-01",
    riskLevel: "High",
    scenario: { ja: "医療機器GMP（2025年第107号）施行に伴い、海外製造所に対するリモートおよび実地査察が厳格化。", en: "Stricter remote/on-site inspections for overseas plants under new Medical Device GMP (No. 107)." },
    impact: { ja: "日本の製造拠点を持つシスメックスやオムロン等は、査察対応体制の強化が必須。", en: "Sysmex and Omron with Japan manufacturing must strengthen inspection readiness." },
    action: { ja: "中国GMPとISO 13485の差異分析を行い、模擬査察を実施して備えることを推奨します。", en: "We recommend difference analysis between China GMP and ISO 13485 and conducting mock inspections." },
    url: "https://english.nmpa.gov.cn/"
  },
  {
    id: "302",
    title: { ja: "【中国】VBP 第6回：高価格消耗品が標的", en: "[China] VBP Round 6: High-Value Consumables Targeted" },
    region: "East Asia",
    date: "2025-12-10",
    riskLevel: "High",
    scenario: { ja: "国家帯量購買（VBP）第6弾にて、整形外科および眼科用消耗品が対象化される見込み。", en: "VBP Round 6 is expected to target orthopedic and ophthalmic consumables." },
    impact: { ja: "現地シェアを持つHOYAやニデックは、入札価格の劇的な引き下げ圧力に直面。", en: "HOYA and Nidek face dramatic price reduction pressure." },
    action: { ja: "VBP落札時の数量増効果と、減収影響のバランスをシミュレーションしておく必要があります。", en: "You need to simulate the balance between volume gains from VBP wins and revenue drops." },
    url: "http://english.nhsa.gov.cn/"
  },
  {
    id: "303",
    title: { ja: "【中国】ハイエンド機器優遇策：イノベーション審査加速", en: "[China] High-End Device Incentives: Innovation Review Accelerated" },
    region: "East Asia",
    date: "2025-10-15",
    riskLevel: "Low",
    scenario: { ja: "画期的な医療機器に対する優先審査制度（グリーンチャネル）の運用が効率化。", en: "Priority review (Green Channel) for innovative devices streamlined." },
    impact: { ja: "独自技術を持つ日本メーカー（オリンパス等）の新規承認リードタイム短縮の好機。", en: "Opportunity for innovators like Olympus to shorten lead times for new approvals." },
    action: { ja: "中国現地法人と連携し、優先審査枠への適用申請を積極的に検討してください。", en: "Actively consider applying for priority review in coordination with your Chinese subsidiary." },
    url: "https://english.nmpa.gov.cn/"
  },
  {
    id: "304",
    title: { ja: "【日本】中医協 2026改定：不採算品の再算定ルール", en: "[Japan] Chuikyo 2026 Revision: Repricing Unprofitable Items" },
    region: "East Asia",
    date: "2025-12-26",
    riskLevel: "Medium",
    scenario: { ja: "中医協が2026年度改定に向け、安定供給確保のための不採算品再算定を議論。", en: "Chuikyo discusses repricing unprofitable items to ensure stable supply for 2026 revision." },
    impact: { ja: "低マージンのカテーテル等を扱うテルモ、ニプロにとって、薬価引き上げのチャンス。", en: "Chance for price hikes for Terumo/Nipro handling low-margin catheters." },
    action: { ja: "製品別の収益性データを整理し、学会を通じて厚労省へ要望書を提出する準備をお勧めします。", en: "We recommend organizing profitability data and preparing specific requests to MHLW via societies." },
    url: "https://www.mhlw.go.jp/stf/shingi/chuikyo.html"
  },
  {
    id: "305",
    title: { ja: "【日本】PMDA：米国ワシントン事務所が本格稼働", en: "[Japan] PMDA: Washington DC Office Fully Operational" },
    region: "East Asia",
    date: "2025-09-10",
    riskLevel: "Low",
    scenario: { ja: "PMDA米国事務所により、日米同時申請（Parallel Review）の相談体制が強化。", en: "PMDA US office strengthens consultation system for US-Japan Parallel Review." },
    impact: { ja: "米国展開を目指す日本のスタートアップや大手企業の薬事戦略が効率化。", en: "Streamlined regulatory strategy for Japanese startups/majors targeting US expansion." },
    action: { ja: "米国承認申請のロードマップに、PMDA米国事務所との事前相談を組み込むことが有用です。", en: "It is useful to incorporate pre-consultation with PMDA US office into your US roadmap." },
    url: "https://www.pmda.go.jp/english/"
  },
  {
    id: "306",
    title: { ja: "【日本】医療DX 2030：電子カルテ標準化が加速", en: "[Japan] Medical DX 2030: EHR Standardization Accelerates" },
    region: "East Asia",
    date: "2026-01-04",
    riskLevel: "Low",
    scenario: { ja: "厚労省が標準型電子カルテの全国展開スケジュールを前倒し。", en: "MHLW moves up schedule for nationwide rollout of standardized EHRs." },
    impact: { ja: "PHCや富士通等の電子カルテベンダーは、HL7 FHIR対応を急ぐ必要あり。", en: "EHR vendors like PHC and Fujitsu must rush HL7 FHIR compliance." },
    action: { ja: "政府提供の標準規格APIへの接続テストを、開発工程に早期に組み込むことを推奨します。", en: "We recommend integrating connection tests for government standard APIs early in development." },
    url: "https://www.mhlw.go.jp/"
  },
  {
    id: "307",
    title: { ja: "【韓国】デジタル製品法：SaMD規制の大転換", en: "[Korea] Digital Product Act: Major Shift in SaMD Regulation" },
    region: "East Asia",
    date: "2026-01-05",
    riskLevel: "High",
    scenario: { ja: "デジタル医療製品法が施行され、ソフトウェア単体（SaMD）の審査体系が独立化。", en: "Digital Medical Product Act enforced; SaMD review system becomes independent." },
    impact: { ja: "韓国市場にアプリを展開する日本企業は、従来と異なる申請区分の選択が必要。", en: "Japanese app developers in Korea must select different application categories than before." },
    action: { ja: "現地コンサルタントを通じて、新法に基づく製品クラス分類を再確認することが必須となります。", en: "It is mandatory to re-confirm product classification under the new law via local consultants." },
    url: "https://www.mfds.go.kr/eng/index.do"
  },
  {
    id: "308",
    title: { ja: "【韓国】AI医療機器：学習データの透明性ガイドライン", en: "[Korea] AI Medical Devices: Training Data Transparency Guidelines" },
    region: "East Asia",
    date: "2025-11-20",
    riskLevel: "Medium",
    scenario: { ja: "MFDSがAIモデルの学習データセットに関する開示要件を厳格化。", en: "MFDS strictens disclosure requirements for AI model training datasets." },
    impact: { ja: "キヤノンメディカル等のAI画像診断機器は、韓国申請時に詳細なデータセット説明が必要。", en: "Canon Medical's AI imaging devices require detailed dataset explanations for Korea applications." },
    action: { ja: "AI開発部門に対し、学習データのトレーサビリティ記録の整備状況を確認させてください。", en: "Check the status of training data traceability records with your AI development department." },
    url: "https://www.mfds.go.kr/eng/index.do"
  },
  {
    id: "309",
    title: { ja: "【台湾】医療機器QSD：ISO 13485簡易審査枠拡大", en: "[Taiwan] Device QSD: Expanded ISO 13485 Simplified Review" },
    region: "East Asia",
    date: "2025-12-01",
    riskLevel: "Medium",
    scenario: { ja: "品質システム文書（QSD）審査において、MDSAPレポート等の活用範囲が拡大。", en: "Expanded use of MDSAP reports in Quality System Documentation (QSD) reviews." },
    impact: { ja: "台湾への輸出を行う日本メーカーのQSD更新手続き期間が短縮される見込み。", en: "Expected reduction in QSD renewal time for Japanese manufacturers exporting to Taiwan." },
    action: { ja: "次回QSD更新時に簡易審査ルートが適用可能か、台湾代理人と協議することをお勧めします。", en: "We recommend discussing with your Taiwan agent if the simplified route applies to your next renewal." },
    url: "https://www.fda.gov.tw/ENG/index.aspx"
  },
  {
    id: "310",
    title: { ja: "【香港】メディカルフェア2026：大湾区進出の足掛かり", en: "[Hong Kong] Medical Fair 2026: Foothold for GBA Expansion" },
    region: "East Asia",
    date: "2026-01-02",
    riskLevel: "Low",
    scenario: { ja: "グレーターベイエリア（GBA）での医療機器即時使用制度（港澳薬械通）が注目。", en: "Focus on the 'Hong Kong/Macau Medicine and Equipment Connect' for immediate use in GBA." },
    impact: { ja: "香港で承認済みの日本製品は、中国本土GBA内の指定病院で早期使用が可能に。", en: "HK-approved Japanese products can be used early in designated GBA hospitals." },
    action: { ja: "香港での承認実績を活用した中国本土参入（GBAルート）の事業計画策定をご検討ください。", en: "Consider formulating a mainland market entry plan (GBA route) leveraging HK approvals." },
    url: "https://event.hktdc.com/fair/hkmedicalfair-en/"
  },
  // --- Global Supply Chain (Batch 4) ---
  {
    id: "401",
    title: { ja: "【半導体】レガシーチップ不足：2026年も継続懸念", en: "[Semicon] Legacy Chip Shortage: 2026 Persistence Fear" },
    region: "Global",
    date: "2026-01-06",
    riskLevel: "High",
    scenario: { ja: "AIチップへの生産能力集中により、医療機器用マイコン等のレガシー半導体が後回しに。", en: "Capacity focus on AI chips sidelines legacy MCUs for medical devices." },
    impact: { ja: "シスメックスや日本光電等の機器製造ラインにおいて、部品欠品による生産停止リスク。", en: "Risk of production halts due to component shortages for Sysmex and Nihon Kohden lines." },
    action: { ja: "主要半導体の在庫積み増しと、代替品の設計変更（DR）を並行して進めることが賢明です。", en: "It is wise to proceed with increasing inventory and designing alternatives (DR) in parallel." },
    url: "https://sourceability.com/"
  },
  {
    id: "402",
    title: { ja: "【滅菌】EtO規制：米国EPAが2年間の猶予付与", en: "[Sterilization] EtO Rules: US EPA Grants 2-Year Grace" },
    region: "Global",
    date: "2025-10-15",
    riskLevel: "Medium",
    scenario: { ja: "医療機器供給への影響を懸念し、酸化エチレン（EtO）排出規制の完全適用を延期。", en: "EPA delays full EtO emission rule enforcement concerns over device supply." },
    impact: { ja: "テルモ等の米国向け輸出品の滅菌処理確保において、当面の混乱は回避。", en: "Immediate disruption avoided for Terumo's US-bound sterilization." },
    action: { ja: "猶予期間中に、電子線やX線滅菌への切り替えバリデーションを完了させることを推奨します。", en: "We recommend completing validation for X-ray/E-beam switching during the grace period." },
    url: "https://www.raps.org/"
  },
  {
    id: "403",
    title: { ja: "【物流】2026年Q1：医薬品航空貨物のスペース逼迫", en: "[Logistics] 2026 Q1: Pharma Air Cargo Crunch" },
    region: "Global",
    date: "2026-01-03",
    riskLevel: "Medium",
    scenario: { ja: "バイオ医薬品の輸送需要増により、定温管理された航空貨物スペースの確保が困難に。", en: "Surging biopharma demand makes securing temp-controlled air cargo space difficult." },
    impact: { ja: "試薬や検体を扱う日本企業の海外輸送コスト上昇とリードタイム遅延。", en: "Rising costs and delays for Japanese firms shipping reagents/specimens." },
    action: { ja: "フォワーダーとの年間契約を見直し、優先スペース確保条項を盛り込む検討を推奨します。", en: "We recommend reviewing forwarder contracts to include priority space clauses." },
    url: "https://www.berlinpackaging.com/"
  },
  {
    id: "404",
    title: { ja: "【物流】コールドチェーン：2026年は10%成長予測", en: "[Logistics] Cold Chain: 10% Growth Forecast for 2026" },
    region: "Global",
    date: "2025-12-28",
    riskLevel: "Low",
    scenario: { ja: "厳格な温度管理を要する生物製剤・再生医療等製品の流通量が急増。", en: "Rapid increase in biologics/regenerative products requiring strict temperature control." },
    impact: { ja: "保冷ボックス技術を持つ日本の部材メーカーに新規参入の商機。", en: "Business opportunity for Japanese cold-box material makers." },
    action: { ja: "物流コスト削減のための高性能保冷容器の採用、または開発を検討してはいかがでしょうか。", en: "Why not consider adopting or developing high-performance cold containers to cut costs?" },
    url: "https://www.grandviewresearch.com/"
  },
  {
    id: "405",
    title: { ja: "【治験】DCT（分散型試験）が2026年の標準に", en: "[Trials] DCT Becomes 2026 Standard" },
    region: "Global",
    date: "2026-01-04",
    riskLevel: "Low",
    scenario: { ja: "ウェアラブルデバイスを活用した在宅治験（DCT）が欧米で一般化。", en: "Decentralized Clinical Trials (DCT) using wearables become common in US/EU." },
    impact: { ja: "日本の製薬・機器メーカーは、海外治験においてDCT対応プロトコルが必須に。", en: "DCT-compliant protocols become mandatory for Japanese makers in overseas trials." },
    action: { ja: "治験提携先（CRO）選定において、DCT支援能力を最重要評価項目とすることをお勧めします。", en: "We recommend making DCT support capability a top priority in CRO selection." },
    url: "https://www.xtalks.com/"
  },
  {
    id: "406",
    title: { ja: "【資源】ヘリウム供給危機：MRI製造への深刻な打撃", en: "[Resources] Helium Crisis: Serious Hit to MRI Ops" },
    region: "Global",
    date: "2025-11-30",
    riskLevel: "High",
    scenario: { ja: "地政学リスクによるヘリウム供給難が継続。医療用MRIへの優先配分も限界に。", en: "Helium shortage continues. Priority allocation for medical MRI at limits." },
    impact: { ja: "キヤノンメディカルや日立（富士フイルム）のMRI保守コスト圧迫と新規製造遅延。", en: "Maintenance cost pressure and production delays for Canon/Fujifilm MRI." },
    action: { ja: "ヘリウムレスまたは少ヘリウム型MRIへの製品ポートフォリオ転換を加速させることが、長期的な解決策です。", en: "Accelerating the shift to helium-free/low-helium MRI portfolios is the long-term solution." },
    url: "https://www.rsna.org/"
  },
  {
    id: "407",
    title: { ja: "【資源】チタン価格変動：インプラント原価を直撃", en: "[Resources] Titanium Price Volatility: Implant Cost Hit" },
    region: "Global",
    date: "2025-12-10",
    riskLevel: "Medium",
    scenario: { ja: "航空宇宙需要との競合により、医療用チタン合金の調達価格が高止まり。", en: "Medical titanium prices remain high due to competition with aerospace demand." },
    impact: { ja: "京セラや帝人ナカシマメディカル等の整形外科インプラント製品の利益率低下。", en: "Lower margins for orthopedic implants from Kyocera/Teijin Nakashima." },
    action: { ja: "長期調達契約による価格固定化と、代替材料の基礎研究を推進することをご検討ください。", en: "Consider fixing prices via long-term contracts and promoting alternative material research." },
    url: "https://www.jhtitanium.com/"
  },
  {
    id: "408",
    title: { ja: "【素材】医療用樹脂：フッ素ポリマーの供給不安", en: "[Materials] Med-Resin: Fluoropolymer Supply Anxiety" },
    region: "Global",
    date: "2025-12-15",
    riskLevel: "Medium",
    scenario: { ja: "PFAS規制の影響で、カテーテル被覆材等に使う特定フッ素樹脂の生産が縮小。", en: "PFAS regulations shrink production of fluoropolymers used in catheter coatings." },
    impact: { ja: "カテーテルメーカー（朝日インテック等）は、代替樹脂の選定を迫られる可能性。", en: "Catheter makers (Asahi Intecc) may be forced to select alternative resins." },
    action: { ja: "PFAS規制に抵触しない代替医療用樹脂の在庫確保と評価試験を急ぐべきでしょう。", en: "You should rush to secure PFAS-free alternative resins and conduct validation." },
    url: "https://www.plasticstoday.com/"
  },
  {
    id: "409",
    title: { ja: "【滅菌】X線滅菌へのモーダルシフト加速", en: "[Sterilization] Modal Shift to X-ray Accelerates" },
    region: "Global",
    date: "2025-11-05",
    riskLevel: "Medium",
    scenario: { ja: "EtO規制回避のため、大手デバイスメーカーがX線滅菌設備への投資を拡大。", en: "Majors expand X-ray sterilization investment to avoid EtO risks." },
    impact: { ja: "既存の滅菌委託先を変更する場合、物流ルートと再バリデーションの手間が発生。", en: "Changing sterilization contractors incurs logistics and re-validation efforts." },
    action: { ja: "国内のX線滅菌施設の空き状況を確認し、リスク分散を図ることを推奨します。", en: "We recommend checking domestic X-ray sterilization capacity to diversify risk." },
    url: "https://www.fda.gov/"
  },
  {
    id: "410",
    title: { ja: "【安保】SBOM（ソフト部品表）の提出義務化", en: "[Security] SBOM Submission Mandated" },
    region: "Global",
    date: "2026-01-02",
    riskLevel: "High",
    scenario: { ja: "日米欧の規制当局が、医療機器サイバーセキュリティ対策としてSBOM提出を必須化。", en: "US/EU/Japan regulators mandate SBOM submission for cybersecurity." },
    impact: { ja: "ソフトウェアを含む医療機器を輸出する全日本企業に膨大な管理工数が発生。", en: "Huge management workload for all Japanese exporters of software-based medical devices." },
    action: { ja: "SBOM自動生成ツールを導入し、サプライチェーン全体の脆弱性管理体制を構築することが急務です。", en: "Urgently introduce SBOM automation tools and build a supply chain vulnerability management system." },
    url: "https://www.cisa.gov/"
  },
  // --- SE Asia & India (Batch 5) ---
  {
    id: "501",
    title: { ja: "【ベトナム】医療機器市場：21億ドル規模へ急成長", en: "[Vietnam] MedTech Market: Rapid Growth to $2.1B" },
    region: "Southeast Asia",
    date: "2026-01-04",
    riskLevel: "Low",
    scenario: { ja: "公的病院の設備更新需要が牽引し、2026年は二桁成長を持続する見通し。", en: "Double-digit growth expected in 2026, driven by public hospital equipment renewal demand." },
    impact: { ja: "日本光電やシスメックス等の検査機器メーカーにとって、シェア拡大の好機。", en: "Prime opportunity for lab equipment makers like Nihon Kohden and Sysmex into expand share." },
    action: { ja: "ハノイ・ホーチミンの主要公立病院に対する入札営業を強化することを提案します。", en: "We propose strengthening tender sales activities for major public hospitals in Hanoi/HCMC." },
    url: "https://www.vietnam-briefing.com/"
  },
  {
    id: "502",
    title: { ja: "【ベトナム】日系メーカーの生産拠点拡大", en: "[Vietnam] Japanese Makers Expand Production Bases" },
    region: "Southeast Asia",
    date: "2025-11-15",
    riskLevel: "Low",
    scenario: { ja: "朝日インテックやオムロンがベトナム工場の増強を発表。「チャイナ・プラス・ワン」が加速。", en: "Asahi Intecc and Omron announce Vietnam factory expansions. 'China Plus One' accelerates." },
    impact: { ja: "ベトナム現地でのサプライチェーン構築が進み、部材調達の現地化率が向上。", en: "Local supply chain build-up improves local procurement rates." },
    action: { ja: "ベトナム工場からの欧米輸出ルートを確立し、物流リスク分散を図ることが望ましいです。", en: "It is desirable to establish export routes to US/EU from Vietnam to diversify logistics risk." },
    url: "https://vir.com.vn/"
  },
  {
    id: "503",
    title: { ja: "【インド】CDSCO：リスク分類のオンライン化", en: "[India] CDSCO: Risk Classification Goes Online" },
    region: "South Asia",
    date: "2025-11-27",
    riskLevel: "Medium",
    scenario: { ja: "インド規制当局（CDSCO）がデバイス分類データベースを公開。予見性が向上。", en: "CDSCO publishes device classification database, improving predictability." },
    impact: { ja: "インド市場参入を検討中の日本企業にとって、登録までのリードタイム見積もりが容易に。", en: "Easier lead time estimation for Japanese firms entering India." },
    action: { ja: "自社製品の分類をデータベースで確認し、代理人を通じて登録準備を進めてはいかがでしょうか。", en: "Why not verify your product classification in the DB and prepare registration via agents?" },
    url: "https://cdsco.gov.in/"
  },
  {
    id: "504",
    title: { ja: "【インド】ライセンス改正：製造・輸入免許が無期限化へ", en: "[India] License Amendment: Perpetual Mfg/Import Licenses" },
    region: "South Asia",
    date: "2025-12-04",
    riskLevel: "Low",
    scenario: { ja: "手数料支払いと維持要件を満たせば、ライセンス更新が不要になる規則案が浮上。", en: "Draft rule proposes perpetual licenses subject to fee payment and maintenance conditions." },
    impact: { ja: "テルモインド等の現地法人にとって、5年ごとの更新事務負担が大幅に軽減。", en: "Significant reduction in 5-year renewal admin burden for subsidiaries like Terumo India." },
    action: { ja: "現地法務担当に対し、新規則施行後のコンプライアンス維持要件の確認を依頼してください。", en: "Please request local legal staff to check compliance maintenance requirements under new rules." },
    url: "https://cdsco.gov.in/"
  },
  {
    id: "505",
    title: { ja: "【インド】PLIスキーム：高度医療機器の国産化推進", en: "[India] PLI Scheme: Promoting High-End Device Indigenization" },
    region: "South Asia",
    date: "2025-12-20",
    riskLevel: "Medium",
    scenario: { ja: "生産連動型インセンティブ（PLI）が拡大。CT/MRI等の高度機器のインド国内製造を優遇。", en: "PLI scheme expands, favoring domestic manufacturing of high-end devices like CT/MRI." },
    impact: { ja: "キヤノンメディカル等は、完成品輸出から現地ノックダウン生産への切り替え検討が必要。", en: "Canon Medical etc. need to consider switching from export to local knockdown production." },
    action: { ja: "PLI適用を受けるための現地パートナー選定と、投資対効果の分析をお勧めします。", en: "We recommend selecting local partners for PLI eligibility and analyzing ROI." },
    url: "https://pharmaceuticals.gov.in/"
  },
  {
    id: "506",
    title: { ja: "【インドネシア】ハラール認証：クラスA機器も義務化へ", en: "[Indonesia] Halal Certification: Mandatory for Class A" },
    region: "Southeast Asia",
    date: "2025-10-25",
    riskLevel: "High",
    scenario: { ja: "2026年10月より、動物由来材料を含まないクラスA機器でもハラール認証が必須に。", en: "Halal certification becomes mandatory for Class A devices (even non-animal based) from Oct 2026." },
    impact: { ja: "現地シェアを持つ多くの日本メーカーが、認証未取得による販売停止リスクに直面。", en: "Many Japanese makers face sales stop risks if uncertified." },
    action: { ja: "BPJPH認定の認証機関にて、直ちに申請手続きを開始することを強く推奨します。", en: "We strongly recommend starting application procedures immediately at BPJPH-accredited bodies." },
    url: "https://halalmui.org/"
  },
  {
    id: "507",
    title: { ja: "【インドネシア】TKDN：公共入札での国産優先", en: "[Indonesia] TKDN: Local Content Priority in Tenders" },
    region: "Southeast Asia",
    date: "2025-11-10",
    riskLevel: "Medium",
    scenario: { ja: "国産化率（TKDN）要件を満たさない輸入品が、e-Catalogue（電子カタログ）から排除される傾向。", en: "Trend of excluding imports meeting Local Content (TKDN) requirements from e-Catalogue." },
    impact: { ja: "日本からの完成品輸出に依存する企業は、公的市場から閉め出される恐れ。", en: "Firms relying on finished exports risk exclusion from public markets." },
    action: { ja: "現地メーカーへのOEM委託による「インドネシア製」化の検討が急務です。", en: "Urgent consideration of 'Made in Indonesia' via OEM to local makers is needed." },
    url: "https://kemenperin.go.id/"
  },
  {
    id: "508",
    title: { ja: "【タイ】メディカルハブ構想：国境医療への投資", en: "[Thailand] Medical Hub: Border Healthcare Investment" },
    region: "Southeast Asia",
    date: "2026-01-05",
    riskLevel: "Low",
    scenario: { ja: "2026年度予算にて国境地域の医療機関整備に重点配分。医療ツーリズム復興。", en: "2026 budget focuses on border medical facilities. Medical tourism revival." },
    impact: { ja: "タイに進出する日本の病院（藤田医科大等）や機器メーカーに周辺国からの患者流入効果。", en: "Patient inflow benefits for Japanese hospitals (Fujita Health Univ) and makers in Thailand." },
    action: { ja: "タイ国境付近の新規病院プロジェクトに対する機器スペックイン活動の強化をご検討ください。", en: "Consider strengthening spec-in activities for new hospital projects near Thai borders." },
    url: "https://www.thailand.go.th/"
  },
  {
    id: "509",
    title: { ja: "【シンガポール】HSA：SHAREシステム完全移行", en: "[Singapore] HSA: Full Transition to SHARE System" },
    region: "Southeast Asia",
    date: "2025-11-01",
    riskLevel: "Medium",
    scenario: { ja: "医療機器登録が新システム「SHARE」に一本化。旧システムは廃止。", en: "Device registration unified to 'SHARE' system. Old system phased out." },
    impact: { ja: "シンガポール拠点の薬事担当者は、新インターフェースへの習熟が必要。", en: "Local RA staff must master the new interface." },
    action: { ja: "社内SOPをSHAREシステムの操作手順に合わせて更新するよう指示してください。", en: "Instruct updates to internal SOPs to match SHARE system procedures." },
    url: "https://www.hsa.gov.sg/"
  },
  {
    id: "510",
    title: { ja: "【マレーシア】MDA：2026年より申請手数料値上げ", en: "[Malaysia] MDA: Fee Hikes from 2026" },
    region: "Southeast Asia",
    date: "2025-12-10",
    riskLevel: "Medium",
    scenario: { ja: "MDAが手数料体系を改定。クラスA届出およびライセンス更新料が増額。", en: "MDA revises fee structure. Increases for Class A notification and license renewal." },
    impact: { ja: "マレーシアでの製品維持コスト上昇。低価格品のマージン圧迫。", en: "Increased product maintenance costs in Malaysia. Margin squeeze for low-cost items." },
    action: { ja: "2026年度の薬事予算に手数料増額分をあらかじめ反映させておくのが得策です。", en: "It is advisable to reflect fee increases in the 2026 RA budget in advance." },
    url: "https://www.mda.gov.my/"
  },
  // --- MEA & LATAM (Batch 6) ---
  {
    id: "601",
    title: { ja: "【サウジ】Vision 2030：2026年医療予算4600億リヤル", en: "[Saudi] Vision 2030: 2026 Healthcare Budget SAR 460B" },
    region: "Middle East",
    date: "2026-01-03",
    riskLevel: "Low",
    scenario: { ja: "原油収入を背景に医療・教育へ巨額投資。Sehaバーチャルホスピタルが機能拡大。", en: "Huge investment in health/education backed by oil revenues. Seha Virtual Hospital expands." },
    impact: { ja: "富士フイルムやキヤノン等の画像診断・ITシステムに対し、国家規模の商談機会。", en: "National-scale opportunities for imaging/IT systems from Fujifilm, Canon, etc." },
    action: { ja: "サウジ現地代理店と連携し、MOH（保健省）の大型入札情報を早期に入手することを推奨します。", en: "We recommend partnering with local agents to get early intel on major MOH tenders." },
    url: "https://www.mof.gov.sa/"
  },
  {
    id: "602",
    title: { ja: "【中東】Arab Health 2026：日本パビリオン拡大", en: "[Middle East] Arab Health 2026: Expanded Japan Pavilion" },
    region: "Middle East",
    date: "2026-01-02",
    riskLevel: "Low",
    scenario: { ja: "2月開催のArab Healthにて、JETRO主導のジャパンパビリオンが過去最大規模に。", en: "JETRO-led Japan Pavilion will be largest ever at Arab Health in Feb." },
    impact: { ja: "中東代理店開拓を目指す日本の中小医療機器メーカーにとって最大の好機。", en: "Greatest opportunity for Japanese SMEs to find Middle East distributors." },
    action: { ja: "展示会での商談アポイントを事前に確定させ、代理店候補をリストアップしておくことをお勧めします。", en: "We recommend pre-booking meetings and listing candidate distributors." },
    url: "https://www.arabhealthonline.com/"
  },
  {
    id: "603",
    title: { ja: "【UAE】統一医療プラットフォーム：人材流動化", en: "[UAE] Unified Health Platform: Workforce Mobility" },
    region: "Middle East",
    date: "2025-12-15",
    riskLevel: "Medium",
    scenario: { ja: "UAE全土で有効な医療従事者ライセンス統合システムが2026年Q2稼働。", en: "Unified UAE-wide healthcare license system launches Q2 2026." },
    impact: { ja: "ドバイ・アブダビ間での医師移動が容易になり、医療機器操作トレーニングの効率化に寄与。", en: "Easier doctor mobility between Dubai-Abu Dhabi efficiency in device training." },
    action: { ja: "クリニカルスペシャリストの配置計画をUAE全域視点で見直すことが望まれます。", en: "It is desirable to review clinical specialist allocation from a UAE-wide perspective." },
    url: "https://gulfnews.com/"
  },
  {
    id: "604",
    title: { ja: "【UAE】ドバイ2026戦略：遠隔医療が標準化", en: "[UAE] Dubai 2026 Strategy: Telemedicine Standardization" },
    region: "Middle East",
    date: "2025-11-20",
    riskLevel: "Low",
    scenario: { ja: "DHA（ドバイ保健局）が遠隔モニタリングを保険償還対象として拡充。", en: "DHA expands insurance reimbursement for remote monitoring." },
    impact: { ja: "オムロン等の家庭用通信血圧計の需要がB2G（政府向け）で拡大する可能性。", en: "Potential B2G demand expansion for home connected BP monitors (Omron etc.)." },
    action: { ja: "DHAの遠隔医療プログラムに自社デバイスが採用されるよう、働きかけをご検討ください。", en: "Consider lobbying for adoption of your devices in DHA telemedicine programs." },
    url: "https://www.dha.gov.ae/"
  },
  {
    id: "605",
    title: { ja: "【ブラジル】ANVISA：新認証システム稼働", en: "[Brazil] ANVISA: New Certification System Live" },
    region: "Latin America",
    date: "2025-11-01",
    riskLevel: "Medium",
    scenario: { ja: "旧システムSicertが廃止され、Solicita統合型の新認証データベースへ移行。", en: "Old Sicert system phased out; migration to Solicita-integrated database." },
    impact: { ja: "ブラジル向け輸出を行う全日本企業の薬事担当者は、新システムでのID取得が必要。", en: "RA staff of Japanese exporters must obtain IDs for the new system." },
    action: { ja: "現地コンサルタントを通じて、新システムへのデータ移行状況を確認するよう手配してください。", en: "Arrange to check data migration status via local consultants." },
    url: "https://www.gov.br/anvisa/"
  },
  {
    id: "606",
    title: { ja: "【ブラジル】RDC 848/2024：IMDRF整合の本格化", en: "[Brazil] RDC 848/2024: IMDRF Alignment" },
    region: "Latin America",
    date: "2025-10-10",
    riskLevel: "Medium",
    scenario: { ja: "医療機器規制が改正され、技術文書の構成が国際標準（IMDRF ToC）と調和。", en: "Regulations amended; technical file structure aligns with IMDRF ToC." },
    impact: { ja: "グローバル展開する日本企業にとって、ブラジル専用資料の作成負担が軽減。", en: "Reduced burden of creating Brazil-specific docs for global Japanese firms." },
    action: { ja: "STED形式またはToC形式で技術ファイルを整備し、申請効率を高めることをお勧めします。", en: "We recommend organizing technical files in STED/ToC format to boost efficiency." },
    url: "https://www.gov.br/anvisa/"
  },
  {
    id: "607",
    title: { ja: "【メキシコ】ニアショアリング：2026年は対米輸出の要", en: "[Mexico] Nearshoring: Key to US Exports in 2026" },
    region: "Latin America",
    date: "2026-01-05",
    riskLevel: "Low",
    scenario: { ja: "米中摩擦を背景に、医療機器の製造拠点をアジアからメキシコへ移す動きが加速。", en: "Shift of production from Asia to Mexico accelerates due to US-China friction." },
    impact: { ja: "北米市場を持つテルモやニプロは、メキシコ工場の増強がサプライチェーン安定の鍵。", en: "Expanding Mexico plants is key for Terumo/Nipro with US markets." },
    action: { ja: "バハ・カリフォルニア等の医療機器クラスターにおいて、拠点確保の調査を進めてはいかがでしょうか。", en: "Why not investigate site security in clusters like Baja California?" },
    url: "https://www.panoramadvisors.com/"
  },
  {
    id: "608",
    title: { ja: "【メキシコ】MedTech市場：米国需要で成長", en: "[Mexico] MedTech Market: Growth via US Demand" },
    region: "Latin America",
    date: "2025-12-12",
    riskLevel: "Low",
    scenario: { ja: "メキシコ国内の医療機器製造が活況。対米輸出拠点としての重要性が増大。", en: "Domestic manufacturing booming. Increasing importance as US export hub." },
    impact: { ja: "日系部品メーカー（金属加工、射出成形）にとって、メキシコ現地調達ニーズへの参入機会。", en: "Entry opportunity for Japanese parts makers (machining, molding) for local sourcing." },
    action: { ja: "メキシコ進出済みの欧米大手デバイスメーカーに対する部品供給営業を推奨します。", en: "We recommend part supply sales to Western majors already in Mexico." },
    url: "https://www.entradagroup.com/"
  },
  {
    id: "609",
    title: { ja: "【アフリカ】2026年市場展望：ケニア・ナイジェリア躍進", en: "[Africa] 2026 Outlook: Kenya/Nigeria surge" },
    region: "Africa",
    date: "2026-01-04",
    riskLevel: "Low",
    scenario: { ja: "人口増と都市化により、主要国で8%超の医療機器市場成長が見込まれる。", en: ">8% market growth expected in key countries due to population/urbanization." },
    impact: { ja: "シスメックス等の検体検査機器は、アフリカ都市部の民間検査センター需要を取り込める。", en: "Sysmex lab instruments can capture private lab demand in African cities." },
    action: { ja: "信頼できる現地代理店を発掘し、販売網構築に向けたステップを踏むことをお勧めします。", en: "We recommend identifying reliable agents and taking steps to build a sales network." },
    url: "https://www.fitchsolutions.com/"
  },
  {
    id: "610",
    title: { ja: "【ケニア】eヘルス戦略：デジタルインフラ整備", en: "[Kenya] eHealth Strategy: Digital Infra Buildout" },
    region: "Africa",
    date: "2025-11-30",
    riskLevel: "Low",
    scenario: { ja: "ケニア政府が遠隔医療プラットフォームの整備入札を実施。", en: "Kenya government tenders for telemedicine platform development." },
    impact: { ja: "日本のODA等と連携した、日本製の簡易診断キットや遠隔システムの参入機会。", en: "Opportunity for Japanese diagnostic kits/remote systems linked to ODA." },
    action: { ja: "JICAやJETROのアフリカ支援スキームを活用し、実証実験の機会を模索してみてはいかがでしょうか。", en: "Why not explore pilot opportunities using JICA/JETRO African support schemes?" },
    url: "https://www.health.go.ke/"
  },
  // --- Advanced & Strategic Markets (Batch 7) ---
  {
    id: "701",
    title: { ja: "【カナダ】Health Canada 2026：デジタルヘルス投資の加速", en: "[Canada] Health Canada 2026: Accel. Digital Health Investment" },
    region: "North America",
    date: "2026-01-05",
    riskLevel: "Low",
    scenario: { ja: "カナダ保健省が2026年度の優先事項として、AI活用および医療システムの相互運用性強化に大規模予算を配分。", en: "Health Canada allocates major 2026 budget to AI and interoperability." },
    impact: { ja: "医療ITに強みを持つ富士フイルムやキヤノンメディカルにとって、州政府レベルの大型入札獲得の好機。", en: "Prime chance for Fujifilm/Canon Medical IT to win large provincial tenders." },
    action: { ja: "各州のデジタルヘルス調達要件を精査し、現地パートナーとのコンソーシアム形成を検討することが推奨されます。", en: "It is recommended to review provincial requirements and consider consortiums." },
    url: "https://www.canada.ca/en/health-canada.html"
  },
  {
    id: "702",
    title: { ja: "【フィンランド】EHDS実装：2026年二次利用法改正", en: "[Finland] EHDS Impl: 2026 Secondary Use Law Amendment" },
    region: "Europe",
    date: "2025-12-20",
    riskLevel: "Low",
    scenario: { ja: "欧州ヘルスデータ空間（EHDS）に先行し、フィンランドが医療データ二次利用法の改正を2026年5月に施行予定。", en: "Finland amends secondary use law ahead of EHDS, effective May 2026." },
    impact: { ja: "現地で医療データ基盤に関与する富士通等は、実証実験を通じた欧州標準モデル構築のリーダーシップを発揮可能。", en: "Fujitsu etc. can lead Euro-standard model building via local pilots." },
    action: { ja: "ヘルシンキのスタートアップエコシステムと連携し、データ活用サービスのR&D拠点を強化するのが得策です。", en: "It is wise to strengthen R&D bases for data services with Helsinki startups." },
    url: "https://stm.fi/en/frontpage"
  },
  {
    id: "703",
    title: { ja: "【ドイツ】病院改革法：2026年「サービス群」割当開始", en: "[Germany] Hospital Reform: 'Service Group' Allocation 2026" },
    region: "Europe",
    date: "2026-01-06",
    riskLevel: "High",
    scenario: { ja: "ラウターバッハ改革に基づく病院の「サービス群（Leistungsgruppen）」割当プロセスが2026年に本格化。病院の集約が進む。", en: "Hospital 'Service Group' allocation under Lauterbach reform intensifies in 2026. Hospital consolidation." },
    impact: { ja: "オリンパスやHOYA（PENTAX）は、顧客である病院の統廃合により、販売チャネルの再編が必要に。", en: "Olympus/HOYA (PENTAX) need channel restructuring due to client hospital mergers." },
    action: { ja: "州ごとの病院指定状況をモニタリングし、重点顧客（センター病院）へのリソース集中をご検討ください。", en: "Monitor state designations and concentrate resources on key center hospitals." },
    url: "https://www.bundesgesundheitsministerium.de/"
  },
  {
    id: "704",
    title: { ja: "【フランス】PLFSS 2026：医療機器への価格圧力", en: "[France] PLFSS 2026: Price Pressure on Devices" },
    region: "Europe",
    date: "2025-12-16",
    riskLevel: "Medium",
    scenario: { ja: "2026年社会保障予算（PLFSS）にて、医療機器に対する「セーフガード条項」の上限が見直され、実質的な価格引き下げ圧力。", en: "PLFSS 2026 revises safeguard caps for devices, creating real price cut pressure." },
    impact: { ja: "テルモやニプロ等の現地法人は、償還価格維持のための追加エビデンス提出やリベート交渉が不可避。", en: "Subsidiaries of Terumo/Nipro face unavoidable rebate talks/evidence submission." },
    action: { ja: "フランス当局に対し、製品の経済的有用性を示すHEORデータを提示し、価格防衛を図ることを強く推奨します。", en: "We strongly recommend presenting HEOR data to French authorities to defend prices." },
    url: "https://sante.gouv.fr/"
  },
  {
    id: "705",
    title: { ja: "【イタリア】PNRR：2026年地域医療テレワーク入札", en: "[Italy] PNRR: 2026 Community House Tenders" },
    region: "Europe",
    date: "2026-01-04",
    riskLevel: "Low",
    scenario: { ja: "復興計画（PNRR）Mission 6に基づき、地域医療施設（Community Houses）向けのデジタル機器入札が2026年初頭に集中。", en: "Digital equipment tenders for Community Houses (PNRR Mission 6) peak in early 2026." },
    impact: { ja: "イタリア市場で展開する日立（現：富士フイルムヘルスケア）やキヤノンメディカルに特需の可能性。", en: "Potential special demand for Hitachi (Fujifilm HC) and Canon Medical in Italy." },
    action: { ja: "Consip（公共調達公社）の入札情報を早期に捕捉し、現地代理店を通じた応札準備を進めるのが賢明です。", en: "It is wise to catch Consip tender info early and prepare bids via agents." },
    url: "https://www.consip.it/"
  },
  {
    id: "706",
    title: { ja: "【英国】MHRA：2026年新承認プロセスの適用開始", en: "[UK] MHRA: New 2026 Approval Process Starts" },
    region: "Europe",
    date: "2025-12-15",
    riskLevel: "Medium",
    scenario: { ja: "ブレグジット後の新規制枠組みにおいて、2026年より一部の高リスク機器に対する新承認要件が適用開始。", en: "New post-Brexit approval requirements for some high-risk devices start in 2026." },
    impact: { ja: "シスメックス等のIVDメーカーやインプラント企業は、UKCAマーキング維持のために追加の技術文書提出が必要。", en: "Sysmex (IVD) and implant firms need extra tech docs to keep UKCA marking." },
    action: { ja: "英国内の承認機関（Approved Body）の審査枠を早期に確保し、新要件へのギャップ分析を行うことを推奨します。", en: "We recommend securing Approved Body slots early and conducting gap analysis." },
    url: "https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency"
  },
  {
    id: "707",
    title: { ja: "【スペイン】2026年度予算：州間格差の拡大", en: "[Spain] 2026 Budget: Widening Regional Gaps" },
    region: "Europe",
    date: "2026-01-07",
    riskLevel: "Medium",
    scenario: { ja: "アンダルシア州が医療予算を大幅増額する一方、マドリード州は伸び悩み。地域ごとの調達力に差。", en: "Andalusia boosts health budget; Madrid lags. Regional procurement power diverges." },
    impact: { ja: "島津製作所やオムロンの現地販売網において、予算潤沢な南部地域への営業リソースシフトが有効。", en: "Shift sales resources to budget-rich southern regions for Shimadzu/Omron." },
    action: { ja: "州ごとの2026年予算配分を分析し、地域別セールスターゲットの再設定をご検討ください。", en: "Analyze 2026 budget allocation by region and reset sales targets." },
    url: "https://www.fenin.es/"
  },
  {
    id: "708",
    title: { ja: "【韓国】デジタル医療製品法：2026年完全施行", en: "[Korea] Digital Medical Product Act: Full 2026 Enforcement" },
    region: "East Asia",
    date: "2026-01-05",
    riskLevel: "Low",
    scenario: { ja: "デジタル医療製品法（DMPA）の主要規定が2026年1月に完全施行。SaMD（プログラム医療機器）の審査が迅速化。", en: "DMPA fully enforced Jan 2026. SaMD review accelerated." },
    impact: { ja: "オリンパスのAI内視鏡診断支援システムなど、デジタル付加価値製品の韓国市場投入が容易に。", en: "Easier Korea launch for digital value-add products like Olympus AI endoscopy." },
    action: { ja: "現地法人の薬事チームと連携し、新法に基づく早期承認制度の適用申請を行うことをお勧めします。", en: "We recommend applying for early approval schemes under the new law with local RA." },
    url: "https://www.mfds.go.kr/eng/index.do"
  },
  {
    id: "709",
    title: { ja: "【豪州】TGA：2026年UDI義務化の適用", en: "[Australia] TGA: 2026 UDI Mandate" },
    region: "Southeast Asia",
    date: "2026-01-03",
    riskLevel: "Medium",
    scenario: { ja: "2026年7月より、埋込み型医療機器に対するUDI（機器固有識別子）表示が完全義務化。", en: "UDI labeling fully mandatory for implantable devices from July 2026." },
    impact: { ja: "豪州向けに整形外科インプラント等を輸出する京セラ等は、ラベル表示およびデータベース登録の完了が急務。", en: "Urgent label/DB updates needed for Kyocera exporting implants to Australia." },
    action: { ja: "7月の期限に向け、豪州向け製品ラベルの版下修正とAusUDIDへの登録状況を最終確認することが望まれます。", en: "Please confirm final label artwork and AusUDID registration before July deadline." },
    url: "https://www.tga.gov.au/"
  },
  {
    id: "710",
    title: { ja: "【トルコ】MDR完全準拠とインフレ下の価格改定", en: "[Turkey] MDR Compliance & Inflation Pricing" },
    region: "Middle East",
    date: "2025-12-10",
    riskLevel: "High",
    scenario: { ja: "トルコTITCKはEU MDRへの完全準拠を要求。一方で、インフレ率50%超に伴う公定価格（SUT）の改定遅延が、輸入・販売継続の重大なリスク要因となっている。", en: "TITCK demands full MDR compliance. >50% inflation + delayed official price (SUT) updates risk sales continuity." },
    impact: { ja: "日系メーカー（テルモ、オムロン等）の利益圧迫およびMDR未対応製品の市場排除リスク。", en: "Profit squeeze and market exclusion risk for Terumo/Omron." },
    action: { ja: "現地代理店との価格交渉を頻回に行い、MDR適合宣言書の早期提出および製品ポートフォリオの絞り込みをご検討ください。", en: "Discuss price frequently with agents; submit MDR docs early; consider portfolio pruning." },
    url: "https://www.titck.gov.tr/"
  },
  // --- Designated Emerging Markets (Batch 8) ---
  {
    id: "801",
    title: { ja: "【エジプト】EDA 2026年：医療機器輸入規制と現地化優遇", en: "[Egypt] EDA 2026: Device Import Rules & Localization Incentives" },
    region: "Africa",
    date: "2025-11-15",
    riskLevel: "High",
    scenario: { ja: "統一調達庁（UPA）が国内製造品の優先購入を強化。輸入品に対する登録要件が厳格化。", en: "UPA prioritizes domestic products. Stricter registration for imports." },
    impact: { ja: "エジプト市場に輸出するシスメックスやフクダ電子は、現地生産または技術移転の圧力を受ける。", en: "Sysmex/Fukuda Denshi face pressure for local production/tech transfer." },
    action: { ja: "EDA（エジプト医薬品庁）の最新ガイダンスを確認し、現地パートナーとのジョイントベンチャー可能性を探るのが得策です。", en: "Check latest EDA guidance and explore joint ventures with local partners." },
    url: "https://www.edaegypt.gov.eg/"
  },
  {
    id: "802",
    title: { ja: "【モロッコ】AMO 2026：国民皆保険の一般化完了", en: "[Morocco] AMO 2026: Universal Health Coverage Complete" },
    region: "Africa",
    date: "2026-01-02",
    riskLevel: "Low",
    scenario: { ja: "強制医療保険（AMO）の適用範囲が全国民に拡大。公立病院の近代化予算が増額。", en: "Compulsory Health Insurance (AMO) covers all citizens. Public hospital modernization budget increased." },
    impact: { ja: "カサブランカ、ラバト以外の地方都市における画像診断装置（キヤノン、富士フイルム）の需要増。", en: "Increased demand for imaging (Canon/Fujifilm) in regional cities beyond Casablanca/Rabat." },
    action: { ja: "地方自治体の病院整備計画を入手し、販売代理店網を地方都市へ拡張することを推奨します。", en: "Get local hospital plans and expand distributor network to regional cities." },
    url: "https://www.cnss.ma/"
  },
  {
    id: "803",
    title: { ja: "【ナイジェリア】NAFDAC 2026：通貨危機と輸入コスト", en: "[Nigeria] NAFDAC 2026: Currency Crisis & Import Costs" },
    region: "Africa",
    date: "2025-12-10",
    riskLevel: "High",
    scenario: { ja: "ナイラ安の進行により、医薬品・機器の輸入コストが急騰。NAFDACが価格統制を検討。", en: "Naira depreciation spikes import costs. NAFDAC considers price controls." },
    impact: { ja: "ナイジェリアでの販売価格維持が困難に。代金回収リスクが増大。", en: "Maintaining prices becomes difficult. Increased payment collection risk." },
    action: { ja: "信用状（L/C）取引の徹底と、前払い条件の交渉を代理店と行うことが不可欠です。", en: "Strict L/C transactions and negotiation of advance payments with agents are essential." },
    url: "https://www.nafdac.gov.ng/"
  },
  {
    id: "804",
    title: { ja: "【ケニア】UHC 2026：デジタルヘルス法案の施行", en: "[Kenya] UHC 2026: Digital Health Bill Enforcement" },
    region: "Africa",
    date: "2026-01-05",
    riskLevel: "Medium",
    scenario: { ja: "ユニバーサル・ヘルス・カバレッジ（UHC）推進のため、デジタルヘルス法が施行され、遠隔医療の標準化が進む。", en: "Digital Health Act enforced to promote UHC; telemedicine standardization advances." },
    impact: { ja: "ケニアで事業展開するNEC（生体認証）や医療IT企業に、国家ID連携システムの商機。", en: "Business opportunity for NEC (biometrics) and IT firms in national ID integration." },
    action: { ja: "ケニア保健省のDXプロジェクトチームに対し、技術提案（PoC）を持ちかけることをお勧めします。", en: "We recommend proposing PoCs to the Kenya Ministry of Health's DX team." },
    url: "https://www.health.go.ke/"
  },
  {
    id: "805",
    title: { ja: "【南アフリカ】SAHPRA：NHI法と民間医療の行方", en: "[South Africa] SAHPRA: NHI Bill & Private Sector Future" },
    region: "Africa",
    date: "2025-12-20",
    riskLevel: "High",
    scenario: { ja: "国民健康保険（NHI）法の施行に向け、民間医療保険の役割が制限される可能性。富裕層向け市場が不透明化。", en: "NHI Bill implementation may limit private insurance roles, clouding the premium market outlook." },
    impact: { ja: "南ア市場で高収益を上げていた高度医療機器メーカー（オリンパス等）のビジネスモデルに転換圧力。", en: "Pressure on business models of high-end makers (Olympus) profiting in SA private sector." },
    action: { ja: "公的セクター（NHI）への参入障壁を下げるため、ミドルレンジ製品のラインナップ拡充をご検討ください。", en: "Consider expanding mid-range lineups to lower barriers for public sector (NHI) entry." },
    url: "https://www.sahpra.org.za/"
  },
  {
    id: "806",
    title: { ja: "【サウジ】Seha現地化：医療機器保守のサウジ人化義務", en: "[Saudi] Seha Localization: Saudization of Maintenance" },
    region: "Middle East",
    date: "2026-01-06",
    riskLevel: "Medium",
    scenario: { ja: "サウジ化（Saudization）政策が医療機器メンテナンス職にも厳格適用。外国人エンジニアのビザ発給制限。", en: "Saudization strictly applied to device maintenance. Visa curbs for foreign engineers." },
    impact: { ja: "現地代理店のサービス体制弱体化リスク。日本人エンジニアの派遣が困難に。", en: "Risk of weakened agent service capabilities. Dispatching Japanese engineers becomes hard." },
    action: { ja: "現地の技術学校と提携し、サウジ人エンジニアの育成プログラムを早期に立ち上げることを推奨します。", en: "We recommend partnering with local tech schools to start Saudi engineer training programs." },
    url: "https://www.hrsd.gov.sa/"
  },
  {
    id: "807",
    title: { ja: "【UAE】AI規制：ドバイ保健局のAI診断ガイドライン", en: "[UAE] AI Regulation: DHA AI Diagnostic Guidelines" },
    region: "Middle East",
    date: "2025-11-25",
    riskLevel: "Low",
    scenario: { ja: "ドバイが医療AIの倫理および責任に関する世界初の包括的ガイドラインを策定。", en: "Dubai formulates world's first comprehensive guidelines on medical AI ethics/liability." },
    impact: { ja: "AI搭載機器を展開する富士フイルムやキヤノンにとって、中東発のグローバル標準となる可能性。", en: "Potential global standard from Middle East for AI device makers (Fujifilm/Canon)." },
    action: { ja: "DHAのガイドラインへの適合をアピールポイントとし、中東全域へのマーケティングに活用してください。", en: "Use DHA guideline compliance as a selling point for marketing across the Middle East." },
    url: "https://www.dha.gov.ae/"
  },
  {
    id: "808",
    title: { ja: "【パキスタン】DRAP：輸入L/C開設の遅延常態化", en: "[Pakistan] DRAP: Chronic Import L/C Delays" },
    region: "South Asia",
    date: "2025-12-05",
    riskLevel: "High",
    scenario: { ja: "外貨準備不足により、医療機器の輸入信用状（L/C）開設に数ヶ月の遅れ。", en: "FX shortage causes months-long delays in opening Import L/Cs for devices." },
    impact: { ja: "パキスタン向け輸出の滞留と、代理店の在庫枯渇。", en: "Stalled exports to Pakistan and agent stockouts." },
    action: { ja: "人道支援物資としての優先枠確保が可能か、日本大使館やJICAに相談することをお勧めします。", en: "Consult Embassy/JICA on securing priority slots as humanitarian aid." },
    url: "https://www.dra.gov.pk/"
  },
  {
    id: "809",
    title: { ja: "【インド】CDSCO：クラスC/D機器の登録期限厳守", en: "[India] CDSCO: Strict Class C/D Deadlines" },
    region: "South Asia",
    date: "2025-10-01",
    riskLevel: "High",
    scenario: { ja: "高リスク機器（クラスC/D）の強制登録期限が終了し、未登録品の輸入が税関で停止。", en: "Mandatory registration deadline for Class C/D ends; unregistered imports stopped at customs." },
    impact: { ja: "登録が完了していない日本製品は、インド市場からの撤退を余儀なくされる。", en: "Unregistered Japanese products forced to withdraw from India market." },
    action: { ja: "登録証（Form MD-15）の有効性を直ちに確認し、未完了の場合は緊急出荷停止措置をとってください。", en: "Verify Form MD-15 validity immediately; stop shipments if incomplete." },
    url: "https://cdsco.gov.in/"
  },
  {
    id: "810",
    title: { ja: "【フィリピン】FDA：デジタル化とASEAN整合", en: "[Philippines] FDA: Digitalization & ASEAN Alignment" },
    region: "Southeast Asia",
    date: "2026-01-03",
    riskLevel: "Medium",
    scenario: { ja: "フィリピンFDAがオンライン申請システムを刷新し、AMDD（ASEAN医療機器指令）への整合を加速。", en: "Philippines FDA revamps online system, accelerating AMDD alignment." },
    impact: { ja: "CSDT形式での申請が定着し、他のASEAN諸国との資料共通化が可能に。", en: "CSDT application format takes root, allowing doc sharing with other ASEAN nations." },
    action: { ja: "ASEAN共通技術文書（CSDT）のテンプレートを整備し、フィリピンを含む地域一括申請の効率化を図るべきです。", en: "Prepare ASEAN CSDT templates to streamline regional regional applications." },
    url: "https://www.fda.gov.ph/"
  },
  // --- Essential Gap-Fill Markets (Batch 9) ---
  {
    id: "901",
    title: { ja: "【ブラジル】ANVISA：デジタルヘルス課題2026-2027", en: "[Brazil] ANVISA: Digital Health Agenda 2026-2027" },
    region: "Latin America",
    date: "2026-01-07",
    riskLevel: "Low",
    scenario: { ja: "ANVISAが次期規制アジェンダにて、SaMDおよびサイバーセキュリティを最優先課題に指定。", en: "ANVISA designates SaMD and cybersecurity as top priorities in next regulatory agenda." },
    impact: { ja: "ブラジル市場でのソフトウェア医療機器の審査基準が明確化し、参入障壁が低下。", en: "Clarified SaMD review criteria lower entry barriers in Brazil." },
    action: { ja: "規制アジェンダの草案（Public Consultation）に対し、業界団体を通じて意見提出を行う好機です。", en: "Good chance to submit comments on draft agenda via industry groups." },
    url: "https://www.gov.br/anvisa/"
  },
  {
    id: "902",
    title: { ja: "【メキシコ】COFEPRIS：リライアンスパスウェイ活用", en: "[Mexico] COFEPRIS: Reliance Pathway Usage" },
    region: "Latin America",
    date: "2025-12-15",
    riskLevel: "Medium",
    scenario: { ja: "米国FDAやカナダ保健省の承認を活用した簡易審査ルート（Reliance）の適用実績が増加。", en: "Increased use of Reliance pathway leveraging FDA/Health Canada approvals." },
    impact: { ja: "北米承認を持つ日本製品のメキシコ登録期間が、従来比で大幅短縮（6ヶ月以内）。", en: "Mexico registration time for NA-approved Japanese products cut significantly (<6 mos)." },
    action: { ja: "同等性協議ルート（Equivalency Agreement）の適用可否を、現地薬事担当社と再確認してください。", en: "Re-confirm applicability of Equivalency Agreement with local RA staff." },
    url: "https://www.gob.mx/cofepris"
  },
  {
    id: "903",
    title: { ja: "【インドネシア】ハラール認証：2026年10月期限への対応", en: "[Indonesia] Halal: Oct 2026 Deadline Response" },
    region: "Southeast Asia",
    date: "2025-11-20",
    riskLevel: "High",
    scenario: { ja: "BPJPHへのハラール認証申請が殺到し、審査の長期化が懸念される。", en: "Flood of Halal applications to BPJPH raises concerns of prolonged reviews." },
    impact: { ja: "期限直前の駆け込み申請では、2026年10月の義務化開始に間に合わないリスク。", en: "Last-minute applications risk missing the Oct 2026 mandatory start." },
    action: { ja: "製品の原材料リスト（BOM）における動物由来物質の有無を証明する書類を早急に準備してください。", en: "Prepare docs proving absence of animal materials in BOM immediately." },
    url: "https://halalmui.org/"
  },
  {
    id: "904",
    title: { ja: "【ベトナム】入札規則 Circular 57：2026年改定", en: "[Vietnam] Tender Circular 57: 2026 Revision" },
    region: "Southeast Asia",
    date: "2026-01-02",
    riskLevel: "Medium",
    scenario: { ja: "公立病院の入札に関するCircularモデルが見直され、価格だけでなく品質評価の比重が増加。", en: "Public hospital tender Circular revised; increased weight on quality over price." },
    impact: { ja: "高品質な日本製品（シスメックス、日本光電）が、安価な競合品に対して有利になる可能性。", en: "High-quality Japanese products (Sysmex/Nihon Kohden) gain edge over cheap rivals." },
    action: { ja: "品質優位性を客観的に示すデータを入札書類に盛り込むよう、現地代理店を指導してください。", en: "Instruct agents to include objective quality data in tender documents." },
    url: "https://moh.gov.vn/"
  },
  {
    id: "905",
    title: { ja: "【タイ】BCG経済モデル：ウェルネスハブ投資", en: "[Thailand] BCG Model: Wellness Hub Investment" },
    region: "Southeast Asia",
    date: "2025-12-25",
    riskLevel: "Low",
    scenario: { ja: "BCG（バイオ・循環型・グリーン）経済モデルに基づき、高度医療サービスへの投資優遇が継続。", en: "Investment incentives for advanced medical services continue under BCG model." },
    impact: { ja: "再生医療やゲノム医療に関連する機器・試薬メーカーにタイ市場での商機。", en: "Opportunities for regenerative/genomic medicine device/reagent makers in Thailand." },
    action: { ja: "BOI（投資委員会）のインセンティブを活用した現地ラボ設立のF/Sを実施することをお勧めします。", en: "We recommend F/S for local lab establishment using BOI incentives." },
    url: "https://www.poi.go.th/"
  },
  {
    id: "906",
    title: { ja: "【オランダ】グリーンディール 3.0：使い捨て機器削減", en: "[Netherlands] Green Deal 3.0: Reducing Disposables" },
    region: "Europe",
    date: "2025-11-30",
    riskLevel: "Medium",
    scenario: { ja: "オランダ医療セクターが「Green Deal 3.0」に基づき、リユーザブル（再使用可能）機器の採用目標を設定。", en: "Dutch health sector sets reusable device adoption targets under Green Deal 3.0." },
    impact: { ja: "使い捨てカテーテル等を主力とするメーカーは、環境配慮型製品への転換、またはリサイクル提案が必要。", en: "Single-use catheter makers need eco-friendly shift or recycling proposals." },
    action: { ja: "製品ライフサイクル評価（LCA）データを整備し、サステナビリティ部門へのアピール材料とすることが重要です。", en: "Prepare LCA data to appeal to sustainability departments." },
    url: "https://www.government.nl/"
  },
  {
    id: "907",
    title: { ja: "【スイス】Swissdamed：2026年7月登録義務化", en: "[Switzerland] Swissdamed: Mandatory Reg July 2026" },
    region: "Europe",
    date: "2025-12-10",
    riskLevel: "High",
    scenario: { ja: "スイス版EUDAMED「swissdamed」へのアクターおよび機器登録が2026年7月より完全義務化。", en: "Actor/Device registration in 'swissdamed' (Swiss EUDAMED) mandatory from July 2026." },
    impact: { ja: "スイス代理人（CH-REP）を通じた登録作業が必須となり、未登録製品は市場から排除される。", en: "Registration via CH-REP mandatory. Unregistered products excluded from market." },
    action: { ja: "2026年7月の期限に向け、全輸出製品のswissdamed登録スケジュールを代理人と確実に共有することをお勧めします。", en: "Ensure sharing of swissdamed registration schedule with agents for July 2026 deadline." },
    url: "https://www.swissmedic.ch/"
  },
  // --- Japan Home Market (Batch 10) ---
  {
    id: "1001",
    title: { ja: "【日本】2026年度診療報酬改定：賃上げと医療DX", en: "[Japan] 2026 Fee Revision: Wage Hikes & Medical DX" },
    region: "East Asia",
    date: "2026-01-07",
    riskLevel: "High",
    scenario: { ja: "中医協は2026年度改定に向け、医療従事者の賃上げ対応（+2.5%ベースアップ評価）と「医療DX推進体制整備加算」の要件厳格化を議論。サイバーセキュリティ対策が必須要件へ。", en: "Chuikyo discusses wage hikes (+2.5%) and stricter Medical DX premiums (Cybersecurity mandatory) for 2026." },
    impact: { ja: "賃上げ原資確保のため、施設基準を満たさない医療機関の減収リスクが増大。ベンダーにはセキュリティ認証取得の圧力が強まる。", en: "Revenue risk for non-compliant clinics. Pressure on vendors for security certification." },
    action: { ja: "自社製品のセキュリティ要件適合状況（SBOM対応等）を再確認し、顧客医療機関への加算算定支援ツール提案の検討が望まれます。", en: "Re-confirm security compliance (SBOM) and propose support tools for premium calculation." },
    url: "https://www.mhlw.go.jp/stf/shingi/shingi-chuo.html"
  },
  {
    id: "1002",
    title: { ja: "【日本】医師働き方改革：施行2年目のタスクシフト需要", en: "[Japan] Work Style Reform: Year 2 Task Shift Demand" },
    region: "East Asia",
    date: "2025-12-15",
    riskLevel: "Medium",
    scenario: { ja: "働き方改革施行から約2年、時間外労働上限規制（年960時間）の厳格適用に伴い、特定行為研修修了看護師へのタスクシフトや、AI診断支援・RPAによる業務削減ニーズが急増。", en: "2 years into reform, strict overtime caps drive demand for nurse task shifting and AI/RPA." },
    impact: { ja: "診断支援AIや自動化ソリューションの導入予算が優先的に確保される傾向。一方で、効果が見えにくいIT投資は凍結。", en: "Priority budget for diagnostic AI/automation. Low-ROI IT investments frozen." },
    action: { ja: "「医師の時短」に直結するROIデータを明示し、特定行為パッケージとして看護師向けトレーニングとセットでの提案検討をお勧めします。", en: "Show ROI for 'doctor time-saving' and propose nurse training packages." },
    url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000189198.html"
  },
  {
    id: "1003",
    title: { ja: "【日本】SaMD動向：二段階承認とリプログラミング", en: "[Japan] SaMD Trends: Two-Step Approval & Reprogramming" },
    region: "East Asia",
    date: "2025-11-20",
    riskLevel: "Medium",
    scenario: { ja: "「DASH for SaMD 2」戦略に基づき、二段階承認制度の活用事例が増加。2025年後半より、市販後データによる性能向上（リプログラミング）の審査プロセスが一部簡素化。", en: "'DASH for SaMD 2' drives two-step approvals. Post-market reprogramming review simplified from late 2025." },
    impact: { ja: "開発サイクルの高速化が可能になる一方、市販後データ収集（RWD）の質が承認継続の鍵となる。", en: "Faster dev cycles, but RWD quality becomes key to maintaining approval." },
    action: { ja: "PMDAの最新相談枠を活用し、市販後学習プラン（IDATEN）の適用可能性について早期に規制当局と協議されることを推奨します。", en: "Consult PMDA early on IDATEN applicability for post-market learning plans." },
    url: "https://www.pmda.go.jp/review-services/reexamine-revaluate/samd/0001.html"
  },
  // --- Daily Simulation Batch (Jan 7, 2026) ---
  {
    id: "1101",
    title: { ja: "【米国】FDA QMSR：2月2日施行直前の最終点検", en: "[US] FDA QMSR: Final Check Before Feb 2 Enforcement" },
    region: "North America",
    date: "2026-01-07",
    riskLevel: "High",
    scenario: { ja: "2026年2月2日のQMSR（品質マネジメントシステム規則）施行まで残り1ヶ月を切る。ISO 13485:2016への完全調和が求められ、FDA査察基準（QSIT）も刷新される。", en: "Less than 1 month to Feb 2, 2026 QMSR enforcement. Full alignment with ISO 13485:2016 demanded." },
    impact: { ja: "米国向け輸出を行う全ての医療機器メーカーにおいて、QMS文書（特にリスクマネジメント規定）の不整合が査察指摘の対象となるリスク。", en: "Risk of inspection findings for exporters if QMS docs (esp. Risk Mgmt) are misaligned." },
    action: { ja: "品質保証部門と連携し、ISO 13485対応ギャップ分析の最終確認と、模擬査察（Mock Inspection）による現場対応力の再点検が強く推奨されます。", en: "Strongly recommend final gap analysis with QA and Mock Inspections." },
    url: "https://www.fda.gov/medical-devices/quality-system-qs-regulationmedical-device-current-good-manufacturing-practices-cgmp/quality-management-system-regulation-final-rule-questions-and-answers"
  },
  {
    id: "1102",
    title: { ja: "【欧州】AI法：高リスクAI医療機器の2026年8月要件", en: "[Europe] AI Act: High-Risk Device Requirements Aug 2026" },
    region: "Europe",
    date: "2026-01-07",
    riskLevel: "High",
    scenario: { ja: "EU AI法に基づく高リスクAIシステムの適合期限（2026年8月2日）が迫る。医療機器規則（MDR）との重複要件に関するガイドラインが発出。", en: "Aug 2, 2026 deadline for High-Risk AI systems approaches. Guidelines on MDR overlap issued." },
    impact: { ja: "AI搭載画像診断支援システムやトリアージSWを展開する企業は、技術文書（Technical File）へのAI法要件（人間による監視、データガバナンス）の追記が必須。", en: "Technical Files for AI CAD/triage SW must include AI Act reqs (Transparency, Oversight)." },
    action: { ja: "開発部門に対し、自社製品AIアルゴリズムの「透明性」および「人間による監視（Human Oversight）」要件への適合状況を、技術文書レベルで検証するよう指示することが望まれます。", en: "Instruct R&D to verify algorithm transparency and human oversight compliance in Tech Files." },
    url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
  },
  {
    id: "1103",
    title: { ja: "【日本】医療DX：2026年度予算執行とサイバーセキュリティ", en: "[Japan] Medical DX: 2026 Budget & Cybersecurity" },
    region: "East Asia",
    date: "2026-01-07",
    riskLevel: "Medium",
    scenario: { ja: "厚労省は2026年度の医療DX推進予算の執行を開始。電子カルテ情報共有サービスの普及に向け、サイバーセキュリティ対策助成が重点化される。", en: "MHLW starts 2026 DX budget execution. Focus on Cybersec subsidies for EHR sharing service." },
    impact: { ja: "医療機関向けシステムベンダーおよび接続機器メーカーには、SBOM（ソフトウェア部品表）の提供と脆弱性対応プロセスが調達要件として課される。", en: "SBOM and vulnerability handling become procurement requirements for vendors/connected devices." },
    action: { ja: "製品セキュリティ対応チーム（PSIRT）を主導し、厚労省の最新ガイドラインに準拠したSBOM提供体制が整っているか、営業部門と共有確認を行うことをお勧めします。", en: "Confirm with PSIRT if SBOM provision meets latest MHLW guidelines to support sales." },
    url: "https://www.mhlw.go.jp/stf/2026budget_dx.html"
  },
  {
    id: "1104",
    title: { ja: "【インドネシア】ハラール認証：2026年10月義務化へのカウントダウン", en: "[Indonesia] Halal: Countdown to Oct 2026 Mandate" },
    region: "Southeast Asia",
    date: "2026-01-07",
    riskLevel: "High",
    scenario: { ja: "医療機器・医薬品のハラール認証義務化期限（2026年10月）まで残り9ヶ月。BPJPH（ハラール製品保証実施機関）への申請が急増中。", en: "9 months to Oct 2026 Halal mandate for devices/pharma. Flood of apps to BPJPH." },
    impact: { ja: "動物由来原料（ゼラチン等）を使用する製品において、代替原料への切り替え、またはハラール非該当証明の取得が遅れると、販売停止リスクが生じる。", en: "Risk of sales stop for animal-derived products if replacement or non-Halal proof is delayed." },
    action: { ja: "サプライチェーン部門において、インドネシア向け製品のBOM（部品表）詳細スクリーニングを完了させ、現地代理店を通じてBPJPHへの事前相談枠を確保することが賢明です。", en: "Supply Chain should screen BOMs and secure BPJPH consultation slots via agents." },
    url: "https://bpjph.halal.go.id/"
  },
  {
    id: "1105",
    title: { ja: "【インド】CDSCO：クラスC/D機器の未登録品摘発強化", en: "[India] CDSCO: Crackdown on Unregistered Class C/D" },
    region: "South Asia",
    date: "2026-01-07",
    riskLevel: "High",
    scenario: { ja: "2025年末の登録期限経過を受け、CDSCO（中央医薬品標準管理機構）は主要港湾でのクラスC/D機器（高リスク）の通関検査を厳格化。", en: "CDSCO tightens port checks for Class C/D following end-2025 deadline." },
    impact: { ja: "登録証（Form MD-15）未取得のインプラント製品等が税関で滞留し、現地の病院在庫が枯渇する恐れがある。", en: "Customs stoppages for unregistered implants risk depleting local hospital stock." },
    action: { ja: "物流部門に対し、インド向け出荷製品全ロットについて登録証コピーの同梱を徹底させるとともに、現地代理店の在庫状況を緊急確認することが推奨されます。", en: "Logistics must include Form MD-15 copies with all lots; urgently check agent inventory." },
    url: "https://cdsco.gov.in/"
  },
  {
    id: "1106",
    title: { ja: "【サウジ】NUPCO：2026年調達におけ現地化要件", en: "[Saudi] NUPCO: 2026 Localization Requirements" },
    region: "Middle East",
    date: "2026-01-07",
    riskLevel: "Medium",
    scenario: { ja: "統一調達会社NUPCOは、2026年度の医療機器入札において「現地製造比率」の加点評価を大幅に引き上げると発表。", en: "NUPCO hikes 'Local Content' scores for 2026 device tenders." },
    impact: { ja: "サウジ国内に製造・組立拠点を持たない海外メーカーは、価格競争力があっても入札で不利になり、シェアを失うリスク。", en: "Foreign makers without local manufacturing risk losing share despite competitive pricing." },
    action: { ja: "経営企画部門と連携し、現地パートナー企業への委託製造（CDMO活用）または最終組立工程の現地化F/S（フィージビリティスタディ）を加速させる検討が必要です。", en: "Accelerate F/S for local CDMO or assembly with Corporate Planning." },
    url: "https://www.nupco.com/"
  },
  {
    id: "1107",
    title: { ja: "【ケニア】デジタルヘルス法：2026年病院連携始動", en: "[Kenya] Digital Health Act: 2026 Hospital Linkage" },
    region: "Africa",
    date: "2026-01-07",
    riskLevel: "Low",
    scenario: { ja: "ケニア政府はUHC（国民皆保険）基盤となる「デジタルヘルススーパーハイウェイ」プロジェクトを始動。公立病院のデータ標準化を義務付け。", en: "Kenya starts 'Digital Health Superhighway'. Public hospitals forced to standardize data." },
    impact: { ja: "ケニア市場に参入する検体検査装置や生体モニタメーカーに対し、HL7 FHIR等の国際標準規格への準拠と、国家システムへの接続性が求められる。", en: "Lab/Monitor makers must comply with HL7 FHIR for national system connectivity." },
    action: { ja: "R&D部門に対し、自社製品のインターフェース仕様がケニア保健省の指定するデータ標準に適合可能か、技術的なギャップ分析を行うよう指示することが推奨されます。", en: "Instruct R&D to perform gap analysis on interface compliance with Ministry standards." },
    url: "https://health.go.ke/"
  },
  {
    id: "1108",
    title: { ja: "【メキシコ】大統領令：2026年医薬品国産化インセンティブ", en: "[Mexico] Presidential Decree: 2026 Domestic Incentives" },
    region: "Latin America",
    date: "2026-01-07",
    riskLevel: "Medium",
    scenario: { ja: "メキシコ政府は必須医薬品の国内自給率向上を目指し、国内製造企業に対する税制優遇と公共入札優先枠を定めた大統領令を施行。", en: "Decree grants tax breaks/tender priority to domestic pharma to boost self-sufficiency." },
    impact: { ja: "メキシコへ完成品輸出を行っている製薬企業は、公的市場（IMSS等）での入札機会が減少するリスク。", en: "Exporting pharma firms face reduced opportunities in public tenders (IMSS)." },
    action: { ja: "現地法人の薬事・開発チームと協議し、現地CMO（受託製造機関）への技術移転による「メキシコ製」ラベル取得の費用対効果を試算することが得策です。", en: "Calculate ROI of local 'Made in Mexico' labeling via CMO with local RA team." },
    url: "https://www.gob.mx/cofepris"
  },
  {
    id: "1109",
    title: { ja: "【米国】CMS薬価交渉：2026年適用開始の波紋", en: "[US] CMS Drug Price Negotiation: 2026 Start" },
    region: "Global",
    date: "2026-01-07",
    riskLevel: "High",
    scenario: { ja: "インフレ抑制法（IRA）に基づく最初の10品目の交渉価格が2026年1月1日より適用開始。民間保険者（PBM）もこれに追随する動き。", en: "First 10 IRA Negotiated Prices effective Jan 1, 2026. PBMs following suit." },
    impact: { ja: "対象薬と競合する治療領域（糖尿病、循環器等）を持つ製薬企業は、フォーミュラリー（採用医薬品リスト）からの除外や、リベート増額圧力に直面する。", en: "Pharma in competing categories (Diabetes/CV) face formulary exclusion/rebate pressure." },
    action: { ja: "米国マーケットアクセスチームと連携し、競合品値下げに伴う自社製品の価格戦略見直しと、リアルワールドエビデンス（RWE）を用いた費用対効果の再訴求準備が急務となります。", en: "Urgently review pricing strategy and RWE value proposition with Market Access team." },
    url: "https://www.cms.gov/inflation-reduction-act-and-medicare"
  }
];

