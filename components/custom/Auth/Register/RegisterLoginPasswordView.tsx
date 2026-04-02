"use client"

import * as React from "react"
import { Mail, Lock } from "lucide-react"
import { Button } from "@/components/controls/Button"
import { AppInput } from "@/components/controls/AppInput"
import { useAuthModalStore } from "@/store/useAuthModalStore"
import { PasswordRequirements } from "@/components/controls/PasswordRequirements"

export const RegisterLoginPasswordView = () => {
  const { email } = useAuthModalStore();
  const [password, setPassword] = React.useState("");
  const [errorText, setErrorText] = React.useState();

  const hasError = !!errorText && password.length > 0;

  const { authView, openAuth } = useAuthModalStore()

  const handleNext = () => {
    openAuth('auth-confirm-email')
  }

  const allRequirementsMet =
    password.length >= 8 &&
    /[a-z]/.test(password) && /[A-Z]/.test(password) &&
    /\d/.test(password) &&
    /[!@#$%^&*(),.?":{}|<>]/.test(password);

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
          header="Пароль"
        />
      </div>

      {hasError &&
        <p className="font-open-sans text-[14px] leading-6 font-normal text-[#E0057E]">
          {errorText}
        </p>
      }

      <PasswordRequirements password={password} />

      <Button variant={"accent"} disabled={hasError} onClick={handleNext}>
        Далее
      </Button>
    </div>
  );
};