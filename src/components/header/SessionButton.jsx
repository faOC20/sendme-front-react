import {UserIcon} from "../../assets/icons/UserIcon"
import { useAuthStore, useUserStore } from "../../store/user"
import { LoginOption } from "./sessionOptions/LoginOption"
import { LogoutOption } from "./sessionOptions/LogoutOption"


export const SessionButton = ()=>{

    const {isAuth} = useAuthStore()

    return(
        isAuth?(
            <LogoutOption/>
        ):(
            <LoginOption/>
        )
    )
}
