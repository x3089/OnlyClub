import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AnimatedBackground = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']); // Ajustado para menor movimiento

  return (
    <motion.div 
      className="fixed inset-0 dark-gradient-bg -z-20 opacity-50" // Opacidad reducida para que el DynamicBackground sea más visible
      style={{ y: backgroundY }}
    />
  );
};

export default AnimatedBackground;