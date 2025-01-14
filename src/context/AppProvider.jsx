import React, { createContext, useEffect, useState } from 'react';
import { API_URL } from '../pages/api/constants';
import { useAuthStore } from '../store/user';
import { json } from 'react-router-dom';
import { useContext } from 'react';

// Crear el contexto
const AppContext = createContext({
    getRefreshToken: () => {},
    getAccessToken: () => {}
});

export function AppProvider({ children }) {
    
    
    const { closeSession } = useAuthStore()

    const getRefreshToken = ()=>{
        const token = localStorage.getItem("token")

        if (token){
            const refreshToken = JSON.parse(token)
            return refreshToken
        }

        else return null
    }

    const getAccessToken = ()=>{
        const token2 = localStorage.getItem("token2")

        if (token2){
            const accessToken = JSON.parse(token2)
            return accessToken
        }

        else return null
    }

    useEffect(() => {
        // Lógica importante que se ejecuta al montar la aplicación
        console.log('Aplicación montada');

        checkAuth()
        // Puedes realizar llamadas a APIs, inicializar estados, etc.
    }, []); // El array vacío asegura que se ejecute solo una vez al montar

    const checkAuth = async()=>{

        const token = getRefreshToken()
        const accessToken = getAccessToken()
        console.log(accessToken + " buen topken chavval " )
        // console.log(token)

        if (accessToken){
            try {
                const response = await fetch(`${API_URL}access-token`, {
                    method: "POST",
                    headers:{
                        "Content-Type":"application/json",
                        Authorization: `Bearer ${accessToken}`
                    }
                })

                console.log(response)

                if (response.ok){
                    console.log('Token válido')
                }

                else {
                    console.log('Token inválido')
                    if (token){
                        const newAccessToken = await requestNewAccessToken(token)

                        if(newAccessToken){
                            localStorage.setItem("token2", JSON.stringify(newAccessToken))
                        }
                    }

                    else {
                        console.log("No hay token")
                        closeSession()
                        localStorage.removeItem("token")
                        localStorage.removeItem("token2")
                    }
                }
            }

            catch (error){
                console.error(error)
            }
        }

        else {
            
            if (token){
                const newAccessToken = await requestNewAccessToken(token)

                if(newAccessToken){
                    setAccessToken(newAccessToken)
                }
            }

            else {
                console.log("No hay token")
                closeSession()
                localStorage.removeItem("token")
                localStorage.removeItem("token2")
            }
        }

      
    }

    const requestNewAccessToken = async(token)=>{
            try{
                const response = await fetch(`${API_URL}refresh-token`, {
                    method: "POST",
                    headers:{
                        "Content-Type":"application/json",
                        Authorization: `Bearer ${token}`
                        }})

                if(response.ok){
                    const token = await response.json()

                    if (json.error){
                        throw new Error(json.error)
                    }

                    return token.accessToken
                    // setAccessToken(token)
                    // console.log(token.accessToken)
                    
                }

                else {
                    closeSession()
                    localStorage.removeItem("token")
                        localStorage.removeItem("token2")
                    throw new Error("Error al solicitar el token")
                    
                   
                }
            }
    
            catch (error){
                console.error(error)
                return null
            }
        }

    return (
        <AppContext.Provider value={{ getRefreshToken, getAccessToken }}>
            {children}
        </AppContext.Provider>
    );
}

export const useFunctions = () => useContext(AppContext);
