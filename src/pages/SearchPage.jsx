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

                <div className="searched-container w-full">
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