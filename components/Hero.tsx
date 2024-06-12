import React from 'react'
import Image from 'next/image'
import { PiMapPinLineFill } from "react-icons/pi";
import { Button } from '@/components/ui/Button'

const Hero = () => {
  return (
    <div className='w-4/5 px-32 mt-8 mx-auto'>
        <div>
            <p className='text-9xl font-display font-semibold tracking-wide'>Hello there!</p>
            <p className='text-9xl font-display font-semibold tracking-wide mt-5'>My name is <span className='text-9xl'>Asia</span></p>
        </div>
      <div className='mt-10'>
        <p className='text-4xl font-display tracking-wider'>I'm a digital product designer and a full-stack developer with a passion for concise planning and thorough execution.</p>
      </div>
      <div className='mt-20 flex justify-between'>
        <div className='flex items-center gap-4'>
          <PiMapPinLineFill className='w-8 h-8'/>
          <p className='text-2xl font-display'>Based in Anaheim, CA</p>
        </div>
        <div className='flex'>
          <Button>Contact</Button>
          <Button>View Resume</Button>
        </div>
      </div>
    </div>
  )
}

export default Hero