require('dotenv').config();
import { createClient } from '@supabase/supabase-js';

const storage = typeof window !== 'undefined' ? window.localStorage : null;
const supabase = createClient(
    'https://hkjshlrvjeypvpvlevku.supabase.co',
    process.env.SUPABASE_KEY, 

    { auth: { persistSession: false } }
);

export { supabase };

