import { useEffect } from "react"
import { useClickedProductStore } from "../../store/products"

export const VariationCard = ({variation_color, setActiveVariation, activeVariation, clickedProduct})=>{

    // const {clickedProduct} = useClickedProductStore()

    useEffect(()=>{
        if (variation_color.asin === clickedProduct.asin){
            setActiveVariation(variation_color)
        }
        
    },[variation_color])

    return (
        <>
            <button onClick={()=>{
                
            }}>
               <a href={`/product/${variation_color.asin}`} onClick={()=>{
                setActiveVariation(variation_color)
                if (variation_color.asin!==clickedProduct.asin){
                    localStorage.removeItem('productpage-storage');
                }
                
            }}>
                 <img className={`w-16 m-2 shadow-detail rounded-lg ${activeVariation===variation_color?'border-2 border-navigation rounded-lg p-1': ''}`} src={variation_color.photo} alt={`variacion de ${clickedProduct.product_title}`}/>
            </a>
            </button>
        </>
    )
}

