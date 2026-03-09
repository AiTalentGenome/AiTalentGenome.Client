import * as React from "react"
import { Mail } from "lucide-react"
import { Button } from "@/components/controls/Button"
import { cn } from "@/lib/utils"

export const AuthEmailView = () => {
  const [loginType, setLoginType] = React.useState<'email' | 'phone'>('email');

  return (
    <div className="flex flex-col gap-6 w-full animate-in slide-in-from-right-4 duration-300">
      <div className="flex bg-[#F2F4F7] rounded-[16px] p-1">
        {(['email', 'phone'] as const).map((type) => (
          <button
            key={type}
            onClick={() => setLoginType(type)}
            className={cn(
              "flex-1 py-3 rounded-[12px] font-body font-semibold text-[14px] transition-all capitalize",
              loginType === type ? "bg-white text-[#1a1a1a] shadow-sm" : "text-[#919999]"
            )}
          >
            {type === 'email' ? 'E-mail' : 'Телефон'}
          </button>
        ))}
      </div>

      <div className="relative">
        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#BCC8CC]" />
        <input 
          type="email" 
          placeholder="E-mail"
          className="w-full h-14 bg-white border-2 border-[#F2F4F7] rounded-[20px] pl-12 pr-4 font-body outline-none focus:border-primary transition-colors"
        />
      </div>

      <Button disabled className="w-full h-14 rounded-[20px] bg-[#F2F4F7] text-[#BCC8CC]">Далее</Button>

      <div className="space-y-3">
        <Button variant="secondary" className="w-full h-14 rounded-[20px] bg-secondary text-white gap-2">Войти с Google</Button>
        <Button variant="secondary" className="w-full h-14 rounded-[20px] bg-secondary text-white gap-2">Войти с Yandex</Button>
      </div>

      <p className="font-body text-[13px] text-center text-[#1a1a1a]">
        Нет учетной записи? <button className="font-bold hover:underline">Зарегистрируйтесь</button>
      </p>
    </div>
  )
}