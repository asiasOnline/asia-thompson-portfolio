"use client"
import React from 'react';
import { cn } from "@/lib/utils";
import Image from "next/image";
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { TypeAnimation } from 'react-type-animation';
import Lottie from 'lottie-react';

import PageHeader from './ui/PageHeader';
import { BentoGrid } from "./ui/BentoGrid";
import { ExpertiseTools } from './ui/ExpertiseTools';

import profilePic from '../public/profile-pic.png';
import { CoffeeCup, MeltingPizza, SleepyFace, Sun, Building, CSULB } from './ui/ThemeAssets';
import SwordSlash from '../public/Sword_Slash.json';
import { CgFigma } from "react-icons/cg";
import { SiHtml5, SiCss3, SiTailwindcss, SiTypescript, SiReact, SiPython } from "react-icons/si";
import { BiLogoPostgresql } from 'react-icons/bi';

const IconSize20px = `w-5 h-5`
const IconSize24px = `w-6 h-6`
const IconSize28px = `w-7 h-7`
const IconSize32px = `w-8 h-8`
const IconSize40px = `w-10 h-10`

const tools = [
  {
    id: 1,
    toolName: "Figma",
    designation: "4+ Years",
    icon: <CgFigma className={`${IconSize24px} md:${IconSize32px} mx-auto`}/>
  },
  {
    id: 2,
    toolName: "HTML5",
    designation: "10+ Years",
    icon: <SiHtml5 className={`${IconSize24px} md:${IconSize32px} mx-auto`}/>
  },
  {
    id: 3,
    toolName: "CSS3",
    designation: "10+ Years",
    icon: <SiCss3 className={`${IconSize24px} md:${IconSize32px} mx-auto`}/>
},
  {
    id: 4,
    toolName: "TailwindCSS",
    designation: "1+ Years",
    icon: <SiTailwindcss className={`${IconSize24px} md:${IconSize32px} mx-auto`}/>
  },
  {
    id: 5,
    toolName: "TypeScript",
    designation: "2+ Years",
    icon: <SiTypescript className={`${IconSize20px} md:${IconSize28px} mx-auto`}/>
}, 
  {
    id: 6,
    toolName: "React & React Native",
    designation: "4+ Years",
    icon: <SiReact className={`${IconSize20px} md:${IconSize28px} mx-auto`}/>
  },
  {
    id: 7,
    toolName: "Python",
    designation: "6+ Years",
    icon: <SiPython className={`${IconSize20px} md:${IconSize28px} mx-auto`}/>
},
{
    id: 8,
    toolName: "PostgreSQL",
    designation: "6+ Years",
    icon: <BiLogoPostgresql className={`${IconSize32px} md:${IconSize40px} mx-auto`}/>
},
]

