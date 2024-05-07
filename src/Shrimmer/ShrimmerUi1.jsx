import React from 'react'
import { ShimmerButton,ShimmerTitle ,ShimmerCircularImage,ShimmerSectionHeader,ShimmerSimpleGallery,ShimmerPostList} from "react-shimmer-effects";
import { ShimmerPostItem } from "react-shimmer-effects";
const ShrimmerUi1 = () => {
  return (
    <div className='max-w-[1200px] mx-auto mb-10'>

<div className='mt-10   flex justify-between '>

<div>
<ShimmerTitle line={1} gap={20} variant="primary" className=' p-2 md:w-[300px] w-[200px]'  />

</div>
<div className='flex gap-3'>
<ShimmerCircularImage size={50} />
<ShimmerCircularImage size={50} />

</div>

</div>
     <div className='flex md:justify-between justify-center items-center mx-auto flex-wrap'>
      <ShimmerCircularImage size={90} />
      <ShimmerCircularImage size={90} />
      <ShimmerCircularImage size={90} className='pl-2'/>
      <ShimmerCircularImage size={90} className='  pl-2'/>
      
        
     </div>

     <div >
   
   <div className=' flex flex-wrap gap-5 justify-center'>
    <div className='w-[230px] md:w-[280px] '><ShimmerPostItem card title cta /></div>
    <div className='w-[230px] md:w-[280px]'><ShimmerPostItem card title cta /></div>
    <div className='w-[230px] md:w-[280px]'><ShimmerPostItem card title cta /></div>
    <div className='w-[230px] md:w-[280px]'><ShimmerPostItem card title cta /></div>
    <div className='w-[230px] md:w-[280px]'><ShimmerPostItem card title cta /></div>
    <div className='w-[230px] md:w-[280px]'><ShimmerPostItem card title cta /></div>
    <div className='w-[230px] md:w-[280px]'><ShimmerPostItem card title cta /></div>
    <div className='w-[230px] md:w-[280px]'><ShimmerPostItem card title cta /></div>

   </div>

     </div>


    </div>

  )
}

export default ShrimmerUi1
