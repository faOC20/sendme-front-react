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


export const SearchPage = ()=>{

    const{getSearchProducts, searchedProducts, error} = useSearchProductsStore()
    const [loading, setLoading] = useState(true)
    const {query} = useParams();
    const [page, setPage] = useState(null)
    const [activePage, setActivePage] = useState('1')

    const fetchQuery = async (query, page='1') => {
		await getSearchProducts(query, page);
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

                    <div className="w-1/4 h-max flex flex-col  bg-white shadow rounded-3xl p-5 gap-5">
                         <div>
                            <b>Filtros de búsqueda</b>
                            <hr/>
                         </div>
                        <div>
                        
                        <form className="flex justify-center gap-2" action="#">
                            <label className="font-bold" for="orderBy">Ordenar por</label>
                            <select className="bg-transparent border text-center border-black rounded-full" name="" id="orderBy">
                                <option value="lowest-price">
                                    Precio más bajo
                                </option>

                                <option value="highest-price">
                                    Precio más alto
                                </option>
                        </select>
                        </form>
                        </div>

                       

                        <div>
                            
                            <form className="flex justify-center gap-2" action="#">
                            <label className="font-bold" for="condition">Cóndicion</label>
                            <select className="bg-transparent border text-center border-black rounded-full" name="" id="condition">
                                <option value="new">
                                    Nuevo
                                </option>

                                <option value="used">
                                    Usado
                                </option>

                                <option value="refurbished">
                                    Reconstruido
                                </option>
                            </select>
                            </form>
                        </div>


                        <div className="flex flex-col w-full">
                            <b>Rango de precio ($)</b>
                            <div className="flex justify-center gap-2">
                                
                                    <input className="bg-transparent border-b border-black w-1/4 text-center" type="text" name="" id="" placeholder="min" /> 
                                    <input className="bg-transparent border-b w-1/4 border-black text-center" type="text" placeholder="max" />
                               
                            </div>

                        </div>

                        <div>
                        <button className="bg-navigation p-1 rounded-lg text-white">Buscar</button>
                        </div>
                    </div>
                    <div className="searched-container flex-grow">
                        {
                            searchedProducts.map((searchedProduct)=>(
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
                    <ol className="flex w-1/4 justify-around">

                    {
                        numPages.map((numPage)=>(
                            <NumPageCard numPage={numPage} fetchQuery={fetchQuery} query={query} setActivePage={setActivePage} activePage={activePage} setLoading={setLoading}/>
                        ))
                    }
                       


                    </ol>
                </div>
            </main>
            <Footer/>
        </div>
    )
}