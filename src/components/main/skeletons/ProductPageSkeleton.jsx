import '../../../pages/ProductPage.css'

export const ProductPageSkeleton = ()=>{
    return (
        <section className="product-info-container">
                                    
                                    <div className='product-images rounded-3xl shadow-detail flex flex-col items-center justify-center phone:hidden bg-gray-300 gap-6 animate-pulse'>
                                        <div className='w-[96px] h-[96px] bg-gray-200 animate-pulse rounded-lg'>

                                        </div>
                                        <div className='w-[96px] h-[96px] bg-gray-200 animate-pulse rounded-lg'>

</div>
<div className='w-[96px] h-[96px] bg-gray-200 animate-pulse rounded-lg'>

</div>
                                    </div>
                                    
                                    <div className='product-image-viewer rounded-3xl shadow-detail flex overflow-hidden  items-center justify-center bg-gray-300 animate-pulse'>
                                        <div className='h-[320px] w-[320px] rounded-lg bg-gray-200 animate-pulse'>

                                        </div>
                                    </div>
                                    
                                    <div className='product-selection rounded-3xl shadow-detail flex overflow-hidden p-3 bg-gray-300 animate-pulse'>
                                        
                                        <div className='w-7/12 h-full p-3 flex flex-col gap-5 justify-center'>
                                            <div className='flex bg-gray-200 animate-pulse w-full h-10 rounded-full  '></div>

                                            <div className='flex bg-gray-200 animate-pulse w-full h-10 rounded-full '></div>

                                            <div className='flex bg-gray-200 animate-pulse w-full h-10 rounded-full '></div>

                                            
        
            
                                        </div>
        
                                        <div className='w-5/12 h-full p-3 border-2 rounded-3xl flex flex-col gap-10 phone:w-6/12 phone:h-[300px] bg-gray-300 animate-pulse'>
                                           
        
                                            
        
                                        
                                        </div>
                                    </div>
                                    
                                    <div className="product-info rounded-3xl shadow-detail  overflow-auto overflow-x-hidden bg-gray-300 flex flex-col justify-center
                                     items-center gap-5 animate-pulse">
                                        <div className='p-3 text-start bg-gray-200 animate-pulse  w-[70%] rounded-full'>
                                            
                                        </div>

                                        <div className='p-3 text-start bg-gray-200 animate-pulse  w-[70%] rounded-full'>
                                            
                                            </div>

                                            <div className='p-3 text-start bg-gray-200 animate-pulse  w-[70%] rounded-full'>
                                            
                                            </div>

                                            
                                    </div>
                                </section>	)
    }
