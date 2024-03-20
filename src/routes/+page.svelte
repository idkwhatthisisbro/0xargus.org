<script lang="ts">
	import Banner from '$lib/components/Banner.svelte';
	import AnimatedHeroText from '$lib/components/AnimatedHeroText.svelte';
	import WhitelistForm from '$lib/components/WhitelistForm.svelte';
	import CustomLottiePlayer from '$lib/components/CustomLottiePlayer.svelte';
	import Section from '$lib/layouts/Section.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import WavyBackground from '$lib/components/ui/WavyBackground/WavyBackground.svelte';
	import GridAndDotBackgroundsSmallGrid from '$lib/components/ui/GridAndDotBackgrounds/GridAndDotBackgroundsSmallGrid.svelte';
	import TracingBeam from '$lib/components/ui/TracingBeam/TracingBeam.svelte';
	import { EvervaultCard, Icon } from '$lib/components/ui/EvervaultCard/';
	import { GlowingStarsBackgroundCard, GlowingStarsDescription, GlowingStarsTitle } from '$lib/components/ui/GlowingStars/';
	import BackgroundBeams from '$lib/components/ui/BackgroundBeams/BackgroundBeams.svelte';
	import Spotlight from '$lib/components/ui/SpotLight/Spotlight.svelte';
	import { Boxes } from 'lucide-svelte';
	import { cn } from '$lib/utils/cn.js';
	import { SvelteFlow, Background, type Node } from '@xyflow/svelte';
	import '@xyflow/svelte/dist/style.css';

	// import { Circle } from 'svelte-loading-spinners';
	import { writable } from 'svelte/store';
	import { MetaTags } from 'svelte-meta-tags';
	import type { PageData } from './$types.js';

	export let data: PageData;

	const howItWorkCards = [
		{
			title: 'Liquidity Withdrawals',
			desc: "Our system is designed  sm:p-4to detect any large-scale liquidity withdrawals. These are often a red flag for rug pulls, where token creators remove their liquidity from a market, causing the token's value to plummet. If such activity is detected, Argus will immediately execute a transaction to secure your holdings.",
			// img: 'https://www.dissentmagazine.org/wp-content/files_mf/1659985189666_GettyImages1241318592.jpeg'
			img: '/3d-1.png'
		},
		{
			title: 'Manipulating Token Functionalities',
			desc: 'We constantly monitor for any changes to the token contract. This includes unauthorized minting of new tokens, changes to transaction fees, or any other modifications that could potentially harm token holders. Our system will react to any such changes by securing your assets.',
			img: '3d-2.png'
		},
		{
			title: 'AI Algorithms',
			desc: 'Our AI algorithms are at the core of our platform. They continuously scan and learn from the entire Ethereum network, identifying patterns and behaviors associated with fraudulent activities. This allows us to constantly improve our detection capabilities and provide better protection for your assets. sm:p-4',
			img: '/3d-3.png'
			// lottie: 'ai.json'
		}
	];
	const featureCards = [
		{ circle: 'No', desc: 'Argus sees the drain before it happens – safeguarding your tokens from vanishing liquidity.', tag: 'Liquidity Pulls' },
		{
			circle: 'More',
			desc: "Don't let hidden changes erode your investment. Argus shields your tokens from malicious modifications.",
			tag: 'Contracts'
		},
		{
			circle: 'Rugs',
			desc: 'Fraudsters evolve, and so does Argus. Our AI analyzes the blockchain, adapting to protect you.',
			tag: 'Evolution'
		}
	];

	// We are using writables for the nodes and edges to sync them easily. When a user drags a node for example, Svelte Flow updates its position.
	let nodes = writable<Node[]>([
		{
			id: '1',
			type: 'input',
			data: { label: 'User subscribes contract via 0xArgus extension or Dapp' },
			position: { x: 0, y: 0 },

			// class: 'flex ring-2  font-outfit shadow-2xl ring-indigo-500 items-center justify-center rounded-full',
			style: 'color: #ffffff; background-color: transparent; z-index: 53;',
			class: 'flex ring-2 font-outfit shadow-2xl text-white ring-indigo-500 items-center justify-center rounded-xl',
			// @ts-ignore
			sourcePosition: 'bottom',
			// @ts-ignore
			targetPosition: 'top'
		},

		{
			id: 'A',
			type: 'default',
			data: { label: 'ArgusAI Scans for Fraudulent Activities' },
			// class: 'flex ring-2  font-outfit shadow-2xl ring-indigo-500 items-center justify-center rounded-xl',
			style: 'color: #ffffff; background-color: transparent; z-index: 53;',

			class: 'flex ring-2 font-outfit shadow-2xl bg-neutral-950 text-white ring-indigo-500 items-center justify-center rounded-xl',
			position: { x: 0, y: 175 },
			// @ts-ignore
			sourcePosition: 'bottom',
			// @ts-ignore
			targetPosition: 'top'
		},

		{
			id: 'A-1',
			data: { label: 'Front-Run Transaction - Returning the funds back to your wallet' },
			style: 'color: #ffffff; background-color: transparent; z-index: 53;',

			class: 'flex ring-2 font-outfit shadow-2xl bg-neutral-950 text-white ring-indigo-500 items-center justify-center rounded-xl',
			// class: 'flex ring-2  font-outfit shadow-2xl ring-indigo-500 items-center justify-center rounded-xl',
			position: { x: -200, y: 250 },
			parentNode: 'A',
			extent: 'parent',
			// @ts-ignore
			sourcePosition: 'top'
		},
		{
			id: 'A-2',
			expandParent: false,
			style: 'color: #ffffff; background-color: transparent; z-index: 53;',

			class: 'flex ring-2 font-outfit shadow-2xl bg-neutral-950 text-white ring-indigo-500 items-center justify-center rounded-xl',
			data: { label: 'Continue Monitoring' },
			position: { x: 200, y: 250 },
			parentNode: 'A',
			extent: 'parent',

			// @ts-ignore
			sourcePosition: 'top'
		}
	]);
	let nodesMobile = writable<Node[]>([
		{
			id: '1',
			type: 'input',
			data: { label: 'User subscribes contract via 0xArgus extension or Dapp' },
			position: { x: 0, y: 0 },

			// class: 'flex ring-2  font-outfit shadow-2xl ring-indigo-500 items-center justify-center rounded-full',
			class: 'flex ring-2 font-outfit ring-indigo-500 items-center justify-center rounded-xl',
			style: 'color: #ffffff; background-color: transparent; z-index: 53;',
			// @ts-ignore
			sourcePosition: 'bottom',
			// @ts-ignore
			targetPosition: 'top'
		},

		{
			id: 'A',
			type: 'default',
			data: { label: 'ArgusAI Scans for Fraudulent Activities' },
			// class: 'flex ring-2  font-outfit shadow-2xl ring-indigo-500 items-center justify-center rounded-xl',

			class: 'flex ring-2 font-outfit shadow-2xl bg-neutral-950 text-white ring-indigo-500 items-center justify-center rounded-xl',
			style: 'color: #ffffff; background-color: transparent; z-index: 53;',
			position: { x: 0, y: 175 },
			// @ts-ignore
			sourcePosition: 'bottom',
			// @ts-ignore
			targetPosition: 'top'
		},

		{
			id: 'A-1',
			data: { label: 'Front-Run Transaction - Returning the funds back to your wallet' },

			style: 'color: #ffffff; background-color: transparent; z-index: 53;',
			class: 'flex ring-2 font-outfit shadow-2xl bg-neutral-950 text-white ring-indigo-500 items-center justify-center rounded-xl',
			// class: 'flex ring-2  font-outfit shadow-2xl ring-indigo-500 items-center justify-center rounded-xl',
			position: { x: 0, y: 250 },
			parentNode: 'A',
			extent: 'parent',
			// @ts-ignore
			sourcePosition: 'top'
		}
	]);

	// same for edges
	const edges = writable([
		{
			id: '1-2',
			type: 'default',
			source: '1',
			target: 'A',
			animated: true,
			labelStyle: 'color: #ffffff; background-color: transparent; z-index: 53; border-radius: 30px; padding: 3px 10px; background-color: rgb(79 70 229 / var(--tw-bg-opacity));',
			label: 'Perm2 Stored Approval'
			// class: 'rounded-xl bg-blue-500 '
		},

		{
			id: '3-5',
			type: 'default',
			source: '3',
			target: '5',
			animated: true,
			labelStyle: 'color: #ffffff; background-color: transparent; z-index: 53; border-radius: 30px; padding: 3px 10px; background-color: rgb(79 70 229 / var(--tw-bg-opacity));',
			label: 'Argus Sentinal Activates'
		},
		// { id: 'a1-a2', source: 'A-1', target: 'A-2' },

		{
			id: '6',
			type: 'default',
			source: 'A',
			target: 'A-1',
			label: 'Detected',
			class: 'rounded-xl bg-red-500',
			labelStyle: 'color: #ffffff; background-color: transparent; z-index: 53; border-radius: 30px; padding: 3px 10px; background-color: rgb(79 70 229 / var(--tw-bg-opacity));',
			animated: true
		},
		{
			id: '5',
			type: 'default',
			source: 'A',
			target: 'A-2',
			label: 'Undetected',
			labelStyle: 'color: #ffffff; background-color: transparent; z-index: 53; border-radius: 30px; padding: 3px 10px; background-color: rgb(79 70 229 / var(--tw-bg-opacity));',
			animated: true
		}
	]);
	const edgesMobile = writable([
		{
			id: '1-2',
			type: 'default',
			source: '1',
			target: 'A',
			animated: true,
			labelStyle: 'color: #ffffff; background-color: transparent; z-index: 53; border-radius: 30px; padding: 3px 10px; background-color: rgb(79 70 229 / var(--tw-bg-opacity));',
			label: 'Perm2 Stored Approval'
			// class: 'rounded-xl bg-blue-500 '
		},
		{
			id: '3-5',
			type: 'default',
			source: '3',
			target: '5',
			animated: true,
			labelStyle: 'color: #ffffff; background-color: transparent; z-index: 53; border-radius: 30px; padding: 3px 10px; background-color: rgb(79 70 229 / var(--tw-bg-opacity));',
			label: 'Argus Sentinal Activates'
		},
		// { id: 'a1-a2', source: 'A-1', target: 'A-2' },

		{
			id: '6',
			type: 'default',
			source: 'A',
			target: 'A-1',
			label: 'Detected',
			class: 'rounded-xl bg-red-500',
			labelStyle: 'color: #ffffff; background-color: transparent; z-index: 53; border-radius: 30px; padding: 3px 10px; background-color: rgb(79 70 229 / var(--tw-bg-opacity));',
			animated: true
		},
		{
			id: '5',
			type: 'default',
			source: 'A',
			target: 'A-2',
			label: 'Undetected',
			labelStyle: 'color: #ffffff; background-color: transparent; z-index: 53; border-radius: 30px; padding: 3px 10px; background-color: rgb(79 70 229 / var(--tw-bg-opacity));',
			animated: true
		}
	]);
