<script lang="ts">
	import { onDestroy } from 'svelte';
	import { fly } from 'svelte/transition';

	const words = ['grow', 'perfect', 'improve'];
	let currentWord = 0;
	let visible = false;

	const switchWord = () => {
		currentWord = (currentWord + 1) % words.length;
		visible = true;
		setTimeout(() => {
			visible = false;
		}, 1000); // Adjust the duration as needed
	};

	const interval = setInterval(switchWord, 3000); // Adjust the interval duration as needed

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div class="flex h-96 items-center justify-center bg-black">
	<h1 class="h1 aos-init aos-animate ml-0 flex bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text pb-4 text-transparent sm:ml-12" data-aos="fade-down">
		Let your website
		<div class="relative mx-2.5 inline-flex whitespace-nowrap text-white">
			{#if visible}
				<div class="fade-up" in:fly={{ y: '100%', duration: 500 }} out:fly={{ y: '-100%', duration: 500 }}>
					{words[currentWord]}
				</div>
				<div class="fade-up absolute" in:fly={{ y: '100%', duration: 500 }} out:fly={{ y: '-100%', duration: 500 }}>
					{words[(currentWord + 1) % words.length]}
				</div>
			{/if}
		</div>
		itself
	</h1>
</div>

<!-- <div style="opacity: 1; transform: translateY(0%);">perfect</div>
			<div style="opacity: 1; transform: translateY(0%);">improve</div> -->

<style>
	.fly-up {
		transition:
			transform 0.5s ease,
			opacity 0.5s ease;
	}
</style>
