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
				
				<main className="main-container flex flex-col content-center z-10">
					<Main/>
					<FixedCart/>
					<FixedWhatsapp/>
					
				</main>

				<Footer/>
			</div>
		</>
	)
}


	

 
	
		
	
	
	