</script>

<!-- HERO -->
<MetaTags
	title="WhiteList Now Open"
	titleTemplate="0xArgus - %s"
	description="0xArgus Rug Pull Prevention Middleware for Ethereum, Solana, Arbitrum."
	canonical="https://0xargus.org"
	openGraph={{
		url: 'https://www.0xargus.org',
		title: '0xArgus',
		description: '0xArgus Rug Pull Prevention Middleware for Ethereum, Solana, Arbitrum.',
		images: [
			{
				url: 'https://0xargus.org/Banner.png',
				width: 840,
				height: 469,
				alt: 'Og Image Alt'
			}
		],
		siteName: '0xArgus'
	}}
	twitter={{
		handle: '@0xargusorg',
		site: '0xargus.org',
		cardType: 'summary_large_image',
		title: '0xArgus Rug Pull Prevention Middleware for Ethereum, Solana, Arbitrum.',
		description: '',
		image: 'https://0xargus.org/Banner.png',
		imageAlt: 'Twitter image alt'
	}} />

<main class={cn('relative z-30 flex min-h-screen w-full flex-col items-center justify-center bg-neutral-950 py-48 sm:h-screen sm:py-64')}>
	<!-- ANNOUNCEMENT BANNER & NAVBAR -->
	<div class="absolute top-0 flex w-full flex-col items-center gap-5">
		<Banner />

		<nav class="z-30 flex h-[72px] w-full max-w-7xl items-center justify-between px-[30px]">
			<img class="h-10 w-10" src="/logo-rounded.svg" alt="logo" />
			<button
				on:click={() => window.open('https://docs.0xargus.org', '_blank')}
				class="relative inline-flex h-12 w-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2 focus:ring-offset-white sm:w-auto">
				<span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#6366f1_0%,#a855f7_50%,#6366f1_100%)]" />
				<span class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 p-2 text-sm font-medium text-white backdrop-blur-3xl sm:px-3 sm:py-1">
					<Boxes class="text-xs sm:mr-2" />
					<p class="hidden sm:block">Documentation</p>
				</span>
			</button>
		</nav>
	</div>
	<!-- ANNOUNCEMENT BANNER & NAVBAR END -->

	<div class="w-full max-w-7xl">
		<div class="flex w-full flex-col items-center justify-center px-4 sm:px-0">
			<!-- HERO TITLE -->
			<div>
				<h1 class="relative z-[31] text-center font-saira text-6xl font-black text-neutral-50 md:text-7xl lg:text-9xl">0xArgus</h1>
				<div class="relative z-30 h-20 w-[40rem]">
					<div class="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
					<div class="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
					<div class="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-purple-500 to-transparent blur-sm" />
					<div class="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
				</div>
			</div>
			<!-- HERO TITLE END -->

			<!-- HERO TEXT -->
			<AnimatedHeroText />
			<!-- HERO TEXT END -->

			<!-- WHITELIST BUTTON -->
			<WhitelistForm data={data.form} id="whitelist-hero" />
			<!-- WHITELIST BUTTON END -->
		</div>
	</div>

	<!-- TODO: Make this effecient -->
	<WavyBackground />
