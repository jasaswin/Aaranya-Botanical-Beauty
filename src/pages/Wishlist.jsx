import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import ProductGrid from "../components/ProductGrid";
import { useWishlist } from "../context/WishlistContext";

export default function Wishlist() {
  const { items } = useWishlist();

  return (
    <div className="pt-28 md:pt-32 pb-24 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-12">
          <p className="text-xs tracking-widest2 uppercase text-gold font-sans mb-3">
            Saved For Later
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-forest">Your Wishlist</h1>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <Heart size={36} className="text-charcoal/20 mx-auto mb-5" strokeWidth={1.2} />
            <p className="font-serif text-2xl text-forest mb-2">Your wishlist is empty.</p>
            <p className="font-sans text-sm text-charcoal/60 mb-8">
              Save the rituals you love and come back to them anytime.
            </p>
            <Link
              to="/shop"
              className="inline-block bg-forest text-offwhite text-xs uppercase tracking-widest2 font-sans px-8 py-4 hover:bg-charcoal transition-colors"
            >
              Explore Collection
            </Link>
          </div>
        ) : (
          <ProductGrid products={items} />
        )}
      </div>
    </div>
  );
}
