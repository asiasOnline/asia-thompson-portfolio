import React, { useEffect, useRef } from 'react'
import Link from "next/link";
import { gsap } from "gsap"; 
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/Button"
import ColorSwapImageContainer from '../ui/ColorSwapImageContainer';
import OrganizationAnimation from '../ui/OrganizationAnimation';
import { FaPaperPlane } from "react-icons/fa";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  {/*Hero Animations
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
  */}

  return (
    <div id="hero" className='w-full pl-32 pr-32 grid grid-cols-12 text-black-500'>  
    
    {/*Main Content*/}
        <div className='col-start-1 col-end-4 mt-8 ml-1 mr-0.5 z-20'>
          {/*Intro*/}
          <div className='pb-12 pl-8'>
            <p className='text-2xl'>Hello, my name is...</p>
          </div>
          <div className='py-4 bg-white border-ashGray border-t-4 border-opacity-20 -mb-2 text-center'>
            <h1 className='text-3xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl text-nowrap font-display font-bold'>
            Asia
            </h1>
          </div>
        </div>

        {/*Avatar*/}
        <div className='col-start-5 col-end-7 self-end justify-self-center z-20'>
          <div className='w-56'>
            < ColorSwapImageContainer />
          </div>
        </div>

        {/*Headline*/}
        <div className='col-start-1 col-end-7 py-4 bg-white border-ashGray border-t-4 border-b-4 ml-1 mr-0.5 border-opacity-20 text-center z-20'>
          <h1 className='text-3xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl text-nowrap font-display font-bold'>
          Thompson.
          </h1>
        </div>

        {/*Shape Grid*/}
        <div className='col-start-8 col-end-13 row-start-1 row-end-4 grid  grid-cols-5 grid-rows-5 border-t-4 border-b-4 border-opacity-20 gap-1 text-center bg-ashGray bg-opacity-20'>
          {/*First Row*/}
            <div className='flex items-center justify-center bg-white'>
              <div className='w-14 h-14 bg-primaryGreen-100'/>
            </div>
            <div className='flex items-center justify-center bg-white'>
              <div className='w-14 h-14 bg-primaryGreen-100'/>
            </div>
            <div className='flex items-center justify-center bg-white'>
              <div className='w-14 h-14 bg-primaryGreen-100'/>
            </div>
            <div className='flex items-center justify-center bg-white'>
              <div className='w-14 h-14 bg-primaryGreen-100'/>
            </div>
            <div className='flex items-center justify-center bg-white'>
              <div className='w-14 h-14 bg-primaryGreen-100'/>
            </div>

          {/*Second Row*/}
            <div className='flex items-center justify-center bg-white'>
              <div className='w-14 h-14 bg-primaryGreen-100'/>
            </div>
            <div className='flex items-center justify-center bg-white'>
              <div className='w-14 h-14 bg-primaryGreen-100'/>
            </div>
            <div className='flex items-center justify-center bg-white'>
              <div className='w-14 h-14 bg-primaryGreen-100'/>
            </div>
            <div className='flex items-center justify-center bg-white'>
              <div className='w-14 h-14 bg-primaryGreen-100'/>
            </div>
            <div className='flex items-center justify-center bg-white'>
              <div className='w-14 h-14 bg-primaryGreen-100'/>
            </div>

            {/*Third Row*/}
            <div className='flex items-center justify-center bg-white'>
              <div className='w-14 h-14 bg-primaryGreen-100'/>
            </div>
            <div className='flex items-center justify-center bg-white'>
              <div className='w-14 h-14 bg-primaryGreen-100'/>
            </div>
            <div className='flex items-center justify-center bg-white'>
              <div className='w-14 h-14 bg-primaryGreen-300 rounded-full'/>
            </div>
            <div className='flex items-center justify-center bg-white'>
              <div className='w-14 h-14 bg-primaryGreen-100'/>
            </div>
            <div className='flex items-center justify-center bg-white'>
              <div className='w-14 h-14 bg-primaryGreen-100'/>
            </div>

            {/*Fourth Row*/}
            <div className='flex items-center justify-center bg-white'>
              <div className='w-14 h-14 bg-primaryGreen-100'/>
            </div>
            <div className='flex items-center justify-center bg-white'>
              <div className='w-14 h-14 bg-primaryGreen-100'/>
            </div>
            <div className='flex items-center justify-center bg-white'>
              <div className='w-14 h-14 bg-primaryGreen-100'/>
            </div>
            <div className='flex items-center justify-center bg-white'>
              <div className='w-14 h-14 bg-primaryGreen-100'/>
            </div>
            <div className='flex items-center justify-center bg-white'>
              <div className='w-14 h-14 bg-primaryGreen-100'/>
            </div>

            {/*Last Row*/}
            <div className='flex items-center justify-center bg-white'>
              <div className='w-14 h-14 bg-primaryGreen-100'/>
            </div>
            <div className='flex items-center justify-center bg-white'>
              <div className='w-14 h-14 bg-primaryGreen-100'/>
            </div>
            <div className='flex items-center justify-center bg-white'>
              <div className='w-14 h-14 bg-primaryGreen-100'/>
            </div>
            <div className='flex items-center justify-center bg-white'>
              <div className='w-14 h-14 bg-primaryGreen-100'/>
            </div>
            <div className='flex items-center justify-center bg-white'>
              <div className='w-14 h-14 bg-primaryGreen-100'/>
            </div>
        </div>

        {/*Role*/}
        <div className='col-start-1 col-end-6 2xl:col-end-5 py-4 bg-white border-ashGray border-t-4 border-b-4 ml-1 mr-0.5 border-opacity-20 mt-8 px-4 z-20'>
          <p className='w-full font-normal font-display text-lg md:text-4xl/12'>Digital Product Designer & Full-Stack Developer</p>
        </div>            

        {/*Role*/}
        <div className='col-start-1 col-end-6 py-4 pl-2'>
          <p className='w-full text-lg md:text-3xl xl:text-2xl/12 2xl:text-2xl/12 '>I help entrepreneurs and teams build digital products that improve their business, specifically:
            <OrganizationAnimation/>
          </p>
        </div> 
           
        {/*CTA Buttons*/}
        <div className='col-start-8 col-end-13 px-10 flex items-center justify-between'>
          <Button 
              asChild
              variant="default" 
              className="group relative flex items-center justify-center pl-8 text-base min-w-48 2xl:min-w-52 gap-4 font-bold tracking-wide py-6 border-2 z-20 dark:bg-brightPurple"  
              >
                <Link
                  href="/contact"
                >
                  Let&apos;s Chat
                  <FaPaperPlane className='opacity-0 transform transition-opacity duration-300 ease-in-out group-hover:opacity-100 text-white'/>
                </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              className="group relative flex items-center justify-center pl-8 text-base min-w-48 2xl:min-w-52 gap-4 font-bold tracking-wide py-6 border-2 z-20 text-black-700 border-black-700 bg-white dark:bg-brightPurple"  
              >
                <Link
                  href="/contact"
                >
                  View My Work
                  <FaPaperPlane className='bsolute opacity-0 transform transition-opacity duration-300 ease-in-out group-hover:opacity-100 text-white'/>
                </Link>
            </Button>
        </div>

    </div>
  )
}

export default Hero