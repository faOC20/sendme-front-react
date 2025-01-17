import React, { useEffect, useState } from 'react';
import AsyncSelect from 'react-select/async';
import makeAnimated from 'react-select/animated'; // Asegúrate de haber instalado 'react-select/animated'
import { useAuthStore } from '../../store/user';
import { API_URL } from '../../pages/api/constants';
import { useFunctions } from '../../context/AppProvider';


export const DirectionSelection = ({setIdDirection}) => {
  const { id } = useAuthStore();
  const [initialOptions, setInitialOptions] = useState(null); // Estado para las opciones iniciales

  const {getRefreshToken, getAccessToken} = useFunctions()

 
    // Obtener las opciones iniciales (por ejemplo, desde tu API)
    const fetchInitialOptions = async () => {

      const token = getAccessToken()
      try {
        const response = await fetch(`${API_URL}user-direction`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            id,
          }),
        });

        const { data } = await response.json();
        console.log(data)
        const options = data.map((ubicacion) => ({
          value: `${ubicacion.id_direccion}`,
          label: `calle ${ubicacion.calle}, ${ubicacion.zona} / ${ubicacion.nombre_ciudad}, municipio: ${ubicacion.nombre_municipio}`,
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
        setIdDirection(selectedOption.value);
      }}
      placeholder='sus direcciones'
      loadOptions={fetchInitialOptions} // Pasar las opciones iniciales al componente
      components={makeAnimated()} // Agregar animaciones si lo deseas
      required
    />
  );
};


// export const DirectionSelection = () => {
    
//     const { id } = useAuthStore();
//     const [defaultOption, setDefaultOption] = useState(null)
//     const [options, setOptions] = useState('')


//   const loadOptions = async (inputValue, callback) => {
//     try {
//       const response = await fetch(`${API_URL}user-direction`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           id
//         })
//       });

//       // Parse the response and extract the data you need
//       const {data} = await response.json();
//       console.log(data)

      
//       const options = data.map((ubicacion)=>(
//         { 
//           value: `calle ${ubicacion.calle}, ${ubicacion.zona} / ${ubicacion.nombre_ciudad}, municipio: ${ubicacion.nombre_municipio} `,
//           label: `calle ${ubicacion.calle}, ${ubicacion.zona} / ${ubicacion.nombre_ciudad}, municipio: ${ubicacion.nombre_municipio}`
//         }
//       ))
    
//       callback(options)
//     } catch (error) {
//       console.error(error);
//     }
//   };



//   return (
    
//       <AsyncSelect
//         defaultOptions
//         onChange={(selectedOption)=>{
//             console.log(selectedOption)
//         }}
//         loadOptions={loadOptions}
//         defaultValue={defaultOption}
//       />
    
//   );
// };

