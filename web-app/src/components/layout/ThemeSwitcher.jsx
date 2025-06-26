import React from 'react';
import { Palette, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from 'framer-motion';

const ThemeSwitcher = ({ setThemeColor, currentColor }) => {
  const colors = [
    { name: 'Rosa', value: '#ff006e' },
    { name: 'Púrpura', value: '#8338ec' },
    { name: 'Azul', value: '#3a86ff' },
    { name: 'Verde', value: '#06ffa5' },
    { name: 'Amarillo', value: '#ffbe0b' },
    { name: 'Naranja', value: '#fb5607' },
    { name: 'Cian', value: '#00f5d4' },
    { name: 'Rojo', value: '#ef233c' },
  ];

  return (
    <div className="fixed top-6 right-6 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full w-12 h-12 pulse-glow"
              style={{ 
                borderColor: currentColor, 
                color: currentColor,
                '--theme-color-primary': currentColor,
                '--theme-color-secondary': currentColor,
              }}
            >
              <Palette className="h-6 w-6" />
            </Button>
          </motion.div>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align="end" 
          className="glass-effect rounded-2xl border-gray-700 p-4 w-64"
        >
          <DropdownMenuLabel className="text-lg font-bold text-white text-center mb-2 font-montserrat">
            Personaliza tu Tema
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-gray-600/50" />
          <div className="grid grid-cols-4 gap-3 mt-4">
            {colors.map((color) => (
              <motion.div
                key={color.value}
                whileHover={{ scale: 1.15, y: -2 }}
                className="w-12 h-12 rounded-full cursor-pointer"
                onClick={() => setThemeColor(color.value)}
                style={{ backgroundColor: color.value }}
                aria-label={color.name}
              >
                {currentColor === color.value && (
                  <div className="w-full h-full flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    >
                      <Check className="h-6 w-6 text-white" style={{ mixBlendMode: 'difference' }} />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ThemeSwitcher;