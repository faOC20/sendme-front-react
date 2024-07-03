import { useProductsStore } from "../../../store/products"
import { useEffect } from "react"
import { ProductSlot } from "../ProductSlot"

export const GamingCategory = ({name})=>{
    const {gamingProducts, fetchGamingProducts, loadingGaming, error} = useProductsStore()

    useEffect(()=>{
        if(!gamingProducts){
          fetchGamingProducts()
        }
    },[gamingProducts])
    
    if (loadingGaming) {
        return (
          <>
            <div>Cargando...</div>
          </>
        )
      }
    
      if (error&&!gamingProducts) {
        return <div>{error}</div>
      }

    return (
        <section className="category-section-container flex-col items-center phone:hidden">
            <h1 className="text-center text-2xl font-bold p-3">
              {name}
            </h1>

            {
                gamingProducts.filter((product)=>product.product_price && product.product_price.includes('$'))
                .map((data)=>(
                    <div className="flex w-3/4 h-3/4 pb-5 justify-center">
                      <ProductSlot 
                            key={data.asin}
                            id={data.asin}
                            photo={data.product_photo}
                            name={data.product_title}
                            price = {data.product_price}
                        />
                </div>)).slice(0,1)
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