import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Star } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const GalleryCard = ({ src, index }) => {
  const { toast } = useToast();
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(ySpring, [-0.5, 0.5], ['12deg', '-12deg']);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ['-12deg', '12deg']);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleImageClick = () => {
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje 🚀",
      duration: 3000,
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleImageClick}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="rounded-3xl overflow-hidden shadow-2xl cursor-pointer glass-effect aspect-w-9 aspect-h-12 group"
    >
      <div
        style={{
          transform: 'translateZ(50px)',
          transformStyle: 'preserve-3d',
          border: '2px solid var(--theme-color-primary)',
          boxShadow: `0 0 25px -5px var(--theme-color-secondary), 0 0 15px -10px var(--theme-color-primary) inset`,
          borderRadius: '1.5rem',
        }}
        className="w-full h-full"
      >
        <img 
          src={src} 
          alt={`Estrella del contenido ${index + 1}`} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-3xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <p className="text-white text-lg font-semibold" style={{ transform: 'translateZ(20px)' }}>Ver Perfil</p>
        </div>
      </div>
    </motion.div>
  );
};

const GallerySection = () => {
  const images = [
    "https://storage.googleapis.com/hostinger-horizons-assets-prod/5d663405-1ef2-4954-9803-10b090e62e83/fa2a3c37b8f50bbcc2416a34a291e6ee.webp",
    "https://storage.googleapis.com/hostinger-horizons-assets-prod/5d663405-1ef2-4954-9803-10b090e62e83/9aa4d2b20b591a9e33d4d652df396162.webp",
    "https://storage.googleapis.com/hostinger-horizons-assets-prod/5d663405-1ef2-4954-9803-10b090e62e83/d35950ef5bcaa6d832c166ce48ee6907.webp"
  ];

  return (
    <section className="py-20 px-4 relative" style={{ perspective: '1000px' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Star className="h-12 w-12" style={{ color: 'var(--theme-color-primary)' }} />
            <h2 className="text-5xl md:text-6xl font-montserrat font-black text-white text-glow">
              Galería de Estrellas
            </h2>
            <Star className="h-12 w-12" style={{ color: 'var(--theme-color-primary)' }} />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-roboto-condensed">
            Una muestra de las estrellas que encontrarás en nuestro contenido exclusivo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {images.map((src, index) => (
            <GalleryCard key={index} src={src} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;