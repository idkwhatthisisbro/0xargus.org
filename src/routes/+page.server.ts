// +page.server.js
import { whitelistSchema } from '$lib/schema.js';
import { fail } from '@sveltejs/kit';
import { setError, message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { userSignUp } from '$lib/email.js';
/** @type {import('./$types').Actions} */

export const load = async () => {
	const form = await superValidate(zod(whitelistSchema));
	console.log('running load');

	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(whitelistSchema));
		console.log('running form action');

		if (!form.valid) return fail(400, { form });
		console.log('valid form');

		try {
			console.log(`running signUpResult ${form.data.email}`);
			const signUpResult = await userSignUp(form.data.email);
			return message(form, signUpResult);
		} catch (error) {
			console.log(error);
			if (error instanceof Error) {
				setError(form, 'email', error.message);
				return fail(400, { form });
			}
		}
	}
};
