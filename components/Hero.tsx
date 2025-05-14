import React from 'react'
import { PiMapPinLineFill } from "react-icons/pi";
import { Button } from "@/components/ui/Button"
import HeroAvatar from './ui/HeroAvatar';
import ContactLinks from './ui/ContactLinks';
import { Stars } from './ui/SVGAssets';

const Hero = () => {
  return (
    <div id="hero" className='mx-auto flex flex-col gap-6'>
        <div className='mx-auto 2xl:m-0 flex flex-col items-center'>
          <div className='flex flex-col items-center w-full'>
            {/*Main Header*/}

            {/*Intro & Avatar Header*/}
            <div className='flex items-end mb-3'>
              <p className='text-3xl'>My name is <b>Asia</b>.</p>
              <div className='w-24 md:w-40 h-auto'>
                <HeroAvatar />
              </div>
            </div>

            {/*Headline*/}
            <div className='gap-4 lg:gap-8 xl:gap-16 mt-6'>
              <h1 className='text-4xl sm:text-6xl md:text-6xl lg:text-7xl 2xl:text-8xl text-nowrap font-display font-bold tracking-wider'>I Help Businesses Build </h1>
              {/*
                <div className='relative md:ml-4'>
                <div className='w-4 h-8 md:w-6 md:h-8 lg:w-10 lg:h-12 absolute -bottom-4 -left-2 md:-bottom-2 lg:-left-8'><Stars width='40' height='48'/></div>
                <div className='w-8 h-10 md:w-12 md:h-16 lg:w-20 lg:h-24 absolute -top-2 -right-6 md:-top-4 md:-right-10 lg:-top-8 lg:-right-16'><Stars /></div>
                </div>
              */}
            </div>
          </div>
            {/*Sub-Headline*/}
            <h1 className="relative inline-block text-4xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-8xl text-nowrap font-display font-bold tracking-wider lg:mt-4">
            {/* Stroke Layer (behind) */}
            <span className="absolute inset-0 text-stroke dark:text-stroke-white z-0">
              Better Products
            </span>

            {/* Shadow Layer (middle) */}
            <span className="absolute inset-0 z-10 text-white dark:text-black text-shadow">
              Better Products
            </span>

            {/* Fill Layer (on top) */}
            <span className="relative z-20 text-fill-gradient bg-gradient-to-r from-brightBlue via-brightPurple to-brightPink dark:from-brightBlue dark:via-slateBlue dark:to-brightPink">
              Better Products
            </span>
          </h1>
        </div>
      
      {/*Sub-Header*/}
      <div className='w-3/5 mx-auto md:mt-6'>
        <p className='text-lg md:text-3xl leading-8 md:leading-10 lg:leading-10 2xl:leading-12 tracking-normal'>I&apos;m a <b><span className='underline'>digital product designer</span></b> and <b><span className='underline'>full stack developer</span></b> who helps small to mid sized businesses with the technical stuff, so they can focus on the work they love.</p>
      </div>
      {/*
        <div className='mt-12 lg:mt-10 flex flex-col lg:flex-row gap-8 md:gap-12 xl:flex-row lg:justify-between'>
        {/*Location
        <div className='flex items-center gap-4'>
          <PiMapPinLineFill className='w-8 h-8 lg:w-10 lg:h-10'/>
          <p className='text-lg md:text-2xl font-display font-bold tracking-wider'>Based in Anaheim, CA</p>
        </div>
        {/*Mail & Social Media Links 
          <ContactLinks className='place-self-center'/>
      </div>
      */}
      <div className='flex gap-12 justify-center'>
        <Button 
          variant="outline" 
          type="submit" 
          className="text-md min-w-52 gap-4 font-bold tracking-wide p-6 border-2 border-black button-shadow-xl dark:bg-black dark:text-white dark:border-white dark:button-shadow-none"
          >View My Projects
        </Button>
        <Button 
          variant="default" 
          type="submit" 
          className="text-md min-w-52 gap-4 font-bold tracking-wide p-6 border-2 border-black button-shadow-xl dark:bg-brightPurple  dark:button-shadow-none"  
          >Let's Chat
        </Button>
      </div>
      <div className='flex items-center gap-4 justify-start'>
        <div className='w-3 h-3 rounded-full bg-green'></div>
        Available for Work
      </div>
    </div>
  )
}

export default Hero