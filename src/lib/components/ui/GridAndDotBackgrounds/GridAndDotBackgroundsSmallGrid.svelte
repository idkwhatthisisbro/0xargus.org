<script lang="ts">
	export let showFade = true;
</script>

<div class="relative z-50 bg-white bg-grid-small-black/[0.2] dark:bg-neutral-950 dark:bg-grid-small-neutral-300/[0.2]">
	<!-- Radial gradient for the container to give a faded look -->
	{#if showFade}
		<div class="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#0a0a0a)] dark:bg-neutral-950"></div>
	{/if}
	<slot />
</div>
