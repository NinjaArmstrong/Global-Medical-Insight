import { createClient } from '@supabase/supabase-js';

// Check if running in Node.js environment (server-side scripts)
const isNode = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;

if (isNode && !process.env.NEXT_PUBLIC_SUPABASE_URL) {
    require('dotenv').config({ path: '.env.local' });
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://example.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'example-key';

export const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
        persistSession: false,
    },
    ...(isNode ? {
        global: {
            fetch: (url, options) => {
                return fetch(url, options);
            }
        }
    } : {})
});
