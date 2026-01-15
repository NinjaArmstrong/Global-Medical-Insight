
import { sql } from '@vercel/postgres';
import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

async function migrateSchema() {
    try {
        console.log('🚀 Starting Schema Migration...');

        // Add columns if they don't exist
        await sql`ALTER TABLE articles ADD COLUMN IF NOT EXISTS importance TEXT;`;
        console.log('✅ Added importance');

        await sql`ALTER TABLE articles ADD COLUMN IF NOT EXISTS original_title TEXT;`;
        console.log('✅ Added original_title');

        await sql`ALTER TABLE articles ADD COLUMN IF NOT EXISTS summary_points JSONB;`;
        console.log('✅ Added summary_points');

        await sql`ALTER TABLE articles ADD COLUMN IF NOT EXISTS japan_impact TEXT;`;
        console.log('✅ Added japan_impact');

        await sql`ALTER TABLE articles ADD COLUMN IF NOT EXISTS source_domain TEXT;`;
        console.log('✅ Added source_domain');

        await sql`ALTER TABLE articles ADD COLUMN IF NOT EXISTS published_at TIMESTAMPTZ;`;
        console.log('✅ Added published_at');

        await sql`ALTER TABLE articles ADD COLUMN IF NOT EXISTS category TEXT;`;
        console.log('✅ Added category');

        await sql`ALTER TABLE articles ADD COLUMN IF NOT EXISTS image_url TEXT;`;
        console.log('✅ Added image_url');

        // Add indices
        await sql`CREATE INDEX IF NOT EXISTS articles_importance_idx ON articles (importance);`;
        console.log('✅ Added index on importance');

        await sql`CREATE INDEX IF NOT EXISTS articles_published_at_idx ON articles (published_at DESC);`;
        console.log('✅ Added index on published_at');

        console.log('🎉 Migration Completed Successfully!');

    } catch (error) {
        console.error('❌ Migration Failed:', error);
    }
}

migrateSchema();
