import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { X, Search } from "lucide-react";
import { products } from "../data/products";
import { formatCurrency } from "../utils/formatCurrency";

export default function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setQuery("");
    }
  }, [open]);

  useEffect(() => {
    function handleEscape(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!open) return null;

  const results =
    query.trim().length > 0
      ? products
          .filter((p) => {
            const q = query.toLowerCase();
            return (
              p.name.toLowerCase().includes(q) ||
              p.category.toLowerCase().includes(q) ||
              p.description.toLowerCase().includes(q) ||
              p.tags.some((tag) => tag.toLowerCase().includes(q))
            );
          })
          .slice(0, 6)
      : [];

  return (
    <div className="fixed inset-0 z-[95] bg-charcoal/60" onClick={onClose}>
      <div
        className="bg-offwhite max-w-2xl mx-auto mt-24 md:mt-32 mx-4 md:mx-auto animate-fade-up max-h-[70vh] overflow-y-auto thin-scroll"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-charcoal/10 px-5 py-4">
          <Search size={18} className="text-charcoal/50" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search rituals, ingredients, products..."
            className="flex-1 bg-transparent outline-none font-sans text-sm placeholder:text-charcoal/40"
          />
          <button onClick={onClose} aria-label="Close search">
            <X size={18} className="text-charcoal/60" />
          </button>
        </div>

        <div className="p-3">
          {query.trim().length === 0 && (
            <p className="text-sm text-charcoal/50 font-sans px-2 py-6 text-center">
              Start typing to search our botanical edit.
            </p>
          )}
          {query.trim().length > 0 && results.length === 0 && (
            <p className="text-sm text-charcoal/50 font-sans px-2 py-6 text-center">
              No products found for &ldquo;{query}&rdquo;.
            </p>
          )}
          {results.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              onClick={onClose}
              className="flex items-center gap-4 p-3 hover:bg-sand/40 transition-colors"
            >
              <img
                src={product.image}
                alt=""
                className="w-14 h-14 object-cover bg-sand/40 flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className="font-serif text-base text-charcoal truncate">{product.name}</p>
                <p className="text-xs text-sage font-sans uppercase tracking-wide">
                  {product.category}
                </p>
              </div>
              <span className="text-sm font-sans text-charcoal">
                {formatCurrency(product.price)}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
