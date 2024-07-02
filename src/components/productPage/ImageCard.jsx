import { useEffect, useState } from "react"
import { useClickedProductStore} from '../../store/products';


export const ImageCard = ({photo, setProductPhoto, activePhoto, setActivePhoto, clickedProduct})=>{

    // const {clickedProduct} = useClickedProductStore();

    useEffect(()=>{
        setActivePhoto(clickedProduct.product_photo)
    },[])
    
    return (
        <button className='w-fit m-2' onClick={()=>{
            setProductPhoto(photo)
            setActivePhoto(photo)
        }}>
            <picture>
                <img  className={`rounded-lg flex-grow w-24 ${activePhoto===photo?'border-2 border-navigation p-1':''}`} src={photo} alt={`imagen de ${clickedProduct.product_title}`}/>
            </picture>
        </button>
    )
}

