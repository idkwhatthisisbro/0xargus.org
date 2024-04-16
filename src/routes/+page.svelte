<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
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
	import WavyBackground from '$lib/components/ui/WavyBackground/WavyBackground.svelte';
	import Section from '$lib/layouts/Section.svelte';
	import { cn } from '$lib/utils/cn.js';
	import { SvelteFlow, type Node } from '@xyflow/svelte';
	import '@xyflow/svelte/dist/style.css';
	import { MetaTags } from 'svelte-meta-tags';
	import { writable } from 'svelte/store';
	import type { PageData } from './$types.js';
	import * as AccordionL from '$lib/components/ui/AccordionL/index.js';
	// ICONS
	import { ArrowRightIcon, BotIcon, BoxesIcon, CandlestickChartIcon, EyeIcon, PlaneIcon, SendIcon, MoveRightIcon } from 'lucide-svelte';
	import IconMetamask from '$lib/assets/metamask.svg?component';
	import IconUniswap from '$lib/assets/uniswap.svg?component';
	import IconSafePal from '$lib/assets/safepal.svg?component';
	import Icon1inch from '$lib/assets/1inch.svg?component';
	import SvgBlur from '$lib/assets/blur.svg?component';
	import { BASE_URL } from '../constants.js';

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
			class: 'flex ring-2 font-outfit shadow-2xl text-white ring-indigo-900 items-center justify-center rounded-xl',
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

			class: 'flex ring-2 font-outfit shadow-2xl text-white ring-indigo-900 items-center justify-center rounded-xl',
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

			class: 'flex ring-2 font-outfit shadow-2xl text-white ring-indigo-900 items-center justify-center rounded-xl',
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

			class: 'flex ring-2 font-outfit shadow-2xl text-white ring-indigo-900 items-center justify-center rounded-xl',
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

			class: 'flex ring-2 font-outfit shadow-2xl text-white ring-indigo-900 items-center justify-center rounded-xl',
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
			class: 'flex ring-2 font-outfit shadow-2xl text-white ring-indigo-900 items-center justify-center rounded-xl',
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
<main class={cn('b-red-500 relative z-30 flex min-h-screen w-full flex-col items-center')}>
	<!-- ANNOUNCEMENT BANNER & NAVBAR -->
	<div class="b-blue-500 grid w-full gap-5">
		<Banner />
		<Navbar />
	</div>

	<!-- ANNOUNCEMENT BANNER & NAVBAR END -->
	<Stars numStars={5} />
	<div class="w-full max-w-7xl">
		<div class="flex w-full flex-col items-center justify-center px-4 sm:px-0">
			<!-- HERO TITLE -->
			<div>
				<h1 class="relative z-[31] mt-12 text-center font-saira text-6xl font-black text-neutral-50 md:mt-32 md:text-7xl lg:text-9xl">0xArgus</h1>
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
			<WhitelistForm id="whitelist-hero" />
			<!-- WHITELIST BUTTON END -->
		</div>
	</div>

	<!-- TODO: Make this effecient -->
	<WavyBackground />
</main>
<!-- HERO END -->

<!-- Prevent the background of the wave from clipping -->
<div class="sm:mt-32" />

<!-- <ProductSummaryAndFeatures featureData={featureCards} /> -->

