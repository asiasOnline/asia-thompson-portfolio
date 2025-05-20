import Hero from "../components/landingPage/Hero"
import Navbar from "@/components/navigation//Navbar";
import ProjectCarousel from "@/components//landingPage/ProjectCarousel";
import StatsBanner from "@/components/landingPage//StatsBanner";
import ProjectHighlights from "@/components/landingPage/ProjectHighlights";
import Service from "@/components/landingPage/Services"
import Expertise from "@/components/ui/Expertise";
import About from "@/components/landingPage//About";
import Contact from "@/components/landingPage/Contact";
import Footer from "@/components/navigation/Footer";

export default function Home() {
  return (
    <div className="w-screen min-w-80 2xl:mx-auto bg-white dark:bg-black">
      <Navbar/>
      <main className="w-screen 2xl:w-full px-8 md:px-16 lg:px-24 xl:px-28 2xl:px-32 mx-auto flex flex-col gap-12 md:gap-16">
        <Hero />
        <ProjectCarousel />
        <StatsBanner />
        <ProjectHighlights />
        <Service />
        <Expertise />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
