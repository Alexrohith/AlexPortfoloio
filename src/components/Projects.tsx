
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Cosmo Track 🚀",
      description: "An offline, AI-driven coding platform that customizes learning paths, provides real-time code assistance, and works fully offline.",
      tech: ["React", "Python", "OpenAI API", "TailwindCSS"],
      github: "https://github.com/yourlink",
      demo: "https://yourlink.com",
    },
    {
      title: "NeuroSynesthesia 🧠🎨",
      description: "Hackathon-winning project that connects music and color using EEG brainwave patterns and generative models.",
      tech: ["Python", "ML", "FastAPI", "BioSensors"],
      github: "https://github.com/yourlink",
    },
    {
      title: "CodeGenie",
      description: "An offline generative AI tool that explains code, recommends improvements, and analyzes complexity.",
      tech: ["LLMs", "Python", "LangChain"],
      github: "https://github.com/yourlink",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project) => (
          <Card key={project.title} className="p-6 bg-white/80 backdrop-blur">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span key={tech} className="px-2 py-1 bg-primary/10 rounded-full text-xs">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Button>
              {project.demo && (
                <Button size="sm" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
