import { Footer } from "../components/footer/Footer"
import { Header } from "../components/header/Header"
import { Charging } from "../components/miscellaneos/Charging";
import { Error } from "../components/miscellaneos/Error";
import { useParams } from 'react-router-dom';
import { useSearchProductsStore } from "../store/products";
import { useEffect, useState } from "react";
import { ProductSlot } from "../components/main/ProductSlot";
import { numPages } from "../assets/constants/numPages";
import './SearchPage.css'
import { NumPageCard } from "../components/searchPage/NumPageCard";
import '../pages/PageStyles.css'
import { FixedWhatsapp } from "../components/miscellaneos/FixedWhatsapp";
import { FixedCart } from "../components/miscellaneos/FixedCart";


export const SearchPage = ()=>{

    const{getSearchProducts, searchedProducts, error} = useSearchProductsStore()
    const [loading, setLoading] = useState(true)
    const {query} = useParams();
    const [page, setPage] = useState(null)
    const [activePage, setActivePage] = useState(1)
    const [minPrice, setMinPrice] = useState(1)
    const [maxPrice, setMaxPrice] = useState(1000000)
    const [orderBy, setOrderBy] = useState('sort_by=RELEVANCE&')
    const [condition, setCondition] = useState("product_condition=ALL&")

    const filterQuery = (e)=>{
        console.log(orderBy)
        e.preventDefault()
        localStorage.removeItem('searching-storage')
        setLoading(true)
        fetchQuery(query,undefined, minPrice, maxPrice, orderBy, condition)
        setActivePage(1)    
    }


    const fetchQuery = async (query, page=1, minPrice=1, maxPrice=1000000, orderBy, condition="product_condition=ALL&") => {
		await getSearchProducts(query, page , minPrice, maxPrice, orderBy, condition);
		setLoading(false);
	};

    useEffect(()=>{
        

        if (!searchedProducts){
            fetchQuery(query)
        }

        else{
            setLoading(false)
        }

        

    },[])

    if (loading) {
        return (
          <>
			<Charging/>
          </>
        )
    }

	if (error && !searchedProducts) {
		console.log('entre aqui')
        return (
			<>
				<Error/>
			</>
		)
      }


    return (
        <div className="all-container">
            <Header/>
            <main className="main-container flex items-center flex-col">

                <div className="flex justify-center items-center w-full h-20">
                    <h1 className="text-2xl font-bold">
                        {query}
                    </h1>
                </div>

                <div className="flex w-full gap-5 pl-6 pr-6">

                    <div className="w-1/4 h-max flex flex-col  bg-white shadow rounded-3xl p-5 gap-5  phone:hidden">
                         <div>
                            <b>Filtros de búsqueda</b>
                            <hr/>
                         </div>
                        <div>
                        
                        <form className="flex flex-col gap-5" onSubmit={filterQuery}>
                            <div className="flex justify-center gap-2">

                                <label className="font-bold" for="orderBy">Ordenar por</label>
                                <select className="flex bg-transparent border text-center border-black rounded-full" required name="" id="orderBy" 
                                    onChange={(e)=>{
                                        console.log(e.target.value)
                                        setOrderBy(e.target.value)
                                        
                                        }}>

                                    <option value="" disabled selected>
                                        
                                    </option>
                                        
                                    <option value='sort_by=RELEVANCE&'>
                                        Todos
                                    </option>
                                    
                                    <option value="sort_by=LOWEST_PRICE&">
                                        Precio más bajo
                                    </option>

                                    <option value="sort_by=HIGHEST_PRICE&">
                                        Precio más alto
                                    </option>
                                </select>
                            </div>
                            
                            <div className="flex justify-center gap-2">
                            <label className="font-bold" for="condition">Condición</label>
                            <select className="bg-transparent border text-center border-black rounded-full" required  name="" id="condition" onChange={(e)=>{
                                setCondition(e.target.value)
                            }}>

                                <option value="" disabled selected>

                                </option>

                                <option value="product_condition=ALL&">
                                    Todos
                                </option>


                                <option value="product_condition=NEW&">
                                    Nuevo
                                </option>

                                <option value="product_condition=USED&">
                                    Usado
                                </option>

                                <option value="product_condition=RENEWED&">
                                    Reconstruido
                                </option>
                            </select>
                            </div>

                            <div className="flex flex-col w-full">
                            <b>Rango de precio ($)</b>
                            <div className="flex justify-center gap-2">
                                
                                    <input className="bg-transparent border-b border-black w-1/4 text-center" type="text" name="" id="" placeholder="min" onChange={(e)=>{
                                        setMinPrice(e.target.value)
                                    }}/> 
                                    <input className="bg-transparent border-b w-1/4 border-black text-center" type="text" placeholder="max" onChange={(e)=>{
                                        setMaxPrice(e.target.value)
                                    }} />
                               
                            </div>

                            

                        </div>

                        <div>
                            <button className="bg-navigation p-1 rounded-lg text-white">Buscar</button>
                        </div>
                        
                        
                        </form>
                        </div>
                    </div>
                    <div className="searched-container flex-grow">
                        {
                           searchedProducts
                           .filter(product => product.product_price && product.product_price.includes('$') && product.product_title && product.product_url && product.product_photo)
                           .map(searchedProduct => (
                               <ProductSlot
                                   key={searchedProduct.asin}
                                   id={searchedProduct.asin}
                                   photo={searchedProduct.product_photo}
                                   name={searchedProduct.product_title}
                                   price={searchedProduct.product_price}
                               />
                           ))
                        }
                    </div>
                </div>

              

                <div className=" flex w-full justify-center items-center mb-3">
                    <ol className="flex w-1/4 justify-around phone:w-2/3">

                    {
                        numPages.map((numPage)=>(
                            <NumPageCard numPage={numPage} fetchQuery={fetchQuery} query={query} setActivePage={setActivePage} activePage={activePage} setLoading={setLoading} minPrice={minPrice} maxPrice={maxPrice} condition={condition} orderBy={orderBy}/>
                        ))
                    }
                       


                    </ol>
                </div>

                        <FixedCart/>
						<FixedWhatsapp/>
					
            </main>
            <Footer/>
        </div>
    )
}