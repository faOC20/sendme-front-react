import { useProductsStore } from "../../../store/products"
import { useEffect } from "react"
import { ProductSlot } from "../ProductSlot"
import { ClothesSkeleton } from "../skeletons/ClothesSkeleton"

export const ClothesCategory = ({name})=>{
    const {clothesProducts, fetchClothesProducts, loadingClothes, error} = useProductsStore()

    useEffect(()=>{
        if(!clothesProducts){
          fetchClothesProducts()
        }
    },[clothesProducts])
    
    
      if (error&&!clothesProducts) {
        return <div>{error}</div>
      }

    return (
     loadingClothes?(
      <ClothesSkeleton/>
     ):(
      <section className="category-section-container overflow-x-auto ">
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
    <h1 className="text-center text-2xl font-bold p-3">
      {name}
    </h1>

    <div className="flex w-full h-full justify-center items-center pb-5 pl-5 pr-5">
        
    {
        clothesProducts.filter((product)=>product.product_price && product.product_price.includes('$'))
        .map((data)=>(
          <div className="flex flex-col m-2 phone:w-full phone:m-1">
            <ProductSlot 
                  key={data.asin}
                  id={data.asin}
                  photo={data.product_photo}
                  name={data.product_title}
                  price = {data.product_price}
                  
              />
          </div>
          )).slice(0,6)
      }

    </div>
  </section>
     )
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
