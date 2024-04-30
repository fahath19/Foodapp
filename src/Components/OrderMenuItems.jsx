import React from 'react'
import OrderMenuOffer from './OrderMenuOffer';
import OrderMenuinfo from './OrderMenuinfo';
import OrderMenuList from './OrderMenuList';
const OrderMenuItems = ({MenuAllItems}) => {

     const Menuinfo=MenuAllItems?.cards[2];
     const MenuList=MenuAllItems?.cards[4];

    return (
    <div className='max-w-[1000px] mx-auto mb-10 mt-10 bg-slate-20  '>
       <OrderMenuinfo Menuinfo={Menuinfo}/>
        <OrderMenuOffer />
        <OrderMenuList MenuList={MenuList}/>
    </div>
  )
}

export default OrderMenuItems
