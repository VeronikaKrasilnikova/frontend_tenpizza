/** @type {import('tailwindcss').Config} */
export default {
	mode: "jit",
	content: [
		"./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,html,mdx}",
		"./src/**/*.{html,js,jsx,ts,tsx}"
	],
	darkMode: "class",
	theme: {
		screens: {
			lg: { max: "1440px" },
			md: { max: "1050px" },
			sm: { max: "550px" }
		},
		extend: {
			colors: {
				deep_orange: { 200: "#f4b593", 900: "#9d3902", "900_01": "#9c3902" },
				gray: { 100: "#f3f3f3", 900: "#222222", "900_01": "#3b1500" },
				orange: { "400_33": "#ff992133", a700: "#ff640e", a700_01: "#ff5b00" },
				white: { a700: "#ffffff" },
				processed: '#FF7B1B',
				prepared: '#F54E9F',
				ready: '#E5E919',
				received: '#2CC413',
				cancelled: '#F22222',
			},
			boxShadow: { xs: "0 6px 15px 0 #ff992133" },
			fontFamily: {
				montserratalternates: "Montserrat Alternates",
				quicksand: "Quicksand"
			}
		}
	},
	plugins: [
		require("@tailwindcss/forms")
	]
};
