import { X } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";
import { formatCurrency } from "../utils/formatCurrency";

export default function QuickViewModal({ product, onClose }) {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  useEffect(() => {
    function handleEscape(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!product) return null;

  function handleAdd() {
    addToCart(product, 1);
    showToast(`${product.name} added to cart`);
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-[90] bg-charcoal/60 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${product.name} quick view`}
    >
      <div
        className="bg-offwhite max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 relative animate-fade-up max-h-[90vh] overflow-y-auto thin-scroll"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close quick view"
          className="absolute top-3 right-3 z-10 w-9 h-9 bg-offwhite/90 flex items-center justify-center"
        >
          <X size={18} className="text-charcoal" />
        </button>
        <div className="aspect-square bg-sand/40">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className="p-6 md:p-8 flex flex-col gap-3">
          <p className="text-[11px] tracking-widest2 uppercase text-sage font-sans">
            {product.category}
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-forest">{product.name}</h3>
          <Rating value={product.rating} reviewCount={product.reviewCount} />
          <p className="font-sans text-lg text-charcoal">{formatCurrency(product.price)}</p>
          <p className="text-sm text-charcoal/70 font-sans leading-relaxed">
            {product.description}
          </p>
          <div className="flex gap-3 pt-2">
            <button
              onClick={handleAdd}
              className="flex-1 bg-forest text-offwhite text-xs uppercase tracking-widest2 font-sans py-3 hover:bg-charcoal transition-colors"
            >
              Add to Cart
            </button>
            <Link
              to={`/product/${product.id}`}
              onClick={onClose}
              className="flex-1 border border-forest text-forest text-xs uppercase tracking-widest2 font-sans py-3 text-center hover:bg-forest hover:text-offwhite transition-colors"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
