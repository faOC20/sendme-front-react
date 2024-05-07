import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProductsStore } from '../store/products';
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';
import './ProductPage.css'

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
						<section className="product-info-container">
							
							<div className='product-images rounded-3xl shadow-detail flex flex-col overflow-hidden items-center justify-center'>
								{
									product.product_photos.map(photo=>(
										<picture className='m-2'>
											<img  className='flex-grow w-24' src={photo} alt={`imagen de ${product.product_title}`}/>
										</picture>
									)).slice(0,3)
								}
							</div>
							
							<div className='product-image-viewer rounded-3xl shadow-detail flex overflow-hidden  items-center justify-center'>
								<picture>
									<img className='w-80' src={product.product_photo} alt={`imagen de ${product.product_title}`} />
								</picture>
							</div>
							
							<div className='product-selection rounded-3xl shadow-detail flex overflow-hidden p-3'>
								
								<div className='w-7/12 h-full p-3'>
									<h1>{product.product_title}</h1>
								</div>

								<div className='w-5/12 h-full p-3 border-2 rounded-3xl flex flex-col'>
									<b className='text-lg'>{product.product_price} USD</b>

									<p>
										Cantidad: 1
									</p>

									<button className='rounded-full bg-main-decoration p-2 mt-3'>Añadir al carrito</button>
									<button className='rounded-full bg-navigation text-white mt-3 p-2'>Comprar ahora</button>
								</div>
							</div>
							
							<div className="product-info rounded-3xl shadow-detail">
								<div className='p-3'>
									<b>Acerca de este articulo</b>
									<h1>{product.product_title}</h1>
								</div>
							</div>
						</section>
					</main>

					<Footer/>
				</>
            )}
        </>
    )
}