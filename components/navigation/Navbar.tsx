"use client";

import React, { useState } from 'react'
import { Button } from "@/components/ui/Button";
import ThemeButton from '../ui/ThemeButton';
import Location from '../ui/Location';
import Link from "next/link";
import { SlMenu } from "react-icons/sl";
import { CgClose } from "react-icons/cg";
import DateTimeDisplay from '../ui/DateTimeDisplay';

{/**
  const now = new Date();
const dayFormatter = new Intl.DateTimeFormat('en-US', {
  dateStyle: "short",
  timeZone: 'America/Los_Angeles'
})
const timeFormatter = new Intl.DateTimeFormat('en-US', {
  timeStyle: "medium",
  timeZone: 'America/Los_Angeles'
})
  */}

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleOff = () => {
    setIsMenuOpen(false);
  };

  let Links = [
    {name: "Projects", link: "/#projectHighlights", newTab: false},
    {name: "Services", link: "/#expertise", newTab: false},
    {name: "About", link: "/#about", newTab: false},
    {name: "Resume", link: "/resume/Asia-Thompson-Public-Resume.pdf", newTab: true},
    {name: "Contact", link: "/#contact", newTab: false}
]

const defaultNavbarStyle = `lg:flex gap-10 font-bold uppercase tracking-wider`

  return (
    <div>
      <div className='w-full max-w-[1920px] sticky top-0 mx-auto pt-6 px-4 md:px-12 lg:px-24 xl:px-24 xl:pt-10 flex justify-between items-center z-40'>
        <div className='w-1/3 md:w-1/6 lg:w-32'>
          <Link href="/">
          <div className="w-24 m:w-32 2xl:w-40 relative h-auto">
            <img 
              src="/asia-thompson-logo.svg" 
              className="block dark:hidden w-full h-full" 
              alt='default light mode friendly logo'
            />
            <img 
            src="/asia-thompson-logo-dark.svg"  
            className="hidden dark:block w-full h-full" 
            alt='dark mode friendly logo'
            />
          </div>
          </Link>
        </div>
        <div className='flex 2xl:gap-12'>
          <ThemeButton />
          <Button 
          className="text-black dark:text-white" 
          variant="outline" 
          size="icon" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CgClose className='w-6 h-6 2xl:w-8 2xlh-8'/> : <SlMenu className='w-6 h-6 2xlw-8 2xlh-8'/>}
          </Button>
          <nav className={isMenuOpen ? `absolute top-[125%] right-20 flex flex-col ${defaultNavbarStyle}` : `hidden`}>
            {
                Links.map((link) => (
                  <Link key={link.name} href={link.link} legacyBehavior passHref> 
                    <a 
                      className='hover:underline'
                      onClick={toggleOff}
                      target={link.newTab ? "_blank" : "_self"}
                      rel={link.newTab ? "noopener noreferrer" : undefined}
                    >
                      {link.name}
                    </a>
                  </Link>
                ))
            }
          </nav>
        </div>
      </div> 
      <div className={ isMenuOpen ? `fixed w-screen h-screen top-0 left-0 bg-white opacity-100 z-30 dark:bg-black` : `hidden`}>

      </div> 
    </div>
  )
}

export default Navbar