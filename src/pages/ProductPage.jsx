import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useClickedProductStore} from '../store/products';
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';
import './ProductPage.css'
import { Charging } from '../components/miscellaneos/Charging';
import { Error } from '../components/miscellaneos/Error';
import { ImageCard } from '../components/productPage/ImageCard';
import { VariationCard } from '../components/productPage/VariationCard';
import { SizeVariationCard } from '../components/productPage/SizeVariationCard';

export const ProductPage = () => {
	const { getClickedProduct, error, clickedProduct} = useClickedProductStore();
	const[activePhoto, setActivePhoto]=useState(false)
	const [loading, setLoading] = useState(true);
	const [productPhoto, setProductPhoto] = useState(null)
	const [amount, setAmount] = useState(0)
	const [price, setPrice]= useState(0)
	const[activeVariation, setActiveVariation] = useState(false)
	const[activeSize, setActiveSize] = useState(false)

	const { id } = useParams();

	const fetchProduct = async id => {
		await getClickedProduct(id);
		setLoading(false);
		setProductPhoto(clickedProduct.product_photo)
	};

	useEffect(() => {
		if(!clickedProduct){
			
			fetchProduct(id);
		}

		else{
			setLoading(false)
			setProductPhoto(clickedProduct.product_photo)	
		}
		
	}, []);

	useEffect(() => {
		if (clickedProduct) {
		  setProductPhoto(clickedProduct.product_photo);
		  setPrice(clickedProduct.product_price)
		}
	  }, [clickedProduct]);

	

	if (loading) {
        return (
          <>
			<Charging/>
          </>
        )
    }

	if (error && !clickedProduct) {
		console.log('entre aqui')
        return (
			<>
				<Error/>
			</>
		)
      }


    return(
        
			
            
                <>
					<Header/>

					
		
					<main className="main-container flex justify-center items-center">
						
                
           			
						<section className="w-full h-full flex flex-col content-center z-10">
						
						<section className="product-info-container">
							
							<div className='product-images rounded-3xl shadow-detail flex flex-col overflow-hidden items-center justify-center'>
								{
									clickedProduct.product_photos.map(photo=>(
										<ImageCard photo={photo} setProductPhoto={setProductPhoto} activePhoto={activePhoto} setActivePhoto={setActivePhoto}/>
									)).slice(0,3)
								}
							</div>
							
							<div className='product-image-viewer rounded-3xl shadow-detail flex overflow-hidden  items-center justify-center'>
								<picture>
									<img className='max-w-72 rounded-lg' src={productPhoto} alt={`imagen de ${clickedProduct.product_title}`} />
								</picture>
							</div>
							
							<div className='product-selection rounded-3xl shadow-detail flex overflow-hidden p-3'>
								
								<div className='w-7/12 h-full p-3 flex flex-col'>
									<b className='text-lg'>{clickedProduct.product_title}</b>
									<div className='flex flex-wrap mt-4 max-h-80 justify-center overflow-y-auto'>
										{
											clickedProduct.product_variations.color?.map((variation_color)=>(
												<VariationCard variation_color={variation_color} setActiveVariation = {setActiveVariation} activeVariation={activeVariation}/>
											))
										} 
									</div>

									<div className='flex flex-col w-10/12 mt-4'>
										
										{
											clickedProduct.product_variations.size?(
												<div>
													<b>Tamaño:</b> 
												</div>
											):(
												<></>
											)
										}

										<div className='flex flex-wrap'>
										{
											clickedProduct.product_variations.size?.map((variation_size)=>(
												<SizeVariationCard variation_size={variation_size} setActiveSize={setActiveSize} activeSize={activeSize}/>
											))
										}
										</div>
									</div>

	
								</div>

								<div className='w-5/12 h-full p-3 border-2 rounded-3xl flex flex-col justify-between'>
									<div className='flex-flex-col w-full'>
										<b className='text-lg'>{price} USD</b>

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
									<p className='mb-2'>{clickedProduct.product_description}</p>
									
									<section className='flex flex-col'>
										
										{
											Object.entries(clickedProduct.product_information).map(([key, value]) => (
												<div>
													<b>{`${key}: `}</b>
													{value}
												</div>

											))
										}
										
									</section>
								</div>
							</div>
						</section>	
						
						</section>
						
					</main>
					

					<Footer/>
				</>
            
    
    )
}

