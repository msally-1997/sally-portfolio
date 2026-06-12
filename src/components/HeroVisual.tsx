'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Token {
  text: string;
  type: 'keyword' | 'string' | 'variable' | 'component' | 'plain';
}

type Line = Token[];

const codeLines: Line[] = [
  [
    { text: 'import', type: 'keyword' },
    { text: ' { ', type: 'plain' },
    { text: 'Profile', type: 'component' },
    { text: ' } ', type: 'plain' },
    { text: 'from', type: 'keyword' },
    { text: ' "./sally";', type: 'string' }
  ],
  [],
  [
    { text: 'const', type: 'keyword' },
    { text: ' ', type: 'plain' },
    { text: 'Developer', type: 'variable' },
    { text: ' = () => {', type: 'plain' }
  ],
  [
    { text: '  return (', type: 'plain' }
  ],
  [
    { text: '    <', type: 'plain' },
    { text: 'Portfolio', type: 'component' },
    { text: ' ', type: 'plain' }
  ],
  [
    { text: '      name', type: 'variable' },
    { text: '=', type: 'plain' },
    { text: '"Sally Maroush"', type: 'string' }
  ],
  [
    { text: '      role', type: 'variable' },
    { text: '=', type: 'plain' },
    { text: '"Mobile & Frontend"', type: 'string' }
  ],
  [
    { text: '      location', type: 'variable' },
    { text: '=', type: 'plain' },
    { text: '"Abu Dhabi, UAE"', type: 'string' }
  ],
  [
    { text: '    />', type: 'plain' }
  ],
  [
    { text: '  );', type: 'plain' }
  ],
  [
    { text: '};', type: 'plain' }
  ]
];

const tokenColors = {
  keyword: 'text-violet-400 font-semibold',
  string: 'text-emerald-400',
  variable: 'text-blue-400',
  component: 'text-amber-300',
  plain: 'text-slate-300'
};

export default function HeroVisual({ delay = 1 }: { delay?: number }) {
  const [typedLength, setTypedLength] = useState(0);
  const totalCharsRef = useRef(0);
  const totalChars = totalCharsRef.current || (totalCharsRef.current = codeLines.reduce(
    (acc, line) => acc + line.reduce((sum, token) => sum + token.text.length, 0),
    0
  ));

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const startTimeout = setTimeout(() => {
      timer = setInterval(() => {
        setTypedLength((prev) => {
          if (prev >= totalChars) {
            clearInterval(timer);
            return totalChars;
          }
          return prev + 1;
        });
      }, 35);
    }, delay * 1000);

    return () => {
      clearTimeout(startTimeout);
      if (timer) clearInterval(timer);
    };
  }, [totalChars, delay]);

  let globalCharCount = 0;
  let cursorAdded = false;

  return (
    <div className="relative w-full max-w-lg mx-auto flex items-center justify-center lg:py-0">
      <motion.div
        className="absolute -inset-4 bg-gradient-to-tr from-violet-600/10 to-fuchsia-600/10 blur-3xl rounded-full"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.7, 0.9, 0.7],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="relative w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: delay, ease: "easeOut" }}
      >
        <motion.div
          className="w-full"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div
            className="relative w-full bg-slate-950/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden cursor-default transition-colors duration-500"
            whileHover={{ 
              scale: 1.02,
              borderColor: 'rgba(139, 92, 246, 0.35)',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5), 0 0 50px rgba(139, 92, 246, 0.15)'
            }}
            transition={{ type: 'spring', stiffness: 150, damping: 20 }}
          >
            
          <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/5">
            <div className="flex gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/20" />
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-black/20 rounded-md border border-white/5">
              <span className="text-[10px] font-bold text-violet-400/80 uppercase">TSX</span>
              <span className="text-[11px] font-medium text-slate-400 tracking-wide">Developer.tsx</span>
            </div>
            <div className="w-12" />
          </div>

          <div className="p-6 font-mono text-[13px] leading-relaxed overflow-x-auto min-h-[260px] bg-slate-950/50">
            {codeLines.map((line, lineIndex) => {
              if (line.length === 0) return <div key={lineIndex} className="h-4" />;
              
              return (
                <div key={lineIndex} className="flex min-h-[20px]">
                  <span className="w-8 text-slate-700 select-none text-right pr-4 text-[11px]">
                    {lineIndex + 1}
                  </span>
                  <div className="flex flex-wrap whitespace-pre">
                    {line.map((token, tokenIndex) => {
                      const tokenLength = token.text.length;
                      const start = globalCharCount;
                      globalCharCount += tokenLength;
                      if (start >= typedLength) return null;
                      
                      const visibleLength = Math.min(tokenLength, typedLength - start);
                      const isSliced = visibleLength < tokenLength;
                      const textToShow = token.text.substring(0, visibleLength);
                      const shouldShowCursor = !cursorAdded && (isSliced || (typedLength === start + visibleLength && typedLength < totalChars));
                      if (shouldShowCursor) cursorAdded = true;

                      return (
                        <span key={tokenIndex} className={tokenColors[token.type]}>
                          {textToShow}
                          {shouldShowCursor && <span className="inline-block w-1.5 h-3.5 bg-violet-400 ml-0.5 animate-pulse" />}
                        </span>
                      );
                    })}
                  </div>
                  
                </div>
                
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  </div>
);
}