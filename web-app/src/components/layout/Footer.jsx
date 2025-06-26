import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-16 px-4 relative mt-20">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--theme-color-primary)]/50 to-transparent"></div>
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center gap-4 mb-6"
        >
          <span className="text-4xl font-montserrat font-black text-glow">
            ✧✦✧ Of Connect ✦✧✦
          </span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-gray-400 mb-8 font-roboto-condensed text-lg"
        >
          La cúspide del entretenimiento exclusivo para adultos.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center gap-x-4 gap-y-2 flex-wrap text-sm text-gray-500"
        >
          <span>© 2025 Of Connect. Todos los derechos reservados.</span>
          <span className="hidden md:inline">•</span>
          <span>Contenido destinado a mayores de 18 años.</span>
          <span className="hidden md:inline">•</span>
          <span>Términos de Servicio</span>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;