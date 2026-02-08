
import React from 'react';

const stages = [
  { title: "Visibility", happens: "The system tracks every visitor interaction and traffic source automatically.", exists: "It establishes the baseline data needed for all downstream decisions.", outcome: "A clear map of which channels are driving actual interest." },
  { title: "Lead Generation", happens: "Forms, chatbots, and ad pixels capture contact information instantly.", exists: "It ensures no potential customer goes unrecorded due to manual delay.", outcome: "A constant, automated influx of potential business." },
  { title: "Lead Enrichment", happens: "The system automatically appends company size, industry, and role data to leads.", exists: "It provides sales teams with context without requiring manual research.", outcome: "Context-rich lead profiles ready for targeted outreach." },
  { title: "B2B Email Automation", happens: "Personalized, multi-step email sequences are triggered based on lead behavior.", exists: "It maintains professional relationships at a scale impossible for humans.", outcome: "High-volume outreach with individual-level personalization." },
  { title: "WhatsApp Automation (B2C)", happens: "Direct messaging sequences handle inquiries and engagement on mobile.", exists: "It meets consumers where they are most active with instant responses.", outcome: "Significantly higher open rates and faster consumer conversions." },
  { title: "Meeting Scheduling", happens: "Leads book time directly on synced calendars based on availability rules.", exists: "It removes the 'back-and-forth' email friction from the sales process.", outcome: "A full calendar of qualified sales appointments." },
  { title: "Proposal Creation", happens: "The system generates dynamic quotes based on lead data and product selections.", exists: "It ensures accuracy in pricing and professional presentation every time.", outcome: "Error-free proposals delivered in minutes, not days." },
  { title: "Deal Management", happens: "Pipelines update automatically as prospects interact with proposals.", exists: "It provides sales managers with real-time forecasting accuracy.", outcome: "Clear visibility into current revenue potential." },
  { title: "Payment Collection", happens: "Invoices are issued and payment follow-ups are automated until settled.", exists: "It protects cash flow by removing the manual billing bottleneck.", outcome: "Faster payment cycles and reduced accounts receivable." },
  { title: "Delivery Tracking", happens: "Operations tasks are assigned and tracked as soon as payment is confirmed.", exists: "It ensures the promise made in sales is fulfilled by the delivery team.", outcome: "Standardized service quality and predictable fulfillment times." },
  { title: "Feedback System", happens: "Surveys are automatically sent at specific project milestones.", exists: "It captures the voice of the customer while the experience is fresh.", outcome: "Quantifiable satisfaction metrics and early warning of issues." },
  { title: "Upsell & Retention", happens: "System triggers outreach for renewals or complementary services based on usage.", exists: "It maximizes the lifetime value of every customer acquired.", outcome: "Increased recurring revenue and lower churn rates." },
  { title: "Analytics Dashboard", happens: "All data from stages 1-12 is aggregated into real-time visual reports.", exists: "It allows leadership to make data-driven strategic adjustments.", outcome: "Full-spectrum insight into business health and ROI." }
];

