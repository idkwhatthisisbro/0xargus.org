<script>
	import CustomLottiePlayer from '$lib/components/CustomLottiePlayer.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { beforeUpdate, tick } from 'svelte';
	let rendered = false;
	beforeUpdate(async () => {
		console.log('the component is about to update');
		await tick();
		rendered = true;
		console.log('the component just updated');
	});
</script>

{#if rendered}
	<div class="flex min-h-screen flex-col items-center justify-between p-4">
		<Navbar />
		<div class="-border flex min-h-[300px] max-w-[1000px] flex-col items-center justify-center rounded-2xl border-white/[0.2] p-4 py-8 text-center sm:p-12">
			<CustomLottiePlayer src="/4042.json" />
			<h1 class="mt-8 text-5xl font-bold text-white">Page Not Found</h1>
			<p class="mt-8 text-xl font-semibold text-neutral-300">Sorry, the page you were looking for could not be found.</p>
		</div>
		<Footer />
	</div>
{/if}
