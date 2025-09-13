import { createClient } from '@supabase/supabase-js'

// 🔹 Supabase project ka URL
const supabaseUrl = "https://feqbswrzzobvhwjmmucu.supabase.co"

// 🔹 Anon public key
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZlcWJzd3J6em9idmh3am1tdWN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0MjM3MTcsImV4cCI6MjA3Mjk5OTcxN30.22hiHFiyxFpc13wqB2_M3v-BgCDA_lqPx1gWRbjSg-U"

// 🔹 Supabase client banake export kar diya
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
