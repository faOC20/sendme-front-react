export const CoinSelector = ({coin, activeCoin, setActiveCoin})=>{
    return (
        <button onClick={()=>{
            setActiveCoin(coin)
        }} className={` mr-1 border  rounded-lg p-1 ${activeCoin===coin?'border-2 border-green-800':''}`}>{coin.name}</button>
    )
}