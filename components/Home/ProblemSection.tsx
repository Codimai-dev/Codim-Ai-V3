
import React from 'react';
import { ShieldAlert, ZapOff } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <div className="space-y-12 sm:space-y-20 px-4" id="challenge">
      <div className="flex flex-col items-start max-w-4xl">
        <span className="text-[10px] sm:text-[11px] font-black text-purple-600 uppercase tracking-[0.25em] mb-4 py-1.5 px-4 bg-purple-50 rounded-full border border-purple-100">
          Challenge Assessment
        </span>
        <h2 className="text-[36px] sm:text-[48px] md:text-[72px] font-lander font-black text-black tracking-tighter leading-[1] mb-6">
          The Problem
        </h2>
        <div className="h-1.5 w-24 bg-purple-600 rounded-full mb-8"></div>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        {/* Left Side: Context */}
        <div className="lg:col-span-5 space-y-8">
          <div className="p-8 sm:p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-3xl -z-10 group-hover:bg-purple-500/10 transition-colors"></div>
            <h3 className="text-[26px] sm:text-[30px] md:text-[36px] font-lander font-bold text-black mb-6 tracking-tighter leading-tight">
              What does the mess actually feel like?
            </h3>
            <p className="text-xl text-slate-500 leading-relaxed font-sodo">
              Growth doesn’t feel like momentum anymore — it feels like chaos. Teams jump between tools all day,
              copy-pasting data, chasing updates, and fixing mistakes that shouldn’t exist. Every new deal adds
              more follow-ups, more spreadsheets, and more fires to put out.
            </p>
          </div>
        </div>

        {/* Right Side: Friction & Leakage */}
        <div className="lg:col-span-7 grid md:grid-cols-2 gap-8 sm:gap-12">
          {/* Technical Friction */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                <ShieldAlert className="w-5 h-5 text-purple-600" />
              </div>
              <h4 className="text-[13px] font-brand font-black text-black uppercase tracking-widest">
                Technical Friction
              </h4>
            </div>
            <ul className="space-y-6">
              {[
                "Teams waste hours switching between tools just to finish one task",
                "Data lives in silos, forcing manual copy-paste and double work",
                "Simple changes require custom scripts, workarounds, or IT help",
                "Customer context disappears the moment tools don’t sync",
                "One missed update quietly breaks five downstream processes"
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-4 text-[16px] text-slate-500 font-sodo group">
                  <span className="text-purple-600 font-bold mt-0.5">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Operational Leakage */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                <ZapOff className="w-5 h-5 text-orange-600" />
              </div>
              <h4 className="text-[13px] font-brand font-black text-black uppercase tracking-widest">
                Operational Leakage
              </h4>
            </div>
            <ul className="space-y-6">
              {[
                "Leads fall through cracks while teams respond too late",
                "Manual follow-ups get missed, duplicated, or forgotten",
                "Sales spends more time updating tools than closing deals",
                "Invoices slip, approvals stall, and cash flow takes the hit",
                "Support teams walk in blind, asking customers to repeat themselves",
                "Leadership decisions lag behind reality due to delayed reports"
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-4 text-[16px] text-slate-500 font-sodo group">
                  <span className="text-orange-600 font-bold mt-0.5">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
};
