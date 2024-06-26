import { Link } from 'react-router-dom'
import letterLogo from '../../assets/images/sendme.png'  
import { SearchBar } from './SearchBar'
import { SecondaryNav } from './SecondaryNav'
import { Navigation } from './nav/Navigation'

export const Header = ()=>{
    return(
        
            <header className="header-container text-white z-30 bg-header">
                <header class="h-2/3 flex pl-32 pr-32 text-xs"> 
                    <Link to="/">
                        <picture class='logo flex min-w-60 h-full items-center'>
                            <img src={letterLogo} class='w-44 object-contain' alt="sendme logo y nombre" />
                        </picture>
                    </Link>

                    <SearchBar/>

                    <SecondaryNav/>   


                </header>
            
                <Navigation/>
			</header>
            
        
    )
}


