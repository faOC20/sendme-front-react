import { useEffect, useState } from "react";
import { API_URL } from "../../pages/api/constants";
import { useAuthStore } from "../../store/user";
import Select from "react-select"
import AsyncSelect from "react-select/async"

export const FetchCell = ({setIdCell})=>{

    const { id } = useAuthStore();
    const [initialOptions, setInitialOptions] = useState(null); // Estado para las opciones iniciales
  
   
      const fetchInitialOptions = async () => {
        try {
          const response = await fetch(`${API_URL}user-cell`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id,
            }),
          });
  
          const { data } = await response.json();
          const options = data.map((telefono) => ({
            value: `${telefono.id_telefono}`,
            label: `${telefono.numero_telefono}`,
          }));
  
          setInitialOptions(options); 
  
          return options
          // Guardar las opciones iniciales en el estado
        } catch (error) {
          console.error(error);
        }
  
  
      };
  
     
  
  
    return (
      <AsyncSelect
        defaultOptions
        onChange={(selectedOption) => {
          setIdCell(selectedOption.value);
        }}
        placeholder='sus teléfonos'
        loadOptions={fetchInitialOptions} // Pasar las opciones iniciales al componente
        required
      />
    );
  };
    
