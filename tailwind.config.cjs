/** @type {import('tailwindcss').Config}*/

import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';
import tailwindAspectRatio from '@tailwindcss/aspect-ratio';
import svgToDataUri from 'mini-svg-data-uri';
import tailwindChildren from 'tailwind-children'
import tailwindForms from '@tailwindcss/forms'
import tailwindContainerQueries from '@tailwindcss/container-queries'
import flowbitePlugin from 'flowbite/plugin'


const colors = require('tailwindcss/colors');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {

			colors: {
				// purple: colors.violet,
				brand: {
					bgPrimary: '#06000f',
					// bgPrimary: '#10002b',
					pill: '#4338CA',
					ethereum: '#a855f7',
					solana: '#6366f1',
					arbitrum: '#3b82f6',
				},
				neutral: {
					50: '#F9FAFB',
					100: '#f8f9fa',
					200: '#e9ecef',
					300: '#dee2e6',
					400: '#ced4da',
					500: '#adb5bd',
					600: '#6c757d',
					700: '#495057',
					800: '#343a40',
					900: '#212529',
					950: '#06000f',
				},
				// neutral: {
				// 	50: '#F9FAFB',
				// 	100: '#F4F6F8',
				// 	200: '#DFE3E8',
				// 	300: '#C4CDD5',
				// 	400: '#919EAB',
				// 	500: '#637381',
				// 	600: '#454F5E',
				// 	700: '#212B36',
				// 	800: '#161C24',
				// 	900: '#0D1117',
				// 	950: '#06000f',
				// },
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			},
			fontFamily: {
				outfit: ['Outfit', 'sans-serif'],
				saira: ['Saira Stencil One', 'system-ui'],
				"gt-walsheim": ["GT-Walsheim", 'system-ui']

			},
			animation: {
				// ...other animations
				spotlight: 'spotlight 1s ease .25s 1 forwards',
				slowerPing: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;'
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
		flowbitePlugin,
		tailwindChildren,
		tailwindForms({strategy: 'class'}),
		tailwindAspectRatio,
		tailwindContainerQueries,
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
