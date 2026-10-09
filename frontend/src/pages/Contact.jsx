// src/pages/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', department: '', message: '' });
    }, 4000);
  };

  const contactInfo = [
    {
      label: 'Email',
      value: 'roboclub@nlu.ac.in',
      href: 'mailto:roboclub@nlu.ac.in',
    },
    {
      label: 'Phone',
      value: '+91 98765 43210',
      href: 'tel:+919876543210',
    },
    {
      label: 'Location',
      value: 'North Lakhimpur University, Assam – 787001',
      href: null,
    },
    {
      label: 'Meeting Hours',
      value: 'Monday – Saturday, 4:00 PM – 7:00 PM',
      href: null,
    },
  ];

  const inputClass =
    'w-full bg-gray-950 border border-gray-900 focus:border-red-950 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-red-950/60 transition-colors';

  return (
    <div className="bg-black text-white">
      {/* ================= HERO ================= */}
      <section className="relative py-20 border-b border-red-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-black mt-4 mb-6 leading-tight">
            <span className="text-red-400">Contact</span> Us
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            Have a question, an idea, or want to join the club? Reach out to us
            — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* ================= CONTACT CONTENT ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Left: Info */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-6">
                {contactInfo.map((item, i) => (
                  <div
                    key={i}
                    className="border-l-2 border-red-950/80 pl-4"
                  >
                    <div className="text-xs font-semibold tracking-[0.2em] text-red-400 uppercase mb-1">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-300 hover:text-red-400 transition-colors text-sm sm:text-base leading-relaxed"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        {item.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="md:col-span-3">
              <div className="bg-gradient-to-b from-gray-950 to-black border border-gray-900 rounded-2xl p-6 sm:p-8">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="text-xs font-semibold tracking-[0.3em] text-red-400 uppercase mb-4">
                      Message Sent
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Thank you!
                    </h3>
                    <p className="text-gray-400 text-sm">
                      We've received your message and will get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs font-semibold tracking-[0.15em] text-gray-500 uppercase mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
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
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="you@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold tracking-[0.15em] text-gray-500 uppercase mb-2">
                        Department
                      </label>
                      <input
                        type="text"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="e.g. CSE, ECE, EE"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold tracking-[0.15em] text-gray-500 uppercase mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className={`${inputClass} resize-none`}
                        placeholder="Tell us what's on your mind..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
