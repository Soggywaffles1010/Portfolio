'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  

  return (
    <div className='flex justify-between w-full py-5' >
      <div className='w-1/3 text-left  text-white'>
        right
      </div>
      <div className='w-1/3 text-right gap-10 flex justify-end font-mono'>
        <div 
          className='relative hover:underline cursor-pointer text-white'
          onMouseEnter={() => setIsDropdownOpen(true)}
          
        >
          <span className='hover:text-[#00FF00]'>
            Work
          </span>
          {isDropdownOpen && (
            <div className='absolute top-full mt-2 w-64 bg-gray-800 text-white shadow-lg rounded text-left' onMouseLeave={() => setIsDropdownOpen(false)}>
               <ul className='rounded '>
                <li>
                <Link className='block px-4 py-2 hover:bg-gray-700 hover:rounded-t-md' href={'/'}>Project 1</Link>
                </li>
                <li>
                <Link className='block px-4 py-2 hover:bg-gray-700' href={'/'}>Project 2</Link>
                </li>
                <li>
                <Link className='block px-4 py-2 hover:bg-gray-700 hover:rounded-b-md' href={'/'}>Project 3</Link>
                </li>
               </ul>
               <ul className='rounded '>
                <li>
                <Link className='block px-4 py-2 hover:bg-gray-700 hover:rounded-t-md' href={'/'}>Project 1</Link>
                </li>
                <li>
                <Link className='block px-4 py-2 hover:bg-gray-700' href={'/'}>Project 2</Link>
                </li>
                <li>
                <Link className='block px-4 py-2 hover:bg-gray-700 hover:rounded-b-md' href={'/'}>Project 3</Link>
                </li>
               </ul>
             

            </div>
          )}
        </div>
        <div className='hover:underline cursor-pointer text-white hover:text-[#00FF00]'>
          About
        </div>
        <div className='hover:underline cursor-pointer text-white hover:text-[#00FF00]'>
          Blog
        </div>
        <div className='hover:underline cursor-pointer text-white hover:text-[#00FF00]'>
          Contact
        </div>
      </div>
      <div className='w-1/3 text-right mr-10 text-white'>
        left
      </div>
    </div>
  );
};

export default Nav;
