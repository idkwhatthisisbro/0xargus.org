<script>
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	let svgHeight = 0;
	let scrollYProgress = 0;
	let lastScrollY = 0;
	let contentRef;

	const y1 = tweened(0, { duration: 500, easing: cubicOut });
	const y2 = tweened(0, { duration: 500, easing: cubicOut });

	onMount(() => {
		svgHeight = contentRef.offsetHeight;

		const handleScroll = () => {
			const currentScrollY = window.scrollY * 2;
			scrollYProgress = currentScrollY / (document.body.offsetHeight - window.innerHeight);
			const scrollDelta = currentScrollY - lastScrollY;
			lastScrollY = currentScrollY;

			const velo = Math.min(1, Math.abs(scrollDelta / 10));
			let dynamicLength = Math.max(1, scrollYProgress * svgHeight * 0.5);
			dynamicLength = Math.min(dynamicLength, svgHeight * 0.2);

			const baseY = scrollYProgress * (svgHeight - dynamicLength);

			y1.set(Math.max(0, baseY));
			y2.set(Math.min(svgHeight, baseY + dynamicLength));
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<svelte:window />

<div class="relative mx-auto mt-20 h-full w-full max-w-7xl">
	<div class=" absolute -right-32 top-3 mt-64 hidden sm:block">
		<div
			class="ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border border-neutral-200 shadow-sm"
			style="box-shadow: {scrollYProgress > 0 ? 'none' : 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}">
			<div
				class="h-2 w-2 rounded-full border border-neutral-300 bg-white"
				style="background-color: {scrollYProgress > 0 ? 'white' : 'var(--purple-500)'}; border-color: {scrollYProgress > 0 ? 'white' : 'var(--purple-600)'}">
			</div>
		</div>

		<svg viewBox={`0 0 20 ${svgHeight}`} width="20" height={svgHeight} class="ml-4 hidden lg:block" aria-hidden="true">
			<path d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.97} l -18 24V ${svgHeight}`} fill="none" stroke="#9091A0" stroke-opacity="0.16" />
			<path d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.97} l -18 24V ${svgHeight}`} fill="none" stroke="url(#gradient)" stroke-width="4" class="motion-reduce:hidden" />
			<defs>
				<linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1={$y1} y2={$y2}>
					<stop offset="0%" stop-color="transparent" stop-opacity="0"></stop>
					<stop offset="10%" stop-color="transparent" stop-opacity="1"></stop>
					<stop offset="0.325" stop-color="#6344F5"></stop>
					<stop offset="1" stop-color="#AE48FF" stop-opacity="0"></stop>
				</linearGradient>
			</defs>
		</svg>
	</div>

	<div bind:this={contentRef}>
		<slot />
	</div>
</div>
