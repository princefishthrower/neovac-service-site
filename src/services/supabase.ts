import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.GATSBY_SUPABASE_URL || 'https://qxqzjzqzjzqzjzqzjzqz.supabase.co'
const supabaseAnonKey = process.env.GATSBY_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4cXpqenF6anp6anp6anp6eiIsInJpZCI6MTIxMzIxMiwiaWF0IjoxNzIwMzYzNzYwLCJ1cmwiOiJodHRwczovL3N1cGFib3NhLmNvbS9hcGkifQ.5555555555555555555555555555555555555555'

export const supabase = createClient(supabaseUrl, supabaseAnonKey) 