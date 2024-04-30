import React, { useEffect, useState } from 'react'
import { api_url } from '../utils/constant';
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
          console.error(error);
     }
}

return data;
}

export default Usefetchdata






