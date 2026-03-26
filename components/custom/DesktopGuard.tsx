"use client"

import { Monitor } from 'lucide-react'

export const DesktopGuard = () => {
  return (
    <div className="fixed inset-0 z-10000 flex flex-col items-center justify-center bg-white p-8 text-center xl:hidden">
      <div className="flex flex-col items-center gap-6 max-w-sm">
        {/* Иконка монитора для наглядности */}
        <div className="w-16 h-16 bg-[#F5F5F5] rounded-2xl flex items-center justify-center text-[#2494B3]">
          <Monitor size={32} />
        </div>
        
        <div className="space-y-2">
          <h2 className="font-manrope font-bold text-[24px] text-[#1a1a1a]">
            Используйте ПК версию
          </h2>
          <p className="font-manrope text-[16px] leading-6 text-[#919999]">
            Для работы с аналитикой кандидата требуется разрешение экрана не менее 1280px. Пожалуйста, перейдите на компьютер.
          </p>
        </div>

        <div className="text-[14px] text-[#2494B3] font-semibold pt-4">
          AI Talent Genome • 2026
        </div>
      </div>
    </div>
  )
}