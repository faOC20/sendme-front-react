import venezuelaFlag from "../../assets/images/venezuelaFlag.png"
import { usePriceChanger } from "../../store/products"
import usaFlag from "../../assets/images/usaFlag.png"

export const FiatChanger = ()=>{

    const {vesPrice, setVesPrice} = usePriceChanger()

    const handleFiatClick =()=>{
      setVesPrice()
    }

    return(
       
    <button class="logo flex-grow flex items-end justify-center" onClick={handleFiatClick}>
         <picture class="flex h-full items-end w-8">
           {
            vesPrice?(
              <img class="object-contain pb-1 rounded-md" src={venezuelaFlag} alt="Bandera de Venezuela" />  
            ):(
              <img class="object-contain pb-1 rounded-md" src={usaFlag} alt="Bandera de Venezuela" />  
            )
           }              
         </picture>
       
        <b class="pl-2">VES / USD</b>
                    
    </button>
)} 
