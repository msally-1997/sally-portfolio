'use client';

import { motion } from 'framer-motion';

export default function About() {
  const cards = [
    {
      title: 'React Native',
      description: 'Cross-platform mobile architectures, native bridges, and performance optimization.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 text-violet-400" strokeWidth="1.5">
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      ),
      floatY: [0, -4, 0],
      duration: 5,
      delay: 0,
    },
    {
      title: 'TypeScript',
      description: 'Strict type safety, robust domain modeling, and scalable codebase patterns.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 text-violet-400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16.5 9.43a4 4 0 0 0-1.9-.43 2.5 2.5 0 0 0-2.5 2.5v1a2.5 2.5 0 0 0 2.5 2.5c.85 0 1.5-.18 1.9-.43" />
          <path d="M9 9h4" />
          <path d="M11 9v9" />
          <path d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2z" />
        </svg>
      ),
      floatY: [0, -5, 0],
      duration: 6,
      delay: 0.5,
    },
    {
      title: 'Next.js',
      description: 'Server-side rendering, optimized web performance, and edge routing architecture.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 text-violet-400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 16V8l8 8V8" />
        </svg>
      ),
      floatY: [0, -3, 0],
      duration: 5.5,
      delay: 1,
    },
    {
      title: 'Zustand',
      description: 'Lightweight, atomic state management with optimized component re-render patterns.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 text-violet-400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="2.5" />
          <circle cx="5" cy="12" r="2.5" />
          <circle cx="19" cy="12" r="2.5" />
          <circle cx="12" cy="19" r="2.5" />
          <path d="M12 7.5V16.5" />
          <path d="M7.5 12h9" />
          <path d="M6.77 10.23l10.46 3.54" />
          <path d="M17.23 10.23L6.77 13.77" />
        </svg>
      ),
      floatY: [0, -5, 0],
      duration: 6.5,
      delay: 1.5,
    },
  ];

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.03),transparent_50%)] pointer-events-none" />
      
      {/* استعادة الحجم الأصلي العريض الفاخر max-w-7xl والمسافات الأصلية */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12 py-20 md:py-28 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center z-10">
        
        {/* شبكة الكروت التفاعلية العائمة بعرضها الكامل المريح */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 pb-8 sm:pb-16 relative">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -6, borderColor: 'rgba(139, 92, 246, 0.25)' }}
              transition={{ type: 'spring', stiffness: 140, damping: 22 }}
              className={`group relative p-6 rounded-3xl  border-t border-x border-white/10 border-b border-white/5 bg-slate-950/40 backdrop-blur-md hover:shadow-[0_20px_50px_rgba(139,92,246,0.06)] flex flex-col justify-between min-h-[220px] will-change-transform ${
                i % 2 === 1 ? 'sm:translate-y-8' : ''
              }`}
            >
              {/* التموج التلقائي اللطيف للأجزاء الداخلية فقط */}
              <motion.div
                className="w-full h-full flex flex-col justify-between z-10 cursor-default"
                animate={{ y: card.floatY }}
                transition={{
                  duration: card.duration,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: card.delay,
                }}
              >
                <div>
                  <div className="mb-4 text-violet-400 bg-violet-500/5 w-12 h-12 rounded-xl flex items-center justify-center border border-violet-500/10 group-hover:border-violet-500/30 group-hover:bg-violet-500/10 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-500">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors duration-300 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-light">
                    {card.description}
                  </p>
                </div>
              </motion.div>
              
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.03)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />
            </motion.div>
          ))}
        </div>

        {/* النصوص والكتلة الوصفية الجانبية بمحاذاتها وحجمها الطبيعي الأصلي */}
        <div className="lg:col-span-6 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6">

            <div className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-violet-400 bg-violet-500/10 border border-violet-500/20 rounded-full uppercase select-none">
              The Core
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Engineering robust digital architectures across <span className="text-violet-400">mobile and web</span>.
            </h2>

            <p className="text-md sm:text-lg text-slate-300 leading-relaxed font-light mb-6">
              I am a frontend and mobile engineer dedicated to translating complex requirements into highly performant, scalable applications. Moving fluidly between mobile and web ecosystems depending on project architecture and timelines, I apply rigid standards of performance, memory management, and responsive rendering to every screen I build for.
            </p>

            <p className="text-md sm:text-lg text-slate-300 leading-relaxed font-light mb-6">
              My career focuses on constructing resilient applications that solve real-world business challenges. I have led the integration of business-critical systems, including <span className="text-violet-400 font-semibold">Global Payment Gateways</span> that secure transactional integrity, <span className="text-violet-400 font-semibold">Advanced Mapping Solutions</span> for real-time spatial applications, and <span className="text-violet-400 font-semibold">Growth Analytics (AppsFlyer)</span> to optimize user acquisition funnels.
            </p>

            <p className="text-md sm:text-lg text-slate-300 leading-relaxed font-light mb-6">
              I blend the clean-architecture patterns of enterprise mobile engineering with the speed and dynamic flexibility of modern web environments, creating cohesive software that performs flawlessly under heavy production loads.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}