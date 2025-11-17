'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { products } from '@/lib/products';
import { useCart } from '@/lib/cart-context';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

export default function ShopPage() {
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
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="mb-12">
            <h1 className="font-serif text-4xl font-bold text-foreground mb-4">
              Our Products
            </h1>
            <p className="text-muted-foreground text-lg">
              Premium Cajun seafood seasonings crafted to perfection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-2xl font-bold text-primary">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAddToCart(product.id)}
                      className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                        addedProducts.has(product.id)
                          ? 'bg-green-600 text-white'
                          : 'bg-primary text-primary-foreground hover:opacity-90'
                      }`}
                    >
                      <ShoppingCart className="w-4 h-4" />
                      {addedProducts.has(product.id) ? 'Added!' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
