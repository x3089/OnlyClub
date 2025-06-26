
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import BoostBenefitsSection from '@/components/sections/BoostBenefitsSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/layout/Footer';
import DynamicBackground from '@/components/effects/DynamicBackground';
import FloatingBubbles from '@/components/effects/FloatingBubbles';
import ScrollIndicator from '@/components/effects/ScrollIndicator';
import DeveloperCredit from '@/components/layout/DeveloperCredit';
import ThemeSwitcher from '@/components/layout/ThemeSwitcher';
import ContactSection from '@/components/sections/ContactSection';
import GallerySection from '@/components/sections/GallerySection';
import Vignette from '@/components/effects/Vignette';
import CustomCursor from '@/components/effects/CustomCursor';

function App() {
  const [themeColor, setThemeColor] = useState('#ff006e');

  useEffect(() => {
    document.documentElement.style.setProperty('--theme-color-primary', themeColor);
    const secondaryColor = lightenColor(themeColor, 30);
    document.documentElement.style.setProperty('--theme-color-secondary', secondaryColor);
  }, [themeColor]);

  function lightenColor(hex, percent) {
    hex = hex.replace(/^#/, '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    const newR = Math.min(255, r + Math.floor((255 - r) * (percent / 100)));
    const newG = Math.min(255, g + Math.floor((255 - g) * (percent / 100)));
    const newB = Math.min(255, b + Math.floor((255 - b) * (percent / 100)));

    return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
  }

  const bgImageUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/5d663405-1ef2-4954-9803-10b090e62e83/2394490c26343e02fa25a0e7a16cd5bb.webp";

  return (
    <>
      <Helmet>
        <title>Of Connect - Servidor Discord NSFW Premium</title>
        <meta name="description" content="Únete al servidor Discord NSFW más exclusivo con 500+ videos hot, contenido OnlyFans exclusivo y beneficios premium para boosters." />
      </Helmet>

      <div className="min-h-screen relative overflow-hidden">
        <CustomCursor />
        <Vignette />
        <DeveloperCredit />
        <ThemeSwitcher setThemeColor={setThemeColor} currentColor={themeColor} />
        <ScrollIndicator />
        <DynamicBackground imageUrl={bgImageUrl} />
        <FloatingBubbles />

        <main>
          <HeroSection />
          <FeaturesSection />
          <BoostBenefitsSection />
          <GallerySection />
          <ContactSection />
          <CTASection />
        </main>
        
        <Footer />

        <Toaster />
      </div>
    </>
  );
}

export default App;
