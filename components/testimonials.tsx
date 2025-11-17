'use client';

import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: '1',
      name: 'Sarah Johnson',
      location: 'New Orleans, LA',
      text: 'This seasoning changed my cooking game! My family absolutely loves the flavor. Authentic Cajun taste every time. I\'ve tried many brands, but nothing compares.',
      rating: 5,
    },
    {
      id: '2',
      name: 'Marcus Chen',
      location: 'Houston, TX',
      text: 'Best purchase ever. The quality is exceptional and the seasoning is versatile - works great on seafood and meats alike. The flavor profile is incredible.',
      rating: 5,
    },
    {
      id: '3',
      name: 'Lisa Rodriguez',
      location: 'Mobile, AL',
      text: 'I grew up with real Cajun food, and Jazzyjeatz brings back those memories perfectly. Highly recommend! My restaurant even uses it now.',
      rating: 5,
    },
    {
      id: '4',
      name: 'James Wilson',
      location: 'Miami, FL',
      text: 'Amazing seasoning! Perfect for my seafood boils. The shipping was quick and the product came in perfect condition. Already ordered again!',
      rating: 5,
    },
    {
      id: '5',
      name: 'Angela Martinez',
      location: 'New Iberia, LA',
      text: 'A homegrown product with authentic Cajun flavor. Supporting local has never tasted so good. Worth every penny!',
      rating: 5,
    },
    {
      id: '6',
      name: 'David Thompson',
      location: 'Baton Rouge, LA',
      text: 'My go-to seasoning for everything. From crawfish boils to everyday cooking, Jazzyjeatz is always in my spice rack. Customer service is excellent too!',
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
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-center mb-4">
          Customer Testimonials
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          See what our customers are saying about Jazzyjeatz Seasoning. Real reviews from real people.
        </p>

        {/* Featured Carousel */}
        <div className="relative mb-16 max-w-4xl mx-auto">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
              }`}
            >
              <div className="bg-card rounded-lg p-8 md:p-12 text-center shadow-lg border border-border">
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
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicators for Featured */}
        <div className="flex justify-center gap-2 mb-16 max-w-4xl mx-auto">
          {testimonials.slice(0, 3).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentIndex
                  ? 'bg-primary w-8'
                  : 'bg-border hover:bg-muted-foreground'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div>
          <h3 className="font-serif text-2xl font-bold text-foreground text-center mb-8">
            More Customer Reviews
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-card rounded-lg p-6 border border-border hover:shadow-lg hover:border-primary transition-all duration-300"
              >
                <div className="flex gap-1 mb-3">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-secondary text-secondary"
                      />
                    ))}
                </div>
                <p className="text-muted-foreground mb-4 text-sm italic line-clamp-3">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
