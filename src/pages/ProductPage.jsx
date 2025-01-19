import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useClickedProductStore, useShoppingCartStore} from '../store/products';
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';
import './ProductPage.css'
import { Charging } from '../components/miscellaneos/Charging';
import { Error } from '../components/miscellaneos/Error';
import { ImageCard } from '../components/productPage/ImageCard';
import { VariationCard } from '../components/productPage/VariationCard';
import { SizeVariationCard } from '../components/productPage/SizeVariationCard';
import '../pages/PageStyles.css'
import { BuyButton } from '../components/productPage/BuyButton';
import { FixedWhatsapp } from '../components/miscellaneos/FixedWhatsapp';
import { FixedCart } from '../components/miscellaneos/FixedCart';
import { ProductPageSkeleton } from '../components/main/skeletons/ProductPageSkeleton';
import { API_URL } from './api/constants';

// const url = 'https://real-time-amazon-data.p.rapidapi.com/search?page=1&country=US&category_id=aps&limit=3&offset=0';
//     const options = {
// 	method: 'GET',
// 	headers: {
//         'X-RapidAPI-Key': '9addabb7a7msh486d26bb02f3730p13f249jsn2d2006fa318d',
// 		'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
// 	}
// };

export const ProductPage = () => {

	const getClickedProduct = async (id)=>{

		
		try{
			const response = await fetch (`${API_URL}get-clicked-product-info`, {
				method: "POST",
				headers: {
					"Content-Type":"application/json"
				}, 
				body: JSON.stringify(
					{id,}
				),
			})

			const data = await response.json()
			console.log(data)

			if(data){
				return data
			}

			else return null
		}

		catch {
			return null
		}
	}

	const {savedProduct, setSavedProduct} = useClickedProductStore();
	const {cart, addToCart, deleteToCart } = useShoppingCartStore();

	const[activePhoto, setActivePhoto]=useState(false)
	const [loading, setLoading] = useState(true);
	const [productPhoto, setProductPhoto] = useState(null)
	const [amount, setAmount] = useState(1)
	const [price, setPrice]= useState(0)
	const [bsPrice, setBsPrice] = useState(0)
	const[activeVariation, setActiveVariation] = useState(false)
	const[activeSize, setActiveSize] = useState(false)
	const [inCart, setInCart] = useState(false)
	const [clickedProduct, setClickedProduct] = useState()
	const [error, setError] = useState(false)

	const { id } = useParams();

	const fetchProduct = async id => {
		try{
			const data = await getClickedProduct(id);
			setLoading(false);
			console.log(data)
			setProductPhoto(data.product_photo)
			setClickedProduct(data)
			setBsPrice(data.product_price.replace(/[\$,]/g, '')*36)
			setPrice(data.product_price.replace(/[\$,]/g, ''))
			setInCart(cart.some(product=>product.asin === data.asin))
			
			setSavedProduct(data)
		}
		catch(e){
			setError(true)
		}
	};

	useEffect(() => {

		if (!savedProduct){
			fetchProduct(id);
		}

		else {
			setLoading(false)
			setClickedProduct(savedProduct)
			setProductPhoto(savedProduct.product_photo)
			setBsPrice(savedProduct.product_price.replace(/[\$,]/g, '')*36)
			setPrice(savedProduct.product_price.replace(/[\$,]/g, ''))
			setInCart(cart.some(product=>product.asin === savedProduct.asin))
			console.log(savedProduct)
		}
		

	

	}, []);

	useEffect(()=>{
		if (cart && clickedProduct){
			setBsPrice(clickedProduct.product_price.replace(/[\$,]/g, '')*36*amount)
			setPrice(clickedProduct.product_price.replace(/[\$,]/g, '')*amount)
			setInCart(cart.some(product=>product.asin === clickedProduct.asin))
		}
	},[amount, cart])

	

	const handleTrash = ()=>{
		deleteToCart(clickedProduct)
	}

	const handleAdd = ()=>{
		addToCart({...clickedProduct, amount})
	}

	const handleBuyNow = ()=>{
		addToCart({...clickedProduct, amount})
		window.location.href = '/cart'
	}


	if (error && !savedProduct) {
		
        return (
			<>
				<Error/>
			</>
		)
      }


    return(
        
			
            
                <div className='all-container'>
					<Header/>

					
		
					<main className="main-container flex justify-center items-center">
						
                
           			
						{
							loading?(
								<section className="w-full h-full flex flex-col content-center z-10">
									<ProductPageSkeleton/>
								</section>
							):(
								
								<section className="w-full h-full flex flex-col content-center z-10">
						
						<section className="product-info-container">
							
							<div className='product-images rounded-3xl shadow-detail flex flex-col overflow-hidden items-center justify-center phone:hidden'>
								{
									clickedProduct.product_photos?(clickedProduct.product_photos.map(photo=>(
										<ImageCard photo={photo} setProductPhoto={setProductPhoto} activePhoto={activePhoto} setActivePhoto={setActivePhoto} clickedProduct={clickedProduct} key={photo}/>
									)).slice(0,3)):("")
								}
							</div>
							
							<div className='product-image-viewer rounded-3xl shadow-detail flex overflow-hidden  items-center justify-center'>
								<picture>
									<img className='max-h-[320px] rounded-lg' src={productPhoto} alt={`imagen de ${clickedProduct.product_title}`} />
								</picture>
							</div>
							
							<div className='product-selection rounded-3xl shadow-detail flex overflow-hidden p-3'>
								
								<div className='w-7/12 h-full p-3 flex flex-col'>
									<b className='text-lg text-start'>{clickedProduct.product_title}</b>
									<div className='flex flex-wrap mt-4 max-h-80 justify-center overflow-y-auto'>
										{
											clickedProduct.product_variations.color?.map((variation_color)=>(
												<VariationCard variation_color={variation_color} setActiveVariation = {setActiveVariation} activeVariation={activeVariation} clickedProduct={clickedProduct} key={variation_color.asin}/>
											))
										} 
									</div>

									<div className='flex flex-col w-10/12 mt-4'>
										
										{
											clickedProduct.product_variations.size?(
												<div className='flex'>
													<b className='text-start'>Tamaño:</b> 
												</div>
											):(
												<></>
											)
										}

										<div className='flex flex-wrap'>
										{
											clickedProduct.product_variations.size?.map((variation_size)=>(
												<SizeVariationCard variation_size={variation_size} setActiveSize={setActiveSize} activeSize={activeSize} clickedProduct={clickedProduct} key={variation_size.asin}/>
											))
										}
										</div>
									</div>

	
								</div>

								<div className='w-5/12 h-full p-3 border-2 rounded-3xl flex flex-col gap-10 phone:w-6/12 phone:h-[300px]'>
									<div className='flex-flex-col w-full'>
										
										<div className='flex flex-col justify-start'>
											<b className='text-2xl'>{price} USD</b>
											<b className='text-lg text-gray-500'>{new Intl.NumberFormat("de-DE").format(bsPrice)} Ves</b> 
											
										</div>
										

										<div className='flex justify-center'>
											{
												inCart?(
													<b className='mt-1 text-xs'>{amount} producto(s) agregado(s) al carrito</b>
												):(
													<div className='w-full flex items-center bg-gray-200 rounded-full p-1'>
												<button className='flex-grow text-red-500 font-bold text-lg' onClick={()=>{
													{
														amount<=1?(
															setAmount(1)
														):(setAmount(amount-1))
													}
												}}>-</button>
												
												<b className='flex-grow text-center'>cantidad: {amount}</b>
												
												<button className='flex-grow text-green-500 font-bold text-lg' onClick={()=>{
													amount>=2?(
														setAmount(2)
													):(setAmount(amount+1))
												}}>+</button>
											</div>
												)
											}
												
										</div>
									</div>


									<div className='flex flex-col'>
										{
											inCart?(
												<>
													<button className='rounded-full bg-red-500 p-2 mt-3 text-white' onClick={handleTrash}>Eliminar del carrito</button>
													
													<button className='rounded-full bg-navigation p-2 mt-3 text-white' onClick={()=>{
														window.location.href = '/cart'
													}}>Comprar ahora</button>
													
												</>
											):

											
											(
												<>
													{
														clickedProduct.product_availability !== null && Object.keys(clickedProduct.product_information).length > 0? (<>
															<button onClick={handleAdd} className='rounded-full bg-main-decoration p-2 mt-3'>Añadir al carrito</button>

															<button onClick={handleBuyNow}className='rounded-full text-white bg-navigation p-2 mt-3' >
																Comprar ahora
															</button>
														</>):(
															<>
																<b>
																	Articulo no disponible
																</b>
															</>
														)
													}
													
												</>
											)
												
											
										}
										<button>

										</button>
									</div>

									

									{/* <div className='flex flex-grow justify-center items-end'>
									<button className='rounded-full border'>Añadir a la lista de deseos</button>
									</div> */}
								</div>
							</div>
							
							<div className="product-info rounded-3xl shadow-detail  overflow-auto overflow-x-hidden">
								<div className='p-3 text-start'>
									<b>Acerca de este articulo</b>
									{
										clickedProduct.product_description?(<p className='mb-2'>{clickedProduct.product_description}</p>)
										:
										('')
										
									}
									
									<section className='flex flex-col'>
										
										{
											clickedProduct.product_information && Object.keys(clickedProduct.product_information).length > 0?(
												Object.entries(clickedProduct.product_information).map(([key, value]) => (
													<div key={key}>
														<b>{`${key}: `}</b>
														{value}
													</div>
	
												))
											):(
												''
											)

											
										}
										
									</section>
								</div>
							</div>
						</section>	
						
						</section>
							)
						}

						
						<div className='fixed z-[200] bottom-10 right-10'>
						<FixedCart/>
						<FixedWhatsapp/>
					</div>
						
					</main>
					

					<Footer/>
				</div>
            
    
    )
}

