import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
if (!supabaseUrl) {
  throw new Error('Supabase URL are required.');
}
if (!supabasekey) {
  throw new Error('Supabase key are required.');
}
const storage = typeof window !== 'undefined' ? window.localStorage : null;
const supabase = createClient(
    supabaseUrl,
    supabaseKey,

    { auth: { persistSession: false }
});

export { supabase };
