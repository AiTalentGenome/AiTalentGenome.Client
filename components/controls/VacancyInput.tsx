import { cn } from '@/lib/utils'
import React from 'react'

interface VacancyInputProps {
    hintText?: string
}

export default function VacancyInput({ hintText }: VacancyInputProps) {
  return (
    <div className="space-y-2">
        <input
          type="text"
          placeholder="Введите должность кандидата"
          className={cn(
            "bg-[#F2F5F5] w-173.75 placeholder:text-text-muted placeholder:text-[16px]",
            "font-manrope font-normal text-[16px] text-[#1D2939] border-none outline-none leading-6 space-x-4 p-4 rounded-[16px]",
          )}
        />
        {hintText && (
            <p
                className="font-manrope font-medium text-[14px] leading-4.5 space-x-4 text-inactive-input"
            >
                {hintText}
            </p>
        )}
    </div>
  )
}
