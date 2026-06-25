import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: '14px',
      color: '#222',
      fontFamily: 'inherit',
      '::placeholder': { color: '#aab7c4' },
    },
    invalid: { color: '#dc3545' },
  },
};

const PaymentMethods = ({ formData, handleChange, setFormData }) => {
  const paymentBox = (method, label, extra) => {
    const active = formData.paymentMethod === method;
    return (
      <div
        className={`checkout-method-box ${active ? 'active' : 'inactive'}`}
        onClick={() => setFormData({ ...formData, paymentMethod: method })}
      >
        <div className="d-flex align-items-center gap-2">
          <input
            type="radio"
            name="paymentMethod"
            value={method}
            checked={active}
            onChange={handleChange}
          />
          {label}
        </div>
        {active && extra && (
          <div className="checkout-method-extra" onClick={(e) => e.stopPropagation()}>
            {extra}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="payment-methods mt-3">
      <h6 className="fw-bold mb-3" style={{ fontSize: '15px', color: '#222', letterSpacing: '0.3px' }}>
        Choose Payment Method
      </h6>
      <hr className="mt-1 mb-3" />

      {/* Cash on Delivery */}
      {paymentBox('Cash on Delivery',
        <span className="checkout-method-label"> Cash on Delivery</span>
      )}

      {/* UPI */}
      {paymentBox('UPI',
        <span className="checkout-method-label">📱 UPI</span>,
        <div>
          <div className="d-flex flex-wrap gap-2 mb-3">
            {[
              { name: 'Google Pay', color: '#34A853' },
              { name: 'PhonePe', color: '#5f259f' },
              { name: 'Paytm', color: '#00b9f1' },
              { name: 'BHIM', color: '#FF6600' },
            ].map((app) => (
              <button
                key={app.name}
                type="button"
                className="checkout-upi-btn"
                onClick={(e) => { e.stopPropagation(); setFormData({ ...formData, paymentMethod: 'UPI', upiApp: app.name }); }}
                style={{
                  border: formData.upiApp === app.name ? `2px solid ${app.color}` : '1px solid #ddd',
                  color: app.color,
                }}
              >
                {app.name}
              </button>
            ))}
          </div>
          <input
            type="text"
            className="form-control checkout-input-small"
            name="upiId"
            placeholder="Enter UPI ID (e.g. name@upi)"
            onClick={(e) => e.stopPropagation()}
            onChange={handleChange}
          />
        </div>
      )}

      {/* Credit / Debit Card */}
      {paymentBox('Credit / Debit Card',
        <div className="d-flex align-items-center gap-2 flex-grow-1">
          <span className="checkout-method-label"> Credit / Debit Card</span>
          <div className="ms-auto d-flex gap-1">
            <span className="checkout-card-badge visa">VISA</span>
            <span className="checkout-card-badge mc">MC</span>
            <span className="checkout-card-badge amex">AMEX</span>
          </div>
        </div>,
        <div>
          <div className="mb-2">
            <label className="form-label checkout-form-label">Card Number</label>
            <input type="text" className="form-control checkout-input-small" name="cardNumber" placeholder="0000  0000  0000  0000" onChange={handleChange} style={{ letterSpacing: '1px' }} />
          </div>
          <div className="mb-2">
            <label className="form-label checkout-form-label">Name on Card</label>
            <input type="text" className="form-control checkout-input-small" name="cardName" placeholder="Your Name" onChange={handleChange} />
          </div>
          <div className="row g-2">
            <div className="col-6">
              <label className="form-label checkout-form-label">Expiry Date</label>
              <input type="text" className="form-control checkout-input-small" name="cardExpiry" placeholder="MM / YY" onChange={handleChange} />
            </div>
            <div className="col-6">
              <label className="form-label checkout-form-label">CVV</label>
              <input type="password" className="form-control checkout-input-small" name="cardCvv" placeholder="• • •" maxLength={4} onChange={handleChange} />
            </div>
          </div>
        </div>
      )}

      {/* Net Banking */}
      {paymentBox('Net Banking',
        <span className="checkout-method-label"> Net Banking</span>,
        <select className="form-select checkout-input-small" name="netBank" onChange={handleChange}>
          <option value="">-- Select Your Bank --</option>
          <option>State Bank of India (SBI)</option>
          <option>HDFC Bank</option>
          <option>ICICI Bank</option>
          <option>Axis Bank</option>
          <option>Kotak Mahindra Bank</option>
          <option>Punjab National Bank</option>
          <option>Bank of Baroda</option>
          <option>Canara Bank</option>
        </select>
      )}

      {/* Wallet */}
      {paymentBox('Wallet',
        <span className="checkout-method-label"> Wallet</span>,
        <div className="d-flex flex-wrap gap-2">
          {[
            { name: 'Paytm Wallet', color: '#00b9f1' },
            { name: 'Amazon Pay', color: '#FF9900' },
            { name: 'Freecharge', color: '#e83e8c' },
            { name: 'MobiKwik', color: '#0084ff' },
          ].map((w) => (
            <button
              key={w.name}
              type="button"
              className="checkout-upi-btn"
              onClick={(e) => { e.stopPropagation(); setFormData({ ...formData, paymentMethod: 'Wallet', walletApp: w.name }); }}
              style={{
                border: formData.walletApp === w.name ? `2px solid ${w.color}` : '1px solid #ddd',
                color: w.color,
              }}
            >
              {w.name}
            </button>
          ))}
        </div>
      )}

      {/* STRIPE */}
      <div
        className={`checkout-method-box checkout-stripe-box ${formData.paymentMethod === 'Stripe' ? 'active' : 'inactive'}`}
        onClick={() => setFormData({ ...formData, paymentMethod: 'Stripe' })}
      >
        <div className="d-flex align-items-center gap-2">
          <input
            type="radio"
            name="paymentMethod"
            value="Stripe"
            checked={formData.paymentMethod === 'Stripe'}
            onChange={handleChange}
          />
          <span className="checkout-method-label">
            💳 Pay with Stripe
          </span>
          <div className="ms-auto d-flex align-items-center gap-1">
            <span className="checkout-stripe-badge">STRIPE</span>
            <span style={{ fontSize: '10px', color: '#888' }}> Secure</span>
          </div>
        </div>

        {formData.paymentMethod === 'Stripe' && (
          <div className="checkout-method-extra" onClick={(e) => e.stopPropagation()}>
            <p style={{ fontSize: '12px', color: '#555', marginBottom: '10px' }}>
              Enter your card details below. Your payment is processed securely by Stripe.
            </p>

            <div className="checkout-stripe-container">
              <CardElement options={CARD_ELEMENT_OPTIONS} />
            </div>

            <div className="checkout-test-helper">
              <strong>Test Card:</strong> 4242 4242 4242 4242 &nbsp;|&nbsp; Any future date &nbsp;|&nbsp; Any 3-digit CVV
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentMethods;
