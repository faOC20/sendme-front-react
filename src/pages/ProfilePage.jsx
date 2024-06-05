import { Navigate } from "react-router-dom"
import { ProfileImage } from "../assets/icons/ProfileImage"
import { Footer } from "../components/footer/Footer"
import { Header } from "../components/header/Header"
import { useAuthStore } from "../store/user"
import Select from "react-select"
import { CellSelection } from "../components/miscellaneos/CellSelection"

export const ProfilePage = ()=>{

    const {isAuth, name} = useAuthStore()

    if (!isAuth){
        return <Navigate to="/session"/>
    }

    return (
        <div className="all-container">
            <Header/>
            <main className="main-container flex items-center justify-center">
                <div className="w-full h-full p-10 flex gap-5">
                    
                    <section className="flex h-full w-6/12 rounded-lg overflow-hidden shadow-lg">
                        <div className="flex  bg-footer flex-col items-center w-2/4 full p-20">
                            <h1 className="font-bold text-4xl text-start">
                                Hola, {name}
                            </h1>

                            <div className="flex justify-center w-32 h-32">
                                <ProfileImage/>
                            </div>
                        </div>

                        <section className=" flex flex-col w-full h-full bg-white justify-evenly items-center">
                            <div className="">
                                <b className="text-2xl">Correo</b>
                                <p>luisa@gmail.com</p>
                            </div>

                            <div className="w-2/3">
                                <b className="text-2xl">Teléfono</b>
                                <CellSelection/>
                            </div>

                            <div className="">
                                <b className="text-2xl">Ubicación</b>
                                <p>luisa@gmail.com</p>
                            </div>
                        </section>
                    </section>

                    <section className="w-6/12 h-full rounded-lg bg-white shadow-lg flex flex-col items-center">
                        <div className="w-full h-1/5 flex items-center justify-center">
                            <b className="text-xl">
                                Pedidos
                            </b>
                        </div>

                        <div className="w-10/12 h-full">
                            <img className="w-fit" src="https://foros.consultoria-sap.com/uploads/db7262/original/3X/5/d/5dc28b4fc3ec959e3b9c4dc87ad6d7e49a4ea144.pngE" alt="" />
                        </div>
                    </section>
                   
                    
                </div>
            </main>
            <Footer/>
        </div>
    )
}