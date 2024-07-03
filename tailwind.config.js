/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
		extend: {
			colors:{
				'header':'#1B1B1B',
				'navigation':'#3E665F',
				'footer':'#D8D8D5',
				'nav-animation':'#363636',
				'main-decoration':'#DDD6BB',
				'ghost-form':'#fad7c1',
				'button-hover': '#A5A5A5'
			},

			screens:{
				'phone': {'max': '640px'},
				'pc':{'min':'640px'}
			},

			spacing:{
				
			},

			minWidth:{
				'secondary-nav':'35rem',
				'search-bar-size':'30rem',
				
				
			},

			maxWidth:{
				
			}
		},
	},
  plugins: [],
}

