<script lang="ts">
	import { format } from 'date-fns';
	import Section from '$lib/layouts/Section.svelte';
	import { ArrowLeft, BadgeInfo } from 'lucide-svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Logo from '$lib/assets/logo.svg?component';
	import SvelteOtp from '@k4ung/svelte-otp';
	import PhoneInput from '$lib/components/PhoneInput.svelte';
	import { supabase } from '$lib/supabase';
	import { superForm } from 'sveltekit-superforms';
	import { whitelistSchema } from '$lib/schema';
	import type { RealtimeChannel } from '@supabase/supabase-js';
	import { zod } from 'sveltekit-superforms/adapters';
	import { onMount } from 'svelte';

	export let data;

	// Assuming 'registeredOn' is a JavaScript Date object
	const registeredOn = new Date().toISOString();
	let formattedDate = format(registeredOn, 'dd-MM-yyyy');

	const presaleDate = new Date('2024-05-23T00:00:00Z');
	let formattedPresaleDate = format(presaleDate, 'dd-MM-yyyy');

	let name = 'John Doe';

	onMount(() => {
		// Supabase auto cleansup after client disconnects
		supabase
			.channel('schema-db-changes')
			.on('postgres_changes', { event: 'UPDATE', schema: 'public' }, (payload) => {
				if (!(payload.new.email === $form.form.data.email)) {
					return;
				}

				let newStep: number;

				if (payload.new.phone_confirmed_at) {
					newStep = 3;
				} else if (payload.new.phone) {
					newStep = 2;
				} else if (payload.new.email_confirmed_at) {
					newStep = 1;
				} else {
					return;
				}

				form.update(
					(form) => {
						$form.form.data._step = newStep;
						return $form;
					},
					{ taint: false }
				);
			})
			.subscribe();
	});

	const text = {
		verify: {
			header: 'Verify Your Identity',
			subheader: 'To get a chance to join the Argus Presale, you need to pass KYC.',
			badge: true
		},
		success: {
			header: 'Verification Successful',
			subheader: 'You have successfully verified your identity.',
			badge: false
		}
	};

	const { form, errors, constraints, delayed, submitting, message, enhance } = superForm(data, {
		validators: zod(whitelistSchema),
		id: 'verification',
		dataType: 'json',
		resetForm: false
	});

	$: _step = $form.dara._step || 0;
	$: currentHeaderText = _step >= 3 ? text['success'] : text['verify'];
</script>

<div class="mt-8">
	<Navbar />
</div>

