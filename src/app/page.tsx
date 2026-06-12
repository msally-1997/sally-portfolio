import SmoothMask from "@/components/animations/SmoothMask";
import HeroVisual from "@/components/HeroVisual";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills"; 
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen">


      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.05),transparent_70%)]">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />
      </div>

      <section id="hero" className="min-h-screen flex flex-col justify-center scroll-mt-24">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-20 lg:pt-20 w-full">
          <div className="text-left space-y-8">
            <SmoothMask delay={0.2}>
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-violet-400 bg-violet-500/5 px-4 py-1.5 rounded-full border border-violet-500/10">
                Based in Abu Dhabi, UAE
              </span>
            </SmoothMask>
            <div className="space-y-4">
              <SmoothMask delay={0.4}>
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">
                  Sally Maroush
                </h1>
              </SmoothMask>
              <SmoothMask delay={0.6}>
                <p className="text-md sm:text-lg text-slate-300 leading-relaxed font-light mb-6">
                  Building the next generation of <span className="text-white">Mobile & Web</span> experiences with precision and purpose.
                </p>
              </SmoothMask>
            </div>
            <SmoothMask delay={0.8}>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#projects" className="px-8 py-3 rounded-full bg-violet-600 text-white font-medium hover:bg-violet-500 transition-all duration-300">View Projects</a>
                <a href="#about" className="px-8 py-3 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 transition-all duration-300">About Me</a>
              </div>
            </SmoothMask>
          </div>
          <div className="flex justify-center items-center lg:justify-end">
            <HeroVisual delay={1.0} />
          </div>
        </div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}