import sendmePet from '../../../assets/images/sendme-pet.png'
import { AnotherCategoriesBg } from './AnotherCategoriesBg'
import sambaShoes from '../../../assets/images/sambaShoes.webp'
import { AutomaticCategories } from './AutomaticCategories'
import { automaticCategories } from '../../../assets/constants/automaticCategories'
import React, { useState, useEffect, useRef } from 'react';


export const AnotherCategories = ()=>{

    
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const [imgPath, setImgPath] = useState()

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % automaticCategories.length);
    }, 7000); // 7000 milisegundos = 7 segundos

    return () => clearInterval(intervalRef.current); // Limpiar el intervalo cuando el componente se desmonte
  }, [automaticCategories.length]);

  




    return (
        <div className="category-section-container max-w-[748px] max-h-[412px] flex-row bg-transparent">
            

            <div className='w-full h-full flex items-center justify-center'>
                <div className='flex items-center justify-center w-full h-full relative'> 
                    <AnotherCategoriesBg/>

                    <AutomaticCategories automaticCategory = {automaticCategories[currentIndex]}/>
                </div>

                
            </div>
        </div>
    )
}