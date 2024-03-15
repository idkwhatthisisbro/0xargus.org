<script lang="ts">
	import { onDestroy } from 'svelte';
	import { fly, slide } from 'svelte/transition';

	const words = ['Ethereum', 'Solana', 'Arbitrum'];
	let currentWord = 0;

	let visible = true;
	let transitioning = false;

	const switchWord = () => {
		if (transitioning) return;
		
		transitioning = true;
		visible = false;

		setTimeout(() => {
			transitioning = true;
			visible = true;
			transitioning = false;
			currentWord = (currentWord + 1) % words.length; 
		}, 2000);
		
			currentWord = (currentWord + 1) % words.length; 
	};
	
	const interval = setInterval(switchWord, 4000);
	onDestroy(() => clearInterval(interval));
</script>

<div class="h-96 bg-black py-20">
	<div class="mx-auto max-w-4xl text-start">̊
		<h1 class="flex bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200 bg-clip-text text-3xl text-transparent sm:ml-12 font-outfit">
			Introducing RugPull Prevention Middleware for

			<div class="relative ml-2 mr-1 inline-flex whitespace-nowrap font-semibold">
				<span class="opacity-0">{words[currentWord]}</span>
				{#if visible}
					<div in:fly={{ y: '100%', duration: 500 }} out:fly={{ y: '-50%', duration: 500 }} class="absolute {currentWord === 0 && 'text-purple-500'} {currentWord === 1 && 'text-indigo-500'} {currentWord === 2 && 'text-blue-500'}">
						{words[currentWord]}
					</div>
				{:else}
					<div in:fly={{ y: '100%', duration: 500 }} out:fly={{ y: '-50%', duration: 500 }} class="absolute {currentWord === 0 && 'text-purple-500'} {currentWord === 1 && 'text-indigo-500'} {currentWord === 2 && 'text-blue-500'}">
						{words[currentWord]}
					</div>
				{/if}
			</div>
			.
		</h1>
	</div>
</div>
