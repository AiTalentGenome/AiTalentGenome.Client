"use client"

import * as React from "react"
import { Phone, Lock } from "lucide-react"
import { PatternFormat } from "react-number-format"
import { Button } from "@/components/controls/Button"
import { AppInput } from "@/components/controls/AppInput"
import { useAuthModalStore } from "@/store/useAuthModalStore"

export const AuthPhonePasswordView = () => {
  const { phoneNumber } = useAuthModalStore();
  const [password, setPassword] = React.useState("");

  return (
    <div className="flex flex-col gap-6 w-full animate-in slide-in-from-right-4 duration-300">
      <div className="space-y-4">
        {/* Отображаем номер телефона с той же маской, но только для чтения */}
        <PatternFormat
          format="+7 (###) ###-##-##"
          value={phoneNumber}
          displayType="input"
          customInput={AppInput}
          readOnly
          icon={Phone}
          className="bg-[#F2F4F7]/50"
        />

        {/* Поле Пароля */}
        <AppInput
          type="password"
          placeholder="Пароль"
          icon={Lock}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="[text-security:asterisk] [-webkit-text-security:asterisk]"
        />
      </div>

      <Button variant={"default"} disabled={password.length < 4}>
        Далее
      </Button>
    </div>
  );
};