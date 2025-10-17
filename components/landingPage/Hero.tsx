import React, { useEffect, useRef } from 'react'
import Link from "next/link";
import { gsap } from "gsap"; 
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/Button"
import HeroAvatar from '../ui/HeroAvatar';
import { AuroraText } from "@/components/magicui/aurora-text";
import { Stars } from '../ui/SVGAssets';
import Availability from '../ui/Availability';
import { FaPaperPlane } from "react-icons/fa";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  {/*Hero Animations*/}
  // Reference Variables
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const splitRef = useRef<SplitText | null>(null);

  useEffect(() => {
    if(!headlineRef.current) return;

    // Kills old SplitText iterations on hot reloads (for dev mode)
    splitRef.current && splitRef.current.revert();

    // Saves the headline as characters
    splitRef.current = SplitText.create(headlineRef.current, {type: 'chars',});

    const chars = splitRef.current.chars;

    // Initial Animation
    const tl = gsap.timeline({ paused: true });
    let isAnimating = false;

    // Define the Timeline
    tl.from(chars, {
      y: 100,
      autoAlpha: 0,
      ease: 'back.out(1.7)',
      duration: 0.5,
      stagger: 0.05,
      onStart: () => { isAnimating = true },
      onComplete: () => { isAnimating = false },
    });

    tlRef.current = tl;

    // Initial Play
    tl.play();

    // Rerun on hover
    const headline = headlineRef.current;
    const replay = () => {
      // Blocks rerun until finished
      if (isAnimating) return;

      gsap.set(chars, {
        y: 100,
        autoAlpha: 0
      });
      // Reset
      tl.restart();
    };

    headline.addEventListener('mouseenter', replay);

    // Cleanup
    return () => {
      headline.removeEventListener('mouseenter', replay);
      splitRef.current && splitRef.current.revert();
    };
  }, []);

  return (
    <div id="hero" className='w-full 2xl:w-4/5 relative pt-6 2xl:pt-20 px-4 md:px-16 lg:px-24 xl:px-32 mx-auto flex flex-col gap-6 '>
      {/*Borders*/}
      {/*Top Left
      <div className='hidden xl:block absolute xl:top-8 xl:-left-0'>
        <div className='w-44 relative left-14'>
            <hr className='border-t-black dark:border-t-white'/>
        </div>
        < div className='w-44 rotate-90 relative top-14'>
            <hr className='border-t-black dark:border-t-white'/>
          </div>
        </div>
        */}
        {/*Top Right
        <div className='hidden xl:block absolute rotate-90 top-8 right-0'>
          <div className='w-44 relative left-14'>
            <hr className='border-t-black dark:border-t-white'/>
          </div>
          <div className='w-44 rotate-90 relative top-14'>
              <hr className='border-t-black dark:border-t-white'/>
          </div>
        </div>
        */}
        {/*Bottom Right
        <div className='hidden xl:block absolute rotate-180 right-0 -bottom-8'>
          <div className='w-44 relative left-14'>
            <hr className='border-t-black dark:border-t-white'/>
          </div>
          <div className='w-44 rotate-90 relative top-14'>
              <hr className='border-t-black dark:border-t-white'/>
          </div>
        </div>
        */}
        {/*Bottom Left
        <div className='hidden xl:block absolute -rotate-90 left-0 -bottom-8'>
          <div className='w-44 relative left-14'>
            <hr className='border-t-black dark:border-t-white'/>
        </div>
        <div className='w-44 rotate-90 relative top-14'>
            <hr className='border-t-black dark:border-t-white'/>
        </div>
        </div>
        */}
        
        {/*Main Hero Content*/}
        <div className='xl:mx-10 2xl:m-0 flex flex-col items-center gap-6 2xl:gap-12'>
          
            {/*Intro & Avatar Header*/}
            <div className='w-full flex flex-col md:flex-row items-center lg:justify-center gap-6 2xl:gap-8'>
              <div className='w-auto text-center'>
                <p
                className='text-center text-lg md:text-xl 2xl:text-2xl'
              >
                My name is <strong>Asia</strong>.
              </p>
              </div>
              <div className='w-auto md:w-40 h-auto flex justify-center'>
                <div className='relative'>
                  <div className='w-8 h-auto absolute -right-4 -top-4'>
                    < Stars />
                  </div>
                  <div className="relative w-28 md:w-32 2xl:w-40 h-auto">
                    < HeroAvatar />
                  </div>
                  <div className='w-12 h-auto scale-x-[-1] scale-y-[-1] absolute -bottom-6 -left-6'>
                    < Stars />
                  </div>
                </div>
              </div>
              <div className='w-auto flex justify-center'>
                <p className='w-full 2xl:w-96 text-lg md:text-xl 2xl:text-2xl 2xl:self-end'>A <span className='underline font-bold'>digital product designer</span> and <br/> <span className='underline font-bold'>full-stack developer</span> based in <br/> Nevada & California.</p>
              </div>
            </div>

            {/*Intro & Avatar Header*/}
            <div className='flex flex-col text-center'>
               {/*Headline*/}
            <div className='gap-4 lg:gap-8 xl:gap-16'>
              <h1 
              ref={headlineRef}
              className='text-3xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-nowrap font-display font-bold tracking-wider'>
              I Help Creatives Build
              
              </h1>

              {/*
                <div className='relative md:ml-4'>
                <div className='w-4 h-8 md:w-6 md:h-8 lg:w-10 lg:h-12 absolute -bottom-4 -left-2 md:-bottom-2 lg:-left-8'><Stars width='40' height='48'/></div>
                <div className='w-8 h-10 md:w-12 md:h-16 lg:w-20 lg:h-24 absolute -top-2 -right-6 md:-top-4 md:-right-10 lg:-top-8 lg:-right-16'><Stars /></div>
                </div>
              */}
            </div>

            {/* Sub-Headline */}
            <h1 className="relative inline-block text-3xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl text-nowrap font-display font-bold tracking-widest 2xl:tracking-wider lg:mt-6">
              {/* Combined Stroke + 3D Shadow Layer */}
              <span className="absolute inset-0 z-0 text-shadow-3d-md lg:text-shadow-3d-lg text-stroke-md">
                Better Products
              </span>

              {/* Fill Layer (on top) */} 
              <span className="relative z-10">
                <AuroraText
                  colors={["#97E4F8", "#9D99FF", "#FBACA4"]}
                  speed={100}
                >Better Products
                </AuroraText>
              </span>
            </h1>
            </div>
           
          {/*Availability & CTA Button*/}
          <div className='w-full flex flex-col xl:flex-row items-center justify-between gap-4'>
            <Availability />
            <div>
              <Button 
                asChild
                variant="default" 
                className="group relative flex items-center justify-center pl-8 text-base 2xl:text-lg min-w-48 2xl:min-w-60 gap-4 font-bold tracking-wide py-6 border-2 border-ultramarine dark:bg-brightPurple"  
                >
                  <Link
                    href="/contact"
                  >
                    Let&apos;s Chat
                    <FaPaperPlane className='bsolute opacity-0 transform transition-opacity duration-300 ease-in-out group-hover:opacity-100 text-white'/>
                  </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hero