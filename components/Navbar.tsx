"use client";

import React, { useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent, } from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from "next/link";
import Logo from './ui/Logo'
import ThemeButton from './ui/ThemeButton'

const Navbar = () => {
  return (
    <nav className='w-screen px-32 py-14 flex justify-between items-center'>
      <Logo 
        width="172"
        height="88"
      />
      <div className='flex items-center gap-20'>
        <ThemeButton />
        <div className='flex gap-10 font-bold uppercase tracking-wider'>
          <a>Projects</a>
          <a>Expertise</a>
          <a>About</a>
          <a>Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar