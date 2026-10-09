// src/pages/About.jsx
import React from 'react';

const About = () => {
  const stats = [
    { number: '2025', label: 'Founded' },
    { number: '30+', label: 'Founding Members' },
    { number: '05', label: 'Departments' },
    { number: '01', label: 'Shared Vision' },
  ];

  const values = [
    {
      title: 'Curiosity',
      desc: 'We ask questions, break things, and rebuild them better. Every mistake teaches us something new.',
    },
    {
      title: 'Collaboration',
      desc: 'Engineering is a team sport. We share knowledge freely across departments and years.',
    },
    {
      title: 'Craft',
      desc: 'Whether it\'s code, circuits, or CAD — we care about doing things properly, not just quickly.',
    },
  ];

  const timeline = [
    {
      date: 'Early 2025',
      title: 'The First Conversation',
      desc: 'A handful of students from CSE, ECE, and EE met in the campus library with a simple question: "Why doesn\'t our university have a robotics club?"',
    },
    {
      date: 'Mid 2025',
      title: 'Official Recognition',
      desc: 'After months of groundwork, NLURC was formally recognized by North Lakhimpur University as an official student technical body.',
    },
    {
      date: 'Late 2025',
      title: 'The Lab Opens',
      desc: 'Our dedicated robotics lab was set up with Arduino kits, sensors, 3D printers, and a growing collection of shared tools.',
    },
    {
      date: 'Now',
      title: 'Building Something Bigger',
      desc: 'We\'re preparing for our first inter-university competition, hosting workshops, and welcoming new members every semester.',
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* ================= HERO ================= */}
      <section className="relative py-24 border-b border-red-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-black mt-4 mb-6 leading-tight max-w-4xl">
            A club born from <span className="text-red-400">curiosity</span>, built for the future.
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            NLURC is the official robotics club of North Lakhimpur University —
            founded in 2025 by students who wanted to build, not just study.
          </p>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Our Story
          </h2>
          <div className="space-y-5 text-gray-400 leading-relaxed text-lg">
            <p>
              NLURC started in <span className="text-white font-medium">2025</span> with a small group of
              engineering students who felt something was missing on campus
              — a place to actually build things.
            </p>
            <p>
              Textbooks and lectures taught us theory. But nobody was
              assembling Arduino boards at midnight, debugging motor drivers,
              or printing the first prototype of a design. So we decided to
              change that.
            </p>
            <p>
              Within months, we grew from a WhatsApp group into an officially
              recognized club with a dedicated lab, active workshops, and
              members from five different departments. This is just the
              beginning.
            </p>
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

      {/* ================= TIMELINE ================= */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              From idea to reality
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-red-950 to-transparent"></div>

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <div key={i} className="relative flex gap-6 md:gap-8">
                  {/* Dot */}
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black border-2 border-red-500/60 flex items-center justify-center mt-1 relative z-10">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <div className="text-xs font-semibold tracking-[0.2em] text-red-400 uppercase mb-2">
                      {item.date}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base max-w-2xl">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-20 border-t border-red-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
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
                Turn theory into practice
              </h3>
              <p className="text-gray-400 leading-relaxed">
                To give every student at North Lakhimpur University the chance to
                design, build, and ship real robotics projects — regardless of
                their department, year, or prior experience.
              </p>
            </div>

            <div className="bg-gradient-to-b from-gray-950 to-black border border-gray-900 hover:border-red-950/80 rounded-2xl p-8 transition-colors">
              <span className="text-xs font-semibold text-red-400 tracking-widest uppercase">
                Vision
              </span>
              <h3 className="text-2xl font-bold text-white mt-3 mb-4">
                A hub for builders
              </h3>
              <p className="text-gray-400 leading-relaxed">
                To grow into the most active student-led robotics community in
                Northeast India — known for the quality of its work, the warmth
                of its culture, and the engineers it produces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 border-t border-red-950/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Be part of the <span className="text-red-400">first chapter</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            We're a young club with big ambitions. The best time to join is now
            — while we're still writing our story.
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
