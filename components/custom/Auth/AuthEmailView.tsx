"use client"

import * as React from "react"
import { Mail } from "lucide-react"
import { Button } from "@/components/controls/Button"
import { AppInput } from "@/components/controls/AppInput"
import { useAuthModalStore } from "@/store/useAuthModalStore"

export const AuthEmailView = () => {
  const { openAuth, setEmail: saveEmailToStore, authMode } = useAuthModalStore();
  const [localEmail, setLocalEmail] = React.useState("");

  const handleNext = () => {
    saveEmailToStore(localEmail); // Сохраняем в глобальный стор
    openAuth('auth-login-password'); // Переходим к паролю
  };

  return (
    <div className="flex flex-col gap-6 duration-300 w-full">
      {/* ТАБЫ: теперь переключают Views в сторе */}
      <div className="flex bg-[#F2F4F7] rounded-[16px]">
        <button
          className="flex-1 py-3 rounded-[14px] font-open-sans leading-6 font-semibold text-[18px] bg-white text-[#1a1a1a] shadow-sm"
        >
          E-mail
        </button>
        <button
          onClick={() => openAuth('auth-phone')} // Переход на новое "окно"
          className="flex-1 py-3 rounded-[14px] font-open-sans leading-6 font-semibold text-[18px] text-[#CCCCCC] transition-all"
        >
          Телефон
        </button>
      </div>

      <AppInput
        type="email"
        placeholder="E-mail"
        icon={Mail}
        value={localEmail}
        onChange={(e) => setLocalEmail(e.target.value)}
      />

      <Button variant={"default"} disabled={localEmail.length === 0} onClick={handleNext}>Далее</Button>

      <div className="space-y-5 mb-1">
        <Button variant="secondary" className="w-full h-14 rounded-[20px] bg-secondary text-white gap-2">Войти с Google</Button>
        <Button variant="secondary" className="w-full h-14 rounded-[20px] bg-secondary text-white gap-2">Войти с Yandex</Button>
      </div>

      <p className="font-open-sans text-[14px] text-center font-normal text-footer-text">
        {authMode === "login" ?
          <>
            Нет учетной записи? <button className="font-bold hover:underline">Зарегистрируйтесь</button>
          </>
          :
          <>
            Уже есть учетная запись? <button className="font-bold hover:underline">Войти</button>
          </>
        }
      </p>

    </div>
  )
}