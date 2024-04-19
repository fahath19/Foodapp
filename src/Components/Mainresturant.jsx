import React from 'react'
import { datainfo } from '../utils/c2'
import Topresturantinfo from './Topresturantinfo';
import { IMG_INFO_URL } from '../utils/constant';
const Mainresturant = () => {
    console.log(datainfo[0].card.card);
    let {restaurants}=datainfo[0]?.card?.card?.gridElements?.infoWithStyle;
  return (
    <div className='flex justify-center mx-auto md:justify-normal flex-wrap ml-3 md:ml-6 mt-5'>
        {
        restaurants.map(item=>
           <div key={item?.info?.id} className='resturantinfo w-[300px] md:w-[280px]  md:mx-1  cursor-pointer mt-4' >
            <div className='w-[280px] md:w-[260px]  '>
            <img src={IMG_INFO_URL+item?.info?.cloudinaryImageId} alt="img" className='w-[100%] object-cover bg-contain rounded-[5%] h-[180px]' />

            </div>
               <div className='px-3'>
                  <h2 className='text-[1.2rem] font-semibold'>{ item?.info?.name}</h2>
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

export default Mainresturant
