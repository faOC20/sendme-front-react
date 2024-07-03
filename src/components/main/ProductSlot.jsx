import { usePriceChanger } from "../../store/products";
import { Header } from "../header/Header";
import "./products.css";
import {Link, Route, Routes} from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";



export const ProductSlot = ({id, name, photo, price})=>{

    const {vesPrice, setVesPrice} = usePriceChanger()

    return(
            
                <a href={`/product/${id}`} onClick={()=>{
                    localStorage.removeItem('productpage-storage')
                }} className="product-container">

                    <div className="product-image-container h-2/3">
                        <picture>
                            <img src={photo} alt={name} />
                        </picture>
                    </div>

                    <div className="product-name h-1/6 pl-6 pr-5 ">
                        <ul >
                            <li>{name}</li>
                            <li onClick={()=>{console.log(typeof(price))}}>
                            {
                                vesPrice?(
                                    <div className="flex justify-center gap-1">
                                        <b>VES</b>
                                        <b>
                                            {new Intl.NumberFormat("de-DE").format(parseFloat(price.replace(/[\$,]/g, ''))*38)}
                                    
                                        </b>
                                    </div>
                                ):(<b>
                                    {price}
                                </b>)
                            }
                            </li>
                        </ul>
                    </div>

                </a>
    )
}
