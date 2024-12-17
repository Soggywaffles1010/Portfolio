'use client';
import React, { useState } from 'react';
import axios from 'axios';

const Checkout = () => {
  const [amount, setAmount] = useState(100); // Default amount in PHP
  const [name, setName] = useState(''); // Optional: Collect user details
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [redirectUrl, setRedirectUrl] = useState('');

  const handleCheckout = async () => {
    try {
      console.log('[handleCheckout] Checkout started. Amount:', amount);
  
      // Create PaymentIntent
      const paymentIntentRes = await axios.post('/api/create-payment-intent', { amount: 10000 });
      console.log('[handleCheckout] PaymentIntent created:', paymentIntentRes.data);
  
      // Create PaymentMethod
      const paymentMethodRes = await axios.post('/api/payment-method', { type: 'gcash' });
      console.log('[handleCheckout] PaymentMethod created:', paymentMethodRes.data);
  
      // Attach PaymentMethod to PaymentIntent
      const attachPaymentRes = await axios.post('/api/attach-payment', {
        intentId: paymentIntentRes.data.data.id,
        paymentMethodId: paymentMethodRes.data.data.id,
        clientKey: paymentIntentRes.data.data.attributes.client_key,
      });
      console.log('[handleCheckout] PaymentMethod attached:', attachPaymentRes.data);
  
      // Redirect to success page or handle further actions
      window.location.href = attachPaymentRes.data.data.attributes.next_action?.redirect_url || '/success';
    } catch (error) {
      console.error('[handleCheckout] Error:', error);
      alert('An error occurred during checkout.');
    }
  };
  
  

  return (
    <div className="flex text-black flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>
        <label htmlFor="name" className="block mb-2 font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <label htmlFor="amount" className="block mb-2 font-medium">
          Amount (PHP)
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full p-2 border rounded mb-4"
          min={1}
        />
        <button
          onClick={handleCheckout}
          disabled={loading}
          className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600"
        >
          {loading ? 'Processing...' : 'Pay with GCash'}
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {redirectUrl && (
          <p className="mt-4">
            Redirecting to payment... If not, <a href={redirectUrl} className="text-blue-500">click here</a>.
          </p>
        )}
      </div>
    </div>
  );
};

export default Checkout;
