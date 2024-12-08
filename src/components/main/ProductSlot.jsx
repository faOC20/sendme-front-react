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
                }} className="product-container hover:scale-105 transition">

                    <div className="product-name pl-6 pr-6">
                        <ul>
                            <li>
                                {name}
                            </li>
                        </ul>
                    </div>

                    <div className="product-image-container">
                        <picture className="">
                            <img src={photo} alt={name} />
                        </picture>
                    </div>

                    <div className="pl-6 pr-5">
                        <ul >

                        
                        <li onClick={()=>{console.log(typeof(price))}}>
                            {
                                vesPrice?(
                                    <div className="product-price flex justify-end gap-1">
                                        <b>VES</b>
                                        <b>
                                            {new Intl.NumberFormat("de-DE").format(parseFloat(price.replace(/[\$,]/g, ''))*38)}
                                    
                                        </b>
                                    </div>
                                ):(<b className="product-price flex justify-end">
                                    {price}
                                </b>)
                            }
                            </li>
                            
                            
                        </ul>
                    </div>

                </a>
    )
}
