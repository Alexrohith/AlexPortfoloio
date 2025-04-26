
import Skills from "@/components/Skills";

const SkillsPage = () => {
  return (
    <div className="relative min-h-screen">
      <img 
        src="/lovable-uploads/bf4aa643-e02b-49dc-8a60-b8a8eabd1064.png" 
        alt="Pixel art background" 
        className="fixed inset-0 w-full h-full object-cover opacity-50 dark:opacity-30"
      />
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
