/** @type {import('tailwindcss').Config}*/

import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';
import aspectRatio from '@tailwindcss/aspect-ratio';
import svgToDataUri from 'mini-svg-data-uri';

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				brand: {
					bgPrimary: '#06000f',
					ethereum: '#a855f7',
					solana: '#6366f1',
					arbitrum: '#3b82f6',
	

				},
				neutral: {
					50: '#F9FAFB',
					100: '#F4F6F8',
					200: '#DFE3E8',
					300: '#C4CDD5',
					400: '#919EAB',
					500: '#637381',
					600: '#454F5E',
					700: '#212B36',
					800: '#161C24',
					900: '#0D1117',
					950: '#06000f',
				},
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			},
			fontFamily: {
				citerne: ['Citerne', 'sans-serif'],
				outfit: ['Outfit', 'sans-serif'],
				saira: ['Saira Stencil One', 'sans-serif'],
			},
			animation: {
				// ...other animations
				spotlight: 'spotlight 1s ease .25s 1 forwards',
			},
			keyframes: {
				// ... other keyframes
				spotlight: {
					'0%': {
						opacity: 0,
						transform: 'translate(-72%, -62%) scale(0.5)'
					},
					'100%': {
						opacity: 1,
						transform: 'translate(-50%,-40%) scale(1.5)'
					}
				}
			}
		}
	},

	plugins: [
		require('tailwind-children'),
		aspectRatio, 
		addVariablesForColors,
		function ({ matchUtilities, theme }: any) {
			matchUtilities(
				{
					'bg-grid': (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
						)}")`
					}),
					'bg-grid-small': (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
						)}")`
					}),
					'bg-dot': (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
						)}")`
					})
				},
				{ values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
			);
		}
	]
};

function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme('colors'));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		':root': newVars
	});
}

module.exports = config;




