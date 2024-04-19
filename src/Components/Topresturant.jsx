import React, { useState } from 'react'
import { topresturant } from '../utils/c1';
import { GoArrowRight,GoArrowLeft } from "react-icons/go";
import Topresturantinfo from './Topresturantinfo';
const Topresturant = () => {
  let [slide,setslide]= useState(0);
   let {title}=topresturant[0]?.card?.card?.header;
   let {restaurants}=topresturant[0]?.card?.card?.gridElements?.infoWithStyle;

  return (
    <div >
      <div className=' md:max-w-[1200px] md:w-auto mx-auto   '> 

        <div className='flex items-center justify-between'>
           <h2 className='text-[1.4rem] p-8 md:p-0 lg:text-[1.7rem] mt-4 font-bold   md:w-auto'>{title}</h2>
           <div className='flex mt-4 pr-4' >
           <div className='bg-[#d5d4d4] p-[8px] md:p-2 cursor-pointer rounded-[50%] mr-2 ' onClick={()=>{ setslide(slide-1)}} > 
           <GoArrowLeft className='text-[1.3rem] md:text-2xl'  />
           </div>
           <div className='bg-[#d5d4d4]  p-[8px] md:p-2 cursor-pointer rounded-[50%] mr-2' onClick={()=>{if(restaurants.length-1==slide-1) return false; setslide(slide+1); console.log(slide)}} >
            <GoArrowRight className='text-[1.3rem] md:text-2xl'/>
            </div>
          </div>
        </div>
      </div>
        <div className='w-[320px] md:max-w-[1200px] border-b-2 pb-2 md:w-auto mx-auto  '>
        <Topresturantinfo restaurants={restaurants} slide={slide}/>

        </div>

    </div>
  )
}

export default Topresturant
