import { createClient } from "@supabase/supabase-js";

// URL do projeto e chave pública (anon) do Supabase.
// A chave "anon" é segura para ficar no código do site — ela só permite
// o que as políticas de segurança (RLS) do banco autorizarem.
const SUPABASE_URL = "https://rxwyxrkonehckvortsym.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4d3l4cmtvbmVoY2t2b3J0c3ltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg3MjI2MjAsImV4cCI6MjEwNDI5ODYyMH0.mwyYDqHhe1pcBM2d9W2NfVxgGRrgVI74JrJ8ri7ODjg";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const APP_STATE_ROW_ID = "main";
