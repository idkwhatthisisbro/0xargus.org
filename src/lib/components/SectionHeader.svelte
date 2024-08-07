<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let id = '';
	export let title = '';
	export let coloredPart = '';
	export let subtitle = '';
	export let titleMaxWidth = '';
	export let noPadding = false;
	export let my = 'my-16'; // Added default margin on y

	function colorizeTitle() {
		const index = title.indexOf(coloredPart);
		if (index !== -1) {
			return `${title.slice(0, index)}<span class="bg-gradient-to-r from-purple-400 to-indigo-600 bg-clip-text text-transparent">${coloredPart}</span>${title.slice(index + coloredPart.length)}`;
		}
		return title;
	}
</script>

<section
	{id}
	class={cn('relative flex items-center justify-center py-16 sm:py-24', my, {
		'px-4 sm:px-6 lg:px-8': !noPadding
	})}>
	<div class="bg- z-10 mx-auto flex w-full max-w-7xl justify-center">
		<div class="flex flex-col items-center justify-center text-center">
			<h2
				class={cn(
					'text-3xl  font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl',
					titleMaxWidth
				)}>
				{@html colorizeTitle()}
			</h2>
			{#if subtitle}
				<p class="mt-6 max-w-2xl text-xl text-gray-400">
					{subtitle}
				</p>
			{/if}
		</div>
	</div>
	<!-- <div class="absolute inset-0 -z-10">
		<div class="h-1/3 bg-gradient-to-b from-indigo-900/30" />
	</div> -->
	<!-- <div
		class="absolute left-1/2 top-0 -z-[100] -translate-x-1/2 blur-3xl xl:-top-6"
		aria-hidden="true">
		<div
			class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
	</div> -->
</section>
