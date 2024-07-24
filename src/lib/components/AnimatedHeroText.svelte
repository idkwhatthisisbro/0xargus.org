<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { tweened } from 'svelte/motion';
	import { backOut } from 'svelte/easing';

	// DO NOT ADD WORDS THAT YOU WONT USE, AS IT RENDERS ALL WORDS
	const words = ['Ethereum', 'Solana', 'Arbitrum'];
	let currentIndex = 0;
	let width = 0;
	let started = false;

	let tweenedWidth = tweened(0, {
		duration: 500,
		easing: backOut
	});

	$: tweenedWidth.set(width);

	// Delay starting the animation to after the initial page has loaded
	onMount(() => {
		setTimeout(() => {
			started = true;
			const interval = setInterval(() => {
				currentIndex = (currentIndex + 1) % words.length;
			}, 3000);
			onDestroy(() => clearInterval(interval));
		}, 300); // delay the animation start slightly after mount to ensure it doesn't impact initial paint
	});
</script>

<div class="relative mb-20 h-full text-center text-4xl text-white sm:mt-6">
	<h1
		class="z-[100] min-h-12 bg-gradient-to-r from-neutral-50/80 via-neutral-200 to-neutral-50 bg-clip-text text-4xl font-medium leading-none text-transparent">
		Introducing RugPull Prevention Middleware for

		<div class="relative z-40 inline-block h-full">
			<div class="relative z-[51] ml-0.5 leading-none">
				{#if !started}
					<div class="absolute z-[100] h-32 font-bold text-brand-ethereum">Ethereum</div>
				{:else}
					{#key currentIndex}
						<div
							in:fly={{ y: 30, duration: 600, easing: backOut }}
							out:fly={{ y: -20, duration: 500 }}
							bind:clientWidth={width}
							class="absolute z-[100] h-32 font-bold leading-none"
							class:text-brand-ethereum={words[currentIndex] === 'Ethereum'}
							class:text-brand-solana={words[currentIndex] === 'Solana'}
							class:text-brand-arbitrum={words[currentIndex] === 'Arbitrum'}>
							{words[currentIndex]}
						</div>
					{/key}
				{/if}

				<div style="width: {$tweenedWidth}px" />
			</div>
			<span class="relative text-white" style="left: {$tweenedWidth / 1.8}px">.</span>
		</div>
	</h1>
</div>
