<script lang="ts">
	import { writable } from 'svelte/store';
	import { goto } from '$app/navigation';
	import { AlertCircle, ArrowRight, ChevronRight, Clock, MailPlus } from 'lucide-svelte';
	import { Circle } from 'svelte-loading-spinners';
	import { cn } from '$lib/utils/cn';

	// Store for the email input value
	const email = writable('');
	// Store for the form submission state
	const isSubmitting = writable(false);
	// Store for form errors
	const formErrors = writable('');
	let inputElement: HTMLInputElement;

	export let id: 'whitelist-hero' | 'whitelist-footer';
	// Function to handle form submission
	async function handleSubmit() {
		const emailValue = $email;

		if (emailValue === '') {
			formErrors.set('Please enter your email');
			if (id === 'whitelist-hero' && inputElement) {
				inputElement.focus();
			}
			return;
		}

		isSubmitting.set(true);
		// Simulate a 750ms loading state
		await new Promise((resolve) => setTimeout(resolve, 750));
		// Redirect to the verification page with the email as a query parameter
		goto(`/verification?e=${encodeURIComponent(emailValue)}`);
	}
</script>

<p class="w-full p-2 text-sm text-slate-400 sm:hidden">
	Whitelisting has started, enter your email and join today!
</p>
<form
	class={cn(
		// classes for both forms
		'',
		// Additional classes for whitelist-hero form
		id === 'whitelist-hero' && [
			// Global
			'relative z-50 flex h-16 w-full justify-end rounded-3xl  px-4 py-4  shadow-2xl sm:max-w-[720px]'
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
	)}
	on:submit|preventDefault={handleSubmit}>
	<input
		bind:this={inputElement}
		placeholder="hello@example.com"
		type="email"
		name="email"
		aria-invalid={$formErrors ? 'true' : undefined}
		bind:value={$email}
		class={cn(
			// classes for both forms
			'',
			// Additional classes for whitelist-hero form
			id === 'whitelist-hero' && [
				// Global
				'absolute inset-0 h-full w-full rounded-3xl bg-transparent bg-gradient-to-tr from-slate-800/50 via-slate-900/55  to-gray-700/50 p-4 pl-8 text-xl text-white invalid:text-red-500',
				// Desktop
				// Mobile
				// Animations
				// Focus/Hover
				'placeholder:text-xl focus:outline-none focus:outline-indigo-500 focus:ring focus:ring-indigo-500'
			],
			// Additional classes for whitelist-footer form
			id === 'whitelist-footer' && [
				// Global
				'relative z-20 w-full rounded-l-lg border border-slate-700 bg-slate-950 p-2 text-white duration-300 ease-in-out placeholder:text-slate-400 sm:placeholder:text-slate-700',
				// Desktop
				// Mobile
				// Animations
				// Focus/Hover
				'hover:z-50 focus:z-50 focus:outline-none focus:ring-2 focus:ring-purple-500'
			]
		)} />

	<button
		type="submit"
		aria-label="submit"
		disabled={$isSubmitting}
		class={cn(
			// classes for both forms
			'',
			// Additional classes for whitelist-hero form
			id === 'whitelist-hero' && [
				// Global
				'absolute inset-y-0 right-0 flex items-center justify-center bg-transparent bg-gradient-to-tr from-slate-800/75 via-slate-900/75 to-gray-700/50 text-white shadow-2xl',
				// Desktop
				'-sm:rounded-l-none group transform font-bold tracking-wide sm:m-0 sm:h-full sm:w-auto sm:space-x-2 sm:rounded-3xl sm:border-0 sm:px-6 sm:py-2',
				// Mobile
				'my-auto mr-4 h-12  w-12 rounded-full border-2 border-white/[0.2] p-1',
				// Animations
				'transition duration-300 ease-in-out',
				// Focus/Hover
				'hover:scale-105 focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-500',
				'disabled:cursor-not-allowed disabled:border-transparent disabled:bg-slate-700 disabled:text-slate-500 disabled:opacity-50 disabled:shadow-none disabled:hover:scale-100'
			],
			// Additional classes for whitelist-footer forms
			id === 'whitelist-footer' && [
				// Global
				'z-10 h-full transform cursor-pointer rounded-r-lg border border-l-0 border-slate-700 p-2 text-slate-500 transition duration-300 ease-in-out',
				// Desktop
				// Mobile
				// Animations
				// Focus/Hover
				'hover:z-50 hover:scale-110 hover:bg-purple-500 hover:text-white focus:z-50 focus:scale-105 focus:border-l focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500'
			]
		)}>
		{#if id === 'whitelist-hero'}
			<p class="hidden font-semibold tracking-wider text-slate-300 sm:block">JOIN THE WHITELIST</p>
			{#if $isSubmitting}
				<Circle size="16" color="#fff" unit="px" duration="1s" />
			{:else}
				<div
					class="hidden rounded-full bg-slate-700 p-2 text-xs shadow-lg duration-200 ease-in-out group-hover:bg-slate-600 sm:block">
					<ArrowRight class="m-auto h-4 w-4 rounded-full text-xs" />
				</div>

				<!-- Mobile -->
				<ChevronRight class="h-5 w-5 text-slate-300 sm:hidden" />
			{/if}
		{/if}

		{#if id === 'whitelist-footer'}
			<ArrowRight />
		{/if}
	</button>
</form>

{#if id === 'whitelist-hero'}
	<div
		class="z-50 mt-8 hidden items-center justify-center gap-x-1 text-sm font-semibold italic tracking-wide text-slate-600 sm:flex">
		<!-- <Clock class="hidden w-3.5 sm:block" /> -->
		<p>
			<span class="inline-block self-stretch sm:hidden">Join the whitelist - </span> 1300/1500 eligible
			genesis founder slots remaining.*
		</p>
	</div>
{/if}
