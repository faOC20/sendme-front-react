

export const Category = ({category})=>{

    const handleClick = (e)=>{
        e.preventDefault()
        window.location.href = `/search/${category}`;   
        localStorage.removeItem('searching-storage')
    }

    return (
        
        <li className='p-3'>
            <a href="#" onClick={handleClick}>
                {category}
            </a>
        </li>
        
        
    )
}


