import React from 'react'
import { IMG_INFO_URL} from '../utils/constant';

const Topresturantinfo = ({restaurants,slide}) => {
   
  return (
    <div className=' mt-6   '>
      
           <div key={restaurants?.info?.id} className='resturantinfo1  w-[300px] md:w-[350px]  mx-6  cursor-pointer' style={{transform:`translateX(-${slide*100}%)`}} >
            <div className='w-[260px] md:w-[300px] '>
            <img src={IMG_INFO_URL+restaurants?.info?.cloudinaryImageId} alt="img" className='w-[100%] object-cover bg-contain rounded-[5%] h-[180px]' />

            </div>
               <div className='px-3'>
                  <h2 className='text-[1.3rem] font-semibold'>{ restaurants?.info?.name}</h2>
                  <div className='flex '>
                  <h2 className='mr-3 text-[1.1rem] font-medium'>{restaurants?.info?.avgRating}</h2>
                  <h2 className='text-[1.1rem] font-medium'>{restaurants?.info?.sla?.slaString}</h2>


                  </div>
                  <p className='text-[1.1rem] text-slate-500'>{restaurants?.info?.cuisines.slice(0,3).join(',')}</p>
               </div>
           </div>
        
    </div>
  )
}

export default Topresturantinfo
