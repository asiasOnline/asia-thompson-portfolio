import React, { useEffect, useRef } from 'react'
import Link from "next/link";
import { gsap } from "gsap"; 
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/Button"
import HeroAvatar from '../ui/HeroAvatar';
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
    <div id="hero" className='w-full pl-32 pr-36 z-20 grid grid-cols-12 text-black-500'>  
    {/*Main Content*/}
        <div className='col-start-1 col-end-4 mt-8'>
          {/*Intro*/}
          <div className='py-8 text-center'>
            <p className='text-2xl'>Hello, my name is...</p>
          </div>
          <div className='py-4 bg-white border-ashGray border-4 border-r-2 border-opacity-20 -mb-2 text-center'>
            <h1 className='text-3xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-nowrap font-display font-bold'>
            Asia
            </h1>
          </div>
        </div>

        {/*Avatar*/}
        <div className='col-start-5 col-end-7 self-end justify-self-center'>
          <div className='w-56'>
            < HeroAvatar />
          </div>
        </div>

        {/*Headline*/}
        <div className='col-start-1 col-end-7 py-4 bg-white border-ashGray border-4 border-r-2 border-opacity-20 text-center'>
          <h1 className='text-3xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-nowrap font-display font-bold'>
          Thompson.
          </h1>
        </div>

        {/*Shape Grid*/}
        <div className='col-start-8 col-end-13 row-start-1 row-end-3 py-4 grid  grid-cols-5 grid-rows-5 bg-white border-ashGray border-4 border-r-2 border-opacity-20 text-center'>
          <div className='h-full border-r-2'>
  
          </div>
        </div>

        {/*Role*/}
        <div className='col-start-1 col-end-6 2xl:col-end-5 py-4 bg-white border-ashGray border-4 border-r-2 2xl:border-r-1 border-opacity-20 mt-8 px-4'>
          <p className='w-full font-normal font-display text-lg md:text-4xl/12'>Digital Product Designer & Full-Stack Developer</p>
        </div>            

        {/*Role*/}
        <div className='col-start-1 col-end-6 py-4 pr-4'>
          <p className='w-full text-lg md:text-3xl xl:text-2xl/12 2xl:text-3xl/14 '>I help businesses and teams build digital products that stand out, specifically:</p>
        </div> 
           
        {/*CTA Buttons*/}
        <div className='col-start-6 col-end-8 flex flex-col items-center justify-between gap-4'>
          <Button 
              asChild
              variant="default" 
              className="group relative flex items-center justify-center pl-8 text-base 2xl:text-lg min-w-48 2xl:min-w-60 gap-4 font-bold tracking-wide py-6 border-2  dark:bg-brightPurple"  
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
              className="group relative flex items-center justify-center pl-8 text-base 2xl:text-lg min-w-48 2xl:min-w-60 gap-4 font-bold tracking-wide py-6 border-2 text-black-700 border-black-700 dark:bg-brightPurple"  
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