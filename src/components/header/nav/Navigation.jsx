import {Category} from "./Category"
import { categories } from "../../../assets/constants/categories"
import './categoriesStyles.css'
import { MenuIcon } from "../../../assets/icons/MenuIcon"
import { DownIcon } from "../../../assets/icons/DownIcon"
import { HorizontalCategory } from "./HorizontalCategory"
import { Link } from "react-router-dom"
export const Navigation = ()=>{
    return (
        <nav className="navigation bg-header h-[40px] w-full justify-center relative phone:hidden flex">

            
            
            <ul className="flex h-full items-center w-[88%] justify-between text-md">

                
                
                <li className="allCategories relative h-full flex justify-center items-start flex-grow">

                    <div className="background-decoration absolute  w-0 z-20 h-[32px] rounded-full "></div>
                    
                   <div className="w-full flex justify-center relative z-20">
                        
                        
                        <button className=' text-header flex bg-white rounded-full px-4 py-1 w-[80%] z-20 justify-center ' >Todas las categorías</button>

                   </div>
                    
                    <ul className="categories  absolute w-full rounded-lg pt-2 z-30 bg-nav-animation">
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
                    )).slice(1,8)
                }
                
            </ul>
        </nav>
    )
}
