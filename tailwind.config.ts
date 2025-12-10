import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '1.5rem',
				lg: '2rem',
				xl: '3rem',
				'2xl': '4rem'
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				'border-subtle': 'hsl(var(--border-subtle))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				'alpine-red': {
					DEFAULT: 'hsl(var(--alpine-red))',
					light: 'hsl(var(--alpine-red-light))',
					dark: 'hsl(var(--alpine-red-dark))',
					foreground: 'hsl(var(--alpine-red-foreground))'
				},
				'alpine-charcoal': {
					DEFAULT: 'hsl(var(--alpine-charcoal))'
				},
				'corporate': {
					navy: 'hsl(var(--corporate-navy))',
					gray: 'hsl(var(--corporate-gray))',
					blue: 'hsl(var(--corporate-blue))',
					light: 'hsl(var(--corporate-light))',
					dark: 'hsl(var(--corporate-dark))',
					border: 'hsl(var(--corporate-border))',
					muted: 'hsl(var(--corporate-muted))'
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))'
				},
				warning: {
					DEFAULT: 'hsl(var(--warning))',
					foreground: 'hsl(var(--warning-foreground))'
				}
			},
			backgroundImage: {
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-luxury': 'var(--gradient-luxury)',
				'gradient-platinum': 'var(--gradient-platinum)',
				'gradient-glass': 'var(--gradient-glass)',
				'gradient-mesh': 'var(--gradient-mesh)'
			},
			boxShadow: {
				'ultra': 'var(--shadow-ultra)',
				'luxury': 'var(--shadow-luxury)',
				'elevated': 'var(--shadow-elevated)',
				'glow': 'var(--shadow-glow)',
				'platinum': 'var(--shadow-platinum)',
				'corporate': '0 4px 20px rgba(0, 0, 0, 0.08)',
				'corporate-sm': '0 2px 8px rgba(0, 0, 0, 0.06)',
				'corporate-lg': '0 8px 30px rgba(0, 0, 0, 0.1)',
				'corporate-hover': '0 10px 40px rgba(0, 0, 0, 0.12)'
			},
			transitionTimingFunction: {
				'ultra': 'cubic-bezier(0.16, 1, 0.3, 1)',
				'luxury': 'cubic-bezier(0.4, 0, 0.2, 1)',
				'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
			},
			transitionDuration: {
				'ultra': '400ms',
				'luxury': '300ms'
			},
		fontFamily: {
			sans: ['Inter', 'Helvetica Neue', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
			heading: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
			display: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
			body: ['Inter', 'Helvetica Neue', 'system-ui', 'sans-serif']
		},
		letterSpacing: {
			tighter: '-0.05em',
			tight: '-0.025em',
			normal: '0',
			wide: '0.025em',
			wider: '0.05em',
			widest: '0.1em',
			corporate: '0.03em'
		},
			borderRadius: {
				'ultra': 'var(--radius-ultra)',
				'luxury': 'var(--radius-luxury)',
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				none: '0'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
