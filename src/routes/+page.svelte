<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import JoinTheWhitelist from '$lib/components/page/JoinTheWhitelist.svelte';

	import AnimatedHeroText from '$lib/components/AnimatedHeroText.svelte';
	import ExtensionsCard from '$lib/components/ExtensionsCard.svelte';
	import InvestFearlesslyCard from '$lib/components/InvestFearlesslyCard.svelte';
	import Banner from '$lib/components/Banner.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import Stars from '$lib/components/Stars.svelte';
	import WhitelistForm from '$lib/components/page/WhitelistForm.svelte';
	import { EvervaultCard, Icon } from '$lib/components/ui/EvervaultCard/';
	import GridAndDotBackgroundsSmallGrid from '$lib/components/ui/GridAndDotBackgrounds/GridAndDotBackgroundsSmallGrid.svelte';
	import WavyBackground from '$lib/components/ui/WavyBackground/WavyBackground.svelte';
	import Section from '$lib/layouts/Section.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import { cn } from '$lib/utils/cn.js';
	import { SvelteFlow, type Node } from '@xyflow/svelte';
	import '@xyflow/svelte/dist/style.css';
	import { MetaTags } from 'svelte-meta-tags';
	import { writable } from 'svelte/store';
	// ICONS
	import IconMetamask from '$lib/assets/metamask.svg?component';
	import IconUniswap from '$lib/assets/uniswap.svg?component';
	import IconSafePal from '$lib/assets/safepal.svg?component';
	import Icon1inch from '$lib/assets/1inch.svg?component';
	import { isSubscribed } from '$lib/stores/form.js';
	import { Modal } from 'svelte-simple-modal';

	import FeatureCard1 from '$lib/assets/FeatureCard1.png?enhanced';
	import FeatureCard2 from '$lib/assets/FeatureCard2.png?enhanced';
	import FeatureCard3 from '$lib/assets/FeatureCard3.png?enhanced';
	import { BotIcon, CandlestickChartIcon, EyeIcon, ArrowRightIcon } from 'lucide-svelte';
	import SvgBlur from '$lib/assets/blur.svg?component';

	const styles = {
		styleWindow: { backgroundColor: '#06000f', 'border-radius': '1rem', padding: '1rem' },
		styleCloseButton: {
			backgroundColor: '#fff !important',
			color: '#fff !important',
			stroke: '#ffffff !important',
			opacity: '0.4'
		}
	};

	// TODO: Add localization

	const howItWorkCards = [
		{
			title: 'Advanced Algorithms',
			desc: 'Our AI algorithms are at the core of our platform. They continuously scan and learn from multiple chains, identifying patterns and behaviors associated with fraudulent activities. This allows us to constantly improve our detection capabilities and provide better protection for your assets.',
			img: FeatureCard1
		},
		{
			title: 'Rug Pull Protection',
			desc: 'Our system is designed to detect any large liquidity withdrawals, and any malicious changes to the contract, including: unauthorized minting of new tokens, changes to transaction fees.  If such activity is detected, Argus will immediately execute a transaction to secure your holdings.',
			img: FeatureCard2
		},
		{
			title: 'Real-Time Monitoring',
			desc: 'Argus SentryAI is constantly monitoring for any malicious transactions in real time. With Auto-Protect, you can effortlessly safeguard your entire portfolio with a single click. So, get peace of mind, knowing your guardian Argus is always on the watch!',
			img: FeatureCard3
		}
	];
	const featureCards = [
		{
			circle: 'No',
			desc: 'Argus sees the drain before it happens – safeguarding your tokens from vanishing liquidity.',
			tag: 'Liquidity Pulls'
		},
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
	const FaqData = [
		{
			trigger: 'What is Argus SentryAI?',
			content:
				'Argus SentryAI is our state-of-the-art monitoring system that scans for fraudulent activities across multiple chains, providing real-time protection for your digital assets.'
		},
		{
			trigger: 'How does Argus protect against rug pulls?',
			content:
				'Our system detects large liquidity withdrawals and unauthorized contract changes. In the event of such activities, Argus executes protective transactions to secure your holdings.'
		},
		{
			trigger: 'Can I trust Argus with my portfolio?',
			content:
				'Yes, with Argus Auto-Protect, you can safeguard your entire portfolio effortlessly. Our AI is constantly adapting to new threats, ensuring your investments are protected around the clock.'
		},
		{
			trigger: 'How do I participate in the Argus presale?',
			content:
				"Joining the Argus presale is simple. Register on our platform, complete the necessary KYC verification, and you'll be eligible to participate in the presale event. Stay tuned for more details on dates and allocation sizes."
		},
		{
			trigger: 'What does Argus whitelisting mean?',
			content:
				'Argus whitelisting refers to the process of adding your wallet address to a list of approved participants for our services. This ensures that you have exclusive access to certain features and offerings, such as early investment opportunities or special transactions within the Argus ecosystem.'
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
			class:
				'flex ring-2 font-outfit shadow-2xl text-white ring-indigo-900 items-center justify-center rounded-xl',
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

			class:
				'flex ring-2 font-outfit shadow-2xl text-white ring-indigo-900 items-center justify-center rounded-xl',
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

			class:
				'flex ring-2 font-outfit shadow-2xl text-white ring-indigo-900 items-center justify-center rounded-xl',
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

			class:
				'flex ring-2 font-outfit shadow-2xl text-white ring-indigo-900 items-center justify-center rounded-xl',
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
			class:
				'flex ring-2 font-outfit ring-indigo-900 items-center justify-center rounded-xl',
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

			class:
				'flex ring-2 font-outfit shadow-2xl text-white ring-indigo-900 items-center justify-center rounded-xl',
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
			class:
				'flex ring-2 font-outfit shadow-2xl text-white ring-indigo-900 items-center justify-center rounded-xl',
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
			labelStyle:
				'color: #ffffff; background-color: transparent; z-index: 53; border-radius: 30px; padding: 3px 10px; background-color: rgb(79 70 229 / var(--tw-bg-opacity));',
			label: 'Perm2 Stored Approval'
			// class: 'rounded-xl bg-blue-500 '
		},

		{
			id: '3-5',
			type: 'default',
			source: '3',
			target: '5',
			animated: true,
			labelStyle:
				'color: #ffffff; background-color: transparent; z-index: 53; border-radius: 30px; padding: 3px 10px; background-color: rgb(79 70 229 / var(--tw-bg-opacity));',
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
			labelStyle:
				'color: #ffffff; background-color: transparent; z-index: 53; border-radius: 30px; padding: 3px 10px; background-color: rgb(79 70 229 / var(--tw-bg-opacity));',
			animated: true
		},
		{
			id: '5',
			type: 'default',
			source: 'A',
			target: 'A-2',
			label: 'Undetected',
			labelStyle:
				'color: #ffffff; background-color: transparent; z-index: 53; border-radius: 30px; padding: 3px 10px; background-color: rgb(79 70 229 / var(--tw-bg-opacity));',
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
			labelStyle:
				'color: #ffffff; background-color: transparent; z-index: 53; border-radius: 30px; padding: 3px 10px; background-color: rgb(79 70 229 / var(--tw-bg-opacity));',
			label: 'Perm2 Stored Approval'
			// class: 'rounded-xl bg-blue-500 '
		},
		{
			id: '3-5',
			type: 'default',
			source: '3',
			target: '5',
			animated: true,
			labelStyle:
				'color: #ffffff; background-color: transparent; z-index: 53; border-radius: 30px; padding: 3px 10px; background-color: rgb(79 70 229 / var(--tw-bg-opacity));',
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
			labelStyle:
				'color: #ffffff; background-color: transparent; z-index: 53; border-radius: 30px; padding: 3px 10px; background-color: rgb(79 70 229 / var(--tw-bg-opacity));',
			animated: true
		},
		{
			id: '5',
			type: 'default',
			source: 'A',
			target: 'A-2',
			label: 'Undetected',
			labelStyle:
				'color: #ffffff; background-color: transparent; z-index: 53; border-radius: 30px; padding: 3px 10px; background-color: rgb(79 70 229 / var(--tw-bg-opacity));',
			animated: true
		}
	]);
