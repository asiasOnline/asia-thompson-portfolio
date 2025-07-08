import React from 'react'
import ContactLinks from '../ui/ContactLinks'
import Link from "next/link";

const Footer = () => {
  let Links = [
    {name: "Projects", link: "/#projectHighlights", newTab: false},
    {name: "Services", link: "/#expertise", newTab: false},
    {name: "About", link: "/#about", newTab: false},
    {name: "Resume", link: "/resume/Asia-Thompson-Public-Resume.pdf", newTab: true},
    {name: "Contact", link: "/#contact", newTab: false}
]

  return (
    <div className='w-full max-w-[1920px] py-20 mx-auto mt-12 bg-black text-white dark:bg-white dark:text-black flex flex-col items-center gap-10'>
      {/*Logo*/}
        <div className="w-32 2xl:w-40 relative h-auto">
            <img 
              src="/asia-thompson-logo-dark.svg"  
              className="block dark:hidden w-full h-full" 
              alt='dark mode friendly logo'
            />
            <img 
            src="/asia-thompson-logo.svg"  
            className="hidden dark:block w-full h-full" 
            alt='default light mode friendly logo'
            />
          </div>
        {/*Contact Links*/}
        <ContactLinks />
        {/*Nav Links*/}
        <div className='flex gap-20'>
          {
            Links.map((link) => (
              <Link key={link.name} href={link.link} legacyBehavior passHref> 
                <a 
                  className='hover:underline'
                  target={link.newTab ? "_blank" : "_self"}
                  rel={link.newTab ? "noopener noreferrer" : undefined}
                >
                  {link.name}
                </a>
              </Link>
            ))
          }
        </div>
        {/*Disclaimer*/}
        <p className='text-center text-sm'>All rights reserved. &copy; 2025 Asia Thompson - Asia Does Development</p>
    </div>
  )
}

export default Footer