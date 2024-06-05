import React, { useEffect, useState } from 'react';
import AsyncSelect from 'react-select/async';
import makeAnimated from 'react-select/animated'; // Asegúrate de haber instalado 'react-select/animated'
import { useAuthStore } from '../../store/user';
import { API_URL } from '../../pages/api/constants';

const animatedComponents = makeAnimated();

export const CellSelection = () => {
    
    const { id } = useAuthStore();
    const [defaultOption, setDefaultOption] = useState(null)
    const [loadedOption, setLoadedOption] = useState(false)


  const loadOptions = async (inputValue, callback) => {
    try {
      const response = await fetch(`${API_URL}profile-data`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id
        })
      });

      // Parse the response and extract the data you need
      const data = await response.json();
      const optionsFromServer = [{
        value: data.telefono_usuario,
        label: data.telefono_usuario // Adjust this based on your server response
      }];
      
      callback(optionsFromServer)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    
      <AsyncSelect
        cacheOptions
        defaultOptions
        onChange={(selectedOption)=>{
            console.log(selectedOption)
        }}
        loadOptions={loadOptions}
       
      />
    
  );
};

