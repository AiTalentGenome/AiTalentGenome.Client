"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface Step {
  id: number;
  label: string;
}

const steps: Step[] = [
  { id: 1, label: "1. Загрузить вакансию" },
  { id: 2, label: "2. Загрузить резюме" },
  { id: 3, label: "3. Загрузить запись собеседования" },
  { id: 4, label: "4. Итоговый анализ" },
];

// Компонент иконки-звезды из макета
const StepStar = ({ active }: { active: boolean }) => (
  <svg 
    width="28" 
    height="28" 
    viewBox="0 0 24 24" 
    fill="none" 
    className={cn(
      "transition-all duration-300",
      active ? "text-[#2494B3] drop-shadow-[0_0_8px_rgba(36,148,179,0.6)]" : "text-[#919999]"
    )}
  >
    <path 
      d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" 
      fill="currentColor" 
    />
  </svg>
);

export const AppStepper = ({ currentStep = 1 }: { currentStep?: number }) => {
  return (
    <div className="w-full max-w-430 mx-auto h-35 bg-[#F2F4F7]/50 rounded-[40px] flex items-center justify-center px-12">
      <div className="flex items-center justify-between w-full max-w-350 relative">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            {/* Элемент шага */}
            <div className="flex flex-col items-center gap-4 z-10">
              <StepStar active={currentStep >= step.id} />
              <span className={cn(
                "font-body text-[13px] leading-tight text-center transition-colors whitespace-nowrap",
                currentStep >= step.id ? "text-[#1a1a1a] font-medium" : "text-[#919999]"
              )}>
                {step.label}
              </span>
            </div>

            {/* Разделительные точки (кроме последнего шага) */}
            {index < steps.length - 1 && (
              <div className="flex gap-4 px-4 mb-8">
                {[1, 2, 3, 4, 5].map((dot) => (
                  <div 
                    key={dot} 
                    className="w-0.75 h-0.75 rounded-full bg-[#919999]/40" 
                  />
                ))}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}