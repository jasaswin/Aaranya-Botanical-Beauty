import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { CheckCircle2, Truck, Zap } from "lucide-react";
import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utils/formatCurrency";

const initialForm = {
  email: "",
  phone: "",
  fullName: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
};

function generateOrderNumber() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `AAR-${y}${m}${d}-${rand}`;
}

export default function Checkout() {
  const { items, subtotal, shipping, total, clearCart } = useCart();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [deliveryMethod, setDeliveryMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [orderNumber, setOrderNumber] = useState(null);

  if (items.length === 0 && !orderNumber) {
    return <Navigate to="/cart" replace />;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function validate() {
    const newErrors = {};
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email.";
    }
    if (!form.phone.trim() || form.phone.trim().length < 10) {
      newErrors.phone = "Enter a valid phone number.";
    }
    if (!form.fullName.trim()) newErrors.fullName = "Enter your full name.";
    if (!form.address.trim()) newErrors.address = "Enter your address.";
    if (!form.city.trim()) newErrors.city = "Enter your city.";
    if (!form.state.trim()) newErrors.state = "Enter your state.";
    if (!form.pincode.trim() || !/^\d{6}$/.test(form.pincode.trim())) {
      newErrors.pincode = "Enter a valid 6-digit pincode.";
    }
    return newErrors;
  }

  function handlePlaceOrder(e) {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const num = generateOrderNumber();
    setOrderNumber(num);
    clearCart();
  }

  const deliveryFee = deliveryMethod === "express" ? 149 : shipping;
  const finalTotal = subtotal + deliveryFee;

  if (orderNumber) {
    return (
      <div className="pt-28 md:pt-32 pb-24 bg-cream min-h-screen">
        <div className="max-w-xl mx-auto px-5 md:px-8 text-center">
          <CheckCircle2 size={44} className="text-sage mx-auto mb-6" />
          <p className="text-xs tracking-widest2 uppercase text-gold font-sans mb-3">
            Order Confirmed
          </p>
          <h1 className="font-serif text-3xl md:text-4xl text-forest mb-4">Thank you.</h1>
          <p className="font-sans text-charcoal/70 mb-2">
            Your ritual is on its way. A confirmation has been sent to {form.email}.
          </p>
          <div className="bg-offwhite border border-charcoal/10 inline-block px-6 py-4 my-6">
            <p className="text-xs uppercase tracking-widest2 font-sans text-charcoal/50 mb-1">
              Order Number
            </p>
            <p className="font-serif text-2xl text-forest">{orderNumber}</p>
          </div>
          <div>
            <Link
              to="/shop"
              className="inline-block bg-forest text-offwhite text-xs uppercase tracking-widest2 font-sans px-8 py-4 hover:bg-charcoal transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
          <p className="text-xs text-charcoal/40 font-sans mt-8">
            This is a UI-only demo checkout. No real payment was processed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 md:pt-32 pb-24 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <h1 className="font-serif text-4xl md:text-5xl text-forest mb-12">Checkout</h1>

        <form onSubmit={handlePlaceOrder} noValidate className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            {/* Contact info */}
            <section>
              <h2 className="font-serif text-xl text-forest mb-4">Contact Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-offwhite p-6">
                <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} />
                <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={handleChange} error={errors.phone} />
              </div>
            </section>

            {/* Shipping address */}
            <section>
              <h2 className="font-serif text-xl text-forest mb-4">Shipping Address</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-offwhite p-6">
                <div className="sm:col-span-2">
                  <Field label="Full Name" name="fullName" value={form.fullName} onChange={handleChange} error={errors.fullName} />
                </div>
                <div className="sm:col-span-2">
                  <Field label="Address" name="address" value={form.address} onChange={handleChange} error={errors.address} />
                </div>
                <Field label="City" name="city" value={form.city} onChange={handleChange} error={errors.city} />
                <Field label="State" name="state" value={form.state} onChange={handleChange} error={errors.state} />
                <Field label="Pincode" name="pincode" value={form.pincode} onChange={handleChange} error={errors.pincode} />
              </div>
            </section>

            {/* Delivery method */}
            <section>
              <h2 className="font-serif text-xl text-forest mb-4">Delivery Method</h2>
              <div className="space-y-3">
                <DeliveryOption
                  icon={Truck}
                  label="Standard Delivery"
                  subtitle="3-5 business days"
                  price={subtotal >= 999 ? "FREE" : formatCurrency(79)}
                  selected={deliveryMethod === "standard"}
                  onSelect={() => setDeliveryMethod("standard")}
                />
                <DeliveryOption
                  icon={Zap}
                  label="Express Delivery"
                  subtitle="1-2 business days"
                  price={formatCurrency(149)}
                  selected={deliveryMethod === "express"}
                  onSelect={() => setDeliveryMethod("express")}
                />
              </div>
            </section>

            {/* Payment method */}
            <section>
              <h2 className="font-serif text-xl text-forest mb-4">Payment Method</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {["upi", "card", "cod"].map((method) => (
                  <button
                    type="button"
                    key={method}
                    onClick={() => setPaymentMethod(method)}
                    className={`py-4 text-sm font-sans border transition-colors ${
                      paymentMethod === method
                        ? "border-forest bg-forest text-offwhite"
                        : "border-charcoal/20 text-charcoal/70 hover:border-forest"
                    }`}
                  >
                    {method === "upi" && "UPI"}
                    {method === "card" && "Card"}
                    {method === "cod" && "Cash on Delivery"}
                  </button>
                ))}
              </div>
              <p className="text-xs text-charcoal/40 font-sans mt-3">
                This is a UI-only checkout demo. No real payment will be processed.
              </p>
            </section>
          </div>

          {/* Order summary */}
          <div className="bg-offwhite p-6 md:p-8 h-fit sticky top-28">
            <h2 className="font-serif text-xl text-forest mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6 max-h-64 overflow-y-auto thin-scroll">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <img src={item.image} alt={item.name} className="w-14 h-16 object-cover bg-sand/40 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-sm text-charcoal truncate">{item.name}</p>
                    <p className="text-xs text-charcoal/50 font-sans">Qty {item.quantity}</p>
                  </div>
                  <span className="text-sm font-sans text-charcoal flex-shrink-0">
                    {formatCurrency(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>
            <div className="space-y-2 font-sans text-sm border-t border-charcoal/10 pt-4">
              <div className="flex justify-between text-charcoal/70">
                <span>Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between text-charcoal/70">
                <span>Delivery</span>
                <span>{deliveryFee === 0 ? "FREE" : formatCurrency(deliveryFee)}</span>
              </div>
              <div className="flex justify-between font-serif text-xl text-forest pt-3 border-t border-charcoal/10">
                <span>Total</span>
                <span>{formatCurrency(finalTotal)}</span>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-forest text-offwhite text-xs uppercase tracking-widest2 font-sans py-4 mt-6 hover:bg-charcoal transition-colors"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({ label, name, value, onChange, error, type = "text" }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-widest2 font-sans text-charcoal/60 mb-2 block">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full bg-cream border px-4 py-3 font-sans text-sm outline-none focus:border-forest ${
          error ? "border-rose" : "border-charcoal/20"
        }`}
      />
      {error && <p className="text-rose text-xs font-sans mt-1">{error}</p>}
    </div>
  );
}

function DeliveryOption({ icon: Icon, label, subtitle, price, selected, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full flex items-center gap-4 p-4 border text-left transition-colors ${
        selected ? "border-forest bg-offwhite" : "border-charcoal/20 hover:border-forest"
      }`}
    >
      <Icon size={20} className="text-gold flex-shrink-0" strokeWidth={1.5} />
      <div className="flex-1">
        <p className="font-sans text-sm text-charcoal">{label}</p>
        <p className="text-xs text-charcoal/50 font-sans">{subtitle}</p>
      </div>
      <span className="font-sans text-sm text-charcoal">{price}</span>
    </button>
  );
}
