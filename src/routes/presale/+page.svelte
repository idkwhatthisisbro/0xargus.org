<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Countdown from '$lib/components/Countdown.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { PRESALE_DATE } from '../../constants';
	import { ArrowRightIcon, AlertCircleIcon } from 'lucide-svelte';
	// import DistOverview from '/static/tokenomics/dist-overview.svg?component';
	import DistOverviewDark from '/static/tokenomics/tokenomics.svg?component';
	import LockupPeriodsDark from '/static/tokenomics/lockup-release.svg?component';

	import CirulationSchedule from '/static/tokenomics/circulation-schedule.svg?component';
	import SuperchargedRewards from '/static/tokenomics/supercharged-rewards2.svg?component';
	import PresaleBackground from '/static/tokenomics/78.png?component';

	import Roadmap from '$lib/components/Roadmap.svelte';
	import { BASE_URL } from '../../constants';

	// Move to util
	function formatDate(inputDate) {
		const date = new Date(inputDate);

		// Ensure the date is interpreted as UTC
		date.setMinutes(date.getMinutes() - date.getTimezoneOffset());

		const months = [
			'JAN',
			'FEB',
			'MAR',
			'APR',
			'MAY',
			'JUN',
			'JUL',
			'AUG',
			'SEP',
			'OCT',
			'NOV',
			'DEC'
		];
		const month = months[date.getUTCMonth()];
		const day = date.getUTCDate().toString().padStart(2, '0');
		const year = date.getUTCFullYear();

		let hours = date.getUTCHours();
		const ampm = hours >= 12 ? 'PM' : 'AM';
		hours = hours % 12;
		hours = hours ? hours : 12; // Convert 0 to 12

		return `${month} ${day}, ${year} ${hours}${ampm} UTC`;
	}

	const data: {
		title: string;
		objective: string;
		details: string[];
		status: 'IN PROGRESS' | 'COMING SOON' | 'COMPLETED';
		date: string;
		cardBg: string;
	}[] = [
		{
			title: 'Genesis Founders Presale',
			objective: 'Secure foundational capital for robust project kickoff.',
			details: [
				'Funding Allocation: Resources will be strategically divided between aggressive marketing campaigns to build awareness and critical early-stage product development to ensure a strong product foundation.',
				'Impact: This phase is crucial for engaging early adopters and securing the capital necessary for a successful platform launch.'
			],
			status: 'COMPLETED',
			date: 'Q2 2024',
			cardBg: 'bg-[#221D31]'
		},
		{
			title: 'Public Presale',
			objective: 'Expand community involvement and secure additional funding before public launch.',
			details: [
				'Funding Allocation: Similar to the Genesis Founders Presale, funds will be channeled into further marketing efforts to widen the user base and continued product development to refine and enhance platform features.',
				'Impact: Ensures continued momentum in building market presence and improving platform robustness based on early feedback.'
			],
			status: 'IN PROGRESS',
			date: 'Q2 2024',
			cardBg: 'bg-[#1D192A]'
		},
		{
			title: 'Public beta launch',
			objective:
				'Thoroughly test the product in a real-world environment and iterate based on user feedback.',
			details: [
				'Approach: Release the beta version of the platform to the public, inviting users to test the functionality and provide valuable feedback, which will be pivotal for final adjustments pre-official release.',
				'Impact: Critical testing phase to iron out any issues and gather community input to enhance product utility and user experience.'
			],
			status: 'COMING SOON',
			date: 'Q2 2024',
			cardBg: 'bg-[#191624]'
		},
		{
			title: 'Presale Tokens Release',
			objective:
				'Reward early supporters with staking capabilities while maintaining market stability.',
			details: [
				'Token Utility: Tokens released during this phase will be eligible for staking once the revenue share platform has been released, allowing holders to earn rewards based on their contribution to network security and consensus.',
				'Restrictions: To prevent market flooding and ensure price stability, these tokens will not be tradable initially. This encourages a focus on supporting the network and earning through participation rather than speculation.'
			],
			status: 'COMING SOON',
			date: 'Q2 2024',
			cardBg: 'bg-[#15131E]'
		},
		{
			title: 'Revenue Sharing Platform',
			objective:
				'Launch the main feature of the platform, enabling token holders to directly benefit from its success.',
			details: [
				'Functionality: Activate the revenue-sharing mechanism, which distributes a portion of the platform’s earnings back to the token holders, proportionate to their stake.',
				'Impact: This not only incentivizes long-term holding but also aligns the interests of the users with the success of the platform, fostering a community-driven growth model.'
			],
			status: 'COMING SOON',
			date: 'Q2 2024',
			cardBg: 'bg-[#110F18]'
		},
		{
			title: 'DEX Launch',
			objective: 'Provide a seamless, secure environment for token trading and liquidity.',
			details: [
				'Capabilities: Launch a fully functional DEX to facilitate easy and secure trading of $ARGUS tokens alongside other cryptocurrencies, with low fees and direct peer-to-peer exchanges.',
				'Impact: Enhances liquidity and utility of $ARGUS tokens, providing holders with a reliable and efficient means to manage and trade their assets within the ecosystem.'
			],
			status: 'COMING SOON',
			date: 'Q2 2024',
			cardBg: 'bg-[#0D0C13]'
		}
	];
