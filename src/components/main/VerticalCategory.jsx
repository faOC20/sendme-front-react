import { useProductsStore } from "../../store/products"
import { useEffect } from "react"
import { ProductSlot } from "./ProductSlot"

export const VerticalCategory = ({catName})=>{

    const {results, fetchProducts, loading, error} = useProductsStore()

    useEffect(()=>{
        fetchProducts()
    },[fetchProducts])
    
    if (loading) {
        return (
          <>
            <MainHeader/>
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
              {catName}
            </h1>

            {
                results.map((data)=>(
                  <div className="flex w-3/4 h-3/4 mb-4">
                    <ProductSlot 
                          key={data.name}
                          name={data.name}
                          
                      />
                  </div>
                  ))
              }
              
          </section>
    )
}