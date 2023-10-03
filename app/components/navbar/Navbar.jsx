'use client'
import Link from 'next/link'
import { useState } from 'react';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';


const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className='flex items-center justify-between px-8 py-8 fixed z-50 w-screen'>
      <div className='flex items-center justify-center'>
        <Link href='/' className='text-custom_yellow italic'>
          BRANDER
        </Link>
      </div>
      <div className='flex items-end justify-end relative w-full'>
        <div className='flex items-center justify-center'>
          <div className='hidden md:flex mr-6'>
              <p className='ml-12 text-lg'><Link href='/'>Home</Link></p>
              <p className='ml-12 text-lg'><Link href='/pages/portfolio'>Portfolio</Link></p>
              <p className='ml-12 text-lg'><Link href='/pages/about'>About</Link></p>
              <p className='ml-12 text-lg'><Link href='/pages/contact'>Contact</Link></p>
          </div>
          <button 
            className='outline-none text-2xl text-custom_yellow px-1 py-1 border-2 border-custom_yellow rounded-full md:hidden'
            onClick={() => setNavbar(!navbar)}
            >{navbar ? <AiOutlineClose />: <BiMenu />}</button>
        </div>
        {navbar ? (
                  <div id='menuLinks' className='absolute top-16 right-1 bg-gray-600 px-2 pb-2 z-50 rounded-xl'>
                  <p className='mt-2'><Link href='/' onClick={() => setNavbar(!navbar)}>Home</Link></p>
                  <p className='mt-2'><Link href='/pages/portfolio' onClick={() => setNavbar(!navbar)}>Portfolio</Link></p>
                  <p className='mt-2'><Link href='/pages/about' onClick={() => setNavbar(!navbar)}>About</Link></p>
                  <p className='mt-2'><Link href='/pages/contact' onClick={() => setNavbar(!navbar)}>Contact</Link></p>
                </div>
        ) : (
          <div>
            
          </div>
        )}

      </div>
    </div>
  )
}

export default Navbar