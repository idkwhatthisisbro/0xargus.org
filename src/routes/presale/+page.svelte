<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Countdown from '$lib/components/Countdown.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { PRESALE_DATE } from '../../constants';
	import { ChevronRight, MailPlus } from 'lucide-svelte';
	import { cn } from '$lib/utils/cn';
	import BentoGrid from '$lib/components/ui/BentoGrid/BentoGrid.svelte';
	import BentoGridItem from '$lib/components/ui/BentoGrid/BentoGridItem.svelte';

	let isPresaleLive = false;

	const items = [
		{
			title: 'The Dawn of Innovation',
			description: 'Explore the birth of groundbreaking ideas and inventions.',
			className: 'md:col-span-2'
			// icon:
		},
		{
			title: 'The Digital Revolution',
			description: 'Dive into the transformative power of technology.',
			className: 'md:col-span-1'
			// icon:
		},
		{
			title: 'The Art of Design',
			description: 'Discover the beauty of thoughtful and functional design.',
			className: 'md:col-span-1'
			// icon:
		},
		{
			title: 'The Power of Communication',
			description: 'Understand the impact of effective communication in our lives.',
			className: 'md:col-span-2'
			// icon:
		}
	];
</script>

<div class="flex min-h-screen flex-col gap-20">
	<Navbar showName={true} />

	<main class="mx-auto flex w-full max-w-7xl grow flex-col items-center justify-center gap-10 px-[30px] font-outfit">
		<div class="flex w-full flex-col gap-10">
			<h1 class="text-5xl tracking-widest text-white">{!isPresaleLive ? 'Time to presale' : '0xArgus is on presale.'}</h1>

			<Countdown from={PRESALE_DATE} dateFormat="YYYY-MM-DD H:m:s" zone="Etc/Universal" let:remaining>
				<div class="flex gap-10 text-2xl text-white">
					{#if remaining.done === false}
						<span class="flex flex-col items-center justify-center gap-2">
							<span class="text-6xl">{remaining.totalDays}</span>
							Days
						</span>

						<span class="flex flex-col items-center justify-center gap-2">
							<span class="text-6xl">{remaining.hours}</span>
							Hours
						</span>

						<span class="flex flex-col items-center justify-center gap-2">
							<span class="text-6xl">{remaining.minutes}</span>
							Minutes
						</span>
						<span class="flex flex-col items-center justify-center gap-2">
							<span class="text-6xl">{remaining.seconds}</span>
							Seconds
						</span>
					{:else}
						<h2>The time has come!</h2>
					{/if}
				</div>
			</Countdown>

			<button
				type="submit"
				class={cn([
					// Global
					'hidden w-max items-center justify-center gap-2 border-zinc-400 bg-transparent bg-gradient-to-tr from-zinc-700 via-zinc-800 to-zinc-900 text-white shadow-2xl',
					// Desktop
					'group transform rounded-full border-2 px-4 py-2',
					// Mobile
					// '-sm:rounded-l-none font-bold tracking-wide sm:m-0 sm:h-full sm:w-auto sm:space-x-2 sm:rounded-3xl sm:border-0 sm:px-6 sm:py-2',
					// Animations
					'transition duration-300 ease-in-out',
					// Focus/Hover
					'hover:scale-105 focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-500'
					// 'disabled:cursor-not-allowed disabled:border-transparent disabled:bg-zinc-700 disabled:text-zinc-500 disabled:opacity-50 disabled:shadow-none disabled:hover:scale-100'
				])}>
				<p class="hidden tracking-widest sm:block">JOIN THE WHITELIST</p>

				<div class="hidden rounded-full bg-zinc-700 p-2 text-xs shadow-lg duration-200 ease-in-out group-hover:bg-zinc-600 sm:block">
					<MailPlus class="m-auto h-4 w-4 rounded-full text-xs" />
				</div>

				<!-- Mobile -->
				<ChevronRight class="h-5 w-5 text-zinc-300 sm:hidden" />
			</button>

			<button class="flex w-max items-center justify-center bg-white px-4 py-2 text-xl text-brand-bgPrimary">Join The Whitelist</button>
		</div>

		<div class="w-full font-outfit">
			<h2 class="text-2xl text-white">Terms of sale:</h2>
			<ul class="text-white/80">
				<li>Purchase minimum: $100</li>
				<li>Purchase maximum: $2000</li>
				<li>Hard-cap: $1,000,000</li>
			</ul>
		</div>

		<div class="w-3/4 self-start">
			<h2 class="text-2xl text-white">About the token launch:</h2>
			<p class="text-white/80">
				Users registered for the token sale will receive an email with a unique link to enter the queue prior to the start of the sale. After the sale starts, users who are already in the waiting room
				will be given a random place in line, ahead of those who arrive after the sale starts. Users arriving after the sale starts get a first-come, first-served place in line after those in the
				waiting room.
			</p>
		</div>

		<!-- <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
			{#each items as item, i (i)}
				<BentoGridItem title={item.title} description={item.description} className={item.className}>
					<div
						slot="header"
						class="flex h-full min-h-[6rem] w-full flex-1 rounded-xl border border-transparent bg-neutral-100 bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:border-white/[0.2] dark:bg-black dark:bg-dot-white/[0.2]">
					</div>
					<svelte:component this={item.icon} slot="icon" class="h-4 w-4 text-neutral-500" />
				</BentoGridItem>
			{/each}
		</BentoGrid> -->
	</main>

	<Footer />
</div>
