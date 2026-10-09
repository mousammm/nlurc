// src/pages/Achievements.jsx
import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      year: '2024',
      title: 'National Robotics Championship — Winner',
      desc: 'First place at the National Robotics Championship held at IIT Guwahati, competing against 40+ teams from across India.',
    },
    {
      year: '2024',
      title: 'Best Innovation Award',
      desc: 'Recognized for our autonomous disaster-response robot at TechFest, IIT Bombay.',
    },
    {
      year: '2023',
      title: 'Inter-University Robo War — Runner-up',
      desc: 'Second place in the regional Robo War competition held at NIT Silchar.',
    },
    {
      year: '2023',
      title: 'Research Paper Published',
      desc: 'Our paper on "AI-based Path Planning for Autonomous Robots" was published at an IEEE conference.',
    },
    {
      year: '2022',
      title: 'Best Student Club Award',
      desc: 'Awarded by North Lakhimpur University for outstanding contribution to student innovation.',
    },
    {
      year: '2022',
      title: 'AICTE-Funded Project',
      desc: 'Received a research grant for our smart agriculture robot project under the AICTE scheme.',
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* ================= HERO ================= */}
      <section className="relative py-20 border-b border-red-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-black mt-4 mb-6 leading-tight">
            <span className="text-red-400">Achievements</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            Milestones we've reached through dedication, innovation, and
            teamwork — from local workshops to national podiums.
          </p>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical line (desktop only) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-950 to-transparent -translate-x-1/2"></div>

            <div className="space-y-12 md:space-y-16">
              {achievements.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div
                    key={i}
                    className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Card */}
                    <div className="flex-1 w-full md:w-auto">
                      <div
                        className={`bg-gradient-to-b from-gray-950 to-black border border-gray-900 hover:border-red-950/80 rounded-2xl p-6 sm:p-8 transition-colors ${
                          isLeft ? 'md:text-right' : 'md:text-left'
                        }`}
                      >
                        {/* Year badge */}
                        <div
                          className={`inline-flex items-center gap-2 mb-4 ${
                            isLeft ? 'md:flex-row-reverse' : ''
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                          <span className="text-xs font-semibold tracking-[0.2em] text-red-400 uppercase">
                            {item.year}
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Center marker (desktop) */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-red-500/60 items-center justify-center z-10">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                    </div>

                    {/* Mobile marker */}
                    <div className="md:hidden absolute left-3 top-8 w-2 h-2 rounded-full bg-red-500"></div>

                    {/* Spacer for opposite side */}
                    <div className="hidden md:block flex-1"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS SUMMARY ================= */}
      <section className="py-16 border-y border-red-950/40 bg-gradient-to-b from-black via-red-950/5 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '06', label: 'Major Awards' },
              { number: '10+', label: 'Competitions' },
              { number: '01', label: 'Research Paper' },
              { number: '03', label: 'Years Running' },
            ].map((stat, i) => (
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

    </div>
  );
};

export default Achievements;
