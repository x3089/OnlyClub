
import React from 'react';
import { motion, useScroll } from 'framer-motion';

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div 
      className="scroll-indicator"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollIndicator;
