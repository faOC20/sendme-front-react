import { useProductsStore } from "../../../store/products"
import { useEffect } from "react"
import { ProductSlot } from "../ProductSlot"

export const AutomotorCategory = ({name})=>{
    const {automotorsProducts, fetchAutomotorsProducts, loadingAutomotors, error} = useProductsStore()

    useEffect(()=>{
        if(!automotorsProducts){
          fetchAutomotorsProducts()
        }
    },[automotorsProducts])
    
    if (loadingAutomotors) {
        return (
          <>
            <div>Cargando...</div>
          </>
        )
      }
    
      if (error&&!automotorsProducts) {
        return <div>{error}</div>
      }

    return (
      <section className="category-section-container flex-col items-center phone:hidden">
            <h1 className="text-center text-2xl font-bold p-3">
              {name}
            </h1>

            {
                automotorsProducts.filter((product)=>product.product_price && product.product_price.includes('$'))
                .map((data)=>(
                  <div className="flex justify-center items-center">
                    <ProductSlot 
                          key={data.asin}
                          id={data.asin}
                          photo={data.product_photo}
                          name={data.product_title}
                          price = {data.product_price}
                      />
                  </div>
                  )).slice(0,1)
              }
              
          </section>
    )
}
