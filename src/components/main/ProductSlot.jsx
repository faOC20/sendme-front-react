import { Header } from "../header/Header";
import "./products.css";
import {Link, Route, Routes} from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";



export const ProductSlot = ({id, name, photo})=>{
    return(
            
                <a href={`/product/${id}`} className="product-container">

                    <div className="sprite-container">
                        <picture>
                            <img src={photo} alt={name} />
                        </picture>
                    </div>

                    <ul>
                        <li className="pokemon-name">{name}</li>
                    </ul>

                </a>
            
            

            
    )
}
