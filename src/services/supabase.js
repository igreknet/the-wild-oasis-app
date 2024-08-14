import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://pozpveappnztntxvbnke.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvenB2ZWFwcG56dG50eHZibmtlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEwNDk0NjAsImV4cCI6MjAzNjYyNTQ2MH0.krzd8w1PCZZ6fdugTNi9uBwPiseEic7bNcqIGHozWHk';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
