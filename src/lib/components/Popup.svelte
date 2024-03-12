<script>
	import { browser } from '$app/environment';

	// @ts-ignore
	import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';

	export let type = 'email-verification';
</script>

{#if browser}
	<!-- content here -->
	<div class="flex h-[400px] flex-col items-center gap-4 bg-neutral-950 p-12 font-outfit text-neutral-100">
		{#if type == 'email-verification'}
			<div class="w-32 rounded-lg">
				<LottiePlayer src="mail2.json" autoplay loop={true} renderer="svg" background="transparent" />
			</div>
			<p class="text-center text-3xl font-bold text-neutral-50">You're Almost There!</p>
			<p>Please verify your email to continue.</p>
		{/if}
	</div>
{/if}
