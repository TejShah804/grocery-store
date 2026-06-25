import { createContext, useContext, useState } from "react";

// Create Context
const WishlistContext = createContext();

// Provider Component
export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // Function to add items to the wishlist
  const addToWishlist = (item) => {
    setWishlist((prev) => [...prev, item]);
  };

  // Function to remove items from the wishlist
  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Custom Hook to use Wishlist
export const useWishlist = () => {
  return useContext(WishlistContext);
};
