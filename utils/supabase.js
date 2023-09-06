require('dotenv').config();
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.publicRuntimeConfig.supabase.client.SUPABASE_URL;
const supabaseKey = process.env.publicRuntimeConfig.supabase.client.SUPABASE_KEY;

const storage = typeof window !== 'undefined' ? window.localStorage : null;
const supabase = createClient(
    supabaseUrl,
    supabaseKey,
    { auth: { persistSession: false } }
);

export { supabase };
