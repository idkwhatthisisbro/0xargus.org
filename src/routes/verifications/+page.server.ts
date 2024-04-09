import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';
import { whitelistSchema } from '$lib/schema';
import { supabaseAdmin } from '$lib/server/supabase';

import type { Actions } from './$types';
import { Phone } from 'lucide-svelte';
import { supabase } from '$lib/supabase';
import { P } from '../../constants';

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
	return {
		form: await superValidate(zod(whitelistSchema))
	};
};

export const actions: Actions = {
	default: async (request) => {
		const form = await superValidate(request, zod(whitelistSchema));
		let phone;
		if (!form.valid) return fail(400, { form });

		try {
			// check if user exists
			const { data: user, error: userError } = await supabaseAdmin.from('users').select('*').eq('email', form.data.email).single();
			if (userError && !(userError?.code === 'PGRST116')) return fail(500, { form, error: 'Error fetching user' });

			switch (form.data._step) {
				// User does not exist, or already exists but has not verified email
				case 0:
					// if user does not exist or user hasn't verified, sign up
					if (!user || !user.email_confirmed_at) {
						const { data: newUser, error: signUpError } = await supabaseAdmin.auth.signUp({ email: form.data.email, password: P });
						if (!newUser.user || signUpError) return fail(500, { form, error: 'Error during sign up' });
					}

					break; // Missing break statement added
				// User is on next step, verify phone number
				case 1:
					if (!form.data.phone || !form.data.phone.number || user?.email) {
						return fail(400, { form, error: 'Phone number is required' });
					}

					// Sign in as its required to add users phone number to flow.
					await supabase.auth.signInWithPassword({ email: user?.email as string, password: P });
					// AUTH SUPABASE
					phone = form.data.phone.countryCode + form.data.phone.number;
					// Verification logic for phone number should be here
					const { data, error } = await supabase.auth.updateUser({
						phone
					});

					form.data._step = 2;

					break; // Placeholder break statement added
				// Final Step, verify OTP
				case 2:
					if (!form.data.phone || !form.data.phone.number) {
						return fail(400, { form, error: 'Phone number is required' });
					}
					phone = form.data.phone.countryCode + form.data.phone.number;

					if (form.data.phone.number && !user?.phone_confirmed_at) {
						// notify frontend that user is signed up and needs to confirm email
						if (form.data.phone.otp) {
							const response = await supabaseAdmin.auth.verifyOtp({ phone, token: form.data.phone.otp, type: 'sms' });

							if (response.error) {
								return fail(500, { form, error: 'Error verifying phone number' });
							}
						}
					}
					break; // Missing break statement added
			}

			return { form };
		} catch (error) {
			console.error(error);
			return fail(500, { error: 'An unexpected error occurred' });
		}
	}
};