</main>
<!-- HERO END -->

<!-- Prevent the background of the wave from clipping -->
<div class="sm:mt-32" />

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
<Section class="relative pb-0">
	<img src="/test3.png" class="absolute inset-x-0 top-32 h-32 w-full blur-md sm:top-64" alt="gradient" />
	<img class="absolute -bottom-96 -right-[20rem] z-[55] opacity-40 sm:-right-[40rem]" alt="gradient" src="/blur2.svg" />
	<img class="absolute -left-[15rem] top-[45rem] z-[55] opacity-75 sm:-bottom-16 sm:-left-[35rem] sm:top-auto" alt="gradient" src="/blur.svg" />

	<!-- <Spotlight fill="#a855f7" className="blur-3xl absolute z-[51]" /> -->

	<SectionHeader title="How It Works" subtitle="A basic overview of the technicals" />
	<div class="relative right-0 flex h-[1150px] w-full items-center justify-center overflow-hidden sm:hidden">
		<SvelteFlow
			style="background-color: #00000000; z-index: 52;"
			attributionPosition="bottom-right"
			nodes={nodesMobile}
			fitView
			fitViewOptions={{ minZoom: 100, duration: 2 }}
			edges={edgesMobile}
			nodesDraggable={false}
			nodesConnectable={false}
			elementsSelectable={false}>
			<Background patternColor="#0a0a0a" bgColor="#00000000" />
		</SvelteFlow>

		<!-- Hide Attribution -->
		<div class="absolute bottom-0 right-0 z-[53] h-12 w-20 bg-neutral-950" />
		<!-- Overlay to prevent moving -->
		<div class="absolute inset-0 z-[53]" />
	</div>
	<div class={'svelte-flow-container relative hidden w-full items-center justify-center overflow-hidden sm:flex sm:h-[1000px]'}>
		<SvelteFlow
			style="background-color: #00000000; z-index: 52;"
			attributionPosition="bottom-right"
			{nodes}
			fitView
			fitViewOptions={{ duration: 2 }}
			{edges}
			nodesDraggable={false}
			nodesConnectable={false}
			elementsSelectable={false}>
			<!-- <Background bgColor="#00000000" /> -->
		</SvelteFlow>

		<!-- Hide Attribution -->
		<div class="absolute bottom-0 right-0 z-[53] h-12 w-20 bg-neutral-950" />
		<!-- Overlay to prevent moving -->
		<div class="absolute inset-0 z-[53]" />
	</div>
