import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Users, Shield } from 'lucide-react';

const CTASection = () => {
  const { toast } = useToast();

  const handleJoinServer = () => {
    window.open('https://discord.gg/kay3wAj5cm', '_blank');
  };

  const handleFeatureClick = (feature) => {
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje 🚀",
      duration: 3000,
    });
  };

  return (
    <section className="py-20 px-4 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center"
      >
        <div 
          className="elegant-card glass-effect rounded-3xl p-12"
        >
          <h2 className="text-4xl md:text-5xl font-montserrat font-black text-white mb-6 text-shadow">
              ¿Listo para la Experiencia Premium?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-roboto-condensed">
            Únete a miles de usuarios que ya disfrutan del mejor contenido NSFW en Discord
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              onClick={handleJoinServer}
              className="px-12 py-6 text-xl font-bold rounded-full pulse-glow hover-lift sparkle"
              style={{ 
                background: `linear-gradient(to right, var(--theme-color-primary), var(--theme-color-secondary))`,
                boxShadow: `0 0 20px var(--theme-color-primary)`
              }}
              size="lg"
            >
              <Users className="mr-3 h-6 w-6" />
              Unirse al Servidor
            </Button>
            
            <Button
              onClick={() => handleFeatureClick('info')}
              variant="outline"
              className="px-8 py-6 text-lg font-semibold rounded-full hover-lift"
              style={{
                borderColor: 'var(--theme-color-primary)',
                color: 'var(--theme-color-primary)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--theme-color-primary)';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--theme-color-primary)';
              }}
              size="lg"
            >
              <Shield className="mr-2 h-5 w-5" />
              Más Información
            </Button>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            <p>🔞 Solo para mayores de 18 años • Contenido NSFW • Servidor verificado</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;