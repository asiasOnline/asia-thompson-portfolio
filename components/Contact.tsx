import React from 'react'
import PageHeader from './ui/PageHeader'
import ContactLinks from './ui/ContactLinks'
import HeroAvatar from './ui/HeroAvatar'
import { ContactForm } from './ui/ContactForm'

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
        <PageHeader title='Contact'/>
        <div className='flex max-w-7xl mx-auto'>
          {/*Contact Call Out*/}
          <div className='w-2/3 flex flex-col'>
            <div className='flex flex-col gap-4'>
              <h2 className='text-lg font-bold md:text-2xl lg:text-3xl leading-8 md:leading-10 lg:leading-14 2xl:leading-16 font-display tracking-wider'><span className='text-transparent bg-gradient-to-r from-fountainBlue via-ultramarine to-steelPink bg-clip-text dark:from-fountainBlue dark:via-slateBlue dark:to-steelPink'>Let's Work Together!</span></h2>
              <p>Fill out the form to get in contact me as soon as possible.</p>
              <p>Otherwise, contact me through one of my socials and I’ll do my best to follow up there as well. </p>
              <ContactLinks className='mt-4 place-self-center'/>
            </div>
            
            <div className='flex mt-8 gap-10 justify-center items-center text-center'>
              <div className='w-48 h-48 scale-x-[-1]'><HeroAvatar /></div>
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