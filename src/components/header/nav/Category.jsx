

export const Category = ({category})=>{

    const handleClick = ()=>{
        window.location.href = `/search/${category}`;   
        localStorage.removeItem('searching-storage')
    }

    return (
        
        <li className='p-3'>
            <a href="javascript:void(0)" onClick={handleClick}>
                {category}
            </a>
        </li>
        
        
    )
}


