import { pg } from 'pg';
import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const { Client } = import.meta.require('pg');

async function check() {
    console.log('Connecting to Postgres...');
    if (!process.env.POSTGRES_URL) {
        console.error('POSTGRES_URL missing');
        return;
    }

    const client = new Client({
        connectionString: process.env.POSTGRES_URL,
        ssl: { rejectUnauthorized: false }
    });

    try {
        await client.connect();

        const res = await client.query('SELECT count(*) FROM articles');
        console.log('Total Articles:', res.rows[0].count);

        const res2 = await client.query('SELECT importance, count(*) FROM articles GROUP BY importance');
        console.log('Breakdown by Importance:');
        res2.rows.forEach(r => console.log(`  ${r.importance}: ${r.count}`));

        const res3 = await client.query('SELECT title, date, created_at FROM articles WHERE importance != \'PENDING_SUMMARY\' LIMIT 5');
        console.log('Sample Valid Articles:', res3.rows);

    } catch (e) {
        console.error('Error:', e);
    } finally {
        await client.end();
    }
}

check();
