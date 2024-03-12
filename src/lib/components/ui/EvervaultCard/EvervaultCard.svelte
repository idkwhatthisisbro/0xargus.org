<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import { onMount } from 'svelte';

	export let text = '';

	let randomString = '';

	onMount(() => {
		randomString = generateRandomString(3000);

		const cont = setInterval(() => {
			randomString = generateRandomString(3000);
		}, 30000);

		return () => clearInterval(cont);
	});
	// $inspect(randomString);

	const generateRandomString = (length: number) => {
		const characters = '0123456789abcdef'; // Hexadecimal characters
		let result = '0x'; // Most blockchain addresses start with '0x'

		for (let i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * characters.length));
		}

		return result;
	};
</script>

<div class={cn('aspect-square  relative flex  h-full w-full items-center justify-center bg-transparent p-0.5')}>
	<div class="group/card relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl bg-transparent">
		<div class="pointer-events-none">
			<div class="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-100"></div>

			<div class="max-h-[32px]">
				<div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-700 brightness-75 backdrop-blur-xl transition duration-500 group-hover/card:opacity-100" />
			</div>

			<div class="">
				<div class="absolute inset-0 rounded-2xl mix-blend-overlay group-hover/card:opacity-100">
					<p class="absolute inset-x-0 h-full transform whitespace-pre-wrap break-words font-mono text-xs font-bold text-white transition duration-75 ease-in-out">
						{randomString}
					</p>
				</div>
			</div>
		</div>

		<div class="relative z-10 flex items-center justify-center">
			<div class="relative flex h-44 w-44 items-center justify-center rounded-full text-4xl font-bold text-white">
				<div class="absolute h-full w-full rounded-full bg-white/[0.8] blur-sm dark:bg-black/[0.8]" />
				{#if text}
					<span class="z-20 text-6xl text-black dark:text-white">{text}</span>
				{/if}
			</div>
		</div>
	</div>
</div>
