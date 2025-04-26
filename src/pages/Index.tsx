
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Diary from "@/components/Diary";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ExpandableChatAI } from "@/components/ExpandableChatAI";

const Index = () => {
  return (
    <ScrollArea className="h-screen">
      <div className="relative min-h-screen">
        <div className="fixed inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/20" />
          <img 
            src="/lovable-uploads/bf4aa643-e02b-49dc-8a60-b8a8eabd1064.png" 
            alt="Pixel art background" 
            className="w-full h-full object-cover opacity-30 dark:opacity-20"
          />
        </div>
        <div className="relative z-10">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <Hero />
            <Projects />
            <Timeline />
            <Diary />
            <Contact />
          </div>
        </div>
      </div>
      <ExpandableChatAI />
    </ScrollArea>
  );
};

export default Index;
