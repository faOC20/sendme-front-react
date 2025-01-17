import './Register.css'
import letterLogo from '../assets/images/logo.png'
import clickhere from '../assets/images/clickhere.png'
import { Footer } from '../components/footer/Footer'
import { useState } from 'react'
import { API_URL } from './api/constants'
import { Link, Navigate } from 'react-router-dom'
import { useAuthStore, useUserStore } from '../store/user'
import Swal from 'sweetalert2'

export const Login = ()=>{

    const showWrong = ()=>{
        Swal.fire({
            icon: "error",
            title: "Intente nuevamente",
            text: "Email y/o contraseña inválidos!",
            showConfirmButton:true
        });
    }

    const showSucces = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Inicio de sesión completado!",
            timer: 1500
        })
      }

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {setName, setToken, setId, isAuth, setEmailUsuario, refreshToken, setAuth} = useAuthStore()
    

    

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

            console.log(data)
            if (data.refreshToken && data.accessToken){
                setEmailUsuario(data.email_usuario)
                
                // setToken(data.refreshToken)

                const token = data.refreshToken
                localStorage.setItem("token", JSON.stringify(token))

                const token2 = data.accessToken
                localStorage.setItem("token2", JSON.stringify(token2))

                setAuth()
                
                setName(data.nombre_usuario)
                
                
                setId (data.id)
                
                
                 //Guarda el token de acceso, no persiste en el localStorage
                
                
                showSucces()
            }
           
        }else{
            console.log("Algo ha salido mal")
            showWrong()
            
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
             <main className="main-container rounded-3xl flex overflow-hidden justify-center items-center flex-col">



<Link to="/">
    <picture>
        <img className="w-16" src={letterLogo} alt="logo sendme"/>
    </picture>
</Link>

<div className=" session-card  flex flex-col items-center">

    <h1 className="flex justify-center  h-1/5 items-center text-2xl pt-6">
        <b>Iniciar sesión</b>
    </h1>


    <div className=" flex h-5/6 w-9/12 justify-center"  >
            <form className="flex flex-col w-11/12 justify-evenly" action="submit" onSubmit={handleSubmit}>
                <input onChange={(e)=>{
                    setEmail(e.target.value)
                }} type="email" className='session-form-input' placeholder="Correo electrónico" required/>
                <input onChange={(e)=>{
                    setPassword(e.target.value)
                }} type="password" className='session-form-input' placeholder="Contraseña" required/>
                
                
                
                <button className="bg-navigation w-full p-1 text-white rounded-full">Ingresar</button>

                <Link className="text-xs self-center" to='/register'>¿Aún no tiene cuenta? <b>Regístrate</b>.</Link>
            </form>
        </div>
    </div>
</main>
        <Footer/>
        </div>

    )
}

