export interface Article {
  id: string;
  title: string;
  published_at: string;
  region: string;
  company: string;
  risk_level: number;
  scenario: string;
  impact: string;
  action_item: string;
  source_url: string;
  source_domain: string;
}

export const articles: Article[] = [
  {
    "id": "eb535e64-79a5-4f42-a1d7-3960a1deabd7",
    "title": "ナイジェリア医師ストライキ：高額医療機器需要凍結メカニズムの予兆 (★★★☆☆)",
    "published_at": "2026-01-03T08:55:44+00:00",
    "region": "Africa",
    "company": "General Market",
    "risk_level": 3,
    "scenario": "ナイジェリアの研修医が未払い給与などを理由に1月12日から全国ストライキを再開する。",
    "impact": "長期的なストライキは、公立病院における購買プロセスの停滞を招く恐れがあります。特に、予定されていた高額医療機器の入札や納品スケジュールが遅延する可能性が高く、在庫管理コストの増加や売上計上の先送りが懸念されます。",
    "action_item": "現地代理店を通じて、主要顧客（公立病院）の購買スケジュールの変更状況を緊急確認し、民間病院への販路拡大を検討してください。",
    "source_url": "https://guardian.ng/features/health/resident-doctors-to-resume-nationwide-strike-january-12/",
    "source_domain": "guardian.ng"
  },
  {
    "id": "abb885d2-a4b9-4d11-93b7-522c0bc7899b",
    "title": "ガザ人道危機深刻化：医療物資搬入制限による供給網への影響",
    "published_at": "2026-01-03T06:00:00+00:00",
    "region": "Middle East",
    "company": "General Market",
    "risk_level": 4,
    "scenario": "ガザ地区への人道支援物資の搬入制限が厳格化され、医薬品や医療消耗品の深刻な不足が発生している。物流ルートの遮断が長期化する見込み。",
    "impact": "周辺国（エジプト、ヨルダン）を経由した医療物資のサプライチェーンに混乱が生じています。物流コストの高騰や、国境での滞留による品質劣化リスク（特に温度管理が必要な製品）が増大しています。",
    "action_item": "代替物流ルートの確保および、近隣諸国での在庫分散配置を検討してください。また、人道支援団体との連携による特例的な搬入ルートの可能性を模索する必要があります。",
    "source_url": "https://www.naturalnews.com/2026-01-03-israeli-forces-kill-palestinian-child-humanitarian-catastrophe.html",
    "source_domain": "www.naturalnews.com"
  },
  {
    "id": "1c43ae68-ba0a-44ad-8264-a24ea56dd421",
    "title": "インド市場における減量薬（GLP-1受容体作動薬）の価格競争激化",
    "published_at": "2026-01-03T01:35:53+00:00",
    "region": "South Asia",
    "company": "General Market",
    "risk_level": 2,
    "scenario": "2025年のブームを経て、インドでは減量薬への需要が急増。特許切れに伴いジェネリック医薬品が参入し、価格競争が激化する見通し。",
    "impact": "インド市場における糖尿病治療薬および抗肥満薬の価格下落圧力が強まります。一方で、市場全体の拡大により、投与デバイス（ペン型注入器など）や関連診断機器の需要増加が期待できます。",
    "action_item": "ジェネリック医薬品メーカーとの提携強化や、投与デバイスの現地生産検討など、価格競争力のある製品ポートフォリオへの転換を検討してください。",
    "source_url": "https://indianexpress.com/article/explained/explained-health/splash-2025-weight-loss-drugs-2026-10452464/",
    "source_domain": "indianexpress.com"
  },
  {
    "id": "2ddebc80-c4d7-4544-aa51-a94316d142a0",
    "title": "インド2026年予算案：医薬品製造の効率化とイノベーションへの投資",
    "published_at": "2026-01-02T09:51:01+00:00",
    "region": "South Asia",
    "company": "General Market",
    "risk_level": 3,
    "scenario": "インド政府は2026年度予算において、医薬品産業のイノベーション促進と製造効率化に重点配分を行う方針。「世界の薬局」としての地位強化を狙う。",
    "impact": "インド国内でのR&D拠点設立や、現地企業との共同研究に対する優遇税制が期待されます。一方で、品質規制の強化によるコンプライアンスコストの増加も予想されます。",
    "action_item": "新規優遇策の詳細を分析し、インド拠点への設備投資計画を見直してください。また、現地パートナーとの関係強化により、政策動向をいち早く把握する体制を構築してください。",
    "source_url": "https://economictimes.indiatimes.com/industry/healthcare/biotech/pharmaceuticals/budget-for-pharmacy-of-the-world-what-sitharaman-co-can-do-to-make-medicines-more-affordable-in-india/articleshow/126302156.cms",
    "source_domain": "economictimes.indiatimes.com"
  },
  {
    "id": "f2b30ce6-2656-4ce1-9fa3-41699f1e7516",
    "title": "【南アジア医療動向】NBEMS、医師向けAI教育プログラムを無償提供開始",
    "published_at": "2026-01-02T07:49:44+00:00",
    "region": "South Asia",
    "company": "General Market",
    "risk_level": 1,
    "scenario": "インド国立医学試験委員会（NBEMS）は、2026年1月より医師および医療従事者向けのAI活用教育プログラムを無償で提供開始する。",
    "impact": "インドの医療現場におけるAI診断支援システムやデジタルヘルスツールの受容性が高まる可能性があります。AI機能を搭載した医療機器の市場参入障壁が低下する期待があります。",
    "action_item": "自社製品のAI機能に関する教育コンテンツを開発し、現地の医学会や教育機関への提供を通じて、オピニオンリーダーとの関係構築を図ってください。",
    "source_url": "https://economictimes.indiatimes.com/news/new-updates/nbems-launches-ai-in-medicine-course-for-doctors-check-how-to-apply-fees-eligibility-and-more/articleshow/126301354.cms",
    "source_domain": "economictimes.indiatimes.com"
  },
  {
    "id": "4100169b-38db-4473-a11e-cd2aa6b79c5f",
    "title": "紛争地ガザにおけるリハビリテーション需要の急増",
    "published_at": "2026-01-02T07:18:58+00:00",
    "region": "Middle East",
    "company": "General Market",
    "risk_level": 5,
    "scenario": "紛争による負傷者の増加に伴い、ガザ地区および周辺地域において四肢切断患者が急増。義肢装具やリハビリテーション機器への需要が供給を圧倒的に上回っている。",
    "impact": "人道支援予算がリハビリテーション分野に重点配分される可能性があります。義肢パーツやリハビリ機器の緊急調達ニーズが発生していますが、政情不安による代金回収リスクには注意が必要です。",
    "action_item": "国際機関（赤十字、WHOなど）の調達入札への参加を検討するとともに、CSR活動の一環として機材供与を行うことで、中長期的なブランド認知向上を図ってください。",
    "source_url": "https://www.aljazeera.com/features/2026/1/2/gaza-cousins-face-lost-youth-and-family-tragedy-after-amputations",
    "source_domain": "www.aljazeera.com"
  }
];
