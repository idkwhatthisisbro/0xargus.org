import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data } = await supabase.from('users').select();
	// TODO: FAKE CALCULATION OF USER SIGNUPS
	return {
		users: data ? data.length * 3221 : 3219
	};
}
