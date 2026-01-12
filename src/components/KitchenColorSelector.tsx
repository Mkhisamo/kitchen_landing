import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ColorOption {
  id: string;
  name: string;
  description: string;
  color: string;
  image: string;
}

interface Kitchen {
  id: string;
  name: string;
  specs: string;
  description: string;
  priceMin: number;
  priceMax: number;
  colors: ColorOption[];
}

interface KitchenColorSelectorProps {
  kitchens: Kitchen[];
}

export function KitchenColorSelector({ kitchens }: KitchenColorSelectorProps) {
  const [currentKitchenIndex, setCurrentKitchenIndex] = useState(0);
  const [activeColorId, setActiveColorId] = useState(kitchens[0].colors[0].id);
  
  const currentKitchen = kitchens[currentKitchenIndex];
  const activeColor = currentKitchen.colors.find(opt => opt.id === activeColorId) || currentKitchen.colors[0];

  const handleKitchenChange = (newIndex: number) => {
    setCurrentKitchenIndex(newIndex);
    setActiveColorId(kitchens[newIndex].colors[0].id);
  };

  const handlePrevKitchen = () => {
    const newIndex = currentKitchenIndex === 0 ? kitchens.length - 1 : currentKitchenIndex - 1;
    handleKitchenChange(newIndex);
  };

  const handleNextKitchen = () => {
    const newIndex = currentKitchenIndex === kitchens.length - 1 ? 0 : currentKitchenIndex + 1;
    handleKitchenChange(newIndex);
  };

  return (
    <div className="py-6">
      {/* Image Carousel with side arrows */}
      <div className="relative flex items-center gap-3 mb-4">
        {/* Left Arrow */}
        {kitchens.length > 1 && (
          <button
            onClick={handlePrevKitchen}
            className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-[#e5e5e5] flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
            aria-label="Предыдущая кухня"
          >
            <ChevronLeft className="w-5 h-5 text-[#252222]" />
          </button>
        )}

        {/* Image Container */}
        <div className="relative flex-1 h-[320px] bg-gray-100 rounded-2xl overflow-hidden">
          <AnimatePresence initial={false} mode="sync">
            <motion.div
              key={`${currentKitchen.id}-${activeColorId}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              className="absolute inset-0"
            >
              <img
                src={activeColor.image}
                alt="Кухня"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        {kitchens.length > 1 && (
          <button
            onClick={handleNextKitchen}
            className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-[#e5e5e5] flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
            aria-label="Следующая кухня"
          >
            <ChevronRight className="w-5 h-5 text-[#252222]" />
          </button>
        )}
      </div>

      {/* Kitchen Name and Specs */}
      <div className="mb-6">
        <h3 className="mb-1" style={{ color: '#252222' }}>
          {currentKitchen.name}
        </h3>
        <p className="text-[14px]" style={{ color: '#505d68' }}>
          {currentKitchen.specs}
        </p>
      </div>

      {/* Color Selector */}
      <div className="mb-6">
        <h4 className="mb-2" style={{ color: '#252222' }}>
          Выберите цвет фасада:
        </h4>
        <p className="text-[13px] mb-4" style={{ color: '#505d68' }}>
          {currentKitchen.description}
        </p>
        
        <div className="flex gap-3">
          {currentKitchen.colors.map((option) => (
            <button
              key={option.id}
              onClick={() => setActiveColorId(option.id)}
              className={`
                w-10 h-10 rounded-full transition-all flex-shrink-0
                ${
                  activeColorId === option.id
                    ? 'ring-2 ring-offset-2'
                    : 'hover:scale-110'
                }
              `}
              style={{ 
                backgroundColor: option.color,
                ringColor: activeColorId === option.id ? '#71a1f2' : 'transparent'
              }}
              aria-label={`${option.name} - ${option.description}`}
            />
          ))}
        </div>
      </div>

      {/* Price Block */}
      <div className="mb-6">
        <h4 className="mb-2" style={{ color: '#252222' }}>
          Стоимость кухни
        </h4>
        <p className="mb-1" style={{ color: '#252222' }}>
          {currentKitchen.priceMin.toLocaleString('ru-RU')} ₽ - {currentKitchen.priceMax.toLocaleString('ru-RU')} ₽
        </p>
        <p className="text-[12px]" style={{ color: '#505d68' }}>
          В стоимость не входит: техника, смесители, мойка и столешница
        </p>
      </div>
    </div>
  );
}
