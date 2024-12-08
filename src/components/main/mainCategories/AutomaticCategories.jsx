import sambaShoes from '../../../assets/images/sambaShoes.webp'

export const AutomaticCategories = ({automaticCategory})=>{
    return (
        <>
            <section className='z-50 w-full flex flex-grow justify-center items-center flex-col gap-3'>
                        <div className='w-[70%] flex flex-col gap-3'>
                        <h1 className=' text-header text-md font-[550] text-start'>
                            {automaticCategory.title}
                        </h1>
                        
                        <p className=' text-header text-5xl font-[600] text-start'>
                            {automaticCategory.subtitle}
                        </p>

                        <div className='flex justify-start '>
                            <a href={`/search/${automaticCategory.search}`} className='bg-navigation p-2 rounded-md text-white text-lg'>
                                Ver más
                            </a>
                        </div>
                        </div>

                        
                        
                    </section>

                    <div className='z-40 flex-grow flex justify-end pr-5 '>
                    <picture className='w-[300px]'>
                        <img src={automaticCategory.image} className='object-contain' alt=""/>
                    </picture>
                    </div>
        </>
    )
}