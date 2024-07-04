import ProjectHighlights from "@/components/ProjectHighlights";
import Hero from "../components/Hero"
import Navbar from "@/components/Navbar";
import Expertise from "@/components/Expertise";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-screen min-w-80 *:max-w-[1920px] bg-white dark:bg-black">
      <Navbar/>
      <div className="w-screen lg:w-4/5 px-8 md:px-16 2xl:px-28 mx-auto flex flex-col gap-12 md:gap-20">
        <Hero />
        <Expertise />
        <ProjectHighlights />
        <About />
      </div>
      <Footer />
    </main>
  );
}
