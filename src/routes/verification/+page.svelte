<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { format } from 'date-fns';
	import Section from '$lib/layouts/Section.svelte';
	import { InfoIcon, Mail, MoveRight, PersonStanding, Scale, ShieldEllipsis } from 'lucide-svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	// import SvelteOtp from '@k4ung/svelte-otp';
	import SvelteOtp from '$lib/components/SvelteOtp/SvelteOtp.svelte';
	import PhoneInput from '$lib/components/PhoneInput.svelte';
	import { supabase } from '$lib/supabase';
	import SuperDebug, { superForm, type SuperValidated } from 'sveltekit-superforms';
	import { whitelistSchema, type WhitelistSchema } from '$lib/schema';
	import { zod, type Infer } from 'sveltekit-superforms/adapters';
	import { onDestroy, onMount } from 'svelte';
	import { cn } from '$lib/utils/cn';
	import CustomLottiePlayer from '$lib/components/CustomLottiePlayer.svelte';
	import type { Database } from '$lib/types/supabase.js';
	import { Circle } from 'svelte-loading-spinners';
	import SkeletonLoader from '$lib/components/SkeletonLoader.svelte';
	import { browser, dev } from '$app/environment';
	import { derived } from 'svelte/store';
	import { isSubscribed } from '$lib/stores/form.js';
	import { MetaTags } from 'svelte-meta-tags';
	import { focusOnMount } from '$lib/utils/focus.js';
	import Logo from '$lib/assets/logo.png?enhanced';

	export let data;

	// Static Dates
	const registeredOn = new Date().toISOString();
	const formattedDate = format(registeredOn, 'dd-MM-yyyy');

	const presaleDate = new Date('2024-05-04T00:00:00Z');
	presaleDate.setDate(presaleDate.getDate() + 4); // Adding 4 days to make it the 8th of May

	const lastInvestmentDay = new Date(presaleDate.getTime());
	lastInvestmentDay.setDate(lastInvestmentDay.getDate() + 3); // Adding 3 days to the presale date
	const formattedLastInvestmentDay = format(lastInvestmentDay, 'dd MMMM yyyy'); // Should result in "11 May 2024"

	const tokenReleaseDate = new Date(presaleDate.getTime());
	tokenReleaseDate.setDate(tokenReleaseDate.getDate() + 14); // Adding 14 days to the presale date for token release
	const formattedTokenReleaseDate = format(tokenReleaseDate, 'dd MMMM yyyy'); // Should result in "22 May 2024"

	let loading = true;
	let verifications = {
		email: false,
		phone: false
	};

	// Util Function to update form with data that matches the Zod schema
	const releventSupabaseData = (respData: Database['public']['Tables']['users']['Row']) => {
		const schemaKeys = Object.keys(whitelistSchema.shape);
		console.log(schemaKeys);
		let newForm = {};

		schemaKeys.forEach((key) => {
			if (key in respData) {
				// Set subscribe store to true, if step is 2 [1/2]
				// @ts-ignore
				if (key == 'step' && respData[key] === 2) {
					isSubscribed.set({ subscribed: true, email: respData['email'] || '' });
				}

				if (key == 'phone') {
					// @ts-ignore
					newForm['phone'] =
						respData['step'] > 0 ? { number: respData['phone'] || '', otp: '' } : respData['phone'];
					return;
				}
				// @ts-ignore
				newForm[key] = respData[key];
			}
		});

		return newForm;
	};

	// Run in client to display skeleton loader (could use loading.svelte + serverside tho)
	onMount(async () => {
		try {
			const { data } = await supabase
				.from('users')
				.select('*')
				.eq('email', $isSubscribed.email || $form.email)
				.maybeSingle();
			console.log($isSubscribed.email);
			console.log($form.email);
			console.log(data);
			data &&
				form.update(
					(form) => {
						// @ts-ignore
						form = releventSupabaseData(data);
						return form;
					},
					{ taint: false }
				);
		} catch (error) {}
		loading = false;
	});

	onMount(async () => {
		const handleStep = async (step: number) => {
			await supabase
				.from('users')
				// @ts-ignore
				.update({ step })
				.eq('email', $form.email)
				.single();
		};
		// Run in client to display skeleton loader
		// Supabase auto cleansup after client disconnects
		const channel = supabase
			.channel('schema-db-changes')
			// TODO: Filter isn't working
			.on(
				'postgres_changes',
				{ event: 'UPDATE', schema: 'public', filter: `email=eq.${$form.email}` },
				(payload) => {
					if ($form.step == 2) {
						return;
					}
					let newStep: number;

					if (payload.new.phone_confirmed_at) {
						newStep = 2;
						verifications.phone = false;

						// Set subscribe store to true, if step is 2 [1/2]
						isSubscribed.set({ subscribed: true, email: payload.new.email });
						payload.new.step != 2 && handleStep(2);
					} else if (payload.new.email_confirmed_at && !payload.new.phone_confirmed_at) {
						console.log('ran');

						newStep = 1;
						verifications.email = false;
						// Turns phone from null to object if user confirms email
						$form.phone = { number: '', otp: '' };
						payload.new.step != 1 && handleStep(1);
					} else {
						return;
					}

					console.log(newStep);
					console.log(form);
					form.update(
						(form) => {
							form.step = newStep;
							return form;
						},
						{ taint: false }
					);
					console.log($form.step);
				}
			)
			.subscribe();

		// TODO: fix cleanup on supabase subscription
		// return async () => channel.unsubscribe();
	});

	let time = 0;
	let interval: ReturnType<typeof setInterval> | null;

	function startCountdown(): void {
		clearInterval(interval as NodeJS.Timeout); // Ensure any existing interval is cleared
		time = 30; // Reset the time to 30 seconds
		interval = setInterval(() => {
			if (time > 0) {
				time--;
			} else {
				clearInterval(interval as NodeJS.Timeout);
				interval = null; // Ensure the interval is cleaned up
			}
		}, 1000);
	}

	function restartCountdown(): void {
		if (verifications.phone) {
			// Ensure that we can only restart if the phone was verified
			clearInterval(interval as NodeJS.Timeout);
			interval = null;
			startCountdown(); // Restart the countdown
		}
	}

	function handleResendCode() {
		console.log('clicked');
		if (time === 0) {
			// @ts-ignore
			$form.phone.otp = '';
			restartCountdown();
			submit();
		}
	}

	onDestroy(() => {
		if (interval) clearInterval(interval);
	});

	$: if (verifications.phone) {
		startCountdown();
	}

	$: if ($form.phone?.otp && $form.phone.otp.length === 6) {
		submit();
	}

	const text = [
		{
			header: 'Verify your identity',
			subheader: 'To get a chance to join the Argus Presale, you need to pass KYC.'
		},
		{
			header: 'Verify your email',
			subheader:
				"A verification link has been sent to your email. Check your spam folder if you can't find it."
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
	const {
		allErrors,
		form,
		message,
		enhance,
		errors,
		submitting,
		constraints,
		submit,
		capture,
		restore
	} = superForm(data.form, {
		validators: zod(whitelistSchema),

		dataType: 'json',
		id: 'verification',
		errorSelector: '[aria-invalid="true"],[data-invalid]',
		resetForm: false,
		onUpdated: (event) => {
			console.log(event.form);
			event.form.valid &&
				(($form.step === 0 && (verifications.email = true)) ||
					($form.step === 1 &&
						$message != 'Error sending phone change otp' &&
						!$form._prevent_verification &&
						(verifications.phone = true)));
		}
	});
	export const snapshot = { capture, restore };

	$: currentHeaderText =
		(verifications.email && text[1]) ||
		(verifications.phone && text[3]) ||
		($form.step == 1 && text[2]) ||
		($form.step == 2 && text[4]) ||
		text[$form.step];

	$: {
		if ($form.email && browser) {
			const url = new URL(window.location.href);
			url.searchParams.set('e', $form.email);
			history.pushState({}, '', url);
		}
	}

	export const derivedForm = derived(form, ($form) => {
		// Perform any derived logic here based on the $form store
		// For example, you might want to create a derived value that
		// indicates if the form is valid or not, or if certain conditions are met
		// This is just a placeholder logic, replace it with actual requirements
		const isFormValid =
			$form.step !== undefined && $form.email !== undefined && $form.phone !== undefined;
		return {
			...$form,
			isFormValid
		};
	});
</script>

{#if dev}
	<SuperDebug data={$form} />
{/if}
<MetaTags
	title="Presale Identity Verification"
	titleTemplate="%s - 0xArgus"
	description="0xArgus Rug Pull Prevention Middleware for Ethereum, Solana, Arbitrum."
	canonical="https://0xargus.org/verification"
	openGraph={{
		url: 'https://www.0xargus.org/verification',
		title: '0xArgus',
		description: '0xArgus Rug Pull Prevention Middleware for Ethereum, Solana, Arbitrum.',
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

<div class="mt-8">
	<Navbar />
</div>

<div class="mt-8 flex flex-col items-center justify-center sm:mt-6">
	<Section maxWidth="4xl" class="w-full text-white">
		{#if !loading}
			<div
				transition:fade={{ duration: 300 }}
				class="relative min-h-[900px] rounded-xl border-white/[0.05] bg-gradient-to-tr from-slate-800/50 via-slate-950/55 to-gray-700/20 px-4 py-8 shadow-2xl md:p-16 lg:px-32 lg:py-24">
				<div
					class="relative -top-12 mx-auto -mt-8 flex h-20 w-20 items-center justify-center rounded-full border-b-4 border-white/[0.2] bg-brand-bgPrimary pb-4 sm:mb-12 md:-mt-16 lg:-mt-24">
					<div class="absolute inset-0">
						<enhanced:img
							src="/static/cardanoCoin.png?enhanced"
							alt="logo"
							class="p-6 drop-shadow-2xl sm:p-4" />
					</div>
				</div>
				<div class="group flex w-full items-center justify-center gap-x-4">
					{#each Array(3) as _, i}
						<div
							class={`inset-0 h-12 w-12 transform-gpu rounded-full transition duration-200 ease-in-out ${
								$form.step === i
									? 'scale-110 bg-gradient-radial from-green-400 to-green-800'
									: $form.step > i
										? 'bg-gradient-radial from-green-400 to-green-800'
										: 'bg-neutral-300'
							} shadow-xl`}>
						</div>
						{#if i !== 2}
							<hr class="w-12 border-white/[0.2]" />
						{/if}
					{/each}
				</div>
				<!-- Status -->

				<!-- INFO -->
				{#key $form.step}
					<div class="mt-8 space-y-4 py-12 text-center">
						<h1 in:fade={{ duration: 250 }} class="text-4xl capitalize text-neutral-100">
							{currentHeaderText.header}
						</h1>
						<p class="text-lg text-neutral-300">{currentHeaderText.subheader}</p>
					</div>
				{/key}

				<!-- FORM START -->
				{#if !$isSubscribed.subscribed || $form.step < 2}
					<form use:enhance method="POST" action="/verification" class="mt-4 space-y-8">
						{#if $form.step === 0 && !verifications.email}
							<!-- Full Name -->
							<div class="grid gap-2">
								<label for="name">Full Legal Name<span class="text-red-400">*</span></label>
								<div in:fade={{ duration: 200 }} class="relative">
									<Scale
										class="absolute top-1/2 mx-4 w-6 -translate-y-1/2 transform text-indigo-500" />
									<InfoIcon
										class="absolute right-0 top-1/2 mx-4 -translate-y-1/2 transform text-indigo-400/75 " />
									<input
										class={cn(
											// ' focus:ring-2 focus:ring-violet-600 ',
											`text-input duration-50 form-input h-full w-full rounded-xl border-0 bg-white/[0.075] px-6 py-6 pl-12 text-xl text-neutral-300 placeholder-neutral-500 shadow ease-in-out invalid:ring-2 invalid:!ring-red-500 focus:ring-2 focus:ring-violet-600`,
											$form.step > 0 && 'border-green-500 ring-green-500   '
										)}
										type="text"
										bind:value={$form.name}
										aria-invalid={$errors.name ? 'true' : undefined}
										disabled={$form.step > 1}
										id="name"
										placeholder="John Doe"
										{...$constraints.name} />
								</div>
							</div>

							<!-- Email -->
							<div class="grid gap-2">
								<label for="email">Email<span class="text-red-400">*</span></label>
								<div in:fade={{ duration: 200 }} class="relative">
									<Mail
										class="absolute top-1/2 mx-4 w-6 -translate-y-1/2 transform text-indigo-500" />
									<input
										class="form-input h-full w-full rounded-xl border-0 bg-white/[0.075] px-6 py-6 pl-12 text-xl text-neutral-300 placeholder-neutral-500 shadow invalid:!ring-red-500 focus:ring-2 focus:ring-violet-500"
										type="email"
										bind:value={$form.email}
										aria-invalid={$errors.email ? 'true' : undefined}
										id="email"
										placeholder="hello@moon.com" />
								</div>
							</div>
						{/if}
						<!-- Verify Email -->
						{#if $form.step === 0 && verifications.email}
							<div
								in:fade={{ duration: 200 }}
								class="flex h-[400px] flex-col items-center gap-4 rounded-xl bg-white/[0.1] p-12 text-neutral-100">
								<div class="w-32 rounded-lg">
									<CustomLottiePlayer loop={true} src={'/mail2.json'} />
								</div>
								<p class="text-center text-3xl font-bold leading-relaxed text-neutral-50">
									You're Almost There!
								</p>
								<p class="text-center text-xl">
									Please verify your email {$form.email} to continue.
								</p>
							</div>
						{/if}
						<!-- Phone -->
						{#if $form.step === 1 && !verifications.phone && $form.phone}
							<div class="grid gap-2">
								<label for="phone">Phone</label>
								<PhoneInput bind:value={$form.phone.number} />
								<p class="{$errors.phone?.number || 'invisible'} text-sm text-red-500">
									{$errors.phone?.number || ''}
								</p>

								{#if $message}
									<span class="text-red-500">
										{$message} - Please contact support at support@0xArgus.org to finish verification.</span>
								{/if}
							</div>
						{/if}

						<!-- OTP Verification -->
						{#if verifications.phone && $form.phone}
							<div class="grid h-32 w-full items-center justify-center space-y-4 text-center">
								{#if $submitting}
									<div class="mx-auto my-8">
										<Circle color="#adb5bd" size="40" unit="px" />
									</div>
								{:else}
									<label class="font-sembold text-left text-lg" for="otp">Enter code</label>
									<div class="mx-auto">
										<SvelteOtp
											{...$constraints.phone?.otp}
											numberOnly
											inputStyle="width: 72px; height: 72px; font-size: 25px;"
											separatorClass="text-white"
											bind:value={$form.phone.otp}
											inputClass="rounded-xl text-xl text-white bg-white/[0.075] border-white/[0.2] focus:ring-2 focus:ring-blue-500/50  focus:ring-offset-blue-500 -border focus:outline-none shadow-xl"
											numOfInputs={6} />
									</div>
								{/if}

								<!-- Error -->
								<p class="text-xl text-neutral-300">
									{#if $message}
										<span class="text-red-500">
											{$message} - Please contact support at support@0xArgus.org to finish verification.</span>
									{:else}
										Sent to mobile {$form.phone.number} -
									{/if}
									<button
										on:click|preventDefault={() => {
											handleResendCode();
										}}
										class="text-blue-600 underline underline-offset-2 duration-200 ease-in-out {time
											? 'cursor-default text-neutral-500'
											: 'text-blue-600 hover:text-blue-700'}">
										<span class="inline-block w-[100px] whitespace-nowrap text-center">
											{#if time}
												resend in {time}
											{:else}
												Resend Code
											{/if}
										</span>
									</button>
								</p>
							</div>
						{/if}
						<!-- Info -->
						{#if $form.step == 0 && !verifications.email}
							<br />
							<div
								class="flex items-center justify-center gap-x-4 rounded-xl border border-white/[0.2] px-4 py-6 text-xs text-neutral-500 shadow-md sm:px-8 sm:text-base lg:items-start">
								<ShieldEllipsis
									class="bg-gradient-tr min-h-6 min-w-6 text-xl text-indigo-500 sm:text-sm lg:h-8 lg:w-8" />

								<p>
									ID Verification may be triggered if your using a VPN, if you have one on, please
									turn it off.
								</p>
							</div>
						{/if}

						<div class="sticky inset-x-0 bottom-12 flex w-full items-center justify-center gap-x-6">
							{#if verifications.email}
								<button
									aria-label="go back"
									on:click={() => (verifications.email = false)}
									type="button"
									class={cn(
										'mt-12 h-full w-full rounded-full border border-white/[0.1]  bg-white/[0.01] px-8 py-6 text-xl shadow-xl backdrop-blur-2xl duration-200 ease-in-out hover:bg-neutral-800',
										''
									)}>Go Back</button>
							{:else if verifications.phone}
								<button
									aria-label="go back"
									on:click={() => {
										verifications.phone = false;
									}}
									type="button"
									class={cn(
										'mt-12 h-full w-full flex-grow rounded-lg bg-white/[0.1] px-8 py-6 shadow-xl duration-200 ease-in-out hover:bg-white/[0.125]'
									)}>Go Back</button>
							{:else}
								{@const disabled = !!$allErrors.length || $submitting}
								<button
									aria-label="continue"
									{disabled}
									class={cn(
										disabled
											? 'cursor-not-allowed bg-neutral-700'
											: 'bg-gradient-radial from-indigo-500/80 to-indigo-700/80 hover:bg-indigo-600',
										'flex-grow-2 mx-auto mt-12 w-full rounded-lg',
										'px-8 py-6 shadow-xl outline-none duration-300 ease-in-out',
										'-disabled:border -disabled:border-white/[0.2] disabled:cursor-not-allowed disabled:bg-neutral-500 disabled:text-neutral-200',
										'flex h-full items-center justify-center py-6 text-lg font-bold uppercase tracking-wider text-purple-50 backdrop-blur-xl transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-500'
									)}
									type="submit">
									{#if $submitting}
										<Circle color="white" size="32" unit="px" />
									{:else}
										Continue
										<MoveRight class="ml-2 text-purple-200" />
									{/if}
								</button>
							{/if}
						</div>
					</form>
				{:else}
					<!-- Success Receipt -->
					<div
						transition:fade={{ duration: 250 }}
						class="relative rounded-xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-indigo-900/90 px-12 py-12 shadow-2xl backdrop-blur-3xl backdrop-filter">
						<div class="absolute inset-0 rounded-xl bg-purple-500/5 blur-md"></div>
						<div class="relative z-10">
							<h3 class="mt-8 text-2xl font-medium text-neutral-100">Registration Details</h3>
							<hr class="mt-2 border-neutral-400/30" />
							<div class="mt-4 flex justify-around">
								<div class="gap grid text-center">
									<p class="font-bold tracking-wide text-neutral-300">REGISTERED AS</p>
									<p class="text-neutral-100">
										{$form.name}
									</p>
								</div>
								<div class="gap grid text-center">
									<p class="font-bold tracking-wide text-neutral-300">REGISTERED ON</p>
									<p class="text-neutral-100">
										{formattedDate}
									</p>
								</div>
							</div>

							<h3 class="mt-8 text-2xl font-medium text-neutral-100">Additional Information</h3>
							<hr class="mt-2 border-neutral-400/30" />

							<p class="mt-6 font-bold tracking-wide text-neutral-300">ABOUT DEPOSITS</p>
							<p class="leading-relaxed text-neutral-200">
								Your purchase will be confirmed when your deposit clears. If your deposit doesn't
								clear immediately, that's fine – you have until {formattedLastInvestmentDay} to finalize
								your purchase. If you secure an allocation and do not fund your allocation by the deadline,
								you will be unable to secure future allocations in 0xArgus sales.
							</p>
							<p class="mt-6 font-bold tracking-wide text-neutral-300">
								WHEN WILL I RECEIVE TOKENS?
							</p>
							<p class="leading-relaxed text-neutral-200">
								The Argus team will be distributing tokens 6 days from the close of the sale ({formattedTokenReleaseDate}).
							</p>
						</div>
					</div>
				{/if}
			</div>
		{:else}
			<SkeletonLoader />
		{/if}
	</Section>
</div>

<div class="">
	<Footer />
</div>
