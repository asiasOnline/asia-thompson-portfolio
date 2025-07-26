"use client"

import React, { useEffect, useState } from 'react'
import HeroAvatar from '../ui/HeroAvatar'
import { GeneralContactForm } from '../forms/GeneralContactForm'

const Contact = () => {
  
  const now = new Date();
  const [time, setTime] = useState(now);

  useEffect(() => {
      setInterval(() => setTime(new Date()), 1000)
  },[])

  const timeFormatter = new Intl.DateTimeFormat('en-US', {
    timeStyle: "medium",
    timeZone: 'America/Los_Angeles'
  })

  return (
    <div id="contact">
      {/*Title*/}
        <div className='mx-8 lg:mx-auto md:ml-20 lg:ml-32 2xl:ml-96'>
              <h3 className="relative inline-block text-4xl sm:text-6xl text-nowrap font-display font-bold tracking-widest mt-2 mb-6">
            {/* Stroke Layer (behind) */}
            <span className="absolute inset-0 text-stroke-md xl:text-stroke-lg dark:text-stroke-white z-0">
              Let&apos;s Work Together!
            </span>

            {/* Shadow Layer (middle) */}
            <span className="absolute inset-0 z-10 text-white dark:text-black text-shadow-md">
              Let&apos;s Work Together!
            </span>

            {/* Fill Layer (on top) */}
            <span className="relative z-20 text-white">
              Let&apos;s Work Together!
            </span>
          </h3>
        </div>
        <div className='flex flex-col xl:flex-row max-w-7xl mx-auto'>
          
          {/*Availability*/}
          <div className='w-full xl:w-1/2 flex flex-col'>
            
            <div className='flex flex-col md:flex-row mt-8 gap-4 md:gap-10 justify-center items-center text-center'>
              <div className='w-32 h-32 md:w-48 md:h-48 scale-x-[-1]'>
                <HeroAvatar />
              </div>
              <div className='flex flex-col max-w-60 gap-6'>
                <h3 className='text-4xl font-bold tracking-wider '>Availability</h3>
                <div className='flex flex-col'>
                  <p className='text-lg'>Monday - Friday</p>
                  <p className='text-lg'>8 A.M. to 5 P.M.</p>
                </div>
                <p className='text-center text-lg'>It&apos;s currently <span className='font-bold' suppressHydrationWarning>{time.toLocaleTimeString()}</span> in Henderson, Nevada.
                </p>
              </div>
            </div>
          </div>

          {/*Contact Form*/}
          <div className='xl:border-l w-full xl:w-1/2 pl-12'>
            <div className='my-4 border-b h-20 flex items-center'>
              <p>Any questions, comments, or concerns? This form is the fastest way to reach me!</p>
            </div>
            <GeneralContactForm />
          </div>
        </div>
    </div>
  )
}

export default Contact