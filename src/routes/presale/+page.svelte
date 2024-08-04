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

<div class="flex min-h-screen flex-col gap-20">
	<Navbar />
	<main
		class="mx-auto flex w-full max-w-7xl grow flex-col items-center justify-center gap-40 px-[30px]">
		<!-- WHITELIST CTA FORM -->
		<div class="flex flex-col items-center gap-14">
			<div class="flex flex-col items-center gap-4">
				<h1 class="text-center text-3xl text-white sm:text-6xl">Genesis Founders Presale</h1>
				<h2 class="text-xl font-light text-gray-100 sm:text-2xl">{formatDate(PRESALE_DATE)}</h2>
			</div>

			<div class="relative h-44 bg-red-500">
				<img src="/cardanoCoin.png" alt="coin" class="h-44" />
				<div
					class="xh-[400px] absolute inset-0 -z-10 h-96 w-full bg-cover bg-bottom filter"
					style={`background-image: url("${PresaleBackground}"); `}>
				</div>
			</div>

			<Countdown
				from={PRESALE_DATE}
				dateFormat="YYYY-MM-DD H:m:s"
				zone="Etc/Universal"
				let:remaining>
				<div class="flex gap-10 text-2xl text-white">
					{#if remaining.done === false}
						<span class="flex flex-col items-center justify-center gap-2">
							<span class="text-6xl font-bold text-violet-200">{remaining.totalDays}</span>
							<span class="font-regular text-2xl text-gray-500">Days</span>
						</span>

						<span class="flex flex-col items-center justify-center gap-2">
							<span class="text-6xl font-bold text-violet-200">{remaining.hours}</span>
							<span class="font-regular text-2xl text-gray-500">Hours</span>
						</span>

						<span class="flex flex-col items-center justify-center gap-2">
							<span class="text-6xl font-bold text-violet-200">{remaining.minutes}</span>
							<span class="font-regular text-2xl text-gray-500">Minutes</span>
						</span>

						<span class="flex flex-col items-center justify-center gap-2">
							<span class="text-6xl font-bold text-violet-200">{remaining.seconds}</span>
							<span class="font-regular text-2xl text-gray-500">Seconds</span>
						</span>
					{:else if remaining.done === true}
						<h2>The time has come!</h2>
					{/if}
				</div>
			</Countdown>

			<a
				aria-label="join the whitelist"
				href="{BASE_URL}/verification"
				class="flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-700 via-purple-800 to-purple-600 px-8 py-4 text-xl font-bold tracking-wider text-purple-100 duration-200 hover:scale-105">
				JOIN THE WHITELIST
				<ArrowRightIcon class="h-8 w-8 text-purple-100/95" />
			</a>
		</div>

		<div class="relative grid w-full auto-rows-auto grid-cols-3 gap-4 px-8">
			<!-- PRESALE CARD -->
			<div
				class="relative col-span-full flex flex-col items-center justify-center gap-16 overflow-hidden rounded-md border border-gray-700 bg-zinc-900/5 p-10 shadow-2xl @container">
				<div class="flex flex-col items-center gap-3">
					<h1 class="text-4xl font-semibold text-white">PHASE 1: GENESIS FOUNDERS PRESALE</h1>
				</div>
				<span
					class="absolute h-1/4 w-2/4 bg-gradient-to-r from-[#93C5FD] via-[#5A9AF8] to-[#3B82F6] opacity-30 blur-[400px]" />
			</div>

			<!-- WHAT DOES 0XARGUS DO CARD -->
			<div
				class="relative col-span-full flex flex-col items-center justify-center gap-16 overflow-hidden rounded-md border border-gray-700 bg-zinc-900/5 p-10 shadow-2xl">
				<div class="flex flex-col items-center gap-3">
					<h1 class="text-4xl font-semibold text-white">
						WHAT DOES
						<span
							style="text-shadow: 1px 0 26px #c084fc; box-shadow: 0 0 27px 0 rgba(126, 34, 206,.5); background: linear-gradient(180deg,rgba(120,34,260,.25) 50%,rgba(75,20,150,.15)) "
							class="rounded-2xl bg-opacity-50 px-2 py-1 text-white shadow-2xl">
							$ARGUS
						</span>
						DO?
					</h1>
					<p class="text-center text-2xl text-white/80">
						Argus Sentry charges $ARGUS tokens for transaction fees, the fee amount is reduced
						proportionally to your holdings, It also gives you revenue share and DAO votes.
					</p>
				</div>
				<img src="/tg-welcomeBanner.gif" class="w-[560px] rounded-md" alt="" />
				<span
					class="absolute h-1/4 w-2/4 bg-gradient-to-r from-[#93C5FD] via-[#5A9AF8] to-[#3B82F6] opacity-30 blur-[400px]" />
			</div>

			<!-- TERMS OF SALE CARD -->
			<div
				class="relative col-span-1 flex items-center justify-center overflow-hidden rounded-md border border-gray-700 bg-zinc-900/5 p-10 shadow-2xl">
				<div class="flex flex-col gap-3">
					<div class="flex items-center gap-2">
						<AlertCircleIcon class="text-violet-500" />
						<h2 class="text-2xl font-semibold text-white">Terms of Sale:</h2>
					</div>
					<div>
						<ul class="text-white/80">
							<li>Purchase minimum: $100</li>
							<li>Purchase maximum: $2000</li>
							<li>Hard-cap: $100,000</li>
						</ul>
					</div>
				</div>
				<span
					class="absolute h-1/4 w-2/4 bg-gradient-to-r from-[#93C5FD] via-[#5A9AF8] to-[#3B82F6] opacity-30 blur-[100px]" />
			</div>

			<!-- ABOUT TOKEN LAUNCH CARD -->
			<div
				class="relative col-span-2 flex items-center justify-center overflow-hidden rounded-md border border-gray-700 bg-zinc-900/5 p-10 shadow-2xl">
				<div class="flex flex-col gap-3">
					<div class="flex items-center gap-2">
						<AlertCircleIcon class="text-violet-500" />
						<h2 class="text-2xl font-semibold text-white">About The Token Launch</h2>
					</div>
					<p class="text-white/80">
						Users registered for the token sale will receive an email with a unique link to enter
						the queue prior to the start of the sale. After the sale starts, users who are already
						in the waiting room will be given a random place in line, ahead of those who arrive
						after the sale starts. Users arriving after the sale starts get a first-come,
						first-served place in line after those in the waiting room.
					</p>
				</div>
				<span
					class="absolute h-1/4 w-2/4 bg-gradient-to-r from-[#93C5FD] via-[#5A9AF8] to-[#3B82F6] opacity-30 blur-[100px]" />
			</div>
		</div>

		<!-- TOKENOMICS -->
		<div class="flex flex-col gap-16">
			<h1 class="text-6xl font-bold text-white">TOKENOMICS</h1>

			<div>
				<h2 class="text-2xl text-white">Highlights</h2>
				<ul class="list-disc text-white/80">
					<li>
						$ARGUS is a deflationary currency with a 1B supply cap. This cap fosters scarcity and
						value appreciation over time.
					</li>
					<li>
						All token holders can stake to receive their proportional fraction of the platform’s
						revenue, with no lockup or bonding required to do so. This model grants freedom and
						liquidity, allowing all participants to benefit from the ecosystem’s success
						proportionally to their token holdings.
					</li>
					<li>
						The initial unlocked distribution at launch is 650,000,000 $ARGUS tokens, subject to
						various lockup schedules.
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
				<div class="flex flex-col gap-10">
					<!-- <DistOverviewLight class="w-full rounded-md" /> -->
					<DistOverviewDark class="w-full rounded-md" />
					<p class="text-white/80">
						This diagram provides a visual breakdown of the token distribution percentages. It helps
						stakeholders quickly grasp how tokens are divided and the proportion each category
						holds.
					</p>
				</div>

				<!-- TOKEN LOCKUP PERIODS -->
				<div class="w-full gap-y-10">
					<LockupPeriodsDark class="w-full rounded-md" />

					<p class="text-white/80">
						This table details the lockup periods and release schedules. This provides a concise
						reference for investors and stakeholders to understand when different portions of tokens
						will become liquid and enter circulation, facilitating better investment and strategic
						decisions.
					</p>
				</div>

				<!-- TOKEN CIRCULATION SCHEDULE -->
				<div class="flex flex-col gap-10">
					<div>
						<h1 class="text-center text-2xl text-white">Token Circulation Schedule</h1>
					</div>

					<CirulationSchedule class="w-full" />

					<p class="text-white/80">
						This diagram depicts the cumulative circulating supply of tokens over time, from launch
						through to month 36. It tracks the increase in circulating tokens as they are released
						from lockup periods, according to the schedules detailed in the Token Lockup Periods
						table.
					</p>
				</div>

				<!-- SUPERCHARGED REVENUE SHARE -->
				<div class="flex flex-col items-center gap-10">
					<div>
						<h1 class="text-center text-2xl text-white">Supercharged Revenue Share</h1>
					</div>

					<SuperchargedRewards class="w-[600px]" />

					<p class="text-white/80">
						Although a significant portion of the Initial Distribution unlocks over time, some
						portions do not. In order to foster a high staking ratio and orderly markets, 0xArgus
						had been designed to provide Supercharged Rewards to Genesis Founding Members and Public
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
