"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"

interface AppCheckboxProps {
  id: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  label: string;
  className?: string;      // Стили для внешнего контейнера
  labelClassName?: string; // Стили специально для текста
}

export const AppCheckbox = ({ 
  id, 
  checked, 
  onCheckedChange, 
  label, 
  className,
  labelClassName
}: AppCheckboxProps) => {
  return (
    <div className={cn(
      "flex items-center gap-10 cursor-pointer group mx-auto", 
      className
    )}>
      <Checkbox
        id={id}
        checked={checked}
        onClick={(e) => e.stopPropagation()}
        onCheckedChange={(val) => onCheckedChange(val as boolean)}
        className={cn(
          "w-4.5 h-4.5 shrink-0 border-[#EBEBEB] border cursor-pointer",
          "data-[state=checked]:bg-[#24B3AC] data-[state=checked]:border-[#24B3AC] transition-colors"
        )}
      />
      <label
        htmlFor={id}
        className={cn(
          labelClassName,
          "cursor-pointer"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {label}
      </label>
    </div>
  )
}