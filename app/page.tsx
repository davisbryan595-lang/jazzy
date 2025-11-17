'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import AboutUs from '@/components/about-us';
import WhyChooseUs from '@/components/why-choose-us';
import Recipes from '@/components/recipes';
import Testimonials from '@/components/testimonials';
import Contact from '@/components/contact';
import Link from 'next/link';
import { products } from '@/lib/products';
import { useCart } from '@/lib/cart-context';

export default function Home() {
  const { addItem } = useCart();
  const [addedProducts, setAddedProducts] = useState<Set<string>>(new Set());

  const handleAddToCart = (productId: string) => {
    const product = products.find((p) => p.id === productId);
    if (product) {
      addItem(product, 1);
      setAddedProducts((prev) => new Set(prev).add(productId));
      setTimeout(() => {
        setAddedProducts((prev) => {
          const newSet = new Set(prev);
          newSet.delete(productId);
          return newSet;
        });
      }, 2000);
    }
  };

  return (
    <>
      <Header />
      <main className="w-full">
        {/* Promotional Banner */}
        <div className="bg-primary text-primary-foreground py-3 text-center font-bold text-sm md:text-base">
          GET 5 PACKS FOR JUST 70$ & 10 PACKS FOR JUST 135$!!!
        </div>

        {/* Hero Section */}
        <section className="relative h-96 md:h-[500px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&h=600&fit=crop"
            alt="Cajun seafood seasoning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center text-white max-w-2xl px-4">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">
                Add Your Butter, Garlic and Onions and
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-balance">
                Let my Seasoning do the Rest
              </p>
              <Link
                href="/shop"
                className="inline-block bg-primary hover:opacity-90 text-primary-foreground px-8 py-3 rounded border-2 border-primary-foreground font-bold transition"
              >
                BUY NOW
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
                Turn Up the Heat with Our Best-Selling Cajun Seasonings
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                >
                  <img
                    src={product.image || '/placeholder.svg?height=300&width=300&query=cajun-seasoning-package'}
                    alt={product.name}
                    className="w-full h-72 object-cover"
                  />
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-1">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-2xl font-bold text-primary">
                        ${product.price.toFixed(2)}
                      </span>
                      <button
                        onClick={() => handleAddToCart(product.id)}
                        className={`py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
                          addedProducts.has(product.id)
                            ? 'bg-green-600 text-white'
                            : 'bg-primary text-primary-foreground hover:opacity-90'
                        }`}
                      >
                        {addedProducts.has(product.id) ? 'Added!' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <AboutUs />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Recipes Section */}
        <Recipes />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Contact Section */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
