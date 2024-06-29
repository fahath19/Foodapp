import React, { useEffect } from 'react'
import OrderMenuOffer from './OrderMenuOffer';
import OrderMenuinfo from './OrderMenuinfo';
import OrderMenuList from './OrderMenuList';
import { useLocation } from 'react-router-dom';
const OrderMenuItems = ({MenuAllItems}) => {
      const {pathname}=useLocation()
        console.log(pathname);
      useEffect(()=>{
       window.scrollTo(0,0)
      },[pathname])

     const Menuinfo=MenuAllItems?.cards[2];
     const MenuList=MenuAllItems?.cards[4];
    return (
    <div className='scroll-my-0 max-w-[1000px] mx-auto mb-10 mt-10 bg-slate-20'>
       <OrderMenuinfo Menuinfo={Menuinfo}/>
        <OrderMenuOffer />
        <OrderMenuList MenuList={MenuList}/>
    </div>
  )
}

export default OrderMenuItems
