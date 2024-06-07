import { useEffect, useState } from "react";
import { API_URL } from "../../pages/api/constants";
import { useAuthStore } from "../../store/user";

export const FetchCell = ()=>{

    const {id} = useAuthStore()
    const [cell, setCell] = useState([])
    
   useEffect(()=>{
    const fetchCell = async()=>{
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
            console.log(data)
            setCell([...cell, data.telefono_usuario])
            
          } catch (error) {
            console.error(error);
          }
       }

       fetchCell()
   },[id])
    
   return (
    <>
      {cell.map((cellItem, index) => (
        <b key={index}>{cellItem}</b>
      ))}
    </>
  );
};