export const SystemWorkflow: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 space-y-16 sm:space-y-24 bg-white relative overflow-hidden" id="operations">
      <div className="absolute inset-0 grid-bg-light opacity-30"></div>

      <div className="reveal flex flex-col items-center text-center gap-6 sm:gap-8 relative z-10 px-4">
        <span className="text-[10px] sm:text-[12px] font-black uppercase tracking-[0.5em] text-purple-600 bg-purple-50 px-6 py-2.5 rounded-full border border-purple-100 shadow-sm">Mechanism of Action</span>
        <h2 className="text-[36px] sm:text-[64px] md:text-[80px] font-lander font-black text-[#030303] tracking-tighter leading-[1.1] sm:leading-none max-w-5xl">
          The Automation <br className="hidden md:block" /> Lifecycle
        </h2>
        <p className="text-slate-500 max-w-3xl text-lg sm:text-[22px] font-sodo font-light leading-relaxed">
          The exact thirteen-stage journey through the CodimAi infrastructure.
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto z-10 px-4 sm:px-6 relative">
        {/* Central Vertical Spine - Animated Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[4px] bg-slate-100 -translate-x-1/2 hidden md:block rounded-full overflow-hidden">
          <div className="absolute top-0 w-full h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent animate-[flow_3s_linear_infinite]" style={{ backgroundSize: '100% 50%' }}></div>
        </div>

        <div className="space-y-16 sm:space-y-20">
          {stages.map((stage, idx) => (
            <div key={idx} className={`reveal stagger-${(idx % 3) + 1} flex flex-col md:flex-row items-center gap-8 md:gap-0 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>

              {/* Content Card Area - BLACK CARDS */}
              <div className="w-full md:w-[46%] group">
                <div className={`space-y-6 relative p-8 sm:p-10 rounded-[2.5rem] bg-[#030303] hover:bg-[#0a0a0a] border border-white/5 transition-all duration-500 shadow-2xl ${idx % 2 === 1 ? 'md:text-right md:pr-14' : 'md:text-left md:pl-14'}`}>
                  {/* Stage Number & Title */}
                  <div className={`flex items-baseline gap-6 mb-2 ${idx % 2 === 1 ? 'md:flex-row-reverse md:justify-end' : 'md:justify-start'} justify-center`}>
                    <span className="text-4xl sm:text-5xl font-lander font-black text-purple-500/20 group-hover:text-purple-500/40 transition-colors">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-lander font-extrabold text-white tracking-tight group-hover:text-purple-400 transition-colors duration-500">
                      {stage.title}
                    </h3>
                  </div>

                  <div className="space-y-6 text-left">
                    {/* Operational Logic */}
                    <div className={`relative ${idx % 2 === 1 ? 'md:pr-8 md:border-r-2' : 'md:pl-8 md:border-l-2'} border-white/10 group-hover:border-purple-500/40 transition-colors`}>
                      <span className="text-[10px] font-brand font-black uppercase text-purple-400 tracking-[0.3em] block mb-2 opacity-80">Operational Logic</span>
                      <p className="text-[15px] sm:text-[17px] text-slate-300 leading-relaxed font-sodo font-light group-hover:text-white transition-colors">{stage.happens}</p>
                    </div>

                    {/* Strategic Value */}
                    <div className={`relative ${idx % 2 === 1 ? 'md:pr-8 md:border-r-2' : 'md:pl-8 md:border-l-2'} border-transparent transition-colors opacity-50 group-hover:opacity-100`}>
                      <span className="text-[10px] font-brand font-black uppercase text-slate-500 tracking-[0.3em] block mb-2">Strategic Value</span>
                      <p className="text-[14px] sm:text-[15px] text-slate-400 leading-relaxed font-sodo font-light italic">{stage.exists}</p>
                    </div>

                    {/* Target Outcome */}
                    <div className={`pt-6 border-t border-white/10 mt-4`}>
                      <span className="text-[9px] font-brand font-black uppercase text-purple-500 tracking-[0.4em] block mb-2 opacity-80">Target Outcome</span>
                      <p className="text-[18px] sm:text-[22px] text-white font-sodo font-black tracking-tight group-hover:translate-x-1 transition-transform">{stage.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Central Data Node Point */}
              <div className="relative z-20 shrink-0 md:w-[8%] flex justify-center">
                <div className="w-16 h-16 rounded-2xl bg-white border-4 border-slate-50 flex items-center justify-center shadow-lg group cursor-default hover:border-purple-500/30 transition-all duration-500">
                  <div className="w-4 h-4 rounded-full bg-purple-600 shadow-[0_0_15px_rgba(139,92,246,0.5)] group-hover:scale-125 transition-transform"></div>
                </div>
              </div>

              {/* Spacing for layout */}
              <div className="md:w-[46%] hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes flow {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
};
