
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const contacts = [
    {
      platform: "Email",
      value: "rohithalex06@gmail.com",
      icon: "📧",
      link: "mailto:rohithalex06@gmail.com",
    },
    {
      platform: "LinkedIn",
      value: "linkedin.com/in/alexrohith",
      icon: "💼",
      link: "https://www.linkedin.com/in/alexrohith/",
    },
    {
      platform: "GitHub",
      value: "github.com/Alexrohith",
      icon: "💻",
      link: "https://github.com/Alexrohith",
    },
    {
      platform: "LeetCode",
      value: "leetcode.com/u/AlexRohith",
      icon: "🎯",
      link: "https://leetcode.com/u/AlexRohith/",
    },
    {
      platform: "Phone",
      value: "+91 9342608580",
      icon: "📱",
      link: "tel:+919342608580",
    }
  ];

  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
      <Card className="max-w-2xl mx-auto p-8 bg-white/80 backdrop-blur dark:bg-black/20">
        <div className="grid grid-cols-1 gap-4">
          {contacts.map((contact) => (
            <a
              key={contact.platform}
              href={contact.link}
              target={contact.platform !== "Phone" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-colors"
            >
              <span className="text-2xl">{contact.icon}</span>
              <div>
                <div className="font-medium">{contact.platform}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{contact.value}</div>
              </div>
            </a>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default Contact;
