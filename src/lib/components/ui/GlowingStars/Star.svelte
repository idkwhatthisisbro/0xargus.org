<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import { Motion } from 'svelte-motion';
	export let isGlowing;
	export let delay;
</script>

<Motion
	let:motion
	initial={{
		scale: 1
	}}
	animate={{
		scale: isGlowing ? [1, 1.2, 2.5, 2.2, 1.5] : 1,
		background: isGlowing ? '#fff' : '#666'
	}}
	transition={{
		duration: 2,
		ease: 'easeInOut',
		delay: delay
	}}>
	<div use:motion class={cn('relative z-20 h-[1px] w-[1px] rounded-full bg-[#666]')}></div>
</Motion>
