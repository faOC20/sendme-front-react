import { Header } from "../header/Header"
import { Footer } from "../footer/Footer"

export const Error = ()=>{
    return(
        <>
            <Header/>
            <main className="main-container flex justify-center items-center">
                <div className>
                    ERROR... Recargue la página o vuelva al inicio.
                </div>
            </main>
            <Footer/>
        </>
    )
}