/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			gridTemplateRows: {
				AppTemplate: 'auto 1fr auto',
			},
			height: {
				screenIOs: '100svh',
			},
		},
	},
	plugins: [],
};
