import ProjectHighlights from "@/components/ProjectHighlights";
import Hero from "../components/Hero"
import Navbar from "@/components/Navbar";
import Expertise from "@/components/Expertise";

export default function Home() {
  return (
    <main className="w-screen">
      <Navbar/>
      <div className="w-4/5 px-24 mx-auto">
        <Hero />
        <Expertise />
        <ProjectHighlights />
      </div>
    </main>
  );
}
