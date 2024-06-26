import "./PageStyles.css"
import './CartPage.css'
import { Header } from "../components/header/Header"
import { Footer } from "../components/footer/Footer"
import { useShoppingCartStore } from "../store/products"
import { ProductDetail } from "../components/cartPage/ProductDetail"
import { BuyButton } from "../components/productPage/BuyButton"
import { useEffect, useState } from "react"
import { useUserStore } from "../store/user"
import { Link, Navigate } from "react-router-dom"

export const CartPage = ()=>{

    const {cart} = useShoppingCartStore()
    const [subtotal, setSubTotal] = useState(0)
    const [bsSubtotal, setBsSubtotal] = useState(0)
    const [totalAmount, setAmount] = useState(0)
    const {isLogged} = useUserStore()

    useEffect(()=>{
        const subTotal = cart.reduce((acc, product) => acc + parseFloat(product.product_price.replace(/[\$,]/g, ''))*product.amount, 0)
        setSubTotal(subTotal);
        setBsSubtotal(subTotal*36)
        setAmount(cart.reduce((acc, product)=> acc+product.amount,0))
    },[cart])


    return (
        <>
            <div className="all-container">
                <Header/>
                <main className="main-container">
                    <h1 className="flex justify-center items-center h-20 text-2xl font-bold">Carrito</h1>
                    
                    <div className="flex ml-20 mr-20 mb-20">
                       {
                            cart.length > 0?(
                                <section className="w-3/5 mr-2">
                                {
                                    cart.map((product)=>(
                                        <ProductDetail product={product}/>
                                    ))
                                }
                                </section>
                            ):(
                                <div className="w-3/5 mr-2">
                                    Carrito vacío
                                </div>
                            )

                       }

                        <section className=" h-52 flex-grow ml-2 rounded-3xl shadow-detail">
                            <div className="w-full h-2/3 p-5 text-start flex flex-col justify-evenly">
                                <b>Subtotal</b>
                                <div className="flex">
                                    <p>USD </p>
                                    <b className="ml-1">{subtotal}$</b>  
                                </div>
                                <div className="flex">
                                    <p>VES </p>
                                    <b className="ml-1">{new Intl.NumberFormat("de-DE").format(bsSubtotal)} Bs</b>  
                                </div>
                                <div className="flex">
                                    <p>Cantidad de productos: </p>
                                    <b className="ml-1">{totalAmount}</b>
                                </div>
                            </div>
                            <div className="flex-grow flex items-center justify-center">
                                {
                                    cart.length > 0? (
                                        <BuyButton/>
                                    ):(
                                        <Link to='/'>
                                            <button className="rounded-full bg-main-decoration text-black mt-1 p-2">
                                            Explorar productos 
                                        </button>
                                        </Link>
                                    )
                                }
                                
                            </div>
                        </section>
                    </div>
                   
                </main>
                <Footer/>
            </div>
        </>
    )
}