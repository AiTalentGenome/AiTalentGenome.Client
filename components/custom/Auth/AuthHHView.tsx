import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/controls/Button"
import { cn } from "@/lib/utils"
import { Checkbox } from "@/components/ui/checkbox"

export const AuthHHView = ({ onOtherMethod }: { onOtherMethod: () => void }) => {
  const [isAgreed, setIsAgreed] = React.useState(false);

  return (
    <div className="flex flex-col items-center gap-6 w-full animate-in fade-in duration-300">
      <div className="bg-[#F2F4F7] rounded-[20px] py-4 px-3 flex gap-4 items-center">

        <Image src="/star.svg" alt="Info" width={100} height={100} className="mt-1" />

        <p className="font-body font-normal text-[16px] leading-5 text-black">
          Войдите через кабинет работодателя на HeadHunter, чтобы автоматически перенести актуальные вакансии и отлики кандидатов
        </p>

      </div>

      <div className="flex items-center justify-center w-fit mx-auto gap-5 cursor-pointer group max-w-90">
        {/* <input type="checkbox" className="hidden" checked={isAgreed} onChange={() => setIsAgreed(!isAgreed)} />
        <div className={cn(
          "w-5 h-5 rounded border-2 flex items-center justify-center transition-colors mb-5 shrink-0",
          isAgreed ? "bg-primary border-primary" : "border-[#BCC8CC] group-hover:border-primary"
        )}>
          {isAgreed && <div className="w-2.5 h-2.5 bg-white rounded-sm" />}
        </div>
        <span className="font-body font-normal text-[16px] leading-6 tracking-normal text-[#797F7F]">
          Я принимаю условия пользовательского соглашения и даю согласие на обработку персональных данных
        </span> */}

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
            <span className="font-body font-normal text-[16px] leading-6 text-[#797F7F] tracking-normal">
              Я принимаю условия пользовательского соглашения и даю согласие на обработку персональных данных
            </span>
          </div>
        </div>
      </div>

      <Button disabled={!isAgreed} variant={"accent"} fullWidth size={"accent"} >
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
          "text-footer-text hover:text-primary active:opacity-80"
        )}
      >
        Войти другим способом
      </button>
    </div>
  )
}