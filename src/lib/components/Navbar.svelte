<script lang="ts">
	import IconTelegram from '$lib/assets/telegram.svg?component';
	import IconX from '$lib/assets/x.svg?component';
	import { Boxes } from 'lucide-svelte';
	import { BASE_URL } from '../../constants';
	import NavbarMenu from './ui/NavbarMenu/NavbarMenu.svelte';

	import { Menu } from 'lucide-svelte';
	import MenuItem from './ui/NavbarMenu/MenuItem.svelte';
	import HoveredLink from './ui/NavbarMenu/HoveredLink.svelte';
	import { goto } from '$app/navigation';

	import Logo from '$lib/assets/logo.png?enhanced';

	// function scrollToElement() {
	// 	myElement.scrollIntoView({ behavior: 'smooth' });
	// }

	let active: string | null = null;
</script>

<nav class="z-30 mx-auto hidden h-[72px] w-full max-w-7xl items-center justify-between px-[30px] md:flex">
	<a href={BASE_URL} class="flex w-16 items-center gap-4">
		<enhanced:img class="h-12 w-16" src={Logo} alt="logo" />
	</a>

	<div class="hidden w-full items-center justify-center gap-x-12 md:flex">
		<a
			href={BASE_URL + '/presale'}
			class="text-gray relative rounded-lg bg-white/10 px-4 py-1 font-outfit text-lg font-medium text-indigo-500 backdrop-blur-3xl backdrop-filter duration-200 ease-in-out hover:text-neutral-300"
			>Presale
			<div class="absolute -right-0 -top-3 z-10 rounded bg-gradient-radial from-green-500 via-green-400 to-green-600 px-1 text-xs tracking-wider text-white">
				<div class="relative z-10 w-full px-1">
					<span class="absolute inset-0 z-0 inline-flex h-full w-full animate-slowerPing rounded-full bg-green-400/75"></span>
					live
				</div>
			</div>
		</a>
		<a href={BASE_URL + '#about'} class="hidden font-outfit text-lg font-medium text-white duration-200 ease-in-out hover:text-neutral-300 lg:block">About</a>
		<a href={BASE_URL + '#features'} class="hidden font-outfit text-lg font-medium text-white duration-200 ease-in-out hover:text-neutral-300 lg:block">Features</a>
		<a href={BASE_URL + '#howitworks'} class="font-outfit text-lg font-medium text-white duration-200 ease-in-out hover:text-neutral-300">How it works</a>
		<a href={BASE_URL + '#faq'} class="font-outfit text-lg font-medium text-white duration-200 ease-in-out hover:text-neutral-300">FAQ</a>
	</div>

	<div class="hidden items-center gap-x-8 md:flex">
		<div class="flex items-center gap-x-4">
			<a class="h-8 w-8 fill-neutral-300 duration-200 ease-in-out hover:fill-neutral-400" target="_blank" href="https://t.me/argusorg">
				<IconTelegram />
			</a>
			<a class="h-8 w-8 fill-neutral-300 duration-200 ease-in-out hover:fill-neutral-400" target="_blank" href="https://x.com/0xArgusOrg">
				<IconX />
			</a>
		</div>
		<button
			on:click={() => window.open('https://docs.0xargus.org', '_blank')}
			class="relative inline-flex h-12 w-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-indigo-600 md:w-auto">
			<span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#6366f1_0%,#a855f7_50%,#6366f1_100%)]" />
			<span
				class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 p-2 text-sm font-medium text-white backdrop-blur-3xl duration-200 ease-in-out hover:bg-slate-900 md:px-3 md:py-1">
				<Boxes class="text-xs md:mr-2" />
				<p class="hidden md:block">Documentation</p>
			</span>
		</button>
	</div>
</nav>

<nav class="z-50 flex h-[74px] w-full items-center px-8 md:hidden">
	<div class="z-50 flex w-full items-center justify-between">
		<a href={BASE_URL} class="flex w-10 items-center gap-4">
			<enhanced:img src={Logo} alt="logo" class="h-full w-full" />
		</a>
		<div class="z-50 flex flex-row-reverse items-center gap-4 px-4">
			<a
				href={BASE_URL + '/presale'}
				class="relative rounded-lg bg-white/10 px-4 py-1 font-outfit text-lg font-medium text-indigo-500 backdrop-blur-3xl backdrop-filter duration-200 ease-in-out hover:text-neutral-300"
				>Presale
				<div class="absolute -right-0 -top-3 z-10 rounded bg-gradient-radial from-green-500 via-green-400 to-green-600 px-1 text-xs tracking-wider text-white">
					<div class="relative z-10 w-full px-1">
						<span class="absolute inset-0 z-0 inline-flex h-full w-full animate-slowerPing rounded-full bg-green-400/75"></span>
						live
					</div>
				</div>
			</a>

			<!-- <NavbarMenu> -->
			<MenuItem {active} item="mob">
				<div class="flex flex-col space-y-4 text-sm">
					<button
						on:click={() => window.open('https://docs.0xargus.org', '_blank')}
						class="relative inline-flex w-auto overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2 focus:ring-offset-white">
						<span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#6366f1_0%,#a855f7_50%,#6366f1_100%)]" />
						<span
							class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 p-2 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl duration-200 ease-in-out hover:bg-slate-900">
							<Boxes class="mr-2 text-xs" />
							<p class="	">Documentation</p>
						</span>
					</button>
					<HoveredLink href="#about">About</HoveredLink>
					<HoveredLink href="#features">Features</HoveredLink>
					<HoveredLink href="#howitworks">How It Works</HoveredLink>
					<HoveredLink href="#faq">FAQ</HoveredLink>
					<div class="flex items-center gap-x-4">
						<a class="h-8 w-8 fill-neutral-300 duration-200 ease-in-out hover:fill-neutral-400" target="_blank" href="https://t.me/argusorg">
							<IconTelegram />
						</a>
						<a class="h-8 w-8 fill-neutral-300 duration-200 ease-in-out hover:fill-neutral-400" target="_blank" href="https://x.com/0xArgusOrg">
							<IconX />
						</a>
					</div>
				</div>
			</MenuItem>
			<!-- </NavbarMenu> -->
		</div>
	</div>
</nav>
