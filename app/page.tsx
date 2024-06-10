import Image from "next/image";
import Hero from "../components/Hero"
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function Home() {
  return (
    <main>
      <Hero />
      <BackgroundGradientAnimation />
    </main>
  );
}
