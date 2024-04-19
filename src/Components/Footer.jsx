import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black w-full h-auto relative'>
         <div className='text-white flex justify-center  pt-[5rem]'>
             <div className='mr-[18%]  home'>
                <h2 className='text-[1.2rem] md:text-[1.4rem] font-bold'>Food Home</h2>
                <p>2024 Jack Pvt.Ltd</p>
             </div>
             <div className='mr-[18%] social absolute top-[45%] left-[40px] md:relative'>
                <h2 className='text-[1.2rem] md:text-[1.4rem] font-bold'>Social Links</h2>
                <p>Linkedin</p>
                <p>Github</p>
                <p>Instagram</p>

             </div>
             <div className='company'>
                 <h2 className='text-[1.2rem] md:text-[1.4rem] font-bold'>Company</h2>
                 <p>Privacy</p>
                 <p>Term & Condition</p>
                 <p>Help</p>
                 <p>Contact Us</p>
                 <p>About</p>

             </div>
             </div>
           <div className='text-white text-center mt-10'>
              <p className='text-[1.1rem] lg:text-[1.2rem] font-bold text-slate-400'>Created By Abdul Bahad</p>
              <p className='lg:[1.1rem]  lg:text-[1.2rem] font-bold text-slate-400'>Email - Bahadabdul539@gmail.com</p>
 
          </div>
    </div>
  )
}

export default Footer
