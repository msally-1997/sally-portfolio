'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import CaseStudyModal from './CaseStudyModal';

export default function Projects() {
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState<string | null>(null);

  const projects = [
   {
  title: 'SEEN E-Commerce Ecosystem',
  subtitle: 'Production Retail Mobile & Web Infrastructure — UAE',
  description: 'I played a pivotal role in engineering SEEN from its early developmental stages up to its successful production release in the UAE market. I ensured flawless feature parity between the cross-platform mobile app and responsive web instances, architecting solutions that seamlessly bridge the gap between design vision and technical implementation.',
  bullets: [
    '**Full Lifecycle Engineering:** Architected the comprehensive end-to-end user purchasing lifecycle, owning the complex states for dynamic carts, checkout behaviors, and localized profiling.',
    '**Transactional Security:** Integrated Stripe payment gateways to secure financial processing pipelines, alongside custom JWT authentication, secure storage, and session logout protocols.',
    '**Growth Analytics:** Embedded AppsFlyer SDK tracking to capture user behavior insights, alongside automated push notification pipelines to patch and optimize conversion funnel drop-offs.',
    '**Engineering Collaboration & Strategy:** Collaborated closely with backend engineers and UI/UX designers to architect scalable, cross-platform solutions for both Web and Mobile, ensuring a high-performance retail experience.'
  ],
  tags: ['React Native (CLI)', 'React.js', 'Redux Toolkit', 'Stripe', 'AppsFlyer', 'JWT Auth', 'Bootstrap'],
  isPrivate: true,
  hasCaseStudy: true,
  caseStudyId: 'seen'
},
    {
      title: 'UAE Government Mobile Architectures',
      subtitle: 'Sovereign & Public Sector Mobile Infrastructure',
      description: 'I contributed to the enhancement of core mobile architectures and highly customized workflows for critical federal and local government institutions in the UAE.',
      bullets: [
        '**MOIAT Application:** Spearheaded the implementation of complex, dynamic institutional forms and refined multi-step user interaction workflows for the UAE Ministry of Industry and Advanced Technology.',
        '**Ajman DED Application:** Directed interface upgrades and optimized core application modules for the Ajman Department of Economic Development to enhance public accessibility.'
      ],
      tags: ['React Native', 'TypeScript', 'Dynamic Forms', 'UI/UX Performance', 'Mobile Architecture', 'Bootstrap'],
      isPrivate: true
    },
    {
      title: 'Federal Judicial & Institutional Web Portals',
      subtitle: 'High-Security Public Sector Web Frontend Engineering',
      description: 'I engineered and styled robust frontend rendering setups for secure internal systems, web portals, and national administrative platforms across the UAE.',
      bullets: [
        '**Federal Public Prosecution (Abu Dhabi):**Frontend Engineering & Security Compliance: Collaborated within cross-functional teams to integrate secure UI modules, ensuring strict compliance with federal digital accessibility and security standards while rebuilding core layout components for the internal portal ecosystem',
        '**Odoo Customization:** Developed and customized native web modules within the Odoo framework, manipulating custom JavaScript libraries and responsive styles to align with rigid government UI standards.',
        '**AMAL Project:** Owned critical Web Frontend engineering tasks and responsive layout optimizations to support high-priority public digital initiatives.'
      ],
      tags: ['Odoo Web Modules', 'JavaScript', 'React.js', 'Bootstrap', 'Enterprise Security UI', 'Responsive Design'],
      isPrivate: true
    },
    {
      title: 'Full-Stack Ride-Hailing & Media Labs',
      subtitle: 'Advanced Architectural R&D — Spatial Systems & Cloud BaaS',
      description: 'A suite of production-ready applications engineered to master lightweight client-side state models, standalone server design, and advanced mobile architectures.',
      bullets: [
        '**Full-Stack Uber Clone:** Built a cross-platform mobile app in React Native (Expo) and TypeScript; decoupled monolithic routes into a standalone Node.js + Express backend backed by PostgreSQL (Neon), with global state elegantly synchronized via Zustand.',
        '**Geospatial & Payments Integration:** Orchestrated smooth real-time location tracking, route path rendering, driver selection, fare estimation, and secure Clerk Auth (Google OAuth) paired with Stripe workflows.',
        '**Movie Discovery App:** Crafted a sleek, highly responsive content-discovery mobile application leveraging external REST APIs, featuring optimized search filters, dynamic favorite caching, and smooth navigation.'
      ],
      tags: ['Expo', 'Zustand', 'Node.js', 'Express', 'PostgreSQL', 'Google Maps API', 'Clerk Auth', 'Tailwind CSS'],
      isPrivate: false,
      links: [
        { label: 'Uber Clone Source', url: 'https://github.com/msally-1997/uber-clone-fullstack' },
        { label: 'Movie App Source', url: 'https://github.com/msally-1997/moviesApp' }
      ],
      hasCaseStudy: true,
      caseStudyId: 'uber'
    },
    {
      title: 'Engineering Showcase: This Website',
      subtitle: 'Design System Architecture & Performance Engineering',
      description: 'This portfolio is built as a highly optimized, headless-inspired design system, demonstrating production-grade web architecture and perfect web vitals.',
      bullets: [
        '**Perfect Lighthouse Score:** Achieved a flawless 100% across all four categories (Performance, Accessibility, Best Practices, and SEO).',
        '**Performance:** Engineered with Next.js (App Router) for sub-second page loads and zero-latency navigation.',
        '**Stack:** TypeScript (Strict Mode), Tailwind CSS (Atomic Design), and Framer Motion (Orchestrated Animations).'
      ],
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Performance Engineering', '100% Lighthouse'],
      isPrivate: false,
      links: [
        { label: 'Source Code', url: 'https://github.com/msally-1997/sally-portfolio' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -8 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' as const } }
  };

  return (
    <section id="projects" className="scroll-mt-24 py-20 md:py-28 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-violet-500/[0.02] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-fuchsia-500/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-left"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-violet-400 block mb-2">My Work</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Featured Engineering Projects
          </h2>
        </motion.div>

        <div className="grid gap-12 grid-cols-1">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -6, borderColor: 'rgba(139, 92, 246, 0.25)' }}
              transition={{ type: 'spring', stiffness: 140, damping: 22 }}
              className="group relative p-6 md:p-8 bg-slate-950/40 backdrop-blur-xl border-t border-x border-white/10 border-b border-white/5 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.05)] hover:shadow-[0_20px_50px_rgba(139,92,246,0.06)] transition-all duration-500 cursor-default will-change-transform"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-violet-400 transition-colors duration-300 tracking-tight">
                      {p.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-3 items-center">
                      {p.hasCaseStudy && (
                        <button
                          onClick={() => {
                            setSelectedCaseStudyId(p.caseStudyId || null);
                            setIsCaseStudyOpen(true);
                          }}
                          className="text-[10px] font-mono tracking-wider uppercase border border-fuchsia-500/20 hover:border-fuchsia-500/50 bg-fuchsia-500/5 hover:bg-fuchsia-500/15 text-fuchsia-400 hover:text-fuchsia-300 px-3 py-1.5 rounded-full transition-all duration-300 flex items-center gap-1.5 group/cs cursor-pointer"
                          suppressHydrationWarning
                        >
                          <span>📄 Case Study</span>
                          <span className="inline-block transform group-hover/cs:translate-x-0.5 transition-transform duration-300 text-[10px]">→</span>
                        </button>
                      )}

                      {p.isPrivate ? (
                        <span className="text-[10px] text-slate-500 font-mono tracking-wider uppercase border border-white/5 bg-white/[0.01] px-2.5 py-1.5 rounded-full select-none">
                          🔒 Proprietary / NDA
                        </span>
                      ) : (
                        <div className="flex flex-wrap gap-3">
                          {p.links?.map((link, linkIdx) => (
                            <a
                              key={linkIdx}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[10px] font-mono tracking-wider uppercase border border-white/10 hover:border-violet-500/30 bg-white/[0.02] hover:bg-violet-500/10 text-slate-300 hover:text-white px-3 py-1.5 rounded-full transition-all duration-300 flex items-center gap-1.5 group/link"
                              suppressHydrationWarning
                            >
                              <span>💻 {link.label}</span>
                              <span className="inline-block transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300 text-[10px]">↗</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-[10px] font-mono font-semibold tracking-wider text-fuchsia-400 uppercase mb-6">
                    {p.subtitle}
                  </p>
                  
                  <p className="text-sm text-slate-300 mb-6 font-normal leading-relaxed">
                    {p.description}
                  </p>

                  <motion.ul 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-3.5 mb-6 pl-0.5"
                  >
                    {p.bullets.map((bullet, idx) => (
                      <motion.li 
                        key={idx} 
                        variants={itemVariants}
                        className="text-xs sm:text-sm text-slate-400 flex items-start gap-3 leading-relaxed font-light"
                      >
                        <span className="text-fuchsia-400 text-xs mt-1 select-none">✦</span>
                        <span dangerouslySetInnerHTML={{ __html: bullet.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-medium">$1</strong>') }} />
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>

                {/* الـ Tags الدائرية الزجاجية التفاعلية */}
                <div className="flex flex-wrap gap-1.5 pt-5 border-t border-white/5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium tracking-wide text-slate-300 bg-violet-500/[0.02] border border-white/8 hover:border-violet-500/30 hover:bg-violet-500/10 px-3 py-1 rounded-full transition-all duration-300 select-none"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <CaseStudyModal 
        isOpen={isCaseStudyOpen} 
        onClose={() => setIsCaseStudyOpen(false)} 
        caseStudyId={selectedCaseStudyId} 
      />
    </section>
  );
}