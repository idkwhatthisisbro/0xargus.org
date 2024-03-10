<script lang="ts">
	import { cn } from '$lib/utils/cn';
	export let className = void 0;
</script>

<p class={cn('max-w-[64rem] text-base text-white', className)}>
	<slot />
</p>
