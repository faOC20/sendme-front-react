import { useState } from "react"
import { ShoppingCartIcon } from "../../assets/icons/ShoppingCartIcon"
import { CancelIcon } from "../../assets/icons/CancelIcon"
import { useShoppingCartStore } from "../../store/products"
import { useEffect } from "react"
import { Link } from "react-router-dom"

export const FixedCart = ()=>{

    const [openChat, setOpenChat] = useState(false)
    const [subTotal, setSubTotal] = useState(0)
    const {cart} = useShoppingCartStore()

    useEffect(()=>{
        
        const subTotal = cart.reduce((acc, product) => acc + parseFloat(product.product_price.replace(/[\$,]/g, ''))*product.amount, 0)
        setSubTotal(subTotal);
        
    },[cart])

    return (
        <>
                <button className={`rounded-full w-16 h-16 text-white bg-header flex items-center justify-center fixed right-10 top-36 z-[200] ${cart.length > 0?"":"hidden"}`} onClick={()=>{
                    setOpenChat(!openChat)
                }}>
                <ShoppingCartIcon/>
                </button>

                <div className={`fixed-cart flex fixed w-[25rem] justify-center items-center right-10 top-36 flex-col overflow-hidden h-[8.5rem] z-[100] rounded-[1.99rem] gap-2 ${openChat && cart.length > 0 ? "" : "hidden"}`}>
                    <div className="flex flex-col h-5">
                        <b>Carrito</b>
                    </div>

                   <div className="flex w-10/12 gap-2">
                        {
                            cart.map((product)=>(
                                <div className="w-16 h-16 overflow-hidden rounded-lg">
                                    <img src={product.product_photo} alt="" />
                                </div>
                            ))
                        }
                   </div>

                   <div className="flex gap-3 items-center">
                        <b>{`Subtotal: ${subTotal.toFixed(2)}$`}</b>

                        <ul>
                            <li className="border border-navigation bg-navigation text-white font-medium rounded-lg p-1">
                                <Link to='/purchase'>Pagar</Link>
                            </li>
                        </ul>
                   </div>

                   
                </div>
                </>
            
    )
}