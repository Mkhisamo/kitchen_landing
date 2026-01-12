import { useState, useRef, useEffect } from 'react';

interface GuaranteeCard {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

const guarantees: GuaranteeCard[] = [
  {
    id: 1,
    title: 'Кухня за 30 дней',
    subtitle: ' От замера до полной установки всего 30 дней. Срок фиксируем в договоре',
    image: 'https://images.unsplash.com/photo-1610177534644-34d881503b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY3ODM5ODYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    title: '2 года гарантии',
    subtitle: 'По договору на кухню. Качество, на которое можно положиться',
    image: 'https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc2Nzg4NzQyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    title: '1000+ проектов',
    subtitle: 'Доверие тысяч клиентов. Мы знаем, как сделать вашу кухню идеальной',
    image: 'https://images.unsplash.com/photo-1665507279458-b21dea52c447?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBraXRjaGVufGVufDF8fHx8MTc2NzkzMTE5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function SocialGuarantees() {
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
    <section className="py-12 bg-white border-t border-[#c4c4c4]">
      {/* Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {guarantees.map((guarantee, index) => (
          <div
            key={guarantee.id}
            className="flex-shrink-0 w-full snap-center px-6"
          >
            {/* Card */}
            <div className="relative h-[240px] rounded-2xl overflow-hidden">
              {/* Background Image */}
              <img
                src={guarantee.image}
                alt={guarantee.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-white text-[28px] font-bold mb-1 leading-[1.1]">
                  {guarantee.title}
                </h3>
                <p className="text-white/90 text-[14px] leading-[1.3]">
                  {guarantee.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {guarantees.map((_, index) => (
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
    </section>
  );
}