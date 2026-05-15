import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jcajsxzpdwomjflumxsb.supabase.co";

const supabaseAnonKey =
  "sb_publishable_hVI5TUZ5hjZKN8dEhBaF9A_Pqr6t6vK";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);