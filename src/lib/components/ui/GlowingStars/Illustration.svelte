<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import Glow from './Glow.svelte';
	import Star from './Star.svelte';
	import { AnimatePresence } from 'svelte-motion';
	import { onDestroy, onMount } from 'svelte';
	import { writable } from 'svelte/store';
	export let mouseEnter;
	const stars = 108;
	const columns = 18;
	let glowingStars = [];
	const highlightedStars = writable([]);

	onMount(() => {
		const interval = setInterval(() => {
			$highlightedStars = Array.from({ length: 5 }, () => Math.floor(Math.random() * stars));
			glowingStars = [...$highlightedStars];
		}, 3e3);
		return () => clearInterval(interval);
	});
</script>

<div class="h-48 w-full p-1" style={`display: grid; grid-template-columns: repeat(${columns}, 1fr); gap: 1px;`}>
	{#each [...Array(stars)] as star, starIdx (`matrix-col-${starIdx}}`)}
		{@const isGlowing = glowingStars.includes(starIdx)}
		{@const delay = (starIdx % 10) * 0.1}
		{@const staticDelay = starIdx * 0.01}

		<div class="relative flex items-center justify-center">
			<Star isGlowing={mouseEnter ? true : isGlowing} delay={mouseEnter ? staticDelay : delay} />
			{#if mouseEnter}
				<Glow delay={staticDelay} />
			{/if}
			<AnimatePresence show={true}>
				{#if isGlowing}
					<Glow {delay} />
				{/if}
			</AnimatePresence>
		</div>
	{/each}
</div>
