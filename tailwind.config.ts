import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				brown: '#d7d1bd',
  				'brown-dark': '#CDC7B3',
  				'brown-light': '#DFDAC9',
  				red: '#ff3c3c',
  				'red-dark': '#EC3434',
  			},
  			neutral: {
  				white: '#ffffff',
  				light: '#f7f5f0',
  				midLight: '#e4e0e0',
  				mid: '#c4c7bd',
  				dark: '#858390',
  				darkest: '#3f3e3b',
  			},
  			text: {
  				headline: '#3f3e3b',
  				body: '#161513',
  				secondary: '#c4c7bd',
  			},
  			background: {
  				main: '#f7f5f0',
  				secondary: '#ffffff',
  			},
  			border: '#e4e0e0',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			blink: {
  					'0%, 100%': { opacity: '1' },
  					'50%': { opacity: '0' },
  			},
  		},
  		animation: {
  			blink: 'blink 1s step-end infinite',
  		},
  		fontFamily: {
  			'pp-mori-semibold': ['var(--font-pp-mori-semibold)', 'sans-serif'],
  			'junicode-bold-italic': ['var(--font-junicode-bold-italic)', 'serif'],
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
