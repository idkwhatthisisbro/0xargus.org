<script lang="ts">
	import BackgroundBeams from '$lib/components/ui/BackgroundBeams/BackgroundBeams.svelte';
	import WhitelistForm from '$lib/components/page/WhitelistForm.svelte';
	import { isSubscribed } from '$lib/stores/form';
</script>

<section
	id="join-whitelist"
	class="relative mt-12 flex h-[40rem] w-full flex-col items-center justify-center gap-24 pt-32 -antialiased">
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
			<div class="relative z-[32] w-full max-w-xl px-4 sm:px-0">
				<div
					class="mt-10 rounded-xl border border-white/[0.2] p-4 shadow-xl backdrop-blur-sm sm:mt-16 sm:p-5">
					<div class="flex items-center justify-between gap-4 sm:gap-6">
						<div class="flex items-center space-x-4">
							<div
								class="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 sm:h-12 sm:w-12">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-6 w-6 text-white sm:h-7 sm:w-7"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<div>
								<p class="text-base font-medium text-white sm:text-lg">Whitelist Confirmed</p>
								<p class="text-sm text-indigo-200 sm:text-base">You're all set for updates</p>
							</div>
						</div>
						<a
							href="/dashboard"
							class="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:px-5 sm:py-2.5 sm:text-base">
							View Status
						</a>
					</div>
				</div>
			</div>
		{/if}
	</div>

	<!-- FOOTER SLOT -->
	<slot name="footer" />

	<BackgroundBeams />
</section>
