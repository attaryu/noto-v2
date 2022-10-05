/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		fontFamily: {
			poppins: "Poppins-Regular",
			"poppins-medium": "Poppins-Medium",
			"poppins-semibold": "Poppins-SemiBold",
			"poppins-bold": "Poppins-Bold",
			"chillax-medium": "Chillax-Medium",
			"chillax-semibold": "Chillax-SemiBold",
			"chillax-bold": "Chillax-Bold",
		},
		extend: {
			height: {
				"full-vh": "100vh",
				header: "8vh",
				main: "92vh",
			},
			colors: {
				light: "#FFFFFF",
				dark: "#484656",
				primary: "#8172DE",
				"primary-dark": "#C8BFFF",
				secondary: "#E6E3F8",
				"secondary-dark": "#5A5867",
				accent: "#FF8F51",
				"accent-dark": "#FFAE82",
				"white-1": "#E6E6E6",
				"white-2": "#CCCCCC",
				"white-3": "#B3B3B3",
				"white-4": "#999999",
				"black-1": "#1A1A1A",
				"black-2": "#333333",
				"black-3": "#4D4D4D",
				"black-4": "#666665",
			},
			animation: {
				"circle-1": "loading 1s ease-in-out infinite",
				"circle-2": "loading 1s ease-in-out 150ms infinite",
				"circle-3": "loading 1s ease-in-out 300ms infinite",
				"circle-4": "loading 1s ease-in-out 450ms infinite",
			},
			keyframes: {
				loading: {
					"0% 100%": {
						transform: "translateY(0)",
					},
					"50%": {
						transform: "translateY(-7px)",
					},
				},
			},
		},
	},
	plugins: [],
};
