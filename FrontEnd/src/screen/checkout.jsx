import React, { useContext, useEffect, useState } from 'react';
import Header from '../component/header/Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import CustomerInfoForm from '../component/checkout/CustomerInfoForm';
import OrderSummary from '../component/checkout/OrderSummary';
import PaymentMethods from '../component/checkout/PaymentMethods';

// Stripe imports
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Load Stripe outside component to avoid re-creating on every render
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const CheckoutInner = () => {
  const navigate = useNavigate();
  const { clearCart } = useContext(CartContext);
  const stripe = useStripe();
  const elements = useElements();

  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    streetAddress: '',
    country: 'India',
    state: '',
    zip: '',
    email: '',
    phone: '',
    orderInfo: '',
    paymentMethod: 'Cash on Delivery',
    upiApp: '',
    walletApp: '',
    netBank: '',
  });

  useEffect(() => {
    const initCheckout = async () => {
      const token = localStorage.getItem('token');
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        setFormData((prev) => ({
          ...prev,
          email: user.email || '',
          phone: user.phone || '',
          firstName: user.name?.split(' ')[0] || '',
          lastName: user.name?.split(' ').slice(1).join(' ') || '',
        }));
      }

      if (!token) return;
      try {
        const res = await axios.get('http://localhost:5000/api/cart', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCartData(res.data.cartItems || []);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load cart');
      }
    };

    initCheckout();
  }, []);

  const subtotal = cartData.reduce(
    (acc, item) => acc + Number(item.price) * Number(item.quantity),
    0
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name || e.target.id]: e.target.value });
  };

  const handlePlaceOrder = async () => {
    const token = localStorage.getItem('token');

    if (!token) { setError('Please login first to place an order.'); return; }
    if (!formData.streetAddress || !formData.state || !formData.zip) { setError('Please fill in all required address fields.'); return; }
    if (!formData.paymentMethod) { setError('Please select a payment method.'); return; }
    if (cartData.length === 0) { setError('Your cart is empty.'); return; }

    // Stripe Flow
    if (formData.paymentMethod === 'Stripe') {
      if (!stripe || !elements) { setError('Stripe is not loaded yet. Please wait.'); return; }

      setLoading(true);
      setError('');

      try {
        const intentRes = await axios.post(
          'http://localhost:5000/api/stripe/create-payment-intent',
          { amount: subtotal, currency: 'inr' },
          { headers: { Authorization: `Bearer ${token}` } }
        );

        const { clientSecret } = intentRes.data;

        const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(
          clientSecret,
          {
            payment_method: {
              card: elements.getElement(CardElement),
              billing_details: {
                name: `${formData.firstName} ${formData.lastName}`.trim(),
                email: formData.email,
                phone: formData.phone,
              },
            },
          }
        );

        if (stripeError) {
          setError(stripeError.message);
          setLoading(false);
          return;
        }

        if (paymentIntent.status !== 'succeeded') {
          setError('Payment was not successful. Please try again.');
          setLoading(false);
          return;
        }

        await placeOrder(token, 'Stripe');
      } catch (err) {
        setError(err.response?.data?.message || 'Payment failed. Please try again.');
        setLoading(false);
      }
      return;
    }

    // Normal Flow
    setLoading(true);
    setError('');
    await placeOrder(token, formData.paymentMethod);
  };

  const placeOrder = async (token, method) => {
    try {
      const config = { headers: { Authorization: `Bearer ${token}` } };

      const addressRes = await axios.post(
        'http://localhost:5000/api/addresses',
        {
          address_line: formData.streetAddress,
          city: formData.companyName || 'N/A',
          state: formData.state,
          zip_code: formData.zip,
          country: formData.country,
        },
        config
      );
      const addressId = addressRes.data.addressId;

      const orderRes = await axios.post(
        'http://localhost:5000/api/orders',
        {
          address_id: addressId,
          first_name: formData.firstName,
          last_name: formData.lastName,
          cart_items: cartData.map((item) => ({
            name: item.name,
            quantity: item.quantity,
            price: Number(item.price),
          })),
          total_price: subtotal,
        },
        config
      );
      const orderId = orderRes.data.orderId;

      await axios.post(
        'http://localhost:5000/api/payments',
        { order_id: orderId, payment_method: method },
        config
      );

      await clearCart();

      localStorage.setItem('lastOrder', JSON.stringify({
        orderId,
        total: subtotal,
        customer: formData,
        date: new Date().toISOString(),
      }));

      navigate('/success');
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="container mt-4 mb-5">
        <h2 className="bill-header">Bill Information</h2>
        <div className="row">
          <CustomerInfoForm formData={formData} handleChange={handleChange} />
          
          <div className="col-md-6" style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '30px' }}>
            <OrderSummary cartData={cartData} subtotal={subtotal} />
            <PaymentMethods formData={formData} handleChange={handleChange} setFormData={setFormData} />
            
            {error && <div className="alert alert-danger mt-3 py-2">{error}</div>}

            <button
              className="btn btn-success btn-block mt-3 w-100"
              onClick={handlePlaceOrder}
              disabled={loading || (formData.paymentMethod === 'Stripe' && !stripe)}
              style={
                formData.paymentMethod === 'Stripe'
                  ? { background: '#635bff', border: 'none' }
                  : {}
              }
            >
              {loading ? (
                <><span className="spinner-border spinner-border-sm me-2" role="status"></span>Processing...</>
              ) : formData.paymentMethod === 'Stripe' ? (
                '🔒 Pay & Place Order'
              ) : (
                'Place Order'
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const CheckoutForm = () => (
  <Elements stripe={stripePromise}>
    <CheckoutInner />
  </Elements>
);

export default CheckoutForm;
