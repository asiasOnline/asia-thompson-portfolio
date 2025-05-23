import React from 'react'
import ContactLinks from '../ui/ContactLinks'
import HeroAvatar from '../ui/HeroAvatar'
import { ContactForm } from '../ui/ContactForm'

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
        <div className='flex max-w-7xl mx-auto'>
          <div>
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
          {/*Contact Call Out*/}
          <div className='w-2/3 flex flex-col'>
            <div className='flex flex-col gap-4'>
              <p>Fill out the form to get in contact me as soon as possible.</p>
              <p>Otherwise, contact me through one of my socials and I&apos;ll do my best to follow up there as well. </p>
              <ContactLinks className='mt-4 place-self-center'/>
            </div>
            
            <div className='flex mt-8 gap-10 justify-center items-center text-center'>
              <div className='w-48 h-48 scale-x-[-1]'>
                <HeroAvatar />
              </div>
              <div className='flex flex-col max-w-60 gap-4'>
                <h3 className='text-2xl font-bold tracking-wider '>My Timezone</h3>
                <p>It is currently <br /><span className='font-bold'>{dayFormatter.format(now)} <br/> {timeFormatter.format(now)}  </span> <br />in Anaheim, CA right now.</p>
              </div>
            </div>
          </div>

          {/*Contact Form*/}
          <div className='w-1/3'>
            <ContactForm />
          </div>
        </div>
    </div>
  )
}

export default Contact