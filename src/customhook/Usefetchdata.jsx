import React, { useEffect, useState } from 'react'
import { Api_Url } from '../utils/constant';
import { api_url } from '../utils/constant';
const Usefetchdata = () => {
     let [data,setdata]=useState('');
     useEffect(()=>{
         fetchdata()
     },[setdata])

    async function fetchdata(){
     try {
          //const response = await fetch(url, options);
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
