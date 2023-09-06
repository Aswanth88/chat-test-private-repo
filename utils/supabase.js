require('dotenv').config();
import { createClient } from '@supabase/supabase-js';

const storage = typeof window !== 'undefined' ? window.localStorage : null;
const supabase = createClient(
    process.env.supabaseUrl,
    process.env.supabaseKey,

    { auth: { persistSession: false }
});

export { supabase };
