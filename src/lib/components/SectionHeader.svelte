<script lang="ts">
	import { cn } from '$lib/utils/cn';
	let className = $$props.class || '';
	export let title = '';
	export let subtitle = '';
</script>

<section class={cn('z-[51] mb-20 flex w-full items-center justify-center font-outfit sm:py-32 ' + className)}>
	<div class="grid items-center justify-center text-center">
		<h3 class="bg-gradient-to-tr from-purple-500 via-purple-600 to-indigo-500 bg-clip-text text-6xl font-bold text-transparent">{title}</h3>
		<p class="mt-6 text-3xl text-white">{subtitle}.</p>
	</div>
</section>
