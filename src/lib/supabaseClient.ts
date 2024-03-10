import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
	'https://rzghccacifenrcnbinyn.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6Z2hjY2FjaWZlbnJjbmJpbnluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0NTE2ODUsImV4cCI6MjAyNTAyNzY4NX0.0NptDsICXCxqRS2Tw8v3mmUXwWYiG3XncbIbLZrbhFQ'
);
