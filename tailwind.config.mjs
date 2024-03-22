import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {

		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				'white': '#ffffff',
				'lighter': '#fbf7ff',
				'light': '#a7a3b4',
				'blue': '#bfc6f4',
				'lightBlue': '#d0d5f7',
				'darkBlue': '#7f89c4',
				'dark': '#111215',
				'mid': '#292a31',
				'low': '#1F1F24',
				'lime': '#f6ff80',
				'lightLime': '#f8ffa1',
				'darkLime': '#c8d05b',
			},
			fontFamily: {
				tomato: ['Tomato Grotesk VF', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
