import React from 'react';

const OrderSummary = ({ cartData, subtotal }) => {
  return (
    <>
      <h5>Order Summary</h5>
      <table className="table bill-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartData.map((item) => (
            <tr key={item.cart_item_id || item.id}>
              <td>{item.name}</td>
              <td>₹{Number(item.price).toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>₹{(Number(item.price) * Number(item.quantity)).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="text-end">Subtotal:</td>
            <td>₹{subtotal.toFixed(2)}</td>
          </tr>
          <tr>
            <td colSpan="3" className="text-end">Shipping:</td>
            <td>Free</td>
          </tr>
          <tr className="total-row fw-bold">
            <td colSpan="3" className="text-end">Total:</td>
            <td>₹{subtotal.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default OrderSummary;
