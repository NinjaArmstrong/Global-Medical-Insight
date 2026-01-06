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
    id: "global-redsea-real-2025",
    title: "【グローバル】紅海・スエズ運河情勢：フーシ派攻撃継続と喜望峰ルートの常態化",
    region: "Global",
    company: "General Market",
    risk_level: 5, // High
    scenario: "フーシ派による商船攻撃が継続しており、主要海運会社はスエズ運河を回避し、喜望峰経由の迂回ルートを維持している。これによりアジア・欧州間の航行日数が約10〜14日増加している。",
    impact: "コンテナ運賃の高止まりとスケジュール遅延による在庫枯渇リスクが常態化。欧州製医療機器の輸入および原材料の調達に遅れが発生中。",
    action_item: "海上輸送の遅延を見越した発注リードタイムの再設定と、緊急時の航空輸送枠（Air Freight）の事前確保を推奨します。",
    source_url: "https://www.reuters.com/world/middle-east/red-sea-crisis",
    source_domain: "reuters.com",
    published_at: "2025-01-06T00:00:00Z"
  },
  {
    id: "us-baxter-iv-real-2025",
    title: "【北米】米国：ハリケーン被災のBaxter工場、9割の製造ラインが再稼働",
    region: "North America", // 北米
    company: "Baxter",
    risk_level: 3, // Medium
    scenario: "2024年秋のハリケーン「ヘリーン」で被災したBaxter社ノースカロライナ工場は復旧が進み、2025年1月時点で10ライン中9ラインが再稼働した。",
    impact: "一時の深刻な供給危機は脱しつつあるが、一部の特殊な輸液製剤については依然として出荷割り当て（Allocation）が継続されており、完全正常化は2025年第1四半期後半となる見込み。",
    action_item: "供給割り当て状況を週次で確認しつつ、緊急時の代替品（B. Braun等）との併用プロトコルを解除するタイミングを検討してください。",
    source_url: "https://www.baxter.com/baxter-newsroom/hurricane-helene-updates",
    source_domain: "baxter.com",
    published_at: "2025-01-05T00:00:00Z"

  },
  {
    id: "china-gallium-real-2025",
    title: "【東アジア】中国：対米ガリウム・ゲルマニウム輸出規制の一時停止措置",
    region: "East Asia", // 東アジア
    company: "General Market",
    risk_level: 3, // Medium
    scenario: "中国商務省は、ガリウム、ゲルマニウム、アンチモン等の対米輸出規制を2026年11月まで一時的に停止すると発表した（2025年11月時点の発表に基づく継続措置）。",
    impact: "一時的な供給懸念は緩和されたものの、依然として輸出ライセンス制度自体は維持されており、手続きによるリードタイムへの影響は残る。米中関係の変化による突発的な規制再開リスクは排除できない。",
    action_item: "規制停止期間中に在庫の戦略的積み増しを行うとともに、中国以外の調達ルート（第三国経由含む）の確保を継続してください。",
    source_url: "https://www.mining.com/china-lifts-export-ban-on-gallium-germanium-and-antimony-to-us/",
    source_domain: "mining.com",
    published_at: "2025-01-06T00:00:00Z"
  },
  {
    id: "africa-mpox-real-2025",
    title: "【アフリカ】コンゴ民主共和国等におけるMpox（サル痘）流行と監視継続",
    region: "Africa", // アフリカ
    company: "General Market",
    risk_level: 3, // Medium
    scenario: "コンゴ民主共和国（DRC）を中心にMpox（クレードIb）の感染が報告されており、WHOおよび各国保健当局が監視を継続中。欧米での散発的な輸入症例も確認されている。",
    impact: "物流拠点での検疫強化による輸送遅延リスクに加え、現地医療機関における診断キットやワクチンの局所的な需要急増が発生している。",
    action_item: "アフリカ中部・東部への渡航者に対する感染予防策の周知徹底と、物流ルート上の検疫状況のモニタリングを行ってください。",
    source_url: "https://www.who.int/emergencies/situations/monkeypox-oubreak-2022",
    source_domain: "who.int",
    published_at: "2025-01-04T00:00:00Z"
  },
  {
    id: "vietnam-power-real-2025",
    title: "【東南アジア】ベトナム：2025年の電力需給見通しとピーク時の予備率低下懸念",
    region: "Southeast Asia", // 東南アジア
    company: "General Market",
    risk_level: 3, // Medium
    scenario: "ベトナム電力公社（EVN）は2025年の電力需要増（+10%以上）に対応するため送電網強化を進めているが、北部地域ではピーク時の予備率が3-4%と低く、突発的な猛暑や燃料不足による需給逼迫リスクが残る。",
    impact: "2023年のような大規模な計画停電は回避される見通しだが、工業団地に対する節電要請や、瞬時電圧低下による精密機器（製造ライン）への影響に注意が必要。",
    action_item: "工場のUPS（無停電電源装置）の点検を実施し、夏季（5月-7月）のピークタイムにおける生産シフト調整の準備を行ってください。",
    source_url: "https://vpna.vn/en/vietnam-power-sector-2025/",
    source_domain: "vpna.vn",
    published_at: "2025-01-05T00:00:00Z"
  },
  {
    id: "eu-mdr-real-2025",
    title: "【欧州】EU医療機器規則（MDR）：移行期間終了に向けた認証ボトルネック",
    region: "Europe", // 欧州
    company: "General Market",
    risk_level: 3, // Medium
    scenario: "MDRへの移行期間（高リスク製品は2027年末まで延長）はあるものの、認証機関（Notified Body）のリソース不足は解消されておらず、審査待ちの滞留が続いている。",
    impact: "認証更新の遅れにより、一部の既存製品がEU市場から一時的に撤退するか、または企業が低収益製品の更新を断念しSKU削減（廃番）を行う動きが加速している。",
    action_item: "自社製品および取扱製品のMDR認証申請状況（Notified Bodyとの合意状況）を再棚卸しし、廃番リスクのある品目の代替品選定を進めてください。",
    source_url: "https://health.ec.europa.eu/medical-devices-sector_en",
    source_domain: "health.ec.europa.eu",
    published_at: "2025-01-05T00:00:00Z"
  }
];
