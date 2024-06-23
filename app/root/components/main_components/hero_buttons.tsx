import React from 'react'

const herobuttons = () => {
  return (
    <div className='text-white absolute translate-y-64 mt-32 '>
    <div className='mt-10 flex gap-5 '>
      <button className='transition-all duration-500 rounded border-1 border-blue-500 border px-10 py-1 bg-none hover:bg-blue-300 text-white hover:text-black cursor-pointer'>
        Check Projects
      </button>
      <button className='transition-all duration-500 rounded border-1 border-blue-500 border px-10 py-1 bg-none hover:bg-blue-300 text-white hover:text-black cursor-pointer'>
        Book an interview
      </button>
     
     </div>
    </div>
  )
}

export default herobuttons