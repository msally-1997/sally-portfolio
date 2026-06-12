'use client';

import Link from 'next/link';

export default function Navbar() {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-4 w-full z-50 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto bg-slate-950/40 backdrop-blur-xl border-t border-x border-white/10 border-b border-white/5 hover:border-violet-500/20 rounded-full px-6 py-3 flex justify-between items-center transition-all duration-500 shadow-[0_12px_30px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.05)]">
        
        <a href="#hero" className="text-sm font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 hover:to-violet-400 transition-colors duration-300">
          SALLY.M
        </a>

        <nav className="flex items-center gap-6 sm:gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs font-medium text-slate-400 hover:text-white transition-colors duration-300 relative py-1"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* تعديل الزر ليتوافق مع انسيابية الارتفاع العمودي المتناسق والآمن */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="/sally-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[10px] font-bold tracking-wider uppercase border border-white/20 text-slate-300 px-5 py-2 rounded-full hover:-translate-y-0.5 hover:bg-white/5 hover:text-white transition-all duration-300 transform will-change-transform"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="inline-block text-[10px] font-bold tracking-wider uppercase bg-white text-black px-5 py-2 rounded-full hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(255,255,255,0.15)] transition-all duration-300 transform will-change-transform"
          >
            Hire Me
          </a>
        </div>

      </div>
    </header>
  );
}