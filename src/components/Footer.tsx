'use client';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 py-8 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex flex-col md:flex-row items-center gap-3">
          <p>© {new Date().getFullYear()} Sally Maroush. All rights reserved.</p>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            100% Lighthouse Score
          </span>
        </div>
        <div className="flex gap-6">
          <a 
            href="https://github.com/msally-1997" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors duration-300"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/sally-maroush-a03202275?utm_source=share_via&utm_content=profile&utm_medium=member_ios" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
