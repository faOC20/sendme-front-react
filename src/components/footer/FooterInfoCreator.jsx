export const FooterInfoCreator = ({title, links})=>{
   
    return(
        <li className="flex grow pt-2">
            <div className="flex flex-col items-center w-full">
                <b>
                    {title}
                </b>
                
                <div className='flex flex-col'>
                {
                    links.map((link)=>(
                        <a href="hola" className='text-xs w-full text-start pt-1'>
                            {link}
                        </a>
                    ))
                }

                

                </div>
                
            </div>
        </li>
    )
    
}
