"use client"

import * as React from "react"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface AppInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: LucideIcon;
    containerClassName?: string;
}

// Используем forwardRef, чтобы в будущем легко интегрировать с React Hook Form
export const AppInput = React.forwardRef<HTMLInputElement, AppInputProps>(
    ({ className, icon: Icon, containerClassName, value, ...props }, ref) => {
        const hasText = String(value || "").length > 0;

        return (
            <div className={cn("relative group w-full", containerClassName)}>
                {Icon && (
                    <Icon 
                        className={cn(
                            "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-200 z-10",
                            hasText ? "text-footer-text" : "text-inactive-input",
                            "group-focus-within:text-footer-text"
                        )} 
                        strokeWidth={1.5}
                    />
                )}
                <input
                    ref={ref}
                    value={value}
                    className={cn(
                        /* Базовые стили из твоего макета */
                        "font-open-sans text-[20px] placeholder:text-inactive-input w-full h-14 bg-white",
                        "border-2 border-inactive-input rounded-[20px] pr-4 outline-none transition-all duration-200",
                        "text-footer-text",
                        /* Если есть иконка, добавляем отступ слева */
                        Icon ? "pl-12" : "pl-4",
                        /* Состояние фокуса */
                        "focus:border-footer-text focus:border-2",
                        className
                    )}
                    {...props}
                />
            </div>
        )
    }
)

AppInput.displayName = "AppInput"