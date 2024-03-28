<script lang="ts">
	import { cn } from '$lib/utils/cn';
	let className = $$props.class || '';
	export let title = '';
	export let subtitle = '';
</script>

<section class={cn('z-[99] mt-20 flex w-full items-center justify-center sm:py-32' + className)}>
	<div class="grid items-center justify-center text-center">
		<h3 class="z-[98] m-auto max-w-xl bg-gradient-to-tr from-purple-500 via-purple-600 to-indigo-500 bg-clip-text font-outfit text-6xl font-bold leading-snug text-transparent">{title}</h3>
		<p class="mx-auto mt-8 max-w-4xl text-3xl text-neutral-300">{subtitle}.</p>
	</div>
</section>
