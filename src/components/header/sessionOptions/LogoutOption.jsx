import { Navigate } from "react-router-dom"
import { UserIcon } from "../../../assets/icons/UserIcon"
import { useUserStore } from "../../../store/user"

export const LogoutOption = ()=>{

    const {closeUser} = useUserStore()

    const handleClick = ()=>{
        closeUser()
    }

    return(
        <div class="flex-grow flex justify-center items-end">  
    <button class="flex items-end"  onClick={handleClick}>
    
        <UserIcon/>
    
        <div>
            <p>Bienvenido!</p>
            <b>Cerrar sesión</b>    
        </div>
        
    </button>
    </div>
    )
}