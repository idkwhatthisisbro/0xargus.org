<script lang="ts">
	import { writable } from 'svelte/store';
	import { goto } from '$app/navigation';
	import { AlertCircle, ArrowRight } from 'lucide-svelte';
	import { Circle } from 'svelte-loading-spinners';

	// Store for the email input value
	const email = writable('');
	// Store for the form submission state
	const isSubmitting = writable(false);
	// Store for form errors
	const formErrors = writable('');

	// Function to handle form submission
	async function handleSubmit() {
		const emailValue = $email;
		isSubmitting.set(true);
		// Simulate a 2-second loading state
		await new Promise((resolve) => setTimeout(resolve, 2000));
		// Redirect to the verification page with the email as a query parameter
		goto(`/verifications?e=${encodeURIComponent(emailValue)}`);
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<input
		placeholder="hello@moon.com"
		type="email"
		name="email"
		aria-invalid={$formErrors ? 'true' : undefined}
		bind:value={$email}
		class="w-full rounded-l-lg border border-zinc-700 bg-zinc-950 p-2 text-white duration-300 ease-in-out placeholder:text-zinc-400 hover:z-50 focus:z-50 focus:outline-none focus:ring-2 focus:ring-purple-500 sm:placeholder:text-zinc-700" />

	<button
		type="submit"
		disabled={$isSubmitting}
		class="h-full cursor-pointer rounded-r-lg border border-l-0 border-zinc-700 p-2 text-zinc-500 transition duration-300 ease-in-out hover:z-50 hover:scale-110 hover:bg-purple-500 hover:text-white focus:z-50 focus:scale-105 focus:border-l focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:cursor-not-allowed disabled:border-transparent disabled:bg-zinc-700 disabled:text-zinc-500 disabled:opacity-50 disabled:shadow-none disabled:hover:scale-100">
		{#if $isSubmitting}
			<Circle size="16" color="#fff" unit="px" duration="1s" />
		{:else}
			<ArrowRight />
		{/if}
	</button>
</form>

{#if $formErrors}
	<p class="mt-8 flex items-center justify-center gap-x-2 font-outfit text-base font-medium tracking-wide text-red-500">
		<AlertCircle />
		{$formErrors}
	</p>
{/if}
