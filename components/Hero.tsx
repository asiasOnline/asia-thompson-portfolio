import React from 'react'
import Link from 'next/link'
import { PiMapPinLineFill } from "react-icons/pi";
import { PiFileText } from "react-icons/pi";
import HeroAvatar from './ui/HeroAvatar';
import ContactLinks from './ui/ContactLinks';

const Hero = () => {
  return (
    <div className='md:mx-auto'>
        <div className='md:w-fit mx-auto md:m-0'>
          <div className='relative w-full'>
            <div className='absolute top-0 -left-4 w-40 h-40 md:w-60 lg:w-80  bg-steelPink rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-gradientAnimation
            dark:mix-blend-screen dark:opacity-35'></div>
            <div className='
            absolute -top-8 left-24 w-40 h-40 md:h-60 lg:w-80 bg-ultramarine rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-gradientAnimation animation-delay-2000
            dark:bg-slateBlue dark:mix-blend-screen dark:opacity-25'></div>
            <div className='
            absolute top-0 left-48 w-40 h-40 md:h-60 lg:w-80 bg-fountainBlue rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-gradientAnimation animation-delay-4000
            dark:mix-blend-screen dark:opacity-35'></div>
            <div className='flex items-end gap-4 lg:gap-16'>
              <p className='text-4xl sm:text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl text-nowrap font-display font-bold tracking-wider'>Hello there!</p>
              <div className='w-20 md:w-40 h-auto'><HeroAvatar /></div>
            </div>
          </div>
            <p className='text-4xl sm:text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl text-nowrap font-display font-bold tracking-wider mt-5'>
              My name is <span className='text-transparent bg-gradient-to-r from-fountainBlue via-ultramarine to-steelPink bg-clip-text dark:from-fountainBlue dark:via-slateBlue dark:to-steelPink animate-gradientAnimation '> Asia</span>
            </p>
        </div>
      <div className='mt-6 md:mt-10'>
        <p className='text-lg md:text-2xl lg:text-4xl leading-8 md:leading-10 lg:leading-14 2xl:leading-16 font-display tracking-wider'>I&apos;m a <span className='underline decoration-steelPink decoration-4 underline-offset-8'>digital product designer</span> and a <span className='underline decoration-fountainBlue decoration-4 underline-offset-8'>full-stack developer</span> with a passion for <span className='underline decoration-ultramarine dark:decoration-slateBlue decoration-4 underline-offset-8'>concise planning and thorough execution</span>.</p>
      </div>
      <div className='mt-8 md:mt-16 lg:mt-10 flex flex-col md:gap-4 lg:flex-row lg:justify-between'>
        <div className='flex items-center gap-4'>
          <PiMapPinLineFill className='w-8 h-8'/>
          <p className='text-lg md:text-2xl font-display font-bold tracking-wider'>Based in Anaheim, CA</p>
        </div>
        <div className='flex flex-col gap-4 md:flex-row md:justify-between items-center md:gap-10'>
          <Link 
          href="/Asia-Thompson-Public-Resume.pdf"
          target='_blank'
          locale={false}
          className='text-black font-bold uppercase tracking-wider px-6 py-6 dark:text-white flex items-center'>
            <PiFileText className='mr-2 h-8 w-8'/>
            <p className="hover:underline">View Resume</p>
          </Link>
          <ContactLinks/>
        </div>
      </div>
    </div>
  )
}

export default Hero