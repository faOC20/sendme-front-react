import sendmePet2 from '../../../assets/images/sendme-pet-2.webp'

export const MainHeaderOptions = ({selectedOption, setSelectedOption, option})=>{

    const setSelected = ()=>{
        setSelectedOption(option.id)
    }

    return(

        <div className="relative flex items-center h-full w-[70px] justify-center">
         <div className="main-options bg-header/85 h-[55px] w-[55px] rounded-[50%] outline outline-2 outline-white">
                    
        </div>
        <button onClick={(setSelected)} className={`absolute transition  ${selectedOption === option.id? 'scale-150':"hover:scale-150"}`}>
                        <img src={option.img} className=" w-[40px]" alt="" />

        </button>
       </div>
    )
}