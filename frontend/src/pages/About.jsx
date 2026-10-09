// src/pages/About.jsx
import React from 'react';

const About = () => {
  const stats = [
    { number: '50+', label: 'Active Members' },
    { number: '15+', label: 'Projects Built' },
    { number: '10+', label: 'Competitions' },
    { number: '3+', label: 'Years Active' },
  ];

  const values = [
    {
      title: 'Innovation',
      desc: 'We push boundaries and explore new ideas in robotics and automation.',
    },
    {
      title: 'Collaboration',
      desc: 'Great things are built together — we learn and grow as a team.',
    },
    {
      title: 'Excellence',
      desc: 'From code to hardware, we hold ourselves to the highest standards.',
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* ================= HERO ================= */}
      <section className="relative py-20 border-b border-red-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-[0.3em] text-red-400 uppercase">
            About Us
          </span>
          <h1 className="text-5xl md:text-6xl font-black mt-4 mb-6 leading-tight">
            Who We <span className="text-red-400">Are</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            The official robotics club of North Lakhimpur University — a community
            of students passionate about building, learning, and pushing the
            limits of what's possible.
          </p>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Founded by a small group of engineering students who shared a
                  common passion for robotics, NLURC has grown into one of the
                  most active technical communities at North Lakhimpur University.
                </p>
                <p>
                  What started as weekend build sessions has evolved into a full
                  ecosystem of workshops, competitions, research projects, and
                  industry collaborations.
                </p>
                <p>
                  Today, our members work on everything from autonomous robots
                  and embedded systems to AI-driven solutions that solve
                  real-world problems.
                </p>
              </div>
            </div>

            {/* Decorative panel — no image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl border border-red-950/60 bg-gradient-to-br from-gray-950 to-black flex items-center justify-center overflow-hidden">
                {/* Subtle red glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-900/10 rounded-full blur-3xl"></div>

                {/* Big typographic mark */}
                <div className="relative text-center">
                  <div className="text-8xl md:text-9xl font-black bg-gradient-to-b from-white via-red-100 to-red-400 bg-clip-text text-transparent">
                    NLU
                  </div>
                  <div className="text-sm tracking-[0.4em] text-red-400 uppercase mt-2">
                    Robo Club
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-16 border-y border-red-950/40 bg-gradient-to-b from-black via-red-950/5 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm tracking-widest text-gray-500 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.3em] text-red-400 uppercase">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <div
                key={i}
                className="bg-gradient-to-b from-gray-950 to-black border border-gray-900 hover:border-red-950/80 rounded-2xl p-8 transition-colors"
              >
                <div className="text-xs font-semibold text-red-400 tracking-widest mb-4">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MISSION / VISION ================= */}
      <section className="py-20 border-t border-red-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-b from-gray-950 to-black border border-gray-900 hover:border-red-950/80 rounded-2xl p-8 transition-colors">
              <span className="text-xs font-semibold text-red-400 tracking-widest uppercase">
                Mission
              </span>
              <h3 className="text-2xl font-bold text-white mt-3 mb-4">
                Fostering Innovation
              </h3>
              <p className="text-gray-400 leading-relaxed">
                To nurture technical excellence and creativity among students by
                providing hands-on experience with robotics, embedded systems,
                and emerging technologies.
              </p>
            </div>

            <div className="bg-gradient-to-b from-gray-950 to-black border border-gray-900 hover:border-red-950/80 rounded-2xl p-8 transition-colors">
              <span className="text-xs font-semibold text-red-400 tracking-widest uppercase">
                Vision
              </span>
              <h3 className="text-2xl font-bold text-white mt-3 mb-4">
                Leading the Region
              </h3>
              <p className="text-gray-400 leading-relaxed">
                To become the leading robotics community in Northeast India,
                producing skilled engineers ready to solve real-world challenges
                through technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 border-t border-red-950/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to be part of <span className="text-red-400">our story</span>?
          </h2>
          <p className="text-gray-400 mb-8">
            Join NLURC and start building the future with us.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
