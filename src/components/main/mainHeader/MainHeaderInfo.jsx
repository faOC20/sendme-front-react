import animatedLogo from '../../../assets/images/sendmefondo.png'
import { bannerInfo } from '../../../assets/constants/bannerInfo'
import { MainInfoCreator } from './MainInfoCreator'
import sendmePet from '../../../assets/images/sendme-pet.png'

export const MainHeaderInfo = ({option})=>{
    return (
        <>
            <picture className={`w-full h-[50rem] absolute `}> 
                    <img src={option.background} alt="" />
                </picture>

                {/* <div className="z-50 w-full flex gap-10">
                    <div className="flex-grow h-full  flex justify-end">
                        <div className="flex justify-center items-start flex-col text-white">
                            <h1 className="decoration-title">{option.title}</h1>
                            <h2 className="decoration-subtitle text-start text-balance"> {option.subtitle}</h2>
                        </div>
                    </div>
                    <div className="flex-grow flex items-center">
                        <picture className="flex h-[200px] w-auto">
                            <img src={option.img} className="object-contain hover:scale-105 transition" alt="" />
                        </picture>
                    </div>
                </div> */}
            
        </>
    )
}

