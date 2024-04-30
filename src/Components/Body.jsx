import React from 'react'
import Cardscroll from './cardscroll'
import Topresturant from './Topresturant'
import Filterbtn from './Filterbtn'
import ShrimmerUi1 from '../Shrimmer/ShrimmerUi1'
import Usefetchdata from '../customhook/Usefetchdata'
const Body = () => {
    const Use_Fetch_Swiggy_Api=Usefetchdata();
  
  return (!Use_Fetch_Swiggy_Api) ? <ShrimmerUi1/> :(
    <div>
         

         
            <Cardscroll Use_Fetch_Swiggy_Api={Use_Fetch_Swiggy_Api} />
            <Topresturant Use_Fetch_Swiggy_Api ={Use_Fetch_Swiggy_Api}/>
            <Filterbtn  Use_Fetch_Swiggy_Api   ={Use_Fetch_Swiggy_Api}/>



    </div>
  )
}

export default Body
