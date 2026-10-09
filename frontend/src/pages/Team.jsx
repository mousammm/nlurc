// src/pages/Team.jsx
import React from 'react';

const Team = () => {
  const team = [
    { name: 'Dr. Anil Sharma', role: 'Faculty Advisor', dept: 'Dept. of CSE' },
    { name: 'Rahul Das', role: 'President', dept: 'Final Year, CSE' },
    { name: 'Priya Bora', role: 'Vice President', dept: 'Final Year, ECE' },
    { name: 'Amit Gogoi', role: 'Technical Head', dept: 'Third Year, CSE' },
    { name: 'Sneha Saikia', role: 'Event Coordinator', dept: 'Third Year, EE' },
    { name: 'Karan Nath', role: 'Treasurer', dept: 'Third Year, ME' },
    { name: 'Riya Deka', role: 'Marketing Lead', dept: 'Second Year, CSE' },
    { name: 'Bikash Kalita', role: 'Hardware Lead', dept: 'Second Year, ECE' },
  ];

  // Helper to get initials from a name
  const getInitials = (name) => {
    return name
      .split(' ')
      .filter((_, i, arr) => i === 0 || i === arr.length - 1) // first and last name only
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="bg-black text-white">
      {/* ================= HERO ================= */}
      <section className="relative py-20 border-b border-red-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-black mt-4 mb-6 leading-tight">
            Our <span className="text-red-400">Team</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            The passionate students and mentors who make NLURC what it is —
            building, teaching, and leading from the front.
          </p>
        </div>
      </section>

      {/* ================= CORE TEAM ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div
                key={i}
                className="group bg-gradient-to-b from-gray-950 to-black border border-gray-900 hover:border-red-950/80 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Initials Tile */}
                <div className="relative mb-6">
                  <div className="aspect-square w-full rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-900 group-hover:border-red-950/80 flex items-center justify-center transition-colors overflow-hidden">
                    {/* Subtle glow on hover */}
                    <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/5 transition-colors"></div>

                    <span className="relative text-4xl font-black text-gray-500 group-hover:text-red-400 transition-colors tracking-tight">
                      {getInitials(member.name)}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div>
                  <h3 className="text-lg font-bold text-white leading-tight mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-red-400 mb-1">
                    {member.role}
                  </p>
                  <p className="text-xs text-gray-500 tracking-wide">
                    {member.dept}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Team;
