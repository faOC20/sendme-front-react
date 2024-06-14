import { Link } from "react-router-dom"
import { ShoppingCartIcon } from "../../assets/icons/ShoppingCartIcon"
import { useShoppingCartStore } from "../../store/products"

export const ShoppingCartButton = ()=>{

    const {refreshCart} = useShoppingCartStore()

    return (
        <li class="flex-grow flex justify-center">
            <Link className="flex items-end" onClick={()=>{
                refreshCart()
            }} to="/cart">
                <ShoppingCartIcon/>
                <b>Carrito</b>
            </Link>
        </li>
    )
}