<div class="flex min-h-screen flex-col items-center justify-center">
	<Section maxWidth="4xl" class="w-full text-white">
		<div class="bg relative rounded-xl border border-white/[0.2] bg-neutral-900 px-12 py-24 shadow-2xl">
			<div class="-top-12 mx-auto -mt-32 mb-24 flex w-32 items-center justify-center rounded-full border-x border-b border-white/[0.2] bg-neutral-950 pb-4">
				<Logo class="h-16 w-16 drop-shadow-2xl" />
			</div>
			<div class="group flex w-full items-center justify-center gap-x-4">
				{#each Array(3) as _, i}
					<div class="relative flex items-center justify-center rounded-full border border-white/[0.3] p-1">
						<div class={`inset-0 h-12 w-12 rounded-full ${_step >= i ? 'bg-gradient-radial from-green-400 to-green-800' : 'bg-neutral-300'} shadow-xl`}></div>
					</div>
					{#if i !== 2}
						<!-- content here -->
						<hr class="groupeven:hidden w-12 border-white/[0.2]" />
					{/if}
				{/each}
			</div>
			<!-- Status -->

			<!-- INFO -->
			<div class="mt-12 space-y-4 py-12 text-center">
				<h1 class="text-4xl font-semibold text-purple-600">{currentHeaderText.header}.</h1>
				<p class="text-2xl">{currentHeaderText.subheader}</p>
				{#if currentHeaderText.badge}
					<!-- content here -->
					<br />
					<div class="flex items-center justify-center gap-x-4 rounded-xl bg-gradient-radial from-indigo-500 to-indigo-700 px-8 py-6 text-xl shadow-xl">
						<BadgeInfo class="h-10 w-10" />

						<p>ID Verification may be triggered if your using a VPN, if you have one on, please turn it off.</p>
					</div>
				{/if}
			</div>

			{#if _step < 3}
				<form use:enhance class="mt-12 space-y-8">
					<!-- Full Name -->
					<div class="grid gap-2 {_step > 1 && 'pointer-events-none opacity-35'}">
						<label for="name">Full Legal Name</label>
						<input class="form-input rounded-xl py-4 text-xl shadow" id="Name" placeholder="John Doe" />
					</div>

					<!-- Verify Email -->

					<div class="grid gap-2 {_step > 1 && 'pointer-events-none opacity-35'}">
						<label for="email">Email</label>
						<input class="form-input rounded-xl py-4 text-xl shadow" id="email" placeholder="john@mail.com" />
						{#if _step > 0}
							<p>Your email has successfully been verified</p>
						{/if}
					</div>
					<!-- Verify Phone -->
					<!-- content here -->
					<div class="relative grid gap-2 {_step < 1 && 'pointer-events-none opacity-35 blur-[2px]'} rounded-xl bg-gradient-radial from-neutral-600 to-neutral-800 px-12 py-8 shadow-xl">
						{#if _step === 1}
							<label for="phone">Phone</label>

							<PhoneInput />
						{/if}
						{#if _step > 2}
							<p class="">Your phone has successfully been verified</p>
						{/if}

						<!-- otp verification -->
						{#if _step === 2}
							<div class="space-y-4">
								<p class="text-xl">Please Enter your OTP code sent to mobile 0202312321</p>
								<SvelteOtp inputClass="rounded-xl bg-white p-8" numOfInputs={5} />
							</div>
							<button on:click={() => (_step = 1)} class="absolute right-0 top-0 m-6 flex items-center gap-2 text-neutral-200 duration-200 ease-in-out hover:text-neutral-300"
								><ArrowLeft class="" /> Back</button>
						{/if}
					</div>
					{#if _step < 2}
						<button class="mt-12 w-full rounded-xl bg-gradient-radial from-purple-500 to-purple-700 px-8 py-4 shadow-xl duration-200 ease-in-out hover:bg-purple-950">Continue</button>
					{/if}
				</form>
				<!-- Success Receipt -->
			{:else}
				<h3 class="mt-8 font-bold">REGISTRATION DETAILS</h3>
				<hr />
				<div class="mt-4 flex justify-around">
					<div class="gap grid text-center">
						<p class="text-blueGray-500 font-medium tracking-wide">REGISTERED AS</p>
						<p>{name}</p>
					</div>
					<div class="gap grid text-center">
						<p class="text-blueGray-500 font-medium tracking-wide">REGISTERED ON</p>
						<p>
							{formattedDate}
						</p>
					</div>
				</div>

				<h3 class="mt-8 font-bold">ADDITIONAL INFORMATION</h3>
				<hr />

				<p class="mt-6 font-medium text-neutral-50">ABOUT DEPOSITS</p>
				<p>
					Your purchase will be confirmed when your deposit clears. If your deposit doesn’t clear immediately, that’s fine – you have until December 26, 00:00 UTC to finalize your purchase. If you
					secure an allocation and do not fund your allocation by the deadline, you will be unable to secure future allocations in SafeTitan sales.
				</p>
				<p class="mt-6 font-medium text-white">WHEN WILL I RECEIVE TOKENS?</p>
				<p>The Argus team will be distributing tokens 6 days from the close of the sale (29 May, 2024).</p>
			{/if}
		</div>
	</Section>
</div>

<div class="">
	<Footer />
</div>

<style>
	.wrapper :global(.basic-tel-input) {
		height: 32px;
		padding-left: 12px;
		padding-right: 12px;
		border-radius: 6px;
		border: 1px solid;
		outline: none;
	}

	.wrapper :global(.country-select) {
		height: 36px;
		padding-left: 12px;
		padding-right: 12px;
		border-radius: 6px;
		border: 1px solid;
		outline: none;
	}

	.wrapper :global(.invalid) {
		border-color: red;
	}
</style>
