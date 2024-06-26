import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PiMapPinLineFill } from "react-icons/pi";
import { PiFileText } from "react-icons/pi";
import { TbMail } from "react-icons/tb";
import { Button } from '@/components/ui/Button'

const Hero = () => {
  return (
    <div className='mx-auto'>
        <div>
          <div className='relative w-full'>
            <div className='absolute top-0 -left-4 w-80 h-80 bg-steelPink rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-gradientAnimation
            dark:mix-blend-screen dark:opacity-35'></div>
            <div className='
            absolute -top-8 left-24 w-80 h-80 bg-ultramarine rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-gradientAnimation animation-delay-2000
            dark:bg-slateBlue dark:mix-blend-screen dark:opacity-25'></div>
            <div className='
            absolute top-0 left-48 w-80 h-80 bg-fountainBlue rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-gradientAnimation animation-delay-4000
            dark:mix-blend-screen dark:opacity-35'></div>
            <div className='flex items-end gap-16'>
              <p className='text-9xl font-display font-bold tracking-wider'>Hello there!</p>
              <Image 
                src="/asiaSmilingAvatar.png"
                width={160}
                height={160}
                alt="Asia's profile avatar"
              />
              </div>
          </div>
            <p className='text-9xl font-display font-bold tracking-wider mt-5'>
              My name is <span className='text-9xl text-transparent bg-gradient-to-r from-fountainBlue via-ultramarine to-steelPink bg-clip-text dark:from-fountainBlue dark:via-slateBlue dark:to-steelPink animate-gradientAnimation '>Asia</span>
            </p>
        </div>
      <div className='mt-10'>
        <p className='text-4xl font-display tracking-wider leading-relaxed'>I&apos;m a <span className='underline decoration-steelPink decoration-4 underline-offset-8'>digital product designer</span> and a <span className='underline decoration-fountainBlue decoration-4 underline-offset-8'>full-stack developer</span> with a passion for <span className='underline decoration-ultramarine dark:decoration-slateBlue decoration-4 underline-offset-8'>concise planning and thorough execution</span>.</p>
      </div>
      <div className='mt-20 flex justify-between'>
        <div className='flex items-center gap-4'>
          <PiMapPinLineFill className='w-8 h-8'/>
          <p className='text-2xl font-display font-bold tracking-wider'>Based in Anaheim, CA</p>
        </div>
        <div className='flex items-center gap-6'>
          <Button className='w-fit bg-ultramarine text-white font-bold uppercase tracking-wider px-10 py-6 dark:bg-slateBlue dark:text-black'>
            <TbMail className='mr-2 h-8 w-8'/>Contact
          </Button>
          <Link 
          href="/Asia-Thompson-Public-Resume.pdf"
          target='_blank'
          locale={false}
          className='text-black font-bold uppercase tracking-wider px-6 py-6 dark:text-white flex items-center'>
            <PiFileText className='mr-2 h-8 w-8'/>
            <p>View Resume</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero