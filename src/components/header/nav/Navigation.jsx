import {Category} from "./Category"
import { categories } from "../../../assets/constants/categories"
import './categoriesStyles.css'
import { MenuIcon } from "../../../assets/icons/MenuIcon"
import { DownIcon } from "../../../assets/icons/DownIcon"
export const Navigation = ()=>{
    return (
        <nav className="navigation bg-navigation h-1/3 text-lg relative">

            
            
            <ul class="flex h-full items-center pl-20 pr-20">

                
                
                <li className="allCategories relative h-full flex items-center grow justify-center w-full">

                    <div className="background-decoration absolute   w-0 h-full z-10 rounded-full"></div>
                    
                   <div class="w-full flex justify-center relative">
                        <div class="absolute rounded-full w-10/12 h-full bg-white"> </div>
                        
                        <a class=' text-header pl-4 pr-4 pt-1 pb-1 z-20 ' href="">Todas las categorías</a>

                   </div>
                    
                    <ul className="categories  absolute w-64 rounded-lg pt-2 z-10 bg-nav-animation">
                        {
                            categories.map((category)=>(
                                <Category category={category}/>
                            ))
                        }

                    </ul>
                    
                </li>
                
                <li class="h-full flex items-center z-20 grow justify-center w-full">
                    <a href="">Más vendidos</a>
                </li>

                <li class="h-full flex items-center z-20 grow justify-center w-full">
                    <a href="">Hogar</a>
                </li>

                <li class="h-full flex items-center z-20 grow justify-center w-full">
                    <a href="">Tecnología</a>
                </li>

                <li class="h-full flex items-center z-20 grow justify-center w-full">
                    <a href="">Deportes</a>
                </li>
                
            </ul>
        </nav>
    )
}
