import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL and API key are required.');
}
const storage = typeof window !== 'undefined' ? window.localStorage : null;
const supabase = createClient(
    supabaseUrl,
    supabaseKey,

    { auth: { persistSession: false }
});

export { supabase };
