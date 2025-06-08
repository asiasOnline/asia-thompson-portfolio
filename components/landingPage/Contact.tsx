"use client"

import React, { useEffect, useState } from 'react'
import HeroAvatar from '../ui/HeroAvatar'
import { ProjectContactForm } from '../forms/ProjectContactForm'
import { GeneralContactForm } from '../forms/GeneralContactForm'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs"

const Contact = () => {
  
  const now = new Date();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
      setInterval(() => setTime(new Date()), 1000)
  },[])

  const timeFormatter = new Intl.DateTimeFormat('en-US', {
    timeStyle: "medium",
    timeZone: 'America/Los_Angeles'
  })

  return (
    <div id="contact">
        <div className='2xl:ml-96'>
              <h3 className="relative inline-block text-4xl sm:text-6xl md:text-7xl lg:text-6xl 2xl:text-6xl text-nowrap font-display font-bold tracking-widest mt-2 mb-6">
            {/* Stroke Layer (behind) */}
            <span className="absolute inset-0 text-stroke-md xl:text-stroke-lg dark:text-stroke-white z-0">
              Let's Work Together!
            </span>

            {/* Shadow Layer (middle) */}
            <span className="absolute inset-0 z-10 text-white dark:text-black text-shadow-md">
              Let's Work Together!
            </span>

            {/* Fill Layer (on top) */}
            <span className="relative z-20 text-white">
              Let's Work Together!
            </span>
          </h3>
        </div>
        <div className='flex flex-col 2xl:flex-row max-w-7xl mx-auto'>
          
          {/*Availability*/}
          <div className='w-1/2 flex flex-col'>
            
            <div className='flex mt-8 gap-10 justify-center items-center text-center'>
              <div className='w-48 h-48 scale-x-[-1]'>
                <HeroAvatar />
              </div>
              <div className='flex flex-col max-w-60 gap-6'>
                <h3 className='text-4xl font-bold tracking-wider '>Availability</h3>
                <div className='flex flex-col'>
                  <p className='text-lg'>Monday - Friday</p>
                  <p className='text-lg'>8 A.M. to 5 P.M.</p>
                </div>
                <p className='text-center text-lg'>It's currently <span className='font-bold' suppressHydrationWarning>{time.toLocaleTimeString()}</span> in Henderson, Nevada.
                </p>
              </div>
            </div>
          </div>

          {/*Contact Form*/}
          <div className='border-l w-1/2 pl-12'>
          <Tabs defaultValue="project" className="w-[450px]">
            <TabsList>
              <TabsTrigger value="project">
                <p className='text-lg'>Project Form</p></TabsTrigger>
              <TabsTrigger value="general">
                <p className='text-lg'>General Form</p></TabsTrigger>
            </TabsList>
            <TabsContent value="project">
              <div className='my-4 border-b h-20 flex items-center'>
                <p>If you have a business project you want to kickstart or one you’re currently working and you need some assistance this is the form for you!</p>
              </div>
              <ProjectContactForm />
            </TabsContent>
            <TabsContent value="general">
              <div className='my-4 border-b h-20 flex items-center'>
                <p>Any questions, comments, or concerns? This form is the fastest way to reach me!</p>
              </div>
              <GeneralContactForm />
            </TabsContent>
          </Tabs>
          </div>
        </div>
    </div>
  )
}

export default Contact