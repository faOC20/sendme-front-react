/** @type {import('tailwindcss').Config} */
import {AUTOMOTOR_CATEGORY, CLOTHES_CATEGORY, HEALTH_CATEGORY, HOME_CATEGORY, NAVIGATION_COLOR} from "./src/assets/constants/colors"
import { ELECTRONIC_CATEGORY } from "./src/assets/constants/colors"
import { MAIN_DECORATION_COLOR } from "./src/assets/constants/colors"
import { FOOTER_COLOR } from "./src/assets/constants/colors"
import { HEADER_COLOR } from "./src/assets/constants/colors"
import { GAMING_CATEGORY } from "./src/assets/constants/colors"
import { HEALTH_CATEGORY } from "./src/assets/constants/colors"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
		extend: {
			colors:{
				'header':`${HEADER_COLOR}`,
				// 'navigation':'#3E665F',
				// 'navigation': '#142D4D', //para el estilo naranja
				'navigation':`${NAVIGATION_COLOR}`,
				'footer':`${FOOTER_COLOR}`,
				'nav-animation':'#363636',
				'main-decoration':`${MAIN_DECORATION_COLOR}`,
				'ghost-form':'#fad7c1',
				'button-hover': '#A5A5A5',
				// 'electronic-category':`${ELECTRONIC_CATEGORY}`,
				// 'gaming-category':`${GAMING_CATEGORY}`,
				// 'health-category':`${HEALTH_CATEGORY}`,
				// 'automotor-category':`${AUTOMOTOR_CATEGORY}`,
				// 'home-category':`${HOME_CATEGORY}`,
				// 'clothes-category':`${CLOTHES_CATEGORY}`
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
				
			},

			backgroundImage:{
				'blue-gradient': 'linear-gradient(180deg, rgba(20,45,77,1) 0%, rgba(50,166,213,1) 63%, rgba(122,216,254,0) 94%, rgba(255,255,255,0) 100%)',
				'black-gradient': 'linear-gradient(180deg, rgba(62,62,62,1) 0%, rgba(102,102,102,1) 50%, rgba(128,128,128,1) 67%, rgba(183,183,183,1) 84%, rgba(255,255,255,0) 100%)',
				'red-gradient': 'linear-gradient(180deg, rgba(139,0,0,1) 0%, rgba(142,55,55,1) 39%, rgba(194,147,147,1) 73%, rgba(255,255,255,0) 100%)',
				'green-gradient': 'linear-gradient(180deg, rgba(50,205,50,1) 0%, rgba(97,209,97,1) 39%, rgba(146,209,146,1) 73%, rgba(255,255,255,0) 100%)',
				'orange-gradient': 'linear-gradient(180deg, rgba(255,80,47,1) 0%, rgba(255,112,85,1) 47%, rgba(255,166,150,1) 100%, rgba(255,255,255,0) 100%)',
				'payment-methods': "url('./src/assets/images/payment-methods-banner.png')",
				'principal-banner': "url('./src/assets/images/principal-banner.png')",
				'amazon-products-banner': "url('./src/assets/images/amazon-products-banner.png')",
				'security-banner': "url('./src/assets/images/security-banner.png')"
			}
		},
	},
  plugins: [],
}

