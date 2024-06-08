import { CancelIcon } from "../../assets/icons/CancelIcon"
import AsyncSelect from "react-select/async"
import Select from "react-select"
import { cities } from "../../assets/constants/cities"
import { useAuthStore} from "../../store/user"
import { API_URL } from "../../pages/api/constants"
import { useState } from "react"
import Swal from 'sweetalert2'


export const NewDirectionForm = ({setShowDiv, showDiv})=>{

    const [inputValue, setInputValue] = useState('')

    const showWrong = ()=>{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo falló, intentelo nuevamente!",
        });
    }

    const showSucces = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Tu dirección ha sido agregada exitosamente!",
            showConfirmButton: true,
        
          }).then(()=>{
            window.location.href = '/profile'
          });
      }

    const {id} = useAuthStore()
    const [munOptions, setMunOptions] = useState([])

    // lo que va para la base de datos

    const [municipio, setMunicipio] = useState("")
    const [calle, setCalle] = useState("")
    const [zona, setZona] = useState("")
    const [numeroCasa, setNumeroCasa] = useState("")
    const [edificio, setEdificio] = useState("")
    const [apartamento, setApartamento] = useState("")

    const handleSendData = async(e)=>{
        console.log('entre aqui')
        e.preventDefault()

        try{
            const response = await fetch (`${API_URL}user-new-direction`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({
                    municipio, calle, zona, numeroCasa, edificio, apartamento, id
                }),
            });

            if (response.ok){
                
                setShowDiv(false)
                showSucces()
            }
    
            else{
    
                showWrong()
            }
        }

        catch(e){
            console.error(e)
        }

       
    }

    const setMun = async ()=>{
        
        return munOptions
    }

    const fetchMun = async(idSelectedCity)=>{
        
        const response = await fetch(`${API_URL}user-mun`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                idSelectedCity
            }),
          })

        const {data} = await response.json()

        console.log(data)

        const munOptions = data.map((mun)=>(
            {value:[{id_municipio:`${mun.id_municipio}`}, {id_ciudad:`${mun.id_ciudad}`}], label:`${mun.nombre_municipio}`}
        ))

        console.log(munOptions)

        setMunOptions(munOptions)

    }

    const citiesOptions = cities.map(city=>(
        {
            value:`${city.id_ciudad}`, label:`${city.nombre_ciudad}`
        }
    ))

    return (
        <>
            <div className={`new-direction-form w-7/12 h-5/6 rounded-3xl absolute z-30 border overflow-hidden flex flex-col gap-4 border-black ${showDiv?"block":"hidden"}`}>
                    <div className="w-full flex h-10 justify-end p-2">
                        
                        <button onClick={()=>{
                            setShowDiv(false)
                        }}>
                            <CancelIcon/>
                        </button>
                    </div>

                    <div className="flex justify-center w-full items-center h-full">
                    <form className="flex flex-col gap-12"  onSubmit={handleSendData}>
                    <div className="flex justify-evenly gap-5">
                        <div className="w-3/5">
                        <b>Ciudad</b>
                            <Select
                                placeholder = 'Seleccione su ciudad'
                                options={citiesOptions}
                                onChange={(selectedOption) => {
                                    fetchMun(selectedOption.value)

                                }}
                                required
                                
                            />
                        </div>

                        <div className="w-3/5">
                        <b>Municipio</b>
                            <AsyncSelect 
                                defaultOptions
                                placeholder = 'Seleccione su municipio'
                                loadOptions={setMun}
                                onChange={(e)=>{
                                    setMunicipio(e.value)
                                }}
                                required
                            />
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-5">
                        
                        <div className="w-3/5 h-full flex flex-col">
                            <b>Calle</b>
                            <input required onChange={(e)=>{
                                setCalle(e.target.value)
                            }} className="bg-white border-navigation border-2 text-start w-full p-1" type="text" placeholder="calle, avenida" /> 
         
                        </div>
                        
                        <div className="w-3/5 h-full flex flex-col">
                            <b>Zona</b>
                            <input required onChange={(e)=>{
                                setZona(e.target.value)
                            }} className="bg-white border-navigation border-2 text-start w-full p-1" type="text" placeholder="parcelamiento, conjunto residencial, urb." />  
                        </div>
                    </div>
                    <b>Campos opcionales  <b className="text-red-700">*</b></b>
                    <div className="flex justify-center items-center gap-5">
                        
                        <div className="w-1/5 h-full flex flex-col">
                            <b>Número casa <b className="text-red-700">*</b></b>
                            <input onChange={(e)=>{
                                setNumeroCasa(e.target.value)
                            }} className="bg-white border-navigation border-2 text-start w-full p-1" type="text" /> 
         
                        </div>
                        
                        <div className="w-1/5 h-full flex flex-col">
                            <b>Edificio <b className="text-red-700">*</b></b>
                            <input onChange={(e)=>{
                                setEdificio(e.target.value)
                            }} className="bg-white border-2 border-navigation text-start w-full p-1" type="text"  />  
                        </div>

                        <div className="w-1/5 h-full flex flex-col">
                            <b>Apartamento <b className="text-red-700">*</b></b>
                            <input onChange={(e)=>{
                                setApartamento(e.target.value)
                            }} className="bg-white border-navigation border-2 text-start w-full p-1" type="text"  />  
                        </div>
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