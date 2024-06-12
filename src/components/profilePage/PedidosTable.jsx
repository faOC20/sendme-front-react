import { useEffect, useState } from "react"
import DataTable from "react-data-table-component"
import { API_URL } from "../../pages/api/constants"
import { useAuthStore } from "../../store/user"

export const PedidosTable = ()=>{

    const {id} = useAuthStore()

    const columns = [
        {
            name: 'ID pedido',
            selector: row=>row.idPedido,
            width:'6rem',
            compact: true,
            center:true
        },
        {
            name: 'Nombre',
            selector: row=>row.name,
            width:'7rem',
            compact: true,
            center:true
        }
        ,
        {
            name: 'Fecha',
            selector: row=>row.date,
            width:'7rem',
            compact: true,
            center:true
        }
        ,
        
        {
            name: 'Dirección de envío',
            selector: row=>row.direction,
            width:'7rem',
            compact: true,
            center:true

        }
        ,
        {
            name: 'Pago',
            selector: row=>row.precioTotal,
            width:'5rem',
            compact: true,
            center:true
         },
        
        {
            name: 'Estado',
            selector: row=>row.estado,
            width:'7rem',
            compact: true,
            center:true,
            cell: row => {
                let color;
                switch (row.estado) {
                    case 'en revisión':
                        color = 'red';
                        break;
                    case 'procesando':
                        color = 'yellow';
                        break;
                    case 'en camino':
                        color = 'orange';
                        break;
                    case 'completado':
                        color = 'green';
                        break;
                    default:
                        color = '';
                }
                return <div style={{color: color}}>{row.estado}</div>;
            }
        },
        {
            name: 'Producto/s',
            selector: row=>row.productos,
            width:'10rem',
            compact: true,
            center:true
        }
        ,
        {
            name: 'Factura',
            selector: row=>row.factura,
            width:'7rem',
            compact: true,
            center:true
        }
    ]


    const [data, setData] = useState([])

    useEffect(()=>{
        const getOrders = async()=>{
            try{
                const response = await fetch(`${API_URL}get-order`,{
                    method: "POST",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body: JSON.stringify({
                        id
                    }),
                })

                const data = await response.json()
                console.log(data)

                setData(data.map((pedido)=>(
                    {
                        idPedido:pedido.id_pedido,
                        name:pedido.nombre_usuario,
                        date:pedido.fecha,
                        precioTotal:`${pedido.precio_total}$`,
                        direction: pedido.nombre_ciudad,
                        estado:  pedido.nombre_estado,
                        productos: pedido.nombre_productos,
                        factura:""
                    }
                )))
            }
    
            catch (e){
                console.error(e)
            }
        }

        getOrders()

        
    },[])



    return (
        <>
            <div className="h-12 w-full flex justify-center items-center">
                <h1 className="font-bold">Pedidos</h1>
            </div>

            <DataTable
                columns={columns}
                data={data}
                pagination
                paginationPerPage={5}
               
            />

            
        </>
    )
}