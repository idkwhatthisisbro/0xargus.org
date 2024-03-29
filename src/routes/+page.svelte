<script lang="ts">
	import JoinTheWhitelist from '$lib/components/page/JoinTheWhitelist.svelte';
	import Footer from '$lib/components/Footer.svelte';
	// import ProductSummaryAndFeatures from '$lib/components/page/ProductSummaryAndFeatures.svelte';

	import Banner from '$lib/components/Banner.svelte';
	import AnimatedHeroText from '$lib/components/AnimatedHeroText.svelte';
	import WhitelistForm from '$lib/components/page/WhitelistForm.svelte';
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
	import { ArrowDown, ArrowRightIcon, BanIcon, BotIcon, Boxes, CandlestickChartIcon, EyeIcon } from 'lucide-svelte';
	import { cn } from '$lib/utils/cn.js';
	import { SvelteFlow, Background, type Node } from '@xyflow/svelte';
	import '@xyflow/svelte/dist/style.css';
	import Stars from '$lib/components/Stars.svelte';

	// import { Circle } from 'svelte-loading-spinners';
	import { writable } from 'svelte/store';
	import { MetaTags } from 'svelte-meta-tags';
	import type { PageData } from './$types.js';

	// TODO: Add localization

	export let data: PageData;

	const howItWorkCards = [
		{
			title: 'Liquidity Withdrawals',
			desc: "Our system is designed  sm:p-4to detect any large-scale liquidity withdrawals. These are often a red flag for rug pulls, where token creators remove their liquidity from a market, causing the token's value to plummet. If such activity is detected, Argus will immediately execute a transaction to secure your holdings.",
			// img: 'https://www.dissentmagazine.org/wp-content/files_mf/1659985189666_GettyImages1241318592.jpeg'
			imgIcon: '/3d-4.png',
			imgMain: 'https://cursor.sh/landing/features/card-examples/generate.png'
		},
		{
			title: 'Manipulating Token Functionalities',
			desc: 'We constantly monitor for any changes to the token contract. This includes unauthorized minting of new tokens, changes to transaction fees, or any other modifications that could potentially harm token holders. Our system will react to any such changes by securing your assets.',
			imgIcon: '3d-2.png',
			imgMain: 'https://cursor.sh/landing/features/card-examples/edit4.png'
		},
		{
			title: 'AI Algorithms',
			desc: 'Our AI algorithms are at the core of our platform. They continuously scan and learn from the entire Ethereum network, identifying patterns and behaviors associated with fraudulent activities. This allows us to constantly improve our detection capabilities and provide better protection for your assets. sm:p-4',
			imgIcon: '/3d-3.png',
			imgMain: 'https://cursor.sh/landing/features/card-examples/ask.png'
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
			data: { label: 'ArgusAI Scans for Fraudulent Activities 24/7' },
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
			data: { label: 'ArgusAI Scans for Fraudulent Activities 24/7' },
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
			<div class="rounded-full shadow-xl">
				<div />
			</div>
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
	<Stars numStars={5} />
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

<!-- Prevent the background of the wave from clipping -->
<div class="sm:mt-32" />

<!-- <ProductSummaryAndFeatures featureData={featureCards} /> -->

<!-- Product Summary + Features Start -->
<GridAndDotBackgroundsSmallGrid>
	<TracingBeam>
		<!-- PRODUCT SUMMARY SECTION -->
		<Section class="mt-12">
			<h2 class="bg-gradient-to-t from-purple-500 via-purple-600 to-indigo-500 bg-clip-text text-center font-outfit text-4xl font-bold text-transparent sm:text-6xl">
				Your Guardian in the DeFi Universe
			</h2>

			<p class="mx-auto mt-6 max-w-3xl text-center text-xl font-normal text-neutral-300 sm:mt-16 sm:text-3xl">
				Our platform is the bridge to a safer DeFi experience, providing the robust protection you need to navigate the blockchain space with confidence.
			</p>

			<div class="mt-12 flex w-full flex-wrap gap-4 rounded-xl border border-dashed border-white/[0.2] sm:mt-24">
				{#each ['1inch', 'metamask', 'uniswap', 'safepal'] as icon}
					<div class="flex flex-1 items-center justify-center border border-dashed border-neutral-400/5 px-2 py-8 sm:p-12">
						<img src="{icon}.svg" alt="icon-{icon}" class="h-[30px] saturate-0" />
					</div>
				{/each}
			</div>

			<!-- <img class="mx-auto mt-24 h-[700px] w-[1000px] rounded-xl shadow-lg" alt="s" src="/t1.png" /> -->
			<video class="mx-auto mt-24 h-[700px] w-[1000px] rounded-xl shadow-lg" autoplay loop muted>
				<source src="/ai.webm" type="video/webm" />
				Your browser does not support the video tag.
			</video>
		</Section>

		<!-- FEATURES SECTION-->
		<Section class="-mt-52">
			<SectionHeader
				title="Bringing Security into the Mainstream"
				subtitle="The first ever safety layer middleware. Giving you the ultimate protection for your DeFi investments"
				image={'/head-lock-4.png'} />

			<!-- FEATURES BENTO -->
			<div class="flex flex-col gap-4 gap-y-8 sm:gap-8">
				<!-- FEATURE CARDS -->
				<div class="grid grid-cols-1 gap-4 gap-y-8 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
					{#each featureCards as { circle, desc, tag }}
						<div class="relative flex h-[30rem] w-full flex-col items-start border border-white/[0.2] p-4">
							<Icon class="absolute -left-3 -top-3 h-6 w-6 text-white" />
							<Icon class="absolute -bottom-3 -left-3 h-6 w-6 text-white" />
							<Icon class="absolute -right-3 -top-3 h-6 w-6 text-white" />
							<Icon class="absolute -bottom-3 -right-3 h-6 w-6 text-white" />

							<EvervaultCard text={circle} />

							<h2 class="mt-4 text-base font-light text-white">{desc}</h2>
							<p class="mt-4 rounded-full border border-white/[0.2] px-2 py-0.5 text-sm font-light text-white">{tag}</p>
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

<div class="mb-12 mt-24" />
<Section className="relative pb-0 overflow-hidden">
	<Stars numStars={20} slot="background" />
	<img src="/test3.png" class="absolute inset-0 top-20 h-8 w-full blur-md" alt="gradient" />
	<!-- <img class="absolute -bottom-96 -right-[20rem] z-[99] h-1/2 bg-contain opacity-75 sm:-right-[40rem]" alt="gradient" src="/blur2.svg" /> -->
	<img class="absolute -left-[15rem] top-[45rem] z-[55] opacity-40 sm:-bottom-16 sm:-left-[35rem] sm:top-auto" alt="gradient" src="/blur2.svg" />

	<!-- <Spotlight fill="#a855f7" className="blur-3xl absolute z-[51]" /> -->

	<SectionHeader title="How It Works" subtitle="Discover the steps involved in safeguarding your digital assets with our cutting-edge technology" image="/head-cog-1.png" />

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

<Section maxWidth="full" class="relative">
	<section class={cn('z-[51] mt-20 flex w-full items-center justify-center sm:py-36')}>
		<div class="grid items-center justify-center text-center">
			<h3 class="bg-gradientt-tr from-purple-500 via-purple-600 to-indigo-500 bg-clip-text font-outfit text-6xl font-bold text-transparent text-white">
				<span
					style="text-shadow: 1px 0 26px #c084fc; box-shadow: 0 0 27px 0 rgba(126, 34, 206,.5); background: linear-gradient(180deg,rgba(120,34,260,.25) 50%,rgba(75,20,150,.15)) "
					class="rounded-2xl bg-opacity-50 px-2 py-1 text-white shadow-2xl"
					>2024
				</span>
				is the
				<span
					style="text-shadow: 1px 0 26px #c084fc; box-shadow: 0 0 27px 0 rgba(126, 34, 206,.5); background: linear-gradient(180deg,rgba(120,34,260,.25) 50%,rgba(75,20,150,.15)) "
					class="hidden rounded-2xl bg-opacity-50 px-2 py-1 text-white shadow-2xl sm:inline-block"
					>Year
				</span>
				<span class="sm:hidden">Year </span>

				of Crypto
			</h3>
			<p class="mx-auto mt-8 max-w-4xl text-center text-3xl text-neutral-300">Turn Pro by harnessing the power of AI, add Argus to your arsenal with support for over 8 chains.</p>
			<a
				class="group m-auto mt-8 flex w-48 items-center justify-center rounded-full border border-purple-700/30 px-3 py-2 text-sm text-white shadow-md duration-200 ease-in-out"
				style="background: linear-gradient(90.33deg,rgba(40,36,160,.25),hsla(0,12%,67%,.25)); white-space: nowrap;"
				href="#presale">Explore The Presale <ArrowRightIcon class="ml-2 h-4 transform-gpu transition duration-300 group-hover:translate-x-0.5" /></a>
		</div>
	</section>
	<!-- <Stars numStars={30} /> -->
	<div class="group flex flex-1 flex-col items-center justify-center text-white sm:-mx-12 lg:flex-row 2xl:mx-0 2xl:gap-x-12">
		{#each howItWorkCards as card, index}
			<!-- Card -->

			<div
				class={cn(
					'z-[55] mt-12 flex w-full flex-col items-center overflow-hidden rounded-3xl border border-white/[0.2] shadow-lg  md:w-auto md:p-24',
					'gap-y-12 rounded-xl bg-indigo-950/10 transition duration-200 ease-in-out hover:shadow-[0_0_60px_-15px_hsla(274,66%,32%,0.6)] sm:p-4 sm:py-12 md:rounded-3xl md:p-10',
					'group-1:rounded-r container p-4 backdrop-blur-3xl backdrop-filter even:py-16 sm:even:border-[6px] sm:even:border-purple-500/50'
				)}>
				<!-- BG Blur -->
				<div
					class={`group-[:nth-of-type({3})_&]:-right-[10rem] group-[:nth-of-type({3})_&]:-left-[10rem] group-2:-left-[20rem] group-2:right-auto group-2:-right-[20rem] absolute -bottom-[20rem] z-0 aspect-1 h-auto w-[40rem] bg-[radial-gradient(ellipse_at_center,_#581c87_0%,transparent_70%)] blur-3xl group-odd:left-auto sm:-bottom-[10rem]`} />

				<!-- Text -->
				<div class="shadow-3xl z-50 flex w-full flex-col justify-start space-y-4 p-4 text-neutral-300">
					<!-- Image -->
					{#if card.imgIcon}
						<div class="mb-4">
							<div class="flex h-20 w-20 items-center justify-center rounded-xl bg-gradient-radial from-neutral-800 to-neutral-900/50 p-4 shadow-xl">
								{#if card.imgIcon === '3d-2.png'}
									<!-- content here -->
									<BotIcon class="h-10 w-full text-purple-600" />
								{:else if card.imgIcon === '/3d-3.png'}
									<!-- else if content here -->
									<EyeIcon class="h-10 w-full text-purple-600" />
								{:else if card.imgIcon === '/3d-4.png'}
									<!-- else if content here -->
									<CandlestickChartIcon class="h-10 w-full text-purple-600" />
								{/if}
							</div>
						</div>
					{/if}
					<p class="text-3xl font-semibold">{card.title}</p>
					<div class="max-w-lg leading-relaxed">
						{card.desc}
					</div>
				</div>
				{#if card.imgMain}
					<img class="z-[50] h-96 rounded-xl" src={card.imgMain} alt="img" />
				{/if}
			</div>
		{/each}
	</div>

	<Stars numStars={20} slot="background" />
</Section>

<JoinTheWhitelist data={data.form}>
	<Footer />
</JoinTheWhitelist>
