export const VesInfo = ({active, bsTotal})=>{
    return(
        <>
            {
                active? (
                    

                    <div className="flex flex-col p-2">
                        <div className="w-full flex justify-center">
                            <div className={`w-24 flex items-center justify-center h-7 ${active.name === 'exterior'?"bg-blue-900 p-1 rounded-md":""}`}>
                                <img className="w-fit" src={active.url} alt="" />
                            </div>
                        </div>
                        
                        <hr className="m-2"/>
                        
                        <div className="flex flex-col">
                            <p>Transferencia</p>
                            <b>{active.accountHolder}</b>
                            <b>{active.accountNum}</b>
                            <b>{active.dni}</b>
                            <b>{active.accountType}</b>
                        </div>

                        <hr className="m-2"/>

                        <div className="flex flex-col">
                            <p>Pago móvil</p>
                            <b>{active.code}</b>
                            <b>{active.number}</b>
                            <b>{active.dni}</b>
                            
                        </div>

                        <hr className="m-2"/>

                        <div className="flex items-center justify-center">
                            <b className="text-lg">
                                {new Intl.NumberFormat("de-DE").format(bsTotal)} Bs
                            </b>
                        </div>
                       
                    </div>
                        
                    
                ) :
                
                (
                  <b>
                    Por favor, seleccione su banco nacional de preferencia
                  </b>
                )
            }

        </>
    )
}