"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { FlowsType } from "@/lib/analyze-config";

// 1. Выносим пути к иконкам в константу
const STEP_ICONS = {
  DONE: "/icons/stepper/step-star-done.svg",
  CURRENT: "/icons/stepper/step-star-current.svg",
  PENDING: "/icons/stepper/step-star-pending.svg",
} as const;

interface StepStarProps {
  isCurrent: boolean;
  isCompleted: boolean;
}

interface AppStepperProps {
  flow: FlowsType;
  currentStepId: number;
}

const StepStar = ({ isCurrent, isCompleted }: StepStarProps) => {
  // 2. Логика выбора иконки теперь чистая и понятная
  const getIconSrc = () => {
    if (isCompleted) return STEP_ICONS.DONE;
    if (isCurrent) return STEP_ICONS.CURRENT;
    return STEP_ICONS.PENDING;
  };

  return (
    <div className={cn(
      "relative flex-none transition-all duration-300",
      !isCurrent ? "w-8 h-8" : "w-10 h-10"
    )}>
      <Image
        src={getIconSrc()}
        alt="Step Icon"
        fill
        priority
      />
    </div>
  );
};

export const AppStepper = ({ flow, currentStepId }: AppStepperProps) => {

  return (
    <div className="py-3 bg-[#FAFAFA] rounded-[40px] flex items-center justify-center w-full xl:px-30 2xl:px-30">
      <div className="flex items-start justify-center w-full max-w-325 relative mt-2">
        {flow.steps.map((step, index) => {
          // Исправлено: эти переменные теперь четко соотносятся с тем, что ниже
          const isCompleted = currentStepId > step.id;
          const isCurrent = currentStepId === step.id;
          const isActive = currentStepId >= step.id;
            
          return (
            <React.Fragment key={step.id}>
              <div className={cn(
                "flex flex-col items-center gap-2 justify-start z-10 shrink-0 xl:w-35 2xl:w-40"
                )}>
                {/* Контейнер для звезды с фиксированной высотой */}
                <div className={cn(
                  "h-10 flex items-center justify-center"
                  )}>
                  <StepStar
                    isCurrent={isCurrent}
                    isCompleted={isCompleted}
                  />
                </div>

                {/* Текст теперь будет расти ВНИЗ, не толкая звезду вверх */}
                <span className={cn(
                  "font-manrope font-normal text-[12px] leading-4 text-center", 
                  isActive ? "text-[#1a1a1a]" : "text-inactive-input"
                )}>
                  {step.label}
                </span>
              </div>

              {/* Соединительные точки */}
              {/* Исправлено: изменен регистр FLOW на flow */}
              {index < flow.steps.length - 1 && (
                <div className={cn(
                  "flex-1 h-10 flex justify-center items-center xl:gap-14 2xl:gap-14 mb-8 xl:min-w-31.75 2xl:min-w-50",
                )}>
                  {[1, 2, 3, 4, 5].map((dot, dotIndex) => (
                    <div
                      key={dot}
                      className={cn(
                        "xl:w-0.5 xl:h-0.5 2xl:w-1 2xl:h-1 rounded-full transition-all duration-500 flex-none",
                        isCompleted ? "bg-[#2494B3]" : "bg-inactive-input/40",
                        dotIndex > 2 ? "xl:hidden 2xl:flex" : "flex"
                      )}
                    />
                  ))}
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  )
}