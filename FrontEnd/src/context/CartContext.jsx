import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const cartCount = cart.reduce((sum, item) => sum + Number(item.quantity || 0), 0);

  const getAuthConfig = () => {
    const token = localStorage.getItem("token");
    if (!token) return null;
    return { headers: { Authorization: `Bearer ${token}` } };
  };

  const refreshCart = async () => {
    const config = getAuthConfig();
    if (!config) {
      setCart([]);
      return;
    }
    try {
      const res = await axios.get("http://localhost:5000/api/cart", config);
      const items = res.data.cartItems || [];
      setCart(items);
    } catch (err) {
      setCart([]);
    }
  };

  useEffect(() => {
    refreshCart();
  }, []);

  const addToCart = async (product) => {
    const config = getAuthConfig();
    if (!config) return;
    await axios.post(
      "http://localhost:5000/api/cart",
      {
        product_id: product.id ?? null,
        name: product.name,
        price: product.price,
        image: product.image || null,
        quantity: 1,
      },
      config
    );
    await refreshCart();
  };

  const removeFromCart = async (cartItemId) => {
    const config = getAuthConfig();
    if (!config) return;
    await axios.delete(`http://localhost:5000/api/cart/${cartItemId}`, config);
    await refreshCart();
  };

  const updateCartQuantity = async (cartItemId, quantity) => {
    const config = getAuthConfig();
    if (!config) return;
    await axios.put(`http://localhost:5000/api/cart/${cartItemId}`, { quantity }, config);
    await refreshCart();
  };

  const clearCart = async () => {
    const config = getAuthConfig();
    if (!config) return;
    await axios.delete("http://localhost:5000/api/cart", config);
    await refreshCart();
  };

  return (
    <CartContext.Provider
      value={{ cart, cartCount, refreshCart, addToCart, updateCartQuantity, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
