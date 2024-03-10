<script>
	import { Megaphone, X } from 'lucide-svelte';
	import { onMount } from 'svelte';

	let showBanner = false;
	const close = () => (showBanner = false);

	onMount(() => {
		showBanner = true;
	});
</script>

<!-- banner-wrapper -->
<div class="w-full overflow-hidden" id="banner-wrapper">
	<div class="flex w-full transform items-center justify-center bg-indigo-600 font-outfit shadow transition-transform duration-300" class:-translate-y-full={!showBanner} id="banner">
		<!-- text wrapper -->
		<div class="flex w-full max-w-7xl items-center justify-center gap-2 p-2">
			<!-- <Megaphone color="white" /> -->
			<p class="flex text-lg font-medium tracking-wide text-white brightness-100">🎉 Whitelist Signups are now Live!</p>
		</div>
		<button class="absolute right-2 flex h-2 items-center text-indigo-200" on:click={close}>
			<X height="12px" />
		</button>
	</div>
</div>
