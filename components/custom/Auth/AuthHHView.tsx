import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/controls/Button"
import { cn } from "@/lib/utils"

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
        <input type="checkbox" className="hidden" checked={isAgreed} onChange={() => setIsAgreed(!isAgreed)} />
        <div className={cn(
          "w-5 h-5 rounded border-2 flex items-center justify-center transition-colors mb-5 shrink-0",
          isAgreed ? "bg-primary border-primary" : "border-[#BCC8CC] group-hover:border-primary"
        )}>
          {isAgreed && <div className="w-2.5 h-2.5 bg-white rounded-sm" />}
        </div>
        <span className="font-body font-normal text-[16px] leading-6 tracking-normal text-[#797F7F]">
          Я принимаю условия пользовательского соглашения и даю согласие на обработку персональных данных
        </span>
      </div>

      <Button disabled={!isAgreed} className={cn("w-full h-14 rounded-[20px] text-white transition-colors", isAgreed ? "bg-[#B45D5D]" : "bg-[#B45D5D]/50")}>
        Войти через HeadHunter
      </Button>

      <button onClick={onOtherMethod} className="font-body text-[14px] text-[#919999] hover:text-primary transition-colors">
        Войти другим способом
      </button>
    </div>
  )
}