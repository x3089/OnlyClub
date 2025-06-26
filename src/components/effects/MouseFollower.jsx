
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-96 h-96 rounded-full pointer-events-none z-50"
      style={{
        x: mousePosition.x - 192,
        y: mousePosition.y - 192,
        background: `radial-gradient(circle, color-mix(in srgb, var(--theme-color-primary) 30%, transparent) 0%, transparent 70%)`,
        opacity: 0.5,
        filter: 'blur(30px)',
      }}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
    />
  );
};

export default MouseFollower;
