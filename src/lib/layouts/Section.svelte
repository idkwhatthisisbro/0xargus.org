<script lang="ts">
	import { cn } from '$lib/utils/cn';
	let className = $$props.class || '';
</script>

<section class={cn('flex w-full items-center justify-center px-4 py-16 font-outfit sm:px-12 ' + className)}>
	<div class="grid w-full max-w-7xl">
		<slot />
	</div>
</section>
