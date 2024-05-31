
import {HEADER_COLOR, MAIN_COLOR, FOOTER_COLOR} from '../assets/constants/colors'
import letterLogo from '../assets/images/logo.png'
import clickhere from '../assets/images/clickhere.png'
import { Footer } from '../components/footer/Footer'
import { Header } from '../components/header/Header'
import './Register.css'
import { useState } from 'react'
import { API_URL } from './api/constants'
import { useUserStore } from '../store/user'
import { Navigate } from 'react-router-dom'

export const Register = ()=>{

    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [authError, setAuthError] = useState()
    const {isAuth, authUser} = useUserStore()

    const handleClick = ()=>{
        window.location.href = '/session'
    }

    const handleSubmit = async(e)=>{

        e.preventDefault()

        try{
        const response = await fetch (`${API_URL}register`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                name,lastname,phone,email, password
            }),
        });

        if (response.ok){
            console.log('Usuario creado satisfactoriamente')
            setAuthError("")
            authUser()
        }else{
            console.log("Algo ha salido mal")
            const error = await response.json()
            setAuthError(error.body.error)
        }
      } catch (error){
        console.error(error)
      }
    }

    if(isAuth){
        
        return <Navigate to="/session"/>
        console.log(isAuth[0])
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

        <div className='p-2 rounded-3xl'>
            {authError}
        </div>

        <div class=" flex h-5/6 w-9/12 justify-center"  >
            <form class="flex flex-col w-11/12 justify-evenly" action="submit" onSubmit={handleSubmit}>
                <input onChange={(e)=>{
                    setName(e.target.value)
                }} className='session-form-input' type="text" placeholder="Nombre"/>
               
               
               <input onChange={(e)=>{
                    setLastname(e.target.value)
                }}  className='session-form-input' type="text" placeholder="Apellido"/>

                <input onChange={(e)=>{
                    setPhone(e.target.value)
                }}  className='session-form-input' type="text" placeholder="Teléfono"/>

                <input onChange={(e)=>{
                    setEmail(e.target.value)
                }}  className='session-form-input' type="email" placeholder="Correo electrónico"/>

                <input onChange={(e)=>{
                    setPassword(e.target.value)
                }}  className='session-form-input' type="password" placeholder="Contraseña"/>

                <input onChange={(e)=>{
                    setConfirmPassword(e.target.value)
                }}  className='session-form-input' type="password" placeholder="Contraseña nuevamente"/>
            
        

                <div class="flex items-center">
                    <label class="text-xs flex-grow flex">
                        <input type="checkbox"/>
                        Recúerdame
                    </label>

                    <label>
                        <a class="text-xs flex-grow" href="">Olvidé mi contraseña</a>
                    </label>
                </div>
                
                <button class="bg-navigation w-full p-1 text-white rounded-full">Registrarse</button>

                <a class="text-xs self-center" href="javascript:void(0)" onClick={handleClick}>¿Ya posees una cuenta? <b>Inicia sesión</b>.</a>
            </form>
        </div>
    </div>
    </main>
            

            <Footer/>
        </div>
    )
}

    
   


