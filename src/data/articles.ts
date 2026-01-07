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
    title: "FDA QMSR Final Rule: 2026 Compliance Deadline",
    region: "North America",
    date: "2026-01-05",
    riskLevel: "High",
    scenario: "FDA Quality Management System Regulation (QMSR) fully aligning with ISO 13485 requires compliance by Feb 2026.",
    impact: "Japanese manufacturers exporting to US must update QMS documentation immediately.",
    action: "Conduct final internal audit against ISO 13485:2016; update FDA submissions.",
    url: "https://www.fda.gov/medical-devices/quality-system-qs-regulation/medical-devices-quality-system-regulation-amendments"
  },
  {
    id: "102",
    title: "CES 2026: AI & Digital Health Trends",
    region: "North America",
    date: "2026-01-07",
    riskLevel: "Low",
    scenario: "CES 2026 showcases next-gen AI diagnostics and wearable tech in Las Vegas.",
    impact: "New competitive standards for consumer-facing medical devices; opportunity for partnerships.",
    action: "Review CES 2026 digital health winners for R&D benchmarking.",
    url: "https://www.ces.tech/topics/digital-health.aspx"
  },
  {
    id: "103",
    title: "JPM Healthcare Conference 2026 Outlook",
    region: "North America",
    date: "2026-01-06",
    riskLevel: "Medium",
    scenario: "J.P. Morgan Conference highlights M&A rebound and GLP-1 impact on medtech.",
    impact: "Potential consolidation in cardiac and orthopedic sectors impacting supply chains.",
    action: "Monitor M&A announcements for key competitors and suppliers.",
    url: "https://www.jpmorgan.com/solutions/cib/insights/health-care-conference"
  },
  {
    id: "104",
    title: "CMS 2026 Physician Fee Schedule Final Rule",
    region: "North America",
    date: "2025-11-15",
    riskLevel: "Medium",
    scenario: "CMS finalized 2026 payment rates with updates for telehealth and AI-enabled services.",
    impact: "Reimbursement changes for remote monitoring devices affecting US revenue projections.",
    action: "Update 2026 revenue forecasts based on new CPT codes.",
    url: "https://www.cms.gov/medicare/medicare-fee-for-service-payment/physicianfeesched"
  },
  {
    id: "105",
    title: "RSNA 2025: Radiology AI Integration",
    region: "North America",
    date: "2025-12-05",
    riskLevel: "Low",
    scenario: "RSNA 2025 emphasized immense growth in integrated AI workflow tools for imaging.",
    impact: "Japanese imaging firms must accelerate AI software integration to remain competitive.",
    action: "Investigate partnerships with AI software vendors showcased at RSNA.",
    url: "https://www.rsna.org/annual-meeting"
  },
  {
    id: "106",
    title: "AHA 2025: Cardiovascular Tech Breakthroughs",
    region: "North America",
    date: "2025-11-18",
    riskLevel: "Low",
    scenario: "American Heart Association Scientific Sessions 2025 highlighted new ablation tech.",
    impact: "Shift in standard of care for AFib treatment could impact catheter demand.",
    action: "Assess R&D pipeline against new ablation efficacy data.",
    url: "https://professional.heart.org/en/meetings/scientific-sessions"
  },
  {
    id: "107",
    title: "US Advanced Manufacturing Goals 2026",
    region: "North America",
    date: "2025-12-20",
    riskLevel: "Medium",
    scenario: "White House pushes for domestic biotech manufacturing in 2026.",
    impact: "Potential 'Buy American' preference expansion in public hospital procurement.",
    action: "Evaluate US contract manufacturing options.",
    url: "https://www.whitehouse.gov/ostp/"
  },
  {
    id: "108",
    title: "HIPAA Updates Late 2025",
    region: "North America",
    date: "2025-12-10",
    riskLevel: "High",
    scenario: "HHS issues new guidance on reproductive health data privacy effective late 2025.",
    impact: "Strict data handling requirements for apps/devices tracking user health metrics.",
    action: "Review data privacy policies for US market digital health products.",
    url: "https://www.hhs.gov/hipaa/index.html"
  },
  {
    id: "109",
    title: "Canada Health Tech 2026 Investment",
    region: "North America",
    date: "2026-01-04",
    riskLevel: "Low",
    scenario: "Canada announces Digital Health Investment Strategy 2026.",
    impact: "Funding opportunities for foreign tech firms with Canadian subsidiaries.",
    action: "Check eligibility for Canadian digital health grants.",
    url: "https://www.canada.ca/en/health-canada.html"
  },
  {
    id: "110",
    title: "US-Mexico Supply Chain Trade 2026",
    region: "North America",
    date: "2026-01-03",
    riskLevel: "Medium",
    scenario: "Increased cross-border medical device trade flow enforcement expected in 2026.",
    impact: "Stricter customs checks may delay shipments from Mexican maquiladoras.",
    action: "Audit logistics partners for CTPAT compliance.",
    url: "https://www.cbp.gov/trade"
  },

  // --- Europe (Batch 2) ---
  {
    id: "201",
    title: "EC MDR Revision Proposal",
    region: "Europe",
    date: "2025-12-16",
    riskLevel: "High",
    scenario: "European Commission publishes proposal to address Notified Body bottlenecks.",
    impact: "Potential extension of transition periods or simplified procedures for legacy devices.",
    action: "Monitor legislative progress in EU Parliament; do not pause transition efforts.",
    url: "https://health.ec.europa.eu/medical-devices-sector_en"
  },
  {
    id: "202",
    title: "14th Notified Body Survey Results",
    region: "Europe",
    date: "2025-11-30",
    riskLevel: "High",
    scenario: "Survey confirms persistent capacity issues despite designation of new NBs.",
    impact: "Certification delays of 12-18 months likely to continue through 2026.",
    action: "Secure NB slots for 2027 renewals immediately.",
    url: "https://health.ec.europa.eu/medical-devices-dialogue/medical-devices-coordination-group_en"
  },
  {
    id: "203",
    title: "EU AI Act: MedTech Guidelines Forecast",
    region: "Europe",
    date: "2026-01-02",
    riskLevel: "Medium",
    scenario: "Post-market monitoring guidelines for AI medical devices expected Feb 2026.",
    impact: "New compliance layer for AI-enabled devices sold in EU.",
    action: "Prepare technical files for AI Act gap analysis.",
    url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
  },
  {
    id: "204",
    title: "EHDS Implementation Phase",
    region: "Europe",
    date: "2025-12-28",
    riskLevel: "Medium",
    scenario: "European Health Data Space (EHDS) enters active implementation phase.",
    impact: "Mandatory interoperability standards for EHRs and connected devices.",
    action: "Review device software for HL7/FHIR compatibility.",
    url: "https://health.ec.europa.eu/ehealth-digital-health-and-care/european-health-data-space_en"
  },
  {
    id: "205",
    title: "MHRA 2026 Regulatory Roadmap",
    region: "Europe",
    date: "2025-11-10",
    riskLevel: "Medium",
    scenario: "UK MHRA outlines statutory instruments for 2026 pre-market rules.",
    impact: "Divergence from EU MDR requires specific UK compliance strategy.",
    action: "Update UK Responsible Person (UKRP) strategy.",
    url: "https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency"
  },
  {
    id: "206",
    title: "MedTech Forum 2026 Announcement",
    region: "Europe",
    date: "2026-01-04",
    riskLevel: "Low",
    scenario: "MedTech Forum confirmed for Stockholm, May 2026.",
    impact: "Key venue for policy discussions on MDR and sustainability.",
    action: "Register regulatory affairs team for attendance.",
    url: "https://www.medtecheurope.org/events/medtech-forum/"
  },
  {
    id: "207",
    title: "Swiss MedTech 2026 Outlook",
    region: "Europe",
    date: "2026-01-03",
    riskLevel: "Medium",
    scenario: "Switzerland maintains Mutual Recognition Agreement (MRA) gaps with EU.",
    impact: "Continued need for Swiss Rep for foreign manufacturers.",
    action: "Verify Swiss Representative mandate validity.",
    url: "https://www.swissmedtech.ch/"
  },
  {
    id: "208",
    title: "German DiGA 2026 Fast-Track",
    region: "Europe",
    date: "2025-12-15",
    riskLevel: "Low",
    scenario: "BfArM updates Fast-Track process for Digital Health Applications (DiGA).",
    impact: "Easier reimbursement pathway for digital therapeutics in Germany.",
    action: "Assess digital portfolio for DiGA eligibility.",
    url: "https://www.bfarm.de/EN/Medical-devices/DiGA/_node.html"
  },
  {
    id: "209",
    title: "French Social Security Financing 2026",
    region: "Europe",
    date: "2025-12-20",
    riskLevel: "Medium",
    scenario: "PLFSS 2026 includes cost-containment measures for medical devices.",
    impact: "Pricing pressure on reimbursed lists (LPPP) in France.",
    action: "Prepare value dossier for French pricing negotiations.",
    url: "https://www.securite-sociale.fr/"
  },
  {
    id: "210",
    title: "UK Life Sciences 2026 Investment",
    region: "Europe",
    date: "2026-01-06",
    riskLevel: "Low",
    scenario: "UK government pledges new funds for life sciences manufacturing.",
    impact: "Incentives for locating production in UK.",
    action: "Review UK manufacturing investment grants.",
    url: "https://www.gov.uk/government/organisations/office-for-life-sciences"
  },

  // --- Asia (East) (Batch 3) ---
  {
    id: "301",
    title: "China NMPA New GMP No. 107",
    region: "Asia",
    date: "2025-11-01",
    riskLevel: "High",
    scenario: "New GMP for Medical Devices (No. 107 of 2025) takes full effect Nov 2026.",
    impact: "Strict lifecycle risk management requirements for manufacturers selling in China.",
    action: "Gap analysis of China QMS against new GMP No. 107.",
    url: "https://english.nmpa.gov.cn/"
  },
  {
    id: "302",
    title: "China VBP 6th Round Plan 2025",
    region: "Asia",
    date: "2025-12-10",
    riskLevel: "High",
    scenario: "NHSA announces 6th Volume-Based Procurement round targeting high-value consumables.",
    impact: "Significant price erosion risk for targeted device categories.",
    action: "Simulate pricing scenarios for VBP inclusion.",
    url: "http://english.nhsa.gov.cn/"
  },
  {
    id: "303",
    title: "China High-End Device Policy 2025",
    region: "Asia",
    date: "2025-10-15",
    riskLevel: "Low",
    scenario: "NMPA Announcement No. 63 (July 2025) fully operational, fast-tracking innovation.",
    impact: "Faster approval pathway for innovative foreign devices.",
    action: "Submit innovative device applications via Green Channel.",
    url: "https://english.nmpa.gov.cn/"
  },
  {
    id: "304",
    title: "Japan Chuikyo FY2026 Reform",
    region: "Asia",
    date: "2025-12-26",
    riskLevel: "Medium",
    scenario: "Chuikyo approves 'Medical Materials Reform Outline' for FY2026.",
    impact: "Potential upward pricing for loss-making devices; innovation premium adjustments.",
    action: "Prepare reimbursement arguments for MHLW hearings.",
    url: "https://www.mhlw.go.jp/stf/shingi/chuikyo.html"
  },
  {
    id: "305",
    title: "Japan PMDA US Office Opening",
    region: "Asia",
    date: "2025-09-10",
    riskLevel: "Low",
    scenario: "PMDA opened Washington DC office to facilitate US-Japan regulatory harmony.",
    impact: "Smoother consultation process for US-based R&D teams of Japanese firms.",
    action: "Utilize PMDA US office for pre-submission consults.",
    url: "https://www.pmda.go.jp/english/"
  },
  {
    id: "306",
    title: "Japan Digital Health 2026 Strategy",
    region: "Asia",
    date: "2026-01-04",
    riskLevel: "Low",
    scenario: "MHLW pushes 'Medical DX 2030', promoting electronic prescriptions and digital charts.",
    impact: "Demand for interoperable systems and digital health tools.",
    action: "Ensure product compatibility with Japanese HL7 standards.",
    url: "https://www.mhlw.go.jp/"
  },
  {
    id: "307",
    title: "Korea MFDS Digital Products Act",
    region: "Asia",
    date: "2026-01-05",
    riskLevel: "High",
    scenario: "Enforcement decrees for Digital Medical Products Act effective Jan 24, 2026.",
    impact: "New classification and cybersecurity rules for digital health software in Korea.",
    action: "Update technical files for Korea MFDS compliance.",
    url: "https://www.mfds.go.kr/eng/index.do"
  },
  {
    id: "308",
    title: "Korea AI Device Guidance Update",
    region: "Asia",
    date: "2025-11-20",
    riskLevel: "Medium",
    scenario: "MFDS issues updated guidance on transparency and cybersecurity for AI devices.",
    impact: "Stricter review of AI algorithms and training data.",
    action: "Audit AI training datasets for Korean market submission.",
    url: "https://www.mfds.go.kr/eng/index.do"
  },
  {
    id: "309",
    title: "Taiwan TFDA 2026 Regulations",
    region: "Asia",
    date: "2025-12-01",
    riskLevel: "Medium",
    scenario: "Taiwan TFDA aligns QMS requirements closer to ISO 13485:2016.",
    impact: "Simplified QSD application for manufacturers with valid ISO certs.",
    action: "Renew QSD (Quality System Documentation) using simplified route.",
    url: "https://www.fda.gov.tw/ENG/index.aspx"
  },
  {
    id: "310",
    title: "Hong Kong Medical Fair 2026",
    region: "Asia",
    date: "2026-01-02",
    riskLevel: "Low",
    scenario: "HKTDC announces dates for Hong Kong International Medical and Healthcare Fair 2026.",
    impact: "Gateway event for Greater Bay Area market access.",
    action: "Plan exhibition strategy for GBA expansion.",
    url: "https://event.hktdc.com/fair/hkmedicalfair-en/"
  },

  // --- Global Supply Chain (Batch 4) ---
  {
    id: "401",
    title: "Semiconductor Outlook 2026",
    region: "Global",
    date: "2026-01-06",
    riskLevel: "High",
    scenario: "AI demand creates volatility for legacy medical device chips in 2026.",
    impact: "Potential shortages of microcontrollers for electromechanical devices.",
    action: "Secure long-term supply agreements for critical chips.",
    url: "https://sourceability.com/"
  },
  {
    id: "402",
    title: "EtO Sterilization EPA Deadline Extended",
    region: "Global",
    date: "2025-10-15",
    riskLevel: "Medium",
    scenario: "US EPA grants 2-year extension for EtO compliance to prevent device shortages.",
    impact: "Temporary relief for sterilization capacity constraints.",
    action: "Continue qualifying alternative sterilization methods (eBeam/X-ray).",
    url: "https://www.raps.org/"
  },
  {
    id: "403",
    title: "Global Logistics Q1 2026 Outlook",
    region: "Global",
    date: "2026-01-03",
    riskLevel: "Medium",
    scenario: "Ocean freight cooling; Q1 2026 air cargo volumes up 2.6% driven by cold chain.",
    impact: "Stable ocean rates but tight air capacity for pharma/bio shipments.",
    action: "Book air freight slots 3 weeks in advance.",
    url: "https://www.berlinpackaging.com/"
  },
  {
    id: "404",
    title: "Cold Chain Market Growth 2026",
    region: "Global",
    date: "2025-12-28",
    riskLevel: "Low",
    scenario: "Healthcare cold chain demand projected to grow 10%+ in 2026.",
    impact: "Increased cost for temperature-controlled logistics.",
    action: "Review cold chain packaging efficiency.",
    url: "https://www.grandviewresearch.com/"
  },
  {
    id: "405",
    title: "Clinical Trials 2026: DCT Adoption",
    region: "Global",
    date: "2026-01-04",
    riskLevel: "Low",
    scenario: "Decentralized Clinical Trials (DCT) reach mainstream adoption in 2026.",
    impact: "Faster patient recruitment but requires remote monitoring tech.",
    action: "Integrate DCT tools into 2026 clinical study protocols.",
    url: "https://www.xtalks.com/"
  },
  {
    id: "406",
    title: "Helium Shortage 2026 Update",
    region: "Global",
    date: "2025-11-30",
    riskLevel: "High",
    scenario: "Global helium shortage persists; suppliers prioritize medical MRI.",
    impact: "MRI manufacturing and service costs remain elevated.",
    action: "Monitor helium surcharge clauses in service contracts.",
    url: "https://www.rsna.org/"
  },
  {
    id: "407",
    title: "Titanium Supply Chain Volatility",
    region: "Global",
    date: "2025-12-10",
    riskLevel: "Medium",
    scenario: "Geopolitical tensions drive titanium price volatility into 2026.",
    impact: "Cost fluctuations for orthopedic implant manufacturing.",
    action: "Hedge raw material purchases for Q1/Q2 2026.",
    url: "https://www.jhtitanium.com/"
  },
  {
    id: "408",
    title: "Medical Resin Market 2026",
    region: "Global",
    date: "2025-12-15",
    riskLevel: "Medium",
    scenario: "Medical-grade resin prices stabilize but specialized fluoropolymers remain tight.",
    impact: "Lead times for catheter tubing may extend.",
    action: "Build buffer stock of critical tubing components.",
    url: "https://www.plasticstoday.com/"
  },
  {
    id: "409",
    title: "Sterilization Modal Shift",
    region: "Global",
    date: "2025-11-05",
    riskLevel: "Medium",
    scenario: "Shift from EtO to Nitrogen Dioxide and X-ray accelerates in 2026.",
    impact: "Need for material compatibility re-validation.",
    action: "Initiate material compatibility testing for X-ray sterilization.",
    url: "https://www.fda.gov/"
  },
  {
    id: "410",
    title: "Cyber Supply Chain Risk 2026",
    region: "Global",
    date: "2026-01-02",
    riskLevel: "High",
    scenario: "Regulators mandate Software Bill of Materials (SBOM) for all verified suppliers.",
    impact: "Audit burden for upstream software suppliers.",
    action: "Collect SBOMs from all critical digital suppliers.",
    url: "https://www.cisa.gov/"
  },

  // --- SE Asia & India (Batch 5) ---
  {
    id: "501",
    title: "Vietnam MedTech Market Growth 2026",
    region: "Asia",
    date: "2026-01-04",
    riskLevel: "Low",
    scenario: "Vietnam market forecast to reach $2.1B; strong Japan investment.",
    impact: "Export opportunities for Japanese imaging and diagnostic equip.",
    action: "Expand distribution network in Ho Chi Minh and Hanoi.",
    url: "https://www.vietnam-briefing.com/"
  },
  {
    id: "502",
    title: "Vietnam-Japan Healthcare Coop",
    region: "Asia",
    date: "2025-11-15",
    riskLevel: "Low",
    scenario: "Asahi Intecc and Omron expand production and sales in Vietnam.",
    impact: "Strengthened Japanese brand presence in Vietnam.",
    action: "Leverage 'Japan Quality' branding in Vietnam marketing.",
    url: "https://vir.com.vn/"
  },
  {
    id: "503",
    title: "India CDSCO Risk Classification Module",
    region: "Asia",
    date: "2025-11-27",
    riskLevel: "Medium",
    scenario: "CDSCO launches online Risk Classification Module for transparency.",
    impact: "Clearer regulatory pathway for device registration in India.",
    action: "Verify product classification in new online module.",
    url: "https://cdsco.gov.in/"
  },
  {
    id: "504",
    title: "India Medical Device Rules Amendment",
    region: "Asia",
    date: "2025-12-04",
    riskLevel: "Low",
    scenario: "Draft rule proposes perpetual validity for manufacturing/import licenses.",
    impact: "Reduced administrative burden for maintaining India licenses.",
    action: "Monitor final notification of G.S.R. 883(E).",
    url: "https://cdsco.gov.in/"
  },
  {
    id: "505",
    title: "India PLI Scheme 2026 Update",
    region: "Asia",
    date: "2025-12-20",
    riskLevel: "Medium",
    scenario: "India expands Production Linked Incentive (PLI) for high-end devices.",
    impact: "Incentives for setting up local manufacturing in India.",
    action: "Feasibility study for India local assembly unit.",
    url: "https://pharmaceuticals.gov.in/"
  },
  {
    id: "506",
    title: "Indonesia Halal Mandate Class A",
    region: "Asia",
    date: "2025-10-25",
    riskLevel: "High",
    scenario: "Mandatory Halal certification for Class A devices deadline set for Oct 2026.",
    impact: "Non-compliance risks market access prohibition.",
    action: "Initiate Halal certification process for Class A exports to Indonesia.",
    url: "https://halalmui.org/"
  },
  {
    id: "507",
    title: "Indonesia TKDN Local Content",
    region: "Asia",
    date: "2025-11-10",
    riskLevel: "Medium",
    scenario: "Stricter TKDN requirements for public procurement in Indonesia.",
    impact: "Preference for locally manufactured devices in public tenders.",
    action: "Explore local contract manufacturing partners in Indonesia.",
    url: "https://kemenperin.go.id/"
  },
  {
    id: "508",
    title: "Thailand Medical Hub Strategy 2026",
    region: "Asia",
    date: "2026-01-05",
    riskLevel: "Low",
    scenario: "509M THB budget allocated for border medical hubs in fiscal 2026.",
    impact: "Increased demand for hospital equipment in border provinces.",
    action: "Target sales efforts at new Thai border medical centers.",
    url: "https://www.thailand.go.th/"
  },
  {
    id: "509",
    title: "Singapore HSA SHARE Platform",
    region: "Asia",
    date: "2025-11-01",
    riskLevel: "Medium",
    scenario: "Full transition to SHARE platform for all device applications.",
    impact: "Streamlined but strictly digital submission process.",
    action: "Train regulatory team on HSA SHARE portal usage.",
    url: "https://www.hsa.gov.sg/"
  },
  {
    id: "510",
    title: "Malaysia MDA Fee Increase Jan 2026",
    region: "Asia",
    date: "2025-12-10",
    riskLevel: "Medium",
    scenario: "Class A application fees increased effective Jan 1, 2026.",
    impact: "Higher cost for registering simple devices in Malaysia.",
    action: "Adjust budget for detailed Malaysian regulatory fees.",
    url: "https://www.mda.gov.my/"
  },

  // --- MEA & LATAM (Batch 6) ---
  {
    id: "601",
    title: "Saudi Arabia Healthcare Budget 2026",
    region: "Middle East",
    date: "2026-01-03",
    riskLevel: "Low",
    scenario: "Budget allocates >460B SAR for health/education; Seha Virtual Hospital expands.",
    impact: "Massive procurement opportunities for digital health and hospital infra.",
    action: "Bid for Saudi MOH digital transformation tenders.",
    url: "https://www.mof.gov.sa/"
  },
  {
    id: "602",
    title: "Arab Health 2026 Preview",
    region: "Middle East",
    date: "2026-01-02",
    riskLevel: "Low",
    scenario: "Arab Health 2026 (Feb 9-12) to feature expanded Japan Pavilion.",
    impact: "Prime opportunity to showcase products to MEA distributors.",
    action: "Finalize booth design and marketing collateral for Dubai.",
    url: "https://www.arabhealthonline.com/"
  },
  {
    id: "603",
    title: "UAE National Unified Health Platform",
    region: "Middle East",
    date: "2025-12-15",
    riskLevel: "Medium",
    scenario: "Unified licensure platform for healthcare pros launching Q2 2026.",
    impact: "Easier mobility for medical staff across UAE; stabilizing workforce.",
    action: "Monitor workforce availability for clinical support roles.",
    url: "https://gulfnews.com/"
  },
  {
    id: "604",
    title: "UAE Digital Health Strategy 2026",
    region: "Middle East",
    date: "2025-11-20",
    riskLevel: "Low",
    scenario: "Dubai Health Strategy 2026 focuses on preventive care and telemedicine.",
    impact: "Demand for remote patient monitoring devices.",
    action: "Present RPM solutions to DHA.",
    url: "https://www.dha.gov.ae/"
  },
  {
    id: "605",
    title: "Brazil ANVISA New Certificate Tool",
    region: "Latin America",
    date: "2025-11-01",
    riskLevel: "Medium",
    scenario: "ANVISA replaces Sicert with new tool integrated with Solicita.",
    impact: "Changes to certificate issuance workflow.",
    action: "Update internal regulatory SOPs for ANVISA submissions.",
    url: "https://www.gov.br/anvisa/"
  },
  {
    id: "606",
    title: "Brazil RDC 848/2024 Implementation",
    region: "Latin America",
    date: "2025-10-10",
    riskLevel: "Medium",
    scenario: "New RDC 848/2024 aligns Brazil with IMDRF essential principles.",
    impact: "Harmonized technical documentation requirements.",
    action: "Align technical files with IMDRF ToC structure.",
    url: "https://www.gov.br/anvisa/"
  },
  {
    id: "607",
    title: "Mexico Nearshoring Investment 2026",
    region: "Latin America",
    date: "2026-01-05",
    riskLevel: "Low",
    scenario: "2026 dubbed 'Year of Nearshore'; Japanese firms expanding.",
    impact: "Growth in local contract manufacturing for US market.",
    action: "Investigate contract manufacturing sites in Baja/Bajio.",
    url: "https://www.panoramadvisors.com/"
  },
  {
    id: "608",
    title: "Mexico MedTech Market Growth",
    region: "Latin America",
    date: "2025-12-12",
    riskLevel: "Low",
    scenario: "Mexico medtech density rising; market grows on US demand.",
    impact: "Regional supply chain strengthening.",
    action: "Source components from Mexican clusters.",
    url: "https://www.entradagroup.com/"
  },
  {
    id: "609",
    title: "Africa Medical Device Growth 2026",
    region: "Africa",
    date: "2026-01-04",
    riskLevel: "Low",
    scenario: "Kenya and Nigeria projected for >8% CAGR in 2026.",
    impact: "Emerging export markets for affordable diagnostics.",
    action: "Identify distributors in Lagos and Nairobi.",
    url: "https://www.fitchsolutions.com/"
  },
  {
    id: "610",
    title: "Kenya Digital Health Initiative",
    region: "Africa",
    date: "2025-11-30",
    riskLevel: "Low",
    scenario: "Kenya continues rollout of digital health infrastructure.",
    impact: "opportunities for varied digital health solutions.",
    action: "Explore partnerships with Kenyan e-health providers.",
    url: "https://www.health.go.ke/"
  }
];
