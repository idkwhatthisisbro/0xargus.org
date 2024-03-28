<script lang="ts">
	import { cn } from '$lib/utils/cn';
	export let className = $$props.class || ''
</script>

<<<<<<< HEAD
<section class={cn('flex w-full items-center justify-center px-4 py-16 sm:px-12 ' + className)}>
	<div class="grid max-w-7xl">
=======
<section class={cn(`flex w-full items-center justify-center px-4 py-16 sm:px-12 ${className}`)}>
	<div class="grid w-full max-w-7xl">
>>>>>>> f1b3d16402d82009782dc1ac069f9a1dae54fa91
		<slot />
	</div>

	<slot name="background" />
</section>
