import { useProductsStore} from "../../../store/products"
import { useEffect } from "react"
import { ProductSlot } from "../ProductSlot"
import { ElectronicSkeleton } from "../skeletons/ElectronicSkeleton"

export const ElectronicCategory = ({name})=>{
    const {electronicProducts, fetchElectronicProducts, loadingElectronic, error} = useProductsStore()

    useEffect(()=>{
      if(!electronicProducts){
        fetchElectronicProducts()
      }
    },[electronicProducts])
    
   
      if (error&&!electronicProducts) {
        return <div>{error}</div>
      }

    return (
      loadingElectronic? (
        <ElectronicSkeleton/>
      ):(
        <section className="category-section-container">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <h1 className="text-center text-2xl font-bold p-3">
        {name}
      </h1>

      <div className="flex w-full h-full justify-center items-center pb-5 pl-5 pr-5">
          
      {
          electronicProducts.filter((product)=>product.product_price && product.product_price.includes('$'))
          .map((data)=>(
            <div className="flex flex-col w-full h-full m-2 phone:justify-center phone:items-center">
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
