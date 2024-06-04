import {UserIcon} from "../../assets/icons/UserIcon"
import { useUserStore } from "../../store/user"
import { LoginOption } from "./sessionOptions/LoginOption"
import { LogoutOption } from "./sessionOptions/LogoutOption"


export const SessionButton = ()=>{

    const {isLogged} = useUserStore()

    return(
        isLogged?(
            <LogoutOption/>
        ):(
            <LoginOption/>
        )
    )
}
