import React from 'react';

const AboutUs = () => {
  return (
    <div className="font-['Dexters_Lab'] min-h-screen bg-[#0a0a1a] text-[#e0e0e0] relative overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,247,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,247,255,0.05)_1px,transparent_1px)] bg-[length:20px_20px] pointer-events-none z-10"></div>

      {/* Background Grid Emojis (outside cards) */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none z-0">
        <div className="flex justify-center items-center text-8xl opacity-10">⚡</div>
        <div className="flex justify-center items-center text-8xl opacity-10">🧪</div>
        <div className="flex justify-center items-center text-8xl opacity-10">🚀</div>
        <div className="flex justify-center items-center text-8xl opacity-10">👥</div>
        <div className="flex justify-center items-center text-8xl opacity-10">🔬</div>
        <div className="flex justify-center items-center text-8xl opacity-10">💉</div>
        <div className="flex justify-center items-center text-8xl opacity-10">🩺</div>
        <div className="flex justify-center items-center text-8xl opacity-10">💊</div>
        <div className="flex justify-center items-center text-8xl opacity-10">🥼</div>
      </div>

      <div className="container mx-auto px-4 py-16 grid grid-cols-1 gap-12 max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-8 pb-4 border-b-2 border-[#ff00aa] relative z-20">
          <h1 className="text-[2.7rem] text-[var(--color-red-500)] uppercase tracking-[3px] mb-2">
            ABOUT US
          </h1>
          <div className="text-[1.25rem] text-[var(--color-pink-800)] font-bold">
            DEXTRIX 5.0
          </div>
        </div>
        
        {/* Grid of Cards */}
        <div className="grid grid-cols-1 gap-12 relative">
          {/* Card 1 */}
          <div className="relative">
            <div className="absolute -left-10 -top-10 text-9xl opacity-10 z-0">⚡</div>
            <div className="absolute -right-10 -bottom-10 text-9xl opacity-10 z-0">🧪</div>
            <div className="bg-[rgba(0,10,20,0.7)] border-2 border-[var(--color-red-500)] rounded-lg p-8 backdrop-blur-sm z-10 relative">
              <p className="text-xl text-center text-[#e0e0e0]">
                Organized by Team TechnoJam, the University's student-run
                Technical Club, and the School of Computing Science and
                Engineering, Dexterix 5.0 promises an electrifying 36-hour
                journey into the future of technology.
              </p>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="relative">
            <div className="absolute -left-10 -top-10 text-9xl opacity-10 z-0">👥</div>
            <div className="absolute -right-10 -bottom-10 text-9xl opacity-10 z-0">💉</div>
            <div className="bg-[rgba(0,10,20,0.7)] border-2 border-[var(--color-red-500)] rounded-lg p-8 backdrop-blur-sm z-10 relative">
              <p className="text-xl text-center text-[#e0e0e0]">
                Following the success of previous editions, Dexterix 5.0 is all
                set to welcome over 600 participants from across 100+ colleges
                and universities in India.
              </p>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="relative">
            <div className="absolute -left-10 -top-10 text-9xl opacity-10 z-0">🚀</div>
            <div className="absolute -right-10 -bottom-10 text-9xl opacity-10 z-0">🔬</div>
            <div className="bg-[rgba(0,10,20,0.7)] border-2 border-[var(--color-red-500)] rounded-lg p-8 backdrop-blur-sm z-10 relative">
              <p className="text-xl text-center text-[#e0e0e0]">
                From its humble beginnings in 2018, Dexterix has fostered a
                thriving community of innovators and collaborators, igniting
                passions and nurturing entrepreneurial dreams.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_45%,#ff00aa20_45%,#ff00aa20_55%,transparent_55%),linear-gradient(-45deg,transparent_45%,#00f7ff20_45%,#00f7ff20_55%,transparent_55%)] bg-[length:10px_10px] opacity-10 pointer-events-none z-10"></div>
    </div>
  );
};

export default AboutUs;