<script lang="ts">
	import Banner from '$lib/components/Banner.svelte';
	import { AlertCircle, ArrowRight, Boxes, ChevronRight, Clock, MailPlus } from 'lucide-svelte';
	import TypeWriter from 'svelte-typewriter';
	import WavyBackground from '$lib/components/ui/WavyBackground/WavyBackground.svelte';
	import GridAndDotBackgroundsSmallGrid from '$lib/components/ui/GridAndDotBackgrounds/GridAndDotBackgroundsSmallGrid.svelte';
	import { SvelteComponent } from 'svelte';
	import Icon_1inch from '$lib/icons/1inch.svelte';
	// @ts-ignore
	import Icon_metamask from '$lib/icons/metamask.svelte';
	import Icon_uniswap from '$lib/icons/uniswap.svelte';
	import Icon_safepal from '$lib/icons/safepal.svelte';
	import TracingBeam from '$lib/components/ui/TracingBeam/TracingBeam.svelte';
	import { EvervaultCard, Icon } from '$lib/components/ui/EvervaultCard/';
	import { GlowingStarsBackgroundCard, GlowingStarsDescription, GlowingStarsTitle } from '$lib/components/ui/GlowingStars/';
	import BackgroundBeams from '$lib/components/ui/BackgroundBeams/BackgroundBeams.svelte';
	import '@xyflow/svelte/dist/style.css';
	import { writable } from 'svelte/store';
	import { SvelteFlow, Background } from '@xyflow/svelte';
	import type { Node } from '@xyflow/svelte';
	import Section from '$lib/layouts/Section.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';

	import { getContext } from 'svelte';
	import Popup from '$lib/components/Popup.svelte';
	import { superForm } from 'sveltekit-superforms';
	import { whitelistSchema } from '$lib/schema.js';
	import { zod } from 'sveltekit-superforms/adapters';
	import type { PageData } from './$types.js';
	import { enhance } from '$app/forms';
	import { cn } from '$lib/utils/cn.js';
	import { MetaTags } from 'svelte-meta-tags';

	// @ts-ignore
	import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';
	import { browser } from '$app/environment';

	// import { Circle } from 'svelte-loading-spinners';

	export let data: PageData;
	//   @ts-ignore
	const { open } = getContext('simple-modal');
	const { form, errors, constraints, delayed, message } = superForm(data.form, {
		validators: zod(whitelistSchema),
		id: 'whitelist-hero',
		onSubmit: ({}) => open(Popup, { type: 'email-verification' })
	});

	const iconComponents: { [key: string]: typeof SvelteComponent } = {
		// @ts-ignore
		'1inch': Icon_1inch,
		// @ts-ignore
		metamask: Icon_metamask,
		// @ts-ignore
		uniswap: Icon_uniswap,
		// @ts-ignore
		safepal: Icon_safepal
	};

	const howItWorkCards2 = [
		{
			title: 'Liquidity Withdrawals',
			desc: "Our system is designed to detect any large-scale liquidity withdrawals. These are often a red flag for rug pulls, where token creators remove their liquidity from a market, causing the token's value to plummet. If such activity is detected, Argus will immediately execute a transaction to secure your holdings.",
			img: ''
		},
		{
			title: 'Manipulating Token Functionalities:',
			desc: 'We constantly monitor for any changes to the token contract. This includes unauthorized minting of new tokens, changes to transaction fees, or any other modifications that could potentially harm token holders. Our system will react to any such changes by securing your assets.',
			img: 'https://img.icons8.com/?size=256&id=tSjEZJQnFcC9&format=png&color=6366f1,a855f7'
		},
		{
			title: 'AI Algorithms',
			desc: 'Our AI algorithms are at the core of our platform. They continuously scan and learn from the entire Ethereum network, identifying patterns and behaviors associated with fraudulent activities. This allows us to constantly improve our detection capabilities and provide better protection for your assets.Continue Monitoring',
			img: 'https://img.icons8.com/?size=256&id=77156&format=png&color=6366f1,a855f7'
		}
	];

	const howItWorkCards = [
		{
			title: 'Liquidity Withdrawals',
			desc: "Our system is designed to detect any large-scale liquidity withdrawals. These are often a red flag for rug pulls, where token creators remove their liquidity from a market, causing the token's value to plummet. If such activity is detected, Argus will immediately execute a transaction to secure your holdings.",
			img: 'https://www.dissentmagazine.org/wp-content/files_mf/1659985189666_GettyImages1241318592.jpeg'
		},
		{
			title: 'Manipulating Token Functionalities',
			desc: 'We constantly monitor for any changes to the token contract. This includes unauthorized minting of new tokens, changes to transaction fees, or any other modifications that could potentially harm token holders. Our system will react to any such changes by securing your assets.',
			img: 'https://images.ctfassets.net/23aumh6u8s0i/3LicB7o8n7rtwGu6Sfyncy/53bf56ecd9f99f2fecbace9923585228/authentication-tokens'
		},
		{
			title: 'AI Algorithms',
			desc: 'Our AI algorithms are at the core of our platform. They continuously scan and learn from the entire Ethereum network, identifying patterns and behaviors associated with fraudulent activities. This allows us to constantly improve our detection capabilities and provide better protection for your assets.Continue Monitoring',
			lottie: 'ai.json'
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
			class: 'flex ring-2 font-outfit shadow-2xl bg-neutral-950 text-white ring-indigo-500 items-center justify-center rounded-xl',
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
			position: { x: 0, y: 175 },
			// @ts-ignore
			sourcePosition: 'bottom',
			// @ts-ignore
			targetPosition: 'top'
		},

		{
			id: 'A-1',
			data: { label: 'Front-Run Transaction - Returning the funds back to your wallet' },

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
			class: 'flex ring-2 font-outfit shadow-2xl bg-neutral-950 text-white ring-indigo-500 items-center justify-center rounded-xl',
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
			position: { x: 0, y: 175 },
			// @ts-ignore
			sourcePosition: 'bottom',
			// @ts-ignore
			targetPosition: 'top'
		},

		{
			id: 'A-1',
			data: { label: 'Front-Run Transaction - Returning the funds back to your wallet' },

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
			labelStyle: 'stroke: {blue};',
			animated: true,
			label: 'Perm2 Stored Approval'
			// class: 'rounded-xl bg-blue-500 '
		},

		{
			id: '3-5',
			type: 'default',
			source: '3',
			target: '5',
			animated: true,
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
			labelStyle: 'background-color: {red};',
			animated: true
		},
		{
			id: '5',
			type: 'default',
			source: 'A',
			target: 'A-2',
			label: 'Undetected',
			animated: true
		}
	]);
	const edgesMobile = writable([
		{
			id: '1-2',
			type: 'default',
			source: '1',
			target: 'A',
			labelStyle: 'stroke: {blue};',
			animated: true,
			label: 'Perm2 Stored Approval'
			// class: 'rounded-xl bg-blue-500 '
		},

		{
			id: '3-5',
			type: 'default',
			source: '3',
			target: '5',
			animated: true,
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
			labelStyle: 'background-color: {red};',
			animated: true
		},
		{
			id: '5',
			type: 'default',
			source: 'A',
			target: 'A-2',
			label: 'Undetected',
			animated: true
		}
	]);

	const snapGrid = [25, 25];
