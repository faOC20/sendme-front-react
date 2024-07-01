import { Footer } from "../components/footer/Footer"
import { Header } from "../components/header/Header"
import "./PageStyles.css"
import "./CartPage.css"
import { useShoppingCartStore } from "../store/products"
import { useState, useEffect } from "react"
import { amazonTax, fixedTariff } from "../assets/constants/fixedTariff"
import { PaymentContainer } from "../components/purchasePage/PaymentContainer"
import { useAuthStore, useUserStore } from "../store/user"
import { Navigate } from "react-router-dom"
import { FixedWhatsapp } from "../components/miscellaneos/FixedWhatsapp"
import { FixedCart } from "../components/miscellaneos/FixedCart"

export const PurchasePage = ()=>{
    const {cart} = useShoppingCartStore()
    const [subtotal, setSubTotal] = useState(0)
    const [totalAmount, setAmount] = useState(0)
    const [totalWeight, setTotalWeight] = useState(0)
    const [airPrice, setAirPrice]= useState(0)
    const [total, setTotal] = useState(0)
    const [bsTotal, setBsTotal] = useState(0)
    const [productsTax, setProductTax] = useState(0)
    const [consolidation, setConsolidation] = useState(0)
    const [safe, setSafe ] = useState(0)
    const {isAuth, name}= useAuthStore()


    // const roundedTohalf = (number)=>{
    //     const rounded = Math.round(number * 2) / 2;
    //     return rounded === Math.floor(rounded) ? Math.floor(rounded) : rounded;
    // }

    /**Para calcular el peso, segun Zoom */
    function customRound(number) {
        const decimalPart = number%1;
        if (decimalPart > 0.5) {
          return ( Math.ceil(number));
        } else {
          return ( Math.floor(number) + 0.5);
        }
    }

    


    useEffect(()=>{
        const totalSubTotal = cart.reduce((acc, product) => acc + parseFloat(product.product_price.replace(/[\$,]/g, ''))*product.amount, 0);
        const totalProductsAmount = cart.reduce((acc, product)=> acc+product.amount,0)
        
        setSubTotal(totalSubTotal)
        setSafe(totalSubTotal>=100?(totalSubTotal*0.01):(0))
        setAmount(totalProductsAmount)
        setConsolidation((totalProductsAmount-1)*2)
        const calculatedTotalWeight = cart.reduce((acc, product) => {

            if (product.product_information['Package Dimensions'] && !product.product_information['Item Weight']){
            const dimensions = product.product_information['Package Dimensions'];
            console.log(dimensions)
                const weightString = dimensions.split(';')[1]; // Obtenemos "3.52 ounces"
                const weight = parseFloat(weightString); // Convertimos a número
                const finalWeight = weight/35.274;
            
            return acc + finalWeight*product.amount
            }

            if (product.product_information['Product Dimensions'] && !product.product_information['Item Weight']){
                const dimensions = product.product_information['Product Dimensions'];
                console.log(dimensions)
                    const weightString = dimensions.split(';')[1]; // Obtenemos "3.52 ounces"
                    const weight = parseFloat(weightString); // Convertimos a número
                    const finalWeight = weight/2.20462262;
                
                return acc + finalWeight*product.amount
            }
            else{
                const dimensions = product.product_information['Item Weight'];
                const weightString = dimensions.split(' ')[0]; // Obtenemos "3.52 ounces"
               
                const weight = parseFloat(weightString); // Convertimos a número
                const finalWeight = weight/35.274;
                return acc + finalWeight*product.amount;
            }
          }, 0)

          const finalWeight = customRound(calculatedTotalWeight)
          setTotalWeight(finalWeight)
          
    },[cart])

    useEffect(()=>{
        setAirPrice(totalWeight<0.5?(6):(totalWeight*12))
        setProductTax(subtotal*amazonTax)
    },[totalWeight])

    useEffect(()=>{
        setTotal(subtotal+fixedTariff+airPrice+productsTax+consolidation+safe)
        setBsTotal((subtotal+fixedTariff+airPrice+productsTax+consolidation+safe)*36)
    },[totalWeight, subtotal, airPrice , productsTax, consolidation, safe])


    if(!isAuth){
        return <Navigate to='/session'/>
    }
    

    return (
    <>
        <div className="all-container">
            <Header/>
            <main className="main-container">

            <h1 className="flex justify-center items-center h-20 text-2xl font-bold">Pedido</h1>

                <div className="flex ml-20 mr-20 mb-20">

                    <PaymentContainer total={total} bsTotal={bsTotal}/>
                       
                    <section className="flex-grow h-max ml-4 rounded-3xl shadow-detail">
                        <div className="w-full h-2/3 p-5 text-start flex flex-col justify-evenly">
                            <b>Resumen del pedido</b>
                            <hr className="m-2"/>
                            <div className="flex">
                                <p>Productos en EEUU: USD <b>{subtotal.toFixed(2)}$</b></p>
                                 
                            </div>
                          
                            <div className="flex">
                                <p>Impuestos en EEUU: USD <b>{productsTax.toFixed(2)}$</b></p>    
                            </div>

                            <div className="flex">
                                <p>Envío a Miami: <b>Gratis</b></p> {/**Puede variar, arreglar */}   
                            </div>

                            <div className="flex">
                                <p>Tarifa fija de Sendme: USD <b>{fixedTariff}$</b>  </p>
                                <b className="ml-1">{}</b>
                            </div>

                            <div className="flex">
                                <p>Cantidad de productos: </p>
                                <b className="ml-1">{totalAmount}</b>
                            </div>

                            {
                                totalAmount>1?(
                                    <div className="flex flex-col">
                                        <p>Consolidacion: <b>{consolidation}$</b> </p>
                                        <p className="text-sm text-gray-500">2$ por cada producto adicional</p>
                                    </div>
                                ):("")
                            }

                            {
                                safe>0?(
                                    <div className="flex flex-col">
                                        <p>Seguro (1%): <b>{safe.toFixed(2)}$</b> </p>
                                        <p className="text-sm text-gray-500">Por compras mayores a 100$, se aplica un seguro del 1% del valor bruto</p>
                                    </div>
                                ):
                                (
                                    ""
                                )
                            }

                          
                            <hr className="m-2"/>

                            <div className="flex flex-col">
                                <p>Envío a Venezuela</p>
                                <p>Avión: USD <b>{airPrice}$</b></p>
                               
                                {/* <div class="radio-container">
                                    <input type="radio" name="transporte" id="avion" value="avion"/>
                                    <label className="ml-1" for="avion">Avión: USD {airPrice.toFixed(2)}$</label>
                                </div> */}
                               
                                {/* <div class="radio-container">
                                    <input type="radio" name="transporte" id="maritimo" value="maritimo"/>
                                    <label className="ml-1" for="maritimo">Marítimo</label>
                                </div> */}

                            </div>

                            <hr className="m-2"/>

                            <div className="flex justify-between">
                                <b>Total a pagar</b>
                                <div className="flex flex-col text-end">
                                    <b>{total.toFixed(2)}$</b>
                                    <b>{new Intl.NumberFormat("de-DE").format(bsTotal)} Bs</b>
                                </div>
                                
                            </div>
                        </div>
                        <div className="flex-grow flex items-center justify-center">
                            
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
    </>
    )
}