import React from 'react'
import { IMG_INFO_URL } from '../utils/constant';
import { IoStar } from "react-icons/io5";
const Mainresturant = ({items}) => {
  return (
        
           <div key={items?.info?.id} className=' mb-6 resturantinfo w-[300px] md:w-[280px]  md:mx-1  cursor-pointer mt-4' >
            <div className='w-[280px] md:w-[260px]  '>
            <img src={IMG_INFO_URL+items?.info?.cloudinaryImageId} alt="img" className='w-[100%] object-cover bg-contain rounded-[5%] h-[180px]' />

            </div>
               <div className='px-3'>
                  <h2 className='text-[1.2rem] font-semibold'>{ items?.info?.name}</h2>
                  <div className='flex '>
                  <h2 className='mr-1 text-[1.1rem] font-medium flex items-center '><span> <IoStar className='text-green-700'/></span> {items?.info?.avgRating}</h2>
                  <h2 className='text-[1.1rem] ml-4 font-medium'><span className='font-bold '> .</span> {items?.info?.sla?.slaString}</h2>


                  </div>
                  <p className='text-[1.1rem] text-slate-500'>{items?.info?.cuisines.slice(0,3).join(',')}</p>
               </div>
        
        
               </div>
      
  )
}

export default Mainresturant
