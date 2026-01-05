import dotenv from 'dotenv';
import path from 'path';
import { summarizeArticleWithGemini } from '../src/lib/gemini.js';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function verifyPrompt() {
    console.log('--- Verifying New Antigravity Prompt ---');

    // A sample "boring" news article to test if the AI can make it "spicy"
    const sampleArticle = {
        title: "New robotic surgery system approved in Kenya",
        source: "Medical News Africa",
        url: "https://example.com/kenya-robot",
        content: `
            Nairobi, Kenya - The Kenyan Ministry of Health has approved the importation of a new robotic surgery system developed by a Chinese medical device manufacturer. 
            The system, known as 'DragonSurge', is expected to reduce surgery times by 20% and will be deployed in three major public hospitals in Nairobi. 
            Dr. Amara, a leading surgeon, stated, "This is a significant step forward for minimally invasive surgery in East Africa." 
            The system costs approximately $500,000, which is significantly cheaper than Western alternatives. 
            Training for local staff is set to begin next month. 
            Analysts predict this could open the door for more Chinese medical equipment in the region, challenging established players from Europe and the US.
        `
    };

    console.log('Input Article:', sampleArticle.title);

    try {
        const result = await summarizeArticleWithGemini(
            sampleArticle.title,
            sampleArticle.content,
            sampleArticle.url,
            sampleArticle.source
        );

        if (!result) {
            console.error('Result is null or undefined');
            return;
        }

        console.log('\n--- AI Response ---');
        console.log('TITLE:', result.title);
        console.log('CATEGORY:', result.category);
        console.log('REGION:', result.region);
        console.log('SUMMARY POINTS:', result.summary_points);
        console.log('\n--- IMPORTANCE (Analysis) ---');
        console.log(result.importance);
        console.log('\n--- JAPAN IMPACT (Next Action) ---');
        console.log(result.japan_impact);

        console.log('\n--- Verification ---');
        const analysis = result.importance || '';
        const impact = result.japan_impact || '';

        let score = 0;
        if (analysis.includes('【') || analysis.includes('Warning')) score++;
        if (impact.includes('Next Action') || impact.includes('Proposal')) score++;

        // Check for common Japanese medtech names (Terumo, Olympus, etc.)
        const companies = ['Olympus', 'Terumo', 'Takeda', 'Astellas', 'Canon', 'Fujifilm', 'Sysmex'];
        const foundCompany = companies.some(c => analysis.includes(c) || impact.includes(c) || analysis.includes(c) || result.title?.includes(c));

        if (foundCompany) score++;

        console.log(`Score: ${score}/3`);
        if (score >= 2) {
            console.log('SUCCESS: The prompt seems to be working as intended.');
        } else {
            console.warn('WARNING: The output might not show the requested "biting" style or company names. Check manually.');
        }

    } catch (e) {
        console.error('Error:', e);
    }
}

verifyPrompt();
