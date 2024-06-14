import { Link } from "react-router-dom"

export const BuyButton = ()=>{

    return (
        <>
            <Link to='/purchase'>
            <button className='rounded-full bg-navigation text-white mt-1 p-2'>Comprar ahora</button>
            </Link>
        </>
    )
} 