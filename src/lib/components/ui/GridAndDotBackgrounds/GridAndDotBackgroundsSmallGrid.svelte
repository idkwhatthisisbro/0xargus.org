<script lang="ts">
	export let showFade = true;
</script>

<div class="relative z-50 bg-grid-neutral-800/10">
	<!-- Radial gradient for the container to give a faded look -->
	{#if showFade}
		<div class="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#0a0a0a)]"></div>
	{/if}
	<slot />
</div>
