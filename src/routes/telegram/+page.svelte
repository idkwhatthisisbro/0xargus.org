<script lang="ts">
	// import { browser } from '$app/environment';
	// import Popup from '$lib/components/Popup.svelte';
	// import { whitelistSchema } from '$lib/schema';
	// import { getContext, onMount } from 'svelte';
	// import { superForm } from 'sveltekit-superforms';
	// import { zod } from 'sveltekit-superforms/adapters';

	// // @ts-ignore
	// import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';

	// let userId: number | undefined;
	// let sendData: Telegram['WebApp']['sendData'] | undefined;

	// onMount(() => {
	// 	console.log(window.Telegram.WebApp.initDataUnsafe.user?.id);
	// 	userId = window.Telegram.WebApp.initDataUnsafe.user?.id;
	// 	sendData = window.Telegram.WebApp.sendData;
	// });
	// const handleSubmit = () => {
	// 	step = 2;

	// 	isVerified();
	// };

	// // TODO: Poll DB for verification result
	// const isVerified = () => {
	// 	// Lets Telegram Know to close the browser
	// 	sendData && sendData('1');
	// };

	// const { form, errors, constraints, delayed, message } = superForm(
	// 	{},
	// 	{
	// 		validators: zod(whitelistSchema),
	// 		id: 'whitelist-telegram',
	// 		onSubmit: ({}) => handleSubmit
	// 	}
	// );

	// let step: 1 | 2 | 3 = 1;
</script>

<h1 class="h1 aos-init aos-animate ml-0 flex bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text pb-4 text-transparent sm:ml-12" data-aos="fade-down">
	Let your website
	<div class="text-transition undefined" style="color: white; margin-left: 10px; margin-right: 10px; position: relative; white-space: nowrap; display: inline-flex; height: 0px; width: 218.75px;">
		<div style="opacity: 1; transform: translateY(0%);">grow</div>
		<div style="opacity: 1; transform: translateY(0%);">perfect</div>
		<div style="opacity: 1; transform: translateY(0%);">improve</div>
	</div>
	itself
</h1>

<!-- <svelte:head>
	<script src="https://telegram.org/js/telegram-web-app.js"></script>
</svelte:head>

