<script lang="ts">
	export let showFade = true;
</script>

<div class="relative z-50 bg-neutral-950 bg-grid-neutral-800/[0.2]">
	<!-- Radial gradient for the container to give a faded look -->
	{#if showFade}
		<div class="pointer-events-none absolute inset-0 flex items-center justify-center bg-neutral-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#0a0a0a)]"></div>
	{/if}
	<slot />
</div>
