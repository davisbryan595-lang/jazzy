import type { Metadata } from 'next'
import { Playfair_Display, Lora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CartProvider } from '@/lib/cart-context'
import Chatbot from '@/components/chatbot'
import './globals.css'

const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' })
const lora = Lora({ subsets: ["latin"], variable: '--font-lora' })

export const metadata: Metadata = {
  title: "Jazzyyj's Cajun | Premium Seafood Seasoning",
  description: 'Add butter, garlic & onions and let our seasoning do the rest. Premium Cajun seafood seasoning blends.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-lora antialiased ${playfair.variable} ${lora.variable}`}>
        <CartProvider>
          {children}
          <Chatbot />
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
