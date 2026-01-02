
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logPath = path.resolve(__dirname, '../logs/api-history.jsonl');

interface LogEntry {
    timestamp: string;
    duration_seconds?: number;
    items_processed?: number;
    rate_limit_hits: number;
    status: string;
    error?: string;
}

function analyze() {
    if (!fs.existsSync(logPath)) {
        console.log('No history found yet.');
        return;
    }

    const content = fs.readFileSync(logPath, 'utf-8');
    const lines = content.split('\n').filter(l => l.trim().length > 0);
    const entries: LogEntry[] = lines.map(line => {
        try { return JSON.parse(line); } catch { return null; }
    }).filter(e => e !== null);

    console.log(`\n📊 API Usage Analysis (${entries.length} runs)`);
    console.log('=============================================');

    // Last 24 hours
    const now = new Date();
    const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    const recent = entries.filter(e => new Date(e.timestamp) > oneDayAgo);

    console.log(`Last 24h Runs: ${recent.length}`);

    const successes = recent.filter(e => e.status === 'SUCCESS');
    const failures = recent.filter(e => e.status === 'FAILED');

    console.log(`✅ Success: ${successes.length}`);
    console.log(`❌ Failed:  ${failures.length}`);

    const totalProcessed = successes.reduce((sum, e) => sum + (e.items_processed || 0), 0);
    const totalDuration = successes.reduce((sum, e) => sum + (e.duration_seconds || 0), 0);
    const total429s = recent.reduce((sum, e) => sum + (e.rate_limit_hits || 0), 0);

    console.log(`\nMetrics (24h):`);
    console.log(`- Total Items Processed: ${totalProcessed}`);
    console.log(`- Total 429 Errors:      ${total429s}`);

    if (totalProcessed > 0 && totalDuration > 0) {
        const avgTime = (totalDuration / totalProcessed).toFixed(1);
        console.log(`- Avg Time per Item:     ${avgTime}s (includes waits)`);
    }

    console.log('\nRecent Events:');
    recent.slice(-5).forEach(e => {
        const time = new Date(e.timestamp).toLocaleTimeString();
        console.log(`[${time}] ${e.status} (Items: ${e.items_processed || 0}, 429s: ${e.rate_limit_hits})`);
    });
}

analyze();
