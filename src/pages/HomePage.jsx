import {Header} from '../components/header/Header.jsx';
import {Main} from "../components/main/Main.jsx"
import { Footer } from '../components/footer/Footer.jsx';
import { useEffect } from 'react';
import '../pages/PageStyles.css'
import { FixedWhatsapp } from '../components/miscellaneos/FixedWhatsapp.jsx';
import { FixedCart } from '../components/miscellaneos/FixedCart.jsx';

export const HomePage = ()=>{

	useEffect(()=>{
		
		localStorage.removeItem('productpage-storage');
		localStorage.removeItem('searching-storage')
		  
	},[])

	return(
		<>
			<div className='all-container'>
					<Header/>

					
				
				<main className="main-container flex flex-col content-center z-10 gap-5">

				<div className="absolute inset-0 -z-10 h-full w-full bg-[#F3F3F3] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
					
					<Main/>
					<FixedCart/>
					<FixedWhatsapp/>
					
				</main>

				<Footer/>
			</div>
		</>
	)
}


	

 
	
		
	
	
	



