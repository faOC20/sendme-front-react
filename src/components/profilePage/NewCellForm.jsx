import { CancelIcon } from "../../assets/icons/CancelIcon"
import AsyncSelect from "react-select/async"
import Select from "react-select"
import { cities } from "../../assets/constants/cities"
import { useAuthStore} from "../../store/user"
import { API_URL } from "../../pages/api/constants"
import { useState } from "react"
import Swal from 'sweetalert2'


export const NewCellForm = ({setShowNewCell, showNewCell})=>{

    const [inputValue, setInputValue] = useState('')

    const showWrong = async()=>{

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `El n`,
        });
    }

    const showSucces = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Tu número ha sido agregada exitosamente!",
            showConfirmButton: true,
        
          }).then(()=>{
            window.location.href = '/profile'
          });
      }

    

    // lo que va para la base de datos

    const [numeroTelefono, setNumeroTelefono] = useState("")
    const {id} = useAuthStore()

    const handleSendData = async(e)=>{
        console.log('entre aqui')
        e.preventDefault()

        try{
            const response = await fetch (`${API_URL}user-new-cell`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({
                    numeroTelefono, id
                }),
            });

            if (response.ok){
                
                setShowNewCell(false)
                showSucces()
            }
    
            else{
                const error = await response.json()
                console.log(error)
               
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error.body.error}`,
                });
                
            }
        }

        catch(e){
            console.error(e)
        }

       
    }


    return (
        <>
            <div className={`shadow-2xl bg-white absolute p-3 z-30 w-full overflow-hidden flex flex-col gap-4  ${showNewCell?"block":"hidden"}`}>
                    <div className="w-full flex h-10 justify-end p-2">
                        
                        <button onClick={()=>{
                            setShowNewCell(false)
                        }}>
                            <CancelIcon/>
                        </button>
                    </div>

                    <div className="flex justify-center items-center h-full">
                    <form className="flex flex-col gap-4"  onSubmit={handleSendData}>
                        <input onChange={(e)=>{
                            setNumeroTelefono(e.target.value)
                        }} className="bg-white border-2 border-navigation p-2" type="text" placeholder="Ingrese el número de teléfono" required/>
                    
                    <div className=" flex text-sm gap-2 text-gray-400 flex-col">
                        <b className="text-start">ej. 04141234567</b>
                        <b className="text-start">debe tener 11 dígitos</b>
                    </div>
                        
                    <div>

                        <button className="border pl-2 pr-2 bg-navigation text-white text-lg rounded-xl ">enviar</button>
                    </div>
                    </form>
                    </div>

                    
        </div>
        </>
    )
}