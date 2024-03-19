<script lang="ts">
	import CustomLottiePlayer from './CustomLottiePlayer.svelte';
	import type { Writable } from 'svelte/store';
	import type { WhitelistSchema } from '$lib/schema';
	import type { Infer } from 'sveltekit-superforms';

	export let data: Writable<Infer<WhitelistSchema>> | undefined
	export let type: 'verify_email' | 'confirmed_email' | undefined;


	const text = {
		verify_email: {
			title: "You're Almost There!",
			body: 'Please verify your email to continue.',
			lottie: {
				name: 'mail2.json',
				loop: true
			}
		},
		confirmed_email: {
			title: 'Your Email has been Successfully Verified.',
			body: "We'll contact you soon with more information.",
			lottie: {
				name: 'success.json',
				loop: false
			}
		},
		error: {
			title: 'An Error Occurred',
			body: 'Please try again later or contact support at team@0xargus.org.',
			lottie: {
				name: 'error.json',
				loop: false
			}
		}
	};

	$: currentText = (type && text[type]) || ($data && text[$data.email_confirmed_at ? 'confirmed_email' : 'verify_email']) || text['error'];
</script>

<div class="flex h-[400px] flex-col items-center gap-4 bg-neutral-950 p-12 font-outfit text-neutral-100">
	<div class="w-32 rounded-lg">
		<CustomLottiePlayer loop={currentText.lottie.loop} src={'/' + currentText.lottie.name} />
	</div>
	<p class="text-center text-3xl font-bold leading-relaxed text-neutral-50">{currentText.title}</p>
	<p>{currentText.body}</p>
</div>
