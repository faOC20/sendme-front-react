import { Header } from "../header/Header"
import { Footer } from "../footer/Footer"
import "../../pages/PageStyles.css"

export const Error = ()=>{
    return(
        <div className="all-container">
            <Header/>
            <main className="main-container flex justify-center items-center">
                <div className>
                    ERROR... Recargue la página o vuelva al inicio.
                </div>
            </main>
            <Footer/>
        </div>
    )
}