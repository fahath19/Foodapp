import React, { useEffect, useState } from 'react'
const UseOrder = (resid) => {
     const Order_url=" https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26catalog_qa%3Dundefined%26submitAction%3DENTER%26restaurantId%3D "
    

    let [data,setdata]=useState('');
   useEffect(()=>{
       fetchorderdata();
   },[])


  async function fetchorderdata(){
   
    try{

       let response=await fetch("https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26catalog_qa%3Dundefined%26submitAction%3DENTER%26restaurantId%3D"+resid+"%26lat=28.7040592%26lng=77.1024901");
      
       let json=await response.json();
       setdata(json);
    }
   
    catch(err){
       console.log(err);
    }
   }
   return data;
}

export default UseOrder
