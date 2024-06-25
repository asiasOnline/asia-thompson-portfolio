"use client"
import React from 'react'
import { cn } from "@/lib/utils"
import Image from "next/image";
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Lottie from 'lottie-react'

import PageHeader from './ui/PageHeader'
import { BentoGrid } from "./ui/BentoGrid";
import { ExpertiseTools } from './ui/ExpertiseTools';

import profilePic from '../public/profile-pic.png'
import CSULBSeal from '../public/CSU-long-beach-seal.svg'
import coffeeCup from '../public/coffee-cup.svg'
import meltingPizza from '../public/melting-pizza.svg'
import sleepyFace from '../public/sleepy-face.svg'
import sunset from '../public/sunset.svg'
import cityBuildings from '../public/city-buildings.svg'
import SwordSlash from '../public/Sword_Slash.json'
import { SiHtml5, SiCss3, SiTailwindcss } from "react-icons/si";

const tools = [
  {
      id: 1,
      toolName: "Figma",
      designation: "The industry standard collaborative design tool",
      icon: <SiHtml5 className='w-8 h-8 mx-auto'/>
  },
  {
      id: 2,
      toolName: "Blender",
      designation: "A open-source tool for creating 3D assets",
      icon: <SiCss3 className='w-8 h-8 mx-auto'/>
  },
  {
      id: 3,
      toolName: "Adobe Photoshop",
      designation: "The industry standard photo editor and raster graphics software",
      icon: <SiTailwindcss className='w-8 h-8 mx-auto'/>
  },
]

const About = () => {

  return (
    <div id="about" className='my-20'>
        <PageHeader title="About"/>
        <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[8rem] gap-y-8 gap-x-4" >
          {/*About section - Top Row*/}
          <AboutCard className='p-10 col-span-3 row-span-2'>
              <h3 className='text-2xl font-bold'>Bio</h3>
              <p>As a UX/UI designer and full-stack developer I have and continue to have a passion for design and development fueled be a personal desire for learning and self-improvement.</p>
          </AboutCard>

          <AboutCard className='p-10 col-span-2 row-span-2'>
            <h3 className='text-2xl font-bold'>Hobbies</h3>
            <p>I won’t lie I spend a ton of time working but you might also catch me... spending time with my cats</p>
          </AboutCard>

          <AboutCard className='p-5 col-span-1 row-span-2'>
            <Lottie 
              animationData={SwordSlash}
              loop={true}
            />
          </AboutCard>

          {/*About section - Middle Row*/}
          <AboutCard className='col-span-2 row-span-1'>
            <h3 className='text-2xl font-bold text-center'>5+ Years of Experience</h3>
          </AboutCard>

          <AboutCard className='p-5 col-span-2 row-span-2 row-start-4'>
            <h3 className='text-2xl font-bold text-center'>Fueled By...</h3>
            <div className='mx-auto flex gap-6'>
              <Image
                src={coffeeCup}
                alt="Coffee cup with heart"
                width={80}
                height={80}
              />
                <Image
                src={meltingPizza}
                alt="Coffee cup with heart"
                width={80}
                height={80}
              />
               <Image
                src={sleepyFace}
                alt="Coffee cup with heart"
                width={80}
                height={80}
              />
            </div>
          </AboutCard>

          <AboutCard className='col-span-2 row-span-3 place-items-center p-4'>
            <Image
              src={profilePic}
              alt="Asia Thompson Profile Pic"
              width={200}
              height={200}
              className='rounded-full'
            />
            <h3 className='text-2xl font-bold'>Asia Thompson</h3>
            <div>Open for Work</div>
          </AboutCard>

          <AboutCard className='p-10 col-span-2 row-span-2'>
            <h3 className='text-2xl font-bold'>Born & Raised</h3>
            <p>As a Cali girl I’m used to perfect weather, crowded cities, and PST time, but I can work with any time zone.</p>
          </AboutCard>

          <AboutCard className='col-span-1 row-span-1 col-start-5 row-start-5'>
            <Image 
              src={sunset}
              alt="Sunset"
              width={80}
              height={80}
              className='mx-auto'
            />
          </AboutCard>

          <AboutCard className='col-span-1 row-span-1 col-start-6 row-start-5'>
            <Image 
              src={cityBuildings}
              alt="City buildings"
              width={80}
              height={80}
              className='mx-auto'
            />
          </AboutCard>

          {/*About section - Bottom Row*/}
          <AboutCard className='p-6 col-span-1 row-span-2 place-items-center'>
            <h3 className='text-2xl font-bold'>Attended</h3>
            <Image
              src={CSULBSeal}
              alt="California State University Long Beach seal"
            />
          </AboutCard>

          <AboutCard className='p-10 col-span-3 row-span-2'>
            <h3 className='text-2xl font-bold'>Prior Positions</h3>
            <div>
              <div>
                <p>UX Designer & Full-Stack Developer | Previous Writer</p>
                <div className='flex justify-between'>
                  <p>UpWork</p>
                  <p>2018 - 2021</p>
                </div>
              </div>
              <div>
                <p>Coding Foundations Curriculum Developer</p>
                <div className='flex justify-between'>
                  <p>Mastery Coding</p>
                  <p>2018 - 2021</p>
                </div>
              </div>
            </div>
          </AboutCard>


          <AboutCard className='p-10 col-span-2 row-span-2'>
            <h3 className='text-2xl font-bold'>Most Used Tech</h3>
            <ExpertiseTools tools={tools}/>
          </AboutCard>

        </BentoGrid>
    </div>
  )
}

const AboutCard = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div 
    className={cn(
      "flex flex-col flex-1 place-content-center gap-6 w-full h-full min-h-[8rem] rounded-xl shadow-lg bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 dark:shadow-white", 
      className
    )}
  >
    {children}
  </div>
);

const ImageSkeleton = ({
  imageSrc,
  altText
}: {
  imageSrc: StaticImport;
  altText: string;
}) => (
  <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
      <Image 
        src={imageSrc}
        alt={altText}
        fill
        style={{objectFit: 'cover'}}
      />
  </div>
);

export default About

