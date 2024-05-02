import { MainDecoration } from "../../../assets/images/MainDecoration"
import { MainHeaderInfo } from "./MainHeaderInfo"

export const MainHeader = ()=>{
    return <>
        <div className="relative w-full h-60">
            <div className="absolute w-full -top-14 z-10">
                <MainDecoration/> 
            </div>

            <MainHeaderInfo/>
        
        </div>
    
    </>
}
