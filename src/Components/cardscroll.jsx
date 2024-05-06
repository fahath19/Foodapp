import React, { useState } from 'react';
import { IMG_PRE_SEARCH_URL } from '../utils/constant';
import { GoArrowRight,GoArrowLeft } from "react-icons/go";

const cardscroll = ({Use_Fetch_Swiggy_Api}) => {
  let [slide,setslide]=useState(0)
  const data = Use_Fetch_Swiggy_Api?.data?.cards[0]?.card?.card?.imageGridCards;
  const title=Use_Fetch_Swiggy_Api?.data?.cards[0]?.card?.card?.header.title;
 
  if (!title || !data || !Array.isArray(data.info) ) {
   return '';
  }
  function rightclick(){
    if(data?.info?.length-5==slide) return false
    setslide(slide+3);
    console.log(slide);
  }
  function leftclick(){
    setslide(slide-3)

  }

  return (
    <div>    
    <div className='max-w-[1200px] mx-auto p-2   mt-[] '>
      <div className='flex justify-between items-center'>
      <h2 className='mt-6  p-6 md:p-0 mb-3 font-bold text-[1.3rem] font-sans lg:text-3xl'>{title}</h2>

      <div className='flex pr-4' >
           <div className='bg-[#d5d4d4] p-[8px] md:p-2 cursor-pointer rounded-full mr-2 ' onClick={leftclick}> 
           <GoArrowLeft className='text-[1.3rem] md:text-2xl'  />
           </div>
           <div className='bg-[#d5d4d4] p-[8px] md:p-2 cursor-pointer rounded-full' onClick={rightclick}>
            <GoArrowRight className='text-[1.3rem] md:text-2xl'/>
            </div>
      </div>

      </div>
      </div>

       <div className=' cardscroll flex w-[310px] md:w-auto max-w-[1200px] mx-auto p-2  border-b-2 mt-[]  justify-center  overflow-hidden overflow-x-auto resturantinfo1'>

          {
            data?.info?.map(item=>
              <div className='cardscrollitem mr-5 w-[152px]  shrink-0' style={{transform:`translateX(740%)`}} key={item?.id}>
              <img src={IMG_PRE_SEARCH_URL+item?.imageId} alt="df" className=' transition-all' key={item.id} style={{transform:`translateX(-${slide*100}%)`}}/>

              </div>
            )
          }
       </div>
       </div>

  );
}

export default cardscroll;

