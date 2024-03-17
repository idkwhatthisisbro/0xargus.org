<script lang="ts">
	import { onMount } from 'svelte';

   export let src: string;
   export let autoplay = true
   export let loop = true
   export let renderer = 'svg'
   export let background = 'transparent'
   export let classList = ''

	let LottiePlayer: typeof import('@lottiefiles/svelte-lottie-player');

	onMount(async () => {
		const module = await import('@lottiefiles/svelte-lottie-player');
		LottiePlayer = module.LottiePlayer;
	});
</script>

{#if LottiePlayer}
	<LottiePlayer {src} class={classList} {autoplay} {loop} {renderer} {background} />
{/if}
