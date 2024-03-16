<script lang="ts">
<<<<<<< HEAD
=======
	import { onDestroy } from 'svelte';
>>>>>>> ed0a20cbbd33bbcc18a048621dde15fd00f0ea7c
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

<<<<<<< HEAD
	const interval = setInterval(() => currentIndex = (currentIndex + 1) % words.length, 1000);
=======
	const interval = setInterval(() => currentIndex = (currentIndex + 1) % words.length, 2000);
>>>>>>> ed0a20cbbd33bbcc18a048621dde15fd00f0ea7c

	onDestroy(() => clearInterval(interval));
</script>

<div class="h-96 bg-black py-20">
	<div class="mx-auto max-w-4xl text-start">
		<div class="flex gap-[5px] text-white">
			<h1 class="relative flex gap-[5px] bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200 bg-clip-text font-outfit text-3xl text-transparent sm:ml-12">
				Let your website

<<<<<<< HEAD
				<div class="relative">
					{#key currentIndex}
						<div
							in:fly={{ y: 20, duration: 500 }}
							out:fly={{ y: -20, duration: 500 }}
=======
				<div class="relative font-bold">
					{#key currentIndex}
						<div
							in:fly={{ y: 20, duration: 500,  easing: backOut }}
							out:fly={{ y: '-100%', duration: 500}}
>>>>>>> ed0a20cbbd33bbcc18a048621dde15fd00f0ea7c
							bind:clientWidth={width}
							class="absolute"
							class:text-purple-500={words[currentIndex] === 'Ethereum'}
							class:text-indigo-500={words[currentIndex] === 'Solana'}
							class:text-blue-500={words[currentIndex] === 'Arbitrum'}>
							{words[currentIndex]}
						</div>
					{/key}
					<div style:width="{$tweenedWidth}px" />
				</div>

				itself.
			</h1>
		</div>
	</div>
<<<<<<< HEAD
</div>
=======
</div>
>>>>>>> ed0a20cbbd33bbcc18a048621dde15fd00f0ea7c