</Section>

<Section class="relative">
	<SectionHeader class="" title="2024 Is the Year For Crypto" subtitle="Be the first to join the revolution for a scam free market" />
	<div class="flex flex-col flex-wrap items-center justify-center text-white">
		{#each howItWorkCards as card}
			<!-- Card -->
			<div
				class={cn(
					'mt-12 flex w-full flex-col items-center overflow-hidden rounded-3xl border-2 shadow-lg md:w-auto  md:flex-row md:p-24 dark:border-white/[0.2]',
					'gap-y-12 rounded-xl bg-indigo-950/10 py-12 transition duration-200 ease-in-out hover:shadow-[0_0_60px_-15px_hsla(274,66%,32%,0.6)] sm:p-4 md:gap-x-12 md:gap-y-0 md:rounded-3xl md:p-10 md:even:flex-row-reverse',
					'group container backdrop-blur-3xl backdrop-filter'
				)}>
				<!-- BG Blur -->
				<div
					class="absolute -bottom-[20rem] z-0 aspect-1 h-auto w-[40rem] bg-[radial-gradient(ellipse_at_center,_#581c87_0%,transparent_70%)] blur-3xl group-odd:-right-[20rem] group-odd:left-auto group-even:-left-[20rem] group-even:right-auto sm:-top-[20rem]" />
				<!-- Image -->
				{#if card.img}
					<div class="min-w-[28rem] md:p-4">
						<div class="-mt-12 h-96 w-full overflow-hidden rounded-xl bg-contain bg-center bg-repeat-y drop-shadow-xl sm:m-0" style={`background-image: url(${card.img})`}></div>
					</div>
				{:else}
					<div class="h-96 max-w-96 rounded-xl p-4 drop-shadow-2xl">
						<CustomLottiePlayer src="ai.json" />
					</div>
				{/if}

				<!-- Text -->
				<div class="z-50 space-y-4 p-4 text-neutral-300">
					<p class="text-center text-3xl font-semibold md:text-left">{card.title}</p>
					<div class="max-w-lg text-center leading-relaxed md:text-left">
						{card.desc}
					</div>
				</div>
			</div>
		{/each}
	</div>
</Section>

<!-- FOOTER START -->
<section class="relative z-50 mt-12 flex h-[40rem] w-full flex-col items-center justify-center bg-neutral-950 pt-32 font-outfit -antialiased">
	<div class="w-full">
		<div class="mx-auto max-w-2xl p-4">
			<h1 class="relative z-10 bg-gradient-to-b from-neutral-200 to-neutral-400 bg-clip-text text-center font-sans text-4xl font-bold text-transparent sm:to-neutral-600 sm:text-7xl">
				Join the waitlist
			</h1>

			<p class="relative z-10 mx-auto my-4 max-w-lg text-center text-sm text-neutral-300 sm:text-neutral-500">
				Join the 0xArgus waitlist now to become a genesis founding member. Getting a chance to participate in the presale, and beta programs.
			</p>
			<WhitelistForm data={data.form} id="whitelist-footer" />
		</div>
		<div class="mt-24"></div>
		<footer class="z-50 w-full rounded-lg bg-white shadow dark:bg-neutral-950">
			<div class="mx-auto w-full max-w-screen-xl p-4 md:py-8">
				<div class="sm:flex sm:items-center sm:justify-between">
					<a href="https://0xargus.org" class="mb-4 flex items-center space-x-3 sm:mb-0 rtl:space-x-reverse">
						<img class="h-10 w-10" src="/logo-rounded.svg" alt="logo" />
						<span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">0xArgus</span>
					</a>
					<ul class="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 children:cursor-pointer sm:mb-0 dark:text-gray-400">
						<li>
							<a href="/privacy" class="me-4 cursor-pointer hover:underline md:me-6">Privacy Policy</a>
						</li>
						<li>
							<a href="/presale" class="me-4 hover:underline md:me-6">Investors</a>
						</li>
						<li>
							<email class="text-purple-500 hover:underline">team@0xargus.org</email>
						</li>
					</ul>
				</div>
				<hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
				<span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://0xargus.org" class="hover:underline">0xArgus</a>. All Rights Reserved.</span>
			</div>
		</footer>

		<BackgroundBeams />
	</div>
</section>
<!-- WAITLIST END -->
