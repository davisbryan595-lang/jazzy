import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Jazzyjeatz</h3>
            <p className="text-sm text-primary-foreground/80">
              Premium Cajun seasoning for authentic Louisiana flavor
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-bold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#shop" className="hover:text-secondary transition">All Products</a></li>
              <li><a href="#shop" className="hover:text-secondary transition">Featured</a></li>
              <li><a href="#shop" className="hover:text-secondary transition">Bundles</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-bold mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-secondary transition">Our Story</a></li>
              <li><a href="#recipes" className="hover:text-secondary transition">Recipes</a></li>
              <li><a href="https://youtube.com/@jazzyjeatz3343" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition">YouTube</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-sm text-primary-foreground/80 mb-3">
              Subscribe for recipes and special offers
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 bg-primary-foreground/20 border border-primary-foreground/30 rounded text-sm text-primary-foreground placeholder-primary-foreground/50"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/70">
            <p>&copy; 2025 Jazzyjeatz Seasoning. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-secondary transition">Privacy Policy</a>
              <a href="#" className="hover:text-secondary transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