</script>

<div class="relative flex min-h-screen flex-col gap-20">
	<Navbar />
	<main
		class="mx-auto flex w-full max-w-7xl grow flex-col items-center justify-center gap-40 px-[30px]">
		<!-- WHITELIST CTA FORM -->
		<div class="flex flex-col items-center gap-14">
			<div class="flex flex-col items-center gap-8">
				<h1 class="text-center text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
					<span
						class="bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
						Genesis
					</span>
					<span class="ml-2">Founders Presale</span>
				</h1>
				<h2 class="text-2xl font-light text-indigo-200 sm:text-3xl">
					<time datetime={PRESALE_DATE} class="flex items-center justify-center">
						{formatDate(PRESALE_DATE)}
					</time>
				</h2>
			</div>

			<div class="h-44 w-full overflow-hidden">
				<img src="/cardanoCoin.png" alt="coin" class="mx-auto h-44" />
				<img
					src={PresaleBackground}
					alt="Presale Background"
					class="absolute inset-0 -top-24 -z-50 h-[750px] w-full object-cover blur-[0.5px] filter" />
			</div>

			<Countdown
				from={PRESALE_DATE}
				dateFormat="YYYY-MM-DD H:m:s"
				zone="Etc/Universal"
				let:remaining>
				<div class="flex gap-10 text-3xl text-white">
					{#if remaining.done === false}
						<span class="flex flex-col items-center justify-center gap-3">
							<span
								class="text-7xl font-bold text-violet-200 transition-all duration-300 ease-in-out hover:text-violet-300"
								>{remaining.totalDays}</span>
							<span class="text-2xl font-medium text-indigo-300">Days</span>
						</span>

						<span class="flex flex-col items-center justify-center gap-3">
							<span
								class="text-7xl font-bold text-violet-200 transition-all duration-300 ease-in-out hover:text-violet-300"
								>{remaining.hours}</span>
							<span class="text-2xl font-medium text-indigo-300">Hours</span>
						</span>

						<span class="flex flex-col items-center justify-center gap-3">
							<span
								class="text-7xl font-bold text-violet-200 transition-all duration-300 ease-in-out hover:text-violet-300"
								>{remaining.minutes}</span>
							<span class="text-2xl font-medium text-indigo-300">Minutes</span>
						</span>

						<span class="flex flex-col items-center justify-center gap-3">
							<span
								class="text-7xl font-bold text-violet-200 transition-all duration-300 ease-in-out hover:text-violet-300"
								>{remaining.seconds}</span>
							<span class="text-2xl font-medium text-indigo-300">Seconds</span>
						</span>
					{:else if remaining.done === true}
						<h2 class="text-5xl font-bold text-violet-200">The time has come!</h2>
					{/if}
				</div>
			</Countdown>

			<a
				href="{BASE_URL}/verification"
				class="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-2xl font-bold text-white shadow-lg transition-all duration-300 hover:shadow-purple-500/30 focus:outline-none focus:ring-4 focus:ring-purple-300">
				<span
					class="relative flex items-center rounded-xl bg-gray-900 px-10 py-4 transition-all duration-75 ease-in group-hover:bg-opacity-0">
					<span class="mr-3">Join Whitelist</span>
					<svg
						class="h-7 w-7 transition-transform duration-300 group-hover:translate-x-2"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path
							fill-rule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clip-rule="evenodd" />
					</svg>
				</span>
			</a>
		</div>
		<div
			class="relative grid w-full auto-rows-auto grid-cols-1 gap-6 px-4 md:grid-cols-2 md:px-8 lg:grid-cols-3">
			<!-- PRESALE CARD -->
			<div
				class="col-span-full flex flex-col items-center justify-center gap-8 overflow-hidden rounded-xl border border-gray-400/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md transition-all duration-300 hover:shadow-purple-500/20">
				<h1 class="text-center text-3xl font-bold text-white md:text-4xl">
					PHASE 1: GENESIS FOUNDERS PRESALE
				</h1>
				<p class="text-center text-lg text-gray-300">
					Be among the first to secure your position in the future of decentralized finance.
				</p>
				<span
					class="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-10 blur-[100px]"
				></span>
			</div>

			<!-- WHAT DOES 0XARGUS DO CARD -->
			<div
				class="col-span-full flex flex-col items-center justify-center gap-8 overflow-hidden rounded-xl border border-gray-400/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md transition-all duration-300 hover:shadow-blue-500/20">
				<h1 class="text-center text-3xl font-bold text-white md:text-4xl">
					WHAT DOES
					<span
						class="inline-block rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 px-2 py-1 text-white shadow-lg">
						$ARGUS
					</span>
					DO?
				</h1>
				<p class="max-w-3xl text-center text-lg text-gray-300">
					Argus Sentry charges $ARGUS tokens for transaction fees, with the fee amount reduced
					proportionally to your holdings. It also provides revenue sharing and DAO voting rights to
					token holders.
				</p>
				<img
					src="/tg-welcomeBanner.gif"
					class="w-full max-w-[560px] rounded-lg shadow-lg"
					alt="Argus Welcome Banner" />
				<span
					class="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-10 blur-[100px]"
				></span>
			</div>

			<!-- TERMS OF SALE CARD -->
			<div
				class="col-span-1 flex flex-col justify-between overflow-hidden rounded-xl border border-gray-400/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md transition-all duration-300 hover:shadow-violet-500/20">
				<div class="mb-4 flex items-center gap-2">
					<AlertCircleIcon class="h-6 w-6 text-violet-500" />
					<h2 class="text-2xl font-bold text-white">Terms of Sale</h2>
				</div>
				<ul class="space-y-2 text-gray-300">
					<li class="flex items-center">
						<ArrowRightIcon class="mr-2 h-4 w-4 text-violet-400" /> Purchase minimum: $100
					</li>
					<li class="flex items-center">
						<ArrowRightIcon class="mr-2 h-4 w-4 text-violet-400" /> Purchase maximum: $2000
					</li>
					<li class="flex items-center">
						<ArrowRightIcon class="mr-2 h-4 w-4 text-violet-400" /> Hard-cap: $100,000
					</li>
				</ul>
				<span
					class="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 opacity-10 blur-[50px]"
				></span>
			</div>

			<!-- ABOUT TOKEN LAUNCH CARD -->
			<div
				class="col-span-1 flex flex-col justify-between overflow-hidden rounded-xl border border-gray-400/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md transition-all duration-300 hover:shadow-blue-500/20 md:col-span-2">
				<div class="mb-4 flex items-center gap-2">
					<AlertCircleIcon class="h-6 w-6 text-blue-500" />
					<h2 class="text-2xl font-bold text-white">About The Token Launch</h2>
				</div>
				<p class="text-gray-300">
					Registered users will receive a unique link to enter the queue before the sale starts.
					Early arrivals get randomized positions, followed by first-come, first-served for
					latecomers. Join the waiting room for the best chance at participating in this
					groundbreaking token sale.
				</p>
				<span
					class="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-10 blur-[50px]"
				></span>
			</div>
		</div>

		<!-- TOKENOMICS -->
		<div class="flex flex-col gap-16">
			<h1 class="text-center text-6xl font-bold text-white">TOKENOMICS</h1>

			<div class="rounded-xl bg-white/5 p-8 backdrop-blur-sm">
				<h2 class="mb-6 text-3xl font-semibold text-violet-400">Key Highlights</h2>
				<ul class="space-y-4 text-white/90">
					<li class="flex items-start">
						<ArrowRightIcon class="mr-2 mt-1 h-6 w-6 flex-shrink-0 text-violet-400" />
						<span
							><strong class="text-violet-300">Deflationary Model:</strong> $ARGUS has a capped supply
							of 1 billion tokens, promoting scarcity and potential long-term value appreciation.</span>
					</li>
					<li class="flex items-start">
						<ArrowRightIcon class="mr-2 mt-1 h-6 w-6 flex-shrink-0 text-violet-400" />
						<span
							><strong class="text-violet-300">Inclusive Staking:</strong> All token holders can stake
							their $ARGUS to earn a share of the platform's revenue, with no mandatory lockup periods
							or bonding requirements.</span>
					</li>
					<li class="flex items-start">
						<ArrowRightIcon class="mr-2 mt-1 h-6 w-6 flex-shrink-0 text-violet-400" />
						<span
							><strong class="text-violet-300">Initial Distribution:</strong> 650,000,000 $ARGUS tokens
							will be unlocked at launch, with various lockup schedules applied to ensure controlled
							circulation.</span>
					</li>
					<li class="flex items-start">
						<ArrowRightIcon class="mr-2 mt-1 h-6 w-6 flex-shrink-0 text-violet-400" />
						<span
							><strong class="text-violet-300">Ecosystem Alignment:</strong> The tokenomics model is
							designed to align interests, rewarding participants based on their token holdings and fostering
							long-term ecosystem growth.</span>
					</li>
				</ul>
			</div>

			<div class="flex flex-col gap-36">
				<!-- EXPECTED ALLOCATION OF INITIAL DISTRIBUTION -->
				<!-- <div class="flex flex-col gap-10">
					<div class="text-center">
						<h1 class="text-2xl text-white">Expected Allocation of Initial Distribution</h1>
						<h2 class="text-white">(1 Billion ARGUS Tokens)</h2>
					</div>

					<DistOverview class="w-full" /> <p class="text-white/80"> This diagram provides a visual breakdown of the token distribution percentages. It helps stakeholders quickly grasp how tokens are divided and the proportion each category holds. </p> </div> -->
				<div class="flex flex-col gap-10 rounded-xl bg-gray-800 p-8 shadow-lg">
					<h2 class="mb-4 text-2xl font-semibold text-violet-400">Token Distribution Overview</h2>
					<!-- <DistOverviewLight class="w-full rounded-md" /> -->
					<DistOverviewDark class="w-full rounded-md" />
					<p class="text-white/80">
						This diagram provides a visual breakdown of the token distribution percentages. It helps
						stakeholders quickly grasp how tokens are divided and the proportion each category
						holds.
					</p>
				</div>
				<!-- TOKEN LOCKUP PERIODS -->
				<div class="flex flex-col gap-10 rounded-xl bg-gray-800 p-8 shadow-lg">
					<h2 class="mb-4 text-2xl font-semibold text-violet-400">Token Lockup Periods</h2>
					<LockupPeriodsDark class="w-full rounded-md" />
					<p class="text-white/80">
						This table details the lockup periods and release schedules for different token
						allocations. It provides a concise reference for investors and stakeholders to
						understand when different portions of tokens will become liquid and enter circulation,
						facilitating better investment and strategic decisions.
					</p>
				</div>

				<!-- TOKEN CIRCULATION SCHEDULE -->
				<!-- TOKEN CIRCULATION SCHEDULE -->
				<div class="flex flex-col gap-10 rounded-xl bg-gray-800 p-8 shadow-lg">
					<h2 class="mb-4 text-2xl font-semibold text-violet-400">Token Circulation Schedule</h2>
					<CirulationSchedule class="w-full rounded-md" />
					<p class="text-white/80">
						This diagram depicts the cumulative circulating supply of tokens over time, from launch
						through to month 36. It tracks the increase in circulating tokens as they are released
						from lockup periods, according to the schedules detailed in the Token Lockup Periods
						table.
					</p>
				</div>

				<!-- SUPERCHARGED REVENUE SHARE -->
				<div class="flex flex-col gap-10 rounded-xl bg-gray-800 p-8 shadow-lg">
					<h2 class="mb-4 text-2xl font-semibold text-violet-400">Supercharged Revenue Share</h2>
					<SuperchargedRewards class="w-full rounded-md" />
					<p class="text-white/80">
						Although a significant portion of the Initial Distribution unlocks over time, some
						portions do not. In order to foster a high staking ratio and orderly markets, 0xArgus
						has been designed to provide Supercharged Rewards to Genesis Founding Members and Public
						Presale participants that stake their unlocked tokens throughout the full duration of
						their vesting period.
					</p>
				</div>
			</div>
		</div>

		<!-- ROADMAP -->
		<div class="flex w-full flex-col gap-16">
			<h1 class="w-full text-6xl font-bold text-white">ROADMAP</h1>
			<Roadmap {data} />
		</div>
	</main>

	<Footer />
</div>

<!-- TODO: -->
<!-- - ROADMAP -->
<!-- - REVSHARE (EMPHASIS ON STAKING) -->
