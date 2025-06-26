
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Users, Play, Crown, Zap } from 'lucide-react';

const HeroSection = () => {
  const handleJoinServer = () => {
    window.open('https://discord.gg/kay3wAj5cm', '_blank');
  };

  const stats = [
    { icon: Play, number: "500+", label: "Videos Hot" },
    { icon: Crown, number: "50+", label: "OnlyFans Exclusivo" },
    { icon: Users, number: "10K+", label: "Miembros Activos" },
    { icon: Zap, number: "24/7", label: "Contenido Nuevo" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 sm:pt-0">
      <div className="text-center max-w-6xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-7xl md:text-9xl font-cinzel font-bold text-white mb-6 text-glow"
          style={{ color: 'var(--theme-color-primary)' }}
        >
          Of Connect
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-xl md:text-2xl mb-12 text-gray-300"
        >
          Tu Conexión Exclusiva al Contenido Premium
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
        >
          <Button
            onClick={handleJoinServer}
            className="px-12 py-6 text-xl font-bold rounded-full pulse-glow hover-lift sparkle"
            style={{ 
              background: `linear-gradient(to right, var(--theme-color-primary), var(--theme-color-secondary))`,
              boxShadow: `0 0 20px var(--theme-color-primary)`
            }}
            size="lg"
            data-cursor-hover
          >
            <Users className="mr-3 h-6 w-6" />
            ¡Únete Ahora!
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="glass-effect rounded-2xl p-6 hover-lift"
              whileHover={{ scale: 1.05 }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                delay: index * 0.2 + 1.5,
                repeat: Infinity,
              }}
              data-cursor-hover
            >
              <stat.icon className="h-8 w-8 mx-auto mb-2" style={{ color: 'var(--theme-color-primary)' }} />
              <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
