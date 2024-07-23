import React from 'react'
import { PiMapPinLineFill } from "react-icons/pi";
import HeroAvatar from './ui/HeroAvatar';
import ContactLinks from './ui/ContactLinks';
import { Stars } from './ui/SVGAssets';

const Hero = () => {
  return (
    <div className='max-w-7xl md:mx-auto'>
        <div className='md:w-fit mx-auto md:m-0'>
          <div className='relative w-full'>
            {/*Animated Background Gradient*/}

            {/*Pink Circle*/}
            <div className='absolute top-0 -left-4 w-40 h-40 md:w-60 lg:w-80  bg-steelPink rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-gradientAnimation
            dark:mix-blend-screen dark:opacity-35'></div>

            {/*Dark Blue Circle for Light Mode | Light Blue Circle for Dark Mode*/}
            <div className='
            absolute -top-8 left-24 w-40 h-40 md:h-60 lg:w-80 bg-ultramarine rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-gradientAnimation animation-delay-2000
            dark:bg-slateBlue dark:mix-blend-screen dark:opacity-25'></div>

            {/*Light Blue Circle*/}
            <div className='
            absolute top-0 left-48 w-40 h-40 md:h-60 lg:w-80 bg-fountainBlue rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-gradientAnimation animation-delay-4000
            dark:mix-blend-screen dark:opacity-35'></div>

            {/*Main Header*/}
            {/*Headline*/}
            <div className='flex items-end gap-4 lg:gap-8 xl:gap-16'>
              <p className='text-4xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl text-nowrap font-display font-bold tracking-wider'>Hello there!</p>
              <div className='relative md:ml-4'>
                <div className='w-4 h-8 md:w-6 md:h-8 lg:w-10 lg:h-12 absolute -bottom-4 -left-2 md:-bottom-2 lg:-left-8'><Stars width='40' height='48'/></div>
                <div className='w-20 md:w-32 lg:w-48 h-auto'><HeroAvatar /></div>
                <div className='w-8 h-10 md:w-12 md:h-16 lg:w-20 lg:h-24 absolute -top-2 -right-6 md:-top-4 md:-right-10 lg:-top-8 lg:-right-16'><Stars /></div>
              </div>
            </div>
          </div>
            {/*Sub-Headline*/}
            <p className='text-4xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl text-nowrap font-display font-bold tracking-wider mt-5 lg:mt-8'>
              My name is <span className='text-transparent bg-gradient-to-r from-fountainBlue via-ultramarine to-steelPink bg-clip-text dark:from-fountainBlue dark:via-slateBlue dark:to-steelPink animate-gradientAnimation '> Asia</span>
            </p>
        </div>
      
      {/*Sub-Header*/}
      <div className='mt-6 md:mt-10'>
        <p className='text-lg md:text-2xl lg:text-3xl leading-8 md:leading-10 lg:leading-14 2xl:leading-16 font-display tracking-wider'>I&apos;m a <span className='underline decoration-steelPink decoration-4 underline-offset-8'>digital product designer</span> and a <span className='underline decoration-fountainBlue decoration-4 underline-offset-8'>full-stack developer</span> with a passion for <span className='underline decoration-ultramarine dark:decoration-slateBlue decoration-4 underline-offset-8'>concise planning and thorough execution</span>.</p>
      </div>
      
      <div className='mt-12 lg:mt-10 flex flex-col lg:flex-row gap-8 md:gap-12 xl:flex-row lg:justify-between'>
        {/*Location*/}
        <div className='flex items-center gap-4'>
          <PiMapPinLineFill className='w-8 h-8 lg:w-10 lg:h-10'/>
          <p className='text-lg md:text-2xl font-display font-bold tracking-wider'>Based in Anaheim, CA</p>
        </div>
        {/*Mail & Social Media Links*/}
        <ContactLinks/>
      </div>
    </div>
  )
}

export default Hero