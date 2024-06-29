"use client";

import React, { useState } from 'react'
import Link from "next/link";
import Logo from './ui/Logo'
import ThemeButton from './ui/ThemeButton'
import { SlMenu } from "react-icons/sl";


const Navbar = () => {
  return (
    <div className='w-screen max-w-[1920px] mx-auto px-12 lg:px-24 xl:px-32 py-14 mb-12 flex justify-between items-center'>
      <Logo 
        width="172"
        height="88"
      />
      <div className='flex items-center gap-20'>
        <ThemeButton />
        <SlMenu className='w-6 h-6 lg:hidden'/>
        <nav className='hidden lg:flex gap-10 font-bold uppercase tracking-wider'>
          <Link href="#expertise">Expertise</Link>
          <Link href="#projectHighlights">Projects</Link>
          <Link href="#about">About</Link>
        </nav>
      </div>  
    </div>
  )
}

export default Navbar