"use client"

import React, { useEffect, useState } from 'react'
import Navbar from '@/components/navigation/Navbar'
import Footer from '@/components/navigation/Footer'
import HeroAvatar from '../../components/ui/HeroAvatar'
import { ProjectContactForm } from '../../components/forms/ProjectContactForm'
import { GeneralContactForm } from '../../components/forms/GeneralContactForm'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/Tabs"

const ContactPage = () => {
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
      <div id="contact" className='bg-white overflow-x-hidden dark:bg-black'>
        <Navbar />
        <div className='mx-8 lg:mx-auto md:ml-20 lg:ml-40 2xl:ml-96'>
                <h3 className="relative inline-block text-6xl text-nowrap font-display font-bold tracking-widest mt-2 mb-6">
              {/* Stroke Layer (behind) */}
              <span className="absolute inset-0 text-stroke-md xl:text-stroke-lg dark:text-stroke-white z-0">
                Contact
              </span>
  
              {/* Shadow Layer (middle) */}
              <span className="absolute inset-0 z-10 text-white dark:text-black text-shadow-md">
              Contact
              </span>
  
              {/* Fill Layer (on top) */}
              <span className="relative z-20 text-white">
              Contact
              </span>
            </h3>
          </div>
          <div className='flex flex-col xl:flex-row max-w-7xl mx-auto gap-8 xl:gap-0'>
            
            {/*Availability*/}
            <div className='w-full xl:w-1/2 flex flex-col'>
            
            <div className='flex flex-col md:flex-row mt-8 gap-4 md:gap-10 justify-center items-center text-center'>
              <div className='w-28 md:w-32 2xl:w-40 scale-x-[-1]'>
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
            <div className='ml-20 w-full lg:w-1/2 xl:pl-12 xl:border-l'>
            <Tabs defaultValue="project" className="w-[450px]">
              <TabsList>
                <TabsTrigger value="project">
                  <p className='text-lg'>Project Form</p></TabsTrigger>
                <TabsTrigger value="general">
                  <p className='text-lg'>General Form</p></TabsTrigger>
              </TabsList>
              <TabsContent value="project">
                <div className='my-4 border-b h-20 flex items-center'>
                  <p>If you have a business project you want to kickstart or one you&apos;re currently working and you need some assistance this is the form for you!</p>
                </div>
                <div className='max-w-[500px]'>
                <ProjectContactForm />
                </div>
              </TabsContent>
              <TabsContent value="general">
                <div className='my-4 border-b h-20 flex items-center'>
                  <p>Any questions, comments, or concerns? This form is the fastest way to reach me!</p>
                </div>
                <div className='max-w-[500px]'>
                  <GeneralContactForm />
                </div>
              </TabsContent>
            </Tabs>
            </div>
          </div>
        <Footer />
      </div>
    )
}

export default ContactPage