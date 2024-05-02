export const FooterInfoCreator = ({title, links})=>{
   
    return(
        <li class="flex grow pt-2">
            <div class="flex flex-col items-center w-full">
                <b>
                    {title}
                </b>
                
                <div class='flex flex-col'>
                {
                    links.map((link)=>(
                        <a href="hola" class='text-xs w-full text-start pt-1'>
                            {link}
                        </a>
                    ))
                }

                </div>
            </div>
        </li>
    )
    
}
