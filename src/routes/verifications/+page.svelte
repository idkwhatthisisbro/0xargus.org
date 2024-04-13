<script lang="ts">
	import { format } from 'date-fns';
	import Section from '$lib/layouts/Section.svelte';
	import { MoveRight, ShieldEllipsis } from 'lucide-svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Logo from '$lib/assets/logo.svg?component';
	// import SvelteOtp from '@k4ung/svelte-otp';
	import SvelteOtp from '$lib/components/SvelteOtp/SvelteOtp.svelte';
	import PhoneInput from '$lib/components/PhoneInput.svelte';
	import { supabase } from '$lib/supabase';
	import SuperDebug, { superForm } from 'sveltekit-superforms';
	import { whitelistSchema } from '$lib/schema';
	import { zod } from 'sveltekit-superforms/adapters';
	import { onMount } from 'svelte';
	import { cn } from '$lib/utils/cn';
	import CustomLottiePlayer from '$lib/components/CustomLottiePlayer.svelte';
	import type { Database } from '$lib/types/supabase.js';
	import { Circle } from 'svelte-loading-spinners';
	import SkeletonLoader from '$lib/components/SkeletonLoader.svelte';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';

	export let data;

	// Assuming 'registeredOn' is a JavaScript Date object
	const registeredOn = new Date().toISOString();
	let formattedDate = format(registeredOn, 'dd-MM-yyyy');

	const presaleDate = new Date('2024-05-23T00:00:00Z');
	let formattedPresaleDate = format(presaleDate, 'dd-MM-yyyy');

	let name = 'John Doe';
	let loading = true;
	let verifications = {
		email: false,
		phone: false
	};

	// Function to update form with data that matches the Zod schema
	const releventSupabaseData = (data: Database['public']['Tables']['users']['Row']) => {
		const schemaKeys = Object.keys(whitelistSchema.shape);
		console.log(schemaKeys);
		let newForm = {};

		schemaKeys.forEach((key) => {
			if (key in data) {
				if (key == 'phone') {
					// @ts-ignore
					newForm['phone'] = { number: data[key] || '', otp: '' };
					return;
				}
				// @ts-ignore
				newForm[key] = data[key];
			}
		});

		return newForm;
	};

	onMount(async () => {
		// TODO: Fetch user data from the server on first load
		// const { data } = await supabase.from('users').select('*').eq('email', $form.email).single();

		// const handleStep = async (step: number) => {
		// 	await supabase
		// 		.from('users')
		// 		// @ts-ignore
		// 		.update({ step })
		// 		.eq('email', $form.email)
		// 		.single();
		// };

		// if (data) {
		// 	form.update(
		// 		(form) => {
		// 			// @ts-ignore
		// 			form = releventSupabaseData(data);
		// 			// console.log(releventSupabaseData(data));
		// 			return form;
		// 		},
		// 		{ taint: false }
		// 	);
		// }
		loading = false;

		// Supabase auto cleansup after client disconnects
		supabase
			.channel('schema-db-changes')
			.on('postgres_changes', { event: 'UPDATE', schema: 'public' }, (payload) => {
				if (!(payload.new.email === $form.email)) {
					return;
				}

				let newStep: number;

				if (payload.new.phone_confirmed_at) {
					verifications.email = false;
					newStep = 2;
					handleStep(2);
				} else if (payload.new.email_confirmed_at) {
					verifications.email = false;
					newStep = 1;
					handleStep(1);
				} else {
					return;
				}

				form.update(
					(form) => {
						form.step = newStep;
						return form;
					},
					{ taint: false }
				);
			})
			.subscribe();
	});

	$: {
		if ($form.phone.otp && $form.phone.otp.length === 6) {
			submit();
		}
	}

	const text = [
		{
			header: 'Verify your identity',
			subheader: 'To get a chance to join the Argus Presale, you need to pass KYC.'
		},
		{
			header: 'Verify your email',
			subheader: 'Please enter your full legal name and email address to continue.'
		},
		{
			header: 'Verify your phone number',
			subheader: 'Please enter your phone number to continue.'
		},
		{
			header: 'Enter the security code',
			subheader: 'Please enter the one time code sent to your phone number.'
		},
		{
			header: 'Verification successful',
			subheader: 'You have successfully verified your identity.'
		}
	];
	const { form, message, enhance, errors, submitting, constraints, submit } = superForm(data.form, {
		validators: zod(whitelistSchema),
		dataType: 'json',
		id: 'verification',
		errorSelector: '[aria-invalid="true"],[data-invalid]',
		resetForm: false,
		onUpdated: (event) => {
			event.form.valid && ((step === 0 && (verifications.email = true)) || (step === 1 && $message != 'Error sending phone change otp' && (verifications.phone = true)));
		}
	});

	$: step = $form.step;
	$: currentHeaderText = (verifications.email && text[1]) || (verifications.phone && text[3]) || (step == 1 && text[2]) || (step == 2 && text[4]) || text[step];

	// $: {
	// 	if ($form.email && browser) {
	// 		const url = new URL(window.location.href);
	// 		url.searchParams.set('e', $form.email);
	// 		history.pushState({}, '', url);
	// 	}
	// }
