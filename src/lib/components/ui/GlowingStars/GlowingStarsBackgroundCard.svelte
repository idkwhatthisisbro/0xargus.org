<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import Illustration from './Illustration.svelte';
	export let className = void 0;
	let mouseEnter = false;
</script>

<div
	role="presentation"
	on:mouseenter={() => (mouseEnter = true)}
	on:mouseleave={() => (mouseEnter = false)}
	class={cn('h-full w-full rounded-xl border border-white/[0.2] p-4', className)}>
	<div class="flex items-center justify-center">
		<Illustration {mouseEnter} />
	</div>
	<div class="grid items-end px-2 pb-6"><slot /></div>
</div>
