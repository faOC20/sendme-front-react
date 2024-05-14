import { Header } from "../header/Header";
import "./products.css";
import {Link, Route, Routes} from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";



export const ProductSlot = ({id, name, photo, price})=>{
    return(
            
                <a href={`/product/${id}`} className="product-container">

                    <div className="product-image-container h-2/3">
                        <picture>
                            <img src={photo} alt={name} />
                        </picture>
                    </div>

                    <div className="product-name h-1/6 pl-6 pr-5 ">
                        <ul >
                            <li>{name}</li>
                            <li className="font-bold text-xl">{price}</li>
                        </ul>
                    </div>



                </a>
            
            

            
    )
}
