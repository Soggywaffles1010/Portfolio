'use client';

import React from 'react'
import Image from 'next/image'

const Socialproofs = () => {
  return (
    <div>
        <div className='overflow-x-hidden   flex flex-col gap-10 h-full w-full'>
          <div className='flex items-center gap-20 animate-scroll-text whitespace-nowrap'>
            {[...Array(11)].map((_, i) => (
                 <Image
                 key={i}
                 src={`/clients/1x/Asset ${i + 1}.png`}
                 alt={`Asset ${i + 1}`}
                 width={200}
                 height={200}
                 className='mr-10 rounded-lg transition-transform  hover:scale-110 hover:shadow-[0_0_3px_3px_rgba(255,255,255,0.2)]'
               />
               
            ))}
        
          </div>
      
        </div>
    </div>
  )
}

export default Socialproofs