/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
		theme: {
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '992px',
				'xl': '1140px',
				'xxl': '1320px',
				'2xl': '1600px',
			},
        	extend: {
				transitionDuration: {
					'1500': '1500ms',
					'2000': '2000ms',
				},
        		borderRadius: {
        			lg: 'var(--radius)',
        			md: 'calc(var(--radius) - 2px)',
        			sm: 'calc(var(--radius) - 4px)'
        		},
        		colors: {
        			background: {
        				DEFAULT: '#FFE3D6',
        				dark: '#170f00'
        			},
        			foreground: {
        				DEFAULT: 'hsl(var(--foreground))',
        				dark: '#010101'
        			},
        			card: {
        				DEFAULT: 'hsl(var(--card))',
        				foreground: 'hsl(var(--card-foreground))'
        			},
        			popover: {
        				DEFAULT: 'hsl(var(--popover))',
        				foreground: 'hsl(var(--popover-foreground))'
        			},
        			primary: {
        				DEFAULT: '#E69803',
        				foreground: {
        					DEFAULT: '#FFDCC3',
        					dark: '#803502'
        				}
        			},
        			secondary: {
        				DEFAULT: '#E4C524',
        				dark: '#B94C00',
        				foreground: {
        					DEFAULT: '#FCE5B6',
        					dark: '#E0A174'
        				}
        			},
        			muted: {
        				DEFAULT: '#737373',
        				foreground: '#F6F6F6'
        			},
        			accent: {
        				DEFAULT: 'hsl(var(--accent))',
        				foreground: 'hsl(var(--accent-foreground))'
        			},
        			destructive: {
        				DEFAULT: '#E40000',
        				foreground: '#FFEFEF'
        			},
        			border: {
        				DEFAULT: '#D9D9D9',
        				dark: '#321500'
        			},
        			input: {
        				DEFAULT: '#60646C',
        				dark: '#632900'
        			},
        			ring: 'hsl(var(--ring))',
        			chart: {
        				'1': 'hsl(var(--chart-1))',
        				'2': 'hsl(var(--chart-2))',
        				'3': 'hsl(var(--chart-3))',
        				'4': 'hsl(var(--chart-4))',
        				'5': 'hsl(var(--chart-5))'
        			}
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
        			},
        		},
        		animation: {
        			'accordion-down': 'accordion-down 0.2s ease-out',
        			'accordion-up': 'accordion-up 0.2s ease-out',
        		}
        	}
        },
		plugins: [
			require("tailwindcss-animate"),
			function ({ addBase }) {
			addBase({
				body: {
					padding: "0",
					margin: "0",
					fontFamily: "'Inter 18pt', serif",
					backgroundColor: "#FFFFFF !important",
					'::-webkit-scrollbar': {
						display: 'none',
					},
				},
				"body.dark": {
					backgroundColor: "#010101 !important",
				},
				html: {
					padding: "0",
					margin: "0",
					'::-webkit-scrollbar': {
						display: 'none',
					},
				},
				'*': {
					boxSizing: "border-box",
				},
				li: {
					listStyle: "none",
					margin: "0",
					padding: "0",
				},
				ul: {
					listStyle: "none",
					margin: "0",
					padding: "0",
				},
				a: {
					display: "inline",
					textDecoration: "none",
					transition: ".5s",
				},
				p: {
					margin: "0",
					padding: "0",
				},
				h1: {
					margin: "0",
					padding: "0",
				},
				h2: {
					margin: "0",
					padding: "0",
				},
				h3: {
					margin: "0",
					padding: "0",
				},
				h4: {
					margin: "0",
					padding: "0",
				},
				h5: {
					margin: "0",
					padding: "0",
				},
				h6: {
					margin: "0",
					padding: "0",
				},
				".container": {
					margin: "0 auto",
					padding: "0 16px",
					"@media (min-width: 1200px)": {
						maxWidth: "1140px",
					},
					"@media (min-width: 1440px)": {
						maxWidth: "1320px !important",
					},
				},
				".swiper .swiper-pagination":{
					display: "flex",
					alignItems: "center",
					justifyContent: "flex-end",
					padding: "0 24px 24px 0",
					bottom: "0",
					'.swiper-pagination-bullet': {
						width: "16px",
						height: "16px",
						borderRadius: "100%",
						background: "white",
					},
					'.swiper-pagination-bullet.swiper-pagination-bullet-active':{
						background: "#E69803",
					},
				},
			});
		},
	],
}