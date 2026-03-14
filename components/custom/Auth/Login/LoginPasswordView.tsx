"use client"

import * as React from "react"
import { Mail, Lock } from "lucide-react"
import { Button } from "@/components/controls/Button"
import { AppInput } from "@/components/controls/AppInput"
import { useAuthModalStore } from "@/store/useAuthModalStore"

export const LoginPasswordView = () => {
  const { email } = useAuthModalStore();
  const [password, setPassword] = React.useState("");
  const [errorText, setErrorText] = React.useState("Неверный E-mail или пароль. Повторите попытку.");

  const hasError = !!errorText && password.length > 0;

  return (
    <div className="flex flex-col gap-5 w-full animate-in slide-in-from-right-4 duration-300">
      <div className="space-y-5">
        {/* Поле Email (уже заполнено и можно сделать его disabled или оставить так) */}
        <AppInput
          type="email"
          placeholder="E-mail"
          icon={Mail}
          value={email}
          readOnly // Пользователь видит, что почта та же
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

      <Button variant={"default"} disabled={hasError}>
        Далее
      </Button>
    </div>
  );
};