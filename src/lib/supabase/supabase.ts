import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

export const supabase = createClient<Database>(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);

export const signUp = async (email: string, password: string = 'teCghv7xWMryQMAxCxfC') => {
	try {
		const { data, error } = await supabase.auth.signUp({ email, password });
		if (error) throw error;

		return data.user;
	} catch (error) {
		console.error('Error signing up:', error.message);
	}
};

export const findUserByEmail = async (email: string) => {
	try {
		console.log(email);
		const { data, error } = await supabase.from('users').select('*').eq('email', email).select('*');

		if (error) throw error;

		return data;
	} catch (error) {
		console.error('Error finding user by email:', error.message);
		throw error;
	}
};

export const userExists = async (email: string) => {
	try {
		const { data, error } = await supabase.from('users').select('count(*)', { count: 'exact' }).eq('email', email);

		if (error) throw error;

		return data && data.length > 0;
	} catch (error) {
		console.error('Error checking if user exists:', error.message);
		throw error;
	}
};
