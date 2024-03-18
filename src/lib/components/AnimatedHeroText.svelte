<script lang="ts">
	import { onDestroy } from 'svelte';
	import { fly } from 'svelte/transition';
	import { tweened } from 'svelte/motion';
	import { backOut } from 'svelte/easing';

	const words = ['Ethereum', 'Solana', 'Arbitrum'];
	let currentIndex = 0;

	let width = 0;

	let tweenedWidth = tweened(0, {
		duration: 500,
		easing: backOut
	});

	$: tweenedWidth.set(width);

	const interval = setInterval(() => (currentIndex = (currentIndex + 1) % words.length), 3000);

	onDestroy(() => clearInterval(interval));
</script>

<div class="relative mb-24 h-full text-center font-outfit text-4xl text-white sm:mt-8">
	<h1 class="bg-gradient-to-r from-neutral-50/80 via-neutral-200 to-neutral-50 bg-clip-text font-outfit text-4xl font-medium text-transparent">
		Introducing RugPull Prevention Middleware for

		<div class="relative z-50 inline-block h-full">
			<div class="relative z-[51]">
				{#key currentIndex}
					<div
						in:fly={{ y: 30, duration: 600, easing: backOut }}
						out:fly={{ y: -20, duration: 500 }}
						bind:clientWidth={width}
						class="absolute z-[100] h-32 font-outfit font-semibold"
						class:text-purple-500={words[currentIndex] === 'Ethereum'}
						class:text-indigo-500={words[currentIndex] === 'Solana'}
						class:text-blue-500={words[currentIndex] === 'Arbitrum'}>
						{words[currentIndex]}
					</div>
				{/key}
				<div style="width: {$tweenedWidth}px" />
			</div>
			<span class="relative text-white" style="left: {$tweenedWidth / 1.8}px">.</span>
		</div>
	</h1>
</div>
