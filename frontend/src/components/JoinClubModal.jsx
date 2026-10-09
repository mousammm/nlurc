// src/components/JoinClubModal.jsx
import React, { useState } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const JoinClubModal = ({ open, onClose }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const inputClass =
    'w-full bg-gray-950 border border-gray-900 focus:border-red-950 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-red-950/60 transition-colors';

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // 1. Create order on backend
      const { data } = await axios.post(`${API_URL}/api/create-order`, form);

      // 2. Open Razorpay Checkout
      const options = {
        key: data.keyId,
        amount: data.amount,
        currency: data.currency,
        name: 'NLURC',
        description: 'Membership Fee',
        order_id: data.orderId,
        prefill: {
          name: form.name,
          email: form.email,
          contact: form.phone,
        },
        theme: { color: '#dc2626' }, // red-600 to match your site
        handler: async (response) => {
          // 3. Verify on backend
          try {
            const verify = await axios.post(
              `${API_URL}/api/verify-payment`,
              response
            );
            if (verify.data.success) {
              alert('Welcome to NLURC! 🎉 Payment ID: ' + response.razorpay_payment_id);
              onClose();
              setForm({ name: '', email: '', phone: '', department: '' });
            }
          } catch (err) {
            setError('Payment verification failed. Contact us.');
          }
        },
        modal: {
          ondismiss: () => setLoading(false),
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-b from-gray-950 to-black border border-red-950/60 rounded-2xl max-w-md w-full p-6 sm:p-8 space-y-5 my-8"
      >
        <div>
          <h3 className="text-2xl font-bold text-white mt-2">
            Become a member
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            Membership fee: ₹200 (one-time)
          </p>
        </div>

        {error && (
          <div className="text-xs text-red-400 bg-red-950/20 border border-red-950/60 rounded-lg px-3 py-2">
            {error}
          </div>
        )}

        <div>
          <label className="block text-xs font-semibold tracking-[0.15em] text-gray-500 uppercase mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="Your full name"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold tracking-[0.15em] text-gray-500 uppercase mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold tracking-[0.15em] text-gray-500 uppercase mb-2">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            className={inputClass}
            placeholder="10-digit mobile number"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold tracking-[0.15em] text-gray-500 uppercase mb-2">
            Department
          </label>
          <input
            type="text"
            name="department"
            value={form.department}
            onChange={handleChange}
            className={inputClass}
            placeholder="e.g. CSE, ECE"
          />
        </div>

        <div className="flex gap-3 justify-end pt-2">
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white border border-gray-800 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors disabled:opacity-50"
          >
            {loading ? 'Processing...' : 'Pay ₹200 & Join'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default JoinClubModal;
