import {UserIcon} from "../../assets/icons/UserIcon"

export const SessionButton = ()=>{

    const handleClick = ()=>{
        window.location.href='/session'
        
    }

    return(
        <li class="flex-grow flex justify-center items-end">  
            <a class="flex items-end" href="javascript:void(0)" onClick={handleClick}>
            
                <UserIcon/>
            
                <div>
                    <p>Bienvenido!</p>
                    <b>Inicia sesión / Regístrate</b>    
                </div>
                
            </a>
        </li>
    )
}
