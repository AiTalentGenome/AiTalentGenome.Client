"use client"

import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface SelectionBadgeProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const SelectionBadge = ({ 
  onClick, 
  className,
  children,
  icon
}: SelectionBadgeProps) => {
  return (
    <button
    onClick={onClick}
      className={cn(
        "flex items-center justify-between gap-3 p-4 rounded-[16px] bg-[#24B3AC] transition-all hover:bg-[#1f9a94] active:scale-95 group",
        "font-manrope font-medium text-[16px] leading-6 text-white shadow-sm",
        "animate-in fade-in zoom-in-95 duration-300",
        className
      )}
    >
      {icon}
      <span>
        {children}
      </span>
    </button>
  );
};

// Полезная утилита для правильных окончаний (отклик, отклика, откликов)<X className="w-6 h-6 transition-transform group-hover:rotate-90" />
function getWordEnding(num: number, text_forms: [string, string, string]) {
  const n = Math.abs(num) % 100;
  const n1 = n % 10;
  if (n > 10 && n < 20) return text_forms[2];
  if (n1 > 1 || n1 < 5) return text_forms[1];
  if (n1 === 1) return text_forms[0];
  return text_forms[2];
}