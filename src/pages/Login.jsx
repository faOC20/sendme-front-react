import './Register.css'
import letterLogo from '../assets/images/logo.png'
import clickhere from '../assets/images/clickhere.png'
import { Footer } from '../components/footer/Footer'
import { useState } from 'react'
import { API_URL } from './api/constants'
import { Navigate } from 'react-router-dom'
import { useAuthStore, useUserStore } from '../store/user'
import Cookies from 'js-cookie'
import { useEffect } from 'react'

export const Login = ()=>{

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [authError, setAuthError] = useState("")
    const {setName, setToken, setId, isAuth, setEmailUsuario} = useAuthStore()


    const handleClick = ()=>{
        window.location.href = '/register'
    }

    const handleSubmit = async(e)=>{

        e.preventDefault()

        try{
        const response = await fetch (`${API_URL}login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                email, password
            }),
        });

          

        if (response.ok){
            const data = await response.json()
            setEmailUsuario(data.email_usuario)
            setToken(data.token)
            setName(data.nombre_usuario)
            setId (data.id)
            setAuthError("")
        }else{
            console.log("Algo ha salido mal")
            const error = await response.json()
            setAuthError(error.body.error)
        }
      } catch (error){
        console.error(error)
      }
    }

    if (isAuth){
        return <Navigate to="/"/>
    }

    return(
    
        <div className="register-page-container">
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

<div class=" session-card  flex flex-col items-center">

    <h1 class="flex justify-center  h-1/5 items-center text-2xl pt-6">
        <b>Iniciar sesión</b>
    </h1>

    <div>
        {authError}
    </div>

    <div class=" flex h-5/6 w-9/12 justify-center"  >
            <form class="flex flex-col w-11/12 justify-evenly" action="submit" onSubmit={handleSubmit}>
                <input onChange={(e)=>{
                    setEmail(e.target.value)
                }} type="text" className='session-form-input' placeholder="Correo electrónico"/>
                <input onChange={(e)=>{
                    setPassword(e.target.value)
                }} type="text" className='session-form-input' placeholder="Contraseña"/>
                
                <div class="flex items-center">
                    <label class="text-xs flex-grow flex">
                        <input type="checkbox"/>
                        Recúerdame
                    </label>

                    <label>
                        <a class="text-xs flex-grow" href="">Olvidé mi contraseña</a>
                    </label>
                </div>
                
                <button class="bg-navigation w-full p-1 text-white rounded-full">Ingresar</button>

                <a class="text-xs self-center" href="javascript:void(0)" onClick={handleClick}>¿Aún no tiene cuenta? <b>Regístrate</b>.</a>
            </form>
        </div>
    </div>
</main>
        <Footer/>
        </div>

    )
}

