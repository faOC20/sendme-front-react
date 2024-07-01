import { Link, Navigate } from "react-router-dom"
import { ProfileImage } from "../assets/icons/ProfileImage"
import { Footer } from "../components/footer/Footer"
import { Header } from "../components/header/Header"
import { useAuthStore } from "../store/user"
import Select from "react-select"
import { DirectionSelection } from "../components/miscellaneos/DirectionSelection"
import { FetchCell } from "../components/profilePage/FetchCell"
import "./ProfilePage.css"
import { useState } from "react"
import { CancelIcon } from "../assets/icons/CancelIcon"
import { NewDirectionForm } from "../components/profilePage/NewDirectionForm"
import { NewCellForm } from "../components/profilePage/NewCellForm"
import { PedidosTable } from "../components/profilePage/PedidosTable"
import { FixedWhatsapp } from "../components/miscellaneos/FixedWhatsapp"
import { FixedCart } from "../components/miscellaneos/FixedCart"

export const ProfilePage = ()=>{

    const handleNewDirection = ()=>{
        setShowDiv(true)
    }

    const handleNewCell = ()=>{
        setShowNewCell(true)
    }

    const {isAuth, name, email_usuario} = useAuthStore()
    const [showDiv, setShowDiv] = useState(false) //para el registro de nueva direccion
    const[showNewCell, setShowNewCell] = useState(false)

    if (!isAuth){
        return <Navigate to="/session"/>
    }

    return (



        <div className="all-container">
            <Header/>
            <main className="main-container flex items-center justify-center">

                <NewDirectionForm setShowDiv={setShowDiv} showDiv={showDiv}/>
                
                <div className="w-full h-full p-10 flex gap-5">
                    
                    <section className="flex h-full w-6/12 rounded-lg  shadow-lg">
                        <div className="flex  bg-footer flex-col items-center w-2/4 full p-20">
                            <h1 className="font-bold text-4xl text-start">
                                Hola, {name}
                            </h1>

                            <div className="flex justify-center w-32 h-32">
                                <ProfileImage/>
                            </div>
                        </div>

                        <section className=" flex flex-col w-full h-full bg-white justify-evenly items-center">

                        <div className="w-2/3 flex flex-col gap-2 items-center">
                                <b className="text-2xl">Ubicación</b>
                                <div className="w-full">
                                <DirectionSelection/>
                                </div>
                                <div className="flex w-3/4 justify-center">
                                    <button onClick={handleNewDirection} className="direction-button text-gray-500 text-sm  rounded-full">
                                        Agregar nueva dirección
                                    </button>
                                </div>
                            </div>
                            

                            <div className="w-2/3 flex flex-col items-center gap-2">
                                <b className="text-2xl">Teléfono/s</b>
                                <div className="w-full relative">
                                <NewCellForm setShowNewCell={setShowNewCell} showNewCell={showNewCell}/>
                                    <FetchCell/> 
                                </div>
                                <div className="flex justify-center w-full">
                                    <button onClick={handleNewCell} className="direction-button text-gray-500 text-sm  rounded-full">
                                        Agregar nuevo teléfono
                                    </button>
                                    
                                </div>
                            </div>

                            <div className="">
                                <b className="text-2xl">Correo</b>
                                <p>{email_usuario}</p>
                            </div>

                            
                        </section>
                    </section>

                    <section className="w-[47rem] h-max rounded-lg bg-white shadow-lg flex flex-col items-center">
                        <div className="w-full pl-10 pr-10">
                            <PedidosTable/>
                        </div>
                    </section>
                   
                    
                </div>

                <div className='fixed z-[200] bottom-10 right-10'>
                        <FixedCart/>
						<FixedWhatsapp/>
					</div>
            </main>
            <Footer/>
        </div>
    )
}