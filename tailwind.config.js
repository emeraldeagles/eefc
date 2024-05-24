/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: ['./app/**/*.{ts,tsx,jsx,js}', './components/**/*.{ts,tsx,jsx,js}'],
	theme: {
		extend: {
			borderRadius: {
				none: '0',
				sm: '0.125rem',
				DEFAULT: '0.25rem',
				md: '0.375rem',
				lg: '0.5rem',
				xl: '0.75rem',
				'2xl': '1rem',
				'3xl': '1.5rem',
				full: '9999px',
			},
			backgroundImage: {
				'footer-bg': "url('https://eefc.syd1.cdn.digitaloceanspaces.com/Website-Banners/EEFC-Footer.png')",
			},
			fontFamily: {
				heading: ['Merriweather', 'Georgia', 'serif'],
				body: ['Montserrat', 'Arial', 'sans-serif'],
			},
			fontWeight: {
				light: 300,
				normal: 400,
				medium: 500,
				semibold: 600,
				bold: 700,
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#0cc80b',
					foreground: '#ffffff',
				},
				secondary: {
					DEFAULT: '#e4c1f9',
					foreground: '#ffffff',
				},
				destructive: {
					DEFAULT: '#f694c1',
					foreground: '#ffffff',
				},
				muted: {
					DEFAULT: '#114b5f',
					foreground: '#ffffff',
				},
				accent: {
					DEFAULT: '#a9def9',
					foreground: '#ffffff',
				},
				popover: {
					DEFAULT: '#f694c1',
					foreground: '#ffffff',
				},
				card: {
					DEFAULT: '#ffffff',
					foreground: '#333333',
				},
			},
		},
	},
	plugins: [],
};
  