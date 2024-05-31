import zustand from "zustand"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export const useUserStore = create(

   //persist(
        (set)=>({
            isAuth: false,
            isLogged:false,

            authUser: ()=>{
                set({isAuth:true})
            },

            logUser:()=>{
                set({isLogged:true})
            }
        }),

        // {
        //     name: 'user-auth',
        //     storage: createJSONStorage(()=>localStorage)
        // }

   // )

    
        

    
)