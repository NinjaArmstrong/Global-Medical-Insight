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
  // --- Existing 6 Articles ---
  {
    "id": "eb535e64-79a5-4f42-a1d7-3960a1deabd7",
    "title": "ナイジェリア医師ストライキ：高額医療機器需要凍結メカニズムの予兆",
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
  },

  // --- New Articles (Africa) ---
  {
    "id": "new-africa-01",
    "title": "南アフリカ：コレラ感染拡大による公衆衛生非常事態と医療資源の逼迫",
    "published_at": "2026-01-05T09:00:00+00:00",
    "region": "Africa",
    "company": "General Market",
    "risk_level": 4,
    "scenario": "南アフリカの一部の州でコレラの感染が急拡大し、病院のベッド不足と点滴・抗生物質の在庫切れが深刻化している。",
    "impact": "地域医療機関の機能不全リスクがあります。感染対策製品（消毒液、手袋、防護服）の需要が急増する反面、一般診療向けの医療機器の発注が一時的に凍結される可能性があります。",
    "action_item": "現地代理店と連携し、感染対策製品の在庫積み増しを行うとともに、既存納入機器のメンテナンス要員の安全確保ガイドラインを策定してください。",
    "source_url": "https://example.com/south-africa-cholera",
    "source_domain": "news24.com"
  },
  {
    "id": "new-africa-02",
    "title": "エジプト：外貨準備高不足に伴う医療機器輸入ライセンスの承認遅延",
    "published_at": "2026-01-04T14:30:00+00:00",
    "region": "Africa",
    "company": "General Market",
    "risk_level": 5,
    "scenario": "エジプト中央銀行による信用状（L/C）発行規制が強化され、医療機器を含む輸入品の通関が港湾で2週間以上滞留している。",
    "impact": "エジプト向け輸出製品の納期遅延と保管コスト（デマレージ）の発生が確実視されます。また、現地代理店からの代金回収遅延リスクも高まっています。",
    "action_item": "出荷済みの製品についてはフォワーダーと連携して通関状況を追跡し、L/C条件の再交渉または前払い条件への切り替えを検討してください。",
    "source_url": "https://example.com/egypt-import-crisis",
    "source_domain": "ahram.org.eg"
  },
  {
    "id": "new-africa-03",
    "title": "ケニア：デジタルヘルス規制法案の可決とデータローカライゼーション義務化",
    "published_at": "2026-01-02T10:15:00+00:00",
    "region": "Africa",
    "company": "General Market",
    "risk_level": 2,
    "scenario": "ケニア議会は、患者データの国内サーバー保存を義務付ける「デジタルヘルス法2026」を可決。違反企業には高額な罰金が科される。",
    "impact": "クラウドベースの医療機器やアプリを提供している場合、システム構成の変更（現地サーバーへの移行）が必要となり、追加コストが発生します。",
    "action_item": "法務部門と連携して新法の詳細を確認し、クラウドベンダー（AWS/Azure）のケニアリージョンまたは現地パートナーのデータセンター利用への切り替え計画を策定してください。",
    "source_url": "https://example.com/kenya-digital-health",
    "source_domain": "nation.africa"
  },

  // --- New Articles (Middle East) ---
  {
    "id": "new-me-01",
    "title": "サウジアラビア：Vision 2030に基づく公立病院の民営化第2フェーズ入札開始",
    "published_at": "2026-01-05T11:00:00+00:00",
    "region": "Middle East",
    "company": "General Market",
    "risk_level": 1,
    "scenario": "サウジアラビア保健省は、リヤドおよびジェッダの主要公立病院の運営を民間セクターへ委託する大規模入札を開始した。",
    "impact": "運営主体の変更に伴い、採用される医療機器の選定基準が「コスト重視」から「効率性・先進性重視」へシフトする好機です。大規模なリプレイス需要が期待できます。",
    "action_item": "入札に参加する主要な病院運営グループ（HMO）への営業攻勢を強化し、ハイエンドモデルの導入提案書を早急に準備してください。",
    "source_url": "https://example.com/saudi-privatization",
    "source_domain": "arabnews.com"
  },
  {
    "id": "new-me-02",
    "title": "UAE：国内医薬品製造ハブ構想により、輸入ジェネリックへの規制強化を検討",
    "published_at": "2026-01-03T16:45:00+00:00",
    "region": "Middle East",
    "company": "General Market",
    "risk_level": 3,
    "scenario": "UAE政府は「Make it in the Emirates」イニシアチブの一環として、現地生産を行わない医薬品・消耗品の公的調達優先順位を下げる方針を示唆。",
    "impact": "輸入品のシェア低下リスクがあります。特に低価格帯の消耗品においては、現地メーカーとの競争条件が不利になる可能性があります。",
    "action_item": "現地生産委託（CMO）の可能性を調査するか、または「高度な技術移転」を条件とした特例措置の適用を現地当局に働きかけてください。",
    "source_url": "https://example.com/uae-pharma-hub",
    "source_domain": "thenationalnews.com"
  },
  {
    "id": "new-me-03",
    "title": "イラン：新たな経済制裁措置の噂と医療決済チャネルへの影響懸念",
    "published_at": "2026-01-01T09:00:00+00:00",
    "region": "Middle East",
    "company": "General Market",
    "risk_level": 4,
    "scenario": "欧米諸国がイランに対する追加制裁を検討中との報道。人道支援物資（医薬品・医療機器）の決済に使用されている銀行チャネルが遮断される懸念。",
    "impact": "イラン代理店からの送金が完全に停止するリスクがあります。また、制裁対象リスト（SDNリスト）の拡大により、取引自体がコンプライアンス違反となる可能性があります。",
    "action_item": "法務・コンプライアンス部門と緊急会議を開催し、イラン向け輸出の即時停止基準を再確認。未回収債権の保全措置を講じてください。",
    "source_url": "https://example.com/iran-sanctions",
    "source_domain": "reuters.com"
  },

  // --- New Articles (South Asia) ---
  {
    "id": "new-sa-01",
    "title": "パキスタン：電力危機により主要病院で手術延期が常態化",
    "published_at": "2026-01-04T13:20:00+00:00",
    "region": "South Asia",
    "company": "General Market",
    "risk_level": 5,
    "scenario": "燃料不足による計画停電が長時間化し、パキスタンの主要都市の病院で自家発電機の燃料も枯渇。待機的手術のキャンセルが相次いでいる。",
    "impact": "手術件数の減少により、消耗品の使用量が激減します。また、電圧不安定による設置済み高度医療機器（MRI、CT等）の故障リスクが高まっています。",
    "action_item": "設置済み機器のUPS（無停電電源装置）設置状況を全数調査し、保護対策を提案。消耗品の出荷調整を行い、過剰在庫を防いでください。",
    "source_url": "https://example.com/pakistan-power-crisis",
    "source_domain": "dawn.com"
  },
  {
    "id": "new-sa-02",
    "title": "バングラデシュ：医薬品輸出が過去最高を記録、アフリカ市場への進出加速",
    "published_at": "2026-01-05T08:00:00+00:00",
    "region": "South Asia",
    "company": "General Market",
    "risk_level": 2,
    "scenario": "バングラデシュの製薬業界が安価なジェネリック医薬品の輸出を急拡大させており、アフリカ市場においてインド製薬企業のシェアを脅かしている。",
    "impact": "競合環境の変化（バングラデシュ企業の台頭）により、アフリカ市場における価格競争がさらに激化します。既存の販売網が切り崩されるリスクがあります。",
    "action_item": "アフリカの主要市場におけるバングラデシュ製品の浸透度を調査し、自社製品の「品質優位性」を訴求するマーケティングキャンペーンを展開してください。",
    "source_url": "https://example.com/bangladesh-pharma-export",
    "source_domain": "thedailystar.net"
  },
  {
    "id": "new-sa-03",
    "title": "スリランカ：経済回復に伴い必須医薬品の国家調達を再開",
    "published_at": "2026-01-03T10:00:00+00:00",
    "region": "South Asia",
    "company": "General Market",
    "risk_level": 1,
    "scenario": "IMF支援のもと経済が安定化しつつあるスリランカ保健省は、2年間停止していた必須医薬品および医療機器の国家調達を入札形式で再開すると発表。",
    "impact": "スリランカ市場への再参入の絶好の機会です。ただし、過去の未払い問題が解決しているか、支払い条件（L/C確認など）は慎重に見極める必要があります。",
    "action_item": "現地代理店と連携して入札要件を入手し、リスクヘッジ（前払い、国際機関の保証など）を条件とした入札参加を検討してください。",
    "source_url": "https://example.com/srilanka-procurement",
    "source_domain": "dailynews.lk"
  },

  // --- New Articles (Global) ---
  {
    "id": "new-global-01",
    "title": "WHO：新たなパンデミック条約の合意に向け最終調整、公平な分配を義務化へ",
    "published_at": "2026-01-04T22:00:00+00:00",
    "region": "Global",
    "company": "General Market",
    "risk_level": 2,
    "scenario": "WHO加盟国は、次なるパンデミックに備え、医薬品・ワクチンの生産能力の地理的分散と、途上国への公平な分配を義務付ける条約案に合意する見通し。",
    "impact": "緊急時における輸出規制リスクが低減される一方、技術移転や知的財産権の放棄圧力が強まる可能性があります。グローバルなサプライチェーン再編が求められます。",
    "action_item": "条約の最終案を精査し、知財戦略への影響を評価。地域統括拠点（Regional HQ）ごとの在庫備蓄計画を見直してください。",
    "source_url": "https://example.com/pandemic-treaty",
    "source_domain": "who.int"
  },
  {
    "id": "new-global-02",
    "title": "グローバル物流：紅海情勢の悪化によりコンテナ運賃が再上昇",
    "published_at": "2026-01-05T15:00:00+00:00",
    "region": "Global",
    "company": "General Market",
    "risk_level": 4,
    "scenario": "紅海地域での商船攻撃リスクが高まり、主要海運会社が喜望峰周りへの迂回を決定。アジア-欧州間のリードタイムが2週間延長し、運賃が高騰している。",
    "impact": "欧州および中東アフリカ向け製品の輸送コスト増と納期遅延が発生します。重要部材の在庫切れによる生産ライン停止リスクも再燃しています。",
    "action_item": "航空便への切り替えコストと納期遅延のペナルティを比較検討し、至急輸送モードを最適化してください。顧客への納期遅延連絡を先んじて行ってください。",
    "source_url": "https://example.com/red-sea-shipping",
    "source_domain": "bloomberg.com"
  },
  {
    "id": "new-africa-04",
    "title": "モロッコ：震災復興特需、地方病院の再建プロジェクトに国際支援が集中",
    "published_at": "2026-01-02T18:00:00+00:00",
    "region": "Africa",
    "company": "General Market",
    "risk_level": 3,
    "scenario": "モロッコ政府は、地震で被害を受けたアトラス山脈周辺の地方医療機関の再建に向け、多額の予算を計上。国際開発金融機関も融資を決定。",
    "impact": "ベーシックな医療機器（X線、超音波、ベット、モニター）の大量需要が発生します。価格競争力と即納性が重視される短期決戦型の商談が増加します。",
    "action_item": "現地ディストリビューターの在庫状況を確認し、即納可能な「復興支援パッケージ」を提案。メンテナンス体制の充実を差別化要因としてアピールしてください。",
    "source_url": "https://example.com/morocco-reconstruction",
    "source_domain": "map.ma"
  }
];
