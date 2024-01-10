const { createClient } = require('@supabase/supabase-js');

// Replace 'YOUR_SUPABASE_URL' and 'YOUR_SUPABASE_KEY' with your actual Supabase URL and Key

const supabaseUrl = 'https://narivuecshkbtcueblcl.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5hcml2dWVjc2hrYnRjdWVibGNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU3MjAyMjAsImV4cCI6MjAxMTI5NjIyMH0.skPRKNsXkp1bVe3oNEAPo5kngqaStvPUQuzqo_puqLs"

// Create and export a function to initialize Supabase connection
function initializeSupabase() {
  return createClient(supabaseUrl, supabaseKey);
}

module.exports = initializeSupabase;
