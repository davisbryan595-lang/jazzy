'use client';

import { Play } from 'lucide-react';
import { useState } from 'react';

export default function VideoGallery() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const videos = [
    {
      id: '1',
      title: 'How to Make Cajun Seafood Boil',
      thumbnail: '/seafood-boil-cooking.jpg',
      videoId: 'jazzyjeatz3343', // placeholder
    },
    {
      id: '2',
      title: 'Garlic Butter Shrimp Recipe',
      thumbnail: '/garlic-butter-shrimp.jpg',
      videoId: 'jazzyjeatz3343',
    },
    {
      id: '3',
      title: 'Cajun Cooking Tips & Tricks',
      thumbnail: '/cajun-cooking-tutorial.jpg',
      videoId: 'jazzyjeatz3343',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
            From Our Kitchen
          </h2>
          <p className="text-muted-foreground text-lg">
            Watch our YouTube channel for exclusive recipes and cooking tips
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="rounded-lg overflow-hidden cursor-pointer group"
              onMouseEnter={() => setHoveredId(video.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden bg-black h-64">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className={`w-full h-full object-cover transition-transform duration-300 ${
                    hoveredId === video.id ? 'scale-110 brightness-75' : 'scale-100'
                  }`}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition">
                  <Play className="w-16 h-16 text-white group-hover:scale-110 transition" />
                </div>
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-bold text-foreground">{video.title}</h3>
                <a
                  href="https://youtube.com/@jazzyjeatz3343"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm font-semibold hover:underline mt-2 inline-block"
                >
                  Watch on YouTube →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
