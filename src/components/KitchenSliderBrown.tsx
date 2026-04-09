import { HorizontalSlider } from './HorizontalSlider';

interface GuaranteeCard {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

import img1 from '../assets/1_brown.jpg';
import img2 from '../assets/2_brown.jpg';
import img3 from '../assets/3_brown.jpg';
import img4 from '../assets/4_brown.jpg';
import img5 from '../assets/5_brown.jpg';


const guarantees: GuaranteeCard[] = [
  {
    id: 1,
    title: 'Кухня за 15 дней',
    subtitle: 'От замера до полной установки всего 15 дней. Срок фиксируем в договоре',
    image: img1,
  },
  {
    id: 2,
    title: '1.5 года гарантии',
    subtitle: 'По договору на кухню. Качество, на которое можно положиться',
    image: img2,
  },
  {
    id: 3,
    title: '1000+ проектов',
    subtitle: 'Доверие тысяч клиентов. Мы знаем, как сделать вашу кухню идеальной',
    image: img3,
  },
  {
    id: 4,
    title: '500+ дизайнов кухонь',
    subtitle: 'Подбираем фасады и цвета — чтобы кухня выглядела “вашей”.',
    image: img4,
  },
  {
    id: 5,
    title: 'Индивидуальный подход',
    subtitle: 'Учтём все ваши пожелания и бюджет',
    image: img5,
  },
 
];

type KitchenSliderProps = {
  embedded?: boolean;
};

export function KitchenSliderBrown({ embedded = false }: KitchenSliderProps) {
  return (
    <section className={embedded ? "bg-white" : "py-12 bg-white border-t border-[#c4c4c4]"}>
      <HorizontalSlider
        contentClassName={embedded ? "" : "px-2"}
        dotsClassName={embedded ? "mt-2 mb-0" : "mt-6"}
        renderItem={(guarantee) => (
          <div className={`relative h-[240px] overflow-hidden ${embedded ? "" : "rounded-2xl"}`}>
            <img
              src={guarantee.image}
              alt={guarantee.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Градиент и текст удалены — только чистое изображение */}
          </div>
        )}
        items={guarantees}
      />
    </section>
  );
}