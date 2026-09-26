import { useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utils/formatCurrency";

export default function CartDrawer({ open, onClose }) {
  const { items, increaseQuantity, decreaseQuantity, removeFromCart, subtotal, shipping, total } =
    useCart();

  useEffect(() => {
    function handleEscape(e) {
      if (e.key === "Escape") onClose();
    }
    if (open) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-charcoal/50 z-[80] transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-offwhite z-[85] flex flex-col transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between px-6 h-20 border-b border-charcoal/10">
          <h2 className="font-serif text-2xl text-forest">Your Bag ({items.length})</h2>
          <button onClick={onClose} aria-label="Close cart">
            <X size={20} className="text-charcoal" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 px-8 text-center">
            <p className="font-serif text-xl text-forest">Your ritual basket is waiting.</p>
            <Link
              to="/shop"
              onClick={onClose}
              className="text-xs uppercase tracking-widest2 font-sans bg-forest text-offwhite px-6 py-3 hover:bg-charcoal transition-colors"
            >
              Explore Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto thin-scroll px-6 divide-y divide-charcoal/10">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 py-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-24 object-cover bg-sand/40 flex-shrink-0"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between gap-2">
                      <div>
                        <p className="font-serif text-base text-charcoal leading-snug">
                          {item.name}
                        </p>
                        <p className="text-xs text-charcoal/50 font-sans">
                          {formatCurrency(item.price)}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        aria-label={`Remove ${item.name}`}
                        className="text-charcoal/40 hover:text-rose transition-colors"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center border border-charcoal/20">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          aria-label="Decrease quantity"
                          className="w-7 h-7 flex items-center justify-center hover:bg-sand/60"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-xs font-sans">{item.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          aria-label="Increase quantity"
                          className="w-7 h-7 flex items-center justify-center hover:bg-sand/60"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="font-sans text-sm text-charcoal">
                        {formatCurrency(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-charcoal/10 px-6 py-5 space-y-2">
              <div className="flex justify-between text-sm font-sans text-charcoal/70">
                <span>Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm font-sans text-charcoal/70">
                <span>Shipping</span>
                <span>{shipping === 0 ? "FREE" : formatCurrency(shipping)}</span>
              </div>
              <div className="flex justify-between font-serif text-lg text-forest pt-2 border-t border-charcoal/10">
                <span>Total</span>
                <span>{formatCurrency(total)}</span>
              </div>
              <Link
                to="/cart"
                onClick={onClose}
                className="block text-center text-xs uppercase tracking-widest2 font-sans border border-forest text-forest py-3 mt-3 hover:bg-forest hover:text-offwhite transition-colors"
              >
                View Cart
              </Link>
              <Link
                to="/checkout"
                onClick={onClose}
                className="block text-center text-xs uppercase tracking-widest2 font-sans bg-forest text-offwhite py-3 hover:bg-charcoal transition-colors"
              >
                Checkout
              </Link>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
