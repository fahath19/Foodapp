import React, { useEffect, useState } from 'react'
import { api_url, imgnotfoundurl } from '../utils/constant';
const Usefetchdata = () => {
     let [data,setdata]=useState('');
     useEffect(()=>{
         fetchdata()
     },[setdata])

    async function fetchdata(){
     try {
          const response = await fetch(api_url)
          const result = await response?.json();
          setdata(result);
     } catch (error) {
          return <div>    <img src={imgnotfoundurl} className='w-[300px]' />
                       <h2>{error}</h2>
          
             </div>
     }
}

return data;
}

export default Usefetchdata






