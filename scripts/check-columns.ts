
import { sql } from '@vercel/postgres';
import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

async function checkColumns() {
    try {
        console.log('🔍 Checking columns in articles table...');

        const result = await sql`
        SELECT column_name, data_type 
        FROM information_schema.columns 
        WHERE table_name = 'articles';
    `;

        console.log('Columns:');
        result.rows.forEach(row => {
            console.log(`- ${row.column_name} (${row.data_type})`);
        });

    } catch (error) {
        console.error('❌ Failed to check columns:', error);
    }
}

checkColumns();