const About = () => {

  return (
    <div id="about">
        <PageHeader title="About"/>
        <div className='relative w-full'>
          <div className='absolute top-1/3 -left-4 w-40 h-40 md:w-2/3 md:h-2/3 bg-steelPink rounded-full filter blur-2xl opacity-25 animate-gradientAnimation
            dark:mix-blend-screen dark:opacity-35'></div>
            <div className='
            absolute top-24 left-24 w-40 h-40 md:w-2/3 md:h-2/3 bg-ultramarine rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-gradientAnimation animation-delay-2000
            dark:bg-slateBlue dark:mix-blend-screen dark:opacity-25'></div>
            <div className='
            absolute top-0 right-0 w-40 h-40 md:w-2/3 md:h-2/3 bg-fountainBlue rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-gradientAnimation animation-delay-4000
            dark:mix-blend-screen dark:opacity-35'></div>
          <BentoGrid className="relative max-w-7xl mx-auto md:auto-rows-[6rem] lg:auto-rows-[8rem] xl:auto-rows-[10rem] gap-y-8 gap-x-4 z-10" >
            {/*About section - Top Row*/}
            <AboutCard className='p-6 md:p-10 col-span-6 lg:col-span-3 row-span-2'>
                <h3 className='text-2xl font-bold tracking-wider '>Bio</h3>
                <p>As a UX/UI designer and full-stack developer I have and continue to have a passion for design and development fueled be a personal desire for learning and self-improvement.</p>
            </AboutCard>

            <AboutCard className='w-full h-72 md:h-auto p-6 md:p-10 col-span-6 lg:col-span-3 row-span-2'>
              <h3 className='text-2xl font-bold tracking-wider '>Hobbies</h3>
              <p>I&apos;ll be honest, I spend a ton of time working. I&apos;m  still getting the work/life balance thing right 😅. However, when I do have some free time you might also catch me...
                <TypeAnimation 
                  sequence={[
                    "playing a new RPG that's consumed my personal life 🎮", 1000,
                    "hanging out with my daughter watching dancing fruit 🍓", 1000,
                    "trying out a new recipe I found on YouTube 🍲", 1000,
                    "spending time in my garden trying to grow something new 🪴", 1000,
                    "going on long drives through the city with my husband 🚗", 1000,
                  ]}
                  wrapper='span'
                  repeat={Infinity}
                />
              </p>
            </AboutCard>

            {/*
            <AboutCard className='p-5 col-span-1 row-span-2'>
              <Lottie 
                animationData={SwordSlash}
                loop={true}
              />
            </AboutCard>
            */}

            {/*About section - Middle Row*/}
            <AboutCard className='p-6 col-span-6 md:col-span-3 row-span-1 xl:col-span-2'>
              <h3 className='text-2xl font-bold text-center tracking-wider'>6+ Years of Experience</h3>
            </AboutCard>

            <AboutCard className='p-5 col-span-6 md:col-span-3 md:row-span-2 lg:row-start-4 xl:col-span-2'>
              <h3 className='text-2xl font-bold text-center tracking-wider'>Fueled By...</h3>
              <div className='md:mx-auto flex md:gap-6 gap:4 justify-around md:items-center'>
                <div className='w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20'><CoffeeCup /></div>
                <div className='w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20'><MeltingPizza /></div>
                <div className='w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20'><SleepyFace /></div>
              </div>
            </AboutCard>

            <AboutCard className='col-span-6 md:col-span-3 xl:col-span-2 row-span-3 place-items-center p-8 md:p-4'>
              <Image
                src={profilePic}
                alt="Asia Thompson Profile Pic"
                className='w-40 lg:w-48 xl:w-56 rounded-full'
              />
              <h3 className='text-2xl font-bold tracking-wider'>Asia Thompson</h3>
              <div className='flex items-center gap-2'>
                <div className='w-4 h-4 rounded-full bg-green'></div>
                Open for Work
              </div>
            </AboutCard>

            <AboutCard className='p-10 col-span-6 md:col-span-3 lg:col-span-2 row-span-2'>
              <h3 className='text-2xl font-bold tracking-wider'>Born & Raised</h3>
              <p>As a Cali girl I’m used to perfect weather, crowded cities, and PST time, but I can work with any time zone.</p>
            </AboutCard>

            <AboutCard className='col-span-3 md:col-span-2 md:row-span-2 lg:row-span-1 lg:col-start-5 xl:col-span-1 xl:col-start-5 xl:row-start-5'>
              <div className='p-2 mx-auto w-24 h-24 md:w-32 md:h-32 xl:w-24 xl:h-24'><Sun /></div>
            </AboutCard>

            <AboutCard className='col-span-3 md:col-span-2 md:row-span-2 lg:row-span-1 lg:col-start-5 xl:col-span-1 xl:col-start-6 xl:row-start-5'>
            <div className='p-2 mx-auto w-24 h-24 md:w-32 md:h-32 xl:w-24 xl:h-24'><Building /></div>
            </AboutCard>

            {/*About section - Bottom Row*/}
            <AboutCard className='p-6 col-span-6 md:col-span-2 lg:row-start-6 xl:col-span-2 row-span-2 place-items-center content-between'>
              <h3 className='text-2xl font-bold tracking-wider'>Attended</h3>
              <div className='w-28 h-auto xl:w-48'><CSULB /></div>

            </AboutCard>

            <AboutCard className='p-10 col-span-6 md:col-span-3 xl:col-span-2 row-span-2  md:row-span-3 lg:row-span-2 content-between xl:content-center'>
              <h3 className='text-2xl font-bold tracking-wider'>Prior Positions</h3>
              <div className='flex flex-col gap-6'>
                <div className='flex flex-col gap-4'>
                  <p className='font-bold'>UX Designer & Full-Stack Developer | Previous Writer</p>
                  <div className='flex justify-between'>
                    <p>UpWork</p>
                    <p>2016 - 2021</p>
                  </div>
                </div>
                <div className='flex flex-col gap-4'>
                  <p className='font-bold'>Coding Foundations Curriculum Developer</p>
                  <div className='flex justify-between'>
                    <p>Mastery Coding</p>
                    <p>2021 - 2023</p>
                  </div>
                </div>
              </div>
            </AboutCard>


            <AboutCard className='p-10 col-span-6 md:col-span-3 xl:col-span-2 row-span-2 md:row-span-3 lg:row-span-2'>
              <h3 className='text-2xl font-bold tracking-wider'>Most Used Tech</h3>
              <ExpertiseTools className="flex flex-row flex-wrap items-center justify-center" tools={tools}/>
            </AboutCard>

          </BentoGrid>
        </div>
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
      "flex flex-col flex-1 place-content-center gap-6 w-full h-full lg:min-h-[8rem] border-4 rounded-2xl opacity-90 border-black/10 shadow-lg bg-white dark:bg-black dark:border-white/10", 
      className
    )}
  >
    {children}
  </div>
);

export default About

