import { useState } from "react"
import { uploadFile } from "../../firebase/config"

export const FileUpload = ({setUrlReference})=>{

   

    const handleChange = async(e)=>{
        const result = await uploadFile(e.target.files[0])
        setUrlReference(result)
    }

    return (
        <input type="file" onChange={handleChange} required/>
    )
}   