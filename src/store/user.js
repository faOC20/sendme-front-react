import zustand from "zustand"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"


export const useAuthStore = create(

    persist(
         (set)=>({
            email_usuario:"",
            //  refreshToken:"",
             name:"",
             id:"",
             isAuth: false,
 
            //  setToken: (token)=>{
            //      if(token){
            //          set({refreshToken: token, isAuth:true})
            //      }
            //  },
            setAuth: ()=> {
                set({isAuth:true})}
            ,
             setName : (name)=>{
                set({name: name.toUpperCase()})
             }
            ,
            setEmailUsuario: (email)=>{
                set({email_usuario:email})
            }
             ,
            setId: (id)=>{
                set({id:id})
            },
             closeSession : ()=>{
                set({
                   
                    name:"",
                    email_usuario:"",
                    id:"",
                    isAuth:false,
                    // refreshToken:null
                    
                })
             }
         }),
 
         {
             name: 'user-authentification-data',
             storage: createJSONStorage(()=>localStorage)
         }
 
    )
 
 )

//  export const useAccessToken = create(
//     (set)=>({
//         accessToken:null,
//         setAccessToken: (token)=>{
//             set({accessToken:token})
//         }
//     })
//  )

export const useUserStore = create(

   persist(
        (set)=>({
            isAuth: false,
            isLogged:false,

            authUser: ()=>{
                set({isAuth:true})
            },

            logUser:()=>{
                set({isLogged:true})
            },

            closeUser:()=>{
                set({isLogged:false})
            }
        }),

        {
            name: 'user-auth',
            storage: createJSONStorage(()=>sessionStorage)
        }

   )

)