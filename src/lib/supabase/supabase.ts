import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

export const supabase = createClient<Database>(
	PUBLIC_SUPABASE_URL,
	PUBLIC_SUPABASE_ANON_KEY,
);


export const signUp = async (email: string) => {
	const password = 'teCghv7xWMryQMAxCxfC'
	const user = await supabase.auth.signUp({email, password})

	return user
}