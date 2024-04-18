<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Countdown from '$lib/components/Countdown.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { PRESALE_DATE } from '../../constants';
	import { ArrowRightCircleIcon, AlertCircleIcon } from 'lucide-svelte';
	import CirulationSchedule from '/static/tokenomics/circulation-schedule.svg?component';
	import DistOverview from '/static/tokenomics/dist-overview.svg?component';
</script>

<div class="flex min-h-screen flex-col gap-20">
	<Navbar />

	<main class="mx-auto flex w-full max-w-7xl grow flex-col items-center justify-center gap-40 px-[30px] font-outfit">
		<!-- <img src="/presale-hero.png" class="absolute top-0 -z-10 w-full" /> -->
		<!-- WHITELIST CTA FORM -->
		<div class="flex flex-col items-center gap-14">
			<div class="flex flex-col items-center gap-4">
				<h1 class="font-regular text-6xl text-white">Genesis Founders Presale</h1>
				<h2 class="text-2xl font-light text-gray-100">MAY 04, 2024 3PM UTC</h2>
			</div>

			<img src="/cardanoCoin.png" class="h-44" />

			<Countdown from={PRESALE_DATE} dateFormat="YYYY-MM-DD H:m:s" zone="Etc/Universal" let:remaining>
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
					{:else}
						<h2>The time has come!</h2>
					{/if}
				</div>
			</Countdown>

			<a href="https://verifications.0xargus.org" class="flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-900 to-purple-500 px-8 py-4 text-xl font-bold text-white">
				JOIN THE WHITELIST
				<ArrowRightCircleIcon class="h-8 w-8 text-purple-200" />
			</a>
		</div>

		<div class="relative grid w-full auto-rows-auto grid-cols-3 gap-4 px-8">
			<div class="relative col-span-1 flex items-center justify-center overflow-hidden rounded-md border border-gray-700 bg-zinc-900/5 p-10 shadow-2xl">
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
				<span class="absolute h-1/4 w-2/4 bg-gradient-to-r from-[#93C5FD] via-[#5A9AF8] to-[#3B82F6] opacity-30 blur-[100px]" />
			</div>

			<div class="relative col-span-2 flex items-center justify-center overflow-hidden rounded-md border border-gray-700 bg-zinc-900/5 p-10 shadow-2xl">
				<div class="flex flex-col gap-3">
					<div class="flex items-center gap-2">
						<AlertCircleIcon class="text-violet-500" />
						<h2 class="text-2xl font-semibold text-white">About The Token Launch</h2>
					</div>
					<p class="text-white/80">
						Users registered for the token sale will receive an email with a unique link to enter the queue prior to the start of the sale. After the sale starts, users who are already in the waiting
						room will be given a random place in line, ahead of those who arrive after the sale starts. Users arriving after the sale starts get a first-come, first-served place in line after those in
						the waiting room.
					</p>
				</div>
				<span class="absolute h-1/4 w-2/4 bg-gradient-to-r from-[#93C5FD] via-[#5A9AF8] to-[#3B82F6] opacity-30 blur-[100px]" />
			</div>

			<div class="relative col-span-full flex flex-col items-center justify-center gap-16 overflow-hidden rounded-md border border-gray-700 bg-zinc-900/5 p-10 shadow-2xl">
				<div class="flex flex-col items-center gap-3">
					<h1 class="text-4xl font-semibold text-white">
						WHAT DOES
						<span
							style="text-shadow: 1px 0 26px #c084fc; box-shadow: 0 0 27px 0 rgba(126, 34, 206,.5); background: linear-gradient(180deg,rgba(120,34,260,.25) 50%,rgba(75,20,150,.15)) "
							class="rounded-2xl bg-opacity-50 px-2 py-1 text-white shadow-2xl"
							>$ARGUS
						</span>
						DO?
					</h1>
					<p class="text-center text-2xl text-white/80">Depending on your, holding Argus yields you. No transaction fees <br /> when using the product, to revenue share and DAO votes.</p>
				</div>
				<img src="/tg-welcomeBanner.gif" class="w-[560px] rounded-md" alt="" />
				<span class="absolute h-1/4 w-2/4 bg-gradient-to-r from-[#93C5FD] via-[#5A9AF8] to-[#3B82F6] opacity-30 blur-[400px]" />
			</div>
		</div>

		<!-- TOKENOMICS -->
		<div class="flex flex-col gap-10">
			<h1 class="text-6xl font-bold text-white">TOKENOMICS</h1>

			<div>
				<h2 class="text-2xl text-white">Highlights</h2>
				<ul class="list-disc text-white">
					<li>$ARGUS is a deflationary currency with a 1B supply cap. This cap fosters scarcity and value appreciation over time.</li>
					<li>
						All token holders can stake to receive their proportional fraction of the platform’s revenue, with no lockup or bonding required to do so. This model grants freedom and liquidity, allowing
						all participants to benefit from the ecosystem’s success proportionally to their token holdings.
					</li>
					<li>The initial distribution at launch is 1,000,000,000 $ARGUS tokens, subject to various lockup schedules.</li>
				</ul>
			</div>

			<div class="flex flex-col gap-36">
				<!-- EXPECTED ALLOCATION OF INITIAL DISTRIBUTION -->
				<div class="flex flex-col gap-8">
					<div class="text-center">
						<h1 class="text-xl text-white">Expected Allocation of Initial Distribution</h1>
						<h2 class="text-white">(1 Billion ARGUS Tokens)</h2>
					</div>

					<DistOverview class="w-full" />

					<p class="text-white">
						This diagram provides a visual breakdown of the token distribution percentages. It helps stakeholders quickly grasp how tokens are divided and the proportion each category holds.
					</p>
				</div>

				<!-- TOKEN LOCKUP PERIODS -->
				<div class="flex flex-col gap-8">
					<div class="text-center">
						<h1 class="text-xl text-white">Token Lockup Periods</h1>
					</div>

					<table border="1" class="table-auto overflow-x-scroll whitespace-nowrap text-left text-white">
						<thead class="border-y border-b-white">
							<tr>
								<th class="px-6 py-2">Type</th>
								<th class="border-x border-dashed border-r-white px-6 py-2">Total Amount</th>
								<th class="border-x border-dashed border-r-white px-6 py-2">Immediate Release (20%)</th>
								<th class="border-x border-dashed border-r-white px-6 py-2">Remaining Amount</th>
								<th class="border-r border-dashed border-r-white px-6 py-2">Lockup Period</th>
								<th class="px-6 py-2">Distribution Frequency</th>
							</tr>
						</thead>
						<tbody class="border-b border-b-white">
							<tr class="border-b border-dashed">
								<td class="px-6 py-2"><strong>Liquidity</strong></td>
								<td class="px-6 py-2">340,000,000</td>
								<td class="px-6 py-2">340,000,000</td>
								<td class="px-6 py-2">0</td>
								<td class="px-6 py-2">None</td>
								<td class="px-6 py-2">N/A</td>
							</tr>
							<tr class="border-b border-dashed">
								<td class="px-6 py-2"><strong>Genesis Presale</strong></td>
								<td class="px-6 py-2">50,000,000</td>
								<td class="px-6 py-2">10,000,000</td>
								<td class="px-6 py-2">40,000,000</td>
								<td class="px-6 py-2">None</td>
								<td class="px-6 py-2">N/A</td>
							</tr>
							<tr class="border-b border-dashed">
								<td class="px-6 py-2"><strong>Public Presale</strong></td>
								<td class="px-6 py-2">450,000,000</td>
								<td class="px-6 py-2">90,000,000</td>
								<td class="px-6 py-2">360,000,000</td>
								<td class="px-6 py-2">12 months</td>
								<td class="px-6 py-2">Every 3 months</td>
							</tr>
							<tr class="border-b border-dashed">
								<td class="px-6 py-2"><strong>Beta Tester Airdrop</strong></td>
								<td class="px-6 py-2">10,000,000</td>
								<td class="px-6 py-2">2,000,000</td>
								<td class="px-6 py-2">8,000,000</td>
								<td class="px-6 py-2">12 months</td>
								<td class="px-6 py-2">Every 3 months</td>
							</tr>
							<tr>
								<td class="px-6 py-2"><strong>Argus Foundation Endowment</strong></td>
								<td class="px-6 py-2">150,000,000</td>
								<td class="px-6 py-2">30,000,000</td>
								<td class="px-6 py-2">120,000,000</td>
								<td class="px-6 py-2">36 months</td>
								<td class="px-6 py-2">Every 3 months</td>
							</tr>
						</tbody>
					</table>

					<p class="text-white">
						This table details the lockup periods and release schedules. This provides a concise reference for investors and stakeholders to understand when different portions of tokens will become
						liquid and enter circulation, facilitating better investment and strategic decisions.
					</p>
				</div>

				<!-- DISTRIBUTION SCHEDULE -->
				<div class="flex flex-col gap-8">
					<div class="text-center">
						<h1 class="text-xl text-white">$ARGUS Token Circulation Schedule</h1>
					</div>

					<CirulationSchedule class="w-full" />

					<p class="text-white">
						This diagram depicts the cumulative circulating supply of tokens over time, from launch through to month 36. It tracks the increase in circulating tokens as they are released from lockup
						periods, according to the schedules detailed in the Token Lockup Periods table.
					</p>
				</div>
			</div>
		</div>

		<!-- ROADMAP -->
		<div>
			<h1 class="text-6xl font-bold text-white">ROADMAP</h1>
		</div>
	</main>

	<Footer />
</div>
