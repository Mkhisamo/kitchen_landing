import { HorizontalSlider } from './HorizontalSlider';

interface GuaranteeCard {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

import img1 from '../assets/1_white.jpg';
import img2 from '../assets/2_white.jpg';
import img3 from '../assets/3_white.jpg';
import img4 from '../assets/4_white.jpg';
import img5 from '../assets/5_white.jpg';
import img6 from '../assets/6_white.jpg';

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
  {
    id: 6,
    title: 'Бесплатный замер',
    subtitle: 'Выезжаем на объект, делаем точные замеры и 3D-проект',
    image: img6,
  },
];

type SocialGuaranteesProps = {
  embedded?: boolean;
};

export function KitchenSlider({ embedded = false }: SocialGuaranteesProps) {
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

            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />

            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <h3 className="text-white text-[28px] font-bold mb-1 leading-[1.1]">
                {guarantee.title}
              </h3>
              <p className="text-white/90 text-[14px] leading-[1.3]">
                {guarantee.subtitle}
              </p>
            </div>
          </div>
        )}
        items={guarantees}
      />
    </section>
  );
}