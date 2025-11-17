'use client';

import { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Add your Butter, Garlic & Onions and Let my Seasoning do the Rest!',
      image: '/seafood-boil-cajun-butter.jpg',
    },
    {
      title: 'Turn Any Meal Into Cajun Magic!',
      image: '/cajun-spices-seasoning-blend.jpg',
    },
    {
      title: 'Spice, Flavor, Heat — All in One Bottle!',
      image: '/spicy-seasoning-ingredients.jpg',
    },
    {
      title: 'Authentic Cajun Taste in Every Sprinkle!',
      image: '/cajun-cooking-seafood-boil.jpg',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-white text-center max-w-4xl px-4 text-balance">
              {slide.title}
            </h2>
            <button className="mt-8 px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-lg transition">
              BUY NOW
            </button>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide
                ? 'bg-primary w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
