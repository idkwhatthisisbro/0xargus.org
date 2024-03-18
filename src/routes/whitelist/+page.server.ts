import { fail } from '@sveltejs/kit';
import { setError, superValidate } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';
import { whitelistSchema } from '$lib/schema';
import { supabaseAdmin } from '$lib/server/supabase';

import type { Actions } from './$types';

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
	return {
		form: await superValidate(zod(whitelistSchema))
	};
};

export const actions: Actions = {
	default: async (request) => {
		const form = await superValidate(request, zod(whitelistSchema));
		if (!form.valid) return fail(400, { form });

		console.log('1');

		try {
			// check if user exists
			const { data: user, error: userError } = await supabaseAdmin.from('users').select('*').eq('email', form.data.email).single();
			if (userError && !(userError?.code === 'PGRST116')) return fail(500, { form, error: 'Error fetching user' });

			console.log('2', user);

			// if user does not exist or user hasn't verified, sign up
			if (!user || !user.email_confirmed_at) {
				const { data: newUser, error: signUpError } = await supabaseAdmin.auth.signUp({ email: form.data.email, password: form.data.password });
				if (!newUser.user || signUpError) return fail(500, { form, error: 'Error during sign up' });

				form.data.id = newUser.user.id;

				console.log('3', newUser);
			}

			// notify frontend that user is signed up and needs to confirm email
			if (user) {
				form.data.id = user.id;
				console.log('4', user);
			}

			return { form };
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
};

// export const actions: Actions = {
// 	default: async (request) => {
// 		const form = await superValidate(request, zod(whitelistSchema));

// 		if (!form.valid) return fail(400, { form });

//       try {
// 			// check if user exists
// 			const { data: { users }, error } = await supabaseAdmin.auth.admin.listUsers();
//          const user = users.find((user) => user.email === form.data.email)

// 			// if user does not exist, sign up
//          if (!user) {
//             const { data, error } = await supabaseAdmin.auth.signUp({ email: form.data.email, password: form.data.password })
//             // notify frontend that user is signed up and needs to confirm email
//             form.data.id = data.user?.id
//             form.data.email_confirmed_at = data.user?.email_confirmed_at

//             return { form };
//          }

//          // If user exists
// 			if (user) {
//             form.data.id = user.id
//             form.data.email_confirmed_at = user.email_confirmed_at

//             return { form }
// 			}
//       } catch (e) {
//          console.error(e);
//          throw e;
//       }
//    }
// };
