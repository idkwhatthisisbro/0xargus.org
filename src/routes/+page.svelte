<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import JoinTheWhitelist from '$lib/components/page/JoinTheWhitelist.svelte';
	// import ProductSummaryAndFeatures from '$lib/components/page/ProductSummaryAndFeatures.svelte';

	import AnimatedHeroText from '$lib/components/AnimatedHeroText.svelte';
	import Banner from '$lib/components/Banner.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import Stars from '$lib/components/Stars.svelte';
	import WhitelistForm from '$lib/components/page/WhitelistForm.svelte';
	import { EvervaultCard, Icon } from '$lib/components/ui/EvervaultCard/';
	import { GlowingStarsBackgroundCard, GlowingStarsDescription, GlowingStarsTitle } from '$lib/components/ui/GlowingStars/';
	import GridAndDotBackgroundsSmallGrid from '$lib/components/ui/GridAndDotBackgrounds/GridAndDotBackgroundsSmallGrid.svelte';
	import TracingBeam from '$lib/components/ui/TracingBeam/TracingBeam.svelte';
	import WavyBackground from '$lib/components/ui/WavyBackground/WavyBackground.svelte';
	import Section from '$lib/layouts/Section.svelte';
	import { cn } from '$lib/utils/cn.js';
	import { Background, SvelteFlow, type Node } from '@xyflow/svelte';
	import '@xyflow/svelte/dist/style.css';
	import { ArrowRightIcon, BotIcon, Boxes, CandlestickChartIcon, EyeIcon, PlaneIcon, Send, TwitterIcon } from 'lucide-svelte';
	// import { Circle } from 'svelte-loading-spinners';
	import { MetaTags } from 'svelte-meta-tags';
	import { writable } from 'svelte/store';
	import type { PageData } from './$types.js';
	import * as AccordionL from '$lib/components/ui/AccordionL/index.js';

	// TODO: Add localization

	export let data: PageData;

	const howItWorkCards = [
		{
			title: 'Advanced Algorithms',
			desc: 'Our AI algorithms are at the core of our platform. They continuously scan and learn from multiple chains, identifying patterns and behaviors associated with fraudulent activities. This allows us to constantly improve our detection capabilities and provide better protection for your assets.',
			imgIcon: '/3d-2.png',
			imgMain: '/image 1.png'
			// imgMain: 'https://cursor.sh/landing/features/card-examples/ask.png'
		},
		{
			title: 'Rug Pull Protection',
			desc: 'Our system is designed to detect any large liquidity withdrawals, and any malicious changes to the contract, including: unauthorized minting of new tokens, changes to transaction fees.  If such activity is detected, Argus will immediately execute a transaction to secure your holdings.',
			// img: 'https://www.dissentmagazine.org/wp-content/files_mf/1659985189666_GettyImages1241318592.jpeg'
			imgIcon: '/3d-4.png',
			imgMain: '/Rectangle 8.png'
		},
		{
			title: 'Real-Time Monitoring',
			desc: 'Argus SentryAI is constantly monitoring for any malicious transactions in real time. With Auto-Protect, you can effortlessly safeguard your entire portfolio with a single click. So, get peace of mind, knowing your guardian Argus is always on the watch!',
			imgIcon: '/3d-3.png',
			imgMain: 'Component 22.png'
		}
	];
	const featureCards = [
		{ circle: 'No', desc: 'Argus sees the drain before it happens – safeguarding your tokens from vanishing liquidity.', tag: 'Liquidity Pulls' },
		{
			circle: 'More',
			desc: "Don't let hidden changes wipe your investment. Argus shields your tokens from malicious modifications.",
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
			class: 'flex ring-2 font-outfit shadow-2xl bg-neutral-950 text-white ring-indigo-900 items-center justify-center rounded-xl',
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

			class: 'flex ring-2 font-outfit shadow-2xl bg-neutral-950 text-white ring-indigo-900 items-center justify-center rounded-xl',
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

			class: 'flex ring-2 font-outfit shadow-2xl bg-neutral-950 text-white ring-indigo-900 items-center justify-center rounded-xl',
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

			class: 'flex ring-2 font-outfit shadow-2xl bg-neutral-950 text-white ring-indigo-900 items-center justify-center rounded-xl',
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
			class: 'flex ring-2 font-outfit ring-indigo-900 items-center justify-center rounded-xl',
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

			class: 'flex ring-2 font-outfit shadow-2xl bg-neutral-950 text-white ring-indigo-900 items-center justify-center rounded-xl',
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
			class: 'flex ring-2 font-outfit shadow-2xl bg-neutral-950 text-white ring-indigo-900 items-center justify-center rounded-xl',
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
			label: 'Argus Sentinel Activates'
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

			<div class="flex gap-x-12">
				<div class="flex items-center gap-x-8">
					<a class="h-8 w-8 fill-neutral-300 duration-200 ease-in-out hover:fill-neutral-400" href="https://x.com/0xArgusOrg">
						<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
							<path
								d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375	c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219	c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966	c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693	c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351	c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z"
							></path>
						</svg>
					</a>
					<a class="h-8 w-8 fill-neutral-300 duration-200 ease-in-out hover:fill-neutral-400" href="https://x.com/0xArgusOrg">
						<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
							<path
								d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"
							></path>
						</svg>
					</a>
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
			</div>
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
			<h2 class="text-center font-outfit text-4xl font-bold text-transparent text-white sm:text-6xl">
				Your

				<span class="text-purple-600"> Guardian </span>
				in the DeFi Universe
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
			<!-- <video class="mx-auto mt-24 h-[700px] w-[1000px] rounded-xl shadow-lg" autoplay loop muted>
				<source src="/ai.webm" type="video/webm" />
				Your browser does not support the video tag.
			</video> -->
			<style>
				video::-webkit-media-controls-start-playback-button {
					display: none;
				}
			</style>

			<video class="absolute inset-0 z-[1000] mx-auto mt-[450px] max-h-[800px] w-full sm:mt-[650px]" autoplay controls={false} muted loop playsinline>
				<source src="/c1.mov" type="video/quicktime" />
				<source src="/c1.webm" type="video/webm" />
				Your browser does not support the video tag.
			</video>
			<!-- <video class="absolute inset-0 mx-auto mt-[650px] w-full rounded-xl shadow-lg" autoplay loop muted>
				<source src="/ai2.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video> -->
		</Section>

		<!-- FEATURES SECTION-->
		<!-- <Section class="-mt-52"> -->
		<Section class="mt-[250px] sm:mt-[500px] md:mt-[750px]">
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
<Section className="relative pb-0">
	<!-- <Stars numStars={10} slot="background" /> -->
	<img src="/test3.png" class="absolute inset-0 z-[1000] h-36 w-full opacity-50 blur-md" alt="gradient" />
	<!-- <img class="absolute -bottom-96 -right-[20rem] z-[99] h-1/2 bg-contain opacity-75 sm:-right-[40rem]" alt="gradient" src="/blur2.svg" /> -->
	<img class="absolute -right-[15rem] top-[25rem] z-[55] hidden opacity-40 sm:-right-[35rem] sm:bottom-32 sm:top-auto sm:block" alt="gradient" src="/blur2.svg" />
	<img class="absolute -left-[15rem] top-[25rem] z-[55] opacity-40 sm:-left-[35rem] sm:bottom-32 sm:top-auto" alt="gradient" src="/blur2.svg" />

	<!-- <Spotlight fill="#a855f7" className="blur-3xl absolute z-[51]" /> -->

	<SectionHeader title="Crypto Safeguards: The Argus Approach" subtitle="Discover the steps involved in safeguarding your digital assets with our cutting-edge technology" image="/head-cog-1.png" />

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
			<!-- <Background patternColor="#0a0a0a" bgColor="#00000000" /> -->
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
				href="/presale">Explore The Presale <ArrowRightIcon class="ml-2 h-4 transform-gpu transition duration-300 group-hover:translate-x-0.5" /></a>
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
					'group-1:rounded-r container relative h-full p-4 backdrop-blur-3xl backdrop-filter sm:even:border-[6px] sm:even:border-purple-500/50 lg:odd:-mb-16'
				)}>
				<!-- BG Blur -->
				<div
					class={`group-[:nth-of-type({3})_&]:-right-[10rem] group-[:nth-of-type({3})_&]:-left-[10rem] group-2:-left-[20rem] group-2:right-auto group-2:-right-[20rem] absolute -bottom-[20rem] z-0 aspect-1 h-auto w-[40rem] bg-[radial-gradient(ellipse_at_center,_#581c87_0%,transparent_70%)] blur-3xl group-odd:left-auto sm:-bottom-[10rem]`} />

				<!-- Text -->
				<div class="shadow-3xl z-50 flex w-full flex-col space-y-4 p-4 text-neutral-300">
					<!-- Image -->
					{#if card.imgIcon}
						<div class="mb-4">
							<div class="flex h-20 w-20 items-center justify-center rounded-xl bg-gradient-radial from-neutral-800 to-neutral-900/50 p-4 shadow-xl">
								{#if card.imgIcon === '/3d-2.png'}
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
					{#if index === 0}
						<div class="h-64 w-full sm:h-96 sm:w-[30rem]" />
						<img class="absolute bottom-0 z-[50] h-64 rounded-xl sm:h-96" src={card.imgMain} alt="img" />
					{:else}
						<img class="z-[50] h-64 w-full rounded-xl sm:h-96 sm:w-[30rem]" src={card.imgMain} alt="img" />
					{/if}
				{/if}
			</div>
		{/each}
	</div>

	<Stars numStars={10} slot="background" />
</Section>

<!-- FAQ -->
<Section>
	<SectionHeader title="Frequently Asked Questions" subtitle="Get answers to the most common questions about 0xArgus" />
	<div class="flex items-center justify-center text-white">
		<AccordionL.Root class="w-full sm:max-w-[50%]">
			<AccordionL.Item value="item-1">
				<AccordionL.Trigger>What is Argus SentryAI?</AccordionL.Trigger>
				<AccordionL.Content
					>Argus SentryAI is our state-of-the-art monitoring system that scans for fraudulent activities across multiple chains, providing real-time protection for your digital assets.</AccordionL.Content>
			</AccordionL.Item>
			<AccordionL.Item value="item-2">
				<AccordionL.Trigger>How does Argus protect against rug pulls?</AccordionL.Trigger>
				<AccordionL.Content
					>Our system detects large liquidity withdrawals and unauthorized contract changes. In the event of such activities, Argus executes protective transactions to secure your holdings.</AccordionL.Content>
			</AccordionL.Item>
			<AccordionL.Item value="item-3">
				<AccordionL.Trigger>Can I trust Argus with my portfolio?</AccordionL.Trigger>
				<AccordionL.Content
					>Yes, with Argus Auto-Protect, you can safeguard your entire portfolio effortlessly. Our AI is constantly adapting to new threats, ensuring your investments are protected around the clock.</AccordionL.Content>
			</AccordionL.Item>
			<AccordionL.Item value="item-4">
				<AccordionL.Trigger>How do I participate in the Argus presale?</AccordionL.Trigger>
				<AccordionL.Content
					>Joining the Argus presale is simple. Register on our platform, complete the necessary KYC verification, and you'll be eligible to participate in the presale event. Stay tuned for more
					details on dates and allocation sizes.</AccordionL.Content>
			</AccordionL.Item>
			<AccordionL.Item value="item-5">
				<AccordionL.Trigger>What does Argus whitelisting mean?</AccordionL.Trigger>
				<AccordionL.Content
					>Argus whitelisting refers to the process of adding your wallet address to a list of approved participants for our services. This ensures that you have exclusive access to certain features
					and offerings, such as early investment opportunities or special transactions within the Argus ecosystem.</AccordionL.Content>
			</AccordionL.Item>
		</AccordionL.Root>
	</div>
</Section>
<JoinTheWhitelist data={data.form}>
	<Footer />
</JoinTheWhitelist>
