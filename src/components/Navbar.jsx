import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const navLinks = [
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
  { to: "/sustainability", label: "Sustainability" },
];

export default function Navbar({ onSearchOpen, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const navBg = scrolled || mobileOpen
    ? "bg-offwhite/95 backdrop-blur-sm border-b border-charcoal/10"
    : "bg-transparent border-b border-transparent";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <nav className="max-w-7xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between">
        <Logo variant={scrolled || mobileOpen ? "dark" : "light"} />

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `text-xs tracking-widest2 uppercase font-sans transition-colors ${
                    scrolled ? "text-charcoal hover:text-forest" : "text-offwhite hover:text-gold"
                  } ${isActive ? (scrolled ? "text-forest" : "text-gold") : ""}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 md:gap-5">
          <button
            onClick={onSearchOpen}
            aria-label="Search"
            className={`transition-colors ${scrolled ? "text-charcoal" : "text-offwhite"} hover:text-gold`}
          >
            <Search size={19} />
          </button>
          <Link
            to="/wishlist"
            aria-label="Wishlist"
            className={`relative transition-colors ${scrolled ? "text-charcoal" : "text-offwhite"} hover:text-gold`}
          >
            <Heart size={19} />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-rose text-offwhite text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>
          <button
            onClick={onCartOpen}
            aria-label="Cart"
            className={`relative transition-colors ${scrolled ? "text-charcoal" : "text-offwhite"} hover:text-gold`}
          >
            <ShoppingBag size={19} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-offwhite text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button
            className={`md:hidden transition-colors ${scrolled || mobileOpen ? "text-charcoal" : "text-offwhite"}`}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* mobile full-screen nav */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-offwhite z-[60] flex flex-col">
          <div className="flex items-center justify-between px-5 h-20 border-b border-charcoal/10">
            <Logo variant="dark" />
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <X size={24} className="text-charcoal" />
            </button>
          </div>
          <ul className="flex flex-col items-start gap-1 px-6 py-10">
            {navLinks.map((link) => (
              <li key={link.to} className="w-full border-b border-charcoal/10">
                <NavLink
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="block py-4 font-serif text-2xl text-forest"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="w-full border-b border-charcoal/10">
              <Link
                to="/wishlist"
                onClick={() => setMobileOpen(false)}
                className="block py-4 font-serif text-2xl text-forest"
              >
                Wishlist
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block py-4 font-serif text-2xl text-forest"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
