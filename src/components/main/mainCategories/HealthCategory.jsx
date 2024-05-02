import { useProductsStore } from "../../../store/products"
import { useEffect } from "react"
import { ProductSlot } from "../ProductSlot"

export const HealthCategory = ({name})=>{
    const {healthProducts, fetchHealthProducts, loadingHealth, error} = useProductsStore()

    useEffect(()=>{
        fetchHealthProducts()
    },[fetchHealthProducts])
    
    if (loadingHealth) {
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
                healthProducts.map((data)=>(
                  <div className="flex w-2/4 h-2/4 mb-4">
                    <ProductSlot 
                          key={data.asin}
                          id={data.asin}
                          photo={data.product_photo}
                          name={data.product_title}
                      />
                  </div>
                  )).slice(0,2)
              }
              
          </section>
    )
}

/**
data.map((data)=>(
                  <div className="flex w-3/4 h-3/4 mb-4">
                    <ProductSlot 
                          key={data.name}
                          name={data.name}
                      />
                  </div>))
 */