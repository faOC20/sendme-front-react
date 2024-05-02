import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProductsStore } from '../store/products';
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';

export const ProductPage = () => {
	const { getClickedProduct } = useProductsStore();

	const [loading, setLoading] = useState(true);
	const [product, setProduct] = useState({});

	const { id } = useParams();

	const fetchProduct = async id => {
		const data = await getClickedProduct(id);
		setProduct(data);
		setLoading(false);
	};

	useEffect(() => {
		fetchProduct(id);
	}, []);

    return(
        <>
            {loading?(
                <div>cargando</div>
            ):(
                <>
					<Header/>
		
					<main className="main-container flex flex-col content-center z-10">
						HOLA
					</main>

					<Footer/>
				</>
            )}
        </>
    )
}