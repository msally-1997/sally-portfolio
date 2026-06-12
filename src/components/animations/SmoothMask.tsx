'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  delay?: number;
}

export default function SmoothMask({ children, delay = 0 }: Props) {
  return (
    <div className="relative overflow-hidden w-full flex justify-center -my-4">
      <motion.div
        className="py-4"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ 
          duration: 1, 
          delay: delay, 
          ease: [0.25, 1, 0.5, 1] 
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}