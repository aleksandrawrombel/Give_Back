import { createClient } from '@supabase/supabase-js';

const supabaseURL = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseKEY = import.meta.env.VITE_SUPABASE_API_KEY as string;

const supabase = createClient(supabaseURL, supabaseKEY);

export default supabase;