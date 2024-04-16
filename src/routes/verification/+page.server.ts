import { fail } from '@sveltejs/kit';
import { message, setError, superValidate } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';
import { whitelistSchema } from '$lib/schema';
import { supabaseAdmin } from '$lib/server/supabase';

import type { Actions } from './$types';
import { supabase } from '$lib/supabase';
import { P } from '../../constants';

// Step is known/changed in client, after a subscription - changes once in server
//
//
//

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ url }) => {
	const queryParams = url.searchParams;
	const email = queryParams.get('e');

	if (email) zod(whitelistSchema).defaults.email = email;

	return {
		form: await superValidate(zod(whitelistSchema))
	};
};

export const actions: Actions = {
	default: async (request) => {
		console.log('running');
		const form = await superValidate(request, zod(whitelistSchema));

		// message(form, 'Invalid form', { status: 403 });
		let phone;
		if (!form.valid) return fail(403, { form });

		try {
			// check if user exists
			const { data: user, error: userError } = await supabaseAdmin.from('users').select('*').eq('email', form.data.email).single();
			if (userError && !(userError?.code === 'PGRST116')) return fail(500, { form, error: 'Error fetching user' });

			switch (form.data.step) {
				// User does not exist, or already exists but has not verified email
				case 0:
					// if user does not exist or user hasn't verified, sign up
					if (!user || !user.email_confirmed_at) {
						const { data: newUser, error: signUpError } = await supabaseAdmin.auth.signUp({ email: form.data.email, password: P, options: { data: { name: form.data.name, step: form.data.step } } });
						if (!newUser.user || signUpError) return fail(500, { form, error: `Error during sign up: ${signUpError}` });
					} else {
						// @ts-ignore
						form.data.step = user.step;
						// @ts-ignore
						form.data.phone = user.step ? { number: '', otp: '' } : null;
					}

					break; // Missing break statement added
				// User is on next step, verify phone number
				case 1:
					// If somehow user is on step 1 without a phone number or email
					if (!form.data.phone || !user?.email) {
						message(form, 'Phone number is required', { status: 401 });
						return fail(401, { form, error: 'Phone number is required' });
					}

					phone = form.data.phone.number;
					// Verification logic for phone number
					if (form.data.phone.otp.length === 6) {
						console.log(form.data.phone.otp);
						const response = await supabaseAdmin.auth.verifyOtp({ phone, token: form.data.phone.otp, type: 'phone_change' });

						if (response.error) {
							form.data.phone.otp = '';
							message(form, 'Invalid Code', {
								status: 401
							});
							return fail(500, { form, error: 'Error verifying phone number' });
						}
					}
					// Sign in as its required to add users phone number to flow.
					const auth = await supabase.auth.signInWithPassword({ email: user?.email as string, password: P });

					// Calls if session is null, should never happen
					if (auth.error) {
						return setError(form, 'phone.number', 'Unknown Error | Please try again later or contact support support@0xargus.org', { status: 500 });
					}

					// Logic to update phone/send otp code
					const updateUser = await supabase.auth.updateUser({
						phone
					});

					// Called When User reused phone number on multiple accounts
					if (updateUser.error) {
						return setError(form, 'phone.number', updateUser.error?.message, { overwrite: true, status: 403 });
					}

					break;
			}

			return { form };
		} catch (error) {
			console.error(error);
			return fail(500, { error: 'An unexpected error occurred' });
		}
	}
};
