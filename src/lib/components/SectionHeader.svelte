<script lang="ts">
	import { cn } from '$lib/utils/cn';
	let className = $$props.class || '';
	export let title = '';

	const words = title.split(' ');
	const halfwayIndex = Math.floor(words.length / 2);
	const splitIndex = words.length > 1 ? title.indexOf(words[halfwayIndex]) : Math.ceil(title.length / 2);

	const [titleWhite, titlePurple] = [title.slice(0, splitIndex), title.slice(splitIndex)];
	export let subtitle = '';
	export let image = '/head-lock-4.png';

	const x = ' bg-gradient-to-bl from-purple-500 via-purple-600 to-purple-800 bg-clip-text text-transparent';
	const y = 'text-neutral-300';
</script>

<section class={cn('mt-4 grid items-center justify-center gap-4 py-8 sm:mt-12 sm:py-16' + className)}>
	<!-- <img class="m-auto h-24 w-24" src={image} alt="header" /> -->
	<div class="grid items-center justify-center text-center">
		<h3 class={cn('z-[198] m-auto max-w-xl py-2 font-outfit text-4xl font-bold leading-snug sm:text-6xl', x)}>
			{titleWhite}
			<span class={y}>{titlePurple}</span>
		</h3>
		<p class="m-auto mt-4 max-w-4xl text-xl text-neutral-300 sm:mt-8 sm:text-3xl">{subtitle}.</p>
	</div>
</section>
