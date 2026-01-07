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
];
