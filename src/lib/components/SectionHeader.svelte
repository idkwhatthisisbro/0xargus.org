<script lang="ts">
	import { cn } from '$lib/utils/cn';
	let className = $$props.class || '';
	export let title = '';
	export let subtitle = '';
	export let image = '/head-lock-4.png';
</script>

<section class={cn('mt-20 grid items-center justify-center gap-4 py-8 sm:py-32' + className)}>
	<!-- <img class="m-auto h-24 w-24" src={image} alt="header" /> -->
	<div class="grid items-center justify-center text-center">
		<h3 class="z-[198] m-auto max-w-xl bg-gradient-to-br from-purple-500 via-purple-600 to-purple-800 bg-clip-text py-2 font-outfit text-4xl font-bold leading-snug text-transparent sm:text-6xl">
			<!-- <h3 class="z-[98] m-auto max-w-xl bg-gradient-to-b from-indigo-600 via-indigo-700 to-indigo-800 bg-clip-text font-outfit text-4xl font-bold leading-snug text-transparent sm:text-6xl"> -->
			{title}
		</h3>
		<p class="m-auto mt-8 max-w-4xl text-xl text-neutral-300 sm:text-3xl">{subtitle}.</p>
	</div>
</section>
