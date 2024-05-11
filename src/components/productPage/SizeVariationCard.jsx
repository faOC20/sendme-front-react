import { useEffect } from "react"
import { useClickedProductStore } from "../../store/products"


export const SizeVariationCard = ({variation_size, setActiveSize, activeSize})=>{


    const {clickedProduct} = useClickedProductStore()

    useEffect(()=>{
        if (variation_size.asin === clickedProduct.asin){
            setActiveSize(variation_size)
        }
    },[variation_size])

    return (
        <>
            <a href={`/product/${variation_size.asin}`} onClick={()=>{
                setActiveSize(variation_size)
                if (variation_size.asin===clickedProduct.asin){
                    localStorage.removeItem('productpage-storage');
                }
                
            }} className={`w-fit m-1 border rounded-lg p-2 ${activeSize===variation_size?'border-2 border-navigation rounded-lg':''}`}>
                <b>{variation_size.value}</b>
            </a>
        </>
    )
}