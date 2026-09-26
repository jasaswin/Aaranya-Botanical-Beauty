import { createContext, useContext, useEffect, useState } from "react";
import { loadFromStorage, saveToStorage } from "../utils/localStorage";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => loadFromStorage("aaranya_cart", []));

  useEffect(() => {
    saveToStorage("aaranya_cart", items);
  }, [items]);

  function addToCart(product, quantity = 1) {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  }

  function removeFromCart(productId) {
    setItems((prev) => prev.filter((item) => item.id !== productId));
  }

  function increaseQuantity(productId) {
    setItems((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity: item.quantity + 1 } : item))
    );
  }

  function decreaseQuantity(productId) {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function clearCart() {
    setItems([]);
  }

  const cartCount = items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const originalTotal = items.reduce(
    (total, item) => total + (item.originalPrice || item.price) * item.quantity,
    0
  );
  const discount = Math.max(0, originalTotal - subtotal);
  const shipping = items.length === 0 || subtotal >= 999 ? 0 : 79;
  const total = subtotal + shipping;

  const value = {
    items,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    cartCount,
    subtotal,
    discount,
    shipping,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
