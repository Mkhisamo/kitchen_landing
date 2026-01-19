import { useState } from "react";
import svgPaths from "./imports/svg-d7lne801bq";
import { KitchenColorSelector } from "./components/KitchenColorSelector";
import { SocialGuarantees } from "./components/SocialGuarantees";
import { SocialGuaranteesCards } from "./components/SocialGuaranteesCards";
import imgImage445 from "figma:asset/dfeed84b53fe90ab806f4ba10cecc52b16be2904.png";
import imgImage1 from "figma:asset/b1cc1be4db896dcf66b308053b2e38f7a0212fbd.png";
import imgImage2 from "figma:asset/6889aff08893a09dbdd385c7eefe9ae4aef455ac.png";
import imgImage3 from "figma:asset/c5bce13a313f923eeac36127e98747f7df79ca4f.png";
import imgImage407 from "figma:asset/a060be44f0f9bf9b40b61aac0c6ac676a96571da.png";
import imgImage409 from "figma:asset/e9bc023a8b6bc50bdf230b9e6efb39db5239cd32.png";
import imgImage446 from "figma:asset/a1f35d5161ae57ac88cab72b70a276cc887e29db.png";
import imgImage447 from "figma:asset/799d395f669fefa2ff07a072d4bc05b18cb5aefc.png";
import imgImage448 from "figma:asset/b191d0ae43e37909dfb15347f3c0b6dda4bab220.png";
import imgImage449 from "figma:asset/8b080f4eb0bd90d6ac50600faff38ee8b771fdd0.png";
import imgImage450 from "figma:asset/ad8a8cc1a9e476cc38fb60eba54cacbdec4cd805.png";
import imgImage452 from "figma:asset/8313ff8a05d2949779795c13f879698f11301755.png";
import imgImage453 from "figma:asset/63c40d05f3ce523a63b8ee610f8aa47736436cbc.png";
import imgImage455 from "figma:asset/5a09f1f0ff5fd1e16085524d9aaff977f4b6bb31.png";
import imgImage29 from "figma:asset/d6fdb1b1d10a2f7373f3ae707f85e90836464903.png";
import imgImage5 from "figma:asset/b8072642a1a13c5d344d712bcff176c3dd2359c3.png";
import imgImage423 from "figma:asset/24d6539802b28b85f975b08be57a077c78c13ceb.png";
import imgImage424 from "figma:asset/b0e511f5bc12bf6de62d07206e6ac6e4c567e6e9.png";
import { PaymentMethods } from "./components/PaymentMethods";


// Новые изображения для кухни Лаорна (разные цвета фасадов)
import imgLaornaSeryy from "figma:asset/fb1a6ffc81653880f39f287fc68fa102bf1bd34e.png";
import imgLaornaBeliy from "figma:asset/a0bfab2cdcf3f0593f999e69024d8727a3f38ddd.png";
import imgLaornaZelenyy from "figma:asset/16879e8486d48e0dce2cf08a59f72b94ec14153d.png";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Слайдер кухонь клиентов (2 слайда)
const [clientSlide, setClientSlide] = useState(0);

