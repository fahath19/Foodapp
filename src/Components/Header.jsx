import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoIosSearch } from "react-icons/io";"react-shimmer-effects";
import { MdOutlineLocalOffer } from "react-icons/md";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
const Header = () => {
  let [show,setshow]=useState(true);
  const data=useSelector((store)=>store.Cart.amount);
  
  function handleburger(){
       setshow(!show)
  }

  return (
        <header className=' bg-[#FAF9F6]  shadow-[0_8px_30px_rgb(0,0,0,0.12)] py-5  fixed top-0 w-full z-20  '>
          <div className='max-w-[1200px] mx-auto flex justify-between'> 
           <h2 className='text-3xl text-orange-400 font-sans ml-6 md:text-4xl'>Snackify...</h2>
          
           <ul className={`flex direction-auto md:flex-row flex-col  text-center md:pb-auto pb-4  z-20  mt-2 items-center  md:relative absolute md:top-0  top-[90%] md:bg-transparent bg-[#FAF9F6] md:h-auto h-[230px] w-full md:w-auto md:flex md:visible ${show ? 'invisible' : 'visible'}
           
           `}
           >
            
                     <Link to='/' > 
                     <div className='flex items-center hover:text-orange-500'>
                     <IoIosSearch className='text-[1.8rem]  pt-1'/> <li className='text-[1.3rem] md:hover:text-orange-600 text-center font-medium md:pr-10 pr-0 cursor-pointer  text-[#343434] md:mt-auto mt-3  flex items-start justify-start hover:bg-orange-500 hover:text-white  w-[300px] md:hover:bg-transparent md:w-auto pl-1 rounded' >  Search  </li>
                     </div>
                     </Link>  
                     <div className='flex items-center hover:text-orange-500'>
                    < MdOutlineLocalOffer  className='text-[1.8rem]  pt-1'/>
                     <Link to='/' > <li className='text-[1.3rem] md:hover:text-orange-600 text-center font-medium md:pr-10 pr-0 cursor-pointer  text-[#343434] md:mt-auto mt-3  flex items-start justify-start hover:bg-orange-500 hover:text-white  w-[300px] md:hover:bg-transparent md:w-auto pl-1 rounded' > Offers </li> </Link>  

                     </div>
                     <div className='flex items-center hover:text-orange-500'>
                    < IoHelpBuoyOutline  className='text-[1.8rem]  pt-1'/>
                      <a href="https://www.swiggy.com/support" target="_blank" > <li className='text-[1.3rem] md:hover:text-orange-600 text-center font-medium md:pr-10 pr-0 cursor-pointer  text-[#343434] md:mt-auto mt-3  flex items-start justify-start hover:bg-orange-500 hover:text-white  w-[300px] md:hover:bg-transparent md:w-auto pl-1 rounded' > Help </li> </a>

                     </div>
                     <div className='flex items-center hover:text-orange-500'>
                    < IoCartOutline  className='text-[1.8rem]  pt-1'/>

                     <Link to='/Cartpage' > <li className='text-[1.3rem] md:hover:text-orange-600 text-center font-medium md:pr-10 pr-0 cursor-pointer  text-[#343434] md:mt-auto mt-3  flex items-start justify-start hover:bg-orange-500 hover:text-white  w-[300px] md:hover:bg-transparent md:w-auto pl-1 rounded' > Cart ({data}) </li> </Link>  

                     </div>
                    
                  
              

          </ul>
             <button className='items-center text-3xl mr-6 cursor-pointer  md:hidden block text-orange-400' onClick={handleburger}>{(show)? < RxHamburgerMenu />: 'X'}</button>
          </div>
        </header>
  )
}

export default Header
