import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hkjshlrvjeypvpvlevku.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhranNobHJ2amV5cHZwdmxldmt1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MjcyNDQ1OCwiZXhwIjoyMDA4MzAwNDU4fQ.-_bEcqUS7jLJfiORT7xM8Lpkfg-ZXib3es6q3Q3NRYA';
const storage = typeof window !== 'undefined' ? window.localStorage : null;
const supabase = createClient(
    supabaseUrl,
    supabaseKey,

    { auth: { persistSession: false }
});

export { supabase };