const clientSlides = [
  {
    img: imgImage452,
    title: "Эккервуд",
    area: "8м2",
    size: "Ш 2.2м × В 1.8м",
    price: "85 000 ₽",
  },
  {
    img: imgImage453,
    title: "Калеста",
    area: "10м2",
    size: "Ш 2.6м × В 2.0м",
    price: "110 000 ₽",
  },
];


  // Данные для блока выбора цвета фасадов
  const kitchensData = [
    {
      id: 'laorna',
      name: 'Кухня Лаорна',
      specs: 'S 12 М2 | ПРЯМАЯ | Ш 220 СМ Х 180 СМ',
      description: 'Выберите цвет нижних фасадов, чтобы увидеть кухню в разных решениях.',
      priceMin: 87500,
      priceMax: 110000,
      colors: [
        {
          id: 'lunnyy',
          name: 'Лунный бархат',
          description: 'приглушённый зелёно-серый',
          color: '#8aa3a0',
          image: imgLaornaZelenyy,
        },
        {
          id: 'seryy',
          name: 'Серый туман',
          description: 'графитово-серый',
          color: '#4b4f55',
          image: imgLaornaSeryy,
        },
        {
          id: 'pesochnyy',
          name: 'Песочный берег',
          description: 'тёплый бежевый',
          color: '#d4c4a8',
          image: imgLaornaBeliy,
        },
      ],
    },
    {
      id: 'moderna',
      name: 'Кухня Модерна',
      specs: 'S 15 М2 | Г-ОБРАЗНАЯ | Ш 250 СМ Х 200 СМ',
      description: 'Выберите цвет нижних фасадов, чтобы увидеть кухню в разных решениях.',
      priceMin: 92300,
      priceMax: 125000,
      colors: [
        {
          id: 'seryy2',
          name: 'Серый туман',
          description: 'графитово-серый',
          color: '#4b4f55',
          image: imgLaornaZelenyy,
        },
        {
          id: 'taezhnaya2',
          name: 'Таёжная роща',
          description: 'глубокий зелёный',
          color: '#5f6f4a',
          image: imgLaornaSeryy,
        },
        {
          id: 'belaya',
          name: 'Белый шёлк',
          description: 'чистый белый',
          color: '#f5f5f0',
          image: imgLaornaBeliy,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white font-['Ubuntu',sans-serif]">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-[#e5e5e5] shadow-sm">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="w-[68px] h-[41px]">
            <svg
              className="w-full h-full"
              fill="none"
              viewBox="0 0 68 41.48"
            >
              <path
                clipRule="evenodd"
                d={svgPaths.p1d15f100}
                fill="#424B5A"
                fillRule="evenodd"
              />
            </svg>
          </div>

          {/* Menu Icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-8 h-8 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-3"
              fill="none"
              viewBox="0 0 18 12"
            >
              <path
                clipRule="evenodd"
                d={svgPaths.p3ad3ff00}
                fill="#424B5A"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <img
          src={imgImage445}
          alt="Современная кухня"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(102,102,102,0.47)] to-[rgba(0,0,0,0.47)]" />

        {/* ВАЖНО: вместо justify-center делаем 2 зоны: текст сверху + CTA снизу */}
        <div className="relative h-full px-6 text-center text-white flex flex-col">
          {/* Тексты (3,4,5) — уменьшаем расстояния между строками */}
          <div className="pt-40">
            <div className="flex flex-col items-center gap-1">
              <h1 className="text-[28px] font-bold uppercase tracking-wide leading-tight">
                СДЕЛАЕМ
              </h1>

              <h2 className="text-[64px] font-bold uppercase leading-[0.9]">
                Кухню
              </h2>

              <h3 className="text-[24px] font-bold uppercase leading-tight">
                Для вашего дома
              </h3>

              <p className="text-[16px] leading-tight opacity-95">
                под вашу планировку и бюджет
              </p>

              <h2 className="text-[58px] font-bold uppercase leading-[0.9]">
                за 15 дней
              </h2>

            </div>
          </div>

          {/* Кнопка (1) — опускаем ниже через mt-auto, и (2) — уменьшаем отступ до текста */}
          <div className="mt-auto pb-20 flex flex-col items-center">
            <button className="w-full max-w-[288px] bg-white text-black px-8 py-3 rounded-lg uppercase text-[15px] font-medium hover:bg-gray-100 transition-colors">
              Получить дизайн кухни
            </button>

            <p className="text-[12px] mt-2 opacity-90">
              и готовую кухню у вас дома через 15 дней 
            </p>
          </div>
        </div>
      </section>


      {/* Наши кухни */}
      <section className="py-12 px-6 bg-white">
        <div className="mb-6">
          <h2 className="text-[32px] font-bold text-black mb-1">
            Наши кухни
          </h2>
          <p className="text-[18px] text-black">
            для разных планировок и метража
          </p>
        </div>

        {/* Kitchen Cards */}
        <div className="space-y-6">
          {/* Card 1 */}
          <div className="bg-white border border-[#e5e5e5] rounded-lg overflow-hidden">
            <div className="relative">
              <img
                src={imgImage1}
                alt="Эккервуд"
                className="w-full h-[240px] object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-[18px] font-bold text-black mb-1">
                Эккервуд
              </h3>
              <p className="text-[14px] text-black mb-0.5">
                S 12 м2 | ПРЯМАЯ | ш 220 см X 180 см
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-[#e5e5e5] rounded-lg overflow-hidden">
            <img
              src={imgImage2}
              alt="Калеста"
              className="w-full h-[240px] object-cover"
            />
            <div className="p-4">
              <h3 className="text-[18px] font-bold text-black mb-1">
                Калеста
              </h3>
              <p className="text-[14px] text-black mb-0.5">
                S 12 м2 | ПРЯМАЯ | ш 200 см X 180 см
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-[#e5e5e5] rounded-lg overflow-hidden">
            <img
              src={imgImage3}
              alt="Кухня"
              className="w-full h-[240px] object-cover"
            />
            <div className="p-4">
              <h3 className="text-[18px] font-bold text-black mb-1">
                Калеста
              </h3>
              <p className="text-[14px] text-black mb-0.5">
                S 18 м2 | УГЛОВАЯ  | ш 240 см X 170 см
              </p>
            </div>
          </div>
        </div>

        <button className="w-full mt-6 text-[14px] text-black underline">
          смотреть еще
        </button>

        <button className="w-full mt-4 bg-[#252222] text-white px-8 py-3 rounded-lg uppercase text-[15px] font-medium hover:bg-[#1a1818] transition-colors">
          Хочу вариант под мой метраж
        </button>
      </section>


      {/* Социальные гарантии */}
      <SocialGuarantees />

      {/* Продумываем кухню */}
<section className="py-12 px-6 bg-white border-t border-[#c4c4c4]">
  <div className="mb-6">
    <h2 className="text-[32px] font-bold text-black mb-1 leading-[1.05]">
      Продумываем кухню под реальные условия
    </h2>
    <p className="text-[18px] text-black">
      чтобы встала по размерам и была удобной
    </p>
  </div>

  <div className="space-y-6">
    {/* Card 1 */}
    <div className="bg-white border border-[#e5e5e5] rounded-lg overflow-hidden">
      <img
        src={imgImage407}
        alt="Встанет по размерам и коммуникациям"
        className="w-full h-[190px] object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="text-[20px] font-bold text-[#0e1012] mb-1 leading-tight">
          Встанет по размерам и коммуникациям
        </h3>
        <p className="text-[14px] text-[#505d68] leading-snug">
          Учтем ниши, трубы, розетки, газ, стояки и нестандартные углы
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white border border-[#e5e5e5] rounded-lg overflow-hidden">
      <img
        src={imgImage409}
        alt="Удобно готовить и хранить"
        className="w-full h-[190px] object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="text-[20px] font-bold text-[#0e1012] mb-1 leading-tight">
          Удобно готовить и хранить
        </h3>
        <p className="text-[14px] text-[#505d68] leading-snug">
          Продумаем хранение, рабочий треугольник и расстановку техники
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white border border-[#e5e5e5] rounded-lg overflow-hidden">
      <img
        src={imgImage446}
        alt="Легко поддерживать порядок"
        className="w-full h-[190px] object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="text-[20px] font-bold text-[#0e1012] mb-1 leading-tight">
          Легко поддерживать порядок
        </h3>
        <p className="text-[14px] text-[#505d68] leading-snug">
          Решения, которые упрощают уборку кухни и доступ к вещам
        </p>
      </div>
    </div>
  </div>

  <button className="w-full mt-8 bg-white text-black px-8 py-3 rounded-lg border border-black uppercase text-[15px] font-medium hover:bg-gray-50 transition-colors">
    Заказать проект кухни
  </button>
</section>


      {/* Выберите цвет фасада - финальный блок */}
      <section className="py-12 px-6 bg-white border-t border-[#c4c4c4]">
        <div className="mb-6">
          <h2 className="text-[32px] font-bold text-black mb-1 leading-[1.05]">
            Посмотрите, как будет выглядеть ваша кухня
          </h2>
          <p className="text-[18px] text-black mb-6">
            Меняйте цвет фасадов и сравнивайте варианты кухни
          </p>
        </div>

        <KitchenColorSelector kitchens={kitchensData} />
        
        <button className="w-full mt-6 bg-[#252222] text-white px-8 py-4 rounded-xl uppercase text-[15px] font-medium hover:bg-[#1a1818] transition-colors">
          Оставить заявку на расчет
        </button>
      </section>
      
      {/* Способы оплаты */}
      <PaymentMethods />
      
   {/* Как заказать */}
      <section className="py-12 px-6 bg-white border-t border-[#c4c4c4]">
        <div className="mb-8">

  <img
                src={imgImage409}
                alt="Хранение"
                className="w-full h-[180px] object-cover rounded mb-4"
              />

<div className="mb-2">
          <h2 className="text-[32px] font-bold text-black mb-1 leading-[1.05]">
             Закажите кухню в 3 ШАГА
          </h2>
          <p className="text-[18px] text-black">
            Начать можно с фото - мы подготовим врианты и
            расчет
          </p>
        </div>

          
        <div className="w-full h-11 mb-0.5" />
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {/* Step 1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full border-1 border-[#424b5a] bg-white flex items-center justify-center">
              <span className="text-[#a1aeb7] text-[24px] font-bold">
                1
              </span>
            </div>
            <div className="flex-1 pt-1">
              <h3 className="text-[24px] font-bold text-black mb-2">
                Пришлите размеры
              </h3>
              <p className="text-[14px] text-black">
                Планировка, метраж или фото - достаточно чтобы
                сделать первый вариант проекта
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full border-1 border-[#424b5a] bg-white flex items-center justify-center">
              <span className="text-[#a1aeb7] text-[24px] font-bold">
                2
              </span>
            </div>
            <div className="flex-1 pt-1">
              <h3 className="text-[24px] font-bold text-black mb-2">
                Дизайнер сдделает проект 
              </h3>
              <p className="text-[14px] text-black">
                Вы сравниваете и выбираете подходящий вариант
                дизайна кухни
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full border-1 border-[#424b5a] bg-white flex items-center justify-center">
              <span className="text-[#a1aeb7] text-[24px] font-bold">
                3
              </span>
            </div>
            <div className="flex-1 pt-1">
              <h3 className="text-[24px] font-bold text-black mb-2">
                Мы привезем вам готовую кухню
              </h3>
              <p className="text-[14px] text-black">
                В согласованные с вами сроки
              </p>
            </div>
          </div>
        </div>

        <button className="w-full mt-8 bg-[#252222] text-white px-8 py-3 rounded-lg uppercase text-[15px] font-medium hover:bg-[#1a1818] transition-colors">
          Получить консультацию
        </button>
      </section>

      {/* Быстрые ответы */}
      <section className="py-12 px-6 bg-white border-t border-[#c4c4c4]">
        <div className="mb-6">
          <h2 className="text-[32px] font-bold text-black mb-6 leading-tight">
            Быстрые ответы на ваши вопросы
          </h2>
        </div>

        {/* Video Cards */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Card 1 - Материалы */}
          <div className="relative h-[200px] rounded-lg overflow-hidden">
            <img
              src={imgImage448}
              alt="Материалы и фасады"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(102,102,102,0.47)] to-[rgba(0,0,0,0.47)]" />
             <div className="absolute inset-0 flex items-end p-4">
              <div className="text-white">
                <p className="text-[14px] font-bold mb-0.5">
                  ФАСАДЫ
                </p>
                <p className="text-[11px] font-bold">
                  что выбрать
                </p>
              </div>
            </div>
            {/* Compact play button */}
            <div className="absolute top-3 right-3">
              <div className="w-8 h-8 rounded-full border border-white bg-[rgba(255,255,255,0.3)] flex items-center justify-center backdrop-blur-sm">
                <svg
                  className="w-3 h-3 ml-0.5"
                  fill="white"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 2 - Цена */}
          <div className="relative h-[200px] rounded-lg overflow-hidden">
            <img
              src={imgImage450}
              alt="Цена"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(102,102,102,0.47)] to-[rgba(0,0,0,0.47)]" />
             <div className="absolute inset-0 flex items-end p-4">
              <div className="text-white">
                <p className="text-[14px] font-bold mb-1">
                  ЦЕНА
                </p>
                <p className="text-[11px] font-bold">
                  от чего зависит
                </p>
              </div>
            </div>
            <div className="absolute top-3 right-3">
              <div className="w-8 h-8 rounded-full border border-white bg-[rgba(255,255,255,0.3)] flex items-center justify-center backdrop-blur-sm">
                <svg
                  className="w-3 h-3 ml-0.5"
                  fill="white"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Card 3 - Планировка */}
          <div className="relative h-[200px] rounded-lg overflow-hidden">
            <img
              src={imgImage450}
              alt="Планировка"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(102,102,102,0.47)] to-[rgba(0,0,0,0.47)]" />
            <div className="absolute inset-0 flex items-end p-4">
              <div className="text-white">
                <p className="text-[14px] font-bold mb-1">
                  ПЛАНИРОВКА
                </p>
                <p className="text-[11px] font-bold">
                  как не ошибиться
                </p>
              </div>
            </div>
            <div className="absolute top-3 right-3">
              <div className="w-8 h-8 rounded-full border border-white bg-[rgba(255,255,255,0.3)] flex items-center justify-center backdrop-blur-sm">
                <svg
                  className="w-3 h-3 ml-0.5"
                  fill="white"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 4 - Кухни клиентов */}
          <div className="relative h-[200px] rounded-lg overflow-hidden">
            <img
              src={imgImage449}
              alt="Кухни клиентов"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(102,102,102,0.47)] to-[rgba(0,0,0,0.47)]" />
            <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4">
              <div className="absolute inset-0 flex items-end p-4">
              <div className="text-white">
                <p className="text-[14px] font-bold mb-1">
                  НАШИ КУХНИ
                </p>
                <p className="text-[11px] font-bold">
                  дома у килиентов
                </p>
              </div>
            </div>
            </div>
            <div className="absolute top-3 right-3">
              <div className="w-8 h-8 rounded-full border border-white bg-[rgba(255,255,255,0.3)] flex items-center justify-center backdrop-blur-sm">
                <svg
                  className="w-3 h-3 ml-0.5"
                  fill="white"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* О компании */}
      <section className="py-12 px-6 bg-white border-t border-[#c4c4c4]">
       <div className="mb-6">
          <h2 className="text-[32px] font-bold text-black mb-1 leading-[1.05]">
            О компании нужно чтото написать
          </h2>
          <p className="text-[18px] text-black mb-6">
            Сказать какие мы крутые 
          </p>
        </div>

        <div className="space-y-6">
          {/* Hero Image */}
          <div className="w-full h-[240px] rounded-lg overflow-hidden">
            <img
              src={imgImage5}
              alt="О компании"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 10 лет */}
          <div className="bg-[#e9f4fb] rounded-lg p-6">
            <div className="flex items-center gap-4">
              <p className="text-[#228ece] text-[80px] font-bold leading-none tracking-tight">
                10
              </p>
              <p className="text-[#228ece] text-[16px] leading-tight">
                лет продаем, доставляем, собираем мебель
              </p>
            </div>
          </div>

          {/* 60 фабрик */}
          <div className="bg-[#4a3b7a] rounded-lg p-6 text-white">
            <div className="flex items-start gap-4 mb-6">
              <p className="text-[80px] font-bold leading-none tracking-tight">
                60
              </p>
              <p className="text-[18px] leading-tight pt-2">
                российских фабрик-партнеров
              </p>
            </div>
            <p className="text-[14px] leading-relaxed">
              Мы работаем напрямую с лучшими российскими
              производителями: от мастерских до крупных фабрик.
              Прямой контакт означает одно: вы платите честную
              цену.
            </p>
          </div>
        </div>
      </section>


{/* Кухни клиентов — слайдер (2 фото) только точки */}
<section className="py-12 px-6 bg-white border-t border-[#c4c4c4]">


 <div className="mb-6">
          <h2 className="text-[32px] font-bold text-black mb-1 leading-[1.05]">
             Наши кухни в квартирах клиентов
          </h2>
          <p className="text-[18px] text-black">
            Метраж, планировка и бюджет
          </p>
        </div>
  
  <div className="mb-8">
    {/* Слайдер */}
    <div
      className="relative w-full h-[320px] rounded-lg overflow-hidden"
      onTouchStart={(e) => {
        // сохраняем стартовую точку свайпа
        (window as any).__touchX = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        // определяем направление свайпа
        const startX = (window as any).__touchX ?? null;
        if (startX == null) return;

        const endX = e.changedTouches[0].clientX;
        const dx = endX - startX;

        // порог, чтобы случайные касания не листали
        if (Math.abs(dx) < 40) return;

        // 2 слайда: просто переключаем 0 <-> 1
        setClientSlide((prev) => (prev === 0 ? 1 : 0));
      }}
    >
      {/* Лента */}
      <div
        className="absolute inset-0 flex transition-transform duration-300 ease-out"
        style={{ transform: `translateX(-${clientSlide * 100}%)` }}
      >
        {clientSlides.map((s, idx) => (
          <div key={idx} className="min-w-full h-full">
            <img
              src={s.img}
              alt={`Кухня клиента ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Точки (только они) */}
      <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
        {clientSlides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Перейти к слайду ${idx + 1}`}
            onClick={() => setClientSlide(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === clientSlide ? "w-6 bg-white" : "w-2 bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>

    {/* Описание под фото */}
    <div className="bg-white mt-4">
      <h3 className="text-[18px] font-bold text-black mb-2">
        {clientSlides[clientSlide].title}
      </h3>
      <p className="text-[14px] text-black mb-1">
        Кухня: {clientSlides[clientSlide].area}
      </p>
      <p className="text-[14px] text-black mb-1">
        Размеры: {clientSlides[clientSlide].size}
      </p>
      <p className="text-[14px] text-black">
        Цена: {clientSlides[clientSlide].price}
      </p>
    </div>
  </div>

  <button className="w-full bg-[#252222] text-white px-8 py-3 rounded-lg uppercase text-[15px] font-medium hover:bg-[#1a1818] transition-colors">
    Хочу также
  </button>
</section>


    
{/* Контакты */}
<section className="py-12 px-6 bg-white border-t border-[#c4c4c4]">
  {/* Заголовок */}
  <div className="mb-6">
    <h2 className="text-[32px] font-bold text-black mb-2 leading-[1.05]">
      Заказать кухню
    </h2>
    <p className="text-[18px] text-black leading-[1.2]">
      Выберите удобный для вас способ связи
    </p>
  </div>

  <div className="space-y-4">
    {/* Поле телефона */}
    <div>
      <input
        type="tel"
        placeholder="+7 (___) ___-__-__"
        className="w-full bg-white text-black px-5 py-4 rounded-xl border border-black/20 text-center text-[20px] tracking-wide outline-none focus:border-black"
      />

      {/* Подсказка под полем */}
      <p className="mt-2 text-[12px] text-black/60 text-center leading-[1.2]">
        Отправим 2–3 варианта под вашу планировку
      </p>
    </div>

    {/* Главная кнопка вместо “Позвоните мне” */}
    <button className="w-full bg-[#252222] text-white px-6 py-4 rounded-xl uppercase text-[15px] font-medium hover:bg-[#1a1818] transition-colors">
      Отправить номер
    </button>

    {/* Альтернативные способы связи */}
    <button className="w-full bg-white text-black px-6 py-4 rounded-xl border border-black flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
      <img src={imgImage423} alt="" className="w-6 h-6" />
      <span className="uppercase text-[15px] font-medium">
        Написать в мессенджер
      </span>
    </button>

    <button className="w-full bg-white text-black px-6 py-4 rounded-xl border border-black flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
      <img src={imgImage424} alt="" className="w-6 h-6" />
      <span className="uppercase text-[15px] font-medium">
        Записаться в магазин
      </span>
    </button>

    {/* Текст по центру под “Записаться в магазин” */}
    <p className="text-[12px] text-center text-black/70 leading-[1.2]">
      2-3 варианта под вашу планировку
    </p>
  </div>
</section>


      {/* Footer */}
      <footer className="py-8 px-6 bg-[#f5f5f5] border-t border-[#e5e5e5]">
        <div className="text-center text-[12px] text-gray-600">
          <p className="mb-2">
            © 2024 FORM. Все права защищены
          </p>
          <p>Проектирование и производство кухонь на заказ</p>
        </div>
      </footer>
    </div>
  );
}