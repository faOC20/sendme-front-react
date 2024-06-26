import {Category} from "./Category"
import { categories } from "../../../assets/constants/categories"
import './categoriesStyles.css'
import { MenuIcon } from "../../../assets/icons/MenuIcon"
import { DownIcon } from "../../../assets/icons/DownIcon"
import { HorizontalCategory } from "./HorizontalCategory"
import { Link } from "react-router-dom"
export const Navigation = ()=>{
    return (
        <nav className="navigation bg-navigation h-1/3 text-lg relative">

            
            
            <ul class="flex h-full items-center pl-20 pr-20">

                
                
                <li className="allCategories relative h-full flex items-center grow justify-center w-full">

                    <div className="background-decoration absolute   w-0 h-full z-10 rounded-full"></div>
                    
                   <div class="w-full flex justify-center relative">
                        <div class="absolute rounded-full w-10/12 h-full bg-white"> </div>
                        
                        <button class=' text-header pl-4 pr-4 pt-1 pb-1 z-20 ' >Todas las categorías</button>

                   </div>
                    
                    <ul className="categories  absolute w-64 rounded-lg pt-2 z-10 bg-nav-animation">
                        {
                            categories.map((category)=>(
                                <Category category={category}/>
                            ))
                        }

                    </ul>
                    
                </li>
                
               

                {
                    categories.map((category)=>(
                        <HorizontalCategory category={category}/>
                    )).slice(1,4)
                }
                
            </ul>
        </nav>
    )
}
