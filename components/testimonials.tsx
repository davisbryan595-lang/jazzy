'use client';

import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: '1',
      name: 'Sarah Johnson',
      text: 'This seasoning changed my cooking game! My family absolutely loves the flavor. Authentic Cajun taste every time.',
      rating: 5,
    },
    {
      id: '2',
      name: 'Marcus Chen',
      text: 'Best purchase ever. The quality is exceptional and the seasoning is versatile - works great on seafood and meats alike.',
      rating: 5,
    },
    {
      id: '3',
      name: 'Lisa Rodriguez',
      text: 'I grew up with real Cajun food, and Jazzyjeatz brings back those memories perfectly. Highly recommend!',
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <h2 className="font-serif text-4xl font-bold text-foreground text-center mb-12">
          Customer Testimonials
        </h2>

        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0 absolute'
              }`}
            >
              <div className="bg-white rounded-lg p-8 md:p-12 text-center shadow-lg">
                <div className="flex justify-center gap-1 mb-4">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-secondary text-secondary"
                      />
                    ))}
                </div>
                <p className="text-lg text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-bold text-foreground">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentIndex
                  ? 'bg-primary w-8'
                  : 'bg-border hover:bg-muted-foreground'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
