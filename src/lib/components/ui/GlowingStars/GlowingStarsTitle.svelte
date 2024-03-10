<script lang="ts">
	import { cn } from '$lib/utils/cn';
	export let className = void 0;
</script>

<h2 class={cn('text-2xl font-bold text-[#eaeaea]', className)}>
	<slot />
</h2>
