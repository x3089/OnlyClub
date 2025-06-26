import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      const target = e.target;
      if (target.closest('button, a, [data-cursor-hover]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const cursorVariants = {
    default: {
      scale: 1,
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      border: "2px solid var(--theme-color-primary)",
    },
    hover: {
      scale: 2.5,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      border: "2px solid var(--theme-color-secondary)",
    },
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        variants={cursorVariants}
        animate={isHovering ? "hover" : "default"}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] bg-white"
        style={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 20 }}
      />
    </>
  );
};

export default CustomCursor;