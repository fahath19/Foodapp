import React, { useState } from 'react'
import { URL,IMG_INFO_URL,IMG_SEARCH_URL,IMG_PRE_SEARCH_URL,data1 } from '../utils/constant';

const Topresturantinfo = ({restaurants,slide}) => {
   
  return (
    <div className='topresinfo mt-6   flex  overflow-hidden overflow-x-auto  '>
      {
        restaurants.map(item=>
           <div key={item?.info?.id} className='resturantinfo1  w-[300px] md:w-[350px]  mx-6  cursor-pointer' style={{transform:`translateX(-${slide*100}%)`}} >
            <div className='w-[260px] md:w-[300px] '>
            <img src={IMG_INFO_URL+item?.info?.cloudinaryImageId} alt="img" className='w-[100%] object-cover bg-contain rounded-[5%] h-[180px]' />

            </div>
               <div className='px-3'>
                  <h2 className='text-[1.3rem] font-semibold'>{ item?.info?.name}</h2>
                  <div className='flex '>
                  <h2 className='mr-3 text-[1.1rem] font-medium'>{item?.info?.avgRating}</h2>
                  <h2 className='text-[1.1rem] font-medium'>{item?.info?.sla?.slaString}</h2>


                  </div>
                  <p className='text-[1.1rem] text-slate-500'>{item?.info?.cuisines.slice(0,3).join(',')}</p>
               </div>
           </div>
        
        )
      }
    </div>
  )
}

export default Topresturantinfo
