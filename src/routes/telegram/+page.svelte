<script lang="ts">
	import { onMount } from 'svelte';
	import WhitelistForm from '$lib/components/page/WhitelistForm.svelte';
	import type { PageData } from '../$types';
	import BackgroundBeams from '$lib/components/ui/BackgroundBeams/BackgroundBeams.svelte';
	import { supabase } from '$lib/supabase';

	export let data: PageData;

	let user: WebAppInitData['user'];
	let viewportHeight: number;
	let registeredStatus = false;

	onMount(async () => {
		viewportHeight = window.Telegram.WebApp.viewportHeight;
		user = window.Telegram.WebApp.initDataUnsafe.user;
		if (!user) return;

		try {
			// check if user exists
			const { data, error } = await supabase
				.from('users')
				.select('*')
				.eq('tg_id', user?.id)
				.single();
			data ? (registeredStatus = true) : (registeredStatus = false);
		} catch (error) {}
	});
	import Stars from '$lib/components/Stars.svelte';
</script>

<svelte:head>
	<script src="https://telegram.org/js/telegram-web-app.js"></script>
</svelte:head>

<!-- <div class="w-full text-3xl text-white font-outfit flex flex-col items-center justify-center" style="height: {viewportHeight}px;">
   <h1>Hello, {user}!</h1>

   <WhitelistForm data={data.form} id='whitelist-webapp' />
</div> -->

<div class="relative flex h-[500px] items-center justify-center border-2 border-red-950">
	<h1 class="z-50 text-2xl text-white">Hello</h1>
	<Stars numStars={30} />
</div>

<!-- <nav class="absolute top-0 z-50 flex w-full items-center justify-start px-4 py-4">
	<img class="h-8 w-8" src="/logo.png" alt="logo" />
</nav>

<div style="height: {viewportHeight}px;" class="relative flex w-full flex-col items-center justify-center pt-32 font-outfit -antialiased">
	<div class="mx-auto p-4">
		<h1 class="relative z-10 bg-gradient-to-b from-neutral-200 to-neutral-400 bg-clip-text text-center font-sans text-3xl font-bold text-transparent sm:to-neutral-600 sm:text-7xl">
			Join the waitlist
		</h1>

		<p class="relative z-10 mx-auto my-2 max-w-lg text-center text-sm text-neutral-300 sm:text-neutral-500">
			Join the our waitlist now to become a genesis founding member and get a chance to participate in the presale and beta programs.
		</p>

		<WhitelistForm data={data.form} id="whitelist-footer" />
	</div>
	<BackgroundBeams />
</div> -->
