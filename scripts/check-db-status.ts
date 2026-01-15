
import { sql } from '@vercel/postgres';
import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

async function checkRecentArticles() {
    try {
        console.log('🔍 Checking for articles after 2026-01-08...');

        const result = await sql`
      SELECT date, region, title, created_at 
      FROM articles 
      WHERE date > '2026-01-08' 
      ORDER BY date DESC;
    `;

        console.log(`Found ${result.rows.length} articles since Jan 8.`);
        if (result.rows.length > 0) {
            result.rows.forEach(row => {
                console.log(`- [${row.date}] (${row.region}) ${row.title}`);
            });
        } else {
            console.log('⚠️ No articles found. The automation is likely failing.');
        }

        // Also check total count to ensure connection is good
        const count = await sql`SELECT count(*) FROM articles`;
        console.log(`Total articles in DB: ${count.rows[0].count}`);

    } catch (error) {
        console.error('❌ DB Check Failed:', error);
    }
}

checkRecentArticles();
