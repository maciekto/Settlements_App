/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				themeSecondary: '#385779', // LightBlue
				themePrimary: '#283e56', // Blue/DarkBlue
				themeAccent: '#fef4e8', // Beige
				themeBlack: '#182533',
				themeGray: '#e6e6e6',
				themeWhite: '#ffffff',
				themeDanger: '#ff8783', // Red
			},
			gridTemplateRows: {
				AppTemplate: 'auto 1fr auto',
				EventFormTemplate: 'auto auto 1fr',
			},
			height: {
				screenIOs: '100svh',
			},
			keyframes: {
				menuIn: {
					'0%': { transform: 'translateX(100%)', opacity: 0 },
					'50%': { opacity: 0 },
					'100%': { transform: 'translateX(0%)', opacity: 1 },
				},
				menuOut: {
					'0%': { transform: 'translateX(0%)', opacity: 1 },
					'50%': { opacity: 0 },
					'100%': { transform: 'translateX(100%)', opacity: 0 },
				},
				pulse: {
					'0%': { transform: 'scale(1) rotate(0deg)' },
					'25%': { transform: 'rotate(5deg)' },
					'50%': { transform: 'scale(1.15)' },
					'75%': { transform: 'rotate(-5deg)' },
					'100%': { transform: 'scale(1) rotate(0deg)' },
				},
			},
			animation: {
				menuIn: 'menuIn 0.4s ease-in both',
				menuOut: 'menuOut 0.4s ease-in-out both',
				pulse: 'pulse 0.3s ease-out both',
			},
		},
	},
	plugins: [],
};
