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

	import { supabase } from '$lib/supabase';
	import type { RealtimeChannel } from '@supabase/supabase-js';
	import { page } from '$app/stores';

	export let data: PageData;

	const { open } = getContext<Context>('simple-modal');

	$: if ($page.url.searchParams.has('type')) {
		const typeCheck = $page.url.searchParams.get('type');

		if (typeCheck === 'verify_email' || typeCheck === 'confirmed_email') {
			open(Popup, { typeCheck });
		}
	}

	const { form, errors, constraints, delayed, submitting, message, enhance, reset } = superForm(data.form, {
		validators: zod(whitelistSchema),
		id: 'whitelist-hero',
		resetForm: false,

		onUpdate: async ({ form: formData }) => {
			const user = formData.data;
			// OPEN VERIFICATION MODAL
			// if (user.email_confirmed_at) {
			// 	open(Popup, { type: 'confirmed_email' });
			// }

			open(Popup, { form });
		},
		onUpdated: async ({ form: formData }) => {
			const user = formData.data;

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

								supabase.removeChannel(channel);
								resolve();
							}
						})
						.subscribe();
				});
			}

			reset();
		}
	});
</script>

<div class="my-20 flex w-full flex-col items-center justify-center gap-28 text-white">
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
