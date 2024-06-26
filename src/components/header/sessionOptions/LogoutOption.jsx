import { Link, Navigate } from "react-router-dom"
import { UserIcon } from "../../../assets/icons/UserIcon"
import { useUserStore } from "../../../store/user"
import { useAuthStore } from "../../../store/user"

export const LogoutOption = ()=>{

    const {name, closeSession} = useAuthStore()

    const handleCloseSession = ()=>{
        closeSession()
    }
    

    return(
        <div class="logo flex-grow flex justify-center items-end">  
    <div class="flex items-end">
    
        <Link to='/profile'>
        <button>
            <UserIcon/>
        </button>
        </Link>
    
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