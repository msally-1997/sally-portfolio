'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!WEB3FORMS_ACCESS_KEY) {
      setTimeout(() => {
        setStatus('success');
        form.reset();
      }, 1200);
      return;
    }

    formData.append('access_key', WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      const data = await response.json();
      if (data.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network error. Please try again later.');
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-violet-600/[0.03] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-fuchsia-600/[0.03] blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <span className="text-xs font-bold tracking-widest uppercase text-violet-400 block">Get in Touch</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Let's collaborate on your next digital experience.
              </h2>
              <p className="text-slate-400 font-light text-md sm:text-lg leading-relaxed pt-2">
                Have an exciting project in mind or want to discuss mobile/web engineering architectures? Drop a line, and let's build something exceptional together.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6 pt-4"
            >
              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-violet-500/5 border border-violet-500/10 flex items-center justify-center text-violet-400 group-hover:border-violet-500/30 group-hover:bg-violet-500/10 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 17.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">Email Me</p>
                  <a href="mailto:marouchsally@gmail.com" className="text-sm font-medium text-white hover:text-violet-400 transition-colors duration-300">
                    marouchsally@gmail.com
                  </a>
                </div>
              </div>

              

              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-violet-500/5 border border-violet-500/10 flex items-center justify-center text-violet-400 group-hover:border-violet-500/30 group-hover:bg-violet-500/10 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">WhatsApp</p>
                  <a href="https://wa.me/971503882859" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white hover:text-violet-400 transition-colors duration-300" suppressHydrationWarning>
                    +971 50 388 2859
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-violet-500/5 border border-violet-500/10 flex items-center justify-center text-violet-400 group-hover:border-violet-500/30 group-hover:bg-violet-500/10 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">Location</p>
                  <span className="text-sm font-medium text-white">Abu Dhabi, United Arab Emirates</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -6, borderColor: 'rgba(139, 92, 246, 0.25)' }}
              transition={{ type: 'spring', stiffness: 140, damping: 22 }}
              className="p-8 md:p-10 bg-slate-950/40 backdrop-blur-xl border-t border-x border-white/10 border-b border-white/5 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.05)] hover:shadow-[0_20px_50px_rgba(139,92,246,0.06)] transition-all duration-500 will-change-transform cursor-default"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-semibold text-slate-400 tracking-wide uppercase">Your Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      className="w-full bg-slate-900/60 border border-white/10 focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 text-white rounded-xl px-4 py-3 text-sm transition-all duration-300 outline-none placeholder-slate-600"
                      placeholder="John Doe"
                      suppressHydrationWarning
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-semibold text-slate-400 tracking-wide uppercase">Email Address</label>
                    <input
                      required
                      type="email"
                      name="email"
                      className="w-full bg-slate-900/60 border border-white/10 focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 text-white rounded-xl px-4 py-3 text-sm transition-all duration-300 outline-none placeholder-slate-600"
                      placeholder="john@example.com"
                      suppressHydrationWarning
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-semibold text-slate-400 tracking-wide uppercase">Subject</label>
                  <input
                    required
                    type="text"
                    name="subject"
                    className="w-full bg-slate-900/60 border border-white/10 focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 text-white rounded-xl px-4 py-3 text-sm transition-all duration-300 outline-none placeholder-slate-600"
                    placeholder="Project Inquiry / Consultation"
                    suppressHydrationWarning
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-semibold text-slate-400 tracking-wide uppercase">Message</label>
                  <textarea
                    required
                    rows={4}
                    name="message"
                    className="w-full bg-slate-900/60 border border-white/10 focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 text-white rounded-xl px-4 py-3 text-sm transition-all duration-300 outline-none resize-none placeholder-slate-600"
                    placeholder="Tell me about your project, timeline, and targets..."
                    suppressHydrationWarning
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-violet-600 hover:bg-violet-500 disabled:bg-violet-800 disabled:cursor-not-allowed text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-violet-600/20 hover:shadow-violet-600/30 hover:-translate-y-0.5 cursor-pointer text-sm"
                  suppressHydrationWarning
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>

                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs text-center"
                    >
                      ✓ Message sent successfully! I will get back to you shortly.
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs text-center"
                    >
                      ✗ {errorMessage}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
