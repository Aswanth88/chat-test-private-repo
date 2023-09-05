import { createClient } from '@supabase/supabase-js';

const supabaseUrl = SUPABASE_URL;
const supabaseKey = SUPABASE_KEY;
const storage = typeof window !== 'undefined' ? window.localStorage : null;
const supabase = createClient(
    supabaseUrl,
    supabaseKey,

    { auth: { persistSession: false }
});

export { supabase };
