
import { sql } from '@vercel/postgres';
import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

async function diagnoseArticles() {
    try {
        console.log('🔍 Diagnosing recent articles...');

        const result = await sql`
      SELECT id, title, date, region, importance, risk_level, created_at
      FROM articles 
      ORDER BY created_at DESC
      LIMIT 10;
    `;

        console.log(`Found ${result.rows.length} recent articles.`);
        result.rows.forEach(row => {
            console.log(`ID: ${row.id}`);
            console.log(`  Title: ${row.title}`);
            console.log(`  Date: ${row.date}`);
            console.log(`  Importance: ${row.importance}`);
            console.log(`  Risk Level: ${row.risk_level}`);
            console.log(`  Created At: ${row.created_at}`);
            console.log('---');
        });

    } catch (error) {
        console.error('❌ Diagnosis Failed:', error);
    }
}

diagnoseArticles();
