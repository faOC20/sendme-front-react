
import {HEADER_COLOR, MAIN_COLOR, FOOTER_COLOR} from '../assets/constants/colors'
import letterLogo from '../assets/images/logo.png'
import clickhere from '../assets/images/clickhere.png'
import { Footer } from '../components/footer/Footer'
import { Header } from '../components/header/Header'
import './Register.css'
import { useState } from 'react'
import { API_URL } from './api/constants'
import { useAuthStore, useUserStore } from '../store/user'
import { Link, Navigate } from 'react-router-dom'

export const Register = ()=>{

    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [authError, setAuthError] = useState()
    const {isAuth} = useAuthStore()

    const handleSubmit = async(e)=>{

        e.preventDefault()

        if (password !== confirmPassword){
            setAuthError('las contraseñas no coinciden')
        }

        else{
            try{
                const response = await fetch (`${API_URL}register`,{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body: JSON.stringify({
                        name,lastname,email, password
                    }),
                });
        
                if (response.ok){
                    console.log('Usuario creado satisfactoriamente')
                    setAuthError("")
                    window.location.href = '/session'
                }else{
                    console.log("Algo ha salido mal")
                    const error = await response.json()
                    setAuthError(error.body.error)
                }
              } catch (error){
                console.error(error)
              }
        }
    }

    if(isAuth){
        
        return <Navigate to="/session"/>
        
    }

    return (
        <div className='register-page-container'>   
            
            <main class="main-container flex overflow-hidden justify-center items-center flex-col">

            {/* <div class="absolute top-9 left-1/2">
                <picture>
                    <img class="w-24" src={clickhere} alt="click para ir al inicio"/>
                </picture>
            </div> */}

            <Link to="/">
                <picture>
                    <img class="w-16" src={letterLogo} alt="logo sendme"/>
                </picture>
            </Link>

    <div class=" session-card flex flex-col items-center h-max pb-5">

        <h1 class="flex justify-center  h-1/5 items-center text-2xl pt-6">
            <b>Registrarse</b>
        </h1>

        <div className='p-2 text-red-600'>
            {authError}
        </div>

        <div class=" flex w-9/12 justify-center"  >
            <form class="flex flex-col gap-2 w-11/12 justify-evenly" action="submit" onSubmit={handleSubmit}>

                <hr />

                <b>Datos personales</b>

                <input onChange={(e)=>{
                    setName(e.target.value)
                }} className='session-form-input' type="text" placeholder="Nombre" required/>
               
               
               <input onChange={(e)=>{
                    setLastname(e.target.value)
                }}  className='session-form-input' type="text" placeholder="Apellido" required/>


                <input onChange={(e)=>{
                    setEmail(e.target.value)
                }}  className='session-form-input' type="email" placeholder="Correo electrónico" required/>

                <input onChange={(e)=>{
                    setPassword(e.target.value)
                }}  className='session-form-input' type="password" placeholder="Contraseña" required/>

                <input onChange={(e)=>{
                    setConfirmPassword(e.target.value)
                }}  className='session-form-input' type="password" placeholder="Contraseña nuevamente" required/>

                <hr className='m-5 border '/>
                {/* <div className='flex items-center'>
                    <label className="font-bold flex justify-center items-center m-2" for="lang"> 
                            País
                    </label>
                        
                    <select className="bg-white border-2 rounded-lg h-3/4" name="" id="lang">
                        <option value="javascript">Venezuela</option>
                    </select>
                </div>

                <div className='flex items-center'>
                    <label className="font-bold flex justify-center items-center m-2" for="lang"> 
                        Ciudad
                    </label>
                        
                    <select className="bg-white border-2 rounded-lg h-3/4" name="" id="lang">
                        <option value="javascript">Cumana</option>
                        
                    </select>
                </div> */}
            
        

                
                
                <button className="bg-navigation w-full p-1 text-white rounded-full">Registrarse</button>

                <Link className="text-xs self-center mt-3" to='/session' >¿Ya posees una cuenta? <b>Inicia sesión</b>.</Link>
            </form>
        </div>
    </div>
    </main>
            

            <Footer/>
        </div>
    )
}

    
   


