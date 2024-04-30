import React from 'react'
import { useParams } from 'react-router-dom'
import UseOrder from '../customhook/UseOrder';

import OrderMenuItems from './OrderMenuItems';
import ShrimmerUi1 from '../Shrimmer/ShrimmerUi1';
const OrderMenu = () => {
    let {resid}=useParams('');
    let GetOrderData=UseOrder(resid);
    if(!GetOrderData || GetOrderData==null){
      return <ShrimmerUi1/>
    }
    const MenuAllItems=GetOrderData?.data
  return (
    <div >

       <OrderMenuItems MenuAllItems={MenuAllItems}/>
       


    </div>
  )
}

export default OrderMenu