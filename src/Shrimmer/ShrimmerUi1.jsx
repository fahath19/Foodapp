import React from 'react'
import { ShimmerButton,ShimmerTitle ,ShimmerCircularImage,ShimmerSectionHeader,ShimmerSimpleGallery,ShimmerPostList} from "react-shimmer-effects";
import { ShimmerPostItem } from "react-shimmer-effects";
const ShrimmerUi1 = () => {
  return (
    <div className='max-w-[1200px] mx-auto mb-10'>

    <div className='mt-10   flex justify-between '>

        <div>
        <ShimmerTitle line={1} gap={20} variant="primary" className=' p-2 w-[300px]'  />

        </div>
      <div className='flex gap-3'>
      <ShimmerCircularImage size={50} />
      <ShimmerCircularImage size={50} />

      </div>

    </div>
     <div className='flex justify-between flex-wrap'>
      <ShimmerCircularImage size={110} />
      <ShimmerCircularImage size={110} />
      <ShimmerCircularImage size={110} />
      <ShimmerCircularImage size={110} />
      <ShimmerCircularImage size={110}  className='hidden md:flex'/>
      <ShimmerCircularImage size={110}  className='hidden md:flex'/>
      <ShimmerCircularImage size={110}  className='hidden md:flex'/>
      <ShimmerCircularImage size={110}  className='hidden md:flex' />
      <ShimmerCircularImage size={110} className=' hidden md:flex' />
        
     </div>

     <div >
   
   <div className=' flex flex-wrap gap-5 '>
    <div className='w-[280px] '><ShimmerPostItem card title cta /></div>
    <div className='w-[280px] '><ShimmerPostItem card title cta /></div>
    <div className='w-[280px] '><ShimmerPostItem card title cta /></div>
    <div className='w-[280px] '><ShimmerPostItem card title cta /></div>
    <div className='w-[280px] '><ShimmerPostItem card title cta /></div>
    <div className='w-[280px] '><ShimmerPostItem card title cta /></div>
    <div className='w-[280px] '><ShimmerPostItem card title cta /></div>
    <div className='w-[280px] '><ShimmerPostItem card title cta /></div>

   </div>

     </div>


    </div>

  )
}

export default ShrimmerUi1
