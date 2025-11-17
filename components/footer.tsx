import Link from 'next/link';
import { socialLinks } from '@/lib/social-config';
import { Youtube, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Jazzyjeatz</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Premium Cajun seasoning for authentic Louisiana flavor
            </p>
            <div className="flex gap-4">
              <a
                href={socialLinks.youtube.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.facebook.pageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.instagram.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-bold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/shop" className="hover:text-secondary transition">All Products</a></li>
              <li><a href="/shop" className="hover:text-secondary transition">Featured</a></li>
              <li><a href="/shop" className="hover:text-secondary transition">Bundles</a></li>
              <li><a href="/cart" className="hover:text-secondary transition">Shopping Cart</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-bold mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#about" className="hover:text-secondary transition">Our Story</a></li>
              <li><a href="/#recipes" className="hover:text-secondary transition">Recipes</a></li>
              <li><a href="/#testimonials" className="hover:text-secondary transition">Reviews</a></li>
              <li><a href="/#faq" className="hover:text-secondary transition">FAQ</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#contact" className="hover:text-secondary transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-secondary transition">Shipping Info</a></li>
              <li><a href="#" className="hover:text-secondary transition">Return Policy</a></li>
              <li><a href="#" className="hover:text-secondary transition">Bulk Orders</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-sm text-primary-foreground/80 mb-3">
              Subscribe for exclusive recipes and special offers
            </p>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-3 py-2 bg-primary-foreground/20 border border-primary-foreground/30 rounded text-sm text-primary-foreground placeholder-primary-foreground/50 mb-2"
            />
            <button className="w-full bg-secondary hover:bg-secondary/90 text-primary font-semibold py-2 rounded transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-primary-foreground/20 py-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold">Email</p>
                <a href="mailto:contact@jazzyjeatz.com" className="text-sm text-primary-foreground/80 hover:text-secondary">
                  contact@jazzyjeatz.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold">Phone</p>
                <a href="tel:+1-800-CAJUN-01" className="text-sm text-primary-foreground/80 hover:text-secondary">
                  1-800-CAJUN-01
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold">Location</p>
                <p className="text-sm text-primary-foreground/80">
                  New Orleans, Louisiana
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/70">
            <p>&copy; 2025 Jazzyjeatz Seasoning. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-secondary transition">Privacy Policy</a>
              <a href="#" className="hover:text-secondary transition">Terms of Service</a>
              <a href="#" className="hover:text-secondary transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
