<script>
	import '../app.pcss';
	import '@fontsource-variable/outfit';
	import '@fontsource/saira-stencil-one';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<div class="relative overflow-hidden font-outfit">
	<slot />
</div>
