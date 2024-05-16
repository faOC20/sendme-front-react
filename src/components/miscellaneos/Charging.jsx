import { Header } from "../header/Header"
import { Footer } from "../footer/Footer"
import "../../pages/PageStyles.css"

export const Charging = ()=>{
    return(
        <div className="all-container">
            <Header/>
            <main className="main-container flex justify-center items-center">
                <div className="border-2 rounded-3xl border-navigation p-10 ">
                    Cargando producto...
                </div>
            </main>
            <Footer/>
        </div>
    )
}