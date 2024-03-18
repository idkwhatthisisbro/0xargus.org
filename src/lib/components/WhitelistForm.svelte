<script lang="ts">
	import { superForm, type SuperValidated, type Infer } from 'sveltekit-superforms';
	import SuperDebug from 'sveltekit-superforms';
	import { zod } from 'sveltekit-superforms/adapters';
	import { whitelistSchema, type WhitelistSchema } from '$lib/schema.js';
	import { cn } from '$lib/utils/cn';
	import Popup from '$lib/components/Popup.svelte';
	import { getContext } from 'svelte';
	import type { Context } from 'svelte-simple-modal';
	import { supabase } from '$lib/supabase';
	import type { RealtimeChannel } from '@supabase/supabase-js';
	import type { PageData } from '../../routes/$types';
	import { ChevronRight, Circle, MailPlus } from 'lucide-svelte';
	import { page } from '$app/stores';

	export let data: SuperValidated<Infer<WhitelistSchema>>;
	export let id: string;

	const { open } = getContext<Context>('simple-modal');

	// $: if ($page.url.searchParams.has('type')) {
	// 	const typeCheck = $page.url.searchParams.get('type');

	// 	if (typeCheck === 'verify_email' || typeCheck === 'confirmed_email') {
	// 		open(Popup, { typeCheck });
	// 	}
	// }

	const { form, errors, constraints, delayed, submitting, message, enhance } = superForm(data, {
		validators: zod(whitelistSchema),
		id: id,
		resetForm: false,

		onUpdate: async ({ form: formData }) => {
			const user = formData.data;
			// OPEN VERIFICATION MODAL
			// if (user.email_confirmed_at) {
			// 	open(Popup, { type: 'confirmed_email' });
			// }

			console.log('onUpdate');

			open(Popup, { form });
		},
		onUpdated: async ({ form: formData }) => {
			const user = formData.data;

			console.log('onUpdated-start');

			if (!user.email_confirmed_at) {
				await new Promise<void>((resolve) => {
					let channel: RealtimeChannel;
					// Subscribe to email confirmation
					channel = supabase
						.channel('schema-db-changes')
						.on('postgres_changes', { event: 'UPDATE', schema: 'public' }, (payload) => {
							if (payload.new.id === user.id && payload.new.email_confirmed_at) {
								// Update form with new email_confirmed_at
								form.update(
									(form) => {
										$form.email_confirmed_at = payload.new.email_confirmed_at;
										return $form;
									},
									{ taint: false }
								);

								console.log('onUpdated-end');

								supabase.removeChannel(channel);
								resolve();
							}
						})
						.subscribe();
				});
			}
		}
	});

	$: console.log($form);
</script>

<SuperDebug data={$form} />

<form method="POST" use:enhance class="flex items-center justify-between">
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
