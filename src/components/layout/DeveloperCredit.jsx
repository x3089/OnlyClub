import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const DeveloperCredit = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, delay: 2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-5 left-5 z-50"
    >
      <div className="group relative">
        <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[var(--theme-color-primary)] to-[var(--theme-color-secondary)] opacity-50 blur transition duration-500 group-hover:opacity-100 group-hover:duration-200"></div>
        <div className="relative flex items-center gap-2 glass-effect text-white text-xs px-4 py-2 rounded-full shadow-lg font-roboto-condensed shine-on-hover">
          <Sparkles className="w-3 h-3 text-[var(--theme-color-primary)] animate-pulse" />
          <span>Página desarrollada por Astra</span>
        </div>
      </div>
    </motion.div>
  );
};

export default DeveloperCredit;