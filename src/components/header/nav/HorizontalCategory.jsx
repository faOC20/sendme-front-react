export const HorizontalCategory = ({category})=>{

    const handleClick = ()=>{
        window.location.href = `/search/${category}`;   
        localStorage.removeItem('searching-storage')
    }

    return (
        <>
             <li class="individualCategory h-full flex items-center z-20 grow justify-center w-full">
                    <a href="javascript:void(0)" onClick={handleClick}>{category}</a>
            </li>
        </>
    )
}