import { MainDecoration } from "../../../assets/images/MainDecoration"
import { MainHeaderInfo } from "./MainHeaderInfo"
import './mainHeader.css'
import '../../../assets/icons/sendme-letter-logo.css'
import sendmeFlag from '../../../assets/images/sendme-flag.webp'
import sendmePet from '../../../assets/images/sendme-pet.png'
import sendmePet2 from '../../../assets/images/sendme-pet-2.webp'
import { useEffect, useState, useRef } from "react"
import { MainHeaderOptions } from "./MainHeaderOptions"
import sendmeCart from "../../../assets/images/sendme-cart.webp"
import sendmePolice from "../../../assets/images/sendme-police.webp"
import sendmePayments from "../../../assets/images/sendme-payments.webp"
import principalBanner from "../../../assets/images/principal-banner.png"
import amazonBanner from "../../../assets/images/amazon-products-banner.png"
import securityBanner from "../../../assets/images/security-banner.png"
import paymentBanner from "../../../assets/images/payment-methods-banner.png"

export const MainHeader = ()=>{

    const mainOptions = [
        {
            id:0,
            title:'Importa ya!',
            subtitle: 'desde Venezuela',
            img: sendmePet2,
            background: principalBanner
        },
        {
            id:1,
            title:'Productos de Amazon',
            subtitle: 'a tiempo real',
            img: sendmeCart,
            background: amazonBanner
        },
        {
            id:2,
            title:'Seguridad',
            subtitle: 'y confianza garantizada',
            img: sendmePolice,
            background: securityBanner
        },
        {
            id:3,
            title:'Métodos de pago',
            subtitle: 'para tu comodidad',
            img: sendmePayments,
            background: paymentBanner
        }

    ]


    const [selectedOption, setSelectedOption] = useState(0)
    const [index, setIndex] = useState(0)

    useEffect(()=>{
        setIndex(selectedOption)
    },[selectedOption])

    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            
            setIndex((prevIndex) => (prevIndex + 1) % mainOptions.length);
            setSelectedOption((prevIndex) => (prevIndex + 1) % mainOptions.length);
        }, 7000); // 7000 milisegundos = 7 segundos
    
        return () => clearInterval(intervalRef.current); // Limpiar el intervalo cuando el componente se desmonte
      }, [mainOptions.length, selectedOption]);

    

    return <>
        <div className="flex flex-col items-center category-section-container">
            <div className="relative min-h-[16rem] phone:hidden text-header flex flex-grow z-10 w-full  justify-center">

                

                <MainHeaderInfo option={mainOptions[index]}/>

            </div>

            <div className="relative flex flex-grow  w-full h-[70px] z-20 gap-5 justify-center ">
                
                    
    
                    {
                        mainOptions.map((option)=>(
                            <MainHeaderOptions selectedOption = {selectedOption} setSelectedOption={setSelectedOption} option = {option} />
                        ))
                    }
                    
                
                
            </div>
        </div>
    
    </>
}
