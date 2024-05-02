import { useProductsStore } from "../../../store/products"
import { useEffect } from "react"
import { ProductSlot } from "../ProductSlot"

export const AutomotorCategory = ({name})=>{
    const {automotorsProducts, fetchAutomotorsProducts, loadingAutomotors, error} = useProductsStore()

    useEffect(()=>{
        fetchAutomotorsProducts()
    },[fetchAutomotorsProducts])
    
    if (loadingAutomotors) {
        return (
          <>
            <div>Cargando...</div>
          </>
        )
      }
    
      if (error) {
        return <div>{error}</div>
      }

    return (
      <section className="category-section-container flex-col items-center">
            <h1 className="text-center text-2xl font-bold p-3">
              {name}
            </h1>

            {
                automotorsProducts.map((data)=>(
                  <div className="flex w-3/4 h-3/4 mb-4">
                    <ProductSlot 
                          key={data.asin}
                          id={data.asin}
                          photo={data.product_photo}
                          name={data.product_title}
                      />
                  </div>
                  )).slice(0,1)
              }
              
          </section>
    )
}
