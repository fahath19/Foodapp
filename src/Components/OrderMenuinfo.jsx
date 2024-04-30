import React from 'react'
import { IMG_PRE_SEARCH_URL } from '../utils/constant'
const OrderMenuinfo = ({Menuinfo}) => {


    const {name,locality,areaName,cuisines,cloudinaryImageId,avgRatingString,totalRatingsString,costForTwoMessage}=Menuinfo?.card?.card?.info
  return (
    <div> 
    <div className='border-b-[3px] pb-3 flex justify-between px-10 bg-slate flex-wrap '>
      <div>
         <h2 className='text-2xl font-bold uppercase'>{name}</h2>
         <p>{cuisines.slice(0,5).join(',')}</p>
         <p>{areaName} {locality}</p>

      </div>
      <div className='border-[2px] p-2 rounded-[10px]'>
         <h2 className='border-b-2 text-center pb-1'>{avgRatingString}</h2>
         <h2>{totalRatingsString}</h2>
      </div>
    </div>

    <div className=' px-10  '>
      <h2 className='text-[1.3rem] font-bold mt-4'>{costForTwoMessage}</h2>
      <div className='w-[350px] h-[250px] mt-6  border-[1px] rounded-lg border-slate-300'>
      <img src={IMG_PRE_SEARCH_URL+cloudinaryImageId} alt="img" className='w-[100%] h-[100%] object-cover rounded-lg ' />  

      </div>
    </div>
    </div>
  )
}

export default OrderMenuinfo
