import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IMG_PRE_SEARCH_URL } from '../utils/constant'
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { clearitem,increase,decrease, totalfuc } from '../ReduxFile/CartSlice';
import CartEmty from '../assets/Cart-empty.png'
import { Link } from 'react-router-dom';
import { ToastContainer ,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CartIMenu = () => {
  const dispatch = useDispatch()
  const {cartitem,total}=useSelector(store=>store?.Cart);

  useEffect(()=>{
       dispatch(totalfuc())
  },[cartitem])

   

  if (cartitem?.length == 0) {
    return <div className=' mx-auto'>
      <div className='w-[300px] mx-auto'>
      <img src={CartEmty} alt="" className='w-[100%]'/>

      </div>
         <h2 className='text-center text-[1.5rem] '>Your Cart Is Emty</h2>
        <Link to='/'>
        <button className=' text-[1.4rem] mx-auto bg-orange-400 block w-[230px] py-2  my-3 font-sans'>See all Restruant</button>
        </Link>  

    </div>
    
  }

  function Increment(items) {
  
    dispatch(increase(items))
    
      toast.success('Your item is added')
  }
  function decrement(items) {
    dispatch( decrease ( items ) )
    toast.error("Your item is removed")

  }
  return (
    
    <div className='max-w-[700px] flex flex-col items-between mx-auto mt-10 px-10 mb-10'>
      <button className='bg-black text-white p-2 font-semibold ' onClick={() => dispatch(clearitem())}>Clear Cart</button>
      {cartitem.map(items =>
        <div className='border-[3px] py-3 mt-2 bg max-w-[700px] min-w-[275px]  '>
          <div className='flex flex-col md:flex-row items-center justify-around '>
            <div className=' flex   ml-4'>
            <div className='w-[80px] h-[50px] mx-auto border-2 border-black'>
                <img src={IMG_PRE_SEARCH_URL + items?.card?.info?.imageId} alt="" className='w-[100%] object-cover h-[100%]' />

              </div>
              <div className='ml-4  w-[180px]'>
              <h2 className=' text-[1.1rem] font-sans font-semibold'>{items?.card?.info?.name}</h2>
              <h2 className='text-[1.1rem] font-medium text-green-600'>Price: ₹{items?.card?.info?.price / 100 || 259} </h2>

              </div>

            </div>
            <div className=' flex  items-center   '>

            
              <div className='text-center flex md:mt-[10px] mt-[20px]'>
                <button className='mx-auto text-[1.4rem] mr-2' onClick={() => Increment(items)}><FaPlusCircle /></button>

                <h2 className='text-[1.5rem] font-semibold mx-auto border-2 border-black w-[35px] h-[40px] text-red-600 '>{items.amount}</h2>
                <button className='mx-auto text-[1.4rem] ml-2' onClick={() => decrement(items)}> <FaMinusCircle /> </button>

              </div>


              <h2 className='text-[1.2rem] font-semibold ml-10  mt-2 w-[100px]  '> ₹{(items.amount*(items?.card?.info?.price  / 100 || 259) ).toFixed(2)}  </h2>

            </div>
           
          </div>
        </div>
      )}
       <div className='bg-black px-3 pr-6 max-w-[700px] min-w-[275px]'>
                 <h2 className='text-[1.1rem] md:text-[1.3rem] font-semibold text-white '>Bill Details</h2>
                 <div className='flex justify-between'>
                 <h2 className='text-[1.1rem] md:text-[1.2rem] font-normal text-white '>Item Total</h2>
                  <h2 className='text-white'>₹{(total).toFixed(2)}</h2>
                 </div>
                 <div className='flex justify-between'>
                 <h2 className='text-[1.1rem] md:text-[1.2rem] font-normal text-white '>Delivery Fees</h2>
                   <h2 className='text-white'>₹40</h2>
                 </div>
                 <div className='flex justify-between border-white border-b pb-1'>

                 <h2 className='text-[1rem] md:text-[1.2rem]   pb-2 font-normal text-white '>Gst and Resturant Charges </h2>
                 <h2 className='text-white'>₹100</h2>
                 </div>
                 <div className='flex justify-between mt-3 pb-4' >
                 <h2 className='text-[1.1rem] md:text-[1.2rem] font-normal text-white '>To Pay</h2>
                 <h2 className='text-white'> ₹{(total+100+40).toFixed(2)}</h2>
                 </div>
                 
        </div> 
        <button className='bg-green-300 h-[50px] max-w-[700px] min-w-[275px]' onClick={()=>dispatch(clearitem())}>Pay Now</button>
    </div>
  )
}

export default CartIMenu
