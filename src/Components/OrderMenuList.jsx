import React, { useState } from 'react'
import { MdKeyboardArrowDown,MdKeyboardArrowUp } from "react-icons/md";
import OrderMenuListItems from './OrderMenuListItems';
const OrderMenuList = ({MenuList}) => {
      let [click,setclick]=  useState(0)
   const {cards}=MenuList?.groupedCard?.cardGroupMap?.REGULAR;
   let filtercategories=cards.filter(item=>item?.card?.card?.['@type']=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

   function Toggle(i){
    if(click==i){
      return setclick(null)

    }
    setclick(i)
   }
  return (
    <div>
       {
        filtercategories.map((item,i)=>
          <div className='px-10 mt-5 border-[2px] rounded-lg border-[ #BFAFB2] ' key={i} >
            <div className='flex items-center justify-between py-2' onClick={()=>Toggle(i)}>
             <h2 className='text-[1.2rem] font-medium text-black font-sans'>{item?.card?.card?.title}  ({item?.card?.card?.itemCards?.length})</h2>
             { click==i ? <MdKeyboardArrowUp className='cursor-pointer text-[2.8rem] ' /> : <MdKeyboardArrowDown className='cursor-pointer text-[2.8rem] ' />}
             </div>
                  <OrderMenuListItems  filtercategories={item}  click={click} i={i}   />
          </div>
        )
       }
    </div>
  )
}

export default OrderMenuList
