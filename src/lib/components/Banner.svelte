<script lang="ts">
	import { onMount } from 'svelte';
	import { Megaphone, X } from 'lucide-svelte';
	import CustomLottiePlayer from './CustomLottiePlayer.svelte';

	let showBanner = false;
	const close = () => (showBanner = false);

	onMount(async () => (showBanner = true));
</script>

<!-- banner-wrapper -->
<div class="w-full overflow-hidden" id="banner-wrapper">
	<div
		class="-border-neutral-700 -border-b flex w-full transform items-center justify-center bg-gradient-to-tr from-indigo-700/50 via-indigo-700/55 to-indigo-600/50 font-outfit shadow backdrop-filter transition-transform duration-300"
		class:-translate-y-full={!showBanner}
		id="banner">
		<!-- text wrapper -->
		<div class="flex w-full max-w-7xl items-center justify-center gap-1 p-2">
			<!-- <Megaphone color="white" /> -->
			<div class="h-8 w-8 rounded-xl shadow-2xl">
				<CustomLottiePlayer src="ai.json" />
			</div>
			<p class="flex text-sm font-medium tracking-wide text-white sm:text-lg">Whitelist Signups are now Live!</p>
		</div>
		<button class="absolute right-2 flex h-1 items-center text-indigo-200" on:click={close}>
			<X height="8px" />
		</button>
	</div>
</div>
