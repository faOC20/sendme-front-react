import { useProductsStore } from "../../store/products"
import { useEffect } from "react"
import { ProductSlot } from "./ProductSlot"

export const HorizontalCategory = ({catName})=>{

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

    return(
        <section className="category-section-container">
            <h1 className="text-center text-2xl font-bold p-3">
              {catName}
            </h1>

            <div className="flex w-full h-full justify-center">
                
            {
                results.map((data)=>(
                  <div className="flex flex-col w-1/3 h-3/4 m-2">
                    <ProductSlot 
                          key={data.name}
                          name={data.name}
                          
                      />
                  </div>
                  ))
              }

            </div>
          </section>
    )
}