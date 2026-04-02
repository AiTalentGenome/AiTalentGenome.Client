import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/controls/Button"
import { cn } from "@/lib/utils"
import { Checkbox } from "@/components/ui/checkbox"

export const LoginHHView = ({ onOtherMethod }: { onOtherMethod: () => void }) => {
  const [isAgreed, setIsAgreed] = React.useState(false);

  const handleHHLogin = () => {
    const clientId = process.env.NEXT_PUBLIC_HH_CLIENT_ID;
    const redirectUri = process.env.NEXT_PUBLIC_HH_REDIRECT_URI;
    const HH_AUTH_URL = `https://hh.ru/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;
    
    // Перенаправляем пользователя
    window.location.href = HH_AUTH_URL;
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full animate-in fade-in duration-300">
      <div className="bg-[#F2F4F7] rounded-[20px] py-4 px-3 flex gap-4 items-center">

        <Image src="/star.svg" alt="Info" width={100} height={100} className="mt-1" />

        <p className="font-manrope font-normal text-[16px] leading-5 text-black">
          Войдите через кабинет работодателя на HeadHunter, чтобы автоматически перенести актуальные вакансии и отлики кандидатов
        </p>

      </div>

      <div className="flex items-center justify-center w-fit mx-auto gap-5 cursor-pointer group max-w-90">
        <div className="flex items-center justify-center w-fit mx-auto gap-5 cursor-pointer group max-w-90">
          <Checkbox
            id="terms-checkbox-desc"
            name="terms-checkbox-desc"
            defaultChecked
            checked={isAgreed}
            onCheckedChange={(checked) => setIsAgreed(checked as boolean)}
            className={cn(
              "w-4.5 h-4.5 shrink-0 border-2 border-[#BCC8CC]",
              "data-[state=checked]:bg-[#24B3AC] data-[state=checked]:border-[#24B3AC] mb-5"
            )}
          />
          <div>
            <label htmlFor="terms-checkbox-desc" className="font-manrope font-normal text-[16px] leading-6 text-text-gray tracking-normal">
              Я принимаю условия пользовательского соглашения и даю согласие на обработку персональных данных
            </label>
          </div>
        </div>
      </div>

      <Button 
      disabled={!isAgreed} 
      variant={"accent"} 
      fullWidth size={"accent"} 
      className="w-full 
      bg-[#B24949] 
      disabled:bg-[#CC8F8F]"
      onClick={handleHHLogin}
      >
        Войти через HeadHunter
      </Button>

      <button
        onClick={onOtherMethod}
        disabled={!isAgreed}
        className={cn(
          /* Базовые стили из Figma */
          "font-open-sans text-[14px] font-normal leading-5 tracking-normal",
          "text-center transition-colors",

          /* Состояние DISABLED (твои данные) */
          "disabled:text-[#BCC8CC] disabled:cursor-not-allowed",

          /* Состояние ACTIVE */
          "text-text-default-black hover:text-primary active:opacity-80"
        )}
      >
        Войти другим способом
      </button>
    </div>
  )
}