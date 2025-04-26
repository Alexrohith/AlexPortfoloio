
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
      <Card className="p-6 md:p-8 max-w-3xl mx-auto bg-white/80 backdrop-blur">
        <p className="text-lg mb-4">
          I'm Alex Rohith, a passionate AI & Data Science engineer from Vembar, currently pursuing my B.Tech in AI & DS.
        </p>
        <p className="text-lg mb-4">
          I've built award-winning offline coding platforms, worked on LLMs, and contributed to impactful hackathons and startups.
        </p>
        <p className="text-lg">
          I love leading teams, solving problems, and dreaming big. Let's build something powerful, ethical, and useful together.
        </p>
      </Card>
    </section>
  );
};

export default About;
