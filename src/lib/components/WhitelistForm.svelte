<script lang="ts">
	import { superForm, type SuperValidated, type Infer } from 'sveltekit-superforms';
	import SuperDebug from 'sveltekit-superforms';
	import { zod } from 'sveltekit-superforms/adapters';
	import { whitelistSchema, type WhitelistSchema } from '$lib/schema.js';
	import { cn } from '$lib/utils/cn';
	import Popup from '$lib/components/Popup.svelte';
	import { ChevronRight, Circle, MailPlus, Clock, AlertCircle, ArrowRight } from 'lucide-svelte';
	import { getContext } from 'svelte';
	import type { Context } from 'svelte-simple-modal';
	import { supabase } from '$lib/supabase';
	import type { RealtimeChannel } from '@supabase/supabase-js';
	import { page } from '$app/stores';

	export let data: SuperValidated<Infer<WhitelistSchema>>;
	export let id: 'whitelist-hero' | 'whitelist-footer';
	export let debug = false;

	const { open } = getContext<Context>('simple-modal');

	// reopen modal if a user navigated to page from email link
	$: if ($page.url.searchParams.has('type')) {
		const typeCheck = $page.url.searchParams.get('type');

		if (typeCheck === 'confirmed_email') open(Popup, { type: typeCheck });
	}

	const { form, errors, constraints, delayed, submitting, message, enhance } = superForm(data, {
		validators: zod(whitelistSchema),
		id: id,
		resetForm: false,

		onUpdate: async ({ form: formData }) => {
			const user = formData.data;
			// OPEN VERIFICATION MODAL
			open(Popup, { data: form });
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
		}
	});

	$: console.log($form);
	// TODO: reset form on successful submission
	// 1. add verify_email to url once form submitted and modal open awaiting email confirmation
	// 2. if user navigates to the modal directly from url type=verify_email without having submitted form, enable email input to register or check if user exists
</script>

{#if debug}
	<SuperDebug data={$form} />
{/if}

<form
	method="POST"
	use:enhance
	class={cn(
		// classes for both forms
		'',
		// Additional classes for whitelist-hero form
		id === 'whitelist-hero' && [
			// Global
			'relative z-50 flex h-16 w-full justify-end rounded-3xl bg-neutral-900 px-4 py-4 font-outfit shadow-2xl sm:max-w-[720px]'
			// Desktop
			// Mobile
			// Focus/Hover
		],
		// Additional classes for whitelist-footer form
		id === 'whitelist-footer' && [
			// Global
			'mt-8 flex items-center justify-center'
			// Desktop
			// Mobile
			// Focus/Hover
		]
	)}>
	<input
		placeholder="hello@moon.com"
		type="email"
		name="email"
		aria-invalid={$errors.email ? 'true' : undefined}
		bind:value={$form.email}
		{...$constraints.email}
		class={cn(
			// classes for both forms
			'',
			// Additional classes for whitelist-hero form
			id === 'whitelist-hero' && [
				// Global
				'absolute inset-0 h-full w-full rounded-3xl bg-transparent p-4 pl-8 text-2xl text-white',
				// Desktop
				// Mobile
				// Animations
				// Focus/Hover
				'focus:outline-none focus:outline-indigo-500 focus:ring focus:ring-indigo-500'
			],
			// Additional classes for whitelist-footer form
			id === 'whitelist-footer' && [
				// Global
				'relative z-20 w-full rounded-l-lg border border-neutral-700 bg-neutral-950 p-2 text-white duration-300 ease-in-out placeholder:text-neutral-400 sm:placeholder:text-neutral-700',
				// Desktop
				// Mobile
				// Animations
				// Focus/Hover
				'hover:z-50 focus:z-50 focus:outline-none focus:ring-2 focus:ring-purple-500'
			]
		)} />

	<button
		type="submit"
		class={cn(
			// classes for both forms
			'',
			// Additional classes for whitelist-hero form
			id === 'whitelist-hero' && [
				// Global
				'absolute inset-y-0 right-0 flex items-center justify-center border-white bg-transparent bg-gradient-to-tr from-neutral-700 via-neutral-800 to-neutral-900 text-white shadow-2xl dark:border-neutral-400  dark:text-white',
				// Desktop
				'-sm:rounded-l-none group transform font-bold tracking-wide sm:m-0 sm:h-full sm:w-auto sm:space-x-2 sm:rounded-3xl sm:border-0 sm:px-6 sm:py-2',
				// Mobile
				'my-auto mr-4 h-12  w-12 rounded-full border-2 p-1',
				// Animations
				'transition duration-300 ease-in-out',
				// Focus/Hover
				'hover:scale-105 focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-500'
			],
			// Additional classes for whitelist-footer forms
			id === 'whitelist-footer' && [
				// Global
				'z-10 h-full transform cursor-pointer rounded-r-lg border border-l-0 border-neutral-700 p-2 text-neutral-500 transition duration-300 ease-in-out',
				// Desktop
				// Mobile
				// Animations
				// Focus/Hover
				'hover:z-50 hover:scale-110 hover:bg-purple-500 hover:text-white focus:z-50 focus:scale-105 focus:border-l focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:hover:bg-purple-500 dark:focus:border-purple-500 dark:focus:ring-2 dark:focus:ring-purple-500'
			]
		)}>
		{#if id === 'whitelist-hero'}
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
		{/if}

		{#if id === 'whitelist-footer'}
			<ArrowRight />
		{/if}
	</button>
</form>

{#if id === 'whitelist-hero'}
	{#if $message}
		<p class="z-50 mt-8 flex items-center justify-center gap-x-2 font-outfit text-base font-medium tracking-wide text-indigo-500">
			<Clock class="purple-500" /> Submittion Completed
		</p>
	{:else if $errors.email}
		<p class="z-50 mt-8 flex items-center justify-center gap-x-2 font-outfit text-base font-medium tracking-wide text-red-500"><AlertCircle /> {$errors.email.join('/n')}</p>
	{:else}
		<div class="z-50 mt-8 flex items-center justify-center gap-x-2 font-outfit text-base font-medium tracking-wide text-neutral-600">
			<Clock class="hidden w-5 sm:block" />
			<p>
				<span class="inline-block self-stretch sm:hidden">Join the whitelist - </span> 1300/1500 eligible genesis founder slots remaining.
			</p>
		</div>
	{/if}
{/if}
