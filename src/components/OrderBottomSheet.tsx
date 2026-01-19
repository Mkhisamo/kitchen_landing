import { useState } from "react";
import { X, MessageCircle, MapPin } from "lucide-react";

interface OrderBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OrderBottomSheet({ isOpen, onClose }: OrderBottomSheetProps) {
  const [phone, setPhone] = useState("");

  // Форматирование номера телефона
  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    const match = numbers.match(/^7?(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);
    
    if (!match) return value;
    
    const formatted = [
      "+7",
      match[1] ? ` (${match[1]}` : "",
      match[2] ? `) ${match[2]}` : "",
      match[3] ? `-${match[3]}` : "",
      match[4] ? `-${match[4]}` : "",
    ].join("");
    
    return formatted;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log("Отправлен номер:", phone);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay (затемнение) */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Bottom Sheet */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 transition-transform duration-300 ease-out ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ maxHeight: "90vh" }}
      >
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-[#505d68] hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Закрыть"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Контент */}
        <div className="px-6 py-8 overflow-y-auto" style={{ maxHeight: "85vh" }}>
          <h2 className="text-[28px] font-bold text-black mb-2">
            Заказать кухню
          </h2>
          <p className="text-[16px] text-[#505d68] mb-6">
            Выберите удобный для вас способ связи
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Поле ввода телефона */}
            <div>
              <input
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
                placeholder="+7 (___) ___-__-__"
                className="w-full h-14 px-4 border border-[#e5e5e5] rounded-xl text-[16px] text-black placeholder:text-[#a1aeb7] focus:outline-none focus:border-[#424b5a] transition-colors"
                maxLength={18}
              />
              <p className="text-[12px] text-[#505d68] mt-2 text-center">
                Отправим 2-3 варианта под вашу планировку
              </p>
            </div>

            {/* Кнопка отправить номер */}
            <button
              type="submit"
              className="w-full h-14 bg-[#252222] text-white rounded-xl uppercase text-[15px] font-medium hover:bg-[#1a1818] transition-colors"
            >
              Отправить номер
            </button>

            {/* Кнопка написать в мессенджер */}
            <button
              type="button"
              onClick={() => {
                // Здесь будет логика открытия Telegram
                window.open("https://t.me/your_telegram", "_blank");
              }}
              className="w-full h-14 bg-white border border-[#e5e5e5] rounded-xl text-[15px] font-medium text-black hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-[#424b5a]" />
              Написать в мессенджер
            </button>

            {/* Кнопка записаться в магазин */}
            <button
              type="button"
              onClick={() => {
                // Здесь будет логика записи в магазин
                console.log("Записаться в магазин");
              }}
              className="w-full h-14 bg-white border border-[#e5e5e5] rounded-xl text-[15px] font-medium text-black hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
            >
              <MapPin className="w-5 h-5 text-[#424b5a]" />
              Записаться в магазин
            </button>

            <p className="text-[12px] text-[#505d68] text-center pt-2">
              2-3 варианта под вашу планировку
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
