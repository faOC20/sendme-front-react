export const UsdInfo = ({active, total})=>{
    
    return (
        <>
            {
                active?(
                    <div className="flex flex-col p-2">
                    <div className="w-full flex justify-center">
                        <div className="w-20 h-6">
                            <img className="w-fit" src={active.url} alt="" />
                        </div>
                    </div>
                    
                    <hr className="m-2"/>
                    
                    <div className="flex flex-col">
                        
                                
                        <p>{active.name} Pay</p>
                        <b>{active.email}</b>
                        <b>{active.accountId}</b>
                                
                            
                        
                    </div>

                    <hr className="m-2"/>

                    <div className="flex flex-col">
                    <p>{active.name} Pay</p>
                        <b>{active.email}</b>
                        <b>{active.accountId}</b>
                        
                    </div> 

                    <hr className="m-2"/>

                    {
                        active.name === 'Paypal'?(
                        <div className="flex items-center justify-center flex-col">
                            <b className="text-lg">
                                {total.toFixed(2)*(1+0.10)}$
                            </b>
                            <p className="text-xs text-gray-600">
                                Debido a las altas comisiones de este método de pago el valor de la orden aumenta en un 10%
                            </p>
                        </div>)
                        :
                        (<div className="flex items-center justify-center">
                        <b className="text-lg">
                            {total.toFixed(2)}$
                        </b>
                </div>)
                    }
                </div>
                ):(
                    <p className="font-semibold">
                        Por favor, seleccione su método preferencial para compras con dólares
                    </p>
                )
            }
        </>
    )

            
        
    
}