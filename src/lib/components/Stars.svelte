<script lang="ts">
	const starProperties = () => ({
		id: Math.random(),
		x: (Math.random() * (100 - 0) + 0).toFixed(2),
		y: (Math.random() * (100 - 0) + 0).toFixed(2),
		delay: (Math.random() * (2000 - 0) + 0).toFixed(2),
		duration: (Math.random() * (5 - 2) + 2).toFixed(2),
		brightness: (Math.random() * 0.5 - 0 + 0.5).toFixed(2)
	});

	export let numStars = 10;
	export let bgColour = 'bg-transparent';
	let stars = Array(numStars).fill(null).map(starProperties);
</script>

<div class="absolute h-full w-full overflow-hidden {bgColour}">
	{#each stars as star, i (star.id)}
		{@const position = starProperties()}
		<span
			class="absolute animate-spin"
			style="left: {position.x}%; top: {position.y}%; animation-duration: {position.duration}s; animation-delay: {position.delay}ms;"
			on:animationend={() => (stars[i] = starProperties())}>
			<svg
				class="animate-scale-in-out block"
				style="animation-duration: {position.duration}s;"
				width="20"
				height="20"
				viewBox="0 0 31 30"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M15.527 29.8867L16.4373 15.3762H14.5117L15.527 29.8867Z"
					fill="#FFFFFF"
					opacity={position.brightness}></path>
				<path
					d="M15.4395 0.883957L14.5117 15.377H16.4373L15.4395 0.883957Z"
					fill="#FFFFFF"
					opacity={position.brightness}></path>
				<path
					d="M30.0024 15.3394L15.4727 14.4128V16.3359L30.0024 15.3394Z"
					fill="#FFFFFF"
					opacity={position.brightness}></path>
				<path
					d="M0.962891 15.4268L15.4752 16.3359V14.4128L0.962891 15.4268Z"
					fill="#FFFFFF"
					opacity={position.brightness}></path>
			</svg>
		</span>
	{/each}
</div>

<style>
	@keyframes scaleInOutAnimation {
		0% {
			transform: scale(0);
			opacity: 0;
		}
		50% {
			transform: scale(1);
			opacity: 1;
		}
		100% {
			transform: scale(0);
			opacity: 0;
		}
	}
	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	.animate-scale-in-out {
		animation: scaleInOutAnimation ease-in-out both;
		animation-fill-mode: backwards;
		transform-origin: center;
	}
	.animate-spin {
		animation: spin linear both;
		animation-fill-mode: backwards;
		transform-origin: center;
	}
</style>
