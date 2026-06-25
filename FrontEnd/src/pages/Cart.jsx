import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Header from "../component/header/Header";
import Footer from "../component/footer/footer";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Header />
      <div className="container mt-4">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <table className="table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>₹{(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h4>Total: ₹{totalPrice.toFixed(2)}</h4>
            <button className="btn btn-secondary me-2" onClick={() => navigate(-1)}>
              Continue Shopping
            </button>
            <button className="btn btn-danger" onClick={clearCart}>
              Clear Cart
            </button>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Cart;
