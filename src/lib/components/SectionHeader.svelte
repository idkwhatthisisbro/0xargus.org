<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let id = '';
	export let title = '';
	export let coloredPart = ''; // The part of the title that should be in a different color
	export let subtitle = '';
	export let titleMaxWidth = '';

	// Function to replace the first occurrence of the colored part with a span that has a different color
	function colorizeTitle() {
		const index = title.indexOf(coloredPart);
		if (index !== -1) {
			return `${title.slice(0, index)}<span class="bg-gradient-to-bl from-purple-500 via-purple-600 to-purple-800 bg-clip-text text-transparent">${coloredPart}</span>${title.slice(index + coloredPart.length)}`;
		}
		return title; // Return the original title if the colored part isn't found
	}
</script>

<section
	{id}
	class={cn('mt-4 grid w-full items-center justify-center gap-4 py-8 sm:mt-12 sm:py-16')}>
	<h2
		class={cn(
			'z-[198] mx-auto w-full py-2 text-center font-outfit text-4xl font-bold leading-snug text-neutral-300 sm:text-6xl',
			`${titleMaxWidth}`
		)}>
		{@html colorizeTitle()}
	</h2>

	<h3 class="m-auto mt-4 max-w-4xl text-center text-xl text-neutral-300 sm:mt-8 sm:text-3xl">
		{subtitle}
	</h3>
</section>
