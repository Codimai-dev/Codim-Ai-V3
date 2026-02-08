import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Ghost, Search } from 'lucide-react';

const NotFound: React.FC = () => {
    return (
        <div className="min-h-screen bg-wispr-dark flex flex-col items-center justify-center px-6 relative overflow-hidden text-center">
            {/* Cinematic Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-wispr-purple/10 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-wispr-purple/5 blur-[120px] rounded-full pointer-events-none animate-pulse"></div>

            <div className="relative z-10 space-y-12">
                {/* Error Code */}
                <div className="relative inline-block">
                    <h1 className="text-[100px] sm:text-[180px] md:text-[240px] font-lander font-black text-white/20 leading-none tracking-tighter select-none drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                        404
                    </h1>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Ghost size={80} className="text-wispr-purple opacity-20 animate-bounce" />
                    </div>
                </div>

                {/* Message */}
                <div className="max-w-xl mx-auto space-y-6">
                    <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
                        <Search size={14} className="text-wispr-purple" />
                        <span className="font-brand text-[10px] font-black uppercase tracking-[0.4em] text-white">Page Not Found</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-lander font-bold text-white tracking-tight">
                        Oops! This node seems to be <span className="text-wispr-purple italic">offline.</span>
                    </h2>
                    <p className="text-slate-400 text-lg font-sodo font-light leading-relaxed">
                        The link you followed might be broken, or the page has been moved.
                        Whatever it is, let's get you back logic.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                    <Link
                        to="/"
                        className="group flex items-center gap-4 bg-white text-wispr-dark px-10 py-5 rounded-[2rem] font-sodo font-black text-lg transition-all duration-300 hover:scale-105 hover:bg-wispr-purple hover:text-white shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                    >
                        <Home size={20} className="group-hover:-rotate-12 transition-transform" />
                        Back to Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center gap-4 text-white/50 hover:text-white font-brand text-[10px] font-black uppercase tracking-[0.4em] transition-colors group px-8 py-5 border border-white/5 rounded-[2rem] hover:bg-white/5"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
                        Previous Page
                    </button>
                </div>
            </div>

            {/* Decorative Grid */}
            <div className="absolute inset-0 grid-bg-dark opacity-20 pointer-events-none -z-10"></div>
        </div>
    );
};

export default NotFound;
