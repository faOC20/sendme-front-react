
import {HEADER_COLOR, MAIN_COLOR, FOOTER_COLOR} from '../assets/constants/colors'
import letterLogo from '../assets/images/logo.png'
import clickhere from '../assets/images/clickhere.png'
import { Footer } from '../components/footer/Footer'
import { Header } from '../components/header/Header'
import './Register.css'

export const Register = ()=>{

    const handleClick = ()=>{
        window.location.href = '/session'
    }

    return (
        <div className='register-page-container'>   
            
            <main class="main-container rounded-3xl flex overflow-hidden justify-center items-center flex-col">

            <div class="absolute top-9 left-1/2">
                <picture>
                    <img class="w-24" src={clickhere} alt="click para ir al inicio"/>
                </picture>
            </div>

            <a href="/">
                <picture>
                    <img class="w-16" src={letterLogo} alt="logo sendme"/>
                </picture>
            </a>

    <div class=" session-card rounded-3xl flex flex-col items-center">

        <h1 class="flex justify-center  h-1/5 items-center text-2xl pt-6">
            <b>Registrarse</b>
        </h1>

        <div class=" flex h-5/6 w-9/12 justify-center"  >
            <form class="flex flex-col w-11/12 justify-evenly" action="submit">
                <input className='session-form-input' type="email" placeholder="Correo electrónico"/>
                <input className='session-form-input' type="password" placeholder="Contraseña"/>
                <input className='session-form-input' type="password" placeholder="Contraseña nuevamente"/>
            
        

                <div class="flex items-center">
                    <label class="text-xs flex-grow flex">
                        <input type="checkbox"/>
                        Recúerdame
                    </label>

                    <label>
                        <a class="text-xs flex-grow" href="">Olvidé mi contraseña</a>
                    </label>
                </div>
                
                <button class="bg-navigation w-full p-1 text-white rounded-full" >Registrarse</button>

                <a class="text-xs self-center" href="javascript:void(0)" onClick={handleClick}>¿Ya posees una cuenta? <b>Inicia sesión</b>.</a>
            </form>
        </div>
    </div>
    </main>
            

            <Footer/>
        </div>
    )
}

    
   


