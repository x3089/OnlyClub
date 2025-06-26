import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Crown, Lock, Star, Heart, Gift, Flame, Zap, MessageCircle, Download, Sparkles } from 'lucide-react';

const BoostBenefitsSection = () => {
  const { toast } = useToast();

  const handleFeatureClick = (feature) => {
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje 🚀",
      duration: 3000,
    });
  };

  const secretContentBenefits = [
    { icon: Star, text: "Acceso a canales privados exclusivos" },
    { icon: Heart, text: "Contenido premium de creadores top" },
    { icon: Gift, text: "Drops especiales solo para boosters" },
    { icon: Flame, text: "Material ultra exclusivo y limitado" },
  ];

  const vipPrivileges = [
    { icon: Zap, text: "Rol especial y reconocimiento" },
    { icon: MessageCircle, text: "Chat directo con moderadores" },
    { icon: Download, text: "Descargas ilimitadas de contenido" },
    { icon: Sparkles, text: "Acceso anticipado a nuevas funciones" },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Crown className="h-12 w-12" style={{ color: 'var(--theme-color-primary)' }} />
            <h2 className="text-5xl md:text-6xl font-montserrat font-black text-white text-glow">
                Beneficios Boost
            </h2>
            <Crown className="h-12 w-12" style={{ color: 'var(--theme-color-primary)' }} />
          </div>
          <p className="text-xl text-gray-300 font-roboto-condensed">
            Desbloquea contenido exclusivo y privilegios VIP
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="elegant-card glass-effect rounded-3xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: `linear-gradient(to right, var(--theme-color-primary), var(--theme-color-secondary))`}}>
                <Lock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white font-montserrat text-shadow">Contenido Secreto</h3>
            </div>
            <ul className="space-y-4 text-gray-300">
              {secretContentBenefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <benefit.icon className="h-5 w-5" style={{ color: 'var(--theme-color-primary)' }} />
                  {benefit.text}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="elegant-card glass-effect rounded-3xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: `linear-gradient(to right, var(--theme-color-primary), var(--theme-color-secondary))`}}>
                <Crown className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white font-montserrat text-shadow">Privilegios VIP</h3>
            </div>
            <ul className="space-y-4 text-gray-300">
              {vipPrivileges.map((privilege, index) => (
                <li key={index} className="flex items-center gap-3">
                  <privilege.icon className="h-5 w-5" style={{ color: 'var(--theme-color-primary)' }} />
                  {privilege.text}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            onClick={() => handleFeatureClick('boost')}
            className="px-16 py-8 text-2xl font-bold rounded-full pulse-glow hover-lift sparkle"
            style={{ 
              background: `linear-gradient(to right, var(--theme-color-primary), var(--theme-color-secondary))`,
              boxShadow: `0 0 20px var(--theme-color-primary)`
            }}
            size="lg"
          >
            <Crown className="mr-4 h-8 w-8" />
            ¡Boost el Servidor!
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BoostBenefitsSection;