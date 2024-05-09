import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProductsStore } from '../store/products';
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';
import './ProductPage.css'

export const ProductPage = () => {
	const { getClickedProduct } = useProductsStore();
	const[active, setActive]=useState(false)
	const [loading, setLoading] = useState(true);
	const [product, setProduct] = useState({});
	const [productPhoto, setProductPhoto] = useState('')
	const [amount, setAmount] = useState(0)

	const { id } = useParams();

	const fetchProduct = async id => {
		const data = await getClickedProduct(id);
		setProduct(data);
		setLoading(false);
		setProductPhoto(data.product_photo)
	};

	useEffect(() => {
		fetchProduct(id);
	}, []);

    return(
        <>
            
                <>
					<Header/>

					
		
					<main className="main-container flex justify-center items-center">
					{loading?(
						
						<div className='flex justify-center items-center w-24 h-28 border border-navigation rounded-3xl'>Cargando...</div>
						
                
           			 ):(
						<section className="w-full h-full flex flex-col content-center z-10">
						
						<section className="product-info-container">
							
							<div className='product-images rounded-3xl shadow-detail flex flex-col overflow-hidden items-center justify-center'>
								{
									product.product_photos.map(photo=>(
										<button className='w-fit m-2' onClick={()=>{
											setProductPhoto(photo)
											setActive(true)
										}}>
											<picture>
												<img  className='flex-grow w-24' src={photo} alt={`imagen de ${product.product_title}`}/>
											</picture>
										</button>
									)).slice(0,3)
								}
							</div>
							
							<div className='product-image-viewer rounded-3xl shadow-detail flex overflow-hidden  items-center justify-center'>
								<picture>
									<img className='w-80' src={productPhoto} alt={`imagen de ${product.product_title}`} />
								</picture>
							</div>
							
							<div className='product-selection rounded-3xl shadow-detail flex overflow-hidden p-3'>
								
								<div className='w-7/12 h-full p-3 flex flex-col'>
									<h1>{product.product_title}</h1>
									<div className='flex justify-evenly mt-4'>
										{
											product.product_variations.color?.map((variation_color)=>(
												<button>
													<img className='w-12' src={variation_color.photo} alt={`variacion de ${product.product_title}`}/>
												</button>
											))
										} 
									</div>

									<div className='flex flex-col w-6/12 mt-4'>
										<b>Capacidad</b>
										<div className='flex justify-between'>
										{
											product.product_variations.size?.map((variation_size)=>(
												<button className='w-fit'>
													<button>{variation_size.value}</button>
												</button>
											))
										}
										</div>
									</div>

									<div className='mt-4'>
										<b>Estado</b>

									</div>
								</div>

								<div className='w-5/12 h-full p-3 border-2 rounded-3xl flex flex-col justify-between'>
									<div className='flex-flex-col w-full'>
										<b className='text-lg'>{product.product_price} USD</b>

										<div className='flex'>
											cantidad: {amount}
											<button onClick={()=>{
												setAmount(amount+1)
											}}>+</button>
										</div>
									</div>

									<div className='flex flex-col'>
										<button className='rounded-full bg-main-decoration p-2 mt-3'>Añadir al carrito</button>
										<button className='rounded-full bg-navigation text-white mt-3 p-2'>Comprar ahora</button>
									</div>

									<div className='bg-yellow-400'>
										PNG DE METODOS DE PAGO
									</div>

									<button className='rounded-full border'>Añadir a la lista de deseos</button>
								</div>
							</div>
							
							<div className="product-info rounded-3xl shadow-detail  overflow-auto overflow-x-hidden">
								<div className='p-3'>
									<b>Acerca de este articulo</b>
									<h1>{product.product_description}</h1>
									{/* <p>{product.product_information}</p> */}
								</div>
							</div>
						</section>
						
						</section>
						)}
					</main>
					

					<Footer/>
				</>
            
        </>
    )
}