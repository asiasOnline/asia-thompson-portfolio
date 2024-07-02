"use client";

import React, { useState } from 'react'
import Logo from './ui/Logo'
import { Button } from "@/components/ui/Button";
import ThemeButton from './ui/ThemeButton'
import Link from "next/link";
import { SlMenu } from "react-icons/sl";
import { CgClose } from "react-icons/cg";


const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  let Links = [
    {name: "Expertise", link: "#expertise"},
    {name: "Projects", link: "#projectHighlights"},
    {name: "About", link: "#about"}
]


  return (
    <div className='w-screen max-w-[1920px] mx-auto p-6 md:px-12 lg:px-24 xl:px-32 xl:py-14 mb-6 flex justify-between items-center'>
      <Logo 
        width="172"
        height="88"
      />
      <div className='flex items-center gap-10 md:gap-12 lg:gap-20'>
        <ThemeButton />
        <Button className="md:hidden bg-white dark:bg-black" variant="outline" size="icon" onClick={toggleMenu}>
          {isMenuOpen ? <CgClose className='w-8 h-8'/> : <SlMenu className='w-8 h-8'/>}
        </Button>
        <nav className={`hidden md:flex gap-10 font-bold uppercase tracking-wider`}>
          {
              Links.map((link) => (
                <Link key={link.name}
                className='hover:underline'
                href={link.link}> {link.name}
                </Link>
              ))
          }
        </nav>
      </div>  
    </div>
  )
}

export default Navbar