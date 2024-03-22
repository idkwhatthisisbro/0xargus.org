<script>
	import '../app.pcss';
	import Modal from 'svelte-simple-modal';
	import { TolgeeProvider, Tolgee, DevTools, FormatSimple } from '@tolgee/svelte';

	let styleWindow = { backgroundColor: '#0a0a0a' };
	let styleCloseButton = { backgroundColor: '#a855f7', color: '#ffffff', stroke: '#ffffff', opacity: '0.4' };

	const tolgee = Tolgee()
		.use(DevTools())
		.use(FormatSimple())
		.init({
			language: 'en',

			// for development
			apiUrl: import.meta.env.VITE_TOLGEE_API_URL,
			apiKey: import.meta.env.VITE_TOLGEE_API_KEY

			// for production
			//   staticData: {
			//     ...
			//   }
		});
</script>

<!-- <TolgeeProvider {tolgee}>
	<div slot="fallback">Loading...</div> -->
<Modal {styleWindow} {styleCloseButton} classWindow="p-2 bg-neutral-950 rounded-3xl">
	<slot />
</Modal>

<!-- </TolgeeProvider> -->

<style>
	::selection {
		background: #ff4500; /* Or any other color */
		color: white;
	}
	::-moz-selection {
		background: #ff4500; /* Or any other color */
		color: white;
	}
</style>
