import { ShoppingCartIcon } from "../../assets/icons/ShoppingCartIcon"

export const ShoppingCartButton = ()=>{
    return (
        <li class="flex-grow flex justify-center">
            <a class="flex items-end" href="">
                <ShoppingCartIcon/>
                <b>Carrito</b>
            </a>
        </li>
    )
}
