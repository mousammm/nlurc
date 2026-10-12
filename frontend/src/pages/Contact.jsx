import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitted: false,
    loading: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Formspree submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitted: false, loading: true, error: null });

    try {
      const response = await fetch('https://formspree.io/f/xnpnkqnq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ submitted: true, loading: false, error: null });
        setFormData({ name: '', email: '', department: '', message: '' });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus({ submitted: false, loading: false, error: null });
        }, 5000);
      } else {
        const data = await response.json();
        throw new Error(
          data.error || 'Something went wrong. Please try again.'
        );
      }
    } catch (err) {
      setStatus({ submitted: false, loading: false, error: err.message });
    }
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
    <div className="bg-black text-white min-h-screen">
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
                  <div key={i} className="border-l-2 border-red-950/80 pl-4">
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
                {status.submitted ? (
                  <div className="text-center py-16">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Thank you!
                    </h3>
                    <p className="text-gray-400 text-sm">
                      We've received your message and will get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {status.error && (
                      <div className="text-xs text-red-400 bg-red-950/20 border border-red-950/60 rounded-lg px-3 py-2">
                        {status.error}
                      </div>
                    )}

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
                      disabled={status.loading}
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status.loading ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="py-20 border-t border-red-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Where We <span className="text-red-400">Are</span>
            </h2>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-gray-900">
            <iframe
              title="North Lakhimpur University Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3547.6181953000446!2d94.09367759999999!3d27.231134599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3741378d251c7e7b%3A0x2de99dd392996116!2sPhytronix!5e0!3m2!1sen!2sin!4v1790939996648!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[60%] opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
