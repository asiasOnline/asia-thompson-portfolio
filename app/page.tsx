"use client"
import { useLayoutEffect, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroAvatar from "@/components/ui/HeroAvatar";
import Hero from "../components/landingPage/Hero"
import Navbar from "@/components/navigation//Navbar";
import ProjectCarousel from "@/components/landingPage/ProjectCarousel";
import Vision from "@/components/landingPage/Vision";
import ProjectHighlights from "@/components/landingPage/ProjectHighlights";
import Service from "@/components/landingPage/Services"
import Testimonials from "@/components/landingPage/Testimonials";
import About from "@/components/landingPage/About";
import Contact from "@/components/landingPage/Contact";
import Footer from "@/components/navigation/Footer";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {

  const comp = useRef(null)

   /*
  useGSAP(() => {
    let ctx = gsap.context(() => {

      const t1 = gsap.timeline({
        // Pins animation to top of page
        scrollTrigger: {

        }
      })

      t1.from("#pageSlider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
      .to(["#circleDrop2", "#circleDrop3", "avatarDrop"], {
        opacity: 1,
        y: "+=30",
        stagger: 0.5,
      })
      .to(["#circleDrop2", "#circleDrop3", "avatarDrop"], {
        opacity: 0,
        y: "-=30",
        delay: 0.3,
        stagger: 0.5,
      })
      .to("#pageSlider", {
        xPercent: "-100",
        duration: 1.3,
      })
      .from("#landingPage", {
        opacity: 0,
        duration: 0.5,
      })
    }, comp)

    return () => ctx.revert()
  }, [])

  */

  useEffect( () => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <div 
      ref={comp}
      className="relative">
        {/* Page Animation */}
        {/*
          <div 
          id="pageSlider"
          className="w-full h-screen bg-slateBlue absolute top-0 right-0 z-50 flex flex-col justify-center items-center gap-8">
          <div id="avatarDrop" className="w-40 h-40 opacity-0">
            <HeroAvatar/>
          </div>
          <div id="circleDrop3" className="w-40 h-40 rounded-full bg-white opacity-0"></div>
          <div id="circleDrop2" className="w-40 h-40 rounded-full bg-white opacity-0">
            
          </div>
        </div>
        */}

        {/* Page Content */}
        <div id="landingPage" className="w-screen min-w-80 2xl:mx-auto bg-white dark:bg-black">
          <Navbar/>
          <main className="w-full mx-auto flex flex-col gap-12 md:gap-12">
            <Hero />
            <ProjectCarousel />
            <Vision />
            <ProjectHighlights />
            <Service />
            <Testimonials />
            <About />
            <Contact />
          </main>
          <Footer />
        </div>
    </div>
  );
}
