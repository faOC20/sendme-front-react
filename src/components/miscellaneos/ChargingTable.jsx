import { Header } from "../header/Header"
import { Footer } from "../footer/Footer"
import "../../pages/PageStyles.css"
import chargingGif from "./chargingcircle.gif"

export const ChargingTable = ()=>{
    return(
        
            
        <div className="w-28 h-28 mb-5 flex items-center">
            <img className="w-fit" src={chargingGif} alt="" />
        </div>

                   
        
    )
}