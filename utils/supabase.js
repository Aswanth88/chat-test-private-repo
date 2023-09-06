require('dotenv').config();
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hkjshlrvjeypvpvlevku.supabase.co'; 
const supabaseKey = process.env.SUPABASE_KEY;

const storage = typeof window !== 'undefined' ? window.localStorage : null;
const supabase = createClient(
    supabaseUrl,
    supabaseKey,

    { auth: { persistSession: false }
});

export { supabase };
