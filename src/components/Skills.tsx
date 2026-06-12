'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend & Mobile',
      skills: ['React Native', 'React.js', 'TypeScript', 'Next.js', 'Tailwind CSS , Bootstrap']
    },
    {
      title: 'State & Data Architecture',
      skills: ['Redux Toolkit', 'Zustand', 'React Query', 'PostgreSQL', 'Neon DB']
    },
    {
      title: 'Auth & Notifications',
      skills: ['Google Auth', 'Clerk Auth', 'Push Notifications', 'Git & GitHub', 'GitLab']
    },
    {
      title: 'Services & Integrations',
      skills: ['RESTful APIs', 'Payment Gateways (Stripe, Apple Pay)', 'Google Maps API', 'AppsFlyer', 'Firebase']
    }
  ];

  return (
      <section id="skills" className="py-20 md:py-28 bg-slate-950 relative">
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12 relative z-10">        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-left"
        >
<h2 className="text-4xl font-bold text-white mb-4">Technical Stack</h2>
          <p className="text-slate-400 font-light max-w-lg text-left">
            Engineering robust digital architectures through a deep integration of state-driven frontend systems and secure backend services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <h3 className="text-[10px] font-bold tracking-widest text-violet-300 uppercase">
                {category.title}
              </h3>
              <div className="flex flex-col gap-2">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ x: 4, borderColor: 'rgba(139, 92, 246, 0.4)' }}
                    className="p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-violet-500/[0.05] transition-all duration-300 cursor-default group"
                  >
                    <span className="text-sm text-slate-300 font-medium group-hover:text-white transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}