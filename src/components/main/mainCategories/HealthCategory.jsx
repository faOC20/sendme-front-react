import { useProductsStore } from "../../../store/products"
import { useEffect } from "react"
import { ProductSlot } from "../ProductSlot"

export const HealthCategory = ({name})=>{
    const {healthProducts, fetchHealthProducts, loadingHealth, error} = useProductsStore()

    useEffect(()=>{
        if(!healthProducts){
          fetchHealthProducts()
        }
    },[healthProducts])
    
    if (loadingHealth) {
        return (
          <>
            <div>Cargando...</div>
          </>
        )
      }
    
      if (error&&!healthProducts) {
        return <div>{error}</div>
      }

    return (
      <section className="category-section-container flex-col items-center phone:hidden">
            <h1 className="text-center text-2xl font-bold p-3 phone:hidden">
              {name}
            </h1>

            {
                healthProducts.filter((product)=>product.product_price && product.product_price.includes('$'))
                .map((data)=>(
                  <div className="flex w-2/4 h-2/4 justify-center">
                    <ProductSlot 
                          key={data.asin}
                          id={data.asin}
                          photo={data.product_photo}
                          name={data.product_title}
                          price = {data.product_price}
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