import React, { useState } from 'react'
import { headerdata } from '../Mockdata'
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
const Header = () => {
  let [show,setshow]=useState(1);
  
  function handleburger(){
       setshow(!show)
  }

  return (
        <header className=' bg-[#FAF9F6] shadow-[0_8px_30px_rgb(0,0,0,0.12)] py-5   w-full z-20 '>
          <div className='max-w-[1200px] mx-auto flex justify-between'> 
           <h2 className='text-3xl text-yellow-400 font-sans ml-6 md:text-4xl'>snackify</h2>
           <ul className={`flex direction-auto md:flex-row flex-col  text-center md:pb-auto pb-4  z-20  mt-2 items-center  md:relative absolute md:top-0  top-[12%] md:bg-transparent bg-[#FAF9F6] md:h-auto h-[230px] w-full md:w-auto md:flex ${show?'hidden':'block'}
           
           `}
           >
            
                  {
                    headerdata.map((item,index)=>
                      <li key={index} className='text-[1.3rem] md:hover:text-orange-600 text-center font-medium md:pr-10 pr-0 cursor-pointer  text-[#343434] md:mt-auto mt-3  flex items-start justify-start hover:bg-orange-500 hover:text-white  w-[300px] md:hover:bg-transparent md:w-auto pl-4 rounded' > {item.navtext}   </li>  )
                     
                  
                  }
              

          </ul>
          <RxHamburgerMenu className='items-center text-3xl mr-6 cursor-pointer  md:hidden block text-orange-400' onClick={handleburger}/>
          </div>
        </header>
  )
}

export default Header
//Snackify 
{/* <li>Search</li>
                    <li>Offers</li>
                    <li>Help</li>
                    <li>Sign In</li>
                    <li>Cart</li>
                  
                  
                  */}