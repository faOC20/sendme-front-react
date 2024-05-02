import {Header} from '../components/header/Header.jsx';
import {Main} from "../components/main/Main.jsx"
import { Footer } from '../components/footer/Footer.jsx';

export const HomePage = ()=>{
	return(
		<>
			<Header/>
		
			<main className="main-container flex flex-col content-center z-10">
				<Main/>
			</main>

			<Footer/>
		</>
	)
}


	
	
		
	
	
	



