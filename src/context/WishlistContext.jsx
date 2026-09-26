import { createContext, useContext, useEffect, useState } from "react";
import { loadFromStorage, saveToStorage } from "../utils/localStorage";

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const [items, setItems] = useState(() => loadFromStorage("aaranya_wishlist", []));

  useEffect(() => {
    saveToStorage("aaranya_wishlist", items);
  }, [items]);

  function toggleWishlist(product) {
    setItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });
  }

  function isInWishlist(productId) {
    return items.some((item) => item.id === productId);
  }

  function removeFromWishlist(productId) {
    setItems((prev) => prev.filter((item) => item.id !== productId));
  }

  const value = {
    items,
    toggleWishlist,
    isInWishlist,
    removeFromWishlist,
    wishlistCount: items.length,
  };

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) throw new Error("useWishlist must be used within WishlistProvider");
  return context;
}
