
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import { ScrollArea } from "@/components/ui/scroll-area";

const Index = () => {
  return (
    <ScrollArea className="h-screen">
      <div className="min-h-screen bg-gradient-to-b from-orange-500/20 to-green-500/20">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Timeline />
          <Testimonials />
          <Contact />
        </div>
      </div>
    </ScrollArea>
  );
};

export default Index;
