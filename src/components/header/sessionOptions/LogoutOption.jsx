import { Link, Navigate } from "react-router-dom"
import { UserIcon } from "../../../assets/icons/UserIcon"
import { useUserStore } from "../../../store/user"
import { useAuthStore } from "../../../store/user"
import { TurnOff } from "../../../assets/icons/TurnOff"

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
    
        <div className="text-start phone:hidden">
            <p>Bienvenido/a, {name}!</p>
            <button onClick={handleCloseSession}>
                <b>Cerrar sesión</b>    
            </button>
        </div>

        <div className="text-start pc:hidden phone:flex">
            <button onClick={handleCloseSession}>
                <div>
                    <TurnOff/>
                </div>    
            </button>
        </div>
        
    </div>
    </div>
    )
}