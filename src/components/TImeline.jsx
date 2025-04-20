import React from "react";

const CyberpunkTimeline = () => {
  const steps = [
    { number: 1, title: "Brainstorming and Idea Generation" },
    { number: 2, title: "Idea Selection" },
    { number: 3, title: "Business Analysis" },
    { number: 4, title: "Start of Development" },
    { number: 5, title: "End of Development" },
    { number: 6, title: "Testing" },
    { number: 7, title: "Launch" },
  ];

  return (
    <div className="font-['Dexters_Lab'] max-w-[100%] mx-auto  p-8 bg-[#0a0a1a] text-[#e0e0e0] relative overflow-hidden">
      {/* Grid overlay (kept but subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,247,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,247,255,0.05)_1px,transparent_1px)] bg-[length:20px_20px] pointer-events-none z-10"></div>

      {/* Header */}
      <div className="text-center mb-8 pb-4 border-b-2 border-[#ff00aa] relative z-20">
        <h1 className="text-[2.6rem] text-[var(--color-red-500)] uppercase tracking-[3px] mb-2">
          DEXTRIX TIMELINE
        </h1>
        <div className="text-[1.25rem] text-[var(--color-pink-800)] font-bold">
          PROJECT TIMELINE 5.0
        </div>
      </div>

      {/* Timeline steps */}
      <div className="relative pl-[60px] z-20">
        {steps.map((step, index) => (
          <div key={index} className="flex mb-8 relative">
            {/* Step number */}
            <div className="w-[50px] h-[50px] bg-[#0a0a1a]  text-[var(--color-red-500)] rounded-full flex items-center justify-center text-[1.7rem] font-bold mr-5 flex-shrink-0 border-[3px] border-[var(--color-red-500)] z-30">
              {step.number}
            </div>

            {/* Step content */}
            <div className="flex-grow">
              <div className="bg-[rgba(0,10,20,0.7)] p-4 pl-[50px] rounded-[4px] text-[1.3rem] font-bold border-l-[5px] border-l-[var(--color-pink-800)] backdrop-blur-sm">
                {step.title}
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="h-[30px] w-[3px] bg-gradient-to-b from-[#00f7ff] to-[#ff00aa] ml-[25px] mt-1 relative">
                  <div className="absolute w-[10px] h-[10px] bg-[#ff00aa] rounded-full left-[-3.5px] top-[-5px]"></div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Subtle grid pattern overlay (kept but no glow) */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_45%,#ff00aa20_45%,#ff00aa20_55%,transparent_55%),linear-gradient(-45deg,transparent_45%,#00f7ff20_45%,#00f7ff20_55%,transparent_55%)] bg-[length:10px_10px] opacity-10 pointer-events-none z-10"></div>
    </div>
  );
};

export default CyberpunkTimeline;