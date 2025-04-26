
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "C++", "Java"],
    },
    {
      title: "AI/ML",
      skills: ["PyTorch", "TensorFlow", "Scikit-learn"],
    },
    {
      title: "Web",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL"],
    },
    {
      title: "Tools",
      skills: ["Git", "Docker", "VS Code", "Postman"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {skillCategories.map((category) => (
          <Card key={category.title} className="p-6 bg-white/80 backdrop-blur">
            <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;
