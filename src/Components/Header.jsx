import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
  let [show,setshow]=useState(true);
  const data=useSelector((store)=>store.Cart.amount);
  
  function handleburger(){
       setshow(!show)
  }

  return (
        <header className=' bg-[#FAF9F6] shadow-[0_8px_30px_rgb(0,0,0,0.12)] py-5   w-full z-20 '>
          <div className='max-w-[1200px] mx-auto flex justify-between'> 
           <h2 className='text-3xl text-yellow-400 font-sans ml-6 md:text-4xl'>snackify</h2>
           <ul className={`flex direction-auto md:flex-row flex-col  text-center md:pb-auto pb-4  z-20  mt-2 items-center  md:relative absolute md:top-0  top-[10%] md:bg-transparent bg-[#FAF9F6] md:h-auto h-[230px] w-full md:w-auto md:flex ${show?'flex':'hidden'}
           
           `}
           >
            
                     <Link to='/b' > <li className='text-[1.3rem] md:hover:text-orange-600 text-center font-medium md:pr-10 pr-0 cursor-pointer  text-[#343434] md:mt-auto mt-3  flex items-start justify-start hover:bg-orange-500 hover:text-white  w-[300px] md:hover:bg-transparent md:w-auto pl-4 rounded' >  Search  </li> </Link>  
                     <Link to='/b' > <li className='text-[1.3rem] md:hover:text-orange-600 text-center font-medium md:pr-10 pr-0 cursor-pointer  text-[#343434] md:mt-auto mt-3  flex items-start justify-start hover:bg-orange-500 hover:text-white  w-[300px] md:hover:bg-transparent md:w-auto pl-4 rounded' > Offers </li> </Link>  
                     <Link to='/b' > <li className='text-[1.3rem] md:hover:text-orange-600 text-center font-medium md:pr-10 pr-0 cursor-pointer  text-[#343434] md:mt-auto mt-3  flex items-start justify-start hover:bg-orange-500 hover:text-white  w-[300px] md:hover:bg-transparent md:w-auto pl-4 rounded' > Help </li> </Link>  
                     <Link to='/Cartpage' > <li className='text-[1.3rem] md:hover:text-orange-600 text-center font-medium md:pr-10 pr-0 cursor-pointer  text-[#343434] md:mt-auto mt-3  flex items-start justify-start hover:bg-orange-500 hover:text-white  w-[300px] md:hover:bg-transparent md:w-auto pl-4 rounded' > Cart ({data}) </li> </Link>  
                    
                  
              

          </ul>

             <button className='items-center text-3xl mr-6 cursor-pointer  md:hidden block text-orange-400' onClick={handleburger}>{(show)? < RxHamburgerMenu />: 'X'}</button>
          </div>
        </header>
  )
}

export default Header
