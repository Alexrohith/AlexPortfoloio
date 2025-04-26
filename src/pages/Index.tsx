
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import Diary from "@/components/Diary";
import { ScrollArea } from "@/components/ui/scroll-area";

const Index = () => {
  return (
    <ScrollArea className="h-screen">
      <div className="relative min-h-screen">
        <img 
          src="/lovable-uploads/bf4aa643-e02b-49dc-8a60-b8a8eabd1064.png" 
          alt="Pixel art background" 
          className="fixed inset-0 w-full h-full object-cover opacity-50 dark:opacity-30"
        />
        <div className="relative z-10">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <Hero />
            <Projects />
            <Timeline />
            <Testimonials />
            <Diary />
            <Contact />
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default Index;
