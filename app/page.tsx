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
  return (
    <div className="w-screen min-w-80 2xl:mx-auto bg-white dark:bg-black">
      <Navbar/>
      <main className="w-screen 2xl:w-full mx-auto flex flex-col gap-12 md:gap-12">
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
