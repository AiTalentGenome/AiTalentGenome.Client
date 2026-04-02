"use client"

import * as React from "react"
import { Phone, Lock } from "lucide-react"
import { PatternFormat } from "react-number-format"
import { Button } from "@/components/controls/Button"
import { AppInput } from "@/components/controls/AppInput"
import { useAuthModalStore } from "@/store/useAuthModalStore"

export const LoginPhonePasswordView = () => {
  const { phoneNumber } = useAuthModalStore();
  const [password, setPassword] = React.useState("");
  const [errorText, setErrorText] = React.useState("Неверный E-mail или пароль. Повторите попытку.");

  const hasError = !!errorText && password.length > 0;

  return (
    <div className="flex flex-col gap-5 w-full animate-in slide-in-from-right-4 duration-300">
      <div className="space-y-5">
        {/* Отображаем номер телефона с той же маской, но только для чтения */}
        <PatternFormat
          format="+7 (###) ###-##-##"
          value={phoneNumber}
          displayType="input"
          customInput={AppInput}
          readOnly
          icon={Phone}
          className="bg-[#F2F4F7]/50"
          isError={hasError}
        />

        {/* Поле Пароля */}
        <AppInput
          type="password"
          placeholder="Пароль"
          icon={Lock}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="[text-security:asterisk] [-webkit-text-security:asterisk]"
          isError={hasError}
        />
      </div>

      {hasError &&
        <p className="font-open-sans text-[14px] leading-6 font-normal text-[#E0057E]">
          {errorText}
        </p>
      }

      <Button variant={"accent"} disabled={hasError}>
        Далее
      </Button>
    </div>
  );
};