</script>

<!-- HERO -->

<MetaTags
	title="Home"
	titleTemplate="%s | 0xArgus"
	description="0xArgus Rug Pull Prevention Middleware for Ethereum, Solana, Arbitrum."
	canonical="0xargus.org"
	openGraph={{
		url: 'https://www.0xargus.org',
		title: '0xArgus',
		description: '0xArgus Rug Pull Prevention Middleware for Ethereum, Solana, Arbitrum.',
		images: [
			{
				url: 'https://0xargus.org/logo-rounded.svg',
				width: 800,
				height: 600,
				alt: 'Og Image Alt'
			},
			{
				url: 'https://0xargus.org/logo-rounded.svg',
				width: 900,
				height: 800,
				alt: 'Og Image Alt Second'
			},
			{ url: 'https://0xargus.org/logo-rounded.svg' },
			{ url: 'https://0xargus.org/logo-rounded.svg' }
		],
		siteName: '0xArgus'
	}}
	twitter={{
		handle: '@0xargusorg',
		site: '0xargus.org',
		cardType: 'summary_large_image',
		title: '0xArgus Rug Pull Prevention Middleware for Ethereum, Solana, Arbitrum.',
		description: '',
		image: 'https://www.example.ie/twitter-image.jpg',
		imageAlt: 'Twitter image alt'
	}}
	facebook={{
		appId: '1234567890'
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
			<div style="--cursor-width: 0.125ch; --cursor-color: #ffffff;" class="relative mb-24 text-center font-outfit text-4xl text-white sm:mt-8">
				Introducing RugPull Prevention Middleware for
				<div class="overflow-hidden">
					<TypeWriter element="span" class="absolute inset-0 whitespace-nowrap" cursor={false} as="span" mode="loop" wordInterval={4000}>
						<span class="inline-block font-semibold text-purple-500">Ethereum.</span>
						<span class="inline-block font-semibold text-indigo-500">Solana.</span>
						<span class="inline-block font-semibold text-blue-500">Arbitrum.</span>
					</TypeWriter>
				</div>
			</div>
			<!-- HERO TEXT END -->

			<!-- WHITELIST BUTTON -->
			<form method="POST" use:enhance class="relative z-50 flex h-16 w-full justify-end rounded-3xl bg-neutral-900 px-4 py-4 font-outfit shadow-2xl sm:max-w-[720px]">
				<input
					class={cn(
						// Global
						'absolute inset-0 h-full w-full rounded-3xl bg-transparent text-white',
						// Desktop
						'p-4 pl-8 text-2xl',
						// Mobile
						'',
						// Animations
						'',
						// Focus/Hover
						'focus:outline-none focus:outline-indigo-500 focus:ring focus:ring-indigo-500'
					)}
					placeholder="hello@moon.com"
					type="email"
					name="email"
					aria-invalid={$errors.email ? 'true' : undefined}
					bind:value={$form.email}
					{...$constraints.email} />
				<!-- Disabled when loading -->
				<button
					class={cn(
						// Global
						'absolute inset-y-0 right-0 flex items-center justify-center border-white bg-transparent bg-gradient-to-tr from-neutral-700 via-neutral-800 to-neutral-900 text-white shadow-2xl dark:border-neutral-400  dark:text-white',
						// Desktop
						'-sm:rounded-l-none group transform font-bold tracking-wide sm:m-0 sm:h-full sm:w-auto sm:space-x-2 sm:rounded-3xl sm:border-0 sm:px-6 sm:py-2',
						// Mobile
						'my-auto mr-4 h-12  w-12 rounded-full border-2 p-1',
						// Animations
						'transition duration-300 ease-in-out',
						// Focus/Hover
						'hover:scale-105 focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-500'
					)}>
					<!-- Desktop -->
					<p class="hidden tracking-widest sm:block">JOIN THE WHITELIST</p>
					{#if $delayed}
						<!-- <Circle color="white" /> -->
					{:else}
						<div class="hidden rounded-full bg-neutral-700 p-2 text-xs shadow-lg duration-200 ease-in-out group-hover:bg-neutral-600 sm:block">
							<MailPlus class="m-auto h-4 w-4 rounded-full text-xs" />
						</div>

						<!-- Mobile -->
						<ChevronRight class="h-5 w-5 text-neutral-300 sm:hidden" />
					{/if}
				</button>
			</form>
			{#if $message}
				<p class="z-50 mt-8 flex items-center justify-center gap-x-2 font-outfit text-base font-medium tracking-wide text-indigo-500">
					<Clock class="purple-500" /> Submittion Completed
				</p>
			{:else if $errors.email}
				<p class="z-50 mt-8 flex items-center justify-center gap-x-2 font-outfit text-base font-medium tracking-wide text-red-500"><AlertCircle /> {$errors.email.join('/n')}</p>
			{:else}
				<div class="z-50 mt-8 flex items-center justify-center gap-x-2 font-outfit text-base font-medium tracking-wide text-neutral-600">
					<Clock class="hidden w-5 sm:block" />
					<p>
						<span class="inline-block self-stretch sm:hidden">Join the whitelist - </span> 1300/1500 eligible genesis founder slots remaining.
					</p>
				</div>
			{/if}
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
			<h2 class="bg-gradient-to-t from-purple-500 via-purple-600 to-indigo-500 bg-clip-text text-center text-4xl font-bold text-transparent sm:text-6xl">Your Guardian in the DeFi Universe</h2>

			<p class="mx-auto mt-6 max-w-3xl text-center text-xl font-normal text-white sm:mt-16 sm:text-3xl">
				Our platform is the bridge to a safer DeFi experience, providing the robust protection you need to navigate the blockchain space with confidence.
			</p>

			<!-- TODO: FIX Over complicating a simple solution -->
			<div class="mt-12 flex w-full flex-wrap gap-4 rounded-xl border border-dashed border-neutral-400 sm:mt-24">
				{#each ['1inch', 'metamask', 'uniswap', 'safepal'] as icon}
					<div class="flex flex-1 items-center justify-center border border-dashed border-neutral-400/5 px-2 py-8 sm:p-12">
						{#if iconComponents[icon]}
							<svelte:component this={iconComponents[icon]} height="30" classes="saturate-0" />
						{/if}
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
	<!-- <div class="absolute -top-64 z-50">
		<img alt="gradient" src="/blur.png" />
	</div> -->

	<SectionHeader title="How It Works" subtitle="A basic overview of the technicals" />
	<div class="relative right-0 flex h-[1150px] w-full items-center justify-center overflow-hidden sm:hidden">
		<SvelteFlow
			class=""
			attributionPosition="bottom-right"
			nodes={nodesMobile}
			fitView
			fitViewOptions={{ minZoom: 100, duration: 2 }}
			edges={edgesMobile}
			nodesDraggable={false}
			nodesConnectable={false}
			elementsSelectable={false}>
			<Background patternColor="#0a0a0a" bgColor="#0a0a0a" />
		</SvelteFlow>

		<!-- Hide Attribution -->
		<div class="absolute bottom-0 right-0 h-12 w-20 bg-neutral-950" />
		<!-- Overlay to prevent moving -->
		<div class="absolute inset-0" />
	</div>
	<div class={'svelte-flow-container relative hidden w-full items-center justify-center overflow-hidden sm:flex sm:h-[1000px]'}>
		<SvelteFlow class="" attributionPosition="bottom-right" {nodes} fitView fitViewOptions={{ duration: 2 }} {edges} nodesDraggable={false} nodesConnectable={false} elementsSelectable={false}>
			<Background patternColor="#0a0a0a" bgColor="#0a0a0a" />
		</SvelteFlow>

		<!-- Hide Attribution -->
		<div class="absolute bottom-0 right-0 h-12 w-20 bg-neutral-950" />
		<!-- Overlay to prevent moving -->
		<div class="absolute inset-0" />
	</div>
</Section>

<Section>
	<div class="flex flex-col flex-wrap items-center justify-center text-white sm:mt-48 sm:odd:child:flex-row-reverse">
		{#each howItWorkCards as card}
			<!-- Card -->
			<div
				class={cn(
					'mt-12 flex w-full flex-col items-center overflow-hidden rounded-3xl border-2 shadow-2xl sm:w-auto sm:flex-row sm:p-24 dark:border-white/[0.2]',
					'relative flex max-h-[800px] w-full flex-col gap-y-12 overflow-hidden rounded-xl border border-[#d33df529] bg-neutral-900/50 p-4 py-12 transition hover:shadow-[0_0_60px_-15px_hsla(274,66%,32%,0.6)] sm:gap-x-12 sm:gap-y-0 md:rounded-3xl md:p-10'
				)}>
				<!-- BG Blur -->
				<div class="absolute -bottom-[20rem] -right-[20rem] left-auto z-0 aspect-1 h-auto w-[40rem] bg-[radial-gradient(ellipse_at_center,_#581c87_0%,transparent_70%)] blur-3xl sm:-top-[20rem]" />
				<!-- Image -->
				{#if card.img}
					<div class="-m-4 -mt-12 h-96 max-w-96 sm:m-0">
						<img alt="s" src={card.img} class="w- h-full rounded-xl shadow-2xl" />
					</div>
				{:else if browser}
					<div class="sm-0 -mx-4 -mt-12 h-96 max-w-96 rounded-xl drop-shadow-2xl sm:m-0">
						<LottiePlayer src="ai.json" autoplay loop={true} renderer="svg" background="transparent" />
					</div>
				{/if}

				<!-- Text -->
				<div class="z-50 space-y-4 text-neutral-300">
					<p class="text-center text-3xl font-semibold sm:text-left">{card.title}</p>
					<div class="max-w-lg text-center leading-relaxed sm:text-left">
						{card.desc}
					</div>
				</div>
			</div>
		{/each}
	</div>
</Section>

<!-- WAITLIST START -->
<section class="relative z-50 mt-12 flex h-[30rem] w-full flex-col items-center justify-center bg-neutral-950 pt-32 font-outfit -antialiased">
	<div class="mx-auto max-w-2xl p-4">
		<h1 class="relative z-10 bg-gradient-to-b from-neutral-200 to-neutral-400 bg-clip-text text-center font-sans text-3xl font-bold text-transparent sm:to-neutral-600 sm:text-7xl">
			Join the waitlist
		</h1>
		<p class="relative z-10 mx-auto my-2 max-w-lg text-center text-sm text-neutral-300 sm:text-neutral-500">
			Join the 0xArgus waitlist now to become a genesis founding member. Getting a chance to participate in the presale, and beta programs.
		</p>
		<div class="mt-8 flex items-center justify-center">
			<input
				type="text"
				placeholder="hello@moon.com"
				class="relative z-20 w-full rounded-l-lg border border-neutral-700 bg-neutral-950 p-2 text-white duration-300 ease-in-out placeholder:text-neutral-400 hover:z-50 focus:z-50 focus:outline-none focus:ring-2 focus:ring-purple-500 sm:placeholder:text-neutral-700" />
			<button
				class="z-10 h-full transform cursor-pointer rounded-r-lg border border-l-0 border-neutral-700 p-2 text-neutral-500 transition duration-300 ease-in-out hover:z-50 hover:scale-110 hover:bg-purple-500 hover:text-white focus:z-50 focus:scale-105 focus:border-l focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:hover:bg-purple-500 dark:focus:border-purple-500 dark:focus:ring-2 dark:focus:ring-purple-500">
				<ArrowRight />
			</button>
		</div>
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
</section>
<!-- WAITLIST END -->
