<script lang="ts">
	import { LucideBadgeAlert, X, MoveRight } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { PRESALE_DATE } from '../../constants';
	import { cn } from '$lib/utils/cn';

	let showBanner = false;
	let Countdown: typeof import('$lib/components/Countdown.svelte').default;
	const close = () => (showBanner = false);

	// lazy load the countdown to improve performance since the countdown doesn't come into view until mount anyway.
	onMount(async () => {
		showBanner = true;
		const countdownModule = await import('$lib/components/Countdown.svelte');
		Countdown = countdownModule.default;
	});
</script>

<div class="w-full overflow-hidden">
	<div
		class="flex w-full transform items-center justify-center bg-gradient-to-tr from-indigo-700/50 via-indigo-700/55 to-indigo-600/50 font-outfit shadow backdrop-filter transition-transform duration-300"
		class:-translate-y-full={!showBanner}>
		<div
			class={cn([
				// global
				'flex w-full max-w-7xl items-center justify-center p-2 text-white',
				// mobile
				'gap-1',
				// desktop
				'lg:gap-4'
			])}>
			{#if Countdown && showBanner}
				<Countdown from={PRESALE_DATE} dateFormat="YYYY-MM-DD H:m:s" zone="Etc/Universal" let:remaining>
					<div
						class={cn([
							'flex',
							// mobile
							'flex-col gap-2',
							// tablet & desktop
							'md:flex-row md:gap-4'
						])}>
						<div
							class={cn([
								'flex justify-center gap-4 font-outfit font-bold tracking-wide',
								// mobile
								'items-center text-sm',
								// desktop
								'md:items-end md:text-base'
							])}>
							{#if remaining.totalDays <= 7}
								<span
									class={cn([
										'flex items-center gap-2 rounded-full bg-indigo-500 py-1 font-outfit font-bold',
										// mobile
										'px-2 text-sm',
										// desktop
										'lg:px-3 lg:text-base'
									])}>
									<LucideBadgeAlert class="h-6 w-6 text-white" />
									LAST CHANCE
								</span>
							{/if}

							<p class="font-outfit text-sm font-bold tracking-wide md:hidden">$ARGUS PRESALE IN:</p>
						</div>

						<div
							class={cn([
								// global
								'flex gap-2',
								// mobile
								'',
								// desktop
								''
							])}>
							<div class="flex items-end gap-2">
								<p
									class={cn([
										'font-outfit font-bold tracking-wide',
										// mobile
										'hidden',
										// desktop
										'md:flex md:items-end md:justify-center md:gap-4 md:text-base'
									])}>
									$ARGUS PRESALE IN:
								</p>

								<div class="flex justify-between gap-2 md:w-[330px]">
									{#if remaining.done === false}
										<span class="flex grow items-baseline justify-center gap-1 text-sm text-indigo-500 lg:text-base">
											<span class="text-xl font-bold text-white lg:text-2xl">{remaining.totalDays}</span>
											{remaining.totalDays == 1 ? 'Day' : 'Days'}
										</span>

										<span class="flex grow items-baseline justify-center gap-1 text-sm text-indigo-500 lg:text-base">
											<span class="text-xl font-bold text-white lg:text-2xl">{remaining.hours}</span>
											Hours
										</span>

										<span class="flex grow items-baseline justify-center gap-1 text-sm text-indigo-500 lg:text-base">
											<span class="text-xl font-bold text-white lg:text-2xl">{remaining.minutes}</span>
											Mins
										</span>

										<span class="flex grow items-baseline justify-center gap-1 text-sm text-indigo-500 lg:text-base">
											<span class="text-xl font-bold text-white lg:text-2xl">{remaining.seconds}</span>
											Secs
										</span>
									{:else}
										<h2>The time has come!</h2>
									{/if}
								</div>
							</div>

							<a
								href="https://verifications.0xargus.org"
								class={cn([
									// mobile
									'flex w-max rounded-md border border-indigo-500 p-1',
									// desktop
									'lg:hidden'
								])}>
								<MoveRight height="24" width="24" />
							</a>
						</div>
					</div>
				</Countdown>
			{/if}
			<a
				href="https://verifications.0xargus.org"
				class={cn([
					// desktop
					'font-regular rounded-md border border-indigo-500 px-4 py-1 lg:flex',
					// mobile
					'hidden',
					// hover, transition
					'hover:scale-105 hover:transition hover:duration-300'
				])}>
				JOIN THE WHITELIST
			</a>
		</div>

		<button
			class={cn([
				// global
				'text-indigo-200',
				// mobile
				'hidden',
				// desktop
				'lg:absolute lg:right-2 lg:flex lg:items-center'
			])}
			on:click={close}>
			<X height="8px" />
		</button>
	</div>
</div>
