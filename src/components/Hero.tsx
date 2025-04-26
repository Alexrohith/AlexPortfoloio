
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <img 
        src="/lovable-uploads/bf4aa643-e02b-49dc-8a60-b8a8eabd1064.png" 
        alt="Pixel art background" 
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm Alex Rohith 👋
        </h1>
        <p className="text-xl md:text-2xl mb-6 text-gray-800">
          AI Algorithm Engineer | Hackathon Winner | Building Cosmo Track 🚀
        </p>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-700">
          Turning ideas into intelligent systems that solve real-world problems.
        </p>
        <div className="flex gap-4 justify-center">
          <Button className="bg-primary hover:bg-primary/90">
            Download Resume
          </Button>
          <Button variant="outline">
            View Projects
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
