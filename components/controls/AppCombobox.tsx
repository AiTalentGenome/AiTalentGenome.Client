"use client"

import * as React from "react"
import { Search, ChevronDown } from "lucide-react"
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

interface Option {
  value: string;
  label: string;
}

interface AppComboboxProps {
  options: Option[];
  placeholder?: string;
  searchPlaceholder?: string;
  onSelect?: (value: string) => void;
}

export const AppCombobox = ({ 
  options, 
  placeholder = "Выбрать из моих вакансий",
  searchPlaceholder = "Поиск",
  onSelect
}: AppComboboxProps) => {
  const [open, setOpen] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState("")
  const [selectedLabel, setSelectedLabel] = React.useState("")

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          className={cn(
            "flex items-center justify-between",
            "w-66 h-10 px-4 py-2 gap-2", // Точные размеры из ТЗ
            "rounded-[16px] bg-[#F2F4F7] border-none outline-none", // Radius 16
            "font-body text-[16px] leading-6 text-[#000000] opacity-100", // Manrope 16/24
            "transition-all active:scale-[0.98]"
          )}
        >
          <span className="truncate">{selectedLabel || placeholder}</span>
          <ChevronDown className={cn("w-5 h-5 transition-transform", open && "rotate-180")} />
        </button>
      </PopoverTrigger>

      <PopoverContent 
        className="w-66 p-2 rounded-[20px] bg-white border-none shadow-xl font-body"
        sideOffset={4}
      >
        {/* Поле поиска как на макете image_96df06.png */}
        <div className="relative flex items-center mb-2">
          <input
            className="w-full h-10 pl-4 pr-10 bg-[#F2F4F7] rounded-xl outline-none text-sm font-body"
            placeholder={searchPlaceholder}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Search className="absolute right-3 w-5 h-5 text-gray-400" />
        </div>

        {/* Список элементов */}
        <div className="max-h-50 overflow-y-auto custom-scrollbar">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <div
                key={option.value}
                onClick={() => {
                  setSelectedLabel(option.label)
                  setOpen(false)
                  onSelect?.(option.label); // Вызываем родительский метод
                  setSearchValue("");
                }}
                className={cn(
                  "px-4 py-2 rounded-[10px] cursor-pointer text-[16px] font-normal transition-colors",
                  "hover:bg-[#F2F4F7] active:bg-[#F2F4F7]/80 font-body",
                  selectedLabel === option.label ? "bg-[#F2F4F7]" : "text-[#919999]"
                )}
              >
                {option.label}
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-xs text-gray-400">Ничего не найдено</div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}