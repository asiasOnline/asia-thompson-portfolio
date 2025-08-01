"use client"

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ExpertiseCard from '../ui/ExpertiseCard'
import services from '../../data/serviceData'
import HeroAvatar from '../ui/HeroAvatar'
import { Button } from '../ui/Button'

export default function Services() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if(!triggerRef.current || !scrollContainerRef.current) return;

    const cardContainer = scrollContainerRef.current;
    const wrapper = triggerRef.current;
    const totalScroll = cardContainer.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      gsap.to(cardContainer, {
        x: () => `-${totalScroll}`,
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: () => `+=${totalScroll}`,
          pin: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });
      }, wrapper);

    return () => ctx.revert();
  }, []);

  return (
    <div id="services">
      {/* Service Header */}
        <div id="seviceHeader" className='w-full flex flex-col xl:flex-row gap-4 xl:gap-16 justify-center content-center items-center'>
          <div className='w-40 h-40'>
            <HeroAvatar />
          </div>
          <div className='xl:w-1/3'>
            <div className='flex flex-col justify-center'>
              <div>
              <h3 className='text-6xl text-center'>Tailored Solutions to</h3>
            </div>
            <div className='mx-auto'>
              <h3 className="relative inline-block text-4xl sm:text-6xl md:text-6xl text-nowrap font-display font-bold tracking-widest mt-2 mb-6">
            {/* Stroke Layer (behind) */}
            <span className="absolute inset-0 text-stroke-md xl:text-stroke-lg dark:text-stroke-white z-0">
              Grow Your Business
            </span>

            {/* Shadow Layer (middle) */}
            <span className="absolute inset-0 z-10 text-white dark:text-black text-shadow-md">
              Grow Your Business
            </span>

            {/* Fill Layer (on top) */}
            <span className="relative z-20 text-white">
              Grow Your Business
            </span>
          </h3>
            </div>
            </div>
            <div className='flex flex-col gap-4'>
        <div className='text-lg text-center'>
          <p>Not sure if what you need is covered with what I offer? No worries! </p>
          <p>Let&apos;s get it sorted out!</p>
        </div>
        <div className='flex justify-center'>
          <Button 
          variant="default" 
          type="submit" 
          className="text-lg min-w-60 gap-4 font-bold tracking-wide px-5 py-7 border-2 border-ultramarine hover:shadow-none dark:bg-brightPurple"  
          >Let&apos;s Chat
        </Button>
        </div>
      </div>
        </div>
        </div>
        {/* Main Service Section */}
        <section 
        ref={triggerRef} 
        className='relative w-screen h-screen overflow-hidden'>
        {/* Service Cards */}
            <div 
            id="serviceCards" 
            ref={scrollContainerRef}
            className="flex h-full gap-24 pl-[20vw] pr-[20vw] snap-x snap-mandatory"
            >
              {
                services.map((card: any) => (
                  <div 
                  key={card.id} 
                  className="snap-center shrink-0 w-[450px] flex items-center justify-center">
                      <ExpertiseCard 
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        description={card.description}
                        tools={card.tools}
                    />
                  </div>
                ))
              }
            </div>
        </section>
      {/* Service CTA */}
      
    </div>
  )
}