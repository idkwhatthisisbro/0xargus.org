<script lang="ts">
	import BackgroundBeams from '$lib/components/ui/BackgroundBeams/BackgroundBeams.svelte';
	import WhitelistForm from '$lib/components/page/WhitelistForm.svelte';
	import { isSubscribed } from '$lib/stores/form';
</script>

<section
	id="join-whitelist"
	class="relative mt-12 flex h-[40rem] w-full flex-col items-center justify-center gap-24 pt-32 font-outfit -antialiased">
	<div class="mx-auto max-w-2xl p-4">
		<h1
			class="relative z-10 bg-gradient-to-b from-neutral-200 to-neutral-400 bg-clip-text text-center font-sans text-4xl font-bold text-transparent sm:to-neutral-600 sm:text-7xl">
			Join the waitlist
		</h1>

		<p
			class="relative z-10 mx-auto my-4 max-w-lg text-center text-sm text-neutral-300 sm:text-neutral-500">
			Join the 0xArgus waitlist now to become a genesis founding member. Getting a chance to
			participate in the presale, and beta programs.
		</p>
		{#if !$isSubscribed.subscribed}
			<WhitelistForm id="whitelist-footer" />
		{:else}
			<div
				class="mt-12 flex flex-col items-center justify-center rounded-xl border border-white/[0.2] p-4 shadow-xl sm:px-8">
				<p class="text-lg text-neutral-300">🎉 You are already subscribed to our whitelist.</p>
				<p class="text-base text-neutral-400">Stay tuned for updates!</p>
			</div>
		{/if}
	</div>

	<!-- FOOTER SLOT -->
	<slot name="footer" />

	<BackgroundBeams />
</section>
