<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import Illustration from './Illustration.svelte';
	export let className = void 0;
	let mouseEnter = false;
</script>

<div
	on:mouseenter={() => (mouseEnter = true)}
	on:mouseleave={() => (mouseEnter = false)}
	class={cn('h-full max-h-[20rem] w-full rounded-xl border border-neutral-300 p-4 dark:border-white/[0.2]', className)}>
	<div class="flex items-center justify-center">
		<Illustration {mouseEnter} />
	</div>
	<div class="px-2 pb-6"><slot /></div>
</div>
