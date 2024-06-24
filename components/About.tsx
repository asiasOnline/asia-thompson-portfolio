"use client"
import React from 'react'
import PageHeader from './ui/PageHeader'
import BentoGrid from './ui/BentoGrid'
import { WobbleCard } from './ui/WobbleCard'
import Lottie from 'lottie-react'
import SwordSlash from '../public/Sword_Slash.json'

const About = () => {
  return (
    <div id="about">
        <PageHeader title="About"/>
        <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[18rem]" >
          <WobbleCard
            containerClassName='col-span-2 row-span-2'
            >
            <h2>Bio</h2>
            <p>As a UX/UI designer and full-stack developer I have and continue to have a passion for design and development fueled be a personal desire for learning and self-improvement.</p>
          </WobbleCard>
          <WobbleCard
            containerClassName='col-span-1 row-span-2'
            >
            <h2>Hobbies</h2>
            <p>I won’t lie I spend a ton of time working but you might also catch me... spending time with my cats</p>
          </WobbleCard>
          <WobbleCard
            containerClassName='col-span-1 row-span-2'
            >
              <Lottie 
                animationData={SwordSlash}
                loop={true}
              />
          </WobbleCard>
      </BentoGrid>
    </div>
  )
}

export default About