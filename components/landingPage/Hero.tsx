import React from 'react'
import { PiMapPinLineFill } from "react-icons/pi";
import { Button } from "@/components/ui/Button"
import HeroAvatar from '../ui/HeroAvatar';
import ContactLinks from '../ui/ContactLinks';
import { Stars } from '../ui/SVGAssets';
import Availability from '../ui/Availability';

const Hero = () => {
  return (
    <div id="hero" className='relative px-8 md:px-16 lg:px-24 xl:px-28 2xl:px-32 mx-auto flex flex-col gap-6 '>
      {/*Borders*/}
      {/*Top Left*/}
      <div className='absolute top-8 -left-0'>
        <div className='w-44 relative left-14'>
            <hr className='border-t-black dark:border-t-white'/>
        </div>
        < div className='w-44 rotate-90 relative top-14'>
            <hr className='border-t-black dark:border-t-white'/>
          </div>
        </div>
        {/*Top Right*/}
        <div className='absolute rotate-90 top-8 right-0'>
          <div className='w-44 relative left-14'>
            <hr className='border-t-black dark:border-t-white'/>
          </div>
          <div className='w-44 rotate-90 relative top-14'>
              <hr className='border-t-black dark:border-t-white'/>
          </div>
        </div>
        {/*Bottom Right*/}
        <div className='absolute rotate-180 right-0 -bottom-8'>
          <div className='w-44 relative left-14'>
            <hr className='border-t-black dark:border-t-white'/>
          </div>
          <div className='w-44 rotate-90 relative top-14'>
              <hr className='border-t-black dark:border-t-white'/>
          </div>
        </div>
        {/*Bottom Right*/}
        <div className='absolute -rotate-90 left-0 -bottom-8'>
          <div className='w-44 relative left-14'>
            <hr className='border-t-black dark:border-t-white'/>
        </div>
        <div className='w-44 rotate-90 relative top-14'>
            <hr className='border-t-black dark:border-t-white'/>
        </div>
        </div>

        {/*Main Hero Content*/}
        <div className='mx-auto 2xl:m-0 flex flex-col items-center gap-16'>
          
            {/*Intro & Avatar Header*/}
            <div className='flex items-end mb-3 gap-4'>
              <p className='text-2xl'>My name is <b>Asia</b>.</p>
              <div className='w-24 md:w-40 h-auto'>
                <div className="relative w-40 h-auto">
                  < HeroAvatar />
                </div>
              </div>
              <p className='w-96 text-2xl'>A <span className='underline font-bold'>digital product designer</span> and <br/> <span className='underline font-bold'>full-stack developer</span> based in <br/> Long Beach, California.</p>
            </div>

            {/*Intro & Avatar Header*/}
            <div className='flex flex-col text-center'>
               {/*Headline*/}
            <div className='gap-4 lg:gap-8 xl:gap-16'>
              <h1 className='text-4xl sm:text-6xl md:text-6xl lg:text-7xl 2xl:text-9xl text-nowrap font-display font-bold tracking-wider'>I Help Creatives Build </h1>
              {/*
                <div className='relative md:ml-4'>
                <div className='w-4 h-8 md:w-6 md:h-8 lg:w-10 lg:h-12 absolute -bottom-4 -left-2 md:-bottom-2 lg:-left-8'><Stars width='40' height='48'/></div>
                <div className='w-8 h-10 md:w-12 md:h-16 lg:w-20 lg:h-24 absolute -top-2 -right-6 md:-top-4 md:-right-10 lg:-top-8 lg:-right-16'><Stars /></div>
                </div>
              */}
            </div>

            {/*Sub-Headline*/}
            <h1 className="relative inline-block text-4xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl text-nowrap font-display font-bold tracking-wider lg:mt-4">
            {/* Stroke Layer (behind) */}
            <span className="absolute inset-0 text-stroke dark:text-stroke-white z-0">
              Better Products
            </span>

            {/* Shadow Layer (middle) */}
            <span className="absolute inset-0 z-10 text-white dark:text-black text-shadow-lg">
              Better Products
            </span>

            {/* Fill Layer (on top) */}
            <span className="relative z-20 text-fill-gradient bg-gradient-to-r from-brightBlue via-brightPurple to-brightPink dark:from-brightBlue dark:via-slateBlue dark:to-brightPink">
              Better Products
            </span>
          </h1>
            </div>
           
          {/*Sub-Header*/}
          <div className='w-full flex justify-between'>
            <div className='w-1/3'>
              <p className='text-2xl'>Together, we’ll turn your bold ideas into a tangible product that <em>empowers</em>, <em>inspires</em>, and <em>influences</em>.</p>
            </div>
            <div className='flex flex-col items-center gap-4'>
              <Availability />
              <Button 
                variant="default" 
                type="submit" 
                className="text-lg min-w-60  gap-4 font-bold tracking-wide px-5 py-6 border-2 border-ultramarine dark:bg-brightPurple"  
                >Let's Chat
              </Button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero