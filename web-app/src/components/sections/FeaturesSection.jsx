import React from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Play, Crown, Zap, Lock, Shield, Sparkles } from 'lucide-react';

const FeaturesSection = () => {
  const { toast } = useToast();

  const handleFeatureClick = (feature) => {
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje 🚀",
      duration: 3000,
    });
  };

  const features = [
    {
      icon: Play,
      title: "500+ Videos Hot",
      description: "Colección masiva de contenido premium actualizada diariamente",
      feature: "videos"
    },
    {
      icon: Crown,
      title: "OnlyFans Vault",
      description: "50+ creadores exclusivos con contenido que no encontrarás en otro lugar",
      feature: "onlyfans"
    },
    {
      icon: Zap,
      title: "Actualizaciones Diarias",
      description: "Nuevo contenido cada día para mantener la experiencia fresca",
      feature: "updates"
    },
    {
      icon: Lock,
      title: "Contenido Boost-Only",
      description: "Acceso exclusivo a material premium solo para boosters",
      feature: "boost"
    },
    {
      icon: Shield,
      title: "Servidor Seguro",
      description: "Ambiente protegido y moderado para una experiencia segura",
      feature: "security"
    },
    {
      icon: Sparkles,
      title: "Comunidad VIP",
      description: "Únete a una comunidad exclusiva de usuarios premium",
      feature: "community"
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-montserrat font-black text-white mb-6">
            Contenido Exclusivo
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-roboto-condensed">
            Descubre el contenido más hot y exclusivo en nuestro servidor premium
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-effect rounded-3xl p-8 hover-lift sparkle cursor-pointer"
              onClick={() => handleFeatureClick(item.feature)}
              whileHover={{ scale: 1.02 }}
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 floating-animation"
                style={{ background: `linear-gradient(to right, var(--theme-color-primary), var(--theme-color-secondary))`}}
              >
                <item.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-montserrat">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;