
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import { ScrollArea } from "@/components/ui/scroll-area";

const Index = () => {
  return (
    <ScrollArea className="h-screen">
      <div className="min-h-screen bg-gradient-to-b from-orange-500/20 to-green-500/20 dark:from-orange-950/30 dark:to-green-950/30">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <Hero />
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
