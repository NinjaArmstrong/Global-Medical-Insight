
import { sql } from '@vercel/postgres';
import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

async function main() {
  try {
    console.log('🚀 Starting Database Setup...');
    // Create articles table
    await sql`
      CREATE TABLE IF NOT EXISTS articles (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        region VARCHAR(255) NOT NULL,
        country VARCHAR(255),
        title TEXT NOT NULL,
        url TEXT NOT NULL UNIQUE,
        date DATE NOT NULL,
        risk_level VARCHAR(50) NOT NULL,
        content_risk TEXT,
        content_impact TEXT,
        content_action TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    console.log('✅ "articles" table created successfully.');
  } catch (error) {
    console.error('❌ Database setup failed:', error);
    // Log the env var (masked) to help debug
    console.log("POSTGRES_URL: ", process.env.POSTGRES_URL ? "Set" : "Not Set");
  }
}

main();
