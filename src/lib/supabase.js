import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// `isSupabaseConfigured` lets the rest of the app degrade gracefully:
// before the client provides keys, the public site falls back to the
// bundled content.js and the admin panel shows a friendly notice.
export const isSupabaseConfigured = Boolean(url && anonKey);

export const supabase = isSupabaseConfigured
  ? createClient(url, anonKey)
  : null;

export const SITE_CONTENT_ID = "main";
export const IMAGE_BUCKET = "site-images";