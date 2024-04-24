import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import svg from '@poppanator/sveltekit-svg';
import removeConsole from 'vite-plugin-remove-console';
import { partytownVite } from '@builder.io/partytown/utils';
import path from 'path';
import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig({
	plugins: [
		enhancedImages(),
		// Runs stuff in worker thread
		partytownVite({
			dest: path.join(__dirname, 'dist', '~partytown')
		}),

		// Removes console logs in production
		removeConsole(),
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
