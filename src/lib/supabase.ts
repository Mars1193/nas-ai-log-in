import { createClient } from '@supabase/supabase-js';

// --- Environment Variables ---
// This code is now configured to securely read your credentials from a .env.local file.
// This is the standard and recommended way to handle secret keys in a Vite project.

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
export const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;


// --- Error Handling ---
// This check ensures your app doesn't run without the necessary credentials.
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL and Anon Key are not defined. Please create a .env.local file and add your credentials.');
}

// --- Initialize and Export Client ---
// This creates a single instance of the Supabase client for your entire application.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
