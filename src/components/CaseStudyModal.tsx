'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudyId: string | null;
}

export default function CaseStudyModal({ isOpen, onClose, caseStudyId }: CaseStudyModalProps) {
  if (!isOpen || !caseStudyId) return null;

  const getCaseStudyContent = () => {
    switch (caseStudyId) {
      case 'seen':
        return {
          title: 'SEEN E-Commerce Ecosystem',
          subtitle: 'Enterprise Retail Architecture & Transaction Concurrency',
          overview: 'As the Senior Mobile and Frontend Engineer on the SEEN E-Commerce platform, I engineered high-performance web/mobile layouts and handled business-critical concurrency challenges in the UAE retail market.',
          sections: [
          {
            title: 'Inventory Concurrency & Race Conditions',
            tag: 'Database Architecture',
            tagColor: 'text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20',
            challenge: 'During high-traffic flash sales, we faced critical inventory race conditions. When only one unit remained, multiple users could add it to their carts simultaneously, causing "phantom stock" issues, leading to checkout failures and customer frustration.',
            solution: 'I implemented an Optimistic Locking mechanism combined with a temporary TTL (Time-To-Live) Reservation system. When a product is added to the cart, the system assigns a temporary reservation token. If the checkout workflow is not completed within the TTL window, database triggers atomically release the reservation back into the inventory pool.',
            impact: 'Eliminated 100% of inventory race conditions and double-allocation issues. Reclaimed 15% of lost sale opportunities and stabilized stock data integrity.'
          },
          {
            title: 'Mobile Navigation & State Lifecycle',
            tag: 'Mobile Architecture',
            tagColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
            challenge: 'In our cross-platform mobile app, navigating to the same product detail page with different variants caused inconsistent state re-initialization and UI glitches, as the navigation stack did not trigger a full component lifecycle reset.',
            solution: 'I architected custom Navigation Guards and lifecycle event listeners that monitor variant parameters. This ensures that every navigation trigger to the same view forces a clean re-initialization of the product state and dependencies, regardless of the previous stack state.',
            impact: 'Eliminated redundant re-renders and fixed 100% of state-stale issues when browsing variants.'
          },
          {
  title: 'Hybrid State Synchronization (WebView Bridge)',
  tag: 'State Management',
  tagColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  challenge: 'Cart operations within the embedded WebView did not propagate back to the native app context, causing inconsistent totals and a fragmented shopping experience.',
  solution: 'I designed a persistent, bidirectional message bus between the Native app (Redux Toolkit) and the WebView JavaScript runtime. Using postMessage APIs, cart mutations are dispatched into the global Redux store instantaneously, ensuring the native application and the embedded web content maintain a unified, reactive state.',
  impact: 'Resolved 100% of session desynchronization errors, ensuring a seamless, native-like shopping experience.'
},
          {
            title: 'Client Rendering Performance',
            tag: 'Frontend Optimization',
            tagColor: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
            challenge: 'Loading 30+ dynamic sliders simultaneously resulted in massive DOM node sizes, scroll lag, and high bounce rates on mobile.',
            solution: 'I refactored to Progressive Pagination. Sections are fetched asynchronously via Intersection Observer APIs as the user scrolls, deferring non-critical render tasks until they enter the viewport.',
            impact: 'Reduced Time-to-Interactive (TTI) by over 60% and dropped home-page bounce rates by 22%.'
          }
        ]
        };
      case 'uber':
        return {
          title: 'Full-Stack Uber Clone',
          subtitle: 'Real-Time Geospatial Coordination & Secure Cloud Architecture',
          overview: 'This project is a advanced architectural R&D showcase, validating high-concurrency state synchronization, geospatial mapping processing, and strict middleware authentication.',
          sections: 
    [
  {
    title: 'State Synchronization (Real-Time Coordination)',
    tag: 'State Management',
    tagColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    challenge: 'Managing real-time status updates for drivers and passengers created race conditions, leading to UI desynchronization.',
    solution: 'I architected a decoupled state layer using Zustand, utilizing atomic stores (`useLocationStore` and `useDriverStore`) to isolate data updates. This approach ensures a single source of truth for all UI components, guaranteeing that every component reflects the current coordinate and driver state instantly.',
    impact: 'Achieved strict state consistency across the application, preventing data conflicts and ensuring a seamless, high-performance UI responsiveness under 100ms.'
  },
  {
    title: 'Geospatial Optimization (Route Rendering)',
    tag: 'Mapping APIs',
    tagColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    challenge: 'Rendering high-resolution route paths efficiently while maintaining optimal performance on mobile devices.',
    solution: 'I engineered a modular `map.ts` utility that handles real-time path estimation and driver coordinate interpolation. By implementing custom logic for coordinate offsets and fare estimation directly on the client, I achieved high-fidelity mapping without unnecessary external overhead.',
    impact: 'Optimized rendering performance and reduced battery drain by implementing efficient coordinate-offset algorithms, ensuring a smooth and responsive mapping experience.'
  },
  {
    title: 'Secure User Auth & Orchestration',
    tag: 'Security & Auth',
    tagColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    challenge: 'Ensuring seamless user identity management when synchronizing Clerk-authenticated profiles with a PostgreSQL database.',
    solution: 'I implemented a robust user-synchronization pipeline that maps Clerk-authenticated session data to our PostgreSQL user schema. By handling user profile creation and identity persistence at the backend level, I created a unified and reliable user identity management system.',
    impact: 'Established a stable and secure user-data foundation, allowing for consistent identity propagation and reliable user account management across the entire application.'
  }
]
        };
      default:
        return null;
    }
  };

  const content = getCaseStudyContent();
  if (!content) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
        
        {/* Backdrop Blur Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ type: 'spring', stiffness: 200, damping: 24 }}
          className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto overflow-x-hidden bg-slate-950/90 border border-white/10 rounded-3xl p-6 md:p-10 shadow-[0_30px_70px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.05)] backdrop-blur-2xl z-10 scrollbar-thin scrollbar-thumb-white/10"
        >
          {/* Ambient Background Glows */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-violet-600/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />

          {/* Header */}
          <div className="flex justify-between items-start border-b border-white/10 pb-6 mb-8 relative z-10">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-violet-400 uppercase">Technical Case Study</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-1 tracking-tight">{content.title}</h2>
              <p className="text-xs font-mono text-slate-400 mt-1 uppercase tracking-wider">{content.subtitle}</p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-violet-500/30 hover:bg-violet-500/10 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Overview Section */}
          <div className="mb-8 relative z-10">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-2">Executive Summary</h3>
            <p className="text-sm text-slate-400 font-light leading-relaxed">
              {content.overview}
            </p>
          </div>

          {/* Core Technical Challenges */}
          <div className="space-y-8 relative z-10 text-slate-300">
            {content.sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6, borderColor: 'rgba(139, 92, 246, 0.25)' }}
                className="group relative p-6 md:p-8 rounded-2xl bg-white/[0.01] hover:bg-violet-500/[0.02] border border-white/5 hover:border-violet-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_rgba(139,92,246,0.04)] transition-all duration-500 cursor-default will-change-transform space-y-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-3">
                  <h4 className="text-md md:text-lg font-bold text-white group-hover:text-violet-400 transition-colors duration-300 tracking-tight">
                    {section.title}
                  </h4>
                  <span className="text-[9px] font-mono font-semibold tracking-wider uppercase border px-2.5 py-0.5 rounded-full select-none shrink-0 text-violet-300 bg-violet-500/10 border-violet-500/20">
                    {section.tag}
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Challenge */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block">Challenge</span>
                    <p className="text-sm text-slate-300 leading-relaxed font-light">
                      {section.challenge}
                    </p>
                  </div>
                  
                  {/* Solution */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold tracking-widest text-violet-400 uppercase block">Engineering Solution</span>
                    <p className="text-sm text-slate-300 leading-relaxed font-light">
                      {section.solution}
                    </p>
                  </div>

                  {/* Impact */}
                  <div className="space-y-1 bg-violet-500/[0.02] border border-violet-500/10 rounded-xl p-4">
                    <span className="text-[10px] font-bold tracking-widest text-violet-400 uppercase block mb-1">Technical Impact</span>
                    <p className="text-sm text-slate-300 leading-relaxed font-light">
                      {section.impact}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-10 pt-6 border-t border-white/10 flex justify-end relative z-10">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-medium text-xs transition-all duration-300 shadow-md shadow-violet-600/10 cursor-pointer"
            >
              Close Case Study
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
