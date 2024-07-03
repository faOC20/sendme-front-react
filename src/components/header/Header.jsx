import { Link } from 'react-router-dom'
import letterLogo from '../../assets/images/sendme.png'  
import logo from '../../assets/images/logo.png' 
import { SearchBar } from './SearchBar'
import { SecondaryNav } from './SecondaryNav'
import { Navigation } from './nav/Navigation'

export const Header = ()=>{

    

    return(
        
            <header className="header-container text-white z-30 bg-header phone:items-center">

                    <Link to="/" className='pc:hidden phone:pt-3'>
                        <picture className='logo flex min-w-60  h-full items-center phone:min-w-10 phone:w-36'>
                            <img src={letterLogo} className='object-contain' alt="sendme logo y nombre" /> 
                        </picture>
                    </Link>

                <header class="h-2/3 flex pl-32 pr-32 text-xs phone:pl-1 phone:pr-1 phone:h-full"> 
                    <Link to="/">
                        <picture className='logo flex min-w-60  h-full items-center phone:hidden'>
                            <img src={letterLogo} className='w-44 object-contain' alt="sendme logo y nombre" /> 
                        </picture>

                        

                        {/* <img src={letterLogo} class='w-44 object-contain' alt="sendme logo y nombre" />  */}
                    </Link>
                    
                    <SearchBar/>

                    <SecondaryNav/>   


                </header>
            
                <Navigation/>
			</header>
            
        
    )
}


