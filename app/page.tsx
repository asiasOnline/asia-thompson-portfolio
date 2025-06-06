"use client"
import { useEffect, useState } from "react";
import PreLoader from "../components/pageAnimations/PreLoader"
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

export default function Home() {
  const [isLoading, setLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <div className="w-full min-w-80 2xl:mx-auto bg-white dark:bg-black">
      {
        isLoading && <PreLoader />
      }
      <Navbar/>
      <main className="w-full 2xl:w-full mx-auto flex flex-col gap-12 md:gap-12">
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
  );
}
