import React, { useState } from 'react'
import { IMG_INFO_URL } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { additem } from '../ReduxFile/CartSlice';
const OrderMenuListItems = ({filtercategories,click,i}) => {
    const dispatch=useDispatch()
    let [setFilteramount]=useState();
    const cartitem=useSelector((store)=>store?.Cart?.cartitem)
    console.log(cartitem?.map(item=>console.log(item.amount)));

    function Addcart(items){
     
     dispatch(additem(items))     
     setFilteramount(cartitem?.map(item=>(item?.card?.info?.id===items?.card?.info?.id)? (item.amount):'j'))

    }


  return (
    <div>
       {
       filtercategories?.card?.card?.itemCards.map(items=>
        <div key={ items?.card?.info?.id} className= {`border-b-2 pb-5 mt-4 mb-2 flex justify-between  ${click==i?'block':'hidden'}  `}> 
            <div>
             <h2>{ items?.card?.info?.name}</h2>
             <h2>{items?.card?.info?.price/100}</h2>
             <h2 className='w-[80%]'>{(items?.card?.info?.description.length>31) ? items?.card?.info?.description.substring(0,40)+'....':items?.card?.info?.description}</h2>

            </div>
         <div className='w-[120px] md:w-[150px] h-[130px] border-2 border-slate-100 rounded-[10px] relative'>
             <img src={IMG_INFO_URL+items?.card?.info?.imageId} alt="img" className='w-[100%] h-[100%] rounded-[10px] object-cover ' />
            
             <button className='text-[1.1rem] md:text-[1.2rem] text-white  bg-slate-400 w-[80px] md:w-[100px] h-[35px]  absolute -bottom-3  md:bottom-[-10px] rounded-full md:right-5  right-[1px] ' onClick={()=>Addcart(items)} >  Add {cartitem?.map(item=>(item?.card?.info?.id===items?.card?.info?.id)? `(${item.amount})`:'')}  </button>


         </div>
        </div>

       )
       }
      
    </div>
  )
}

export default OrderMenuListItems

