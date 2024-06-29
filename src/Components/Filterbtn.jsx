import React, { useEffect, useState } from 'react'
import Mainresturant from './Mainresturant'
import { Link } from 'react-router-dom'
import { GiCancel } from "react-icons/gi";
const Filterbtn = ({Use_Fetch_Swiggy_Api}) => {
     const [inpvalue,setinpvalue]=useState("");

    if(!Use_Fetch_Swiggy_Api){
        return ''
    }

    let {restaurants}=Use_Fetch_Swiggy_Api?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle;
    const [restaurant,setrestaurants]=useState(restaurants);
    const [filterrestaurant,setfilterrestaurants]=useState(restaurants);
    const [isbtnclick,setbtnclick]=useState(false)
   
   const searchitem=()=>{
            let searchfilter= restaurant.filter((item,id)=>item?.info?.name.toLowerCase().includes(inpvalue));
            // console.log(searchfilter);
            
            setfilterrestaurants(searchfilter);
           
        
   }  


    const handleinput=(e)=>{
              setinpvalue(e.target.value);

             
    }
    const ratingfunc=()=>{
      let ratingfilter= restaurant.filter((item,id)=>parseInt(item?.info?.avgRating)>=4);

      setfilterrestaurants(ratingfilter);
      setbtnclick(true);

    }

    const allitem=()=>{
      setfilterrestaurants(restaurant);
      setbtnclick(false);
    }
   useEffect(()=>{
    searchitem();
   },[inpvalue])
  return (
    <div>

    <div className='w-[320px] md:w-auto max-w-[1200px] mx-auto mt-3 '>
           <h2 className='text-[1.3rem] md:text-[1.6rem] mt-4 font-bold'>Restaurants with online food delivery in Delhi</h2>
            <div className='filterbtn mt-4  md:ml-6  '>

                <input type="text" placeholder='Search Restaurant' value={inpvalue} onChange={handleinput} />
                
                 <button onClick={allitem} className='bg-blue-800' >All</button>
                 <button className= {` bg-blue-800  relative ${ isbtnclick  && ' bg-slate-800 hover-none' }`} onClick={ratingfunc}>Rating 4.0+ {
                 isbtnclick && <GiCancel className='text-[1.2rem] text-red-600 absolute bottom-6 right-1'/> }</button>
                 <button className='bg-blue-800'>Delivery Time</button>
                 <button className='bg-blue-800'>Pure Veg</button>
                

            </div>
            </div>

      <div className='max-w-[1200px] mx-auto mt-3 mb-[200px]'>
      <div className='flex justify-center mx-auto md:justify-normal flex-wrap ml-3 md:ml-6 mt-5'>
 
      { 

filterrestaurant?.map(items=> <Link to= {`/orderpage/${items?.info?.id}`} key={items?.info?.id}   > <Mainresturant  items={items} /> </Link>      )
      
      
      }
             

      </div>
      </div>

    </div>

  )
}

export default Filterbtn;
