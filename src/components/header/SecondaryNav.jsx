import { FiatChanger } from "./FiatChanger"
import { SessionButton } from "./SessionButton"
import { ShoppingCartButton } from "./ShoppingCartButton"

export const SecondaryNav = ()=>{
    return(
       <div class="flex-grow content-center">
         <nav class="flex-grow content-end h-full">
            <ul class="flex h-full items-center">
                
                <FiatChanger/>
                
                <SessionButton/>
                
                <ShoppingCartButton/>

            </ul>
        </nav>
       </div>
    )
}
