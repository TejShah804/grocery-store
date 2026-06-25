import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../component/header/Header";
import Footer from "../component/footer/footer";
import axios from "axios";
import { CartContext } from "../context/CartContext";

const Shoping_cart = () => {
  const [cartData, setCartData] = useState([]);
  const [error, setError] = useState("");
  const { refreshCart } = useContext(CartContext);
  const navigate = useNavigate();

  const getAuthConfig = () => {
    const token = localStorage.getItem("token");
    if (!token) return null;
    return { headers: { Authorization: `Bearer ${token}` } };
  };

  const loadCart = async () => {
    const config = getAuthConfig();
    if (!config) {
      setCartData([]);
      setError("Please login to view your cart.");
      return;
    }
    try {
      const res = await axios.get("http://localhost:5000/api/cart", config);
      setCartData(res.data.cartItems || []);
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load cart");
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  const handleRemove = async (cartItemId) => {
    const config = getAuthConfig();
    if (!config) return;
    try {
      await axios.delete(`http://localhost:5000/api/cart/${cartItemId}`, config);
      await loadCart();
      await refreshCart();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to remove item");
    }
  };

  const handleQuantityChange = async (item, direction) => {
    const config = getAuthConfig();
    if (!config) return;
    const newQuantity = direction === "inc" ? item.quantity + 1 : item.quantity - 1;

    if (newQuantity < 1) return;

    try {
      await axios.put(
        `http://localhost:5000/api/cart/${item.cart_item_id}`,
        { quantity: newQuantity },
        config
      );
      await loadCart();
      await refreshCart();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update quantity");
    }
  };

  const subtotal = cartData.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <>
      <Header />
      <div className="container py-4">
        <h2 className="mb-4 text-center">My Shopping Cart</h2>

        {cartData.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="row">
            <div className="col-md-8">
              <table className="table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartData.map((item) => (
                    <tr key={item.cart_item_id}>
                      <td>
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{ width: "60px", height: "60px" }}
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>₹{Number(item.price).toFixed(2)}</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => handleQuantityChange(item, "dec")}
                          >
                            -
                          </button>
                          <span className="mx-2">{item.quantity}</span>
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => handleQuantityChange(item, "inc")}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>₹{(Number(item.price) * item.quantity).toFixed(2)}</td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleRemove(item.cart_item_id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                className="btn btn-outline-secondary"
                onClick={() => window.history.back()}
              >
                Return to Shop
              </button>
            </div>

            <div className="col-md-4">
              <div className="right-boxx">
                <h5 style={{ fontWeight: 500, marginBottom: "20px" }}>
                  Cart Total
                </h5>
                <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
                <p>
                  Shipping: <strong>Free</strong>
                </p>
                <hr />
                <h5>Total: ₹{subtotal.toFixed(2)}</h5>
                <button
                  className="btn btn-success btn-block"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
        {error && <div className="alert alert-danger mt-3">{error}</div>}
      </div>
      <Footer />
    </>
  );
};

export default Shoping_cart;
