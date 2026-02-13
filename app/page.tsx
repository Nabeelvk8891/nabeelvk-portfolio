import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import CornerNavigation from "@/components/layout/CornerNavigation";
import CursorFollower from "@/components/ui/CursorFollower";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col relative pb-32">
      <CursorFollower />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <CornerNavigation />
    </main>
  );
}
