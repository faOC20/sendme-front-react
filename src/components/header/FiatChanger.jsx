import venezuelaFlag from "../../assets/images/venezuelaFlag.png"
import { usePriceChanger } from "../../store/products"
import usaFlag from "../../assets/images/usaFlag.png"

export const FiatChanger = ()=>{

    const {vesPrice, setVesPrice} = usePriceChanger()

    const handleFiatClick =()=>{
      setVesPrice()
    }

    return(
       
    <button className="logo flex-grow flex items-end justify-center phone:hidden" onClick={handleFiatClick}>
         <picture className="flex h-full items-end w-8">
           {
            vesPrice?(
              <img className="object-contain pb-1 rounded-md" src={venezuelaFlag} alt="Bandera de Venezuela" />  
            ):(
              <img className="object-contain pb-1 rounded-md" src={usaFlag} alt="Bandera de Venezuela" />  
            )
           }              
         </picture>
       
        <b className="pl-2 phone:hidden">VES / USD</b>
                    
    </button>
)} 
