import { Header } from "../header/Header"
import { Footer } from "../footer/Footer"

export const Charging = ()=>{
    return(
        <>
            <Header/>
            <main className="main-container flex justify-center items-center">
                <div className="border border-2 rounded-3xl border-navigation p-10 ">
                    Cargando producto...
                </div>
            </main>
            <Footer/>
        </>
    )
}