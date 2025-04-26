
import { Card } from "@/components/ui/card";

const Diary = () => {
  const entries = [
    {
      date: "April 26, 2025",
      title: "Portfolio Awakening 🌟",
      content: `
        ✨ Kicked off my personal portfolio using Lovable AI.
        🛠️ Added hero, skills, certifications, and project sections.
        💡 Started documenting my journey publicly.
        🎯 Goal: Weekly updates with wins, fails, and insights.
      `
    },
    {
      date: "April 22, 2025",
      title: "InnoThon Victory 🚀",
      content: `
        🏆 Secured 3rd place with Cosmic Coders!
        🤖 Built "AI Virtual Tutor" with real-time debugging.
        ⚠️ Learning: Voice support needs improvement.
        📌 Next: Adding whisper + speaker module.
      `
    },
    {
      date: "April 17, 2025",
      title: "Artisan Connect Vision 🌱",
      content: `
        📍 Inspired by Vembar's artisans.
        🧠 Conceptualizing Artisan-Connect platform.
        🛠️ Planning: geolocation + AI promotion + payments.
        👀 Researching MSME models.
      `
    }
  ];

  return (
    <section id="diary" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Dev Diary</h2>
      <Card className="p-6 md:p-8 max-w-4xl mx-auto bg-white/80 backdrop-blur dark:bg-black/20">
        <div className="space-y-8">
          {entries.map((entry, index) => (
            <div key={index} className="border-b dark:border-gray-700 last:border-0 pb-8 last:pb-0">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">{entry.title}</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">{entry.date}</span>
              </div>
              <div className="whitespace-pre-line text-gray-700 dark:text-gray-300">
                {entry.content}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default Diary;
