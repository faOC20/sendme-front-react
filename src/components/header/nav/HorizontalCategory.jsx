export const HorizontalCategory = ({category})=>{

    const handleClick = (e)=>{
        e.preventDefault()
        window.location.href = `/search/${category}`;   
        localStorage.removeItem('searching-storage')
    }

    return (
        <>
             <li className="individualCategory h-full flex items-start z-20 justify-center flex-grow ">
                    <a href="#" onClick={handleClick}>{category}</a>
            </li>
        </>
    )
}