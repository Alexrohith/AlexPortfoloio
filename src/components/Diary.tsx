
import { Card } from "@/components/ui/card";

const Diary = () => {
  return (
    <section id="diary" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Dev Diary</h2>
      <Card className="p-6 md:p-8 max-w-4xl mx-auto bg-white/80 backdrop-blur dark:bg-black/20">
        <div className="prose dark:prose-invert max-w-none">
          <h1>💬 Dev Diary — From the Mind of Alex Rohith</h1>
          
          <blockquote>
            <p><em>"Every line of code has a story. Here's mine."</em></p>
          </blockquote>

          <h2>🌟 April 26 – Portfolio Awakening</h2>
          <p>
            ✨ Kicked off my personal portfolio using Lovable AI.<br />
            🛠️ Added hero, skills, certifications, and project sections.<br />
            💡 Realized I need a <code>Diary</code> to log my growth in public.<br />
            🎯 Goal: Update this page weekly with wins, fails, and breakthroughs.
          </p>

          <h2>🚀 April 22 – The Aftershock</h2>
          <p>
            🏆 Secured 3rd place at InnoThon'24 with <strong>Cosmic Coders</strong>!<br />
            🤖 Built "AI Virtual Tutor" with real-time debugging and LLM assistance.<br />
            ⚠️ We missed 1st because voice support wasn't perfect.<br />
            📌 Note to self: Add whisper + speaker module for next version.
          </p>

          <h2>🌱 April 17 – Artisan Connect Spark</h2>
          <p>
            📍Back in Vembar, I saw a potter handcrafting magic.<br />
            🧠 Boom: Why not build <strong>Artisan-Connect</strong>, a platform to bring Indian artisans online?<br />
            🛠️ Will need: geolocation, AI-powered promotion engine, secure payment.<br />
            👀 Researching similar MSME models this week.
          </p>

          <h2>🔥 Alex's Dev Fuel</h2>
          <ul>
            <li>🔍 Currently Exploring: <code>Vector Databases</code>, <code>Prompt Engineering</code>, <code>LlamaIndex</code></li>
            <li>📚 Reading: <em>AI Ethics by Nick Bostrom</em></li>
            <li>🎧 Vibe Check: Coding to "Nujabes – Feather"</li>
          </ul>

          <blockquote>
            <p>🧾 <em>"This isn't just a diary. It's the receipt of my grind."</em></p>
          </blockquote>
        </div>
      </Card>
    </section>
  );
};

export default Diary;
