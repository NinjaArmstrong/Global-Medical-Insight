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
    title: "FDA QMSR最終規則: 2026年コンプライアンス期限",
    region: "North America",
    date: "2026-01-05",
    riskLevel: "High",
    scenario: "ISO 13485と完全に整合するFDA品質管理システム規則（QMSR）は、2026年2月までに遵守が必要です。",
    impact: "米国に輸出する日本メーカーは、QMS文書を直ちに更新する必要があります。",
    action: "ISO 13485:2016に対する最終内部監査を実施し、FDA提出書類を更新する。",
    url: "https://www.fda.gov/medical-devices/quality-system-qs-regulation/medical-devices-quality-system-regulation-amendments"
  },
  {
    id: "102",
    title: "CES 2026: AIおよびデジタルヘルス動向",
    region: "North America",
    date: "2026-01-07",
    riskLevel: "Low",
    scenario: "ラスベガスで開催のCES 2026にて、次世代AI診断とウェアラブル技術が展示されました。",
    impact: "消費者向け医療機器の新たな競争基準、およびパートナーシップの機会。",
    action: "R&DベンチマークのためにCES 2026のデジタルヘルス受賞者を確認する。",
    url: "https://www.ces.tech/topics/digital-health.aspx"
  },
  {
    id: "103",
    title: "JPMヘルスケアカンファレンス2026展望",
    region: "North America",
    date: "2026-01-06",
    riskLevel: "Medium",
    scenario: "J.P.モルガンカンファレンスにて、M&Aの回復とGLP-1のMedTechへの影響が強調されました。",
    impact: "心臓および整形外科分野での統合が進み、サプライチェーンに影響を与える可能性があります。",
    action: "主要な競合他社およびサプライヤーのM&A発表を監視する。",
    url: "https://www.jpmorgan.com/solutions/cib/insights/health-care-conference"
  },
  {
    id: "104",
    title: "CMS 2026年医師報酬一覧（PFS）最終規則",
    region: "North America",
    date: "2025-11-15",
    riskLevel: "Medium",
    scenario: "CMSは遠隔医療およびAI対応サービスの更新を含む2026年の支払い率を確定しました。",
    impact: "遠隔モニタリング機器の償還変更により、米国の収益予測に影響が生じます。",
    action: "新しいCPTコードに基づいて2026年の収益予測を更新する。",
    url: "https://www.cms.gov/medicare/medicare-fee-for-service-payment/physicianfeesched"
  },
  {
    id: "105",
    title: "RSNA 2025: 放射線AI統合",
    region: "North America",
    date: "2025-12-05",
    riskLevel: "Low",
    scenario: "RSNA 2025では、画像診断向けの統合AIワークフローツールの急成長が強調されました。",
    impact: "日本の画像診断企業は、競争力を維持するためにAIソフトウェア統合を加速させる必要があります。",
    action: "RSNAで展示されたAIソフトウェアベンダーとの提携を調査する。",
    url: "https://www.rsna.org/annual-meeting"
  },
  {
    id: "106",
    title: "AHA 2025: 心血管技術の進歩",
    region: "North America",
    date: "2025-11-18",
    riskLevel: "Low",
    scenario: "米国心臓協会学術集会2025にて、新しいアブレーション技術が注目されました。",
    impact: "心房細動治療の標準治療の変化は、カテーテルの需要に影響を与える可能性があります。",
    action: "新しいアブレーション有効性データに対してR&Dパイプラインを評価する。",
    url: "https://professional.heart.org/en/meetings/scientific-sessions"
  },
  {
    id: "107",
    title: "米国先進製造目標 2026",
    region: "North America",
    date: "2025-12-20",
    riskLevel: "Medium",
    scenario: "ホワイトハウスは2026年に向けて国内バイオテクノロジー製造を推進しています。",
    impact: "公立病院の調達において「バイ・アメリカン」の優先順位が拡大する可能性があります。",
    action: "米国の受託製造（CMO）オプションを評価する。",
    url: "https://www.whitehouse.gov/ostp/"
  },
  {
    id: "108",
    title: "HIPAA更新 2025年後期",
    region: "North America",
    date: "2025-12-10",
    riskLevel: "High",
    scenario: "HHSはリプロダクティブヘルス・データプライバシーに関する新ガイダンスを発行（2025年後半発効）。",
    impact: "ユーザーの健康指標を追跡するアプリ/デバイスに対する厳格なデータ取り扱い要件。",
    action: "米国市場向けデジタルヘルス製品のデータプライバシーポリシーを見直す。",
    url: "https://www.hhs.gov/hipaa/index.html"
  },
  {
    id: "109",
    title: "カナダ ヘルステック2026投資",
    region: "North America",
    date: "2026-01-04",
    riskLevel: "Low",
    scenario: "カナダが2026年デジタルヘルス投資戦略を発表しました。",
    impact: "カナダに子会社を持つ外国テック企業への助成金の機会。",
    action: "カナダのデジタルヘルス助成金の受給資格を確認する。",
    url: "https://www.canada.ca/en/health-canada.html"
  },
  {
    id: "110",
    title: "米国-メキシコ サプライチェーン貿易 2026",
    region: "North America",
    date: "2026-01-03",
    riskLevel: "Medium",
    scenario: "2026年に医療機器の越境貿易フローの取り締まり強化が予想されます。",
    impact: "税関検査の厳格化により、メキシコのマキラドーラからの出荷が遅れる可能性があります。",
    action: "CTPAT遵守について物流パートナーを監査する。",
    url: "https://www.cbp.gov/trade"
  },

  // --- Europe (Batch 2) ---
  {
    id: "201",
    title: "EC MDR改正案",
    region: "Europe",
    date: "2025-12-16",
    riskLevel: "High",
    scenario: "欧州委員会は認証機関（NB）のボトルネックに対処するための提案を公表しました。",
    impact: "移行期間の延長、またはレガシーデバイスの簡素化された手続きの可能性。",
    action: "EU議会での立法進行状況を監視し、移行作業を中断しないようにする。",
    url: "https://health.ec.europa.eu/medical-devices-sector_en"
  },
  {
    id: "202",
    title: "第14回 認証機関（NB）調査結果",
    region: "Europe",
    date: "2025-11-30",
    riskLevel: "High",
    scenario: "新しいNBの指定にもかかわらず、依然として能力不足の問題が確認されました。",
    impact: "認証遅延（12〜18ヶ月）は2026年まで続く可能性が高いです。",
    action: "2027年の更新に向けて直ちにNBのスロットを確保する。",
    url: "https://health.ec.europa.eu/medical-devices-dialogue/medical-devices-coordination-group_en"
  },
  {
    id: "203",
    title: "EU AI法: MedTechガイドライン予測",
    region: "Europe",
    date: "2026-01-02",
    riskLevel: "Medium",
    scenario: "AI医療機器の市販後監視ガイドラインは2026年2月に予想されています。",
    impact: "EUで販売されるAI対応デバイスに対する新たなコンプライアンス要件。",
    action: "AI法ギャップ分析のために技術文書（Technical File）を準備する。",
    url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
  },
  {
    id: "204",
    title: "EHDS導入フェーズ",
    region: "Europe",
    date: "2025-12-28",
    riskLevel: "Medium",
    scenario: "欧州健康データ空間（EHDS）が積極的な導入フェーズに入りました。",
    impact: "EHRおよび接続デバイスに対する相互運用性標準の義務化。",
    action: "HL7/FHIR互換性についてデバイスソフトウェアを見直す。",
    url: "https://health.ec.europa.eu/ehealth-digital-health-and-care/european-health-data-space_en"
  },
  {
    id: "205",
    title: "MHRA 2026年規制ロードマップ",
    region: "Europe",
    date: "2025-11-10",
    riskLevel: "Medium",
    scenario: "英国MHRAは2026年の市販前および市販後ルールに関する法的文書を概説しました。",
    impact: "EU MDRとの乖離により、英国独自のコンプライアンス戦略が必要です。",
    action: "英国責任者（UKRP）戦略を更新する。",
    url: "https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency"
  },
  {
    id: "206",
    title: "MedTech Forum 2026 開催発表",
    region: "Europe",
    date: "2026-01-04",
    riskLevel: "Low",
    scenario: "MedTech Forumが2026年5月にストックホルムで開催されることが確認されました。",
    impact: "MDRおよびサステナビリティに関する政策議論の重要な場。",
    action: "薬事・規制対策チームの参加登録を行う。",
    url: "https://www.medtecheurope.org/events/medtech-forum/"
  },
  {
    id: "207",
    title: "スイスMedTech 2026展望",
    region: "Europe",
    date: "2026-01-03",
    riskLevel: "Medium",
    scenario: "スイスはEUとの相互承認協定（MRA）のギャップを維持しています。",
    impact: "外国メーカーにとってスイス代理人の必要性が継続します。",
    action: "スイス代理人のマンデート有効性を確認する。",
    url: "https://www.swissmedtech.ch/"
  },
  {
    id: "208",
    title: "ドイツDiGA 2026ファストトラック",
    region: "Europe",
    date: "2025-12-15",
    riskLevel: "Low",
    scenario: "BfArMはデジタルヘルスアプリケーション（DiGA）のファストトラックプロセスを更新しました。",
    impact: "ドイツにおけるデジタル治療の保険償還パスウェイが容易になります。",
    action: "デジタルポートフォリオのDiGA適格性を評価する。",
    url: "https://www.bfarm.de/EN/Medical-devices/DiGA/_node.html"
  },
  {
    id: "209",
    title: "フランス社会保障財政 2026",
    region: "Europe",
    date: "2025-12-20",
    riskLevel: "Medium",
    scenario: "PLFSS 2026には医療機器のコスト抑制策が含まれています。",
    impact: "フランスの償還リスト（LPPP）に対する価格引き下げ圧力。",
    action: "フランスの価格交渉に向けたバリュー・ドシエを準備する。",
    url: "https://www.securite-sociale.fr/"
  },
  {
    id: "210",
    title: "英国ライフサイエンス2026投資",
    region: "Europe",
    date: "2026-01-06",
    riskLevel: "Low",
    scenario: "英国政府はライフサイエンス製造への新たな資金援助を約束しました。",
    impact: "英国への生産拠点設置に対するインセンティブ。",
    action: "英国の製造投資助成金を検討する。",
    url: "https://www.gov.uk/government/organisations/office-for-life-sciences"
  },

  // --- Asia (East) (Batch 3) ---
  {
    id: "301",
    title: "中国NMPA 新GMP No. 107",
    region: "East Asia",
    date: "2025-11-01",
    riskLevel: "High",
    scenario: "医療機器GMP（2025年第107号）が2026年11月に完全施行されます。",
    impact: "中国で販売するメーカーに対する厳格なライフサイクルリスク管理要件。",
    action: "新GMP No. 107に対する中国QMSのギャップ分析を実施する。",
    url: "https://english.nmpa.gov.cn/"
  },
  {
    id: "302",
    title: "中国VBP 第6回計画 2025",
    region: "East Asia",
    date: "2025-12-10",
    riskLevel: "High",
    scenario: "国家医療保障局（NHSA）は高価格消耗品を対象とした第6回帯量購買（VBP）ラウンドを発表。",
    impact: "対象デバイスカテゴリにおける大幅な価格下落リスク。",
    action: "VBP対象化に向けた価格シナリオをシミュレーションする。",
    url: "http://english.nhsa.gov.cn/"
  },
  {
    id: "303",
    title: "中国 ハイエンド機器政策 2025",
    region: "East Asia",
    date: "2025-10-15",
    riskLevel: "Low",
    scenario: "NMPA公告第63号（2025年7月）が完全に運用開始され、イノベーション承認が迅速化。",
    impact: "革新的な外国製デバイスの承認パスウェイが加速します。",
    action: "グリーンチャネルを通じて革新的デバイスの申請を行う。",
    url: "https://english.nmpa.gov.cn/"
  },
  {
    id: "304",
    title: "日本 中医協 2026年度改定",
    region: "East Asia",
    date: "2025-12-26",
    riskLevel: "Medium",
    scenario: "中医協は2026年度の「医療材料制度改革の骨子」を承認しました。",
    impact: "不採算デバイスの価格引き上げやイノベーションプレミアムの調整。",
    action: "厚労省ヒアリングに向けた保険償還の論拠を準備する。",
    url: "https://www.mhlw.go.jp/stf/shingi/chuikyo.html"
  },
  {
    id: "305",
    title: "日本 PMDA米国オフィス開設",
    region: "East Asia",
    date: "2025-09-10",
    riskLevel: "Low",
    scenario: "PMDAは日米規制調和を促進するため、ワシントンDCにオフィスを開設しました。",
    impact: "日本企業の米国R&Dチームにとって、よりスムーズな相談プロセスが可能に。",
    action: "申請前相談のためにPMDA米国オフィスを活用する。",
    url: "https://www.pmda.go.jp/english/"
  },
  {
    id: "306",
    title: "日本 デジタルヘルス2026戦略",
    region: "East Asia",
    date: "2026-01-04",
    riskLevel: "Low",
    scenario: "厚労省は電子処方箋や電子カルテを推進する「医療DX 2030」を推進中。",
    impact: "相互運用可能なシステムとデジタルヘルスツールへの需要。",
    action: "製品が日本のHL7標準と互換性があることを確認する。",
    url: "https://www.mhlw.go.jp/"
  },
  {
    id: "307",
    title: "韓国 MFDS デジタル製品法",
    region: "East Asia",
    date: "2026-01-05",
    riskLevel: "High",
    scenario: "デジタル医療製品法の施行令が2026年1月24日に発効します。",
    impact: "韓国におけるデジタルヘルスソフトウェアの新しい分類とサイバーセキュリティ規則。",
    action: "韓国MFDS準拠のために技術ファイルを更新する。",
    url: "https://www.mfds.go.kr/eng/index.do"
  },
  {
    id: "308",
    title: "韓国 AIデバイスガイダンス更新",
    region: "East Asia",
    date: "2025-11-20",
    riskLevel: "Medium",
    scenario: "MFDSはAIデバイスの透明性とサイバーセキュリティに関するガイダンスを更新しました。",
    impact: "AIアルゴリズムと学習データに対する審査が厳格化。",
    action: "韓国市場申請に向けてAI学習データセットを監査する。",
    url: "https://www.mfds.go.kr/eng/index.do"
  },
  {
    id: "309",
    title: "台湾 TFDA 2026年規制",
    region: "East Asia",
    date: "2025-12-01",
    riskLevel: "Medium",
    scenario: "台湾TFDAはQMS要件をISO 13485:2016に近づけました。",
    impact: "有効なISO認証を持つメーカーのQSD（品質システム文書）申請が簡素化されます。",
    action: "簡素化されたルートを使用してQSDを更新する。",
    url: "https://www.fda.gov.tw/ENG/index.aspx"
  },
  {
    id: "310",
    title: "香港 医療フェア 2026",
    region: "East Asia",
    date: "2026-01-02",
    riskLevel: "Low",
    scenario: "HKTDCは香港国際医療・ヘルスケアフェア2026の日程を発表しました。",
    impact: "グレーターベイエリア（大湾区）市場へのアクセスのためのゲートウェイイベント。",
    action: "GBA拡大のための展示会戦略を計画する。",
    url: "https://event.hktdc.com/fair/hkmedicalfair-en/"
  },

  // --- Global Supply Chain (Batch 4) ---
  {
    id: "401",
    title: "半導体市場展望 2026",
    region: "Global",
    date: "2026-01-06",
    riskLevel: "High",
    scenario: "AI需要が2026年のレガシー医療機器用チップの供給に変動をもたらしています。",
    impact: "電気機械式デバイス向けマイクロコントローラの不足の可能性。",
    action: "重要チップの長期供給契約を確保する。",
    url: "https://sourceability.com/"
  },
  {
    id: "402",
    title: "EtO滅菌 EPA期限延長",
    region: "Global",
    date: "2025-10-15",
    riskLevel: "Medium",
    scenario: "米国EPAは、供給不足を防ぐためにEtOコンプライアンス期限を2年間延長しました。",
    impact: "滅菌能力の制約に対する一時的な緩和。",
    action: "代替滅菌法（電子線/X線）の適格性確認（バリデーション）を継続する。",
    url: "https://www.raps.org/"
  },
  {
    id: "403",
    title: "世界物流 2026年第1四半期展望",
    region: "Global",
    date: "2026-01-03",
    riskLevel: "Medium",
    scenario: "海上運賃は沈静化; 2026年Q1の航空貨物量はコールドチェーン主導で2.6%増。",
    impact: "海上運賃は安定していますが、医薬品/バイオ向けの航空スペースは逼迫しています。",
    action: "航空貨物便のスペースを3週間前に予約する。",
    url: "https://www.berlinpackaging.com/"
  },
  {
    id: "404",
    title: "コールドチェーン市場成長 2026",
    region: "Global",
    date: "2025-12-28",
    riskLevel: "Low",
    scenario: "医療用コールドチェーン需要は2026年に10%以上成長すると予測されています。",
    impact: "温度管理物流のコスト増加。",
    action: "コールドチェーン梱包の効率を見直す。",
    url: "https://www.grandviewresearch.com/"
  },
  {
    id: "405",
    title: "臨床試験 2026: DCT採用",
    region: "Global",
    date: "2026-01-04",
    riskLevel: "Low",
    scenario: "分散型臨床試験（DCT）は2026年に主流の採用率に達します。",
    impact: "患者募集は迅速化されますが、リモートモニタリング技術が必要です。",
    action: "DCTツールを2026年の臨床研究プロトコルに統合する。",
    url: "https://www.xtalks.com/"
  },
  {
    id: "406",
    title: "ヘリウム不足 2026更新",
    region: "Global",
    date: "2025-11-30",
    riskLevel: "High",
    scenario: "世界的なヘリウム不足が持続; サプライヤーは医療用MRIを優先しています。",
    impact: "MRIの製造およびサービスコストは高止まりしています。",
    action: "サービス契約におけるヘリウムサーチャージ条項を監視する。",
    url: "https://www.rsna.org/"
  },
  {
    id: "407",
    title: "チタン サプライチェーン変動",
    region: "Global",
    date: "2025-12-10",
    riskLevel: "Medium",
    scenario: "地政学的緊張が2026年にかけてチタン価格の変動を招いています。",
    impact: "整形外科用インプラント製造のコスト変動。",
    action: "2026年Q1/Q2の原材料購入をヘッジする。",
    url: "https://www.jhtitanium.com/"
  },
  {
    id: "408",
    title: "医療用樹脂市場 2026",
    region: "Global",
    date: "2025-12-15",
    riskLevel: "Medium",
    scenario: "医療グレード樹脂の価格は安定していますが、特殊なフッ素ポリマーは逼迫しています。",
    impact: "カテーテル用チューブのリードタイムが延びる可能性があります。",
    action: "重要なチューブ部品のバッファ在庫を構築する。",
    url: "https://www.plasticstoday.com/"
  },
  {
    id: "409",
    title: "滅菌モードの移行",
    region: "Global",
    date: "2025-11-05",
    riskLevel: "Medium",
    scenario: "2026年にEtOから二酸化窒素およびX線への移行が加速します。",
    impact: "材料適合性の再バリデーションが必要。",
    action: "X線滅菌に対する材料適合性試験を開始する。",
    url: "https://www.fda.gov/"
  },
  {
    id: "410",
    title: "サイバーサプライチェーンリスク 2026",
    region: "Global",
    date: "2026-01-02",
    riskLevel: "High",
    scenario: "規制当局はすべての検証済みサプライヤーに対しSBOM（ソフトウェア部品表）を義務化。",
    impact: "上流ソフトウェアサプライヤーへの監査負担が増加。",
    action: "すべての重要なデジタルサプライヤーからSBOMを収集する。",
    url: "https://www.cisa.gov/"
  },

  // --- SE Asia & India (Batch 5) ---
  {
    id: "501",
    title: "ベトナム MedTech市場成長 2026",
    region: "Southeast Asia",
    date: "2026-01-04",
    riskLevel: "Low",
    scenario: "ベトナム市場は21億ドルに達すると予測; 日本からの投資が堅調。",
    impact: "日本の画像診断および診断機器の輸出機会。",
    action: "ホーチミンとハノイでの販売ネットワークを拡大する。",
    url: "https://www.vietnam-briefing.com/"
  },
  {
    id: "502",
    title: "ベトナム-日本 医療協力",
    region: "Southeast Asia",
    date: "2025-11-15",
    riskLevel: "Low",
    scenario: "朝日インテックとオムロンがベトナムでの生産と販売を拡大。",
    impact: "ベトナムにおける日本ブランドのプレゼンス強化。",
    action: "ベトナムでのマーケティングに「日本品質」を活用する。",
    url: "https://vir.com.vn/"
  },
  {
    id: "503",
    title: "インド CDSCO リスク分類モジュール",
    region: "South Asia",
    date: "2025-11-27",
    riskLevel: "Medium",
    scenario: "CDSCOは透明性のためのオンラインリスク分類モジュールを開始しました。",
    impact: "インドにおけるデバイス登録の規制パスウェイが明確化。",
    action: "新しいオンラインモジュールで製品分類を確認する。",
    url: "https://cdsco.gov.in/"
  },
  {
    id: "504",
    title: "インド 医療機器規則改正",
    region: "South Asia",
    date: "2025-12-04",
    riskLevel: "Low",
    scenario: "製造/輸入ライセンスの有効期限を無期限とする規則案。",
    impact: "インドのライセンス維持にかかる行政負担の軽減。",
    action: "G.S.R. 883(E)の最終通知を監視する。",
    url: "https://cdsco.gov.in/"
  },
  {
    id: "505",
    title: "インド PLIスキーム 2026更新",
    region: "South Asia",
    date: "2025-12-20",
    riskLevel: "Medium",
    scenario: "インドはハイエンド機器向けの生産連動型インセンティブ（PLI）を拡大。",
    impact: "インドに現地製造拠点を設立するためのインセンティブ。",
    action: "インド現地組立工場のフィージビリティスタディを実施する。",
    url: "https://pharmaceuticals.gov.in/"
  },
  {
    id: "506",
    title: "インドネシア ハラール義務化 クラスA",
    region: "Southeast Asia",
    date: "2025-10-25",
    riskLevel: "High",
    scenario: "クラスA機器に対するハラール認証義務化の期限が2026年10月に設定されました。",
    impact: "非準拠は市場アクセス禁止のリスクがあります。",
    action: "インドネシア向けクラスA輸出のハラール認証プロセスを開始する。",
    url: "https://halalmui.org/"
  },
  {
    id: "507",
    title: "インドネシア TKDN ローカルコンテンツ",
    region: "Southeast Asia",
    date: "2025-11-10",
    riskLevel: "Medium",
    scenario: "インドネシアの公共調達におけるTKDN要件の厳格化。",
    impact: "公共入札において現地製造デバイスが優遇されます。",
    action: "インドネシアでの現地受託製造パートナーを探索する。",
    url: "https://kemenperin.go.id/"
  },
  {
    id: "508",
    title: "タイ メディカルハブ戦略 2026",
    region: "Southeast Asia",
    date: "2026-01-05",
    riskLevel: "Low",
    scenario: "2026年度に国境医療ハブのために5億9000万バーツの予算が割り当てられました。",
    impact: "国境地域の病院における機器需要の増加。",
    action: "新しいタイ国境医療センターに営業努力を向ける。",
    url: "https://www.thailand.go.th/"
  },
  {
    id: "509",
    title: "シンガポール HSA SHAREプラットフォーム",
    region: "Southeast Asia",
    date: "2025-11-01",
    riskLevel: "Medium",
    scenario: "すべてのデバイス申請がSHAREプラットフォームへ完全移行。",
    impact: "合理化されましたが、厳格なデジタル申請プロセス。",
    action: "薬事チームにHSA SHAREポータルの利用方法をトレーニングする。",
    url: "https://www.hsa.gov.sg/"
  },
  {
    id: "510",
    title: "マレーシア MDA 手数料値上げ 2026年1月",
    region: "Southeast Asia",
    date: "2025-12-10",
    riskLevel: "Medium",
    scenario: "2026年1月1日よりクラスA申請手数料が増額されました。",
    impact: "マレーシアでの単純なデバイス登録コストの上昇。",
    action: "マレーシアの詳細な規制手数料に合わせて予算を調整する。",
    url: "https://www.mda.gov.my/"
  },

  // --- MEA & LATAM (Batch 6) ---
  {
    id: "601",
    title: "サウジアラビア 医療予算 2026",
    region: "Middle East",
    date: "2026-01-03",
    riskLevel: "Low",
    scenario: "予算は医療/教育に4600億リヤル以上を配分; Sehaバーチャルホスピタルの拡大。",
    impact: "デジタルヘルスおよび病院インフラへの大規模な調達機会。",
    action: "サウジ保健省のデジタルトランスフォーメーション入札に応札する。",
    url: "https://www.mof.gov.sa/"
  },
  {
    id: "602",
    title: "アラブヘルス 2026 プレビュー",
    region: "Middle East",
    date: "2026-01-02",
    riskLevel: "Low",
    scenario: "アラブヘルス2026（2月9-12日）では、日本パビリオンが拡大される予定です。",
    impact: "MEA代理店に製品を披露する絶好の機会。",
    action: "ドバイに向けたブースデザインとマーケティング資料を確定する。",
    url: "https://www.arabhealthonline.com/"
  },
  {
    id: "603",
    title: "UAE 全国統一医療プラットフォーム",
    region: "Middle East",
    date: "2025-12-15",
    riskLevel: "Medium",
    scenario: "医療従事者向けの統一ライセンスプラットフォームが2026年Q2に開始予定。",
    impact: "UAE全土での医療スタッフの流動性が向上; 労働力の安定。",
    action: "臨床サポート業務の人材確保状況を監視する。",
    url: "https://gulfnews.com/"
  },
  {
    id: "604",
    title: "UAE デジタルヘルス戦略 2026",
    region: "Middle East",
    date: "2025-11-20",
    riskLevel: "Low",
    scenario: "ドバイ健康戦略2026は予防ケアと遠隔医療に焦点を当てています。",
    impact: "遠隔患者モニタリング（RPM）デバイスへの需要。",
    action: "DHA（ドバイ保健局）にRPMソリューションを提案する。",
    url: "https://www.dha.gov.ae/"
  },
  {
    id: "605",
    title: "ブラジル ANVISA 新認証ツール",
    region: "Latin America",
    date: "2025-11-01",
    riskLevel: "Medium",
    scenario: "ANVISAはSicertをSolicitaと統合された新ツールに置き換えました。",
    impact: "認証発行ワークフローの変更。",
    action: "ANVISA申請のための社内薬事SOPを更新する。",
    url: "https://www.gov.br/anvisa/"
  },
  {
    id: "606",
    title: "ブラジル RDC 848/2024 施行",
    region: "Latin America",
    date: "2025-10-10",
    riskLevel: "Medium",
    scenario: "新RDC 848/2024により、ブラジルはIMDRFの基本要件と整合しました。",
    impact: "技術文書要件の調和。",
    action: "技術ファイルをIMDRFのToC構造に合わせる。",
    url: "https://www.gov.br/anvisa/"
  },
  {
    id: "607",
    title: "メキシコ ニアショアリング投資 2026",
    region: "Latin America",
    date: "2026-01-05",
    riskLevel: "Low",
    scenario: "2026年は「ニアショアの年」と呼ばれ、日本企業の進出が拡大。",
    impact: "米国市場向け現地受託製造（CMO）の成長。",
    action: "バハ/バヒオ地域の受託製造拠点を調査する。",
    url: "https://www.panoramadvisors.com/"
  },
  {
    id: "608",
    title: "メキシコ MedTech市場成長",
    region: "Latin America",
    date: "2025-12-12",
    riskLevel: "Low",
    scenario: "メキシコのMedTech密度が上昇; 米国の需要により市場が成長。",
    impact: "地域サプライチェーンの強化。",
    action: "メキシコのクラスターから部品を調達する。",
    url: "https://www.entradagroup.com/"
  },
  {
    id: "609",
    title: "アフリカ 医療機器成長 2026",
    region: "Africa",
    date: "2026-01-04",
    riskLevel: "Low",
    scenario: "ケニアとナイジェリアは2026年に8%以上の年平均成長率（CAGR）が予測されています。",
    impact: "手頃な価格の診断機器に対する新興輸出市場。",
    action: "ラゴスとナイロビの代理店を特定する。",
    url: "https://www.fitchsolutions.com/"
  },
  {
    id: "610",
    title: "ケニア デジタルヘルス・イニシアティブ",
    region: "Africa",
    date: "2025-11-30",
    riskLevel: "Low",
    scenario: "ケニアはデジタルヘルスインフラの展開を継続しています。",
    impact: "多様なデジタルヘルスソリューションの機会。",
    action: "ケニアのeヘルスプロバイダーとの提携を模索する。",
    url: "https://www.health.go.ke/"
  }
];
