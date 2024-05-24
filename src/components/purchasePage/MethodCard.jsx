import "./PaymentContainer.css"

export const MethodCard = ({method, setActive, active, setActiveMethod})=>{
    return (
        <button onClick={()=>{
            setActive(method)
           
        }} className={`method-button w-24 p-2 rounded-lg ${active===method?'bg-button-hover outline outline-1':'bg-footer'} `}>
            <img className="w-fit" src={method.url} alt="" />
        </button>
    )
}