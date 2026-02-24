import * as React from "react"
import Link from "next/link"
import { Wrench } from "lucide-react"
import { cn } from "@/lib/utils"

export const Footer = () => {
  // Используем текущий 2026 год, так как проект разрабатывается сейчас [cite: 2026-02-25]
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full px-8 bg-footer-bg flex justify-center">
      <div className={cn(
        "w-full container h-20", // Высота 80px [cite: 2026-02-25]
        "py-6", // Отступы 200px по бокам и 24px сверху/снизу [cite: 2026-02-25]
        "flex items-center justify-between",
        "font-body text-sm text-footer-text" // Шрифт Manrope [cite: 2026-02-23]
      )}>
        
        {/* Левая часть: Название проекта и год */}
        <div>
            <span className="text-footer-text">
                AI Talent Genome, {currentYear}
            </span>
        </div>

        {/* Центральная часть: Ссылка на политику */}
        <Link 
          href="/privacy" 
          className="hover:text-primary transition-colors text-footer-text"
        >
          Политика конфиденциальности
        </Link>

        {/* Правая часть: Блок иконок в кругах */}
        <div className="flex items-center gap-4">
          {[1, 2, 3].map((id) => (
            <div 
              key={id} 
              className="w-10 h-10 rounded-full bg-[#919999] flex items-center justify-center text-white cursor-pointer hover:bg-primary transition-all"
            >
              <Wrench className="w-5 h-5" />
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}