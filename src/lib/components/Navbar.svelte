<script>
	import Logo from '$lib/assets/logo.svg?component';
	import IconTelegram from '$lib/assets/telegram.svg?component';
	import IconX from '$lib/assets/x.svg?component';
	import { Boxes } from 'lucide-svelte';

	export let showName = false;
</script>

<nav class="z-30 mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-[30px]">
	<a href="https://0xargus.org" class="flex items-center gap-4">
		<Logo class="h-10 w-10" />
		{#if showName}
			<span class="self-center whitespace-nowrap font-outfit text-3xl font-semibold text-white">0xArgus</span>
		{/if}
	</a>

	<div class="flex w-full items-center justify-center gap-x-12">
		<a href="#about" class="font-outfit text-lg font-medium text-white duration-200 ease-in-out hover:text-neutral-300">About</a>
		<a href="#features" class="font-outfit text-lg font-medium text-white duration-200 ease-in-out hover:text-neutral-300">Features</a>
		<a href="#howitworks" class="font-outfit text-lg font-medium text-white duration-200 ease-in-out hover:text-neutral-300">How it works</a>
		<a href="#faq" class="font-outfit text-lg font-medium text-white duration-200 ease-in-out hover:text-neutral-300">FAQ</a>
		<a
			href="/presale"
			class="font-outfit text-lg font-medium text-white underline decoration-indigo-500 decoration-2 underline-offset-[8px] duration-200 ease-in-out hover:text-neutral-300 hover:decoration-indigo-600"
			>Presale</a>
	</div>
	<div class="flex items-center gap-x-12">
		<div class="flex items-center gap-x-8">
			<a class="h-8 w-8 fill-neutral-300 duration-200 ease-in-out hover:fill-neutral-400" target="_blank" href="https://t.me/argusorg">
				<IconTelegram />
			</a>
			<a class="h-8 w-8 fill-neutral-300 duration-200 ease-in-out hover:fill-neutral-400" target="_blank" href="https://x.com/0xArgusOrg">
				<IconX />
			</a>
		</div>
		<button
			on:click={() => window.open('https://docs.0xargus.org', '_blank')}
			class="relative inline-flex h-12 w-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2 focus:ring-offset-white sm:w-auto">
			<span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#6366f1_0%,#a855f7_50%,#6366f1_100%)]" />
			<span
				class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 p-2 text-sm font-medium text-white backdrop-blur-3xl duration-200 ease-in-out hover:bg-slate-900 sm:px-3 sm:py-1">
				<Boxes class="text-xs sm:mr-2" />
				<p class="hidden sm:block">Documentation</p>
			</span>
		</button>
	</div>
</nav>
