import { useProductsStore } from "../../../store/products"
import { useEffect } from "react"
import { ProductSlot } from "../ProductSlot"
import { HealthSkeleton } from "../skeletons/HealthSkeleton"

export const HealthCategory = ({name})=>{
    const {healthProducts, fetchHealthProducts, loadingHealth, error} = useProductsStore()

    useEffect(()=>{
        if(!healthProducts){
          fetchHealthProducts()
        }
    },[healthProducts])
    
      if (error&&!healthProducts) {
        return <div>{error}</div>
      }

    return (
      loadingHealth?(
        <HealthSkeleton/>
      ):
      (
        <section className="category-section-container flex-col items-center phone:hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <h1 className="text-center text-2xl font-bold p-3 phone:hidden">
              {name}
            </h1>

           <div className="w-full h-full flex flex-col justify-around items-center">
           {
                healthProducts.filter((product)=>product.product_price && product.product_price.includes('$'))
                .map((data)=>(
                  <div className="flex justify-self-center" key={data.asin}>
                    <ProductSlot 
                          
                          id={data.asin}
                          photo={data.product_photo}
                          name={data.product_title}
                          price = {data.product_price}
                      />
                  </div>
                  )).slice(0,2)
              }
           </div>
              
          </section>)
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