</script>

<SuperDebug data={$form} />

<div class="mt-8">
	<Navbar />
</div>

<div class="flex min-h-screen flex-col items-center justify-center">
	<Section maxWidth="4xl" class="w-full text-white">
		{#if !loading}
			<div class="relative min-h-[900px] rounded-xl border border-white/[0.2] bg-neutral-900 px-4 py-8 shadow-2xl md:p-16 lg:px-32 lg:py-24">
				<div class="relative -top-12 mx-auto -mt-8 flex h-24 w-24 items-center justify-center rounded-full border-b-4 border-white/[0.2] bg-neutral-950 pb-4 sm:mb-12 md:-mt-16 lg:-mt-24">
					<Logo class="absolute inset-0  p-6 drop-shadow-2xl sm:p-4" />
				</div>
				<div class="group flex w-full items-center justify-center gap-x-4">
					{#each Array(3) as _, i}
						<!-- <div class="relative flex items-center justify-center rounded-full border border-white/[0.3] p-1"> -->
						<div
							class={`inset-0 h-12 w-12 transform-gpu rounded-full transition duration-200 ease-in-out ${step >= i ? 'bg-gradient-radial from-green-400 to-green-800' : 'bg-neutral-300'} shadow-xl`}>
						</div>
						<!-- </div> -->
						{#if i !== 2}
							<!-- content here -->
							<hr class="w-12 border-white/[0.2]" />
						{/if}
					{/each}
				</div>
				<!-- Status -->

				<!-- INFO -->
				<div class="mt-8 space-y-4 py-12 text-center">
					<h1 class="text-4xl text-neutral-100">{currentHeaderText.header}</h1>
					<p class="text-lg text-neutral-300">{currentHeaderText.subheader}</p>
				</div>

				<!-- FORM START -->
				{#if step < 2}
					<form use:enhance method="POST" action="/verifications" class="mt-4 space-y-8">
						{#if step === 0 && !verifications.email}
							<!-- Full Name -->
							<div class="grid gap-2">
								<label for="name">Full Legal Name*</label>
								<input
									aria-invalid={$errors.name ? 'true' : undefined}
									type="text"
									bind:value={$form.name}
									disabled={step > 1}
									class={cn(
										'form-input rounded-xl border-0 bg-neutral-700 px-6 py-6 text-xl text-neutral-300 placeholder-neutral-500 shadow invalid:border-2 invalid:border-red-500 invalid:ring-red-500',
										step > 0 && 'border-green-500 ring-green-500 '
									)}
									id="name"
									placeholder="John Doe"
									{...$constraints.name} />
							</div>

							<!-- Email -->
							<div class="grid gap-2">
								<label for="email">Email*</label>
								<input
									aria-invalid={$errors.email ? 'true' : undefined}
									bind:value={$form.email}
									class="form-input rounded-xl border-0 bg-neutral-700 px-6 py-6 text-xl text-neutral-300 placeholder-neutral-500 shadow invalid:border-2 invalid:border-red-500 invalid:ring-red-500"
									id="email"
									type="email"
									placeholder="hello@moon.com"
									{...$constraints.email} />
							</div>
						{/if}
						<!-- Verify Email -->
						{#if step === 0 && verifications.email}
							<div class="flex h-[400px] flex-col items-center gap-4 rounded-xl bg-neutral-800 p-12 font-outfit text-neutral-100">
								<div class="w-32 rounded-lg">
									<CustomLottiePlayer loop={true} src={'/mail2.json'} />
								</div>
								<p class="text-center text-3xl font-bold leading-relaxed text-neutral-50">You're Almost There!</p>
								<p class="text-center text-xl">Please verify your email {$form.email} to continue.</p>
							</div>
						{/if}
						<!-- Phone -->
						<!-- {#if step === 1 && !verifications.phone && $form.phone} -->
						{#if step === 1 && $form.phone}
							<div class="grid gap-2">
								<label for="phone">Phone</label>
								<PhoneInput bind:value={$form.phone.number} />
								<p class="{$errors.phone?.number || 'invisible'} text-sm text-red-500">{$errors.phone?.number || '.'}</p>

								{#if $message}
									<span class="text-red-500"> {$message} - Please contact support at support@0xArgus.org to finish verification.</span>
								{/if}
							</div>
						{/if}

						<!-- OTP Verification -->
						{#if verifications.phone && $form.phone}
							<div class="grid h-32 w-full items-center justify-center space-y-4 text-center">
								<label class="font-sembold text-left text-lg" for="otp">Enter code</label>
								<SvelteOtp
									{...$constraints.phone?.otp}
									numberOnly
									inputStyle="width: 72px; height: 72px; font-size: 25px;"
									separatorClass="text-white"
									bind:value={$form.phone.otp}
									inputClass="rounded-xl text-xl text-white bg-neutral-800 border-white/[0.2] focus:ring-2 focus:ring-purple-500/50  focus:ring-offset-purple-500 -border focus:outline-none shadow-xl"
									numOfInputs={6} />

								<!-- Error -->
								<p class="text-xl text-neutral-300">
									{#if $message}
										<span class="text-red-500"> {$message} - Please contact support at support@0xArgus.org to finish verification.</span>
									{:else}
										Sent to mobile {$form.phone.number} -
									{/if}
									<span class="text-blue-600 underline underline-offset-2">resend in 30</span>
								</p>
							</div>
						{/if}
						<!-- Info -->
						{#if step == 0 && !verifications.email}
							<br />
							<div class="flex items-center justify-center gap-x-4 rounded-xl border border-white/[0.1] px-8 py-6 text-base text-neutral-500 shadow-xl lg:items-start">
								<ShieldEllipsis class="bg-gradient-tr min-h-6 min-w-6 text-blue-600 lg:h-8 lg:w-8" />

								<p>ID Verification may be triggered if your using a VPN, if you have one on, please turn it off.</p>
							</div>
						{/if}

						<div class="sticky inset-x-0 bottom-12 flex w-full items-center justify-center gap-x-6">
							{#if verifications.email}
								<button
									on:click={() => (verifications.email = false)}
									type="button"
									class={cn(
										'mt-12 h-full w-full rounded-full border border-white/[0.1]  bg-white/[0.01] px-8 py-6 text-xl shadow-xl backdrop-blur-2xl duration-200 ease-in-out hover:bg-neutral-800',
										''
									)}>Go Back</button>
							{:else if verifications.phone}
								<button
									on:click={() => (verifications.phone = false)}
									type="button"
									class={cn('mt-12 h-full w-full flex-grow rounded-lg bg-neutral-700 px-8 py-6 shadow-xl duration-200 ease-in-out hover:bg-neutral-700')}>Go Back</button>
								<!-- {:else} -->
							{/if}
							<button
								disabled={$submitting || (step == 0 && ($errors.email || $errors.name) && true) || (step == 1 && $errors.phone?.number && true) || (verifications.phone && $errors.phone?.otp && true)}
								class={cn(
									(step == 0 && ($errors.email || $errors.name) && true) ||
										(step == 1 && $errors.phone?.number && true) ||
										(verifications.phone && $errors.phone?.otp && true) ||
										$submitting ||
										'bg-gradient-radial from-purple-500/80 to-purple-700/80',
									'flex-grow-2 mx-auto mt-12 w-full rounded-lg',
									'px-8 py-6 shadow-xl duration-300 ease-in-out',
									'disabled:cursor-not-allowed  disabled:bg-neutral-500 disabled:text-neutral-200',
									'flex h-full items-center justify-center py-6 text-lg font-bold uppercase tracking-wider text-purple-50 backdrop-blur-xl transition-all hover:bg-purple-600'
								)}
								type="submit">
								{#if $submitting}
									<Circle color="white" size="32" unit="px" />
								{:else}
									Continue
									<MoveRight class="ml-2 text-purple-200" />
								{/if}
							</button>
							{$errors._errors}
							{$submitting}
							<!-- {/if} -->
						</div>
					</form>
				{:else}
					<!-- Success Receipt -->
					<h3 class="mt-8 font-bold">REGISTRATION DETAILS</h3>
					<hr />
					<div class="mt-4 flex justify-around">
						<div class="gap grid text-center">
							<p class="font-medium tracking-wide text-neutral-500">REGISTERED AS</p>
							<p>{name}</p>
						</div>
						<div class="gap grid text-center">
							<p class="font-medium tracking-wide text-neutral-500">REGISTERED ON</p>
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
		{:else}
			<!-- <Circle color="white" /> -->
			<SkeletonLoader />
		{/if}
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
