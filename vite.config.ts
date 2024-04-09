import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import svg from '@poppanator/sveltekit-svg';

export default defineConfig({
	plugins: [
		sveltekit(),
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
