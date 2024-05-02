import venezuelaFlag from "../../assets/images/venezuelaFlag.png"

export const FiatChanger = ()=>{
    return(
       
    <li class="flex-grow flex items-end justify-center">
         <picture class="flex h-full items-end w-8">
           <img class="object-contain pb-1 rounded-md" src={venezuelaFlag} alt="Bandera de Venezuela" />                
         </picture>
       
        <a class="pl-2" href="">VES / USD</a>
                    
    </li>
)} 
