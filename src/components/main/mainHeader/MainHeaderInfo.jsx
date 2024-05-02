import animatedLogo from '../../../assets/images/sendmefondo.png'
import { bannerInfo } from '../../../assets/constants/bannerInfo'
import { MainInfoCreator } from './MainInfoCreator'

export const MainHeaderInfo = ()=>{
    return (
        <header className="flex absolute z-30 w-full h-full">
            <ul class="flex w-full">

                <div class='flex grow justify-center'>
                    <li class='flex pt-5 flex-col text-3xl'>
                        <div>
                            Productos de <b>Amazon</b> a
                        </div> 
                        
                        <div>
                            <b>Tiempo real</b>
                        </div>
                    </li>
                </div>

                <picture className='absolute w-44 left-56 top-11'>
                    <img className='object-contain' src={animatedLogo} alt="logo sendme cargando paquetes" />
                </picture>

                {
                    bannerInfo.map((info)=>(
                        <MainInfoCreator key={info.id} title={info.title} description={info.description}/>
                    ))
                }
            </ul>

        </header>
    )
}

