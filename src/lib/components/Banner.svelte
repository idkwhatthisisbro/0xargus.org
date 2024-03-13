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
	<div
		class="-border-neutral-700 -border-b flex w-full transform items-center justify-center bg-indigo-950 font-outfit shadow transition-transform duration-300"
		class:-translate-y-full={!showBanner}
		id="banner">
		<!-- text wrapper -->
		<div class="flex w-full max-w-7xl items-center justify-center gap-2 p-2">
			<!-- <Megaphone color="white" /> -->
			<p class="flex text-sm font-medium tracking-wide text-indigo-50 sm:text-lg"><span class="mr-1">🎉</span> Whitelist Signups are now Live!</p>
		</div>
		<button class="absolute right-2 flex h-2 items-center text-indigo-200" on:click={close}>
			<X height="12px" />
		</button>
	</div>
</div>
