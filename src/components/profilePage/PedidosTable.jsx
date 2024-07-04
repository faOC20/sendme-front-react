import { useEffect, useState } from "react"
import DataTable from "react-data-table-component"
import { API_URL } from "../../pages/api/constants"
import { useAuthStore } from "../../store/user"
import { InvoiceIcon } from "../../assets/icons/InvoiceIcon"
import { ChargingTable } from "../miscellaneos/ChargingTable"
import {ReferenceIcon} from "../../assets/icons/ReferenceIcon"
import { AlertIcon } from "../../assets/icons/AlertIcon"
import { CancelIcon } from "../../assets/icons/CancelIcon"
import { SuccesIcon } from "../../assets/icons/SuccesIcon"
import Swal from 'sweetalert2'

export const PedidosTable = ()=>{

    const [showAlertForm, setShowAlertForm] = useState(false)
    const [productsInAlert, setProductsInAlert] = useState()
    const [selectedPedido, setSelectedPedido] = useState()
    const [RowsData, setRowsData] = useState()

    const showAlert = (idPedido)=>{
        setShowAlertForm(!showAlertForm)
        setSelectedPedido(idPedido)
    }

    const handleSetCompleted = async(completed)=>{ //si es 1, es completado

        
        try{
            const response = await fetch(`${API_URL}refresh-completed`,{
                method: "POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({
                    selectedPedido, completed
                }),
            });
    
            if(response.ok){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "¡Pedido actualizado como recibido!",
                    showConfirmButton: true,
                
                }).then(()=>{
                window.location.href = '/profile'
                });
            }
        }

        catch(e){
            console.error(e)
        }

    }

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
            width:'5rem',
            compact: true,
            center:true
        }
        ,
        {
            name: 'Fecha',
            selector: row=>row.date,
            width:'6rem',
            compact: true,
            center:true
        }
        ,
        
        {
            name: 'Dirección de envío',
            selector: row=>row.direction,
            width:'6rem',
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
            width:'5rem',
            compact: true,
            center:true,
            cell: row => {
                let color;
                switch (row.estado) {
                    case 'en revisión':
                        color = 'red';
                        break;
                    case 'procesando':
                        color = '#ddc300';
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
            name: 'Comprobante',
            selector: row=>row.comprobante,
            width:'4.55rem',
            compact: true,
            center:true,
            cell: row => (
                row.comprobante !== '' ? (
                  <a href={row.comprobante} target="_blank" rel="noopener noreferrer">
                    <ReferenceIcon/>
                  </a>
                ) : null
              ),
          
        }
        ,
        
        {
            name: 'Factura',
            selector: row=>row.factura,
            width:'4rem',
            compact: true,
            center:true,
            cell: row => (
                row.factura !== '' ? (
                  <a href={row.factura} target="_blank" rel="noopener noreferrer">
                    <InvoiceIcon />
                  </a>
                ) : null
              ),
          
        },
        
        {
            name: 'Alertar',
            selector: row=>row.completado,
            width:'4rem',
            compact: true,
            center:true,
            cell: row => (
                row.completado === null && row.estado === 'completado' ? (
                    <button onClick={()=>{
                        showAlert(row.idPedido)
                    }}>
                        <AlertIcon/>
                    </button>
                ) : (
                    null
                )
              ),
          
        }
    ]


    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

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

                setRowsData(data)
                
                

                setData(data.map((pedido)=>(
                    {
                        idPedido:pedido.id_pedido,
                        name:pedido.nombre_usuario,
                        date:pedido.fecha,
                        precioTotal:`${pedido.precio_total}$`,
                        direction: pedido.nombre_ciudad,
                        estado:  pedido.nombre_estado,
                        productos: pedido.nombre_productos,
                        comprobante: pedido.url_referencia,
                        factura:pedido.url_factura,
                        completado:pedido.completado
                    }
                )))

                setLoading(false)
            }
    
            catch (e){
                console.error(e)
            }
        }

        getOrders()

        
    },[])

    useEffect(()=>{
        if(selectedPedido){
            const productsPhotos = (RowsData.filter((pedido)=>(
                pedido.id_pedido === selectedPedido
            )).map((pedido)=>(
                pedido.nombre_productos
            )))
            
            setProductsInAlert(productsPhotos[0].split(","))
        }
    },[RowsData, selectedPedido])



    return (
        <>
            <div className="h-12 w-full flex justify-center items-center">
                <h1 className="font-bold">Pedidos</h1>
            </div>

            <div className={`alert-form border-2 border-navigation w-full h-full absolute justify-center items-center p-10 flex flex-col gap-6 top-0 left-0 rounded z-[200] ${showAlertForm?"":"hidden"}`}>
                
                <b className="text-3xl">Alerta de llegada de pedido</b>
                <p className="text-xl">¿Está seguro de haber recibido su pedido?</p>
                <div className="w-2/3 flex justify-center gap-2">
                {

                    productsInAlert?.map((product)=>(
                        <div className="w-20 h-20">
                            <img className="object-contain rounded-lg shadow-xl" src={product} alt="" />
                        </div>
                    ))
                }
                </div>

                <div className="flex">
                <button className="text-red-800" onClick={()=>{
                    setShowAlertForm(false)
                }}>
                    <CancelIcon/>
                </button>

                <button className="text-navigation" onClick={()=>{
                    handleSetCompleted(1)
                }}>
                    <SuccesIcon/>
                </button>
                </div>

            </div>

            <DataTable
                columns={columns}
                data={data}
                pagination
                paginationPerPage={5}
                noDataComponent = {'No ha realizado ningún pedido'}
                progressPending = {loading}
                progressComponent = {<ChargingTable/>}
            />

            
        </>
    )
}