</script>

<Modal {...styles} classWindow="p-2 bg-bgPrimary rounded-3xl">
	<MetaTags
		title="WhiteList Now Open"
		titleTemplate="0xArgus - %s"
		description="0xArgus Rug Pull Prevention Middleware for Ethereum, Solana, Arbitrum."
		canonical="https://0xargus.org"
		openGraph={{
			url: 'https://www.0xargus.org',
			title: '0xArgus',
			description:
				'0xArgus Rug Pull Prevention Middleware for Ethereum, Solana, Arbitrum.',
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

	<!-- HERO -->
	<main
		class={cn(
			'b-red-500 relative z-30 mb-20 flex min-h-screen w-full flex-col items-center sm:mb-32'
		)}>
		<!-- ANNOUNCEMENT BANNER & NAVBAR -->
		<div class="b-blue-500 z-50 grid w-full">
			<Banner />
			<Navbar />
		</div>

		<!-- CONTENT -->
		<div class="w-full max-w-7xl">
			<div class="flex w-full flex-col items-center justify-center px-4 sm:px-0">
				<!-- HERO TITLE -->
				<div>
					<h1
						class="relative z-[31] mt-12 text-center font-saira text-6xl font-black text-neutral-50 md:mt-32 md:text-7xl lg:text-9xl">
						0xArgus
					</h1>
					<div class="relative z-30 flex h-20 w-[20rem] justify-center sm:w-[40rem]">
						<div
							class="absolute inset-x-10 top-0 h-[2px] w-2/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm sm:inset-x-20 sm:w-3/4" />
						<div
							class="absolute inset-x-10 top-0 h-px w-2/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent sm:inset-x-20 sm:w-3/4" />
						<div
							class="inset-x-30 absolute top-0 h-[5px] w-2/4 bg-gradient-to-r from-transparent via-purple-500 to-transparent blur-sm sm:inset-x-60 sm:w-1/4" />
						<div
							class="inset-x-30 absolute top-0 h-px w-2/4 bg-gradient-to-r from-transparent via-purple-500 to-transparent sm:inset-x-60 sm:w-1/4" />
					</div>
				</div>
				<!-- HERO TITLE END -->

				<!-- HERO TEXT -->
				<AnimatedHeroText />
				<!-- HERO TEXT END -->

				<!-- WHITELIST BUTTON -->
				{#if !$isSubscribed.subscribed}
					<WhitelistForm id="whitelist-hero" />
				{:else}
					<div
						class="hover:bg-indigo-600' z-[1000] mt-12 flex flex-col items-center justify-center rounded-xl bg-gradient-radial from-neutral-800 to-neutral-900 p-4 shadow-xl sm:px-8">
						<p class="text-lg font-medium text-white">
							🎉 You are already subscribed to our whitelist.
						</p>
						<p class="text-base font-medium text-indigo-200">Stay tuned for updates!</p>
					</div>
				{/if}
				<!-- WHITELIST BUTTON END -->
			</div>
		</div>

		<Stars numStars={5} />

		<!-- TODO: Make this effecient -->
		<WavyBackground />
	</main>
	<!-- HERO END -->

	<!-- Product Summary + Features Start -->
	<GridAndDotBackgroundsSmallGrid>
		<!-- PRODUCT SUMMARY SECTION -->
		<Section id="about" class="sm:mt-12">
			<SectionHeader
				id="about"
				title="Your Guardian in the DeFi Universe"
				titleMaxWidth="max-w-full"
				coloredPart="Guardian"
				subtitle="Our platform is the bridge to a safer DeFi experience, providing the robust protection you need to navigate the blockchain space with confidence." />

			<div
				class="mt-12 flex w-full flex-wrap gap-4 rounded-xl border border-dashed border-white/[0.2] sm:mt-24">
				{#each [Icon1inch, IconMetamask, IconUniswap, IconSafePal] as icon}
					<div
						class="flex flex-1 items-center justify-center border border-dashed border-neutral-400/5 px-2 py-8 sm:p-12">
						<svelte:component this={icon} class="h-[30px] saturate-0" />
					</div>
				{/each}
			</div>

			<!-- FEATURES SECTION-->
			<SectionHeader
				id="features"
				title="Bringing Security into the Mainstream"
				titleMaxWidth="max-w-xl"
				coloredPart="Bringing Security"
				subtitle="The first ever safety layer middleware. Giving you the ultimate protection for your DeFi investments." />

			<!-- FEATURES BENTO -->
			<div class="grid grid-cols-1 gap-4 gap-y-8 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
				<!-- FEATURE CARDS -->
				{#each featureCards as { circle, desc, tag }}
					<div
						class="relative col-span-1 flex h-[30rem] w-full flex-col items-start border border-white/[0.2] p-4">
						<Icon class="absolute -left-3 -top-3 h-6 w-6 text-white" />
						<Icon class="absolute -bottom-3 -left-3 h-6 w-6 text-white" />
						<Icon class="absolute -right-3 -top-3 h-6 w-6 text-white" />
						<Icon class="absolute -bottom-3 -right-3 h-6 w-6 text-white" />

						<EvervaultCard text={circle} />

						<h2 class="mt-4 text-base font-light text-white">{desc}</h2>
						<p
							class="mt-4 rounded-full border border-white/[0.2] px-2 py-0.5 text-sm font-light text-white">
							{tag}
						</p>
					</div>
				{/each}

				<InvestFearlesslyCard class="col-span-1 lg:col-span-full" />
				<ExtensionsCard class="col-span-full" />
			</div>
		</Section>
	</GridAndDotBackgroundsSmallGrid>
	<!-- Product Summary + Features End -->

	<Section id="howitworks" className="relative pb-0">
		<!-- <Stars numStars={10} slot="background" /> -->
		<!-- <enhanced:img  src="/test3.png" class="absolute inset-0 z-[1000] h-36 w-full opacity-50 blur-md" alt="gradient" /> -->

		<SvgBlur
			class="absolute -right-[15rem] top-[25rem] z-[55] hidden opacity-40 sm:-right-[35rem] sm:bottom-32 sm:top-auto sm:block" />
		<SvgBlur
			class="absolute -left-[15rem] top-[25rem] z-[55] opacity-40 sm:-left-[35rem] sm:bottom-32 sm:top-auto" />

		<!-- <Spotlight fill="#a855f7" className="blur-3xl absolute z-[51]" /> -->

		<SectionHeader
			title="Crypto Safeguards: The Argus Approach"
			coloredPart="Crypto Safeguards:"
			titleMaxWidth="max-w-xl"
			subtitle="Discover the steps involved in safeguarding your digital assets with our cutting-edge technology." />

		<div
			class="relative right-0 flex h-[1150px] w-full items-center justify-center overflow-hidden sm:hidden">
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

		<div
			class={'svelte-flow-container relative hidden w-full items-center justify-center overflow-hidden sm:flex sm:h-[1000px]'}>
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
				<h3
					class="bg-gradientt-tr from-purple-500 via-purple-600 to-indigo-500 bg-clip-text font-outfit text-6xl font-bold text-transparent text-white">
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
				<p class="mx-auto mt-8 max-w-4xl text-center text-3xl text-neutral-300">
					Turn Pro by harnessing the power of AI, add Argus to your arsenal with support
					for over 8 chains.
				</p>
				<a
					class="group m-auto mt-8 flex w-48 items-center justify-center rounded-full border border-purple-700/30 px-3 py-2 text-sm text-white shadow-md duration-200 ease-in-out"
					style="background: linear-gradient(90.33deg,rgba(40,36,160,.25),hsla(0,12%,67%,.25)); white-space: nowrap;"
					href="/presale"
					>Explore The Presale <ArrowRightIcon
						class="ml-2 h-4 transform-gpu transition duration-300 group-hover:translate-x-0.5" /></a>
			</div>
		</section>

		<div
			class="group flex flex-1 flex-col items-center justify-center text-white sm:-mx-12 lg:flex-row 2xl:mx-0 2xl:gap-x-12">
			{#each howItWorkCards as { desc, img, title }, index}
				<!-- Card -->
				<div
					class={cn(
						'z-[55] mt-12 flex w-full flex-col items-center overflow-hidden rounded-3xl border border-white/[0.2] shadow-lg  md:w-auto md:p-24',
						'gap-y-12 rounded-xl bg-indigo-950/10 transition duration-200 ease-in-out hover:shadow-[0_0_60px_-15px_hsla(274,66%,32%,0.6)] sm:p-4 sm:py-12 md:rounded-3xl md:p-10',
						'group-1:rounded-r container relative h-full p-4 backdrop-blur-3xl backdrop-filter sm:even:border-[6px] sm:even:border-purple-500/50 lg:odd:-mb-16'
					)}>
					<!-- Text -->
					<div
						class="shadow-3xl z-50 flex w-full flex-col space-y-4 p-4 text-neutral-300">
						<!-- Image -->
						<div class="mb-4">
							<div
								class="flex h-20 w-20 items-center justify-center rounded-xl bg-gradient-radial from-neutral-800 to-neutral-900/50 p-4 shadow-xl">
								{#if index === 0}
									<!-- content here -->
									<BotIcon class="h-10 w-full text-purple-600" />
								{:else if index === 1}
									<!-- else if content here -->
									<CandlestickChartIcon class="h-10 w-full text-purple-600" />
								{:else if index === 2}
									<!-- else if content here -->
									<EyeIcon class="h-10 w-full text-purple-600" />
								{/if}
							</div>
						</div>
						<p class="text-3xl font-semibold">{title}</p>
						<div class="max-w-lg leading-relaxed">
							{desc}
						</div>
					</div>

					<!-- BG Blur -->
					<div
						class={`group-[:nth-of-type({3})_&]:-right-[10rem] group-[:nth-of-type({3})_&]:-left-[10rem] group-2:-left-[20rem] group-2:right-auto group-2:-right-[20rem] absolute -bottom-[20rem] z-0 aspect-1 h-auto w-[40rem] bg-[radial-gradient(ellipse_at_center,_#581c87_0%,transparent_70%)] blur-3xl group-odd:left-auto sm:-bottom-[10rem]`} />

					{#if index === 0}
						<div style="bg" class="h-64 w-full sm:h-96 sm:w-[30rem]" />
						<enhanced:img
							src={img}
							alt="img"
							loading="lazy"
							class="absolute inset-x-0 bottom-0 z-[50] h-64 rounded-xl sm:h-96" />
					{:else}
						<div class="relative z-50 h-64 sm:h-96 sm:max-w-[30rem]">
							<enhanced:img
								src={img}
								alt="img"
								loading="lazy"
								class="h-full w-full rounded-xl" />
						</div>
					{/if}
				</div>
			{/each}
		</div>

		<Stars numStars={10} slot="background" />
	</Section>

	<Faq data={FaqData} />

	<JoinTheWhitelist>
		<Footer slot="footer" />
	</JoinTheWhitelist>
</Modal>