<div class="flex h-screen flex-col items-center gap-4 overflow-hidden bg-neutral-950 px-12 py-8 font-outfit text-neutral-100">
	{#if browser}
		{#if step === 1}
			<form method="POST">
				<input type="text" placeholder="email" class="rounded-sm px-2 py-1" />
				<button></button>
				{#if userId}
					<input type="hidden" name="tgId" value={userId} />
				{/if}
			</form>
		{/if}

		{#if step === 2}
			<div class="w-32 rounded-lg">
				<LottiePlayer src="mail2.json" autoplay loop={true} renderer="svg" background="transparent" />
			</div>
			<p class="text-center text-3xl font-bold text-neutral-50">You're Almost There!</p>
			<p>Please verify your email to continue.</p>
		{/if}

		{#if step === 3}
			<div class="w-32 rounded-lg">
				<LottiePlayer src="mail2.json" autoplay loop={true} renderer="svg" background="transparent" />
			</div>
			<p class="text-center text-3xl font-bold text-neutral-50">Your in TG_FIRST_NAME!</p>
			<p>If selected to participate the presale, you'll be notified via email.</p>
		{/if}
	{/if}
</div> -->

<style>
	@media screen {
		html:not(.no-js) body [data-aos='fade-up'] {
			transform: translate3d(0, 14px, 0);
		}

		html:not(.no-js) body [data-aos='fade-down'] {
			transform: translate3d(0, -14px, 0);
		}

		html:not(.no-js) body [data-aos='fade-right'] {
			transform: translate3d(-14px, 0, 0);
		}

		html:not(.no-js) body [data-aos='fade-left'] {
			transform: translate3d(14px, 0, 0);
		}

		html:not(.no-js) body [data-aos='fade-up-right'] {
			transform: translate3d(-14px, 14px, 0);
		}

		html:not(.no-js) body [data-aos='fade-up-left'] {
			transform: translate3d(14px, 14px, 0);
		}

		html:not(.no-js) body [data-aos='fade-down-right'] {
			transform: translate3d(-14px, -14px, 0);
		}

		html:not(.no-js) body [data-aos='fade-down-left'] {
			transform: translate3d(14px, -14px, 0);
		}

		html:not(.no-js) body [data-aos='zoom-in-up'] {
			transform: translate3d(0, 14px, 0) scale(0.6);
		}

		html:not(.no-js) body [data-aos='zoom-in-down'] {
			transform: translate3d(0, -14px, 0) scale(0.6);
		}

		html:not(.no-js) body [data-aos='zoom-in-right'] {
			transform: translate3d(-14px, 0, 0) scale(0.6);
		}

		html:not(.no-js) body [data-aos='zoom-in-left'] {
			transform: translate3d(14px, 0, 0) scale(0.6);
		}

		html:not(.no-js) body [data-aos='zoom-out-up'] {
			transform: translate3d(0, 14px, 0) scale(1.2);
		}

		html:not(.no-js) body [data-aos='zoom-out-down'] {
			transform: translate3d(0, -14px, 0) scale(1.2);
		}

		html:not(.no-js) body [data-aos='zoom-out-right'] {
			transform: translate3d(-14px, 0, 0) scale(1.2);
		}

		html:not(.no-js) body [data-aos='zoom-out-left'] {
			transform: translate3d(14px, 0, 0) scale(1.2);
		}
	}

	[data-aos][data-aos][data-aos-duration='50'],
	body[data-aos-duration='50'] [data-aos] {
		transition-duration: 50ms;
	}

	[data-aos][data-aos][data-aos-delay='50'],
	body[data-aos-delay='50'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='50'].aos-animate,
	body[data-aos-delay='50'] [data-aos].aos-animate {
		transition-delay: 50ms;
	}

	[data-aos][data-aos][data-aos-duration='100'],
	body[data-aos-duration='100'] [data-aos] {
		transition-duration: 0.1s;
	}

	[data-aos][data-aos][data-aos-delay='100'],
	body[data-aos-delay='100'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='100'].aos-animate,
	body[data-aos-delay='100'] [data-aos].aos-animate {
		transition-delay: 0.1s;
	}

	[data-aos][data-aos][data-aos-duration='150'],
	body[data-aos-duration='150'] [data-aos] {
		transition-duration: 0.15s;
	}

	[data-aos][data-aos][data-aos-delay='150'],
	body[data-aos-delay='150'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='150'].aos-animate,
	body[data-aos-delay='150'] [data-aos].aos-animate {
		transition-delay: 0.15s;
	}

	[data-aos][data-aos][data-aos-duration='200'],
	body[data-aos-duration='200'] [data-aos] {
		transition-duration: 0.2s;
	}

	[data-aos][data-aos][data-aos-delay='200'],
	body[data-aos-delay='200'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='200'].aos-animate,
	body[data-aos-delay='200'] [data-aos].aos-animate {
		transition-delay: 0.2s;
	}

	[data-aos][data-aos][data-aos-duration='250'],
	body[data-aos-duration='250'] [data-aos] {
		transition-duration: 0.25s;
	}

	[data-aos][data-aos][data-aos-delay='250'],
	body[data-aos-delay='250'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='250'].aos-animate,
	body[data-aos-delay='250'] [data-aos].aos-animate {
		transition-delay: 0.25s;
	}

	[data-aos][data-aos][data-aos-duration='300'],
	body[data-aos-duration='300'] [data-aos] {
		transition-duration: 0.3s;
	}

	[data-aos][data-aos][data-aos-delay='300'],
	body[data-aos-delay='300'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='300'].aos-animate,
	body[data-aos-delay='300'] [data-aos].aos-animate {
		transition-delay: 0.3s;
	}

	[data-aos][data-aos][data-aos-duration='350'],
	body[data-aos-duration='350'] [data-aos] {
		transition-duration: 0.35s;
	}

	[data-aos][data-aos][data-aos-delay='350'],
	body[data-aos-delay='350'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='350'].aos-animate,
	body[data-aos-delay='350'] [data-aos].aos-animate {
		transition-delay: 0.35s;
	}

	[data-aos][data-aos][data-aos-duration='400'],
	body[data-aos-duration='400'] [data-aos] {
		transition-duration: 0.4s;
	}

	[data-aos][data-aos][data-aos-delay='400'],
	body[data-aos-delay='400'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='400'].aos-animate,
	body[data-aos-delay='400'] [data-aos].aos-animate {
		transition-delay: 0.4s;
	}

	[data-aos][data-aos][data-aos-duration='450'],
	body[data-aos-duration='450'] [data-aos] {
		transition-duration: 0.45s;
	}

	[data-aos][data-aos][data-aos-delay='450'],
	body[data-aos-delay='450'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='450'].aos-animate,
	body[data-aos-delay='450'] [data-aos].aos-animate {
		transition-delay: 0.45s;
	}

	[data-aos][data-aos][data-aos-duration='500'],
	body[data-aos-duration='500'] [data-aos] {
		transition-duration: 0.5s;
	}

	[data-aos][data-aos][data-aos-delay='500'],
	body[data-aos-delay='500'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='500'].aos-animate,
	body[data-aos-delay='500'] [data-aos].aos-animate {
		transition-delay: 0.5s;
	}

	[data-aos][data-aos][data-aos-duration='550'],
	body[data-aos-duration='550'] [data-aos] {
		transition-duration: 0.55s;
	}

	[data-aos][data-aos][data-aos-delay='550'],
	body[data-aos-delay='550'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='550'].aos-animate,
	body[data-aos-delay='550'] [data-aos].aos-animate {
		transition-delay: 0.55s;
	}

	[data-aos][data-aos][data-aos-duration='600'],
	body[data-aos-duration='600'] [data-aos] {
		transition-duration: 0.6s;
	}

	[data-aos][data-aos][data-aos-delay='600'],
	body[data-aos-delay='600'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='600'].aos-animate,
	body[data-aos-delay='600'] [data-aos].aos-animate {
		transition-delay: 0.6s;
	}

	[data-aos][data-aos][data-aos-duration='650'],
	body[data-aos-duration='650'] [data-aos] {
		transition-duration: 0.65s;
	}

	[data-aos][data-aos][data-aos-delay='650'],
	body[data-aos-delay='650'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='650'].aos-animate,
	body[data-aos-delay='650'] [data-aos].aos-animate {
		transition-delay: 0.65s;
	}

	[data-aos][data-aos][data-aos-duration='700'],
	body[data-aos-duration='700'] [data-aos] {
		transition-duration: 0.7s;
	}

	[data-aos][data-aos][data-aos-delay='700'],
	body[data-aos-delay='700'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='700'].aos-animate,
	body[data-aos-delay='700'] [data-aos].aos-animate {
		transition-delay: 0.7s;
	}

	[data-aos][data-aos][data-aos-duration='750'],
	body[data-aos-duration='750'] [data-aos] {
		transition-duration: 0.75s;
	}

	[data-aos][data-aos][data-aos-delay='750'],
	body[data-aos-delay='750'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='750'].aos-animate,
	body[data-aos-delay='750'] [data-aos].aos-animate {
		transition-delay: 0.75s;
	}

	[data-aos][data-aos][data-aos-duration='800'],
	body[data-aos-duration='800'] [data-aos] {
		transition-duration: 0.8s;
	}

	[data-aos][data-aos][data-aos-delay='800'],
	body[data-aos-delay='800'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='800'].aos-animate,
	body[data-aos-delay='800'] [data-aos].aos-animate {
		transition-delay: 0.8s;
	}

	[data-aos][data-aos][data-aos-duration='850'],
	body[data-aos-duration='850'] [data-aos] {
		transition-duration: 0.85s;
	}

	[data-aos][data-aos][data-aos-delay='850'],
	body[data-aos-delay='850'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='850'].aos-animate,
	body[data-aos-delay='850'] [data-aos].aos-animate {
		transition-delay: 0.85s;
	}

	[data-aos][data-aos][data-aos-duration='900'],
	body[data-aos-duration='900'] [data-aos] {
		transition-duration: 0.9s;
	}

	[data-aos][data-aos][data-aos-delay='900'],
	body[data-aos-delay='900'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='900'].aos-animate,
	body[data-aos-delay='900'] [data-aos].aos-animate {
		transition-delay: 0.9s;
	}

	[data-aos][data-aos][data-aos-duration='950'],
	body[data-aos-duration='950'] [data-aos] {
		transition-duration: 0.95s;
	}

	[data-aos][data-aos][data-aos-delay='950'],
	body[data-aos-delay='950'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='950'].aos-animate,
	body[data-aos-delay='950'] [data-aos].aos-animate {
		transition-delay: 0.95s;
	}

	[data-aos][data-aos][data-aos-duration='1000'],
	body[data-aos-duration='1000'] [data-aos] {
		transition-duration: 1s;
	}

	[data-aos][data-aos][data-aos-delay='1000'],
	body[data-aos-delay='1000'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='1000'].aos-animate,
	body[data-aos-delay='1000'] [data-aos].aos-animate {
		transition-delay: 1s;
	}

	[data-aos][data-aos][data-aos-duration='1050'],
	body[data-aos-duration='1050'] [data-aos] {
		transition-duration: 1.05s;
	}

	[data-aos][data-aos][data-aos-delay='1050'],
	body[data-aos-delay='1050'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='1050'].aos-animate,
	body[data-aos-delay='1050'] [data-aos].aos-animate {
		transition-delay: 1.05s;
	}

	[data-aos][data-aos][data-aos-duration='1100'],
	body[data-aos-duration='1100'] [data-aos] {
		transition-duration: 1.1s;
	}

	[data-aos][data-aos][data-aos-delay='1100'],
	body[data-aos-delay='1100'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='1100'].aos-animate,
	body[data-aos-delay='1100'] [data-aos].aos-animate {
		transition-delay: 1.1s;
	}

	[data-aos][data-aos][data-aos-duration='1150'],
	body[data-aos-duration='1150'] [data-aos] {
		transition-duration: 1.15s;
	}

	[data-aos][data-aos][data-aos-delay='1150'],
	body[data-aos-delay='1150'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='1150'].aos-animate,
	body[data-aos-delay='1150'] [data-aos].aos-animate {
		transition-delay: 1.15s;
	}

	[data-aos][data-aos][data-aos-duration='1200'],
	body[data-aos-duration='1200'] [data-aos] {
		transition-duration: 1.2s;
	}

	[data-aos][data-aos][data-aos-delay='1200'],
	body[data-aos-delay='1200'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='1200'].aos-animate,
	body[data-aos-delay='1200'] [data-aos].aos-animate {
		transition-delay: 1.2s;
	}

	[data-aos][data-aos][data-aos-duration='1250'],
	body[data-aos-duration='1250'] [data-aos] {
		transition-duration: 1.25s;
	}

	[data-aos][data-aos][data-aos-delay='1250'],
	body[data-aos-delay='1250'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='1250'].aos-animate,
	body[data-aos-delay='1250'] [data-aos].aos-animate {
		transition-delay: 1.25s;
	}

	[data-aos][data-aos][data-aos-duration='1300'],
	body[data-aos-duration='1300'] [data-aos] {
		transition-duration: 1.3s;
	}

	[data-aos][data-aos][data-aos-delay='1300'],
	body[data-aos-delay='1300'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='1300'].aos-animate,
	body[data-aos-delay='1300'] [data-aos].aos-animate {
		transition-delay: 1.3s;
	}

	[data-aos][data-aos][data-aos-duration='1350'],
	body[data-aos-duration='1350'] [data-aos] {
		transition-duration: 1.35s;
	}

	[data-aos][data-aos][data-aos-delay='1350'],
	body[data-aos-delay='1350'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='1350'].aos-animate,
	body[data-aos-delay='1350'] [data-aos].aos-animate {
		transition-delay: 1.35s;
	}

	[data-aos][data-aos][data-aos-duration='1400'],
	body[data-aos-duration='1400'] [data-aos] {
		transition-duration: 1.4s;
	}

	[data-aos][data-aos][data-aos-delay='1400'],
	body[data-aos-delay='1400'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='1400'].aos-animate,
	body[data-aos-delay='1400'] [data-aos].aos-animate {
		transition-delay: 1.4s;
	}

	[data-aos][data-aos][data-aos-duration='1450'],
	body[data-aos-duration='1450'] [data-aos] {
		transition-duration: 1.45s;
	}

	[data-aos][data-aos][data-aos-delay='1450'],
	body[data-aos-delay='1450'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='1450'].aos-animate,
	body[data-aos-delay='1450'] [data-aos].aos-animate {
		transition-delay: 1.45s;
	}

	[data-aos][data-aos][data-aos-duration='1500'],
	body[data-aos-duration='1500'] [data-aos] {
		transition-duration: 1.5s;
	}

	[data-aos][data-aos][data-aos-delay='1500'],
	body[data-aos-delay='1500'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='1500'].aos-animate,
	body[data-aos-delay='1500'] [data-aos].aos-animate {
		transition-delay: 1.5s;
	}

	[data-aos][data-aos][data-aos-duration='1550'],
	body[data-aos-duration='1550'] [data-aos] {
		transition-duration: 1.55s;
	}

	[data-aos][data-aos][data-aos-delay='1550'],
	body[data-aos-delay='1550'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='1550'].aos-animate,
	body[data-aos-delay='1550'] [data-aos].aos-animate {
		transition-delay: 1.55s;
	}

	[data-aos][data-aos][data-aos-duration='1600'],
	body[data-aos-duration='1600'] [data-aos] {
		transition-duration: 1.6s;
	}

	[data-aos][data-aos][data-aos-delay='1600'],
	body[data-aos-delay='1600'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='1600'].aos-animate,
	body[data-aos-delay='1600'] [data-aos].aos-animate {
		transition-delay: 1.6s;
	}

	[data-aos][data-aos][data-aos-duration='1650'],
	body[data-aos-duration='1650'] [data-aos] {
		transition-duration: 1.65s;
	}

	[data-aos][data-aos][data-aos-delay='1650'],
	body[data-aos-delay='1650'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='1650'].aos-animate,
	body[data-aos-delay='1650'] [data-aos].aos-animate {
		transition-delay: 1.65s;
	}

	[data-aos][data-aos][data-aos-duration='1700'],
	body[data-aos-duration='1700'] [data-aos] {
		transition-duration: 1.7s;
	}

	[data-aos][data-aos][data-aos-delay='1700'],
	body[data-aos-delay='1700'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='1700'].aos-animate,
	body[data-aos-delay='1700'] [data-aos].aos-animate {
		transition-delay: 1.7s;
	}

	[data-aos][data-aos][data-aos-duration='1750'],
	body[data-aos-duration='1750'] [data-aos] {
		transition-duration: 1.75s;
	}

	[data-aos][data-aos][data-aos-delay='1750'],
	body[data-aos-delay='1750'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='1750'].aos-animate,
	body[data-aos-delay='1750'] [data-aos].aos-animate {
		transition-delay: 1.75s;
	}

	[data-aos][data-aos][data-aos-duration='1800'],
	body[data-aos-duration='1800'] [data-aos] {
		transition-duration: 1.8s;
	}

	[data-aos][data-aos][data-aos-delay='1800'],
	body[data-aos-delay='1800'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='1800'].aos-animate,
	body[data-aos-delay='1800'] [data-aos].aos-animate {
		transition-delay: 1.8s;
	}

	[data-aos][data-aos][data-aos-duration='1850'],
	body[data-aos-duration='1850'] [data-aos] {
		transition-duration: 1.85s;
	}

	[data-aos][data-aos][data-aos-delay='1850'],
	body[data-aos-delay='1850'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='1850'].aos-animate,
	body[data-aos-delay='1850'] [data-aos].aos-animate {
		transition-delay: 1.85s;
	}

	[data-aos][data-aos][data-aos-duration='1900'],
	body[data-aos-duration='1900'] [data-aos] {
		transition-duration: 1.9s;
	}

	[data-aos][data-aos][data-aos-delay='1900'],
	body[data-aos-delay='1900'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='1900'].aos-animate,
	body[data-aos-delay='1900'] [data-aos].aos-animate {
		transition-delay: 1.9s;
	}

	[data-aos][data-aos][data-aos-duration='1950'],
	body[data-aos-duration='1950'] [data-aos] {
		transition-duration: 1.95s;
	}

	[data-aos][data-aos][data-aos-delay='1950'],
	body[data-aos-delay='1950'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='1950'].aos-animate,
	body[data-aos-delay='1950'] [data-aos].aos-animate {
		transition-delay: 1.95s;
	}

	[data-aos][data-aos][data-aos-duration='2000'],
	body[data-aos-duration='2000'] [data-aos] {
		transition-duration: 2s;
	}

	[data-aos][data-aos][data-aos-delay='2000'],
	body[data-aos-delay='2000'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='2000'].aos-animate,
	body[data-aos-delay='2000'] [data-aos].aos-animate {
		transition-delay: 2s;
	}

	[data-aos][data-aos][data-aos-duration='2050'],
	body[data-aos-duration='2050'] [data-aos] {
		transition-duration: 2.05s;
	}

	[data-aos][data-aos][data-aos-delay='2050'],
	body[data-aos-delay='2050'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='2050'].aos-animate,
	body[data-aos-delay='2050'] [data-aos].aos-animate {
		transition-delay: 2.05s;
	}

	[data-aos][data-aos][data-aos-duration='2100'],
	body[data-aos-duration='2100'] [data-aos] {
		transition-duration: 2.1s;
	}

	[data-aos][data-aos][data-aos-delay='2100'],
	body[data-aos-delay='2100'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='2100'].aos-animate,
	body[data-aos-delay='2100'] [data-aos].aos-animate {
		transition-delay: 2.1s;
	}

	[data-aos][data-aos][data-aos-duration='2150'],
	body[data-aos-duration='2150'] [data-aos] {
		transition-duration: 2.15s;
	}

	[data-aos][data-aos][data-aos-delay='2150'],
	body[data-aos-delay='2150'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='2150'].aos-animate,
	body[data-aos-delay='2150'] [data-aos].aos-animate {
		transition-delay: 2.15s;
	}

	[data-aos][data-aos][data-aos-duration='2200'],
	body[data-aos-duration='2200'] [data-aos] {
		transition-duration: 2.2s;
	}

	[data-aos][data-aos][data-aos-delay='2200'],
	body[data-aos-delay='2200'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='2200'].aos-animate,
	body[data-aos-delay='2200'] [data-aos].aos-animate {
		transition-delay: 2.2s;
	}

	[data-aos][data-aos][data-aos-duration='2250'],
	body[data-aos-duration='2250'] [data-aos] {
		transition-duration: 2.25s;
	}

	[data-aos][data-aos][data-aos-delay='2250'],
	body[data-aos-delay='2250'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='2250'].aos-animate,
	body[data-aos-delay='2250'] [data-aos].aos-animate {
		transition-delay: 2.25s;
	}

	[data-aos][data-aos][data-aos-duration='2300'],
	body[data-aos-duration='2300'] [data-aos] {
		transition-duration: 2.3s;
	}

	[data-aos][data-aos][data-aos-delay='2300'],
	body[data-aos-delay='2300'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='2300'].aos-animate,
	body[data-aos-delay='2300'] [data-aos].aos-animate {
		transition-delay: 2.3s;
	}

	[data-aos][data-aos][data-aos-duration='2350'],
	body[data-aos-duration='2350'] [data-aos] {
		transition-duration: 2.35s;
	}

	[data-aos][data-aos][data-aos-delay='2350'],
	body[data-aos-delay='2350'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='2350'].aos-animate,
	body[data-aos-delay='2350'] [data-aos].aos-animate {
		transition-delay: 2.35s;
	}

	[data-aos][data-aos][data-aos-duration='2400'],
	body[data-aos-duration='2400'] [data-aos] {
		transition-duration: 2.4s;
	}

	[data-aos][data-aos][data-aos-delay='2400'],
	body[data-aos-delay='2400'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='2400'].aos-animate,
	body[data-aos-delay='2400'] [data-aos].aos-animate {
		transition-delay: 2.4s;
	}

	[data-aos][data-aos][data-aos-duration='2450'],
	body[data-aos-duration='2450'] [data-aos] {
		transition-duration: 2.45s;
	}

	[data-aos][data-aos][data-aos-delay='2450'],
	body[data-aos-delay='2450'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='2450'].aos-animate,
	body[data-aos-delay='2450'] [data-aos].aos-animate {
		transition-delay: 2.45s;
	}

	[data-aos][data-aos][data-aos-duration='2500'],
	body[data-aos-duration='2500'] [data-aos] {
		transition-duration: 2.5s;
	}

	[data-aos][data-aos][data-aos-delay='2500'],
	body[data-aos-delay='2500'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='2500'].aos-animate,
	body[data-aos-delay='2500'] [data-aos].aos-animate {
		transition-delay: 2.5s;
	}

	[data-aos][data-aos][data-aos-duration='2550'],
	body[data-aos-duration='2550'] [data-aos] {
		transition-duration: 2.55s;
	}

	[data-aos][data-aos][data-aos-delay='2550'],
	body[data-aos-delay='2550'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='2550'].aos-animate,
	body[data-aos-delay='2550'] [data-aos].aos-animate {
		transition-delay: 2.55s;
	}

	[data-aos][data-aos][data-aos-duration='2600'],
	body[data-aos-duration='2600'] [data-aos] {
		transition-duration: 2.6s;
	}

	[data-aos][data-aos][data-aos-delay='2600'],
	body[data-aos-delay='2600'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='2600'].aos-animate,
	body[data-aos-delay='2600'] [data-aos].aos-animate {
		transition-delay: 2.6s;
	}

	[data-aos][data-aos][data-aos-duration='2650'],
	body[data-aos-duration='2650'] [data-aos] {
		transition-duration: 2.65s;
	}

	[data-aos][data-aos][data-aos-delay='2650'],
	body[data-aos-delay='2650'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='2650'].aos-animate,
	body[data-aos-delay='2650'] [data-aos].aos-animate {
		transition-delay: 2.65s;
	}

	[data-aos][data-aos][data-aos-duration='2700'],
	body[data-aos-duration='2700'] [data-aos] {
		transition-duration: 2.7s;
	}

	[data-aos][data-aos][data-aos-delay='2700'],
	body[data-aos-delay='2700'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='2700'].aos-animate,
	body[data-aos-delay='2700'] [data-aos].aos-animate {
		transition-delay: 2.7s;
	}

	[data-aos][data-aos][data-aos-duration='2750'],
	body[data-aos-duration='2750'] [data-aos] {
		transition-duration: 2.75s;
	}

	[data-aos][data-aos][data-aos-delay='2750'],
	body[data-aos-delay='2750'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='2750'].aos-animate,
	body[data-aos-delay='2750'] [data-aos].aos-animate {
		transition-delay: 2.75s;
	}

	[data-aos][data-aos][data-aos-duration='2800'],
	body[data-aos-duration='2800'] [data-aos] {
		transition-duration: 2.8s;
	}

	[data-aos][data-aos][data-aos-delay='2800'],
	body[data-aos-delay='2800'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='2800'].aos-animate,
	body[data-aos-delay='2800'] [data-aos].aos-animate {
		transition-delay: 2.8s;
	}

	[data-aos][data-aos][data-aos-duration='2850'],
	body[data-aos-duration='2850'] [data-aos] {
		transition-duration: 2.85s;
	}

	[data-aos][data-aos][data-aos-delay='2850'],
	body[data-aos-delay='2850'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='2850'].aos-animate,
	body[data-aos-delay='2850'] [data-aos].aos-animate {
		transition-delay: 2.85s;
	}

	[data-aos][data-aos][data-aos-duration='2900'],
	body[data-aos-duration='2900'] [data-aos] {
		transition-duration: 2.9s;
	}

	[data-aos][data-aos][data-aos-delay='2900'],
	body[data-aos-delay='2900'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='2900'].aos-animate,
	body[data-aos-delay='2900'] [data-aos].aos-animate {
		transition-delay: 2.9s;
	}

	[data-aos][data-aos][data-aos-duration='2950'],
	body[data-aos-duration='2950'] [data-aos] {
		transition-duration: 2.95s;
	}

	[data-aos][data-aos][data-aos-delay='2950'],
	body[data-aos-delay='2950'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='2950'].aos-animate,
	body[data-aos-delay='2950'] [data-aos].aos-animate {
		transition-delay: 2.95s;
	}

	[data-aos][data-aos][data-aos-duration='3000'],
	body[data-aos-duration='3000'] [data-aos] {
		transition-duration: 3s;
	}

	[data-aos][data-aos][data-aos-delay='3000'],
	body[data-aos-delay='3000'] [data-aos] {
		transition-delay: 0s;
	}

	[data-aos][data-aos][data-aos-delay='3000'].aos-animate,
	body[data-aos-delay='3000'] [data-aos].aos-animate {
		transition-delay: 3s;
	}

	[data-aos] {
		pointer-events: none;
	}

	[data-aos].aos-animate {
		pointer-events: auto;
	}

	[data-aos][data-aos][data-aos-easing='linear'],
	body[data-aos-easing='linear'] [data-aos] {
		transition-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
	}

	[data-aos][data-aos][data-aos-easing='ease'],
	body[data-aos-easing='ease'] [data-aos] {
		transition-timing-function: ease;
	}

	[data-aos][data-aos][data-aos-easing='ease-in'],
	body[data-aos-easing='ease-in'] [data-aos] {
		transition-timing-function: ease-in;
	}

	[data-aos][data-aos][data-aos-easing='ease-out'],
	body[data-aos-easing='ease-out'] [data-aos] {
		transition-timing-function: ease-out;
	}

	[data-aos][data-aos][data-aos-easing='ease-in-out'],
	body[data-aos-easing='ease-in-out'] [data-aos] {
		transition-timing-function: ease-in-out;
	}

	[data-aos][data-aos][data-aos-easing='ease-in-back'],
	body[data-aos-easing='ease-in-back'] [data-aos] {
		transition-timing-function: cubic-bezier(0.6, -0.28, 0.735, 0.045);
	}

	[data-aos][data-aos][data-aos-easing='ease-out-back'],
	body[data-aos-easing='ease-out-back'] [data-aos] {
		transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	[data-aos][data-aos][data-aos-easing='ease-in-out-back'],
	body[data-aos-easing='ease-in-out-back'] [data-aos] {
		transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
	}

	[data-aos][data-aos][data-aos-easing='ease-in-sine'],
	body[data-aos-easing='ease-in-sine'] [data-aos] {
		transition-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
	}

	[data-aos][data-aos][data-aos-easing='ease-out-sine'],
	body[data-aos-easing='ease-out-sine'] [data-aos] {
		transition-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
	}

	[data-aos][data-aos][data-aos-easing='ease-in-out-sine'],
	body[data-aos-easing='ease-in-out-sine'] [data-aos] {
		transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
	}

	[data-aos][data-aos][data-aos-easing='ease-in-quad'],
	body[data-aos-easing='ease-in-quad'] [data-aos] {
		transition-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);
	}

	[data-aos][data-aos][data-aos-easing='ease-out-quad'],
	body[data-aos-easing='ease-out-quad'] [data-aos] {
		transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
	}

	[data-aos][data-aos][data-aos-easing='ease-in-out-quad'],
	body[data-aos-easing='ease-in-out-quad'] [data-aos] {
		transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
	}

	[data-aos][data-aos][data-aos-easing='ease-in-cubic'],
	body[data-aos-easing='ease-in-cubic'] [data-aos] {
		transition-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);
	}

	[data-aos][data-aos][data-aos-easing='ease-out-cubic'],
	body[data-aos-easing='ease-out-cubic'] [data-aos] {
		transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
	}

	[data-aos][data-aos][data-aos-easing='ease-in-out-cubic'],
	body[data-aos-easing='ease-in-out-cubic'] [data-aos] {
		transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
	}

	[data-aos][data-aos][data-aos-easing='ease-in-quart'],
	body[data-aos-easing='ease-in-quart'] [data-aos] {
		transition-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);
	}

	[data-aos][data-aos][data-aos-easing='ease-out-quart'],
	body[data-aos-easing='ease-out-quart'] [data-aos] {
		transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
	}

	[data-aos][data-aos][data-aos-easing='ease-in-out-quart'],
	body[data-aos-easing='ease-in-out-quart'] [data-aos] {
		transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
	}

	@media screen {
		html:not(.no-js) [data-aos^='fade'][data-aos^='fade'] {
			opacity: 0;
			transition-property: opacity, transform;
		}

		html:not(.no-js) [data-aos^='fade'][data-aos^='fade'].aos-animate {
			opacity: 1;
			transform: none;
		}

		html:not(.no-js) [data-aos='fade-up'] {
			transform: translate3d(0, 100px, 0);
		}

		html:not(.no-js) [data-aos='fade-down'] {
			transform: translate3d(0, -100px, 0);
		}

		html:not(.no-js) [data-aos='fade-right'] {
			transform: translate3d(-100px, 0, 0);
		}

		html:not(.no-js) [data-aos='fade-left'] {
			transform: translate3d(100px, 0, 0);
		}

		html:not(.no-js) [data-aos='fade-up-right'] {
			transform: translate3d(-100px, 100px, 0);
		}

		html:not(.no-js) [data-aos='fade-up-left'] {
			transform: translate3d(100px, 100px, 0);
		}

		html:not(.no-js) [data-aos='fade-down-right'] {
			transform: translate3d(-100px, -100px, 0);
		}

		html:not(.no-js) [data-aos='fade-down-left'] {
			transform: translate3d(100px, -100px, 0);
		}

		html:not(.no-js) [data-aos^='zoom'][data-aos^='zoom'] {
			opacity: 0;
			transition-property: opacity, transform;
		}

		html:not(.no-js) [data-aos^='zoom'][data-aos^='zoom'].aos-animate {
			opacity: 1;
			transform: translateZ(0) scale(1);
		}

		html:not(.no-js) [data-aos='zoom-in'] {
			transform: scale(0.6);
		}

		html:not(.no-js) [data-aos='zoom-in-up'] {
			transform: translate3d(0, 100px, 0) scale(0.6);
		}

		html:not(.no-js) [data-aos='zoom-in-down'] {
			transform: translate3d(0, -100px, 0) scale(0.6);
		}

		html:not(.no-js) [data-aos='zoom-in-right'] {
			transform: translate3d(-100px, 0, 0) scale(0.6);
		}

		html:not(.no-js) [data-aos='zoom-in-left'] {
			transform: translate3d(100px, 0, 0) scale(0.6);
		}

		html:not(.no-js) [data-aos='zoom-out'] {
			transform: scale(1.2);
		}

		html:not(.no-js) [data-aos='zoom-out-up'] {
			transform: translate3d(0, 100px, 0) scale(1.2);
		}

		html:not(.no-js) [data-aos='zoom-out-down'] {
			transform: translate3d(0, -100px, 0) scale(1.2);
		}

		html:not(.no-js) [data-aos='zoom-out-right'] {
			transform: translate3d(-100px, 0, 0) scale(1.2);
		}

		html:not(.no-js) [data-aos='zoom-out-left'] {
			transform: translate3d(100px, 0, 0) scale(1.2);
		}

		html:not(.no-js) [data-aos^='slide'][data-aos^='slide'] {
			transition-property: transform;
			visibility: hidden;
		}

		html:not(.no-js) [data-aos^='slide'][data-aos^='slide'].aos-animate {
			visibility: visible;
			transform: translateZ(0);
		}

		html:not(.no-js) [data-aos='slide-up'] {
			transform: translate3d(0, 100%, 0);
		}

		html:not(.no-js) [data-aos='slide-down'] {
			transform: translate3d(0, -100%, 0);
		}

		html:not(.no-js) [data-aos='slide-right'] {
			transform: translate3d(-100%, 0, 0);
		}

		html:not(.no-js) [data-aos='slide-left'] {
			transform: translate3d(100%, 0, 0);
		}

		html:not(.no-js) [data-aos^='flip'][data-aos^='flip'] {
			backface-visibility: hidden;
			transition-property: transform;
		}

		html:not(.no-js) [data-aos='flip-left'] {
			transform: perspective(2500px) rotateY(-100deg);
		}

		html:not(.no-js) [data-aos='flip-left'].aos-animate {
			transform: perspective(2500px) rotateY(0);
		}

		html:not(.no-js) [data-aos='flip-right'] {
			transform: perspective(2500px) rotateY(100deg);
		}

		html:not(.no-js) [data-aos='flip-right'].aos-animate {
			transform: perspective(2500px) rotateY(0);
		}

		html:not(.no-js) [data-aos='flip-up'] {
			transform: perspective(2500px) rotateX(-100deg);
		}

		html:not(.no-js) [data-aos='flip-up'].aos-animate {
			transform: perspective(2500px) rotateX(0);
		}

		html:not(.no-js) [data-aos='flip-down'] {
			transform: perspective(2500px) rotateX(100deg);
		}

		html:not(.no-js) [data-aos='flip-down'].aos-animate {
			transform: perspective(2500px) rotateX(0);
		}
	}
</style>
