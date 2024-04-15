import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import svg from '@poppanator/sveltekit-svg';
import removeConsole from 'vite-plugin-remove-console';

export default defineConfig({
	plugins: [
		sveltekit(),
		// Removes console logs in production
		removeConsole(),
		svg({
			svgoOptions: {
				plugins: [
					{
						name: 'cleanupIds',
						params: {
							remove: true,
							minify: false
						}
					}
				]
			}
		})
	]
});
