import { FiatChanger } from "./FiatChanger"
import { SessionButton } from "./SessionButton"
import { ShoppingCartButton } from "./ShoppingCartButton"

export const SecondaryNav = ()=>{
    return(
       <div className="flex-grow content-center">
         <nav className="flex-grow content-end h-full">
            <ul className="flex h-full items-center">
                
                <FiatChanger/>
                
                <SessionButton/>
                
                <ShoppingCartButton/>

            </ul>
        </nav>
       </div>
    )
}
