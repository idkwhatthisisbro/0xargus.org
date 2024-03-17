import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';
import { whitelistSchema } from '$lib/schema';
import { supabaseAdmin } from '$lib/server/supabase';

import type { Actions } from './$types';

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
	const form = await superValidate(zod(whitelistSchema));

	return { form };
}

export const actions: Actions = {
	default: async (request) => {
		const form = await superValidate(request, zod(whitelistSchema));

		if (!form.valid) return fail(400, { form });

		try {
			// check if user exists
			const { data: { users }, error } = await supabaseAdmin.auth.admin.listUsers();
         const user = users.find((user) => user.email === form.data.email)
         
			// if user does not exist, sign up
         if (!user) {
            const { data, error } = await supabaseAdmin.auth.signUp({ email: form.data.email, password: form.data.password })
            // Return user and notify frontend that user is signed up and needs to confirm email
            form.data.user = {user: data.user, confirmationRequired: true, alreadyOnList: false};
            console.log(form);
				return { form };
         }

         // If user exists
			if (user) {
				// If user already confirmed email
				if (user.email_confirmed_at) {
					// Notify frontend that user is already on the list
					return { user, confirmationRequired: false,  alreadyOnList: true };
				}
				// If user did not confirm email yet
				if (user.email_confirmed_at === null) {
					// Notify frontend to check email for verification
					return { user, confirmationRequired: true, alreadyOnList: false };
				}
			}

         // Subscribe to email confirmation
			const channel = supabaseAdmin.channel('schema-db-changes').on('postgres_changes',
					{
						event: 'UPDATE',
						schema: 'public'
					},
					(payload) => {
                  console.log(payload.new);
                  
						if (user && payload.new.id === user.id) {
							// Notify frontend that email is confirmed
                     // console.log( {user, confirmationRequired: false, alreadyOnList: true });
							return { user, confirmationRequired: false, alreadyOnList: true };
						}
					}
				)
				.subscribe();

      } catch (e) {
         console.error(e);
         throw e;
      }   
   }
};