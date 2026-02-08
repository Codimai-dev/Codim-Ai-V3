
import React from 'react';

export const Secondhero: React.FC = () => {
  return (
    <section id="infrastructure" className="relative py-12 sm:py-20 flex items-center min-h-[60vh]">
      {/* Background Cinematic Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-600/10 blur-[150px] rounded-full -z-10 animate-pulse"></div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Side: Content */}
        <div className="text-left">
          <div className="reveal inline-flex items-center gap-3 px-6 py-2 rounded-full glass-morphism text-white/80 text-[11px] font-bold tracking-[0.25em] uppercase mb-12 shadow-2xl border-white/20 hover:border-purple-500/50 transition-all duration-700 cursor-default group overflow-hidden">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="group-hover:text-white transition-colors">Infrastructure Level: Optimized</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </div>

          <h1 className="reveal stagger-1 text-[36px] sm:text-[68px] md:text-[84px] font-lander font-black leading-[1.1] sm:leading-[1] tracking-tighter mb-8 sm:mb-10 select-none perspective-xl text-white">
            <div className="text-mask-reveal block">
              <span className="text-reveal block">Complete Business</span>
            </div>
            <div className="text-mask-reveal block">
              <span className="purple-gradient-text block">Automation Platform</span>
            </div>
          </h1>

          <div className="space-y-8 sm:space-y-10">
            <p className="reveal stagger-2 text-lg sm:text-2xl font-sodo font-medium text-white/90 leading-relaxed max-w-xl italic">
              Revenue leaks when your <span className="text-white font-black hover:text-wispr-purple transition-colors cursor-default">CRM, email, and billing</span> systems operate in silos.
            </p>

            <div className="reveal stagger-3 space-y-8 sm:space-y-10">
              <p className="text-base sm:text-xl text-white/60 leading-relaxed font-sodo font-medium max-w-xl">
                We build the connective tissue between your departments—automating every manual handoff from capture to delivery.
              </p>

              <div className="flex flex-wrap gap-x-8 sm:gap-x-14 gap-y-4 sm:gap-y-6 opacity-60">
                {['Unified Data', 'Autonomous Logic', 'Real-time Flow'].map((tag, i) => (
                  <div key={i} className="flex items-center gap-2 sm:gap-3 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 group-hover:shadow-[0_0_15px_#8b5cf6] transition-all"></div>
                    <span className="text-[10px] sm:text-[12px] font-brand font-black text-slate-400 uppercase tracking-[0.35em] group-hover:text-white transition-colors">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Business Automation Animation */}
        <div className="reveal stagger-4 relative flex justify-center items-center h-[500px] lg:scale-110">
          <div className="relative w-full max-w-[400px] aspect-square flex justify-center items-center">

            {/* Background Decorative Rings */}
            <div className="absolute inset-0 border border-white/5 rounded-full"></div>
            <div className="absolute inset-12 border border-white/5 rounded-full"></div>

            {/* Connection Lines (SVGs) */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(139,92,246,0)" />
                  <stop offset="50%" stopColor="rgba(139,92,246,0.3)" />
                  <stop offset="100%" stopColor="rgba(139,92,246,0)" />
                </linearGradient>
              </defs>

              {/* Paths from center to nodes */}
              <circle cx="200" cy="200" r="140" fill="none" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_60s_linear_infinite]" />

              {/* Animated pulses along the dashed ring */}
              <circle cx="200" cy="200" r="140" fill="none" stroke="rgba(139,92,246,0.5)" strokeWidth="2" strokeDasharray="1 279" className="animate-[spin_4s_linear_infinite]" />
              <circle cx="200" cy="200" r="140" fill="none" stroke="rgba(139,92,246,0.5)" strokeWidth="2" strokeDasharray="1 279" className="animate-[spin_4s_linear_infinite]" style={{ animationDelay: '2s' }} />
            </svg>

            {/* Central Hub - The "Engine" */}
            <div className="relative z-10 w-24 h-24 bg-wispr-dark border border-purple-500/30 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(139,92,246,0.2)] group hover:border-purple-500/60 transition-colors duration-500">
              <div className="absolute inset-0 bg-purple-500/5 rounded-2xl animate-pulse"></div>
              <svg className="w-10 h-10 text-purple-400 animate-[spin_10s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4" /><path d="m16.2 4.2 2.8 2.8" /><path d="M18 12h4" /><path d="m16.2 19.8 2.8-2.8" /><path d="M12 18v4" /><path d="m4.2 19.8 2.8-2.8" /><path d="M2 12h4" /><path d="m4.2 4.2 2.8 2.8" /><circle cx="12" cy="12" r="3" />
              </svg>
              {/* Tooltip-like label */}
              <span className="absolute -bottom-8 text-[9px] font-brand font-black text-purple-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Execution Hub</span>
            </div>

            {/* Satellite Nodes - The Business Tools */}
            {[
              { icon: 'CRM', label: 'CRM', color: 'blue', delay: '0s', pos: 'top-0 left-1/2 -ml-8 -mt-2' },
              { icon: 'MAIL', label: 'Email', color: 'purple', delay: '1.5s', pos: 'bottom-8 right-0' },
              { icon: 'BILLING', label: 'Billing', color: 'indigo', delay: '3s', pos: 'bottom-8 left-0' },
            ].map((node, i) => (
              <div
                key={i}
                className={`absolute ${node.pos} w-16 h-16 bg-wispr-dark/80 backdrop-blur-md border border-white/10 rounded-xl flex flex-col items-center justify-center gap-1 shadow-xl hover:border-purple-500/40 transition-all duration-300 group cursor-default`}
                style={{ animation: `float-slow 6s ease-in-out infinite ${node.delay}` }}
              >
                {node.icon === 'CRM' && (
                  <svg className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                )}
                {node.icon === 'MAIL' && (
                  <svg className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                )}
                {node.icon === 'BILLING' && (
                  <svg className="w-6 h-6 text-indigo-400 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" />
                  </svg>
                )}
                <span className="text-[8px] font-brand font-bold text-white/40 uppercase tracking-tighter group-hover:text-white/80 transition-colors">{node.label}</span>
              </div>
            ))}

            {/* Floating Data Packets */}
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-purple-500 rounded-full blur-[1px] opacity-40 shadow-[0_0_10px_#8b5cf6]"
                style={{
                  top: '50%',
                  left: '50%',
                  animation: `orbit-${i} ${8 + i}s linear infinite`,
                }}
              ></div>
            ))}

            {/* Inline dynamic styles for orbits */}
            <style dangerouslySetInnerHTML={{
              __html: `
              @keyframes orbit-0 { from { transform: rotate(0deg) translateX(100px) rotate(0deg); } to { transform: rotate(360deg) translateX(100px) rotate(-360deg); } }
              @keyframes orbit-1 { from { transform: rotate(120deg) translateX(120px) rotate(-120deg); } to { transform: rotate(480deg) translateX(120px) rotate(-480deg); } }
              @keyframes orbit-2 { from { transform: rotate(240deg) translateX(90px) rotate(-240deg); } to { transform: rotate(600deg) translateX(90px) rotate(-600deg); } }
              @keyframes orbit-3 { from { transform: rotate(60deg) translateX(150px) rotate(-60deg); } to { transform: rotate(420deg) translateX(150px) rotate(-420deg); } }
              @keyframes orbit-4 { from { transform: rotate(180deg) translateX(130px) rotate(-180deg); } to { transform: rotate(540deg) translateX(130px) rotate(-540deg); } }
            `}} />

          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
};
