<script lang="ts">
	import { cn } from '$lib/utils/cn';
	let className = $$props.class || '';
	export let title = '';
	export let subtitle = '';
</script>

<section class={cn('z-30 mt-20 flex w-full items-center justify-center py-8 sm:py-32' + className)}>
	<div class="grid items-center justify-center text-center">
		<h3 class="z-[98] m-auto max-w-xl bg-gradient-to-tr from-purple-500 via-purple-600 to-indigo-500 bg-clip-text font-outfit text-4xl font-bold leading-snug text-transparent sm:text-6xl">{title}</h3>
		<p class="mx-auto mt-8 max-w-4xl text-xl text-neutral-300 sm:text-3xl">{subtitle}.</p>
	</div>
</section>
