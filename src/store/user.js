import zustand from "zustand"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"


export const useAuthStore = create(

    persist(
         (set)=>({
             token:"",
             name:"",
             id:"",
             isAuth: false,
 
             setToken: (token)=>{
                 set({
                    token:token,
                    isAuth:true
                })
             },

             setName : (name)=>{
                set({name: name.toUpperCase()})
             }
            ,

            setId: (id)=>{
                set({id:id})
            },
             closeSession : ()=>{
                set({
                    token: "",
                    name:"",
                    isAuth:false,
                    id:""
                })
             }
         }),
 
         {
             name: 'user-auth-data',
             storage: createJSONStorage(()=>localStorage)
         }
 
    )
 
 )

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