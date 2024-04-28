<script>
	import '../app.pcss';
	import { partytownSnippet } from '@builder.io/partytown/integration';
	import '@fontsource-variable/outfit';
	import '@fontsource/saira-stencil-one';
</script>

<div class="relative overflow-hidden font-outfit">
	<slot />
</div>

<svelte:head>
	<script>
		// Forward the necessary functions to the web worker layer
		partytown = {
			forward: ['dataLayer.push', 'gtag']
		};
	</script>
	{@html '<script>' + partytownSnippet() + '</script>'}

	<!-- Google tag (gtag.js) -->
	<script async type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=G-B50Z2KFPGJ"></script>
	<script type="text/partytown">
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-B50Z2KFPGJ');
	</script>
</svelte:head>
