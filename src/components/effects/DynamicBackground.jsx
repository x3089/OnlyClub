import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const DynamicBackground = ({ imageUrl }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <div className="fixed inset-0 -z-30 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${imageUrl})`,
          y: y,
        }}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
    </div>
  );
};

export default DynamicBackground;