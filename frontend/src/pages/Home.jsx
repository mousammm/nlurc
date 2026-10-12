import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import JoinClubModal from '../components/JoinClubModal';

const Home = () => {
  // Background carousel images
  const images = [
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&q=80',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80',
    'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1920&q=80',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80',
    'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=1920&q=80',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Join modal state
  const [joinOpen, setJoinOpen] = useState(false);

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Upcoming events
  const events = [
    {
      date: '15 Nov',
      year: '2025',
      title: 'Intro to Arduino Workshop',
      location: 'Robotics Lab, Block C',
      time: '4:00 PM – 7:00 PM',
      tag: 'Workshop',
    },
    {
      date: '22 Nov',
      year: '2025',
      title: 'Line Follower Bot Competition',
      location: 'University Auditorium',
      time: '10:00 AM – 4:00 PM',
      tag: 'Competition',
    },
    {
      date: '05 Dec',
      year: '2025',
      title: 'AI & Robotics Seminar',
      location: 'Seminar Hall 2',
      time: '3:00 PM – 5:00 PM',
      tag: 'Seminar',
    },
  ];

  // FAQ data
  const faqs = [
    {
      q: 'Who can join NLURC?',
      a: 'Any student enrolled at North Lakhimpur University — from any department and any year — can join. No prior robotics experience is required.',
    },
    {
      q: 'Is there a membership fee?',
      a: 'There is a small annual membership fee that covers workshop materials, components, and event participation. Details are shared during the induction session.',
    },
    {
      q: 'Do I need my own equipment?',
      a: 'No. The club provides access to Arduino kits, sensors, 3D printers, and other tools in our lab. You can also bring your own if you prefer.',
    },
    {
      q: 'How often does the club meet?',
      a: 'We meet Monday to Saturday from 4:00 PM to 7:00 PM in the Robotics Lab. Workshops and competitions are scheduled separately.',
    },
    {
      q: 'Can first-year students participate in competitions?',
      a: 'Absolutely. We encourage first-years to join and even form dedicated beginner teams for inter-university competitions.',
    },
  ];

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-black text-white">
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              i === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={img}
              alt={`Slide ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-red-950/70"></div>
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-black tracking-tight leading-none mb-6">
            <span className="block text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] bg-gradient-to-b from-white via-red-100 to-red-500 bg-clip-text text-transparent drop-shadow-2xl">
              NLURC
            </span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl font-light text-gray-300 mb-3 tracking-wide">
            Robo Club
          </p>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Where innovation meets automation. Building the future of robotics,
            one project at a time.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/achievements"
              className="px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-red-600/40 hover:shadow-red-600/60 hover:scale-105"
            >
              View Achievements
            </Link>

            <button
              onClick={() => setJoinOpen(true)}
              className="px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-red-500/50 text-white font-semibold rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Join the Club
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-14">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === currentImage
                    ? 'w-10 bg-red-500'
                    : 'w-4 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
      </section>

      {/* ================= UPCOMING EVENTS ================= */}
      <section className="py-20 border-t border-red-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black mt-3">
              Upcoming <span className="text-red-400">Events</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {events.map((event, i) => (
              <div
                key={i}
                className="group bg-gradient-to-b from-gray-950 to-black border border-gray-900 hover:border-red-950/80 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-white leading-none">
                      {event.date.split(' ')[0]}
                    </span>
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                      {event.date.split(' ')[1]}
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-red-400 uppercase border border-red-950/60 rounded-full px-2.5 py-1">
                    {event.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 leading-snug group-hover:text-red-50 transition-colors">
                  {event.title}
                </h3>

                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-red-400"></span>
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-red-400"></span>
                    {event.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 border-t border-red-950/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-black mt-3">
              Frequently <span className="text-red-400">Asked</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className={`bg-gradient-to-b from-gray-950 to-black border rounded-2xl transition-colors ${
                    isOpen ? 'border-red-950/80' : 'border-gray-900'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  >
                    <span className="text-base sm:text-lg font-semibold text-white pr-4">
                      {faq.q}
                    </span>
                    <span
                      className={`flex-shrink-0 w-6 h-6 flex items-center justify-center text-red-400 transition-transform duration-300 ${
                        isOpen ? 'rotate-45' : 'rotate-0'
                      }`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-gray-400 leading-relaxed text-sm sm:text-base">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= NEED HELP / CONTACT CTA ================= */}
      <section className="py-20 border-t border-red-950/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-gray-950 via-black to-red-950/20 border border-red-950/60 rounded-2xl p-10 sm:p-16 text-center overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-red-600/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-red-900/10 rounded-full blur-3xl"></div>

            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-black mt-4 mb-5 leading-tight">
                Have a question or want to{' '}
                <span className="text-red-400">join</span>?
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                Whether you're curious about the club, need help with a project,
                or want to collaborate — we're just one message away.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  to="/team"
                  className="px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-red-500/50 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Meet the Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Club Modal — renders at root level so it overlays everything */}
      <JoinClubModal open={joinOpen} onClose={() => setJoinOpen(false)} />
    </div>
  );
};

export default Home;
