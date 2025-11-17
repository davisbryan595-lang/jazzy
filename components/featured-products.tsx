'use client';

import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';

export default function FeaturedProducts() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const products = [
    {
      id: '1',
      name: 'Classic Cajun Blend',
      price: '$12.99',
      image: '/spice-bottle-seasoning.jpg',
      badge: 'Best Seller',
    },
    {
      id: '2',
      name: 'Seafood Boil Special',
      price: '$14.99',
      image: '/cajun-seasoning-jar.jpg',
      badge: 'New',
    },
    {
      id: '3',
      name: 'Garlic Butter Blend',
      price: '$13.99',
      image: '/seasoning-blend-container.jpg',
      badge: 'Popular',
    },
    {
      id: '4',
      name: 'Combo Pack (3 Jars)',
      price: '$34.99',
      image: '/spice-jar-collection.jpg',
      badge: 'Save $5',
    },
  ];

  return (
    <section id="shop" className="py-16 md:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our premium seasoning blends crafted for seafood, meats, and more
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden bg-muted h-64">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className={`w-full h-full object-cover transition-transform duration-300 ${
                    hoveredId === product.id ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                  {product.badge}
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-foreground mb-2">{product.name}</h3>
                <p className="text-lg font-bold text-primary mb-4">{product.price}</p>
                <button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground py-2 rounded-lg transition font-semibold">
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
