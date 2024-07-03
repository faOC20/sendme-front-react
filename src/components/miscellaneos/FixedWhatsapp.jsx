import { useState } from "react"
import { WhatsappIcon } from "../../assets/icons/WhatsappIcon"
import logo from '../../assets/images/logo.png'
import { CancelIcon } from "../../assets/icons/CancelIcon"

export const FixedWhatsapp = ()=>{

    const [openChat, setOpenChat] = useState(false)
    const [chatMessage, setChatMessage] = useState('')

    const handleWhatsapp = (e)=>{
        e.preventDefault()
        window.open(`https://wa.me/04248066999?text=${chatMessage}`)
    }

    return (
        <>
            
                <button className="phone:right-4 rounded-full w-16 h-16 text-white bg-navigation flex items-center justify-center fixed  right-10 bottom-10 z-[200]" onClick={()=>{
                    setOpenChat(!openChat)
                }}>
                <WhatsappIcon/>
                </button>

                <div className={`ws-chat phone:right-4 flex fixed w-[20rem] right-10 bottom-10 flex-col overflow-hidden h-[24rem] z-[100] rounded-[1.99rem] ${openChat ? "" : "hidden"}`}>
                    <div className="w-full grow">
                        <div className="bg-navigation h-16 flex gap-5 items-center">
                            <div className="relative w-12 h-12 rounded-full flex items-center justify-center bg-main-decoration border border-black ml-4">
                                <img src={logo} alt="logo de sendme" />
                                <div className="absolute w-3 h-3 rounded-full bg-green-400 border left-9 top-8"></div>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-white text-xl text-start font-medium">
                                    Sendme
                                </p>
                                <p className="text-xs text-white text-start font-thin">
                                    En línea  
                                </p>
                            </div>

                            <button className="text-white flex grow justify-end pr-2" onClick={()=>{
                                setOpenChat(false)
                            }}>
                                <CancelIcon/>
                            </button>
                        </div>
                    </div>

                    <div className="h-full">
                        <div className="bg-slate-50 h-max w-52 ml-5 mr-16 mt-10 rounded-3xl flex flex-col ">
                            <p className="font-sans font-semibold text-start pl-4 pt-2">Sendme</p>
                            <p className="text-start text-sm pl-3 pr-3 pb-3">
                                ¿Cómo podemos ayudarte?
                                Somos el mejor aliado para tus compras en línea!❤️
                            </p>
                        </div>
                    </div>

                    <form className="w-full pl-4 h-1/6  flex flex-col justify-center" onSubmit={handleWhatsapp}>
                        {/* Agrega mt-auto para posicionar el input en la parte inferior */}
                        <input type="text" className="w-full  rounded-xl p-1" placeholder="Escríbenos" required onChange={(e)=>{
                            setChatMessage(e.target.value)
                        }}/>
                    </form>
                    </div>

            
        </>
    )
}