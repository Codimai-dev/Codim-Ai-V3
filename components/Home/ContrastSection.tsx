
import React from 'react';

export const ContrastSection: React.FC = () => {
  return (
    <div className="space-y-12 sm:space-y-24 px-4" id="comparison">
      <div className="reveal">
        <span className="text-[10px] sm:text-[11px] font-black text-black/30 uppercase tracking-[0.25em] mb-4 block">The Efficiency Gap</span>
        <h2 className="text-[32px] sm:text-[44px] md:text-[64px] font-lander font-black text-black tracking-tighter leading-[1.1] sm:leading-[0.95]">Tool stack chaos vs. <span className="text-purple-600">Single system</span></h2>
      </div>

      <div className="reveal reveal-delay-1 grid md:grid-cols-2 gap-px bg-black/10 rounded-[30px] sm:rounded-[40px] overflow-hidden border border-black/10 shadow-2xl">
        {/* Chaos Side */}
        <div className="bg-[#ffffff] p-8 sm:p-12 md:p-16 space-y-8 sm:space-y-12">
          <h4 className="text-[11px] sm:text-[12px] font-brand font-black uppercase tracking-[0.3em] text-red-500 border-b border-black/5 pb-4">Tool stack chaos</h4>
          <ul className="space-y-7">
            {[
              "Copy-pasting data between 5+ disconnected browser tabs",
              "Chasing invoices that are weeks or months overdue",
              "Support teams asking 'who is this?' on every single call",
              "Zero visibility into real-time sales progress or pipeline health",
              "Expensive, high-level talent doing low-level administrative work",
              "Reports that are dead and outdated by the time they're finished",
              "Customers experience delays at every single project handoff",
              "Constant anxiety over missing critical follow-ups or files"
            ].map((p, i) => (
              <li key={i} className="flex items-start gap-5 text-[18px] text-slate-800 font-sodo font-light group">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-200 mt-2 transition-colors group-hover:bg-red-500"></span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* System Side */}
        <div className="bg-[#030303] p-8 sm:p-12 md:p-16 space-y-8 sm:space-y-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 blur-[120px] pointer-events-none"></div>
          <h4 className="text-[11px] sm:text-[12px] font-brand font-black uppercase tracking-[0.3em] text-purple-500 border-b border-white/5 pb-4">Single system</h4>
          <ul className="space-y-7">
            {[
              "Data flows instantly across the stack without a single manual click",
              "Revenue hits the bank automatically while your team is sleeping",
              "Operations moving at the literal speed of light across 13 stages",
              "Live dashboards showing the exact business truth in real time",
              "Your core team focusing 100% on high-value strategic growth",
              "Immediate, accurate customer responses every single time",
              "Seamless automated onboarding and fulfillment tracking",
              "Predictable lead-to-cash cycles with zero data leakage"
            ].map((p, i) => (
              <li key={i} className="flex items-start gap-5 text-[17px] text-zinc-300 font-sodo font-medium group hover:text-white transition-colors">
                <span className="text-purple-500 mt-0.5 transition-transform group-hover:translate-x-1">→</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
