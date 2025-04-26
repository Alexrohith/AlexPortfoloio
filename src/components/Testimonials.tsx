
import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Alex is a one-man army. His leadership and technical clarity stood out in every hackathon.",
      author: "S. Bharath",
    },
    {
      quote: "A passionate learner with real vision. Proud to have worked with Alex.",
      author: "Mentor, Twite AI",
    },
  ];

  return (
    <section id="testimonials" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="p-6 bg-white/80 backdrop-blur">
            <blockquote className="text-lg italic mb-4">
              "{testimonial.quote}"
            </blockquote>
            <cite className="text-gray-600 block text-right">- {testimonial.author}</cite>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
