import { Link } from "react-router-dom";
import { Instagram, MapPin } from "lucide-react";
import Logo from "./Logo";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <footer className="bg-forest text-offwhite">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-4">
          <Logo variant="light" size="large" />
          <p className="text-offwhite/70 font-sans text-sm max-w-xs">
            Botanical Beauty, Thoughtfully Made.
          </p>
          <div className="pt-2">
            <Newsletter variant="footer" />
          </div>
        </div>

        <div>
          <h3 className="text-xs tracking-widest2 uppercase text-gold font-sans mb-4">Shop</h3>
          <ul className="space-y-2 font-sans text-sm text-offwhite/70">
            <li><Link to="/shop" className="hover:text-offwhite transition-colors">Shop All</Link></li>
            <li><Link to="/shop" className="hover:text-offwhite transition-colors">Best Sellers</Link></li>
            <li><Link to="/shop" className="hover:text-offwhite transition-colors">New Arrivals</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs tracking-widest2 uppercase text-gold font-sans mb-4">About</h3>
          <ul className="space-y-2 font-sans text-sm text-offwhite/70">
            <li><Link to="/about" className="hover:text-offwhite transition-colors">About Aaranya</Link></li>
            <li><Link to="/journal" className="hover:text-offwhite transition-colors">Journal</Link></li>
            <li><Link to="/sustainability" className="hover:text-offwhite transition-colors">Sustainability</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs tracking-widest2 uppercase text-gold font-sans mb-4">Help</h3>
          <ul className="space-y-2 font-sans text-sm text-offwhite/70">
            <li><Link to="/contact" className="hover:text-offwhite transition-colors">Contact</Link></li>
            <li><Link to="/contact" className="hover:text-offwhite transition-colors">Shipping</Link></li>
            <li><Link to="/contact" className="hover:text-offwhite transition-colors">Returns</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-offwhite/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-offwhite/50 font-sans text-xs">
            © {new Date().getFullYear()} AARANYA. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-offwhite/50 text-xs font-sans">
            <MapPin size={13} /> Made with care in India
          </div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="text-offwhite/60 hover:text-gold transition-colors">
              <Instagram size={17} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
