import { coinOptions, paymentMethods } from "../../assets/constants/paymentMethods"
import "./PaymentContainer.css"
import { MethodCard } from "./MethodCard"
import { act, useEffect, useState } from "react"
import { CoinSelector } from "./CoinSelector"
import { VesInfo } from "./VesInfo"
import { UsdInfo } from "./UsdInfo"
import { OneIcon } from "../../assets/icons/OneIcon"
import { TwoIcon } from "../../assets/icons/TwoIcon"
import { ThreeIcon } from "../../assets/icons/ThreeIcon"
import { GhostIcon } from "../../assets/icons/GhostIcon"
import { FourIcon } from "../../assets/icons/FourIcon"
import { GalleryUpIcon } from "../../assets/icons/GalleryUpIcon"
import { useAuthStore } from "../../store/user"

export const PaymentContainer = ({total, bsTotal})=>{

    const {name} = useAuthStore()

    const [active, setActive] = useState(null)
    const [usdActive, setUsdActive] = useState(null)
    const [activeCoin, setActiveCoin] = useState(null)

    const initialCoin = coinOptions.find(coin=>coin.code === 'VES')
    const vesMethods = paymentMethods.filter(method=>method.category === 'VES')
    const usdMethods = paymentMethods.filter(method=>method.category === 'USD')

    useEffect(()=>{
        setActiveCoin(initialCoin)
    },[])

   


    return(
        <section className="w-3/5 rounded-3xl flex gap-2 bg-white shadow-detail overflow-hidden">
            
            <div className="flex flex-col w-2/4 h-full bg-white p-6 rounded-3xl">
                <div className="h-14">
                    <div className="flex items-center">
                        
                        <div>
                            <GhostIcon/>
                        </div>

                        <h1 className="text-start text-xl font-bold ml-2">Ya casi, {name}!</h1>
                    </div>
                    <hr className="m-2"/>
                </div>  {/**Aqui el nombre segun el inicio de sesion*/}
                
                
                
                <div className="flex w-full flex-col h-44 ">
                <form className="flex flex-col flex-grow" action="#">
                    <label className="font-bold flex justify-center items-center m-2" for="lang">
                        <div className="mr-1">
                            <OneIcon/> 
                        </div>
                        
                        Selecciona su dirección de envío
                    </label>
                        <select className="bg-white border-2 rounded-lg p-1" name="" id="lang">
                            <option value="javascript">Cumaná, parcelamiento Miranda, Edificio Manicuare</option>
                            <option value="newDirection">Agregar nueva dirección</option>
                        </select>
                </form>

                <hr className="m-2 flex-grow mt-5"/>
                
                <form className="flex flex-col flex-grow" action="#">
                        <label className="font-bold flex justify-center items-center m-2" for="lang">
                            <div className="mr-1">
                                <TwoIcon/> 
                            </div>
                            Seleccione su número de teléfono
                        
                        </label>
                        
                        <select className="bg-white border-2 rounded-lg p-1" name="" id="lang">
                            <option value="javascript">04248066999</option>
                            <option value="newDirection">Agregar nuevo teléfono</option>
                        </select>
                </form>
                </div>

                

                {
                    active !== null || usdActive !==null?(
                        <div className="h-full flex flex-col">
                            <hr className="m-2 mt-8 mb-5"/>
                            
                            <div className="flex flex-col items-center h-full">
                                <div className="flex justify-center items-center">
                                    <div>
                                        <FourIcon/>
                                    </div>
                                    <p className="ml-1 font-bold">Adjunte su comprobante de pago</p>
                                </div>

                                <div className="flex mt-3 justify-center w-2/3 h-2/4">
                                    <button>
                                        <GalleryUpIcon/>
                                    </button>

                                    <div className="ml-2 flex justify-evenly flex-col">
                                    < input className=" bg-transparent border-b border-b-black  text-center" type="text" placeholder="Número de referencia" />

                                    < input className=" bg-transparent border-b border-b-black  text-center" type="text" placeholder="Número de referencia" />

                                    </div>

                                    
                                </div>

                                    <button className="mt-2 bg-navigation text-white p-1.5 rounded-lg">
                                        Enviar
                                    </button>
                            </div>
                            
                        </div>
                    ):('') 
                }

            </div> 


            <div className="flex w-2/4 flex-col items-center border-l-2 bg-white p-6">
                <div className="flex items-center justify-center">
                    <div className="mr-1">
                    <ThreeIcon/>
                    </div>
                    <b>Elija su método de pago</b>
                </div>
                
                <div className="flex w-2/4 justify-between mt-2">
                    {
                        coinOptions.map((coin)=>(
                            <CoinSelector key={coin.id} coin={coin} activeCoin={activeCoin} setActiveCoin={setActiveCoin}/>
                        ))
                    }
                </div>

                <hr className="w-3/4 mt-4" />
                
                <div className="payment-methods-container w-full p-2 rounded-t-lg" >
                    {
                        activeCoin && activeCoin.code === 'VES'?(
                            vesMethods.map((method)=>(
                                <MethodCard key={method.id} method={method} setActive={setActive} active={active}/>
                            ))
                        ):(
                            usdMethods.map((method)=>(
                                <MethodCard key={method.id} method={method} setActive={setUsdActive} active={usdActive}/>
                            ))
                        )
                    }
                    
                </div>

                <div className="method-data-container w-full border-2 rounded-lg p-3  text-sm">
                    
                    
                    {
                        activeCoin && activeCoin.code==='VES'?(

                            <VesInfo active={active} bsTotal={bsTotal} />
                            
                         ):
                        
                        (
                            <UsdInfo active={usdActive} total={total} />
                        )
                    }

                </div>

                <hr className="w-3/4 m-2" />

            </div>

                      
                        
        </section>
    )
}