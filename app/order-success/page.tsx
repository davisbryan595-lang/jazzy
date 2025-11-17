'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';

export default function OrderSuccessPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center px-4">
          <div className="mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Thank You!
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mb-4">
            Your order has been successfully placed
          </p>
          <p className="text-muted-foreground text-md mb-8">
            We're preparing your premium Jazzyyj's Cajun seasoning blends and will ship them soon. Keep an eye on your email for tracking information!
          </p>
          <Link
            href="/shop"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
