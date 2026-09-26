import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utils/formatCurrency";

export default function Cart() {
  const { items, increaseQuantity, decreaseQuantity, removeFromCart, subtotal, discount, shipping, total } =
    useCart();

  if (items.length === 0) {
    return (
      <div className="pt-28 md:pt-32 pb-24 bg-cream min-h-screen">
        <div className="max-w-7xl mx-auto px-5 md:px-8 text-center py-20">
          <ShoppingBag size={36} className="text-charcoal/20 mx-auto mb-5" strokeWidth={1.2} />
          <p className="font-serif text-2xl text-forest mb-2">Your ritual basket is waiting.</p>
          <p className="font-sans text-sm text-charcoal/60 mb-8">
            Discover botanical rituals crafted to become part of your everyday routine.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-forest text-offwhite text-xs uppercase tracking-widest2 font-sans px-8 py-4 hover:bg-charcoal transition-colors"
          >
            Explore Collection
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 md:pt-32 pb-24 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <h1 className="font-serif text-4xl md:text-5xl text-forest mb-12">Your Bag</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 divide-y divide-charcoal/10 bg-offwhite">
            {items.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row gap-5 p-5 md:p-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full sm:w-28 h-40 sm:h-32 object-cover bg-sand/40 flex-shrink-0"
                />
                <div className="flex-1 flex flex-col justify-between gap-3">
                  <div className="flex justify-between gap-4">
                    <div>
                      <p className="text-[11px] tracking-widest2 uppercase text-sage font-sans mb-1">
                        {item.category}
                      </p>
                      <Link to={`/product/${item.id}`} className="font-serif text-xl text-charcoal hover:text-forest transition-colors">
                        {item.name}
                      </Link>
                      <p className="text-sm text-charcoal/50 font-sans mt-1">
                        {formatCurrency(item.price)} each
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      aria-label={`Remove ${item.name}`}
                      className="text-charcoal/40 hover:text-rose transition-colors flex-shrink-0"
                    >
                      <Trash2 size={17} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center border border-charcoal/20">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        aria-label="Decrease quantity"
                        className="w-9 h-9 flex items-center justify-center hover:bg-sand/60"
                      >
                        <Minus size={13} />
                      </button>
                      <span className="w-10 text-center text-sm font-sans">{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        aria-label="Increase quantity"
                        className="w-9 h-9 flex items-center justify-center hover:bg-sand/60"
                      >
                        <Plus size={13} />
                      </button>
                    </div>
                    <span className="font-serif text-lg text-forest">
                      {formatCurrency(item.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-offwhite p-6 md:p-8 h-fit sticky top-28">
            <h2 className="font-serif text-2xl text-forest mb-6">Order Summary</h2>
            <div className="space-y-3 font-sans text-sm">
              <div className="flex justify-between text-charcoal/70">
                <span>Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-sage">
                  <span>Discount</span>
                  <span>-{formatCurrency(discount)}</span>
                </div>
              )}
              <div className="flex justify-between text-charcoal/70">
                <span>Shipping</span>
                <span>{shipping === 0 ? "FREE" : formatCurrency(shipping)}</span>
              </div>
              <div className="flex justify-between font-serif text-xl text-forest pt-4 border-t border-charcoal/10">
                <span>Total</span>
                <span>{formatCurrency(total)}</span>
              </div>
            </div>
            <Link
              to="/checkout"
              className="block text-center bg-forest text-offwhite text-xs uppercase tracking-widest2 font-sans py-4 mt-6 hover:bg-charcoal transition-colors"
            >
              Proceed to Checkout
            </Link>
            <Link
              to="/shop"
              className="block text-center text-xs uppercase tracking-widest2 font-sans text-forest mt-4 hover:text-gold transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
