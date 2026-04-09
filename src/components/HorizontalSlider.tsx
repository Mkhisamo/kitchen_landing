import { useState, useRef, useEffect, ReactNode } from 'react';

interface HorizontalSliderProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  className?: string;
  contentClassName?: string;
}

export function HorizontalSlider<T>({
  items,
  renderItem,
  className = '',
  contentClassName = '',
}: HorizontalSliderProps<T>) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.offsetWidth;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(newIndex);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCard = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = container.offsetWidth;
    container.scrollTo({
      left: cardWidth * index,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div
        ref={scrollContainerRef}
        className={`flex overflow-x-auto snap-x snap-mandatory scrollbar-hide ${className}`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-full snap-center ${contentClassName}`}
          >
            {renderItem(item, index)}
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToCard(index)}
            className={`h-2 rounded-full transition-all ${
              index === activeIndex
                ? 'bg-[#252222] w-6'
                : 'bg-[#c4c4c4] w-2'
            }`}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}