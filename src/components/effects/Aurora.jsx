import React from 'react';
import { motion } from 'framer-motion';

const Aurora = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        className="aurora-effect"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      ></motion.div>
    </div>
  );
};

export default Aurora;