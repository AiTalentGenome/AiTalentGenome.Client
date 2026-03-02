"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ANALYZE_FLOW } from "@/lib/analyze-config"

const StepStar = ({ active }: { active: boolean }) => (
  <div className="relative w-10 h-10 flex-none">
    <Image
      src={active ? "/star.svg" : "/secondStar.svg"}
      alt="Step Icon"
      fill
      priority
    />
  </div>
);

export const AppStepper = () => {
  const pathname = usePathname();
  const currentStepData = ANALYZE_FLOW.steps.find(step => step.path === pathname) || ANALYZE_FLOW.steps[0];
  const currentStep = currentStepData.id;

  return (
    <div className="w-full h-35 bg-[#F2F4F7]/50 rounded-[40px] flex items-center justify-center px-8 lg:px-20">
      {/* Увеличили макс. ширину, чтобы gap-12 и широкие слова влезли в ряд */}
      <div className="flex items-center justify-between max-w-325 w-full relative">
        {ANALYZE_FLOW.steps.map((step, index) => {
          const isStepActive = currentStep >= step.id;
          const isConnectionActive = currentStep > step.id;

          return (
            <React.Fragment key={step.id}>
              {/* ИЗМЕНЕНИЕ: Используем w-[180px], чтобы слово "СОБЕСЕДОВАНИЯ" 
                не сжималось и имело пространство для маневра.
              */}
              <div className="flex flex-col items-center gap-4 z-10 shrink-0 w-50">
                <StepStar active={isStepActive} />
                <span className={cn(
                  "font-heading text-[12px] leading-[1.3] text-center transition-colors uppercase wrap-break-word",
                  isStepActive ? "text-[#1a1a1a]" : "text-[#919999]"
                )}>
                  {step.label}
                </span>
              </div>

              {/* ТОЧКИ */}
              {index < ANALYZE_FLOW.steps.length - 1 && (
                <div className="flex-1 flex justify-center items-center gap-4 lg:gap-14 mb-8 min-w-50">
                  {[1, 2, 3, 4, 5].map((dot) => (
                    <div
                      key={dot}
                      className={cn(
                        "w-1 h-1 rounded-full transition-all duration-500 flex-none",
                        isConnectionActive ? "bg-[#2494B3]" : "bg-[#919999]/40"
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