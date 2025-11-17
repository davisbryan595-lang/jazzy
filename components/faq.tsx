'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    id: '1',
    question: 'What is Jazzyjeatz Seasoning made from?',
    answer: 'Jazzyjeatz Seasoning is crafted from premium, 100% authentic Cajun spices and natural ingredients. Our blend features paprika, cayenne pepper, garlic, onion powder, and other traditional Louisiana seasonings. No artificial preservatives, fillers, or MSG.',
  },
  {
    id: '2',
    question: 'Is your seasoning spicy?',
    answer: 'We offer multiple varieties to suit different heat preferences. Our Mild blend is perfect for those who prefer subtle flavor, while our Spicy blend delivers that authentic kick. Each jar is clearly labeled with the heat level so you can choose what works best for your taste.',
  },
  {
    id: '3',
    question: 'What dishes can I use Jazzyjeatz on?',
    answer: 'Jazzyjeatz works great on seafood, chicken, beef, pork, vegetables, rice, pasta, and more! While it\'s specifically formulated for seafood, our versatile blend is perfect for seasoning just about any savory dish. Check our Recipes section for inspiration!',
  },
  {
    id: '4',
    question: 'How long does shipping take?',
    answer: 'We ship most orders within 1-2 business days. Standard shipping typically takes 5-7 business days, while expedited options are available. Orders are carefully packaged to ensure your seasoning arrives fresh and intact.',
  },
  {
    id: '5',
    question: 'Do you offer international shipping?',
    answer: 'Yes! We ship to select international destinations. Shipping costs and delivery times vary by location. During checkout, you can enter your address to see if we deliver to your area and get an accurate shipping quote.',
  },
  {
    id: '6',
    question: 'Can I return or exchange my order?',
    answer: 'We stand behind our product! If you\'re not completely satisfied with your purchase, we offer returns and exchanges within 30 days. Your satisfaction is our priority. Contact our support team for easy returns or reach out through our Contact page.',
  },
  {
    id: '7',
    question: 'Is your seasoning gluten-free?',
    answer: 'Yes, Jazzyjeatz Seasoning is certified gluten-free. It\'s safe for customers with gluten sensitivity or celiac disease. All our products are processed in a facility that maintains strict gluten-free standards.',
  },
  {
    id: '8',
    question: 'What\'s the shelf life of the seasoning?',
    answer: 'When stored in a cool, dry place in an airtight container, Jazzyjeatz Seasoning stays fresh for 2-3 years. For best flavor, we recommend using it within one year of purchase. The jars are designed to keep the spices fresh and preserve their bold flavors.',
  },
  {
    id: '9',
    question: 'Do you offer bulk or wholesale pricing?',
    answer: 'Yes! For large orders or wholesale inquiries, please contact us directly. We offer competitive pricing for restaurants, caterers, and resellers. Reach out through our Contact page with your requirements.',
  },
  {
    id: '10',
    question: 'How can I stay updated on new products and promotions?',
    answer: 'Subscribe to our newsletter in the footer to receive exclusive recipes, cooking tips, and special offers directly to your inbox. You can also follow us on YouTube, Facebook, Instagram, and TikTok for daily inspiration and updates!',
  },
];

export default function FAQ() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our products, shipping, and more.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} className="border-b border-border">
              <AccordionTrigger className="py-4 hover:text-primary transition">
                <span className="font-semibold text-left text-foreground">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Still have questions */}
        <div className="mt-12 bg-muted/30 border border-border rounded-lg p-8 text-center">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
            Still have questions?
          </h3>
          <p className="text-muted-foreground mb-6">
            Our customer support team is here to help! Reach out anytime through our contact form or email.
          </p>
          <a
            href="/#contact"
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded font-semibold hover:opacity-90 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
