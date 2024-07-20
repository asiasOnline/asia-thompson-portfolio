import React from 'react'
import PageHeader from './ui/PageHeader'
import ContactLinks from './ui/ContactLinks'
import HeroAvatar from './ui/HeroAvatar'
import { ContactForm } from './ui/ContactForm'

const Contact = () => {
  return (
    <div>
        <PageHeader title='Contact'/>
        <div className='flex'>
          <div className='w-1/2 flex flex-col'>
            <h1>Let's Work Together!</h1>
            <p>Fill out the form to get in contact me as soon as possible.</p>
            <p>Otherwise, contact me through one of my socials and I’ll do my best to follow up there as well. </p>
            <ContactLinks />
            <div className='flex'>
              <HeroAvatar />
              <div>
                <h2>My Timezone</h2>
                <p>4:03 in Anaheim, CA</p>
                <p>If you contact me now I'll typically respond immediately!</p>
              </div>
            </div>
          </div>
          <div className='w-1/2'>
            <ContactForm />
          </div>
        </div>
    </div>
  )
}

export default Contact