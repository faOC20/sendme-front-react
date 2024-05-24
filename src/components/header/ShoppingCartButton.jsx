import { ShoppingCartIcon } from "../../assets/icons/ShoppingCartIcon"
import { useShoppingCartStore } from "../../store/products"

export const ShoppingCartButton = ()=>{

    const {refreshCart} = useShoppingCartStore()

    return (
        <li class="flex-grow flex justify-center">
            <a className="flex items-end" onClick={()=>{
                refreshCart()
            }} href="/cart">
                <ShoppingCartIcon/>
                <b>Carrito</b>
            </a>
        </li>
    )
}
