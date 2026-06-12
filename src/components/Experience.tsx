'use client';

import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      role: 'Independent Mobile & Frontend Engineer',
      company: 'Software Architecture R&D / Freelance',
      location: 'Abu Dhabi, UAE',
      period: 'Nov 2025 — Present',
      description: 'Dedicated to researching, profiling, and architecting next-generation mobile applications, complex state-management paradigms, and high-performance full-stack ecosystems.',
      achievements: [
        'Designed and engineered a production-grade **Full-Stack Uber Clone**, pioneering a completely decoupled architecture using **Expo**, **TypeScript**, **Node.js**, and **PostgreSQL**.',
        'Developed dynamic asynchronous data-fetching pipelines in mobile systems using **React Query**, optimizing caching strategies and mitigating interface rendering bottlenecks.'
      ],
      skills: ['Expo', 'Zustand', 'React Query','Next.js', 'Node.js', 'PostgreSQL', 'TypeScript', 'Framer Motion', 'Tailwind CSS']
    },
    {
      role: 'React Native & Frontend Engineer',
      company: 'INFO Strategic Information Technology Consultancy',
      location: 'Abu Dhabi, UAE',
      period: 'Aug 2023 — Nov 2025',
      description: 'Engineered high-standard responsive cross-platform mobile products and secure web frontend layout nodes for sovereign portals, enterprise e-commerce environments, and federal digital platforms.',
      achievements: [
        '**SEEN E-Commerce (Web & Mobile):** Spearheaded the frontend architecture for the cross-platform platform (React.js & React Native), driving it to a successful live production release in the UAE. Collaborated closely with backend teams and translated complex Figma designs into pixel-perfect UIs.',
        '**Core Mobile Integrations:** Engineered the SEEN mobile application\'s core integrations, including secure **JWT authentication**, **Stripe/Apple Pay** payment gateways, and **AppsFlyer** SDK for growth tracking.',
        '**Sovereign Solutions:** Delivered mission-critical dynamic frameworks for the **UAE Ministry of Industry and Advanced Technology (MOIAT)** and **Federal Public Prosecution**, ensuring strict security and accessibility compliance.'
      ],
      skills: ['React Native (CLI)', 'React.js', 'Odoo Web', 'Redux Toolkit', 'TypeScript', 'JavaScript', 'Bootstrap', 'Stripe Payments', 'AppsFlyer'],
      certificateUrl: '/experience-certificate.pdf'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -8 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' as const } }
  };

  return (
    <section id="experience" className="scroll-mt-24 py-12 md:py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-fuchsia-500/[0.02] rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-left"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-violet-400 block mb-2">History</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Professional Journey
          </h2>
        </motion.div>

        <div className="relative border-l border-white/10 ml-2 md:ml-4 pl-8 md:pl-10 space-y-8">
          {experiences.map((exp: any, i) => (
            <div key={i} className="relative group">
              
              <motion.span 
                initial={{ scale: 0.7, opacity: 0.5 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="absolute -left-[41px] md:-left-[49px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-violet-500 shadow-[0_0_15px_rgba(139,92,246,0.5)] group-hover:border-fuchsia-500 group-hover:shadow-[0_0_20px_rgba(217,70,239,0.7)] transition-all duration-500 z-10" 
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start mb-4">
                <div className="md:col-span-2">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-violet-400 transition-colors duration-300 tracking-tight">
                    {exp.role}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1 leading-relaxed flex flex-wrap items-center gap-1.5">
                    {exp.company} <span className="text-slate-600">•</span> <span className="text-violet-400/90 font-light">{exp.location}</span>
                    {exp.certificateUrl && (
                      <>
                        <span className="text-slate-600">•</span>
                        <a 
                          href={exp.certificateUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center gap-1 text-[11px] text-fuchsia-400 hover:text-fuchsia-300 font-semibold transition-colors duration-300 ml-1 group/cert"
                        >
                          Verify Credential
                          <span className="inline-block transform group-hover/cert:translate-x-0.5 group-hover/cert:-translate-y-0.5 transition-transform duration-300 text-[10px]">↗</span>
                        </a>
                      </>
                    )}
                  </p>
                </div>
                
                <div className="flex md:justify-end shrink-0">
                  <span className="text-[10px] md:text-[11px] font-mono font-semibold tracking-wider text-fuchsia-400 bg-fuchsia-500/10 border border-fuchsia-500/20 px-3 py-1 rounded-full uppercase whitespace-nowrap select-none">
                    {exp.period}
                  </span>
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                whileHover={{ y: -6, borderColor: 'rgba(139, 92, 246, 0.25)' }}
                transition={{ type: 'spring', stiffness: 140, damping: 22 }}
                className="p-6 md:p-8 bg-slate-950/40 backdrop-blur-xl border-t border-x border-white/10 border-b border-white/5 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.05)] hover:shadow-[0_20px_50px_rgba(139,92,246,0.06)] transition-all duration-500 cursor-default will-change-transform"
              >
                <p className="text-sm text-slate-300 mb-6 font-normal leading-relaxed">
                  {exp.description}
                </p>

                <motion.ul 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-3.5 mb-6 pl-0.5"
                >
                  {exp.achievements.map((achievement: string, idx: number) => (
                    <motion.li 
                      key={idx} 
                      variants={itemVariants}
                      className="text-xs sm:text-sm text-slate-400 flex items-start gap-3 leading-relaxed font-light"
                    >
                      <span className="text-fuchsia-400 text-xs mt-1 select-none">✦</span>
                      <span dangerouslySetInnerHTML={{ __html: achievement }} />
                    </motion.li>
                  ))}
                </motion.ul>
                <div className="flex flex-wrap gap-1.5 pt-5 border-t border-white/5">
                  {exp.skills.map((skill: string, skillIdx: number) => (
                    <span
                      key={skillIdx}
                      className="text-[10px] font-medium tracking-wide text-slate-300 bg-violet-500/[0.02] border border-white/8 hover:border-violet-500/30 hover:bg-violet-500/10 px-3 py-1 rounded-full transition-all duration-300 select-none"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

            </div>
          ))}
        </div>

      </div>
      
    </section>
  );
}