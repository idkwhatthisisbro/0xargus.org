import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

export const supabase = createClient<Database>(
	PUBLIC_SUPABASE_URL,
<<<<<<< HEAD
	PUBLIC_SUPABASE_ANON_KEY
=======
	PUBLIC_SUPABASE_ANON_KEY,
>>>>>>> ed0a20cbbd33bbcc18a048621dde15fd00f0ea7c
);


export const signUp = async (email: string) => {
	const password = 'teCghv7xWMryQMAxCxfC'
	const user = await supabase.auth.signUp({email, password})

	return user
<<<<<<< HEAD
}

// export const getUser = async (email: string) => {
// 	const password = 'teCghv7xWMryQMAxCxfC'
// 	const user = await supabase.auth.getUser(email, password)

// 	return user
// }
=======
}
>>>>>>> ed0a20cbbd33bbcc18a048621dde15fd00f0ea7c
