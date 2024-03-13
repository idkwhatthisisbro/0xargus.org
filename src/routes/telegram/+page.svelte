<script lang="ts">
	import { browser } from '$app/environment';
	import Popup from '$lib/components/Popup.svelte';
	import { whitelistSchema } from '$lib/schema';
	import { getContext, onMount } from 'svelte';
	import { superForm } from 'sveltekit-superforms';
	import { zod } from 'sveltekit-superforms/adapters';

	// @ts-ignore
	import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';

	let userId: number | undefined;
	let sendData: Telegram['WebApp']['sendData'] | undefined;

	onMount(() => {
		console.log(window.Telegram.WebApp.initDataUnsafe.user?.id);
		userId = window.Telegram.WebApp.initDataUnsafe.user?.id;
		sendData = window.Telegram.WebApp.sendData;
	});
	const handleSubmit = () => {
		step = 2;

		isVerified();
	};

	// TODO: Poll DB for verification result
	const isVerified = () => {
		// Lets Telegram Know to close the browser
		sendData && sendData('1');
	};

	const { form, errors, constraints, delayed, message } = superForm(
		{},
		{
			validators: zod(whitelistSchema),
			id: 'whitelist-telegram',
			onSubmit: ({}) => handleSubmit
		}
	);

	let step: 1 | 2 | 3 = 1;
</script>

<svelte:head>
	<script src="https://telegram.org/js/telegram-web-app.js"></script>
</svelte:head>

<!-- Looking at npm for some node based email verifiers might also be a good option -->
<!-- Zerobounce are like some companies that call validations verifications. there isn't a consistency of jargon -->

<!-- email verification tends to be more with auth providers, but twilio are both an auth provider and a smtp server -->
<!-- thats why i used em, they're the perfect solution -->
<!-- I looked into pva's people are charging $150+ -->

<!-- Make a thread on supabase discord, telling them about what we wanna do and what solution they recommend -->

<!-- Honestly, probably best to just work on copy, and then whitepaper -->

<!-- Then making the site effecient and responsive -->

<!-- Then we work on email shit -->

<!-- nah thats an excuse -->

hard to work on copy and communicate when you can't speak
<div class="flex h-screen flex-col items-center gap-4 overflow-hidden bg-neutral-950 px-12 py-8 font-outfit text-neutral-100">
	{#if browser}
		<!-- EMAIL INPUT -->
		{#if step === 1}
			<form method="POST">
				<input type="text" placeholder="email" class="rounded-sm px-2 py-1" />
				<button></button>
				{#if userId}
					<input type="hidden" name="tgId" value={userId} />
				{/if}
			</form>
		{/if}

		<!-- WAITING FOR RESPONSE -->
		{#if step === 2}
			<div class="w-32 rounded-lg">
				<LottiePlayer src="mail2.json" autoplay loop={true} renderer="svg" background="transparent" />
			</div>
			<p class="text-center text-3xl font-bold text-neutral-50">You're Almost There!</p>
			<p>Please verify your email to continue.</p>
		{/if}

		<!-- SUCCESS -->
		{#if step === 3}
			<div class="w-32 rounded-lg">
				<LottiePlayer src="mail2.json" autoplay loop={true} renderer="svg" background="transparent" />
			</div>
			<p class="text-center text-3xl font-bold text-neutral-50">Your in TG_FIRST_NAME!</p>
			<p>If selected to participate the presale, you'll be notified via email.</p>
		{/if}
	{/if}
</div>
