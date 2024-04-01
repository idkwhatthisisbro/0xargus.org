<script lang="ts">
	import 'context-filter-polyfill';
	import { onMount } from 'svelte';
	import { createNoise3D } from 'simplex-noise';

	export let colors = ['#a855f7', '#818cf8', '#c084fc', '#6366f1', '#a855f7'];
	export let backgroundFill = '#06000f';
	export let blur = 10;
	export let speed = 'fast';
	export let waveWidth = 75;
	export let waveOpacity = 0.5;

	const noise = createNoise3D();
	let w: number,
		h: number,
		nt: number = 0;
	let ctx: CanvasRenderingContext2D;
	let canvasRef: HTMLCanvasElement;
	const speedMap = { slow: 1e-3, fast: 2e-3 };

	const getSpeed = (): number => speedMap[speed] || 1e-3;
	const debounce = (func, delay) => {
		let debounceTimer;
		return function () {
			const context = this;
			const args = arguments;
			clearTimeout(debounceTimer);
			debounceTimer = setTimeout(() => func.apply(context, args), delay);
		};
	};

	const resizeCanvas = () => {
		w = ctx.canvas.width = window.innerWidth;
		h = ctx.canvas.height = window.innerHeight;
		ctx.filter = `blur(${blur}px)`;
		drawWave(5); // Redraw the waves on canvas resize
	};

	const drawWave = (n: number): void => {
		nt += getSpeed();
		for (let i = 0; i < n; i++) {
			ctx.beginPath();
			ctx.lineWidth = waveWidth;
			ctx.strokeStyle = colors[i % colors.length];
			for (let x = 0; x < w; x += 10) {
				// Increase step to sample noise less frequently
				const y = noise(x / 800, 0.3 * i, nt) * 100;
				ctx.lineTo(x, y + h * 0.5);
			}
			ctx.stroke();
			ctx.closePath();
		}
	};

	const render = (): void => {
		ctx.fillStyle = backgroundFill;
		ctx.globalAlpha = waveOpacity;
		ctx.fillRect(0, 0, w, h);
		drawWave(5);
	};

	onMount(() => {
		ctx = canvasRef.getContext('2d');
		resizeCanvas();
		window.addEventListener('resize', resizeCanvas); // Use addEventListener for resize
		const animate = () => {
			render();

			// requestAnimationFrame(animate);
		};
		animate(); // Initiate animation loop
		return () => {
			window.removeEventListener('resize', resizeCanvas); // Remove event listener on component unmount
		};
	});
</script>

<canvas class="absolute inset-x-0 -bottom-60 z-0 h-[500px] w-full" bind:this={canvasRef} id="canvas"></canvas>
