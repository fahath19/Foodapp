import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IMG_PRE_SEARCH_URL } from '../utils/constant'
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { clearitem,increase,decrease } from '../ReduxFile/CartSlice';
import CartEmty from '../assets/Cart-empty.png'

const CartIMenu = () => {
  const dispatch = useDispatch()
  const cartitem=useSelector(store=>store?.Cart?.cartitem)
  const {total}=useSelector(store=>store?.Cart)


  if (cartitem.length == 0) {
    return <div className=' mx-auto'>
      <div className='w-[300px] mx-auto'>
      <img src={CartEmty} alt="" className='w-[100%]'/>

      </div>
         <h2 className='text-center'>YOUR CART IS EMTY</h2>

    </div>
    
  }

  function Increment(items) {
  
    dispatch(increase(items))
    

  }
  function decrement(items) {
    dispatch( decrease ( items ) )
  }
  return (
    
    <div className='max-w-[700px] flex flex-col items-between mx-auto mt-10 px-20 mb-10'>
      <button className='bg-black text-white p-2 font-semibold ' onClick={() => dispatch(clearitem())}>Clear Cart</button>
      {cartitem.map(items =>
        <div className='border-[3px] py-3 mt-4 max-w-[700px] '>
          <div className='flex items-center justify-around '>
            <div className=' flex   ml-4'>
            <div className='w-[80px] h-[50px] mx-auto border-2 border-black'>
                <img src={IMG_PRE_SEARCH_URL + items?.card?.info?.imageId} alt="" className='w-[100%] object-cover h-[100%]' />

              </div>
              <div className='ml-4  w-[180px]'>
              <h2 className=' text-[1.1rem] font-sans font-semibold'>{items?.card?.info?.name}</h2>
              <h2 className='text-[1.1rem] font-medium text-green-600'>Price: ₹{items?.card?.info?.price / 100}</h2>

              </div>

            </div>
            <div className=' flex flex-col   '>

            
              <div className='text-center flex mt-2'>
                <button className='mx-auto text-[1.4rem] mr-2' onClick={() => Increment(items)}><FaPlusCircle /></button>
                <h2 className='text-[1.5rem] font-semibold mx-auto border-2 border-black w-[35px] h-[40px] text-red-600 '>{items.amount}</h2>
                <button className='mx-auto text-[1.4rem] ml-2' onClick={() => decrement(items)}> <FaMinusCircle /> </button>

              </div>


            </div>
            <div>
            <h2 className='text-[1.2rem] font-semibold '> ₹{items?.card?.info?.price / 100*items.amount} || {total}</h2>

            </div>
          </div>
        </div>
      )}
      <div className='border-2'>


      </div>

    </div>
  )
}

export default CartIMenu
