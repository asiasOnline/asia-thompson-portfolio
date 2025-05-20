import React from 'react'
import AnimatedCounter from '../ui/AnimatedCounter'

const StatsBanner = () => {
  return (
    <div id="statsBanner" className='w-full flex justify-around bg-ultramarine text-white dark:bg-brightPurple dark:text-black py-10'>
        <div className="flex flex-col justify-between gap-3 text-center">
          <p className='text-4xl font-bold'>
            <AnimatedCounter startingNumber={0} endingNumber={6} />+
          </p>
          <p className='text-2xl'>Years of Experience</p>
        </div>
        <div className="flex flex-col justify-between gap-3 text-center">
          <p className='text-4xl font-bold'>
            <AnimatedCounter startingNumber={0} endingNumber={8} />+
          </p>
          <p className='text-2xl'>Industries Served</p>
        </div>
        <div className="flex flex-col justify-between gap-3 text-center">
          <p className='text-4xl font-bold'>
            <AnimatedCounter startingNumber={0} endingNumber={30} />+
          </p>
          <p className='text-2xl'>Years of Experience</p>
        </div>
        <div className="flex flex-col justify-between gap-3 text-center">
          <p className='text-4xl font-bold'>
            <AnimatedCounter startingNumber={0} endingNumber={20} />+
          </p>
          <p className='text-2xl'>Brand Identities Crafted</p>
        </div>
    </div>
  )
}

export default StatsBanner