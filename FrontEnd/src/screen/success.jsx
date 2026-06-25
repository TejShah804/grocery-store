import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../component/header/Header';

const SuccessPage = () => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const lastOrder = JSON.parse(localStorage.getItem('lastOrder'));
    if (lastOrder) setOrder(lastOrder);
  }, []);

  return (
    <>
      <Header />
      <div className="container text-center mt-5 mb-5">
        {/* Success Icon */}
        <div style={{
          width: '90px',
          height: '90px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #00B207, #00890a)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 20px',
          boxShadow: '0 8px 24px rgba(0,178,7,0.3)'
        }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>

        <h2 className="fw-bold">Thank You for Your Order! 🎉</h2>
        <p className="text-muted">Your order has been placed successfully and is being processed.</p>

        {order && (
          <div className="card mx-auto mt-4" style={{ maxWidth: '500px', borderRadius: '16px', border: '1px solid #e0e0e0' }}>
            <div className="card-body text-start p-4">
              <h5 className="fw-bold mb-3" style={{ color: '#00B207' }}>Order Details</h5>
              <table className="table table-borderless mb-0">
                <tbody>
                  <tr>
                    <td className="text-muted fw-semibold">Order ID</td>
                    <td className="fw-bold">#{order.orderId}</td>
                  </tr>
                  <tr>
                    <td className="text-muted fw-semibold">Name</td>
                    <td>{order.customer.firstName} {order.customer.lastName}</td>
                  </tr>
                  <tr>
                    <td className="text-muted fw-semibold">Email</td>
                    <td>{order.customer.email}</td>
                  </tr>
                  <tr>
                    <td className="text-muted fw-semibold">Payment</td>
                    <td>{order.customer.paymentMethod}</td>
                  </tr>
                  <tr>
                    <td className="text-muted fw-semibold">Total Paid</td>
                    <td className="fw-bold text-success">₹{Number(order.total).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td className="text-muted fw-semibold">Date</td>
                    <td>{new Date(order.date).toLocaleString('en-IN')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="mt-4 d-flex gap-3 justify-content-center">
          <Link to="/" className="btn btn-success px-4">Continue Shopping</Link>
          <Link to="/dashboard" className="btn btn-outline-success px-4">View Orders</Link>
        </div>
      </div>
    </>
  );
};

export default SuccessPage;
