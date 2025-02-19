import { useProductsStore } from "../../../store/products"
import { useEffect, useState } from "react"
import { ProductSlot } from "../ProductSlot"
import { MainHeader } from "../mainHeader/MainHeader"

export const HomeCategory = ({name})=>{
    const {homeProducts, fetchHomeProducts, loadingHome, error} = useProductsStore()

    useEffect(()=>{
        if (!homeProducts){
          fetchHomeProducts()
        }
    },[homeProducts])
    
    if (loadingHome) {
        return (
          <>
            <div>Cargando...</div>
          </>
        )
      }
    
      if (error&&!homeProducts) {
        return <div>{error}</div>
      }

    return (
      <section className="category-section-container">
      <h1 className="text-center text-2xl font-bold p-3">
        {name}
      </h1>

      <div className="flex w-full h-full justify-center items-center pb-5 pl-5 pr-5">
          
      {
          homeProducts.filter((product)=>product.product_price && product.product_price.includes('$'))
          .map((data)=>(
            <div className="flex flex-col m-2 phone:justify-center phone:items-center">
              <ProductSlot 
                    key={data.asin}
                    id={data.asin}
                    photo={data.product_photo}
                    name={data.product_title}
                    price = {data.product_price}
                    
                />
            </div>
            )).slice(0,3)
        }

      </div>
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
