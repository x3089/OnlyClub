
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FloatingBubbles = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const generateBubbles = () => {
      const newBubbles = [];
      const numBubbles = window.innerWidth < 768 ? 20 : 40;
      for (let i = 0; i < numBubbles; i++) {
        newBubbles.push({
          id: i,
          x: Math.random() * 100,
          size: 10 + Math.random() * 80,
          duration: 10 + Math.random() * 20,
          delay: Math.random() * 15,
        });
      }
      setBubbles(newBubbles);
    };

    generateBubbles();
    window.addEventListener('resize', generateBubbles);
    return () => window.removeEventListener('resize', generateBubbles);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {bubbles.map((b) => (
        <motion.div
          key={b.id}
          className="bubble"
          style={{
            left: `${b.x}%`,
            width: b.size,
            height: b.size,
          }}
          initial={{ y: '110vh', opacity: 0 }}
          animate={{
            y: '-20vh',
            opacity: [0, 0.7, 0.7, 0],
          }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBubbles;
