import React from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';

const GirlsShowcaseSection = ({ images }) => {
  const { toast } = useToast();

  const handleImageClick = (index) => {
    toast({
      title: "✨ ¡Qué buena elección!",
      description: `Has hecho clic en la imagen ${index + 1}. Esta función podría expandir la imagen o llevar a una galería.`,
      duration: 3000,
    });
  };

  if (!images || images.length === 0) {
    return null;
  }

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
            Nuestras Estrellas
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-roboto-condensed">
            Conoce a algunas de las chicas que encontrarás en nuestro servidor exclusivo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="rounded-3xl overflow-hidden shadow-2xl cursor-pointer glass-effect aspect-w-9 aspect-h-12 group"
              onClick={() => handleImageClick(index)}
              style={{
                border: '2px solid var(--theme-color-primary)',
                boxShadow: `0 0 25px -5px var(--theme-color-secondary), 0 0 15px -10px var(--theme-color-primary) inset`
              }}
            >
              <img 
                src={src} 
                alt={`Chica destacada ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-lg font-semibold">Ver más</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GirlsShowcaseSection;