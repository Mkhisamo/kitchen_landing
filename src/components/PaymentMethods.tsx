import { CreditCard, QrCode, Building2, Wallet, Percent } from "lucide-react";

export function PaymentMethods() {
  return (
    <section className="py-12 px-6 bg-white border-t border-[#c4c4c4]">
      <div className="mb-6">
        <h2 className="text-[32px] font-bold text-black mb-1 leading-[1.05]">
          Выбирайте удобный способ оплаты
        </h2>
        <p className="text-[18px] text-[#505d68]">
          Мы сделали несколько вариантов — оплачивайте так, как комфортно именно вам.
        </p>
      </div>

      {/* Grid для карточек */}
      <div className="space-y-4">
        {/* Первый ряд - 2 карточки */}
        <div className="grid grid-cols-2 gap-4">
          {/* Оплата на сайте картой */}
          <div className="bg-white border border-[#e5e5e5] rounded-lg p-4 min-h-[140px]">
            <div className="w-10 h-10 mb-3 flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-[#424b5a]" strokeWidth={1.5} />
            </div>
            <h3 className="text-[16px] font-bold text-black mb-1 leading-tight">
              Оплата на сайте картой
            </h3>
            <p className="text-[12px] text-[#505d68] leading-snug">
              Visa / MasterCard / Мир
            </p>
          </div>

          {/* QR-код СБП */}
          <div className="bg-white border border-[#e5e5e5] rounded-lg p-4 min-h-[140px]">
            <div className="w-10 h-10 mb-3 flex items-center justify-center">
              <QrCode className="w-6 h-6 text-[#424b5a]" strokeWidth={1.5} />
            </div>
            <h3 className="text-[16px] font-bold text-black mb-1 leading-tight">
              QR-код СБП
            </h3>
            <p className="text-[12px] text-[#505d68] leading-snug">
              Быстро через приложение банка
            </p>
          </div>
        </div>

        {/* Второй ряд - 2 карточки */}
        <div className="grid grid-cols-2 gap-4">
          {/* Онлайн кредит */}
          <div className="bg-white border border-[#e5e5e5] rounded-lg p-4 min-h-[140px]">
            <div className="w-10 h-10 mb-3 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-[#424b5a]" strokeWidth={1.5} />
            </div>
            <h3 className="text-[16px] font-bold text-black mb-1 leading-tight">
              Онлайн кредит
            </h3>
            <p className="text-[12px] text-[#505d68] leading-snug">
              Оформление за несколько минут
            </p>
          </div>

          {/* Наличными при получении */}
          <div className="bg-white border border-[#e5e5e5] rounded-lg p-4 min-h-[140px]">
            <div className="w-10 h-10 mb-3 flex items-center justify-center">
              <Wallet className="w-6 h-6 text-[#424b5a]" strokeWidth={1.5} />
            </div>
            <h3 className="text-[16px] font-bold text-black mb-1 leading-tight">
              Наличными при получении
            </h3>
            <p className="text-[12px] text-[#505d68] leading-snug">
              Оплата курьеру/в пункте выдачи
            </p>
          </div>
        </div>

        {/* Третий ряд - 1 карточка на всю ширину */}
        <div className="bg-white border border-[#e5e5e5] rounded-lg p-4 min-h-[140px]">
          <div className="w-10 h-10 mb-3 flex items-center justify-center">
            <Percent className="w-6 h-6 text-[#424b5a]" strokeWidth={1.5} />
          </div>
          <h3 className="text-[16px] font-bold text-black mb-1 leading-tight">
            Рассрочка 0-0-6
          </h3>
          <p className="text-[12px] text-[#505d68] leading-snug">
            Без переплат, на 6 месяцев
          </p>
        </div>
      </div>
    </section>
  );
}