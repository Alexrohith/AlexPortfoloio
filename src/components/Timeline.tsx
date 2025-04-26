
import { Card } from "@/components/ui/card";

const Timeline = () => {
  const events = [
    {
      year: "2023",
      title: "Joined St. Joseph's Institute of Tech – AI & DS",
      icon: "🎓",
    },
    {
      year: "2023",
      title: "Internship at Twite AI",
      icon: "🧠",
    },
    {
      year: "2024",
      title: "Hackathon: iNNATHON 3rd Place – Team Cosmic Coders",
      icon: "🥇",
    },
    {
      year: "2024",
      title: "Runner-up at Zypher 2024 – Code Auxtion, SRM",
      icon: "🥈",
    },
    {
      year: "2024",
      title: "Launched Cosmo Track",
      icon: "💡",
    },
  ];

  return (
    <section id="timeline" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Timeline</h2>
      <div className="max-w-3xl mx-auto">
        {events.map((event, index) => (
          <div key={index} className="relative pl-8 pb-8 border-l-2 border-primary/20 last:border-0">
            <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary"></div>
            <Card className="p-4 bg-white/80 backdrop-blur">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{event.icon}</span>
                <span className="font-semibold">{event.year}</span>
              </div>
              <p className="text-gray-700">{event.title}</p>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
