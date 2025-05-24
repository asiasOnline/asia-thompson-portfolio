import React from 'react'
import HeroAvatar from '../ui/HeroAvatar'
import { ProjectContactForm } from '../forms/ProjectContactForm'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs"

const now = new Date();
const dayFormatter = new Intl.DateTimeFormat('en-US', {
  dateStyle: "full",
  timeZone: 'America/Los_Angeles'
})
const timeFormatter = new Intl.DateTimeFormat('en-US', {
  timeStyle: "short",
  timeZone: 'America/Los_Angeles'
})

const Contact = () => {
  return (
    <div id="contact">
        <div className='ml-32'>
              <h3 className="relative inline-block text-4xl sm:text-6xl md:text-7xl lg:text-6xl 2xl:text-6xl text-nowrap font-display font-bold tracking-widest mt-2 mb-6">
            {/* Stroke Layer (behind) */}
            <span className="absolute inset-0 text-stroke dark:text-stroke-white z-0">
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
        <div className='flex max-w-7xl mx-auto'>
          
          {/*Availability*/}
          <div className='w-1/2 flex flex-col'>
            
            <div className='flex mt-8 gap-10 justify-center items-center text-center'>
              <div className='w-48 h-48 scale-x-[-1]'>
                <HeroAvatar />
              </div>
              <div className='flex flex-col max-w-60 gap-4'>
                <h3 className='text-4xl font-bold tracking-wider '>Availability</h3>
                <p>Monday - Friday</p>
                <p>8 A.M. to 5 P.M.</p>
                <p className='text-left'>Currently <span className='font-bold'>{dayFormatter.format(now)} {timeFormatter.format(now)}  </span> in Henderson, NV right now.
                </p>
              </div>
            </div>
          </div>

          {/*Contact Form*/}
          <div className='border-l w-1/2'>
          <Tabs defaultValue="project" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="project">Project Form</TabsTrigger>
              <TabsTrigger value="general">General Form</TabsTrigger>
            </TabsList>
            <TabsContent value="project">
              <p>If you have a business project you want to kickstart or one you’re currently working and you need some assistance this is the form for you!</p>
              <ProjectContactForm />
            </TabsContent>
            <TabsContent value="general">
              Any questions, comments, or concerns? This form is the fastest way to reach me!
            </TabsContent>
          </Tabs>
          </div>
        </div>
    </div>
  )
}

export default Contact