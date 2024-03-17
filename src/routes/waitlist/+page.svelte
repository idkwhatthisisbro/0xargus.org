<script lang="ts">
	import type { PageData } from '../$types';

	import { superForm } from 'sveltekit-superforms';
	import { zod } from 'sveltekit-superforms/adapters';
	import { whitelistSchema } from '$lib/schema.js';

	import Popup from '$lib/components/Popup.svelte';
	import { ChevronRight, Circle, MailPlus } from 'lucide-svelte';
	import { cn } from '$lib/utils/cn';

	import { getContext } from 'svelte';
	import type { Context } from 'svelte-simple-modal';
	import SuperDebug from 'sveltekit-superforms';

	export let data: PageData;

	const { open } = getContext<Context>('simple-modal');

	const { form, errors, constraints, delayed, message, enhance } = superForm(data.form, {
		validators: zod(whitelistSchema),
		id: 'whitelist-hero',
		resetForm: false,
		onSubmit: ({ formData }) => {
			// console.log(formData);
			// open(Popup, { type: 'email-verification' })
		},
		onUpdate: ({ form }) => {
			// console.log(form);
		}
	});
</script>

<SuperDebug data={$form} />

<div class="flex h-20 w-full items-center justify-center bg-red-500 text-white">
	<form method="POST" use:enhance action="/waitlist" class="flex items-center justify-between">
		<input
			placeholder="hello@moon.com"
			type="email"
			name="email"
			aria-invalid={$errors.email ? 'true' : undefined}
			bind:value={$form.email}
			{...$constraints.email}
			class={cn(
				// Global
				'h-full w-full rounded-3xl bg-transparent text-white',
				// Desktop
				'p-4 pl-8 text-2xl',
				// Mobile
				'',
				// Animations
				'',
				// Focus/Hover
				'focus:outline-none focus:outline-indigo-500 focus:ring focus:ring-indigo-500'
			)} />

		<button
			type="submit"
			class={cn(
				// Global
				'flex items-center justify-center border-white bg-transparent bg-gradient-to-tr from-neutral-700 via-neutral-800 to-neutral-900 text-white shadow-2xl dark:border-neutral-400  dark:text-white',
				// Desktop
				'-sm:rounded-l-none group transform font-bold tracking-wide sm:m-0 sm:h-full sm:w-auto sm:space-x-2 sm:rounded-3xl sm:border-0 sm:px-6 sm:py-2',
				// Mobile
				'my-auto mr-4 h-12  w-12 rounded-full border-2 p-1',
				// Animations
				'transition duration-300 ease-in-out',
				// Focus/Hover
				'hover:scale-105 focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-500'
			)}>
			<!-- Desktop -->
			<p class="hidden tracking-widest sm:block">JOIN THE WHITELIST</p>
			{#if $delayed}
				<Circle color="white" />
			{:else}
				<div class="hidden rounded-full bg-neutral-700 p-2 text-xs shadow-lg duration-200 ease-in-out group-hover:bg-neutral-600 sm:block">
					<MailPlus class="m-auto h-4 w-4 rounded-full text-xs" />
				</div>

				<!-- Mobile -->
				<ChevronRight class="h-5 w-5 text-neutral-300 sm:hidden" />
			{/if}
		</button>
	</form>
</div>

<!-- 
	// let ui = writable<{ id: string | null; email: string | null; email_confirmed_at: string | null }>({ id: null, email: null, email_confirmed_at: null });

	// const testing = async (email: string) => {
	// 	let publicUsers = await findUserByEmail(emailAddress);

	// 	// if user is not found, sign them up
	// 	if (publicUsers.length === 0) {
	// 		const authUser = await signUp(emailAddress);
	// 		if (!authUser) return;

	// 		$ui.id = authUser.id;
	// 		$ui.email = authUser.email;
	// 	}
	// 	// if user is found
	// 	if (publicUsers.length === 1) {
	// 		$ui.id = publicUsers[0].id;
	// 		$ui.email = publicUsers[0].email;

	// 		// if user has confirmed email
	// 		if (publicUsers[0].email_confirmed_at) {
	// 			$ui.email_confirmed_at = publicUsers[0].email_confirmed_at;
	// 		}
	// 		// if user has not yet confirmed email
	// 		if (publicUsers[0].email_confirmed_at === null) {
	// 			// resend confirmation email and prompt user to check email
	// 			const authUser = await signUp(emailAddress);
	// 		}
	// 	}
	// };

	// const channel = supabase
	// 	.channel('schema-db-changes')
	// 	.on(
	// 		'postgres_changes',
	// 		{
	// 			event: 'UPDATE',
	// 			schema: 'public'
	// 		},
	// 		(payload) => {
	// 			if (payload.new.id === $ui.id) {
	// 				$ui.email_confirmed_at = payload.new.email_confirmed_at;
	// 			}
	// 		}
	// 	)
	// 	.subscribe(); -->
