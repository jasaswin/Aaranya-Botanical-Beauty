import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Eye } from "lucide-react";
import Rating from "./Rating";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useToast } from "../context/ToastContext";
import { formatCurrency } from "../utils/formatCurrency";

export default function ProductCard({ product, onQuickView }) {
  const [hovered, setHovered] = useState(false);
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { showToast } = useToast();
  const inWishlist = isInWishlist(product.id);

  function handleAddToCart(e) {
    e.preventDefault();
    addToCart(product, 1);
    showToast(`${product.name} added to cart`);
  }

  function handleWishlist(e) {
    e.preventDefault();
    toggleWishlist(product);
    showToast(inWishlist ? `Removed from wishlist` : `Added to wishlist`);
  }

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden bg-sand/40 aspect-[3/4]">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              hovered && product.secondaryImage ? "opacity-0" : "opacity-100"
            }`}
          />
          {product.secondaryImage && (
            <img
              src={product.secondaryImage}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
            />
          )}

          {/* wishlist icon */}
          <button
            type="button"
            onClick={handleWishlist}
            aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
            aria-pressed={inWishlist}
            className="absolute top-3 right-3 w-9 h-9 bg-offwhite/90 flex items-center justify-center hover:bg-offwhite transition-colors"
          >
            <Heart size={16} className={inWishlist ? "fill-rose text-rose" : "text-charcoal"} />
          </button>

          {/* quick view */}
          {onQuickView && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                onQuickView(product);
              }}
              className={`absolute top-3 left-3 w-9 h-9 bg-offwhite/90 flex items-center justify-center transition-all hover:bg-offwhite ${
                hovered ? "opacity-100" : "opacity-0 md:opacity-0"
              }`}
              aria-label="Quick view"
            >
              <Eye size={16} className="text-charcoal" />
            </button>
          )}

          {/* add to cart slide-up */}
          <button
            type="button"
            onClick={handleAddToCart}
            className={`absolute bottom-0 left-0 right-0 bg-forest text-offwhite text-xs uppercase tracking-widest2 font-sans py-3 flex items-center justify-center gap-2 transition-transform duration-300 ${
              hovered ? "translate-y-0" : "translate-y-full md:translate-y-full"
            }`}
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>

        <div className="pt-4 space-y-1">
          <p className="text-[11px] tracking-widest2 uppercase text-sage font-sans">
            {product.category}
          </p>
          <h3 className="font-serif text-lg text-charcoal leading-snug">{product.name}</h3>
          <p className="text-xs text-charcoal/60 font-sans line-clamp-1">{product.description}</p>
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-baseline gap-2">
              <span className="font-sans text-sm text-charcoal">
                {formatCurrency(product.price)}
              </span>
              {product.originalPrice > product.price && (
                <span className="font-sans text-xs text-charcoal/40 line-through">
                  {formatCurrency(product.originalPrice)}
                </span>
              )}
            </div>
            <Rating value={product.rating} size={12} />
          </div>
        </div>
      </Link>
    </div>
  );
}
