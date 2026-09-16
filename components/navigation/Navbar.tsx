"use client";

import React, { useState, useRef } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
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
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const priorYRef = useRef(0);

  const toggleOff = () => {
    setIsMenuOpen(false);
  };

  let Links = [
    {name: "Services", link: "/#expertise", newTab: false},
    {name: "Projects", link: "/#projectHighlights", newTab: false},
    {name: "Blog", link: "/#about", newTab: false},
    {name: "About", link: "/#about", newTab: false},
     //{name: "Resume", link: "/resume/Asia-Thompson-Public-Resume.pdf", newTab: true},
    {name: "Contact", link: "/contact", newTab: false}
]

  useMotionValueEvent(scrollY, 'change', (y) => {
    const yDifference = y - priorYRef.current;
    if (Math.abs(yDifference) > 50) {
      setIsHidden(yDifference > 0); 
    }

    priorYRef.current = y;
  });

  return (
    <>
      {/*Extended Navbar*/}
      <motion.div 
        variants={{
          hidden: {
            y: "-90%",
          },
          visible: {
            y: "0%",
          }
        }}
        animate={isHidden ? "hidden" : "visible"}
        whileHover="visible"
        transition={{
          duration: 0.2,
        }}
        className='bg-white border-ashGray border-4 border-r-4 border-opacity-20 my-4 sticky top-0 mx-auto pt-6 px-4 md:px-12 lg:px-8 xl:ml-32 xl:mr-32 py-6 xl:py-4 2xl:mr-32 flex justify-between items-center z-40'>
        {/*Logo*/}
        <div className='w-auto'>
          <Link href="/">
          <div className="w-24 m:w-32 xl:w-52 2xl:w-60 relative h-auto">
            <img 
              src="logos/asiasOnline-primary-green-logo.svg" 
              className="block dark:hidden w-full h-full" 
              alt='default light mode logo'
            />
            <img 
            src="logos/asiasOnline-primary-white-logo.svg"  
            className="hidden dark:block w-full h-full" 
            alt='dark mode logo'
            />
          </div>
          </Link>
        </div>
        <nav className={isMenuOpen ? `absolute top-[50%] left-[38%] mt-20 text-2xl md:text-4xl lg:text-6xl flex flex-col gap-8 lg:gap-14 font-bold uppercase tracking-wider` : `flex align-middle gap-20 rounded-full py-4 px-2 text-black  dark:text-white`}>
            {
                Links.map((link) => (
                  <Link key={link.name} href={link.link} legacyBehavior passHref> 
                    <a 
                      className='font-bold hover:underline'
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
        {/*Right Navigation Buttons
        <div className='flex gap-6 2xl:gap-12'>
          <ThemeButton />
          <Button 
          className="text-black dark:text-white block lg:hidden" 
          variant="outline" 
          size="icon" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CgClose className='w-6 h-6 2xl:w-8 2xlh-8'/> : <SlMenu className='w-6 h-6 2xlw-8 2xlh-8'/>}
          </Button>
        </div>
        */}
      </motion.div> 
      <div className={ isMenuOpen ? `fixed w-full h-full top-0 right-0 overflow-y-hidden bg-white opacity-100 z-30 dark:bg-black dark:border-white` : `hidden`}>

      </div> 
    </>
  )
}

export default Navbar