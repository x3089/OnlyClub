import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Lensflare = () => {
  const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-soft-light"
      style={{
        x: mousePosition.x - 150,
        y: mousePosition.y - 150,
      }}
      animate={{
        x: mousePosition.x - 150,
        y: mousePosition.y - 150,
      }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div 
        className="w-80 h-80 rounded-full"
        style={{
          background: `radial-gradient(circle, var(--theme-color-primary) 0%, transparent 60%)`,
          opacity: 0.1,
          filter: 'blur(40px)',
        }}
      />
    </motion.div>
  );
};

export default Lensflare;