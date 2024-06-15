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
import { DirectionSelection } from "../miscellaneos/DirectionSelection"
import { Link, Navigate } from "react-router-dom"
import { FetchCell } from "../profilePage/FetchCell"
import { API_URL } from "../../pages/api/constants"
import { useShoppingCartStore } from "../../store/products"
import Swal from 'sweetalert2'
import { FileUpload } from "./FileUpload"

export const PaymentContainer = ({total, bsTotal})=>{

    //Lo que va para el backend
    const [idDirection, setIdDirection] = useState()
    const [idCell, setIdCell] = useState()
    const [referencia, setReferencia] = useState()
    const [date, setDate] = useState()
    const [payMethod, setPayMethod] = useState()
    const [accountHolder, setAccountHolder] = useState()
    const [urlReference, setUrlReference] = useState()
    const {id} = useAuthStore()


    //el id que va para tabla producto
    const [idPedido, setIdPedido] = useState()
    const {cart} = useShoppingCartStore()

    const sendInfo = async(e)=>{
        e.preventDefault()

        //aparte de crear un registro en la tabla pedido, devuelve la id_pedido que se acaba de crear
        const response = await fetch (`${API_URL}generate-pedido`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                idDirection, idCell, referencia, date, payMethod, accountHolder, id, total, urlReference
            }),
        });

        if(response.ok){
            console.log('entre aqui')
            

            const idPedido = await response.json()
            
            try{
                const response = await fetch(`${API_URL}generate-product`,{
                    method: "POST",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body: JSON.stringify({
                        cart, idPedido
                    }),
                })

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Pedido realizado, será redirigido al perfil, donde podrá visualizar el estado del mismo!",
                    showConfirmButton: true,
                
                //   }).then(()=>{
                //     window.location.href = '/profile'
                  }).then(()=>{
                    window.location.href = '/profile'
                  });

                  

            }
            catch(e){
                console.error(e)
            }

            
        }

    }


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
        <section className="w-3/5 rounded-3xl min-h-96 h-max flex gap-2 bg-white shadow-detail ">
            
            <form onSubmit={sendInfo} className="flex flex-col w-2/4 h-full bg-white p-6 rounded-3xl">
                <div className="h-14">
                    <div className="flex items-center">
                        
                        <div>
                            <GhostIcon/>
                        </div>

                        <h1 className="text-start text-xl font-bold ml-2">Ya casi, {name}!</h1>
                    </div>
                    <hr className="m-2"/>
                </div>  
                
                
                
                <div className="flex w-full flex-col h-44 mb-10">
                <div className="flex flex-col flex-grow" action="#">
                    <label className="font-bold flex justify-center items-center m-2" for="lang">
                        <div className="mr-1">
                            <OneIcon/> 
                        </div>
                        
                        Selecciona su dirección de envío
                    </label>
                    <DirectionSelection setIdDirection={setIdDirection}/>
                    <ul className="mt-4 text-sm text-gray-500">
                        <li>
                            <Link to = '/profile'>Agregar dirección</Link>
                        </li>
                    </ul>
                </div>

                <hr className="m-2 flex-grow mt-5"/>
                
                <div className="flex flex-col flex-grow" action="#">
                        <label className="font-bold flex justify-center items-center m-2" for="lang">
                            <div className="mr-1">
                                <TwoIcon/> 
                            </div>
                            Seleccione su número de teléfono
                        
                        </label>
                        <FetchCell  setIdCell={setIdCell}/>
                        <ul className="mt-4 text-sm text-gray-500">
                        <li>
                            <Link to = '/profile'>Agregar teléfono</Link>
                        </li>
                    </ul>
                </div>
                </div>

                

                {
                    active !== null || usdActive !==null?(
                        <div className="h-full flex flex-col">
                            <hr className="m-2 mt-28 mb-5"/>
                            
                            <div className="flex flex-col items-center h-full gap-5">
                                <div className="flex justify-center items-center">
                                    <div>
                                        <FourIcon/>
                                    </div>
                                    <p className="ml-1 font-bold">Adjunte su comprobante de pago y fecha</p>
                                </div>

                                <div className="flex mt-3 justify-center w-2/3 gap-5 h-2/4">
                                   
                                   
                                   
                                     

                                    <div className="ml-2 flex flex-col  gap-5 w-full">

                                    <FileUpload setUrlReference={setUrlReference}/>

                                    < input onChange={(e)=>{
                                        setReferencia(e.target.value)
                                    }} className=" bg-transparent border-b text-gray-500 border-gray-400" type="text" placeholder="Número de referencia" required />

                                    < input onChange={(e)=>{
                                        setDate(e.target.value)
                                    }} className=" bg-transparent border-b text-gray-400 border-gray-400" type="date"  required/>

                                    < input onChange={(e)=>{
                                        setPayMethod(e.target.value)
                                    }} className=" bg-transparent border-b  border-gray-400" type="text" placeholder="método de pago" required/>

                                    < input onChange={(e)=>{
                                        setAccountHolder(e.target.value)
                                    }} className=" bg-transparent border-b border-gray-400" type="text" placeholder="titular del pago" required/>

                                    </div>

                                    

                                    
                                </div>

                                    <button className="mt-2 bg-navigation text-white p-1.5 rounded-lg">
                                        Enviar
                                    </button>
                            </div>
                            
                        </div>
                    ):('') 
                }

            </form> 


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