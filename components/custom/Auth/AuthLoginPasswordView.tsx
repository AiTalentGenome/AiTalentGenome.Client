"use client"

import * as React from "react"
import { Mail, Lock } from "lucide-react"
import { Button } from "@/components/controls/Button"
import { AppInput } from "@/components/controls/AppInput"
import { useAuthModalStore } from "@/store/useAuthModalStore"

export const AuthLoginPasswordView = () => {
  const { email } = useAuthModalStore(); // Берем сохраненную почту
  const [password, setPassword] = React.useState("");

  return (
    <div className="flex flex-col gap-6 w-full animate-in slide-in-from-right-4 duration-300">
      <div className="space-y-4">
        {/* Поле Email (уже заполнено и можно сделать его disabled или оставить так) */}
        <AppInput
          type="email"
          placeholder="E-mail"
          icon={Mail}
          value={email}
          readOnly // Пользователь видит, что почта та же
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