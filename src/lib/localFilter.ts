
export function isLocallyIrrelevant(title: string, source: string): boolean {
    const t = title.toLowerCase();
    const s = source.toLowerCase();

    // 1. SPORTS
    if (
        t.includes('cricket') || t.includes('football') || t.includes('soccer') ||
        t.includes('ipl 20') || t.includes('premier league') || t.includes('champions league') ||
        t.includes('world cup') || t.includes('tennis') || t.includes('badminton') ||
        t.includes('olympic') || t.includes('medal') || t.includes('score') ||
        t.includes('vs') || t.includes('highlights') || t.includes('wicket') ||
        t.includes('run chase') || t.includes('batting') || t.includes('bowling')
    ) return true;

    // 2. POLITICS / CRIME / GENERAL NEWS (unless specifically health/hospital mentioned)
    // NOTE: Be careful not to filter "Hospital Strike" or "Health Minister".
    // Safe filters:
    if (
        t.includes('election') || t.includes('vote') || t.includes('poll') ||
        t.includes('parliament') || t.includes('congress') || t.includes('bjp') ||
        t.includes('modi') || t.includes('gandhi') || t.includes('trump') ||
        t.includes('biden') || t.includes('putin') || t.includes('zelensky') ||
        t.includes('war') || t.includes('military') || t.includes('army') ||
        t.includes('police') || t.includes('arrest') || t.includes('murder') ||
        t.includes('killed') || t.includes('accident') || t.includes('crash') ||
        t.includes('blast') || t.includes('attack') // 'Heart attack' is medical, but 'Terror attack' is not. Hard to separate locally.
        // Let's keep 'attack' for now, usually it's terror/war in news.
    ) {
        // Exception: If title contains medical keywords, let it pass (e.g. "Nurse killed in accident")
        if (!hasMedicalKeyword(t)) return true;
    }

    // 3. ENTERTAINMENT / LIFESTYLE
    if (
        t.includes('movie') || t.includes('film') || t.includes('cinema') ||
        t.includes('actor') || t.includes('actress') || t.includes('star') ||
        t.includes('celebrity') || t.includes('song') || t.includes('trailer') ||
        t.includes('review') || t.includes('box office') || t.includes('fashion') ||
        t.includes('horoscope') || t.includes('zodiac') || t.includes('recipe')
    ) return true;

    // 4. BUSINESS (General)
    if (
        t.includes('stock server') || t.includes('market open') || t.includes('nifty') ||
        t.includes('sensex') || t.includes('crypto') || t.includes('bitcoin') ||
        t.includes('gold price') || t.includes('silver price') || t.includes('petrol')
    ) return true;

    return false;
}

function hasMedicalKeyword(title: string): boolean {
    const t = title.toLowerCase();
    const keywords = [
        'hospital', 'health', 'doctor', 'nurse', 'medical', 'patient', 'pharma',
        'drug', 'vaccine', 'virus', 'disease', 'cancer', 'surgery', 'clinic',
        'ministry of health', 'who ', 'who:', 'epidemic', 'pandemic', 'outbreak'
    ];
    return keywords.some(k => t.includes(k));
}
