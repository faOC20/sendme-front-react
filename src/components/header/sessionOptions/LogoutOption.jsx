import { Navigate } from "react-router-dom"
import { UserIcon } from "../../../assets/icons/UserIcon"
import { useUserStore } from "../../../store/user"
import { useAuthStore } from "../../../store/user"

export const LogoutOption = ()=>{

    const {name, closeSession} = useAuthStore()

    const handleCloseSession = ()=>{
        closeSession()
    }
    
    const handleProfile = ()=>{
        window.location.href = '/profile'
    }


    return(
        <div class="flex-grow flex justify-center items-end">  
    <div class="flex items-end">
    
        <button onClick={handleProfile}>
            <UserIcon/>
        </button>
    
        <div className="text-start">
            <p>Bienvenido/a, {name}!</p>
            <button onClick={handleCloseSession}>
                <b>Cerrar sesión</b>    
            </button>
        </div>
        
    </div>
    </div>
    )
}