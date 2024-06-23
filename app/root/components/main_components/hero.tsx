'use client';
import Spline from '@splinetool/react-spline'

const hero = () => {
  return (
    <div className=' bg-gradient-radial w-full h-screen flex '>
 
      <div className='text-white z-10   text-left mt-32 cursor-pointer  '>
        
       
       <p className='text-5xl'>
       Hi I'm 
       <span className='text-[#00FF00] '> Allen  </span> 
       
       </p>
       <p className='text-5xl'>
        Let's make magic
       </p>
       <p className='text-lg mt-5'>
          I'm a Full stack web developer,
       </p>
       <p className='text-lg mt-2'>
          Graphic Designer and a Virtual Designer
       </p>
       <p className='text-lg mt-10 hover:text-2xl'>
        How may I help you today?
       </p>
     
      
      </div>
      <div className=' h-[100%] w-full z-10 ml-64 absolute'>
        
        <Spline
        scene="https://prod.spline.design/Ers35RAW4kDT7sUv/scene.splinecode" 
      />
      </div>
    </div>
  )
}

export default hero