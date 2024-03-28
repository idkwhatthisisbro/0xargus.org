<!-- Prevent the background of the wave from clipping -->
<div class="sm:mt-32" />

<!-- <ProductSummaryAndFeatures featureData={featureCards} /> -->

<!-- Product Summary + Features Start -->
<GridAndDotBackgroundsSmallGrid>
	<TracingBeam>
		<!-- PRODUCT SUMMARY SECTION -->
		<Section class="pb-12">
			<h2 class="bg-gradient-to-t from-purple-500 via-purple-600 to-indigo-500 bg-clip-text text-center font-outfit text-4xl font-bold text-transparent sm:text-6xl">
				Your Guardian in the DeFi Universe
			</h2>

			<p class="mx-auto mt-6 max-w-3xl text-center text-xl font-normal text-white sm:mt-16 sm:text-3xl">
				Our platform is the bridge to a safer DeFi experience, providing the robust protection you need to navigate the blockchain space with confidence.
			</p>

			<div class="mt-12 flex w-full flex-wrap gap-4 rounded-xl border border-dashed border-neutral-400 sm:mt-24">
				{#each ['1inch', 'metamask', 'uniswap', 'safepal'] as icon}
					<div class="flex flex-1 items-center justify-center border border-dashed border-neutral-400/5 px-2 py-8 sm:p-12">
						<img src="{icon}.svg" alt="icon-{icon}" class="h-[30px] saturate-0" />
					</div>
				{/each}
			</div>
		</Section>

		<!-- FEATURES SECTION-->
		<Section class="">
			<SectionHeader title="Features" subtitle="The first ever safety layer middleware" />

			<!-- FEATURES BENTO -->
			<div class="flex flex-col gap-4 gap-y-8 sm:gap-8">
				<!-- FEATURE CARDS -->
				<div class="grid grid-cols-1 gap-4 gap-y-8 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
					{#each featureCards as { circle, desc, tag }}
						<div class="relative flex h-[30rem] w-full flex-col items-start border border-black/[0.2] p-4 dark:border-white/[0.2]">
							<Icon class="absolute -left-3 -top-3 h-6 w-6 text-black dark:text-white" />
							<Icon class="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />
							<Icon class="absolute -right-3 -top-3 h-6 w-6 text-black dark:text-white" />
							<Icon class="absolute -bottom-3 -right-3 h-6 w-6 text-black dark:text-white" />

							<EvervaultCard text={circle} />

							<h2 class="mt-4 text-base font-light text-black dark:text-white">{desc}</h2>
							<p class="mt-4 rounded-full border border-black/[0.2] px-2 py-0.5 text-sm font-light text-black dark:border-white/[0.2] dark:text-white">{tag}</p>
						</div>
					{/each}
					<div class="group hidden md:block lg:hidden">
						<GlowingStarsBackgroundCard>
							<GlowingStarsTitle>Invest Fearlessly</GlowingStarsTitle>
							<div class="flex items-end justify-between">
								<GlowingStarsDescription>Feel safe investing in small coins. Seemlessly intergrate rugpull protection into all your favourite exchanges.</GlowingStarsDescription>
								<div class="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 p-2 duration-200 ease-in-out group-hover:bg-neutral-900">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4 stroke-2 text-white">
										<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
									</svg>
								</div>
							</div>
						</GlowingStarsBackgroundCard>
					</div>
				</div>

				<!-- GLOWING STARS CARD -->

				<a href="https://docs.0xargus.org" class="group block cursor-pointer md:hidden lg:block">
					<GlowingStarsBackgroundCard>
						<GlowingStarsTitle>Invest Fearlessly</GlowingStarsTitle>
						<div class="flex items-end justify-between">
							<GlowingStarsDescription>Feel safe investing in small coins. Seemlessly intergrate rugpull protection into all your favourite exchanges.</GlowingStarsDescription>
							<div class="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 p-2 duration-200 ease-in-out group-hover:bg-neutral-900">
								<a
									role="button"
									tabindex="0"
									aria-label="GLOWING to documentation"
									on:click={() => window.open('https://docs.0xargus.org', '_blank')}
									on:keydown={(event) => {
										if (event.key === 'Enter') window.open('https://docs.0xargus.org', '_blank');
									}}
									href="https://docs.0xargus.org"
									target="_blank"
									class="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 p-2 duration-200 ease-in-out group-hover:bg-neutral-900">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="h-4 w-4 stroke-2 text-white transition duration-200 group-hover:translate-x-0.5"
										aria-hidden="true">
										<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
									</svg>
								</a>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="h-4 w-4 stroke-2 text-white transition duration-200 group-hover:translate-x-0.5">
									<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
								</svg>
							</div>
						</div>
					</GlowingStarsBackgroundCard>
				</a>
			</div>
			<div />
		</Section>
	</TracingBeam>
</GridAndDotBackgroundsSmallGrid>
<!-- Product Summary + Features End -->

