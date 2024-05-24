export const BuyButton = ()=>{

    const handleClick = ()=>{
        window.location.href = '/purchase'
    }

    return (
        <>
            <button onClick={handleClick} className='rounded-full bg-navigation text-white mt-1 p-2'>Comprar ahora</button>
        </>
    )
} 