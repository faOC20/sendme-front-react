import { Link } from "react-router-dom"
import { UserIcon } from "../../../assets/icons/UserIcon"

export const LoginOption = ()=>{
    

    return(
        <li class="logo flex-grow flex justify-center items-end">  
    <Link class="flex items-end" to='/session'>
    
        <UserIcon/>
    
        <div className="flex flex-col text-start">
            <p>Bienvenido/a!</p>
            <b>Inicia sesión / Regístrate</b>    
        </div>
        
    </Link>
</li>
    )
}