import React from 'react'
import ContactMe from './components/contactme'
import Link from 'next/link'
import Button from '../reusable/button'
import Buttoncontactme from './components/buttoncontactme'
 

const page = () => {
  return (
    <div className='flex flex-col h-screen w-full justify-center items-center '>
     
        <div className='-translate-y-[50%] w-full '>
        <ContactMe/>
        </div>
        <div className=''>
          <Buttoncontactme text={'Back to Homepage'} href={'/'}/>
       </div >
      

    </div>
  )
}

export default page