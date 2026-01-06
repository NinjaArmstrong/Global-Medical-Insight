
const { execSync } = require('child_process');
require('dotenv').config({ path: '.env.local' });

const PAT = process.env.GITHUB_PAT;
const REPO = 'NinjaArmstrong/Global-Medical-Insight';

if (!PAT) {
    console.error('Missing GITHUB_PAT');
    process.exit(1);
}

const cmd = `curl -X POST -H "Authorization: token ${PAT}" -H "Accept: application/vnd.github.v3+json" https://api.github.com/repos/${REPO}/actions/workflows/weekly-news.yml/dispatches -d "{\\"ref\\":\\"main\\"}"`;

try {
    console.log('Triggering GitHub Workflow...');
    execSync(cmd, { stdio: 'inherit' });
    console.log('✅ Triggered! Check Actions tab in GitHub.');
} catch (e) {
    console.error('Trigger Failed:', e);
}