<!-- Product Summary + Features Start -->
<GridAndDotBackgroundsSmallGrid>
	<!-- PRODUCT SUMMARY SECTION -->
	<Section id="about" class="mt-12">
		<h2 class="text-center font-outfit text-4xl font-bold text-transparent text-white sm:text-6xl">
			Your

			<span class="text-purple-600"> Guardian </span>
			in the DeFi Universe
		</h2>

		<p class="mx-auto mt-6 max-w-3xl text-center text-xl font-normal text-neutral-300 sm:mt-16 sm:text-3xl">
			Our platform is the bridge to a safer DeFi experience, providing the robust protection you need to navigate the blockchain space with confidence.
		</p>

		<div class="mt-12 flex w-full flex-wrap gap-4 rounded-xl border border-dashed border-white/[0.2] sm:mt-24">
			{#each [Icon1inch, IconMetamask, IconUniswap, IconSafePal] as icon}
				<div class="flex flex-1 items-center justify-center border border-dashed border-neutral-400/5 px-2 py-8 sm:p-12">
					<svelte:component this={icon} class="h-[30px] saturate-0" />
				</div>
			{/each}
		</div>

		<video class="-sm:mt-[650px] 0mt-[450px] inset-0 z-[1000] mx-auto mt-40 max-h-[800px] w-full" autoplay controls={false} muted loop playsinline>
			<source src="/c1.mov" type="video/quicktime" />
			<source src="/c1.webm" type="video/webm" />
			Your browser does not support the video tag.
		</video>

		<!-- FEATURES SECTION-->
		<!-- <div class="mt-[250px] sm:mt-[500px] md:mt-[750px]" /> -->
		<SectionHeader
			id="features"
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
				<!-- M DESKTOP SUBROW -->
				<div class="group hidden md:block lg:hidden">
					<GlowingStarsBackgroundCard>
						<GlowingStarsTitle>Invest Fearlessly</GlowingStarsTitle>
						<div class="flex items-end justify-between">
							<GlowingStarsDescription>Feel safe investing in small coins. Seamlessly integrate rugpull protection into all your favorite exchanges.</GlowingStarsDescription>
							<div class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-red-500 bg-neutral-800 p-2 duration-200 ease-in-out group-hover:bg-neutral-900">
								<MoveRightIcon class="h-4 w-4 stroke-2 text-white" />
							</div>
						</div>
					</GlowingStarsBackgroundCard>
				</div>
			</div>

			<!-- GLOWING STARS CARD -->
			<!-- MOBILE, TABLET AND LARGE DEVICES -->
			<a href="https://docs.0xargus.org" class="group block min-h-96 cursor-pointer md:hidden lg:block">
				<GlowingStarsBackgroundCard>
					<GlowingStarsTitle>Invest Fearlessly</GlowingStarsTitle>
					<div class="flex items-end justify-between">
						<GlowingStarsDescription>Feel safe investing in small coins. Seamlessly integrate rugpull protection into all your favorite exchanges.</GlowingStarsDescription>
						<div class="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 p-2 duration-200 ease-in-out group-hover:bg-neutral-900">
							<a
								role="button"
								tabindex="0"
								aria-label="GLOWING to documentation"
								on:click={() => window.open(BASE_URL + '/presale', '_blank')}
								on:keydown={(event) => {
									if (event.key === 'Enter') window.open(BASE_URL + '/presale', '_blank');
								}}
								href="https://docs.0xargus.org"
								target="_blank"
								class="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 p-2 duration-200 ease-in-out group-hover:bg-neutral-900">
								<MoveRightIcon class="h-4 w-4 stroke-2 text-white transition duration-200 group-hover:translate-x-0.5" />
							</a>
							<MoveRightIcon class="h-4 w-4 stroke-2 text-white transition duration-200 group-hover:translate-x-0.5" />
						</div>
					</div>
				</GlowingStarsBackgroundCard>
			</a>

			<div
				class="-border-white/[0.2] -border relative grid min-h-64 w-full grid-rows-2 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600/50 via-indigo-600/60 to-indigo-600/40 p-4 py-8 shadow-xl sm:min-h-96 md:grid-cols-2 md:grid-rows-1 md:py-24">
				<img class="absolute" src="/circles@2x.png" alt="bg radial" />
				<div class="z-20 space-y-6 px-12 text-white">
					<p class="text-2xl font-semibold">Here, whenever - wherever</p>

					<p class="text-xl leading-normal text-indigo-50">
						Access Argus anywhere, from our webapp across all devices. With browser extensions for every major browser, and bots for telegram and discord. Argus is always with you.

						<br />
						<br />

						Get started with the Argus Beta today. Access our documentation to learn more about how Argus can protect your assets.
					</p>

					<a href="docs.0xargus.org" class="flex h-14 w-36 items-center justify-center rounded-xl bg-neutral-950/[0.25] text-indigo-50 duration-200 ease-in-out hover:bg-neutral-950/30">
						<p class="text-lg font-medium">Learn more</p>
					</a>
				</div>

				<img src="/support2.png" class="rounded-xl opacity-90 shadow-lg" alt="support" />
			</div>
		</div>
		<div />
	</Section>
</GridAndDotBackgroundsSmallGrid>
<!-- Product Summary + Features End -->

<!-- <div class="mb-12 mt-24" /> -->

<Section id="howitworks" className="relative pb-0">
	<!-- <Stars numStars={10} slot="background" /> -->
	<!-- <img src="/test3.png" class="absolute inset-0 z-[1000] h-36 w-full opacity-50 blur-md" alt="gradient" /> -->

	<SvgBlur class="absolute -right-[15rem] top-[25rem] z-[55] hidden opacity-40 sm:-right-[35rem] sm:bottom-32 sm:top-auto sm:block" />
	<SvgBlur class="absolute -left-[15rem] top-[25rem] z-[55] opacity-40 sm:-left-[35rem] sm:bottom-32 sm:top-auto" />

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
						<div style="background-image: url('{card.imgMain}');" class="z-[50] m-auto h-64 w-full rounded-xl bg-contain bg-center bg-no-repeat sm:h-96 sm:max-w-[30rem]" />
					{/if}
				{/if}
			</div>
		{/each}
	</div>

	<Stars numStars={10} slot="background" />
</Section>

<!-- FAQ -->
<Section id="faq">
	<SectionHeader title="Frequently Asked Questions" subtitle="Get answers to the most common questions about 0xArgus" />
	<div class="flex items-center justify-center px-12 text-white sm:px-0">
		<AccordionL.Root class="w-full lg:max-w-[80%]">
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
	<Footer slot="footer" />
</JoinTheWhitelist>
