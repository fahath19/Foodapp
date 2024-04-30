import React from 'react'
import Mainresturant from './Mainresturant'
import { Link } from 'react-router-dom'

const Filterbtn = ({Use_Fetch_Swiggy_Api}) => {
    if(!Use_Fetch_Swiggy_Api){
        return ''
    }
    let {restaurants}=Use_Fetch_Swiggy_Api?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle;

  return (
    <div>

    <div className='w-[320px] md:w-auto max-w-[1200px] mx-auto mt-3 '>
           <h2 className='text-[1.3rem] md:text-[1.6rem] mt-4 font-bold'>Restaurants with online food delivery in Delhi</h2>
            <div className='filterbtn mt-4  md:ml-6  '>

                <input type="text" placeholder='Search Restaurant' />
                 <button className=''>Fast Delivery</button>
                 <button>Rating 4.0+</button>
                 <button>Offers</button>
                 <button>Pure Veg</button>
                 <button>Less Then 300 </button>
                 <button> Rs.300-Rs.600 </button>

            </div>
            </div>

      <div className='max-w-[1200px] mx-auto mt-3 mb-[200px]'>
      <div className='flex justify-center mx-auto md:justify-normal flex-wrap ml-3 md:ml-6 mt-5'>
 
      { 

       restaurants.map(items=> <Link to= {`/orderpage/${items?.info?.id}`} key={items?.info?.id}   > <Mainresturant  items={items} /> </Link>      )
      
      
      }
             

      </div>
      </div>

    </div>

  )
}

export default Filterbtn
