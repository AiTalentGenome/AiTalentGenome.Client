"use client"

import * as React from "react"
import { Button } from "@/components/controls/Button"
import { useAuthModalStore } from "@/store/useAuthModalStore"
import { OTPInput, SlotProps } from "input-otp" // Рекомендую установить: npm install input-otp
import { cn } from "@/lib/utils"

export const AuthVerifyPhoneView = () => {
  const { phoneNumber, openAuth } = useAuthModalStore();
  const [code, setCode] = React.useState("");

  // Маскируем номер для безопасности: +7700*****18
  const maskedPhone = React.useMemo(() => {
    if (!phoneNumber) return "+7 (___) ***-**-**";
    // Предполагаем, что в сторе лежат только цифры 7071234567
    const s = phoneNumber;
    return `+7${s.slice(0, 2)}*****${s.slice(-2)}`;
  }, [phoneNumber]);

  return (
    <div className="flex flex-col items-center w-full animate-in fade-in zoom-in-95 duration-300 mt-1 -mb-2">
      <h2 className="font-open-sans font-semibold text-[22px] leading-6 text-center text-footer-text mb-4">
        Подтвердите ваш сотовый номер
      </h2>
      
      <p className="font-open-sans font-normal text-[14px] leading-5 text-center text-footer-text mb-6 w-full">
        Для активации вашего аккаунта, подтвердите код, отправленный на номер {maskedPhone}
      </p>

      {/* Контейнер для OTP */}
      <OTPInput
        maxLength={6}
        value={code}
        onChange={setCode}
        containerClassName="group flex items-center gap-2"
        render={({ slots }) => (
          <div className="flex gap-2">
            {slots.map((slot, idx) => (
              <Slot key={idx} {...slot} />
            ))}
          </div>
        )}
      />
    </div>
  );
};

// Вспомогательный компонент для одной ячейки кода
function Slot(props: SlotProps) {
  return (
    <div
      className={cn(
        "relative w-12 h-16 flex items-center justify-center transition-all duration-200",
        "rounded-[16px] bg-[#F2F4F7] border-2 border-transparent",
        "font-open-sans text-[24px] font-semibold text-footer-text",
        props.isActive && "border-primary bg-white shadow-sm",
      )}
    >
      {props.char !== null && <div>{props.char}</div>}
      {props.hasFakeCaret && <FakeCaret />}
    </div>
  )
}

function FakeCaret() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-px h-8 bg-primary animate-caret-blink" />
    </div>
  )
}