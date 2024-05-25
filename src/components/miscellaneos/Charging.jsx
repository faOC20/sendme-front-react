import { Header } from "../header/Header"
import { Footer } from "../footer/Footer"
import "../../pages/PageStyles.css"
import chargingGif from "./chargingcircle.gif"

export const Charging = ()=>{
    return(
        <div className="all-container">
            <Header/>
            <main className="main-container flex justify-center items-center">
                <div className="w-96 flex justify-center items-center rounded-3xl">
                    <div className="w-52 h-52 flex items-center">
                        <img className="w-fit" src={chargingGif} alt="" />
                    </div>

                    <div  className="text-3xl text-end flex flex-col">
                        <b>Buscando</b>
                        <b>producto...</b>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}