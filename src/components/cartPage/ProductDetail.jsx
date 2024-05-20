import { TrashIcon } from '../../assets/icons/TrashIcon'
import '../../pages/CartPage.css'
import { useShoppingCartStore } from '../../store/products'
export const ProductDetail = ({product})=>{

    const {deleteToCart} = useShoppingCartStore()

    const handleTrash = ()=>{
        deleteToCart(product)
    }

    return (
        <section className=" h-40 w-full rounded-3xl shadow-detail mb-4 flex overflow-hidden">
            
            <div className='h-full flex items-center justify-center p-2 '>
                <div className='w-32'>
                    <picture>
                        <img className='w-fit' src={product.product_photo} alt="" />
                    </picture>
                    </div>
            </div>

            <div className='flex w-3/4 flex-col h-full justify-center items-center p-2 '>
                
                 <div className='w-11/12'>
                 <p className='h-4/5 flex items-center  text-start'>
                        {product.product_title}
                    </p>
                

               
                    <b className='h-11 flex  items-center text-start'>
                        cantidad: {product.amount}
                    </b>
                 </div>
               
            </div>

            <div className='flex justify-around items-center w-32 flex-col'>
                <b>
                    {product.product_price}
                </b>

                <button onClick={handleTrash}>
                    <TrashIcon/>
                </button>
            </div>

                
            
        </section>
    )
}