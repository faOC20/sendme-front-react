import {UserIcon} from "../../assets/icons/UserIcon"

export const SessionButton = ()=>{
    return(
        <li class="flex-grow flex justify-center items-end">  
            <a class="flex items-end" href="/session">
            
                <UserIcon/>
            
                <div>
                    <p>Bienvenido!</p>
                    <b>Inicia sesión / Regístrate</b>    
                </div>
                
            </a>
        </li>
    )
}
